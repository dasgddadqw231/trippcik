'use client'

interface FilterModalProps {
  isOpen: boolean
  onClose: () => void
}

export function FilterModal({ isOpen, onClose }: FilterModalProps) {
  if (!isOpen) return null

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-overlay animate-fade-in" onClick={handleBackgroundClick}>
      <div className="modal-content animate-slide-up" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <h2 className="font-bold text-lg text-gray-900">필터</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          {/* 가격 범위 */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">가격 범위</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="price1" className="form-checkbox" />
                <label htmlFor="price1" className="text-sm text-gray-700">10만원 이하</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="price2" className="form-checkbox" />
                <label htmlFor="price2" className="text-sm text-gray-700">10만원 - 50만원</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="price3" className="form-checkbox" />
                <label htmlFor="price3" className="text-sm text-gray-700">50만원 - 100만원</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="price4" className="form-checkbox" />
                <label htmlFor="price4" className="text-sm text-gray-700">100만원 이상</label>
              </div>
            </div>
          </div>

          {/* 브랜드 */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">브랜드</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="brand1" className="form-checkbox" />
                <label htmlFor="brand1" className="text-sm text-gray-700">샤넬</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="brand2" className="form-checkbox" />
                <label htmlFor="brand2" className="text-sm text-gray-700">구찌</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="brand3" className="form-checkbox" />
                <label htmlFor="brand3" className="text-sm text-gray-700">애플</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="brand4" className="form-checkbox" />
                <label htmlFor="brand4" className="text-sm text-gray-700">나이키</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="brand5" className="form-checkbox" />
                <label htmlFor="brand5" className="text-sm text-gray-700">기타</label>
              </div>
            </div>
          </div>

          {/* 카테고리 */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">카테고리</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="cat1" className="form-checkbox" />
                <label htmlFor="cat1" className="text-sm text-gray-700">향수·화장품</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="cat2" className="form-checkbox" />
                <label htmlFor="cat2" className="text-sm text-gray-700">가방·지갑</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="cat3" className="form-checkbox" />
                <label htmlFor="cat3" className="text-sm text-gray-700">전자기기</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="cat4" className="form-checkbox" />
                <label htmlFor="cat4" className="text-sm text-gray-700">신발·의류</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="cat5" className="form-checkbox" />
                <label htmlFor="cat5" className="text-sm text-gray-700">액세서리</label>
              </div>
            </div>
          </div>

          {/* 색상 */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">색상</h3>
            <div className="grid grid-cols-6 gap-2">
              <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-300 hover:border-primary-500"></button>
              <button className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 hover:border-primary-500"></button>
              <button className="w-8 h-8 rounded-full bg-gray-500 border-2 border-gray-300 hover:border-primary-500"></button>
              <button className="w-8 h-8 rounded-full bg-red-500 border-2 border-gray-300 hover:border-primary-500"></button>
              <button className="w-8 h-8 rounded-full bg-blue-500 border-2 border-gray-300 hover:border-primary-500"></button>
              <button className="w-8 h-8 rounded-full bg-green-500 border-2 border-gray-300 hover:border-primary-500"></button>
              <button className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-gray-300 hover:border-primary-500"></button>
              <button className="w-8 h-8 rounded-full bg-purple-500 border-2 border-gray-300 hover:border-primary-500"></button>
              <button className="w-8 h-8 rounded-full bg-pink-500 border-2 border-gray-300 hover:border-primary-500"></button>
              <button className="w-8 h-8 rounded-full bg-orange-500 border-2 border-gray-300 hover:border-primary-500"></button>
            </div>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
          <div className="flex gap-3">
            <button onClick={onClose} className="btn-secondary flex-1 py-3">
              초기화
            </button>
            <button onClick={onClose} className="btn-primary flex-1 py-3">
              적용하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}