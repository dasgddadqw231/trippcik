import { TopHeader } from '@/components/layout/TopHeader'

export default function PrivacyPolicyPage() {
  return (
    <>
      <TopHeader title="개인정보처리방침" showBack={true} showCart={false} showSettings={false} />
      
      <div className="page-content">
        {/* Last Updated */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mx-4 mb-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-blue-800 mb-1">최종 업데이트</h4>
              <p className="text-sm text-blue-700">
                이 개인정보처리방침은 2024년 8월 3일에 마지막으로 업데이트되었습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">개요</h3>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              TripPick(이하 "회사")는 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고, 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
            </p>
          </div>
        </div>

        {/* Collection Purpose */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">1. 개인정보의 처리 목적</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-900 text-sm mb-2">서비스 제공</h4>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• 회원 가입 및 인증</li>
                  <li>• 상품 주문 및 배송</li>
                  <li>• 고객 상담 및 불만 처리</li>
                  <li>• 결제 및 정산</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-sm mb-2">서비스 개선</h4>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• 서비스 이용 통계 분석</li>
                  <li>• 맞춤형 서비스 제공</li>
                  <li>• 신규 서비스 개발</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-sm mb-2">마케팅 및 광고</h4>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• 이벤트 및 프로모션 안내</li>
                  <li>• 맞춤형 광고 제공</li>
                  <li>• 시장 조사 및 분석</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Collection Items */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">2. 처리하는 개인정보의 항목</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-900 text-sm mb-2">필수 항목</h4>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• 이름, 이메일 주소, 전화번호</li>
                  <li>• 생년월일, 성별</li>
                  <li>• 배송지 주소</li>
                  <li>• 결제 정보 (카드번호, 계좌번호 등)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-sm mb-2">선택 항목</h4>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• 프로필 사진</li>
                  <li>• 관심 분야 및 선호도</li>
                  <li>• 마케팅 수신 동의 여부</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-sm mb-2">자동 수집 항목</h4>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• IP 주소, 쿠키, 방문 기록</li>
                  <li>• 서비스 이용 기록, 접속 로그</li>
                  <li>• 기기 정보 (OS, 브라우저 등)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Retention Period */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">3. 개인정보의 보유 및 이용기간</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-medium text-gray-900 text-sm mb-2">회원 정보</h4>
                <p className="text-sm text-gray-700">회원 탈퇴 시까지 (단, 관련 법령에 따라 일정 기간 보관)</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-medium text-gray-900 text-sm mb-2">주문 및 결제 정보</h4>
                <p className="text-sm text-gray-700">전자상거래법에 따라 5년간 보관</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-medium text-gray-900 text-sm mb-2">접속 로그</h4>
                <p className="text-sm text-gray-700">통신비밀보호법에 따라 3개월간 보관</p>
              </div>
            </div>
          </div>
        </div>

        {/* User Rights */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">4. 정보주체의 권리·의무 및 행사방법</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다:
              </p>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• 개인정보 열람 요구</li>
                <li>• 오류 등이 있을 경우 정정·삭제 요구</li>
                <li>• 처리정지 요구</li>
                <li>• 손해배상 청구</li>
              </ul>
              <div className="bg-blue-50 p-3 rounded-lg mt-3">
                <p className="text-sm text-blue-700">
                  권리 행사는 개인정보보호법 시행령 제41조에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체없이 조치하겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Measures */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">5. 개인정보의 안전성 확보조치</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>관리적 보호조치: 개인정보 처리 담당자의 최소화 및 교육</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>기술적 보호조치: 개인정보처리시스템 등의 접근권한 관리</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>물리적 보호조치: 전산실, 자료보관실 등의 접근통제</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>암호화: 개인정보는 암호화되어 저장 및 관리</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">6. 개인정보 보호책임자</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 text-sm mb-2">개인정보 보호책임자</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 성명: 홍길동</li>
                  <li>• 직책: 개인정보보호팀장</li>
                  <li>• 연락처: privacy@trippick.com</li>
                  <li>• 전화: 02-1234-5678</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 text-sm mb-2">개인정보 보호담당부서</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 부서명: 개인정보보호팀</li>
                  <li>• 담당자: 김개인</li>
                  <li>• 연락처: privacy@trippick.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Changes */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">7. 개인정보처리방침의 변경</h3>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}