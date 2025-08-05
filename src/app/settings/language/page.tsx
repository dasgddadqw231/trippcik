import { TopHeader } from '@/components/layout/TopHeader'

export default function LanguageSettingsPage() {
  return (
    <>
      <TopHeader title="언어 설정" showBack={true} showCart={false} showSettings={false} />
      
      <div className="page-content">
        {/* Current Language */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">현재 언어</h3>
          </div>
          <div className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">한</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">한국어</p>
                <p className="text-sm text-gray-500">Korean</p>
              </div>
            </div>
          </div>
        </div>

        {/* Available Languages */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">사용 가능한 언어</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {/* Korean (Current) */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">한</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">한국어</p>
                  <p className="text-sm text-gray-500">Korean</p>
                </div>
              </div>
              <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* English */}
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold text-sm">EN</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">English</p>
                  <p className="text-sm text-gray-500">영어</p>
                </div>
              </div>
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
            </button>

            {/* Japanese */}
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold text-sm">日</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">日本語</p>
                  <p className="text-sm text-gray-500">일본어</p>
                </div>
              </div>
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
            </button>

            {/* Chinese Simplified */}
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-bold text-sm">中</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">中文 (简体)</p>
                  <p className="text-sm text-gray-500">중국어 간체</p>
                </div>
              </div>
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
            </button>

            {/* Chinese Traditional */}
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">繁</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">中文 (繁體)</p>
                  <p className="text-sm text-gray-500">중국어 번체</p>
                </div>
              </div>
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
            </button>

            {/* Spanish */}
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">ES</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Español</p>
                  <p className="text-sm text-gray-500">스페인어</p>
                </div>
              </div>
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
            </button>

            {/* French */}
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">FR</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Français</p>
                  <p className="text-sm text-gray-500">프랑스어</p>
                </div>
              </div>
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
            </button>

            {/* German */}
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-bold text-sm">DE</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Deutsch</p>
                  <p className="text-sm text-gray-500">독일어</p>
                </div>
              </div>
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
            </button>
          </div>
        </div>

        {/* Language Settings */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">언어 설정</h3>
          </div>
          <div className="space-y-0">
            <div className="px-4 py-4 flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-700">자동 번역</span>
                <p className="text-xs text-gray-500 mt-1">상품명 및 설명 자동 번역</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
            <div className="px-4 py-4 flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-700">지역별 콘텐츠</span>
                <p className="text-xs text-gray-500 mt-1">선택한 언어에 맞는 지역 콘텐츠 표시</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mx-4 mb-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-yellow-800 mb-1">안내</h4>
              <p className="text-sm text-yellow-700">
                언어를 변경하면 앱이 다시 시작됩니다. 일부 번역이 완전하지 않을 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 space-y-3">
          <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
            언어 변경 적용
          </button>
          <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            취소
          </button>
        </div>
      </div>
    </>
  )
}