import { TopHeader } from '@/components/layout/TopHeader'
import { BottomNav } from '@/components/layout/BottomNav'

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: 'order',
      title: 'Your order has been shipped',
      message: 'Your Chanel No.5 perfume order has started shipping. Tracking number: 1234567890',
      time: '2024-08-03 14:30',
      isRead: false,
      icon: '📦'
    },
    {
      id: 2,
      type: 'promotion',
      title: '🎉 Special Sale Started!',
      message: 'Up to 30% off on Gucci bags! Don\'t miss this opportunity.',
      time: '2024-08-03 10:15',
      isRead: false,
      icon: '🏷️'
    },
    {
      id: 3,
      type: 'point',
      title: 'Points Earned',
      message: '200 points have been earned for writing a review.',
      time: '2024-08-02 16:45',
      isRead: true,
      icon: '💰'
    },
    {
      id: 4,
      type: 'wishlist',
      title: 'Wishlist Item Restocked',
      message: 'Nike Air Max is back in stock. Check it out now!',
      time: '2024-08-02 09:20',
      isRead: true,
      icon: '💝'
    },
    {
      id: 5,
      type: 'system',
      title: 'Privacy Policy Update Notice',
      message: 'Updated privacy policy will be applied from August 1, 2024.',
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
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    
    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays}d ago`
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
      case 'order': return 'Order'
      case 'promotion': return 'Event'
      case 'point': return 'Points'
      case 'wishlist': return 'Wishlist'
      case 'system': return 'System'
      default: return 'Notification'
    }
  }

  return (
    <>
      <TopHeader title="Notifications" showBack={true} />
      
      <div className="page-content px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">Notifications</h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">
              {unreadCount > 0 && `${unreadCount} new notifications`}
            </span>
            <button className="text-sm text-primary-600 hover:underline">
              Mark all read
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
                      <button className="btn-secondary text-xs px-3 py-2">Track Order</button>
                      <button className="btn-primary text-xs px-3 py-2">Order Details</button>
                    </div>
                  </div>
                )}

                {notification.type === 'promotion' && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <button className="btn-primary text-xs px-3 py-2 w-full">View Sale Items</button>
                  </div>
                )}

                {notification.type === 'wishlist' && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <button className="btn-primary text-xs px-3 py-2 w-full">View Product</button>
                  </div>
                )}
              </div>
            ))}

            {/* Load More */}
            <div className="text-center pt-6">
              <button className="btn-secondary px-6 py-3">Load More</button>
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
            <h3 className="font-medium text-gray-900 mb-2">No new notifications</h3>
            <p className="text-sm text-gray-500">We'll notify you when there's new updates</p>
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
              <h4 className="font-medium text-blue-900 text-sm mb-1">Notification Settings</h4>
              <p className="text-blue-700 text-xs mb-3">
                Choose which notifications you want to receive. You can change these settings anytime.
              </p>
              <button className="btn-primary text-xs px-4 py-2">
                Manage Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </>
  )
}