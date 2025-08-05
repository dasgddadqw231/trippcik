'use client'

interface SortModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SortModal({ isOpen, onClose }: SortModalProps) {
  if (!isOpen) return null

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const sortOptions = [
    { id: 'popular', label: 'Most Popular', selected: true },
    { id: 'latest', label: 'Latest', selected: false },
    { id: 'price-low', label: 'Price: Low to High', selected: false },
    { id: 'price-high', label: 'Price: High to Low', selected: false },
    { id: 'discount', label: 'Highest Discount', selected: false },
    { id: 'review', label: 'Most Reviewed', selected: false },
  ]

  return (
    <div className="modal-overlay animate-fade-in" onClick={handleBackgroundClick}>
      <div className="modal-content animate-slide-up" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <h2 className="font-bold text-lg text-gray-900">Sort</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <div className="space-y-1">
            {sortOptions.map((option) => (
              <button
                key={option.id}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  option.selected 
                    ? 'bg-primary-50 text-primary-600 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option.label}</span>
                  {option.selected && (
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
          <button onClick={onClose} className="btn-primary w-full py-3">
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}