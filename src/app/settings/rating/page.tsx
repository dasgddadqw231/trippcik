import { TopHeader } from '@/components/layout/TopHeader'

export default function RatingPage() {
  return (
    <>
      <TopHeader title="앱 평가하기" showBack={true} showCart={false} showSettings={false} />
      
      <div className="page-content">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 mx-4 mb-4 text-white">
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">TripPick은 어떠셨나요?</h3>
            <p className="text-orange-100 text-sm">솔직한 평가가 더 좋은 앱을 만듭니다</p>
          </div>
        </div>

        {/* Overall Rating */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">전체 평점</h3>
          </div>
          <div className="p-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">TripPick을 어떻게 평가하시나요?</p>
              <div className="flex justify-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className={`w-12 h-12 rounded-full transition-all duration-200 ${
                      star <= 4 
                        ? 'bg-yellow-100 hover:bg-yellow-200' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <svg 
                      className={`w-8 h-8 mx-auto ${
                        star <= 4 ? 'text-yellow-500' : 'text-gray-300'
                      }`} 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </button>
                ))}
              </div>
              <p className="text-lg font-bold text-gray-900">4.0 / 5.0</p>
              <p className="text-sm text-gray-500">매우 만족</p>
            </div>
          </div>
        </div>

        {/* Detailed Ratings */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">세부 평가</h3>
          </div>
          <div className="p-4 space-y-4">
            {/* 사용성 */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">사용성</h4>
                <p className="text-xs text-gray-500">앱 사용이 쉽고 직관적인가요?</p>
              </div>
              <div className="flex gap-1 ml-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star}>
                    <svg 
                      className={`w-5 h-5 ${star <= 5 ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* 디자인 */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">디자인</h4>
                <p className="text-xs text-gray-500">UI/UX 디자인이 마음에 드나요?</p>
              </div>
              <div className="flex gap-1 ml-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star}>
                    <svg 
                      className={`w-5 h-5 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* 속도 */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">속도</h4>
                <p className="text-xs text-gray-500">앱이 빠르게 동작하나요?</p>
              </div>
              <div className="flex gap-1 ml-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star}>
                    <svg 
                      className={`w-5 h-5 ${star <= 3 ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* 기능성 */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">기능성</h4>
                <p className="text-xs text-gray-500">필요한 기능들이 잘 갖춰져 있나요?</p>
              </div>
              <div className="flex gap-1 ml-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star}>
                    <svg 
                      className={`w-5 h-5 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Written Review */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">리뷰 작성</h3>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">한 줄 평가</label>
              <input
                type="text"
                placeholder="TripPick을 한 줄로 평가해주세요"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">상세 리뷰 (선택)</label>
              <textarea
                rows={4}
                placeholder="TripPick을 사용하면서 느낀 점을 자세히 적어주세요. 좋았던 점, 아쉬웠던 점 모두 소중한 의견입니다."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Most Liked Features */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">가장 마음에 든 기능</h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 border-2 border-primary-200 bg-primary-50 rounded-lg text-left transition-colors">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">상품 검색</span>
                </div>
              </button>
              <button className="p-3 border-2 border-gray-200 rounded-lg text-left hover:border-primary-200 hover:bg-primary-50 transition-colors">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">Wish Finder</span>
                </div>
              </button>
              <button className="p-3 border-2 border-gray-200 rounded-lg text-left hover:border-primary-200 hover:bg-primary-50 transition-colors">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 17a2 2 0 11-4 0 2 2 0 014 0zM9 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">쇼핑 경험</span>
                </div>
              </button>
              <button className="p-3 border-2 border-gray-200 rounded-lg text-left hover:border-primary-200 hover:bg-primary-50 transition-colors">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">결제 시스템</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Recommendation */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">추천 의향</h3>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-600 mb-4">친구나 가족에게 TripPick을 추천하시겠어요?</p>
            <div className="flex gap-3">
              <button className="flex-1 p-3 border-2 border-primary-200 bg-primary-50 rounded-lg text-center transition-colors">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  <span className="text-sm font-medium text-primary-600">네, 추천해요!</span>
                </div>
              </button>
              <button className="flex-1 p-3 border-2 border-gray-200 rounded-lg text-center hover:border-gray-300 transition-colors">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 13l3 3 7-7" />
                  </svg>
                  <span className="text-sm font-medium text-gray-600">보통이에요</span>
                </div>
              </button>
              <button className="flex-1 p-3 border-2 border-gray-200 rounded-lg text-center hover:border-gray-300 transition-colors">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06L16 4m-6 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-6 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                  </svg>
                  <span className="text-sm font-medium text-gray-600">아니에요</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* App Store Review */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">앱스토어 리뷰</h3>
          </div>
          <div className="p-4">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">앱스토어에서도 평가해주세요!</h4>
                  <p className="text-sm text-gray-600 mb-3">다른 사용자들에게도 도움이 됩니다.</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    App Store에서 평가하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Improvements */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">향후 개선 희망 기능</h3>
          </div>
          <div className="p-4">
            <div className="space-y-2">
              {[
                '더 많은 브랜드 추가',
                'AR 상품 체험 기능',
                '실시간 채팅 상담',
                '소셜 쇼핑 기능',
                '더 빠른 배송',
                '할인 쿠폰 확대'
              ].map((feature, index) => (
                <label key={index} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-700">{feature}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 space-y-3">
          <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
            평가 제출하기
          </button>
          <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            나중에 하기
          </button>
        </div>

        {/* Thank You Message */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mx-4 mb-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-green-800 mb-1">감사합니다!</h4>
              <p className="text-sm text-green-700">
                소중한 시간을 내서 평가해주셔서 감사합니다. 여러분의 의견으로 TripPick이 더욱 발전하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}