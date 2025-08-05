'use client'

import { TopHeader } from '@/components/layout/TopHeader'
import { useState } from 'react'
import Link from 'next/link'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <>
      <TopHeader title="회원가입" showBack={true} showCart={false} showSettings={false} />
      
      <div className="page-content px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">TripPick 회원가입</h1>
          <p className="text-gray-500">여행용품 쇼핑의 새로운 경험을 시작하세요</p>
        </div>

        {/* Form */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="form-label">이름 *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="이름을 입력해주세요"
              className="form-input"
            />
          </div>

          <div>
            <label className="form-label">이메일 *</label>
            <div className="flex gap-2">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="이메일을 입력해주세요"
                className="form-input flex-1"
              />
              <button className="btn-outline px-4 py-2 text-sm whitespace-nowrap">
                중복확인
              </button>
            </div>
          </div>

          <div>
            <label className="form-label">휴대폰 번호 *</label>
            <div className="flex gap-2">
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="010-1234-5678"
                className="form-input flex-1"
              />
              <button className="btn-outline px-4 py-2 text-sm whitespace-nowrap">
                인증요청
              </button>
            </div>
          </div>

          <div>
            <label className="form-label">비밀번호 *</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder="8자 이상 영문, 숫자, 특수문자 조합"
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
            <div className="mt-2 space-y-1 text-xs">
              <div className={`flex items-center gap-2 ${formData.password.length >= 8 ? 'text-green-600' : 'text-gray-400'}`}>
                <div className={`w-1 h-1 rounded-full ${formData.password.length >= 8 ? 'bg-green-600' : 'bg-gray-400'}`}></div>
                <span>8자 이상</span>
              </div>
              <div className={`flex items-center gap-2 ${/[A-Za-z]/.test(formData.password) ? 'text-green-600' : 'text-gray-400'}`}>
                <div className={`w-1 h-1 rounded-full ${/[A-Za-z]/.test(formData.password) ? 'bg-green-600' : 'bg-gray-400'}`}></div>
                <span>영문 포함</span>
              </div>
              <div className={`flex items-center gap-2 ${/[0-9]/.test(formData.password) ? 'text-green-600' : 'text-gray-400'}`}>
                <div className={`w-1 h-1 rounded-full ${/[0-9]/.test(formData.password) ? 'bg-green-600' : 'bg-gray-400'}`}></div>
                <span>숫자 포함</span>
              </div>
              <div className={`flex items-center gap-2 ${/[^A-Za-z0-9]/.test(formData.password) ? 'text-green-600' : 'text-gray-400'}`}>
                <div className={`w-1 h-1 rounded-full ${/[^A-Za-z0-9]/.test(formData.password) ? 'bg-green-600' : 'bg-gray-400'}`}></div>
                <span>특수문자 포함</span>
              </div>
            </div>
          </div>

          <div>
            <label className="form-label">비밀번호 확인 *</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                placeholder="비밀번호를 다시 입력해주세요"
                className="form-input pr-12"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
              >
                {showConfirmPassword ? (
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
            {formData.confirmPassword && formData.password !== formData.confirmPassword && (
              <p className="mt-1 text-xs text-red-500">비밀번호가 일치하지 않습니다</p>
            )}
          </div>
        </div>

        {/* Terms Agreement */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="space-y-3">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                className="w-4 h-4 text-primary-600 mt-0.5"
              />
              <div className="flex-1">
                <span className="text-sm text-gray-700">
                  [필수] 이용약관에 동의합니다
                </span>
                <button className="ml-2 text-xs text-primary-600 underline">보기</button>
              </div>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={formData.agreePrivacy}
                onChange={(e) => handleInputChange('agreePrivacy', e.target.checked)}
                className="w-4 h-4 text-primary-600 mt-0.5"
              />
              <div className="flex-1">
                <span className="text-sm text-gray-700">
                  [필수] 개인정보 수집 및 이용에 동의합니다
                </span>
                <button className="ml-2 text-xs text-primary-600 underline">보기</button>
              </div>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={formData.agreeMarketing}
                onChange={(e) => handleInputChange('agreeMarketing', e.target.checked)}
                className="w-4 h-4 text-primary-600 mt-0.5"
              />
              <div className="flex-1">
                <span className="text-sm text-gray-700">
                  [선택] 마케팅 정보 수신에 동의합니다
                </span>
              </div>
            </label>

            <div className="pt-2 border-t border-gray-200">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={formData.agreeTerms && formData.agreePrivacy}
                  onChange={(e) => {
                    const checked = e.target.checked
                    handleInputChange('agreeTerms', checked)
                    handleInputChange('agreePrivacy', checked)
                  }}
                  className="w-4 h-4 text-primary-600"
                />
                <span className="text-sm font-medium text-gray-900">
                  전체 동의
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          disabled={!formData.agreeTerms || !formData.agreePrivacy}
          className="btn-primary w-full py-4 text-lg mb-6 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          회원가입
        </button>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-gray-600">
            이미 회원이신가요?{' '}
            <Link href="/auth/login" className="text-primary-600 font-medium hover:underline">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}