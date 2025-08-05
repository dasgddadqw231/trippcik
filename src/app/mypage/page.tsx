import { BottomNav } from '@/components/layout/BottomNav'
import { TopHeader } from '@/components/layout/TopHeader'
import Link from 'next/link'

export default function MyPage() {
  return (
    <>
      <TopHeader title="My Page" showBack={false} hasNotifications={true} />
      
      <div className="page-content">
        {/* User Profile Section */}
        <div className="px-4 mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              <div className="flex-1">
                <h2 className="font-bold text-lg text-gray-900">Kim Travel</h2>
                <p className="text-sm text-gray-500">VIP Member</p>
              </div>
              <Link href="/mypage/profile" className="btn-outline text-sm py-1 px-3">Edit Profile</Link>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <Link href="/orders" className="text-center hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <p className="font-bold text-lg text-primary-600">12</p>
                <p className="text-xs text-gray-500">Orders</p>
              </Link>
              <Link href="/mypage/wishlist" className="text-center hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <p className="font-bold text-lg text-primary-600">24</p>
                <p className="text-xs text-gray-500">Wishlist</p>
              </Link>
              <Link href="/mypage/points" className="text-center hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <p className="font-bold text-lg text-primary-600">5,000</p>
                <p className="text-xs text-gray-500">Points</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4 mb-6">
          <div className="grid grid-cols-4 gap-4">
            <Link href="/orders" className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-700">Order History</span>
            </Link>
            
            <Link href="/mypage/wishlist" className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-700">Wishlist</span>
            </Link>
            
            <Link href="/mypage/points" className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-700">Points</span>
            </Link>
            
            <button className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-700">Coupons</span>
            </button>
          </div>
        </div>

        {/* Menu List */}
        <div className="space-y-2">
          {/* Shopping */}
          <div className="bg-white">
            <div className="px-4 py-3 border-b border-gray-100">
              <h3 className="font-medium text-gray-700 text-sm">Shopping</h3>
            </div>
            <div className="space-y-0">
              <Link href="/orders" className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50">
                <span className="text-sm text-gray-700">Order History</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50">
                <span className="text-sm text-gray-700">Cancel/Return/Exchange</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <Link href="/mypage/wishlist" className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50">
                <span className="text-sm text-gray-700">Wishlist</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/mypage/recent" className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50">
                <span className="text-sm text-gray-700">Recently Viewed</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white">
            <div className="px-4 py-3 border-b border-gray-100">
              <h3 className="font-medium text-gray-700 text-sm">Benefits</h3>
            </div>
            <div className="space-y-0">
              <Link href="/mypage/points" className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50">
                <span className="text-sm text-gray-700">Points</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-primary-600 font-medium">5,000P</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50">
                <span className="text-sm text-gray-700">Coupons</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-primary-600 font-medium">3 coupons</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
              <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50">
                <span className="text-sm text-gray-700">Membership</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-primary-600 font-medium">VIP</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Settings */}
          <div className="bg-white">
            <div className="px-4 py-3 border-b border-gray-100">
              <h3 className="font-medium text-gray-700 text-sm">Settings</h3>
            </div>
            <div className="space-y-0">
              <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50">
                <span className="text-sm text-gray-700">Notification Settings</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50">
                <span className="text-sm text-gray-700">Address Management</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50">
                <span className="text-sm text-gray-700">Account Management</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Support */}
          <div className="bg-white">
            <div className="px-4 py-3 border-b border-gray-100">
              <h3 className="font-medium text-gray-700 text-sm">Customer Service</h3>
            </div>
            <div className="space-y-0">
              <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50">
                <span className="text-sm text-gray-700">Announcements</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50">
                <span className="text-sm text-gray-700">FAQ</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50">
                <span className="text-sm text-gray-700">1:1 Inquiry</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50">
                <span className="text-sm text-gray-700">Terms of Service</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Logout */}
          <div className="px-4 py-6">
            <button className="w-full py-3 text-center text-sm text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-50">
              Logout
            </button>
          </div>
        </div>
      </div>

      <BottomNav />
    </>
  )
}