import { TopHeader } from '@/components/layout/TopHeader'
import { BottomNav } from '@/components/layout/BottomNav'

export default function PointsPage() {
  const pointHistory = [
    {
      id: 1,
      type: 'earn',
      amount: 500,
      description: '상품 구매',
      date: '2024-08-03',
      orderId: 'ORD-2024080301'
    },
    {
      id: 2,
      type: 'earn',
      amount: 1000,
      description: '신규 회원 가입',
      date: '2024-08-01',
      orderId: null
    },
    {
      id: 3,
      type: 'use',
      amount: -300,
      description: '포인트 사용',
      date: '2024-07-28',
      orderId: 'ORD-2024072801'
    },
    {
      id: 4,
      type: 'earn',
      amount: 200,
      description: '리뷰 작성',
      date: '2024-07-25',
      orderId: null
    },
    {
      id: 5,
      type: 'expire',
      amount: -100,
      description: '포인트 소멸',
      date: '2024-07-20',
      orderId: null
    }
  ]

  const availablePoints = 5300
  const expiringPoints = 200
  const expiringDate = '2024-09-30'

  return (
    <>
      <TopHeader title="포인트" showBack={true} />
      
      <div className="page-content px-4">
        {/* Points Summary */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 text-white mb-6">
          <div className="text-center">
            <p className="text-primary-100 text-sm mb-1">사용 가능한 포인트</p>
            <h2 className="text-3xl font-bold mb-4">{availablePoints.toLocaleString()}P</h2>
            
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <div className="flex items-center justify-center gap-2 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  {expiringDate}까지 {expiringPoints}P 소멸 예정
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Point Usage Guide */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="font-medium text-blue-900 mb-2">포인트 적립 안내</h3>
          <div className="space-y-1 text-sm text-blue-700">
            <p>• 상품 구매 시 결제 금액의 1% 적립</p>
            <p>• 리뷰 작성 시 200P 적립</p>
            <p>• 추천인 가입 시 1,000P 적립</p>
            <p>• 포인트 유효기간: 적립일로부터 1년</p>
          </div>
        </div>

        {/* Points History */}
        <div>
          <h3 className="font-bold text-lg text-gray-900 mb-4">포인트 내역</h3>
          
          <div className="space-y-3">
            {pointHistory.map((history) => (
              <div key={history.id} className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">{history.description}</span>
                      {history.type === 'earn' && (
                        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">적립</span>
                      )}
                      {history.type === 'use' && (
                        <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">사용</span>
                      )}
                      {history.type === 'expire' && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">소멸</span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{history.date}</span>
                      {history.orderId && (
                        <span>주문번호: {history.orderId}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span className={`font-bold text-lg ${
                      history.type === 'earn' 
                        ? 'text-blue-600' 
                        : history.type === 'use' 
                        ? 'text-red-600' 
                        : 'text-gray-500'
                    }`}>
                      {history.amount > 0 ? '+' : ''}{history.amount.toLocaleString()}P
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-6">
            <button className="btn-secondary px-6 py-3">더 보기</button>
          </div>
        </div>

        {/* Point Usage */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-3">포인트 사용하기</h4>
          <p className="text-sm text-gray-600 mb-4">
            100P부터 사용 가능하며, 상품 구매 시 결제 페이지에서 사용할 수 있습니다.
          </p>
          <button className="btn-primary w-full py-3">쇼핑하러 가기</button>
        </div>
      </div>

      <BottomNav />
    </>
  )
}