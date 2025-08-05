import { TopHeader } from '@/components/layout/TopHeader'
import { BottomNav } from '@/components/layout/BottomNav'
import Link from 'next/link'

export default function WishlistPage() {
  const wishlistItems = [
    {
      id: 1,
      name: 'Chanel No.5 Perfume',
      brand: 'Chanel',
      price: 185000,
      originalPrice: 210000,
      image: '/placeholder-product.jpg',
      inStock: true
    },
    {
      id: 2,
      name: 'Gucci Marmont Bag',
      brand: 'Gucci',
      price: 1250000,
      image: '/placeholder-product.jpg',
      inStock: true
    },
    {
      id: 3,
      name: 'Nike Air Max',
      brand: 'Nike',
      price: 139000,
      originalPrice: 169000,
      image: '/placeholder-product.jpg',
      inStock: false
    }
  ]

  return (
    <>
      <TopHeader title="Wishlist" showBack={true} />
      
      <div className="page-content px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">Wishlist</h2>
          <span className="text-sm text-gray-500">{wishlistItems.length} items</span>
        </div>

        {/* Wishlist Items */}
        {wishlistItems.length > 0 ? (
          <div className="space-y-4">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <span className="text-gray-400 text-xs text-center">{item.name}</span>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-500 mb-1">{item.brand}</p>
                    <h3 className="font-medium text-gray-900 mb-2 truncate">{item.name}</h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-primary-600">
                        ₩{item.price.toLocaleString()}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ₩{item.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.inStock 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-red-100 text-red-600'
                      }`}>
                        {item.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2">
                    <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <Link href="/shop" className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-6">
              <button className="btn-secondary flex-1 py-3">Remove All</button>
              <button className="btn-primary flex-1 py-3">Add All to Cart</button>
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-900 mb-2">No items in wishlist</h3>
            <p className="text-sm text-gray-500 mb-6">Add products you're interested in</p>
            <Link href="/shop" className="btn-primary px-6 py-3">
              Browse Products
            </Link>
          </div>
        )}
      </div>

      <BottomNav />
    </>
  )
}