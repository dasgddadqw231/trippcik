import { TopHeader } from '@/components/layout/TopHeader'
import Link from 'next/link'

export default function CartPage() {
  return (
    <>
      <TopHeader title="Cart" showBack={true} />
      
      <div className="page-content px-4">
        {/* Header Actions */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-gray-700">Select All</span>
          </div>
          <button className="text-sm text-gray-500">Delete Selected</button>
        </div>

        {/* Cart Items */}
        <div className="space-y-4 mb-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
              <div className="flex gap-3">
                {/* Checkbox */}
                <div className="flex-shrink-0 flex items-center h-20">
                  <input type="checkbox" className="w-5 h-5 text-primary-600 rounded border-gray-300" />
                </div>

                {/* Product Image */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-xs">Product</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0 mr-2">
                      <h3 className="font-medium text-gray-900 text-sm mb-1">Travel Carrier {index + 1}</h3>
                      <p className="text-xs text-gray-500">Color: Black, Size: 24inch</p>
                    </div>
                    
                    {/* Delete Button */}
                    <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Quantity Control and Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 rounded-l-lg transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <div className="w-10 h-8 flex items-center justify-center border-x border-gray-300 text-sm font-medium">
                        1
                      </div>
                      <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 rounded-r-lg transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <span className="text-base font-bold text-primary-600">
                        {(89000 * (index + 1)).toLocaleString()}
                      </span>
                      <span className="text-primary-600 text-sm ml-1">₩</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommended Products */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-4">Recommended Products</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex-shrink-0 w-32">
                <div className="product-card">
                  <div className="w-full h-24 bg-gray-200 rounded-lg mb-2"></div>
                  <div className="p-2">
                    <h4 className="text-xs font-medium text-gray-900 line-clamp-2 mb-1">
                      Recommended Item {index + 1}
                    </h4>
                    <p className="text-xs font-bold text-primary-600">₩25,000</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price Summary */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-900">₩267,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="text-gray-900">₩3,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Discount</span>
              <span className="text-red-500">-₩5,000</span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex items-center justify-between font-medium">
              <span className="text-gray-900">Total</span>
              <span className="text-lg text-primary-600">₩265,000</span>
            </div>
          </div>
        </div>

        {/* Coupon Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Coupon/Points</span>
            <button className="text-sm text-primary-600">Apply</button>
          </div>
          <div className="mt-2 space-y-2">
            <div className="flex items-center gap-2">
              <input type="text" placeholder="Enter coupon code" className="form-input text-sm flex-1" />
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Available Points</span>
              <span>5,000P</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200 p-4 safe-area-bottom">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-gray-500">3 items total</p>
            <p className="font-bold text-lg text-primary-600">₩265,000</p>
          </div>
          <Link href="/order" className="btn-primary px-8 py-3 rounded-xl">
            Order Now
          </Link>
        </div>
      </div>
    </>
  )
}