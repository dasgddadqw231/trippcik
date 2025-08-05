import { supabase } from '@/lib/supabase'
import { Order, OrderWithItems, Address } from '@/types/database'
import { CartService } from './cart'

export interface CreateOrderData {
  userId: string
  shippingAddress: Address
  billingAddress?: Address
  paymentMethod: string
  notes?: string
  couponCode?: string
}

export class OrderService {
  // 주문 생성
  static async createOrder(orderData: CreateOrderData) {
    try {
      // 1. 장바구니 상품 확인
      const { data: cartItems, error: cartError } = await CartService.getCartItems(orderData.userId)
      if (cartError) throw cartError
      if (!cartItems || cartItems.length === 0) {
        throw new Error('장바구니가 비어있습니다.')
      }

      // 2. 재고 확인
      const { data: stockCheck, error: stockError } = await CartService.checkStock(orderData.userId)
      if (stockError) throw stockError
      if (!stockCheck?.isAvailable) {
        throw new Error('재고가 부족한 상품이 있습니다.')
      }

      // 3. 주문 총액 계산
      const { data: cartTotal, error: totalError } = await CartService.getCartTotal(orderData.userId)
      if (totalError) throw totalError
      if (!cartTotal) throw new Error('주문 금액을 계산할 수 없습니다.')

      // 4. 주문 번호 생성
      const { data: orderNumber, error: orderNumberError } = await supabase
        .rpc('generate_order_number')

      if (orderNumberError) throw orderNumberError

      // 5. 주문 생성
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          user_id: orderData.userId,
          order_number: orderNumber,
          total_amount: cartTotal.total,
          discount_amount: cartTotal.discount,
          shipping_fee: cartTotal.shipping,
          tax_amount: cartTotal.tax,
          payment_method: orderData.paymentMethod,
          shipping_address: orderData.shippingAddress,
          billing_address: orderData.billingAddress || orderData.shippingAddress,
          notes: orderData.notes,
        })
        .select()
        .single()

      if (orderError) throw orderError

      // 6. 주문 상품 생성
      const orderItems = cartItems.map(item => ({
        order_id: order.id,
        product_id: item.product_id,
        product_name: item.products?.name || '',
        quantity: item.quantity,
        unit_price: item.products?.discount_price || item.products?.price || 0,
        total_price: (item.products?.discount_price || item.products?.price || 0) * item.quantity,
      }))

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems)

      if (itemsError) throw itemsError

      // 7. 재고 업데이트
      for (const item of cartItems) {
        if (item.products) {
          const newStock = item.products.stock_quantity - item.quantity
          await supabase
            .from('products')
            .update({ stock_quantity: newStock })
            .eq('id', item.product_id)
        }
      }

      // 8. 장바구니 비우기
      await CartService.clearCart(orderData.userId)

      return { data: order, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 사용자 주문 목록 조회
  static async getUserOrders(userId: string, page = 1, limit = 10) {
    try {
      const from = (page - 1) * limit
      const to = from + limit - 1

      const { data, error, count } = await supabase
        .from('orders')
        .select(`
          *,
          order_items (
            *,
            products (
              id,
              name,
              images
            )
          )
        `, { count: 'exact' })
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .range(from, to)

      if (error) throw error

      return {
        data: data as OrderWithItems[],
        count,
        error: null,
        pagination: {
          page,
          limit,
          totalPages: count ? Math.ceil(count / limit) : 0,
        },
      }
    } catch (error) {
      return { data: null, count: 0, error, pagination: null }
    }
  }

  // 주문 상세 조회
  static async getOrder(orderId: string, userId: string) {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          order_items (
            *,
            products (
              id,
              name,
              images,
              price,
              discount_price
            )
          )
        `)
        .eq('id', orderId)
        .eq('user_id', userId)
        .single()

      if (error) throw error
      return { data: data as OrderWithItems, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 주문 상태 업데이트
  static async updateOrderStatus(orderId: string, status: Order['status']) {
    try {
      const { data, error } = await supabase
        .from('orders')
        .update({ status })
        .eq('id', orderId)
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 주문 취소
  static async cancelOrder(orderId: string, userId: string) {
    try {
      // 주문 정보 조회
      const { data: order, error: orderError } = await this.getOrder(orderId, userId)
      if (orderError) throw orderError
      if (!order) throw new Error('주문을 찾을 수 없습니다.')

      // 취소 가능한 상태인지 확인
      if (order.status !== 'pending' && order.status !== 'confirmed') {
        throw new Error('이미 처리 중인 주문은 취소할 수 없습니다.')
      }

      // 주문 상태를 취소로 변경
      const { error: cancelError } = await this.updateOrderStatus(orderId, 'cancelled')
      if (cancelError) throw cancelError

      // 재고 복구
      for (const item of order.order_items) {
        if (item.products && item.product_id) {
          await supabase
            .from('products')
            .update({ 
              stock_quantity: item.products.stock_quantity + item.quantity 
            })
            .eq('id', item.product_id)
        }
      }

      return { error: null }
    } catch (error) {
      return { error }
    }
  }

  // 배송 추적 번호 업데이트
  static async updateTrackingNumber(orderId: string, trackingNumber: string) {
    try {
      const { data, error } = await supabase
        .from('orders')
        .update({ 
          tracking_number: trackingNumber,
          status: 'shipped'
        })
        .eq('id', orderId)
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 주문 통계 조회
  static async getOrderStats(userId: string) {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('status, total_amount')
        .eq('user_id', userId)

      if (error) throw error

      const stats = {
        totalOrders: data?.length || 0,
        totalSpent: data?.reduce((sum, order) => sum + order.total_amount, 0) || 0,
        pendingOrders: data?.filter(order => order.status === 'pending').length || 0,
        completedOrders: data?.filter(order => order.status === 'delivered').length || 0,
      }

      return { data: stats, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }
}