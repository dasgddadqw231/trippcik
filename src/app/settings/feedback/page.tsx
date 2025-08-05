import { TopHeader } from '@/components/layout/TopHeader'

export default function FeedbackPage() {
  return (
    <>
      <TopHeader title="피드백 보내기" showBack={true} showCart={false} showSettings={false} />
      
      <div className="page-content">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-6 mx-4 mb-4 text-white">
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m0 0v10a2 2 0 002 2h8a2 2 0 002-2V8M9 12h6m-6 4h6" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">소중한 의견을 들려주세요</h3>
            <p className="text-purple-100 text-sm">여러분의 피드백으로 TripPick이 더 나아집니다</p>
          </div>
        </div>

        {/* Feedback Type */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">피드백 유형</h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-3">
              <button className="p-4 border-2 border-primary-200 bg-primary-50 rounded-xl text-center transition-colors">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900">버그 신고</span>
              </button>
              <button className="p-4 border-2 border-gray-200 rounded-xl text-center hover:border-primary-200 hover:bg-primary-50 transition-colors">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900">기능 제안</span>
              </button>
              <button className="p-4 border-2 border-gray-200 rounded-xl text-center hover:border-primary-200 hover:bg-primary-50 transition-colors">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900">칭찬하기</span>
              </button>
              <button className="p-4 border-2 border-gray-200 rounded-xl text-center hover:border-primary-200 hover:bg-primary-50 transition-colors">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900">기타</span>
              </button>
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">피드백 내용</h3>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">제목</label>
              <input
                type="text"
                placeholder="피드백 제목을 입력해주세요"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">상세 내용</label>
              <textarea
                rows={5}
                placeholder="구체적인 피드백 내용을 작성해주세요. 문제가 발생한 상황이나 개선점을 자세히 설명해주시면 더 좋은 서비스로 보답하겠습니다."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
              ></textarea>
              <p className="text-xs text-gray-500 mt-1">최소 10자 이상 작성해주세요.</p>
            </div>
          </div>
        </div>

        {/* Screenshot Upload */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">스크린샷 첨부 (선택)</h3>
          </div>
          <div className="p-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors">
              <div className="flex flex-col items-center gap-2">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-900">이미지를 업로드하세요</p>
                  <p className="text-xs text-gray-500">PNG, JPG 파일 (최대 5MB)</p>
                </div>
                <button className="text-sm text-primary-600 hover:underline">파일 선택</button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">연락처 정보</h3>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
              <input
                type="email"
                defaultValue="user@trippick.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <p className="text-xs text-gray-500 mt-1">답변을 받고 싶으시면 정확한 이메일을 입력해주세요.</p>
            </div>
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="reply" 
                className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500 focus:ring-2"
                defaultChecked
              />
              <label htmlFor="reply" className="text-sm text-gray-700">이 피드백에 대한 답변을 받고 싶습니다</label>
            </div>
          </div>
        </div>

        {/* Device Info */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">기기 정보</h3>
          </div>
          <div className="p-4">
            <div className="bg-gray-50 p-3 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">앱 버전</span>
                <span className="text-sm text-gray-900">TripPick v1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">OS</span>
                <span className="text-sm text-gray-900">iOS 17.5.1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">기기</span>
                <span className="text-sm text-gray-900">iPhone 15 Pro</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">이 정보는 문제 해결에 도움이 됩니다.</p>
          </div>
        </div>

        {/* Feedback Guidelines */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mx-4 mb-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-blue-800 mb-1">피드백 작성 팁</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• 구체적이고 명확한 설명을 부탁드립니다</li>
                <li>• 버그 신고 시 재현 방법을 포함해주세요</li>
                <li>• 스크린샷이 있으면 더 빠른 해결이 가능합니다</li>
                <li>• 욕설이나 비방은 삼가해주세요</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 space-y-3">
          <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
            피드백 보내기
          </button>
          <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            초기화
          </button>
        </div>

        {/* Contact Alternative */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mx-4 mb-4">
          <div className="text-center">
            <h4 className="text-sm font-medium text-gray-800 mb-2">다른 방법으로 연락하기</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <p>📧 이메일: feedback@trippick.com</p>
              <p>💬 카카오톡: @TripPick</p>
              <p>📞 고객센터: 1588-1234</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}