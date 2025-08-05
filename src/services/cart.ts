import { supabase } from '@/lib/supabase'
import { CartItem, CartItemWithProduct } from '@/types/database'

export class CartService {
  // 장바구니 상품 목록 조회
  static async getCartItems(userId: string) {
    try {
      const { data, error } = await supabase
        .from('cart_items')
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
      
      return { data: activeItems as CartItemWithProduct[], error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 장바구니에 상품 추가
  static async addToCart(userId: string, productId: string, quantity: number = 1) {
    try {
      // 이미 장바구니에 있는 상품인지 확인
      const { data: existingItem } = await supabase
        .from('cart_items')
        .select('id, quantity')
        .eq('user_id', userId)
        .eq('product_id', productId)
        .single()

      if (existingItem) {
        // 기존 상품의 수량 업데이트
        const { data, error } = await supabase
          .from('cart_items')
          .update({ quantity: existingItem.quantity + quantity })
          .eq('id', existingItem.id)
          .select()
          .single()

        if (error) throw error
        return { data, error: null }
      } else {
        // 새 상품 추가
        const { data, error } = await supabase
          .from('cart_items')
          .insert({
            user_id: userId,
            product_id: productId,
            quantity,
          })
          .select()
          .single()

        if (error) throw error
        return { data, error: null }
      }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 장바구니 상품 수량 업데이트
  static async updateCartItemQuantity(cartItemId: string, quantity: number) {
    try {
      if (quantity <= 0) {
        return this.removeFromCart(cartItemId)
      }

      const { data, error } = await supabase
        .from('cart_items')
        .update({ quantity })
        .eq('id', cartItemId)
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 장바구니에서 상품 제거
  static async removeFromCart(cartItemId: string) {
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', cartItemId)

      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error }
    }
  }

  // 장바구니 비우기
  static async clearCart(userId: string) {
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', userId)

      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error }
    }
  }

  // 장바구니 상품 개수 조회
  static async getCartItemCount(userId: string) {
    try {
      const { count, error } = await supabase
        .from('cart_items')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', userId)

      if (error) throw error
      return { count: count || 0, error: null }
    } catch (error) {
      return { count: 0, error }
    }
  }

  // 장바구니 총 금액 계산
  static async getCartTotal(userId: string) {
    try {
      const { data: cartItems, error } = await this.getCartItems(userId)
      
      if (error) throw error

      let subtotal = 0
      let discountTotal = 0

      cartItems?.forEach(item => {
        const product = item.products
        if (product) {
          const price = product.discount_price || product.price
          const originalPrice = product.price
          
          subtotal += originalPrice * item.quantity
          discountTotal += price * item.quantity
        }
      })

      const discount = subtotal - discountTotal
      const tax = discountTotal * 0.1 // 10% 세금
      const shipping = discountTotal >= 50000 ? 0 : 3000 // 5만원 이상 무료배송
      const total = discountTotal + tax + shipping

      return {
        data: {
          subtotal,
          discount,
          tax,
          shipping,
          total,
          itemCount: cartItems?.length || 0,
        },
        error: null,
      }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 재고 확인
  static async checkStock(userId: string) {
    try {
      const { data: cartItems, error } = await this.getCartItems(userId)
      
      if (error) throw error

      const outOfStockItems = cartItems?.filter(item => {
        const product = item.products
        return product && product.stock_quantity < item.quantity
      }) || []

      return {
        data: {
          isAvailable: outOfStockItems.length === 0,
          outOfStockItems,
        },
        error: null,
      }
    } catch (error) {
      return { data: null, error }
    }
  }
}