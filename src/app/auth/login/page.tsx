'use client'

import { TopHeader } from '@/components/layout/TopHeader'
import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <TopHeader title="로그인" showBack={true} showCart={false} showSettings={false} />
      
      <div className="page-content px-4">
        {/* Logo Section */}
        <div className="text-center mb-8 mt-8">
          <div className="w-20 h-20 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-white">TP</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">TripPick에 오신 것을 환영합니다</h1>
          <p className="text-gray-500">로그인하여 더 많은 혜택을 만나보세요</p>
        </div>

        {/* Login Form */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="form-label">이메일</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력해주세요"
              className="form-input"
            />
          </div>

          <div>
            <label className="form-label">비밀번호</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력해주세요"
                className="form-input pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
              >
                {showPassword ? (
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 text-primary-600" />
              <span className="text-gray-600">자동 로그인</span>
            </label>
            <button className="text-primary-600 hover:underline">
              비밀번호를 잊으셨나요?
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button className="btn-primary w-full py-4 text-lg mb-6">
          로그인
        </button>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">또는</span>
          </div>
        </div>

        {/* Social Login */}
        <div className="space-y-3 mb-8">
          <button className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50">
            <div className="w-5 h-5 bg-yellow-400 rounded"></div>
            <span className="text-gray-700 font-medium">카카오로 계속하기</span>
          </button>
          
          <button className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50">
            <div className="w-5 h-5 bg-green-500 rounded"></div>
            <span className="text-gray-700 font-medium">네이버로 계속하기</span>
          </button>

          <button className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50">
            <div className="w-5 h-5 bg-red-500 rounded"></div>
            <span className="text-gray-700 font-medium">구글로 계속하기</span>
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-gray-600">
            아직 회원이 아니신가요?{' '}
            <Link href="/auth/signup" className="text-primary-600 font-medium hover:underline">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}