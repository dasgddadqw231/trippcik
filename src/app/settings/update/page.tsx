import { TopHeader } from '@/components/layout/TopHeader'

export default function UpdatePage() {
  return (
    <>
      <TopHeader title="업데이트 확인" showBack={true} showCart={false} showSettings={false} />
      
      <div className="page-content">
        {/* Current Version */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">현재 버전</h3>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">TripPick v1.0.0</h4>
                  <p className="text-sm text-gray-500">최신 버전 사용 중</p>
                </div>
              </div>
              <span className="text-sm text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full">최신</span>
            </div>
          </div>
        </div>

        {/* Update Check */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">업데이트 확인</h3>
          </div>
          <div className="p-4">
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">최신 버전입니다!</h4>
              <p className="text-sm text-gray-500 mb-4">현재 사용 중인 버전이 최신 버전입니다.</p>
              <button className="bg-primary-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                다시 확인하기
              </button>
            </div>
          </div>
        </div>

        {/* Update Settings */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">업데이트 설정</h3>
          </div>
          <div className="space-y-0">
            <div className="px-4 py-4 flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-700">자동 업데이트</span>
                <p className="text-xs text-gray-500 mt-1">Wi-Fi 연결 시 자동으로 업데이트</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
            <div className="px-4 py-4 flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-700">베타 버전 참여</span>
                <p className="text-xs text-gray-500 mt-1">새로운 기능을 미리 체험해보세요</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
            <div className="px-4 py-4 flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-700">업데이트 알림</span>
                <p className="text-xs text-gray-500 mt-1">새 버전 출시 시 알림 받기</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Update History */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">업데이트 히스토리</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {/* Version 1.0.0 */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">v1.0.0</h4>
                  <p className="text-xs text-gray-500">2024년 8월 3일</p>
                </div>
                <span className="text-xs text-primary-600 bg-primary-100 px-2 py-1 rounded-full">현재</span>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-800">🎉 TripPick 정식 출시!</p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• 여행용품 쇼핑몰 서비스 론칭</li>
                  <li>• 브랜드별, 카테고리별 상품 검색</li>
                  <li>• Wish Finder 이미지 검색 기능</li>
                  <li>• 안전한 결제 시스템</li>
                  <li>• 실시간 주문 추적</li>
                </ul>
              </div>
            </div>

            {/* Version 0.9.5 */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">v0.9.5</h4>
                  <p className="text-xs text-gray-500">2024년 7월 28일</p>
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">베타</span>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-800">🔧 성능 개선 및 버그 수정</p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• 앱 시작 속도 30% 향상</li>
                  <li>• 검색 결과 로딩 속도 개선</li>
                  <li>• 장바구니 동기화 오류 수정</li>
                  <li>• 알림 설정 저장 오류 수정</li>
                </ul>
              </div>
            </div>

            {/* Version 0.9.0 */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">v0.9.0</h4>
                  <p className="text-xs text-gray-500">2024년 7월 20일</p>
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">베타</span>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-800">✨ 새로운 기능 추가</p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• 다국어 지원 (한국어, 영어, 일본어)</li>
                  <li>• 다중 화폐 지원</li>
                  <li>• 위시리스트 기능</li>
                  <li>• 최근 본 상품 기능</li>
                  <li>• 포인트 적립 시스템</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Release Notes */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">릴리스 노트</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900 text-sm">v1.0.0의 주요 특징</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">🛍️</span>
                  <div>
                    <span className="font-medium text-gray-900 text-sm">완전한 쇼핑 경험</span>
                    <p className="text-sm text-gray-600">검색부터 결제까지 원스톱 서비스</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">🔍</span>
                  <div>
                    <span className="font-medium text-gray-900 text-sm">스마트 검색</span>
                    <p className="text-sm text-gray-600">AI 기반 상품 추천 및 이미지 검색</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">🔒</span>
                  <div>
                    <span className="font-medium text-gray-900 text-sm">안전한 결제</span>
                    <p className="text-sm text-gray-600">다양한 결제 수단과 보안 시스템</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">📱</span>
                  <div>
                    <span className="font-medium text-gray-900 text-sm">모바일 최적화</span>
                    <p className="text-sm text-gray-600">언제 어디서나 편리한 쇼핑</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Requirements */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mx-4 mb-4">
          <h4 className="text-sm font-medium text-gray-800 mb-2">시스템 요구사항</h4>
          <div className="space-y-1 text-sm text-gray-600">
            <p>• iOS 14.0 이상 또는 Android 8.0 이상</p>
            <p>• 인터넷 연결 필요</p>
            <p>• 저장 공간 100MB 이상 권장</p>
            <p>• 카메라 권한 (Wish Finder 사용 시)</p>
          </div>
        </div>
      </div>
    </>
  )
}