import { TopHeader } from '@/components/layout/TopHeader'

export default function CurrencySettingsPage() {
  return (
    <>
      <TopHeader title="화폐 단위" showBack={true} showCart={false} showSettings={false} />
      
      <div className="page-content">
        {/* Current Currency */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">현재 화폐</h3>
          </div>
          <div className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">₩</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">KRW (대한민국 원)</p>
                <p className="text-sm text-gray-500">1 USD = 1,300 KRW</p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Currencies */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">인기 화폐</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {/* KRW (Current) */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">₩</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">KRW</p>
                  <p className="text-sm text-gray-500">대한민국 원</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">1.00</span>
                <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* USD */}
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">$</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">USD</p>
                  <p className="text-sm text-gray-500">미국 달러</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">0.00077</span>
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
              </div>
            </button>

            {/* EUR */}
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">€</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">EUR</p>
                  <p className="text-sm text-gray-500">유로</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">0.00071</span>
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
              </div>
            </button>

            {/* JPY */}
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold text-sm">¥</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">JPY</p>
                  <p className="text-sm text-gray-500">일본 엔</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">0.112</span>
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
              </div>
            </button>

            {/* CNY */}
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-bold text-sm">¥</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">CNY</p>
                  <p className="text-sm text-gray-500">중국 위안</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">0.0056</span>
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Other Currencies */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">기타 화폐</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {/* GBP */}
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-bold text-sm">£</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">GBP</p>
                  <p className="text-sm text-gray-500">영국 파운드</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">0.00061</span>
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
              </div>
            </button>

            {/* CAD */}
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">C$</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">CAD</p>
                  <p className="text-sm text-gray-500">캐나다 달러</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">0.00105</span>
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
              </div>
            </button>

            {/* AUD */}
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 font-bold text-sm">A$</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">AUD</p>
                  <p className="text-sm text-gray-500">호주 달러</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">0.00116</span>
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Currency Settings */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">화폐 설정</h3>
          </div>
          <div className="space-y-0">
            <div className="px-4 py-4 flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-700">실시간 환율</span>
                <p className="text-xs text-gray-500 mt-1">실시간 환율로 가격 표시</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
            <div className="px-4 py-4 flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-700">원화 표시</span>
                <p className="text-xs text-gray-500 mt-1">선택한 화폐와 함께 원화도 표시</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Exchange Rate Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mx-4 mb-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-blue-800 mb-1">환율 정보</h4>
              <p className="text-sm text-blue-700">
                환율은 5분마다 업데이트되며, 실제 결제 시 환율과 다를 수 있습니다.<br/>
                마지막 업데이트: 2024년 8월 3일 오후 4:02
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 space-y-3">
          <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
            화폐 변경 적용
          </button>
          <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            취소
          </button>
        </div>
      </div>
    </>
  )
}