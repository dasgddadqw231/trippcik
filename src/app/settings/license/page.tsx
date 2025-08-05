import { TopHeader } from '@/components/layout/TopHeader'

export default function LicensePage() {
  return (
    <>
      <TopHeader title="오픈소스 라이선스" showBack={true} showCart={false} showSettings={false} />
      
      <div className="page-content">
        {/* Introduction */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mx-4 mb-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-blue-800 mb-1">오픈소스 라이선스 고지</h4>
              <p className="text-sm text-blue-700">
                TripPick 앱은 다음과 같은 오픈소스 소프트웨어를 포함하고 있습니다. 각 라이선스 조건에 따라 사용됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* React */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-700 text-sm">React</h3>
              <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">MIT</span>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">버전: 18.3.1</p>
              <p className="text-sm text-gray-600">저작권: Facebook, Inc. and its affiliates</p>
              <p className="text-sm text-gray-700">JavaScript 라이브러리로 사용자 인터페이스 구축을 위해 사용됩니다.</p>
            </div>
          </div>
        </div>

        {/* Next.js */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-700 text-sm">Next.js</h3>
              <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">MIT</span>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">버전: 14.2.5</p>
              <p className="text-sm text-gray-600">저작권: Vercel, Inc.</p>
              <p className="text-sm text-gray-700">React 기반의 풀스택 웹 애플리케이션 프레임워크입니다.</p>
            </div>
          </div>
        </div>

        {/* TypeScript */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-700 text-sm">TypeScript</h3>
              <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Apache 2.0</span>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">버전: 5.5.4</p>
              <p className="text-sm text-gray-600">저작권: Microsoft Corporation</p>
              <p className="text-sm text-gray-700">JavaScript에 정적 타입 정의를 추가한 프로그래밍 언어입니다.</p>
            </div>
          </div>
        </div>

        {/* Tailwind CSS */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-700 text-sm">Tailwind CSS</h3>
              <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">MIT</span>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">버전: 3.4.7</p>
              <p className="text-sm text-gray-600">저작권: Tailwind Labs Inc.</p>
              <p className="text-sm text-gray-700">유틸리티 우선의 CSS 프레임워크로 스타일링에 사용됩니다.</p>
            </div>
          </div>
        </div>

        {/* Lucide React */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-700 text-sm">Lucide React</h3>
              <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full">ISC</span>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">버전: 0.424.0</p>
              <p className="text-sm text-gray-600">저작권: Lucide Contributors</p>
              <p className="text-sm text-gray-700">아름다운 아이콘 라이브러리로 UI 아이콘에 사용됩니다.</p>
            </div>
          </div>
        </div>

        {/* PostCSS */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-700 text-sm">PostCSS</h3>
              <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">MIT</span>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">버전: 8.4.39</p>
              <p className="text-sm text-gray-600">저작권: Andrey Sitnik</p>
              <p className="text-sm text-gray-700">CSS를 JavaScript로 변환하는 도구입니다.</p>
            </div>
          </div>
        </div>

        {/* Autoprefixer */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-700 text-sm">Autoprefixer</h3>
              <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">MIT</span>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">버전: 10.4.19</p>
              <p className="text-sm text-gray-600">저작권: Andrey Sitnik</p>
              <p className="text-sm text-gray-700">CSS에 벤더 프리픽스를 자동으로 추가하는 PostCSS 플러그인입니다.</p>
            </div>
          </div>
        </div>

        {/* MIT License Details */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">MIT License</h3>
          </div>
          <div className="p-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-700 font-medium">Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files...</p>
              <div className="bg-gray-50 p-3 rounded-lg">
                <button className="text-sm text-primary-600 hover:underline">전체 라이선스 텍스트 보기</button>
              </div>
            </div>
          </div>
        </div>

        {/* Apache 2.0 License Details */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">Apache License 2.0</h3>
          </div>
          <div className="p-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-700 font-medium">Licensed under the Apache License, Version 2.0 (the "License")...</p>
              <div className="bg-gray-50 p-3 rounded-lg">
                <button className="text-sm text-primary-600 hover:underline">전체 라이선스 텍스트 보기</button>
              </div>
            </div>
          </div>
        </div>

        {/* ISC License Details */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">ISC License</h3>
          </div>
          <div className="p-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-700 font-medium">Permission to use, copy, modify, and/or distribute this software for any purpose...</p>
              <div className="bg-gray-50 p-3 rounded-lg">
                <button className="text-sm text-primary-600 hover:underline">전체 라이선스 텍스트 보기</button>
              </div>
            </div>
          </div>
        </div>

        {/* License Summary */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">라이선스 요약</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div>
                  <span className="text-sm font-medium text-gray-900">MIT License</span>
                  <p className="text-xs text-gray-500">6개 라이브러리</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <span className="text-sm font-medium text-gray-900">Apache 2.0</span>
                  <p className="text-xs text-gray-500">1개 라이브러리</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <div>
                  <span className="text-sm font-medium text-gray-900">ISC License</span>
                  <p className="text-xs text-gray-500">1개 라이브러리</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact for License */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mx-4 mb-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-yellow-800 mb-1">라이선스 문의</h4>
              <p className="text-sm text-yellow-700">
                오픈소스 라이선스에 대한 문의사항이나 전체 라이선스 텍스트가 필요하시면 legal@trippick.com으로 연락주시기 바랍니다.
              </p>
            </div>
          </div>
        </div>

        {/* Generation Info */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mx-4 mb-4">
          <div className="text-center">
            <h4 className="text-sm font-medium text-gray-800 mb-2">라이선스 정보 생성일</h4>
            <p className="text-sm text-gray-600">
              이 라이선스 정보는 2024년 8월 3일에 생성되었습니다.<br/>
              앱 업데이트 시 추가된 오픈소스 라이브러리가 포함될 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}