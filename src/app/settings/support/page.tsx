import { TopHeader } from '@/components/layout/TopHeader'

export default function SupportPage() {
  return (
    <>
      <TopHeader title="고객센터" showBack={true} showCart={false} showSettings={false} />
      
      <div className="page-content">
        {/* Quick Help */}
        <div className="bg-gradient-to-r from-primary-500 to-cyan-600 rounded-2xl p-6 mx-4 mb-4 text-white">
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">무엇을 도와드릴까요?</h3>
            <p className="text-blue-100 text-sm">언제든지 문의하세요. 빠르게 도움을 드리겠습니다.</p>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">연락 방법</h3>
          </div>
          <div className="space-y-0">
            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 text-sm">실시간 채팅</p>
                  <p className="text-xs text-gray-500">즉시 답변 • 24시간 이용 가능</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">온라인</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 text-sm">이메일 문의</p>
                  <p className="text-xs text-gray-500">help@trippick.com • 24시간 내 답변</p>
                </div>
              </div>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 text-sm">전화 상담</p>
                  <p className="text-xs text-gray-500">1588-1234 • 평일 09:00-18:00</p>
                </div>
              </div>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">자주 묻는 질문</h3>
          </div>
          <div className="divide-y divide-gray-100">
            <button className="w-full px-4 py-4 text-left hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-3">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">주문한 상품은 언제 받을 수 있나요?</h4>
                  <p className="text-xs text-gray-500">배송 관련 정보를 확인하세요</p>
                </div>
                <svg className="w-4 h-4 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            <button className="w-full px-4 py-4 text-left hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-3">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">교환/환불은 어떻게 하나요?</h4>
                  <p className="text-xs text-gray-500">교환 및 환불 정책을 확인하세요</p>
                </div>
                <svg className="w-4 h-4 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            <button className="w-full px-4 py-4 text-left hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-3">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">결제는 어떤 방법을 사용할 수 있나요?</h4>
                  <p className="text-xs text-gray-500">이용 가능한 결제 수단을 확인하세요</p>
                </div>
                <svg className="w-4 h-4 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            <button className="w-full px-4 py-4 text-left hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-3">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">Wish Finder는 어떻게 사용하나요?</h4>
                  <p className="text-xs text-gray-500">이미지 검색 기능 사용법을 확인하세요</p>
                </div>
                <svg className="w-4 h-4 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            <button className="w-full px-4 py-4 text-left hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-3">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">포인트는 어떻게 적립되나요?</h4>
                  <p className="text-xs text-gray-500">포인트 적립 및 사용 방법을 확인하세요</p>
                </div>
                <svg className="w-4 h-4 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Service Status */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">서비스 상태</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">쇼핑 서비스</span>
                </div>
                <span className="text-sm text-green-600 font-medium">정상</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">결제 시스템</span>
                </div>
                <span className="text-sm text-green-600 font-medium">정상</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">배송 추적</span>
                </div>
                <span className="text-sm text-green-600 font-medium">정상</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">알림 서비스</span>
                </div>
                <span className="text-sm text-yellow-600 font-medium">점검 중</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500">마지막 업데이트: 2024년 8월 3일 오후 4:15</p>
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">운영 시간</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">실시간 채팅</span>
                <span className="text-sm text-gray-900 font-medium">24시간</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">전화 상담</span>
                <span className="text-sm text-gray-900 font-medium">평일 09:00-18:00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">이메일 답변</span>
                <span className="text-sm text-gray-900 font-medium">24시간 이내</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500">* 공휴일 및 주말에는 답변이 지연될 수 있습니다.</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">빠른 액션</h3>
          </div>
          <div className="p-4 space-y-3">
            <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
              새 문의 작성하기
            </button>
            <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              내 문의 내역 보기
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mx-4 mb-4">
          <div className="text-center">
            <h4 className="text-sm font-medium text-gray-800 mb-3">TripPick 고객센터</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <p>📞 전화: 1588-1234</p>
              <p>📧 이메일: help@trippick.com</p>
              <p>🕒 운영시간: 평일 09:00-18:00</p>
              <p>📍 주소: 서울특별시 강남구 테헤란로 123, ABC빌딩 10층</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}