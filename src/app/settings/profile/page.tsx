import { TopHeader } from '@/components/layout/TopHeader'

export default function ProfileSettingsPage() {
  return (
    <>
      <TopHeader title="프로필 수정" showBack={true} showCart={false} showSettings={false} />
      
      <div className="page-content">
        {/* Profile Photo */}
        <div className="bg-white mb-4 p-6">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <button className="text-primary-600 text-sm font-medium">프로필 사진 변경</button>
          </div>
        </div>

        {/* Basic Information */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">기본 정보</h3>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">이름</label>
              <input
                type="text"
                defaultValue="김여행"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
              <input
                type="email"
                defaultValue="user@trippick.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">전화번호</label>
              <input
                type="tel"
                defaultValue="010-1234-5678"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">생년월일</label>
              <input
                type="date"
                defaultValue="1990-01-01"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">성별</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option value="male">남성</option>
                <option value="female">여성</option>
                <option value="other">기타</option>
                <option value="not-specified">선택 안함</option>
              </select>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">선호 설정</h3>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">관심 여행지</label>
              <div className="flex flex-wrap gap-2">
                {['유럽', '아시아', '미주', '오세아니아', '아프리카'].map((region) => (
                  <button
                    key={region}
                    className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:bg-gray-50"
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">여행 스타일</label>
              <div className="flex flex-wrap gap-2">
                {['혼자 여행', '가족 여행', '친구와 함께', '비즈니스', '백패킹'].map((style) => (
                  <button
                    key={style}
                    className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:bg-gray-50"
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 space-y-3">
          <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
            저장하기
          </button>
          <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            취소
          </button>
        </div>
      </div>
    </>
  )
}