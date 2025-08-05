import { supabase } from '@/lib/supabase'
import { Product, ProductWithCategory, Category } from '@/types/database'

export interface ProductFilters {
  categoryId?: string
  minPrice?: number
  maxPrice?: number
  search?: string
  featured?: boolean
  tags?: string[]
}

export interface ProductSortOptions {
  field: 'created_at' | 'price' | 'name'
  direction: 'asc' | 'desc'
}

export class ProductService {
  // 모든 상품 조회 (필터링 및 정렬 지원)
  static async getProducts(
    filters: ProductFilters = {},
    sort: ProductSortOptions = { field: 'created_at', direction: 'desc' },
    page = 1,
    limit = 20
  ) {
    try {
      let query = supabase
        .from('products')
        .select(`
          *,
          categories (
            id,
            name,
            slug
          )
        `)
        .eq('is_active', true)

      // 필터 적용
      if (filters.categoryId) {
        query = query.eq('category_id', filters.categoryId)
      }

      if (filters.minPrice !== undefined) {
        query = query.gte('price', filters.minPrice)
      }

      if (filters.maxPrice !== undefined) {
        query = query.lte('price', filters.maxPrice)
      }

      if (filters.search) {
        query = query.or(`name.ilike.%${filters.search}%,description.ilike.%${filters.search}%`)
      }

      if (filters.featured) {
        query = query.eq('is_featured', true)
      }

      if (filters.tags && filters.tags.length > 0) {
        query = query.overlaps('tags', filters.tags)
      }

      // 정렬 적용
      query = query.order(sort.field, { ascending: sort.direction === 'asc' })

      // 페이지네이션 적용
      const from = (page - 1) * limit
      const to = from + limit - 1
      query = query.range(from, to)

      const { data, error, count } = await query

      if (error) throw error

      return {
        data: data as ProductWithCategory[],
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

  // 단일 상품 조회
  static async getProduct(id: string) {
    try {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          categories (
            id,
            name,
            slug
          )
        `)
        .eq('id', id)
        .eq('is_active', true)
        .single()

      if (error) throw error
      return { data: data as ProductWithCategory, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 추천 상품 조회
  static async getFeaturedProducts(limit = 8) {
    try {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          categories (
            id,
            name,
            slug
          )
        `)
        .eq('is_active', true)
        .eq('is_featured', true)
        .order('created_at', { ascending: false })
        .limit(limit)

      if (error) throw error
      return { data: data as ProductWithCategory[], error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 카테고리별 상품 조회
  static async getProductsByCategory(categorySlug: string, limit = 20) {
    try {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          categories!inner (
            id,
            name,
            slug
          )
        `)
        .eq('is_active', true)
        .eq('categories.slug', categorySlug)
        .eq('categories.is_active', true)
        .order('created_at', { ascending: false })
        .limit(limit)

      if (error) throw error
      return { data: data as ProductWithCategory[], error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 관련 상품 조회
  static async getRelatedProducts(productId: string, categoryId: string, limit = 4) {
    try {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          categories (
            id,
            name,
            slug
          )
        `)
        .eq('is_active', true)
        .eq('category_id', categoryId)
        .neq('id', productId)
        .order('created_at', { ascending: false })
        .limit(limit)

      if (error) throw error
      return { data: data as ProductWithCategory[], error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 상품 검색
  static async searchProducts(query: string, limit = 20) {
    try {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          categories (
            id,
            name,
            slug
          )
        `)
        .eq('is_active', true)
        .or(`name.ilike.%${query}%,description.ilike.%${query}%,tags.cs.{${query}}`)
        .order('created_at', { ascending: false })
        .limit(limit)

      if (error) throw error
      return { data: data as ProductWithCategory[], error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 카테고리 목록 조회
  static async getCategories() {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', { ascending: true })

      if (error) throw error
      return { data: data as Category[], error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 상품 리뷰 조회
  static async getProductReviews(productId: string, limit = 10) {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select(`
          *,
          profiles (
            name,
            avatar_url
          )
        `)
        .eq('product_id', productId)
        .order('created_at', { ascending: false })
        .limit(limit)

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // 상품 평균 평점 조회
  static async getProductRating(productId: string) {
    try {
      const { data, error } = await supabase
        .rpc('get_product_rating', { product_id: productId })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }
}