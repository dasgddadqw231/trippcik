import { TopHeader } from '@/components/layout/TopHeader'
import Link from 'next/link'

export default function SettingsPage() {
  return (
    <>
      <TopHeader title="Settings" showBack={true} showCart={false} showSettings={false} />
      
      <div className="page-content">
        {/* Account Settings */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">Account</h3>
          </div>
          <div className="space-y-0">
            <Link href="/settings/profile" className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 block">
              <span className="text-sm text-gray-700">Edit Profile</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/settings/password" className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 block">
              <span className="text-sm text-gray-700">Change Password</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/settings/address" className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 block">
              <span className="text-sm text-gray-700">Address Management</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">Notifications</h3>
          </div>
          <div className="space-y-0">
            <div className="px-4 py-4 flex items-center justify-between">
              <span className="text-sm text-gray-700">Push Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
            <div className="px-4 py-4 flex items-center justify-between">
              <span className="text-sm text-gray-700">Order Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
            <div className="px-4 py-4 flex items-center justify-between">
              <span className="text-sm text-gray-700">Marketing Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* App Settings */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">App Settings</h3>
          </div>
          <div className="space-y-0">
            <Link href="/settings/language" className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 block">
              <span className="text-sm text-gray-700">Language Settings</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">English</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
            <Link href="/settings/currency" className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 block">
              <span className="text-sm text-gray-700">Currency Unit</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">KRW (₩)</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">Privacy & Security</h3>
          </div>
          <div className="space-y-0">
            <Link href="/settings/privacy" className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 block">
              <span className="text-sm text-gray-700">Privacy Policy</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/settings/terms" className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 block">
              <span className="text-sm text-gray-700">Terms of Service</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* App Info */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">App Info</h3>
          </div>
          <div className="space-y-0">
            <div className="px-4 py-4 flex items-center justify-between">
              <span className="text-sm text-gray-700">Version</span>
              <span className="text-sm text-gray-500">1.0.0</span>
            </div>
            <Link href="/settings/update" className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 block">
              <span className="text-sm text-gray-700">Check for Updates</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/settings/license" className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 block">
              <span className="text-sm text-gray-700">Open Source License</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Support */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">Support</h3>
          </div>
          <div className="space-y-0">
            <Link href="/settings/support" className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 block">
              <span className="text-sm text-gray-700">Customer Service</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/settings/feedback" className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 block">
              <span className="text-sm text-gray-700">Send Feedback</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/settings/rating" className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 block">
              <span className="text-sm text-gray-700">Rate App</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Account Actions */}
        <div className="px-4 py-6 space-y-3">
          <button className="w-full py-3 text-center text-sm text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-50">
            Logout
          </button>
          <button className="w-full py-3 text-center text-sm text-red-600 border border-red-300 rounded-lg hover:bg-red-50">
            Delete Account
          </button>
        </div>
      </div>
    </>
  )
}