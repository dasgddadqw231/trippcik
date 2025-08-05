'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface TopHeaderProps {
  title: string
  showBack?: boolean
  showCart?: boolean
  showNotifications?: boolean
  showSettings?: boolean
  hasNotifications?: boolean
  onBack?: () => void
  onCart?: () => void
  onNotifications?: () => void
  onSettings?: () => void
}

export function TopHeader({ 
  title, 
  showBack = false, 
  showCart = true, 
  showNotifications = true,
  showSettings = true,
  hasNotifications = false,
  onBack,
  onCart,
  onNotifications,
  onSettings 
}: TopHeaderProps) {
  const router = useRouter()

  const handleBack = () => {
    if (onBack) {
      onBack()
    } else {
      router.back()
    }
  }

  const handleCart = () => {
    if (onCart) {
      onCart()
    } else {
      router.push('/cart')
    }
  }

  const handleNotifications = () => {
    if (onNotifications) {
      onNotifications()
    } else {
      router.push('/notifications')
    }
  }

  const handleSettings = () => {
    if (onSettings) {
      onSettings()
    } else {
      router.push('/settings')
    }
  }
  return (
    <header className="top-header">
      <div className="flex items-center gap-3">
        {showBack && (
          <button onClick={handleBack} className="p-1">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <h1 className="font-bold text-lg text-gray-900">{title}</h1>
      </div>
      
      <div className="flex items-center gap-2">
        {showCart && (
          <button onClick={handleCart} className="p-2 relative hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 17a2 2 0 11-4 0 2 2 0 014 0zM9 17a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>
        )}

        {showNotifications && (
          <button onClick={handleNotifications} className="p-2 relative hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM5 12V7a5 5 0 1110 0v5a2 2 0 01-2 2H7a2 2 0 01-2-2z" />
            </svg>
            {hasNotifications && (
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            )}
          </button>
        )}
        
        {showSettings && (
          <button onClick={handleSettings} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        )}
      </div>
    </header>
  )
}