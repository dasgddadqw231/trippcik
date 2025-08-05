export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          name: string | null
          phone: string | null
          address: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          name?: string | null
          phone?: string | null
          address?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string | null
          phone?: string | null
          address?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          image_url: string | null
          is_active: boolean
          sort_order: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          image_url?: string | null
          is_active?: boolean
          sort_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          image_url?: string | null
          is_active?: boolean
          sort_order?: number
          created_at?: string
        }
      }
      products: {
        Row: {
          id: string
          category_id: string | null
          name: string
          description: string | null
          price: number
          discount_price: number | null
          stock_quantity: number
          images: Json
          specifications: Json
          tags: string[] | null
          is_active: boolean
          is_featured: boolean
          sku: string | null
          weight: number | null
          dimensions: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          category_id?: string | null
          name: string
          description?: string | null
          price: number
          discount_price?: number | null
          stock_quantity?: number
          images?: Json
          specifications?: Json
          tags?: string[] | null
          is_active?: boolean
          is_featured?: boolean
          sku?: string | null
          weight?: number | null
          dimensions?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          category_id?: string | null
          name?: string
          description?: string | null
          price?: number
          discount_price?: number | null
          stock_quantity?: number
          images?: Json
          specifications?: Json
          tags?: string[] | null
          is_active?: boolean
          is_featured?: boolean
          sku?: string | null
          weight?: number | null
          dimensions?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      cart_items: {
        Row: {
          id: string
          user_id: string
          product_id: string
          quantity: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          product_id: string
          quantity: number
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          product_id?: string
          quantity?: number
          created_at?: string
        }
      }
      wishlist: {
        Row: {
          id: string
          user_id: string
          product_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          product_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          product_id?: string
          created_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string | null
          order_number: string
          total_amount: number
          discount_amount: number
          shipping_fee: number
          tax_amount: number
          status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded'
          payment_method: string | null
          payment_status: 'pending' | 'paid' | 'failed' | 'refunded'
          shipping_address: Json
          billing_address: Json | null
          tracking_number: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          order_number: string
          total_amount: number
          discount_amount?: number
          shipping_fee?: number
          tax_amount?: number
          status?: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded'
          payment_method?: string | null
          payment_status?: 'pending' | 'paid' | 'failed' | 'refunded'
          shipping_address: Json
          billing_address?: Json | null
          tracking_number?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          order_number?: string
          total_amount?: number
          discount_amount?: number
          shipping_fee?: number
          tax_amount?: number
          status?: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded'
          payment_method?: string | null
          payment_status?: 'pending' | 'paid' | 'failed' | 'refunded'
          shipping_address?: Json
          billing_address?: Json | null
          tracking_number?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string | null
          product_name: string
          quantity: number
          unit_price: number
          total_price: number
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          product_id?: string | null
          product_name: string
          quantity: number
          unit_price: number
          total_price: number
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string | null
          product_name?: string
          quantity?: number
          unit_price?: number
          total_price?: number
          created_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          user_id: string
          product_id: string
          order_id: string | null
          rating: number
          title: string | null
          comment: string | null
          images: Json
          is_verified: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          product_id: string
          order_id?: string | null
          rating: number
          title?: string | null
          comment?: string | null
          images?: Json
          is_verified?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          product_id?: string
          order_id?: string | null
          rating?: number
          title?: string | null
          comment?: string | null
          images?: Json
          is_verified?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      coupons: {
        Row: {
          id: string
          code: string
          name: string
          description: string | null
          discount_type: 'percentage' | 'fixed' | null
          discount_value: number
          min_order_amount: number | null
          max_discount_amount: number | null
          usage_limit: number | null
          used_count: number
          is_active: boolean
          starts_at: string | null
          expires_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          code: string
          name: string
          description?: string | null
          discount_type?: 'percentage' | 'fixed' | null
          discount_value: number
          min_order_amount?: number | null
          max_discount_amount?: number | null
          usage_limit?: number | null
          used_count?: number
          is_active?: boolean
          starts_at?: string | null
          expires_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          code?: string
          name?: string
          description?: string | null
          discount_type?: 'percentage' | 'fixed' | null
          discount_value?: number
          min_order_amount?: number | null
          max_discount_amount?: number | null
          usage_limit?: number | null
          used_count?: number
          is_active?: boolean
          starts_at?: string | null
          expires_at?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_order_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// 헬퍼 타입들
export type Profile = Database['public']['Tables']['profiles']['Row']
export type Category = Database['public']['Tables']['categories']['Row']
export type Product = Database['public']['Tables']['products']['Row']
export type CartItem = Database['public']['Tables']['cart_items']['Row']
export type WishlistItem = Database['public']['Tables']['wishlist']['Row']
export type Order = Database['public']['Tables']['orders']['Row']
export type OrderItem = Database['public']['Tables']['order_items']['Row']
export type Review = Database['public']['Tables']['reviews']['Row']
export type Coupon = Database['public']['Tables']['coupons']['Row']

// 상품 관련 타입들
export interface ProductWithCategory extends Product {
  categories?: Category
}

export interface CartItemWithProduct extends CartItem {
  products: Product
}

export interface OrderWithItems extends Order {
  order_items: (OrderItem & { products: Product | null })[]
}

// 주소 타입
export interface Address {
  name: string
  phone: string
  address: string
  detail_address: string
  postal_code: string
  is_default?: boolean
}