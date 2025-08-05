import { TopHeader } from '@/components/layout/TopHeader'
import { BottomNav } from '@/components/layout/BottomNav'

export default function ProfileEditPage() {
  return (
    <>
      <TopHeader title="프로필 수정" showBack={true} />
      
      <div className="page-content px-4">
        {/* Profile Image */}
        <div className="mb-8 text-center">
          <div className="relative inline-block">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-gray-500">프로필 사진 변경</p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <div>
            <label className="form-label">이름</label>
            <input type="text" className="form-input" defaultValue="김여행" />
          </div>

          <div>
            <label className="form-label">이메일</label>
            <input type="email" className="form-input" defaultValue="kimtravel@example.com" />
          </div>

          <div>
            <label className="form-label">전화번호</label>
            <input type="tel" className="form-input" defaultValue="010-1234-5678" />
          </div>

          <div>
            <label className="form-label">생년월일</label>
            <input type="date" className="form-input" defaultValue="1990-01-01" />
          </div>

          <div>
            <label className="form-label">성별</label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center">
                <input type="radio" name="gender" value="male" className="form-checkbox mr-2" />
                <span className="text-sm text-gray-700">남성</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" value="female" className="form-checkbox mr-2" defaultChecked />
                <span className="text-sm text-gray-700">여성</span>
              </label>
            </div>
          </div>

          <div>
            <label className="form-label">주소</label>
            <div className="space-y-2">
              <div className="flex gap-2">
                <input type="text" className="form-input flex-1" placeholder="우편번호" />
                <button className="btn-secondary px-4">주소검색</button>
              </div>
              <input type="text" className="form-input" placeholder="기본주소" />
              <input type="text" className="form-input" placeholder="상세주소" />
            </div>
          </div>

          {/* Marketing Agreement */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-3">마케팅 정보 수신 동의</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox mr-3" defaultChecked />
                <span className="text-sm text-gray-700">이메일 수신 동의</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox mr-3" defaultChecked />
                <span className="text-sm text-gray-700">SMS 수신 동의</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox mr-3" />
                <span className="text-sm text-gray-700">푸시 알림 수신 동의</span>
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button className="btn-secondary flex-1 py-3">취소</button>
            <button className="btn-primary flex-1 py-3">저장</button>
          </div>
        </div>
      </div>

      <BottomNav />
    </>
  )
}