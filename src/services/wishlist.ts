import { supabase } from '@/lib/supabase'
import { WishlistItem } from '@/types/database'

export interface WishlistItemWithProduct extends WishlistItem {
  products: {
    id: string
    name: string
    price: number
    discount_price: number | null
    images: any
    stock_quantity: number
    is_active: boolean
  }
}

export class WishlistService {
  // 위시리스트 목록 조회
  static async getWishlistItems(userId: string) {
    try {
      const { data, error } = await supabase
        .from('wishlist')
        .select(`
          *,
          products (
            id,
            name,
            price,
            discount_price,
            images,
            stock_quantity,
            is_active
          )
        `)
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

      if (error) throw error
      
      // 비활성화된 상품 필터링
      const activeItems = data?.filter(item => item.products?.is_active) || []
      
      return { data: activeItems as WishlistItemWithProduct[], error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 위시리스트에 상품 추가
  static async addToWishlist(userId: string, productId: string) {
    try {
      // 이미 위시리스트에 있는지 확인
      const { data: existingItem } = await supabase
        .from('wishlist')
        .select('id')
        .eq('user_id', userId)
        .eq('product_id', productId)
        .single()

      if (existingItem) {
        throw new Error('이미 위시리스트에 추가된 상품입니다.')
      }

      const { data, error } = await supabase
        .from('wishlist')
        .insert({
          user_id: userId,
          product_id: productId,
        })
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 위시리스트에서 상품 제거
  static async removeFromWishlist(userId: string, productId: string) {
    try {
      const { error } = await supabase
        .from('wishlist')
        .delete()
        .eq('user_id', userId)
        .eq('product_id', productId)

      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error }
    }
  }

  // 위시리스트 상품인지 확인
  static async isInWishlist(userId: string, productId: string) {
    try {
      const { data, error } = await supabase
        .from('wishlist')
        .select('id')
        .eq('user_id', userId)
        .eq('product_id', productId)
        .single()

      if (error && error.code !== 'PGRST116') throw error
      return { isInWishlist: !!data, error: null }
    } catch (error) {
      return { isInWishlist: false, error }
    }
  }

  // 위시리스트 상품 개수 조회
  static async getWishlistItemCount(userId: string) {
    try {
      const { count, error } = await supabase
        .from('wishlist')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', userId)

      if (error) throw error
      return { count: count || 0, error: null }
    } catch (error) {
      return { count: 0, error }
    }
  }

  // 위시리스트 전체 비우기
  static async clearWishlist(userId: string) {
    try {
      const { error } = await supabase
        .from('wishlist')
        .delete()
        .eq('user_id', userId)

      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error }
    }
  }

  // 위시리스트 상품을 장바구니로 이동
  static async moveToCart(userId: string, productId: string, quantity: number = 1) {
    try {
      // 장바구니에 추가
      const { data: cartItem, error: cartError } = await supabase
        .from('cart_items')
        .upsert({
          user_id: userId,
          product_id: productId,
          quantity,
        })
        .select()
        .single()

      if (cartError) throw cartError

      // 위시리스트에서 제거
      const { error: removeError } = await this.removeFromWishlist(userId, productId)
      if (removeError) throw removeError

      return { data: cartItem, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 위시리스트 상품들을 모두 장바구니로 이동
  static async moveAllToCart(userId: string) {
    try {
      const { data: wishlistItems, error: wishlistError } = await this.getWishlistItems(userId)
      if (wishlistError) throw wishlistError
      if (!wishlistItems || wishlistItems.length === 0) {
        throw new Error('위시리스트가 비어있습니다.')
      }

      // 재고가 있는 상품들만 필터링
      const availableItems = wishlistItems.filter(
        item => item.products && item.products.stock_quantity > 0
      )

      if (availableItems.length === 0) {
        throw new Error('재고가 있는 상품이 없습니다.')
      }

      // 장바구니에 추가
      const cartItems = availableItems.map(item => ({
        user_id: userId,
        product_id: item.product_id,
        quantity: 1,
      }))

      const { error: cartError } = await supabase
        .from('cart_items')
        .upsert(cartItems)

      if (cartError) throw cartError

      // 위시리스트 비우기
      const { error: clearError } = await this.clearWishlist(userId)
      if (clearError) throw clearError

      return { 
        data: { 
          movedCount: availableItems.length,
          totalCount: wishlistItems.length 
        }, 
        error: null 
      }
    } catch (error) {
      return { data: null, error }
    }
  }
}