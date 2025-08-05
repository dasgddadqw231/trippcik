import { TopHeader } from '@/components/layout/TopHeader'

export default function OrderPage() {
  return (
    <>
      <TopHeader title="주문/결제" showBack={true} showCart={false} showSettings={false} />
      
      <div className="page-content px-4">
        {/* Order Items */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-3">주문 상품</h3>
          <div className="space-y-3">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm mb-1">
                      여행용 캐리어 {index + 1}
                    </h4>
                    <p className="text-xs text-gray-500 mb-2">
                      색상: 블랙, 사이즈: 24인치
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">수량: 1개</span>
                      <span className="font-bold text-primary-600 text-sm">
                        {(89000 * (index + 1)).toLocaleString()}원
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Info */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-3">배송 정보</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="space-y-4">
              <div>
                <label className="form-label">수령인 이름 *</label>
                <input
                  type="text"
                  placeholder="수령인 이름을 입력해주세요"
                  className="form-input"
                />
              </div>
              
              <div>
                <label className="form-label">수령 주소 *</label>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="우편번호"
                      className="form-input w-32"
                      readOnly
                    />
                    <button className="btn-outline px-4 py-2 text-sm whitespace-nowrap">
                      주소검색
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="기본주소"
                    className="form-input"
                    readOnly
                  />
                  <input
                    type="text"
                    placeholder="상세주소를 입력해주세요"
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="form-label">수령 가능 일자 *</label>
                <select className="form-input">
                  <option>수령 가능 일자를 선택해주세요</option>
                  <option>오늘 ({new Date().toLocaleDateString()})</option>
                  <option>내일 ({new Date(Date.now() + 86400000).toLocaleDateString()})</option>
                  <option>모레 ({new Date(Date.now() + 172800000).toLocaleDateString()})</option>
                </select>
              </div>

              <div>
                <label className="form-label">연락처 *</label>
                <input
                  type="tel"
                  placeholder="휴대폰 번호를 입력해주세요"
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label">배송 요청사항</label>
                <select className="form-input">
                  <option>배송 요청사항을 선택해주세요</option>
                  <option>부재 시 경비실에 맡겨주세요</option>
                  <option>부재 시 문 앞에 놓고 가주세요</option>
                  <option>빠른 배송 부탁드립니다</option>
                  <option>직접 입력</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Contact ID */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-3">컨택 ID</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="space-y-3">
              <div>
                <label className="form-label">카카오톡 ID</label>
                <input
                  type="text"
                  placeholder="카카오톡 ID를 입력해주세요"
                  className="form-input"
                />
                <p className="text-xs text-gray-500 mt-1">
                  배송 관련 알림을 받을 수 있습니다
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-3">결제 방법</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input type="radio" name="payment" className="w-4 h-4 text-primary-600" defaultChecked />
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  </svg>
                  <span className="text-sm font-medium">신용카드</span>
                </div>
              </label>
              
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input type="radio" name="payment" className="w-4 h-4 text-primary-600" />
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                  </svg>
                  <span className="text-sm font-medium">카카오페이</span>
                </div>
              </label>
              
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input type="radio" name="payment" className="w-4 h-4 text-primary-600" />
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                  </svg>
                  <span className="text-sm font-medium">네이버페이</span>
                </div>
              </label>
              
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input type="radio" name="payment" className="w-4 h-4 text-primary-600" />
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-sm font-medium">토스페이</span>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Coupon & Points */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-3">할인 혜택</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">쿠폰</span>
                <button className="text-sm text-primary-600">선택</button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">포인트</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="0"
                    className="w-20 text-right text-sm border border-gray-300 rounded px-2 py-1"
                  />
                  <span className="text-sm text-gray-500">P</span>
                  <button className="text-sm text-primary-600">전액사용</button>
                </div>
              </div>
              <p className="text-xs text-gray-500">사용 가능한 포인트: 5,000P</p>
            </div>
          </div>
        </div>

        {/* Price Summary */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">상품금액</span>
              <span className="text-gray-900">267,000원</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">배송비</span>
              <span className="text-gray-900">3,000원</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">쿠폰 할인</span>
              <span className="text-red-500">-0원</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">포인트 사용</span>
              <span className="text-red-500">-0원</span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex items-center justify-between font-medium">
              <span className="text-gray-900">총 결제금액</span>
              <span className="text-lg text-primary-600">270,000원</span>
            </div>
          </div>
        </div>

        {/* Agreement */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <div className="space-y-3 text-sm">
            <label className="flex items-start gap-3">
              <input type="checkbox" className="w-4 h-4 text-primary-600 mt-0.5" />
              <span className="text-gray-700">
                주문 내용을 확인했으며, 구매조건 및 개인정보 수집·이용, 결제대행 서비스에 동의합니다.
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200 p-4 safe-area-bottom">
        <button className="btn-primary w-full py-4 text-lg">
          270,000원 결제하기
        </button>
      </div>
    </>
  )
}