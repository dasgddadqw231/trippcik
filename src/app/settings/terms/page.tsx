import { TopHeader } from '@/components/layout/TopHeader'

export default function TermsOfServicePage() {
  return (
    <>
      <TopHeader title="이용약관" showBack={true} showCart={false} showSettings={false} />
      
      <div className="page-content">
        {/* Last Updated */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mx-4 mb-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-green-800 mb-1">시행일</h4>
              <p className="text-sm text-green-700">
                이 약관은 2024년 8월 3일부터 시행됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* Purpose */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">제1조 (목적)</h3>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              이 약관은 TripPick(이하 "회사")가 제공하는 여행용품 전자상거래 서비스(이하 "서비스")의 이용조건 및 절차, 회사와 이용자 간의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>
          </div>
        </div>

        {/* Definitions */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">제2조 (정의)</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-900 text-sm">1. "서비스"</span>
                <p className="text-sm text-gray-700 mt-1">회사가 제공하는 여행용품 전자상거래 플랫폼 및 관련 서비스 일체</p>
              </div>
              <div>
                <span className="font-medium text-gray-900 text-sm">2. "이용자"</span>
                <p className="text-sm text-gray-700 mt-1">이 약관에 따라 회사의 서비스를 받는 회원 및 비회원</p>
              </div>
              <div>
                <span className="font-medium text-gray-900 text-sm">3. "회원"</span>
                <p className="text-sm text-gray-700 mt-1">회사에 개인정보를 제공하여 회원등록을 한 자</p>
              </div>
              <div>
                <span className="font-medium text-gray-900 text-sm">4. "상품"</span>
                <p className="text-sm text-gray-700 mt-1">서비스를 통해 거래되는 여행용품 및 관련 상품</p>
              </div>
            </div>
          </div>
        </div>

        {/* Terms Notice */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">제3조 (약관의 명시와 설명 및 개정)</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-900 text-sm">① 약관의 명시</span>
                <p className="text-sm text-gray-700 mt-1">회사는 이 약관의 내용과 상호, 영업소 소재지, 대표자 성명, 사업자등록번호 등을 이용자가 쉽게 알 수 있도록 서비스의 초기 화면에 게시합니다.</p>
              </div>
              <div>
                <span className="font-medium text-gray-900 text-sm">② 약관의 개정</span>
                <p className="text-sm text-gray-700 mt-1">회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있으며, 개정된 약관은 적용일자 7일 이전부터 공지합니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Provision */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">제4조 (서비스의 제공 및 변경)</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-900 text-sm">① 제공 서비스</span>
                <ul className="text-sm text-gray-700 space-y-1 mt-1 ml-4">
                  <li>• 여행용품 판매 및 중개 서비스</li>
                  <li>• 상품 정보 제공 및 검색 서비스</li>
                  <li>• 주문, 결제, 배송 관련 서비스</li>
                  <li>• 고객상담 및 부가 서비스</li>
                </ul>
              </div>
              <div>
                <span className="font-medium text-gray-900 text-sm">② 서비스 변경</span>
                <p className="text-sm text-gray-700 mt-1">회사는 운영상, 기술상의 필요에 따라 제공하고 있는 서비스를 변경할 수 있으며, 변경사항을 사전에 공지합니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Membership */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">제5조 (회원가입)</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-900 text-sm">① 가입 신청</span>
                <p className="text-sm text-gray-700 mt-1">이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.</p>
              </div>
              <div>
                <span className="font-medium text-gray-900 text-sm">② 가입 승낙</span>
                <p className="text-sm text-gray-700 mt-1">회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.</p>
                <ul className="text-sm text-gray-700 space-y-1 mt-2 ml-4">
                  <li>• 가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우</li>
                  <li>• 실명이 아니거나 타인의 명의를 이용한 경우</li>
                  <li>• 허위의 정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Member Obligations */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">제6조 (회원의 의무)</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <p className="text-sm text-gray-700">회원은 다음 행위를 하여서는 안 됩니다:</p>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• 신청 또는 변경시 허위내용의 등록</li>
                <li>• 타인의 정보 도용</li>
                <li>• 회사가 게시한 정보의 변경</li>
                <li>• 회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                <li>• 회사 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                <li>• 회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                <li>• 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 회사에 공개 또는 게시하는 행위</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Purchase Contract */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">제7조 (구매신청 및 주문확인)</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-900 text-sm">① 구매신청</span>
                <p className="text-sm text-gray-700 mt-1">이용자는 회사가 제공하는 방법으로 다음 사항을 신청합니다.</p>
                <ul className="text-sm text-gray-700 space-y-1 mt-1 ml-4">
                  <li>• 상품의 선택</li>
                  <li>• 성명, 주소, 전화번호, 전자우편주소 등의 입력</li>
                  <li>• 약관내용, 청약철회권이 제한되는 서비스, 배송료·설치비 등의 비용부담과 관련한 내용에 대한 확인</li>
                  <li>• 이 약관에 동의하고 위 사항을 확인하거나 거부하는 표시</li>
                </ul>
              </div>
              <div>
                <span className="font-medium text-gray-900 text-sm">② 주문확인</span>
                <p className="text-sm text-gray-700 mt-1">회사는 이용자의 구매신청에 대해 다음 각 호에 해당하면 승낙하지 않을 수 있습니다.</p>
                <ul className="text-sm text-gray-700 space-y-1 mt-1 ml-4">
                  <li>• 신청 내용에 허위, 기재누락, 오기가 있는 경우</li>
                  <li>• 미성년자가 담배, 주류 등 청소년보호법에서 금지하는 재화를 구매하는 경우</li>
                  <li>• 기타 구매신청에 승낙하는 것이 회사 기술상 현저히 지장이 있다고 판단하는 경우</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">제8조 (결제방법)</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <p className="text-sm text-gray-700">상품에 대한 대금지급방법은 다음 각 호의 방법중 가용한 방법으로 할 수 있습니다:</p>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• 폰뱅킹, 인터넷뱅킹, 메일 뱅킹 등의 각종 계좌이체</li>
                <li>• 선불카드, 직불카드, 신용카드 등의 각종 카드 결제</li>
                <li>• 온라인무통장입금</li>
                <li>• 전자화폐에 의한 결제</li>
                <li>• 수령 시 대금지급</li>
                <li>• 마일리지 등 회사가 지급한 포인트에 의한 결제</li>
                <li>• 회사와 계약을 맺었거나 회사가 인정한 상품권에 의한 결제</li>
                <li>• 기타 전자적 지급 방법에 의한 대금 지급 등</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cancellation */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">제9조 (청약철회 등)</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-900 text-sm">① 철회기간</span>
                <p className="text-sm text-gray-700 mt-1">이용자는 상품을 배송받은 날부터 7일 이내에 청약을 철회할 수 있습니다. 다만, 청약철회에 관하여 「전자상거래 등에서의 소비자보호에 관한 법률」에 달리 정함이 있는 경우에는 동 법 규정에 따릅니다.</p>
              </div>
              <div>
                <span className="font-medium text-gray-900 text-sm">② 철회 제한</span>
                <p className="text-sm text-gray-700 mt-1">다음 각 호의 경우에는 청약을 철회할 수 없습니다:</p>
                <ul className="text-sm text-gray-700 space-y-1 mt-1 ml-4">
                  <li>• 이용자에게 책임 있는 사유로 재화 등이 멸실 또는 훼손된 경우</li>
                  <li>• 이용자의 사용 또는 일부 소비에 의하여 재화 등의 가치가 현저히 감소한 경우</li>
                  <li>• 시간의 경과에 의하여 재판매가 곤란할 정도로 재화 등의 가치가 현저히 감소한 경우</li>
                  <li>• 같은 성능을 지닌 재화 등으로 복제가 가능한 경우 그 원본인 재화 등의 포장을 훼손한 경우</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Liability */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">제10조 (회사의 의무)</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>회사는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 재화·용역을 제공하는데 최선을 다하여야 합니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>회사는 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보보호를 위한 보안 시스템을 갖추어야 합니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>회사는 상품이나 용역에 대하여 「표시·광고의 공정화에 관한 법률」 제3조 소정의 부당한 표시·광고행위를 함으로써 이용자가 손해를 입은 때에는 이를 배상할 책임을 집니다.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dispute Resolution */}
        <div className="bg-white mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-medium text-gray-700 text-sm">제11조 (분쟁해결)</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-900 text-sm">① 분쟁조정</span>
                <p className="text-sm text-gray-700 mt-1">회사는 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.</p>
              </div>
              <div>
                <span className="font-medium text-gray-900 text-sm">② 준거법 및 관할법원</span>
                <p className="text-sm text-gray-700 mt-1">회사와 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 대한민국 법을 적용하며, 회사의 본사 소재지를 관할하는 법원을 관할 법원으로 합니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mx-4 mb-4">
          <div className="text-center">
            <h4 className="text-sm font-medium text-gray-800 mb-2">문의사항</h4>
            <p className="text-sm text-gray-600">
              이용약관에 대한 문의사항이 있으시면<br/>
              고객센터(help@trippick.com)로 연락주시기 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}