'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function AuthCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error('Auth callback error:', error)
          router.push('/auth/login?error=callback_failed')
          return
        }

        if (data.session) {
          // 로그인 성공 - 홈으로 리다이렉트
          router.push('/')
        } else {
          // 세션이 없는 경우 로그인 페이지로
          router.push('/auth/login')
        }
      } catch (error) {
        console.error('Unexpected error:', error)
        router.push('/auth/login?error=unexpected')
      }
    }

    handleAuthCallback()
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
        <h2 className="text-lg font-medium text-gray-900 mb-2">Signing you in...</h2>
        <p className="text-gray-500">Please wait while we complete your authentication.</p>
      </div>
    </div>
  )
}