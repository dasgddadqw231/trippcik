'use client'

import { useState } from 'react'

interface WishFinderModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WishFinderModal({ isOpen, onClose }: WishFinderModalProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [brandName, setBrandName] = useState('')
  const [description, setDescription] = useState('')

  if (!isOpen) return null

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = () => {
    console.log('Wish Finder 요청:', {
      image: uploadedImage,
      brandName,
      description
    })
    // 요청 처리 로직
    onClose()
    // 성공 알림 등 추가 가능
  }

  const handleReset = () => {
    setUploadedImage(null)
    setBrandName('')
    setDescription('')
  }

  return (
    <div className="modal-overlay animate-fade-in" onClick={handleBackgroundClick}>
      <div className="modal-content animate-slide-up" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="font-bold text-lg text-gray-900">Wish Finder</h2>
          <button onClick={handleReset} className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            초기화
          </button>
        </div>

        <div className="modal-body">
          {/* Info Section */}
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-medium text-blue-900 text-sm mb-1">Wish Finder란?</h3>
                <p className="text-blue-700 text-xs leading-relaxed">
                  원하는 상품의 사진을 업로드하시면, 저희가 해당 상품을 찾아서 연락드립니다. 
                  브랜드명과 추가 정보를 함께 입력해주시면 더 정확한 검색이 가능해요!
                </p>
              </div>
            </div>
          </div>

          {/* Image Upload Section */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">상품 이미지 업로드</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors">
              {uploadedImage ? (
                <div className="relative">
                  <img 
                    src={uploadedImage} 
                    alt="업로드된 이미지" 
                    className="max-w-full h-48 object-contain mx-auto rounded-lg"
                  />
                  <button
                    onClick={() => setUploadedImage(null)}
                    className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div>
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">사진을 업로드해주세요</h4>
                  <p className="text-sm text-gray-500 mb-4">JPG, PNG 파일 (최대 10MB)</p>
                </div>
              )}
              
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="btn-primary px-6 py-2 cursor-pointer inline-block"
              >
                {uploadedImage ? '다른 사진 선택' : '사진 선택'}
              </label>
            </div>
          </div>

          {/* Brand Name Input */}
          <div className="mb-6">
            <label className="form-label">브랜드명</label>
            <input
              type="text"
              className="form-input"
              placeholder="예: 샤넬, 구찌, 나이키..."
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
            />
            <p className="text-xs text-gray-500 mt-1">
              브랜드명을 정확히 입력해주시면 더 빠른 검색이 가능해요
            </p>
          </div>

          {/* Additional Description */}
          <div className="mb-6">
            <label className="form-label">추가 정보 (선택사항)</label>
            <textarea
              className="form-input resize-none"
              rows={3}
              placeholder="색상, 사이즈, 구매 희망 시기 등 추가 정보를 입력해주세요"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Examples Section */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-3">이런 정보가 있으면 더 좋아요!</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">정확한 브랜드명</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">상품명 일부</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">색상 정보</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">사이즈 정보</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
          <div className="flex gap-3">
            <button onClick={onClose} className="btn-secondary flex-1 py-3">
              뒤로가기
            </button>
            <button 
              onClick={handleSubmit} 
              className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                uploadedImage || brandName 
                  ? 'bg-primary-600 text-white hover:bg-primary-700' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!uploadedImage && !brandName}
            >
              요청하기
            </button>
          </div>
          {(!uploadedImage && !brandName) && (
            <p className="text-xs text-gray-500 text-center mt-2">
              이미지 또는 브랜드명을 입력해주세요
            </p>
          )}
        </div>
      </div>
    </div>
  )
}