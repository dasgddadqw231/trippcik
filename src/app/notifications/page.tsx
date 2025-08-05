import { TopHeader } from '@/components/layout/TopHeader'
import { BottomNav } from '@/components/layout/BottomNav'

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: 'order',
      title: 'Your order has been shipped',
      message: '샤넬 No.5 향수 주문이 배송을 시작했습니다. 택배 번호: 1234567890',
      time: '2024-08-03 14:30',
      isRead: false,
      icon: '📦'
    },
    {
      id: 2,
      type: 'promotion',
      title: '🎉 특가 세일 시작!',
      message: '구찌 가방 최대 30% 할인! 놓치면 후회할 기회입니다.',
      time: '2024-08-03 10:15',
      isRead: false,
      icon: '🏷️'
    },
    {
      id: 3,
      type: 'point',
      title: '포인트 적립 완료',
      message: '리뷰 작성으로 200P가 적립되었습니다.',
      time: '2024-08-02 16:45',
      isRead: true,
      icon: '💰'
    },
    {
      id: 4,
      type: 'wishlist',
      title: '찜한 상품 재입고',
      message: '나이키 에어맥스가 재입고되었습니다. 지금 확인해보세요!',
      time: '2024-08-02 09:20',
      isRead: true,
      icon: '💝'
    },
    {
      id: 5,
      type: 'system',
      title: '개인정보 처리방침 변경 안내',
      message: '2024년 8월 1일부터 변경된 개인정보 처리방침이 적용됩니다.',
      time: '2024-08-01 12:00',
      isRead: true,
      icon: '📄'
    }
  ]

  const unreadCount = notifications.filter(n => !n.isRead).length

  const getTimeAgo = (dateString: string) => {
    const now = new Date()
    const notificationTime = new Date(dateString)
    const diffInHours = Math.floor((now.getTime() - notificationTime.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return '방금 전'
    if (diffInHours < 24) return `${diffInHours}시간 전`
    
    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays}일 전`
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'order': return 'bg-blue-100 text-blue-600'
      case 'promotion': return 'bg-red-100 text-red-600'
      case 'point': return 'bg-green-100 text-green-600'
      case 'wishlist': return 'bg-pink-100 text-pink-600'
      case 'system': return 'bg-gray-100 text-gray-600'
      default: return 'bg-gray-100 text-gray-600'
    }
  }

  const getTypeName = (type: string) => {
    switch (type) {
      case 'order': return '주문'
      case 'promotion': return '이벤트'
      case 'point': return '포인트'
      case 'wishlist': return '찜'
      case 'system': return '시스템'
      default: return '알림'
    }
  }

  return (
    <>
      <TopHeader title="알림" showBack={true} />
      
      <div className="page-content px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">알림</h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">
              {unreadCount > 0 && `${unreadCount}개의 새 알림`}
            </span>
            <button className="text-sm text-primary-600 hover:underline">
              모두 읽음
            </button>
          </div>
        </div>

        {/* Notifications */}
        {notifications.length > 0 ? (
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`bg-white border rounded-xl p-4 hover:shadow-md transition-shadow ${
                  notification.isRead ? 'border-gray-200' : 'border-primary-200 bg-primary-25'
                }`}
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                      {notification.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className={`font-medium text-gray-900 ${!notification.isRead ? 'font-bold' : ''}`}>
                        {notification.title}
                      </h3>
                      <div className="flex items-center gap-2 ml-3">
                        <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(notification.type)}`}>
                          {getTypeName(notification.type)}
                        </span>
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                      {notification.message}
                    </p>
                    
                    <p className="text-xs text-gray-400">
                      {getTimeAgo(notification.time)}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                {notification.type === 'order' && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex gap-2">
                      <button className="btn-secondary text-xs px-3 py-2">배송 조회</button>
                      <button className="btn-primary text-xs px-3 py-2">주문 상세</button>
                    </div>
                  </div>
                )}

                {notification.type === 'promotion' && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <button className="btn-primary text-xs px-3 py-2 w-full">특가 상품 보러가기</button>
                  </div>
                )}

                {notification.type === 'wishlist' && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <button className="btn-primary text-xs px-3 py-2 w-full">상품 확인하기</button>
                  </div>
                )}
              </div>
            ))}

            {/* Load More */}
            <div className="text-center pt-6">
              <button className="btn-secondary px-6 py-3">더 보기</button>
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM5 12V7a5 5 0 1110 0v5a2 2 0 01-2 2H7a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-900 mb-2">새로운 알림이 없어요</h3>
            <p className="text-sm text-gray-500">새로운 소식이 있으면 알려드릴게요</p>
          </div>
        )}

        {/* Notification Settings */}
        <div className="mt-8 bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <h4 className="font-medium text-blue-900 text-sm mb-1">알림 설정</h4>
              <p className="text-blue-700 text-xs mb-3">
                원하는 알림만 받아보세요. 언제든지 설정을 변경할 수 있습니다.
              </p>
              <button className="btn-primary text-xs px-4 py-2">
                알림 설정하기
              </button>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </>
  )
}