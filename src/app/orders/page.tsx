import { TopHeader } from '@/components/layout/TopHeader'
import Link from 'next/link'

export default function OrdersPage() {
  const orders = [
    {
      id: '20240801001',
      date: '2024.08.01',
      status: '배송완료',
      statusColor: 'text-green-600',
      items: [
        { name: '삼소나이트 캐리어 24인치', option: '블랙', price: 189000, quantity: 1 },
        { name: '여행용 파우치 세트', option: '그레이', price: 45000, quantity: 2 }
      ],
      total: 279000
    },
    {
      id: '20240725002',
      date: '2024.07.25',
      status: '배송중',
      statusColor: 'text-blue-600',
      items: [
        { name: '무인양품 여행용 슬리퍼', option: '화이트, 260mm', price: 29000, quantity: 1 }
      ],
      total: 29000
    },
    {
      id: '20240720003',
      date: '2024.07.20',
      status: '주문완료',
      statusColor: 'text-primary-600',
      items: [
        { name: '아이패드 케이스', option: '네이비', price: 65000, quantity: 1 },
        { name: '휴대용 충전기', option: '10000mAh', price: 35000, quantity: 1 }
      ],
      total: 100000
    }
  ]

  return (
    <>
      <TopHeader title="주문내역" showBack={true} showCart={false} showSettings={false} />
      
      <div className="page-content px-4">
        {/* Filter Tabs */}
        <div className="mb-6">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            <button className="category-tab active">전체</button>
            <button className="category-tab">주문완료</button>
            <button className="category-tab">배송중</button>
            <button className="category-tab">배송완료</button>
          </div>
        </div>

        {/* Order List */}
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {/* Order Header */}
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">
                    주문번호: {order.id}
                  </span>
                  <span className={`text-sm font-medium ${order.statusColor}`}>
                    {order.status}
                  </span>
                </div>
                <span className="text-xs text-gray-500">{order.date}</span>
              </div>

              {/* Order Items */}
              <div className="p-4">
                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm mb-1">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-500 mb-1">
                          {item.option}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            수량: {item.quantity}개
                          </span>
                          <span className="font-bold text-primary-600 text-sm">
                            {item.price.toLocaleString()}원
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total Price */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">총 결제금액</span>
                    <span className="font-bold text-lg text-primary-600">
                      {order.total.toLocaleString()}원
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex gap-2">
                  {order.status === '배송완료' && (
                    <>
                      <button className="btn-outline flex-1 py-2 text-sm">
                        리뷰 작성
                      </button>
                      <button className="btn-outline flex-1 py-2 text-sm">
                        재주문
                      </button>
                    </>
                  )}
                  {order.status === '배송중' && (
                    <button className="btn-outline flex-1 py-2 text-sm">
                      배송 추적
                    </button>
                  )}
                  {order.status === '주문완료' && (
                    <button className="btn-outline flex-1 py-2 text-sm">
                      주문 취소
                    </button>
                  )}
                  <button className="btn-secondary px-4 py-2 text-sm">
                    상세보기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {orders.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-900 mb-2">주문 내역이 없습니다</h3>
            <p className="text-sm text-gray-500 mb-4">
              TripPick에서 원하는 여행용품을 찾아보세요
            </p>
            <Link href="/shop" className="btn-primary px-6 py-2">
              쇼핑하러 가기
            </Link>
          </div>
        )}

        {/* Load More */}
        {orders.length > 0 && (
          <div className="text-center py-6">
            <button className="btn-outline px-6 py-3">
              더 많은 주문 내역 보기
            </button>
          </div>
        )}
      </div>
    </>
  )
}