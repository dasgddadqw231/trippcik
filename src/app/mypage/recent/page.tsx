import { TopHeader } from '@/components/layout/TopHeader'
import { BottomNav } from '@/components/layout/BottomNav'
import Link from 'next/link'

export default function RecentViewPage() {
  const recentItems = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      brand: 'Apple',
      price: 1350000,
      image: '/placeholder-product.jpg',
      viewedAt: '2024-08-03 14:30'
    },
    {
      id: 2,
      name: 'Chanel No.5 Perfume',
      brand: 'Chanel',
      price: 185000,
      originalPrice: 210000,
      image: '/placeholder-product.jpg',
      viewedAt: '2024-08-03 12:15'
    },
    {
      id: 3,
      name: 'Gucci Marmont Bag',
      brand: 'Gucci',
      price: 1250000,
      image: '/placeholder-product.jpg',
      viewedAt: '2024-08-02 16:45'
    },
    {
      id: 4,
      name: 'Nike Air Max',
      brand: 'Nike',
      price: 139000,
      originalPrice: 169000,
      image: '/placeholder-product.jpg',
      viewedAt: '2024-08-02 10:20'
    },
    {
      id: 5,
      name: 'Travel Suitcase',
      brand: 'Samsonite',
      price: 320000,
      image: '/placeholder-product.jpg',
      viewedAt: '2024-08-01 15:30'
    }
  ]

  const getTimeAgo = (dateString: string) => {
    const now = new Date()
    const viewed = new Date(dateString)
    const diffInHours = Math.floor((now.getTime() - viewed.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`
    
    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`
  }

  return (
    <>
      <TopHeader title="Recently Viewed" showBack={true} />
      
      <div className="page-content px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">Recently Viewed</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">{recentItems.length}개</span>
            <button className="text-sm text-red-500 hover:underline">전체 삭제</button>
          </div>
        </div>

        {/* Recent Items */}
        {recentItems.length > 0 ? (
          <div className="space-y-4">
            {recentItems.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <span className="text-gray-400 text-xs text-center">{item.name}</span>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-500 mb-1">{item.brand}</p>
                    <h3 className="font-medium text-gray-900 mb-2 truncate">{item.name}</h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-primary-600">
                        {item.price.toLocaleString()}원
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          {item.originalPrice.toLocaleString()}원
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-gray-400">{getTimeAgo(item.viewedAt)}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2">
                    <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <Link href="/shop" className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Info */}
            <div className="bg-blue-50 p-4 rounded-lg mt-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-medium text-blue-900 text-sm mb-1">최근 본 상품 안내</h4>
                  <p className="text-blue-700 text-xs leading-relaxed">
                    • 최근 본 상품은 최대 100개까지 저장됩니다<br/>
                    • 30일 후 자동으로 삭제됩니다<br/>
                    • 로그인 시에만 이용 가능합니다
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-900 mb-2">최근 본 상품이 없어요</h3>
            <p className="text-sm text-gray-500 mb-6">상품을 둘러보고 찾던 상품을 쉽게 찾아보세요</p>
            <Link href="/shop" className="btn-primary px-6 py-3">
              상품 둘러보기
            </Link>
          </div>
        )}
      </div>

      <BottomNav />
    </>
  )
}