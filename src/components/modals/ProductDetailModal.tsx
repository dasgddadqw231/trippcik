'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface ProductDetailModalProps {
  isOpen: boolean
  onClose: () => void
  product?: {
    id: number
    name: string
    brand: string
    price: number
    originalPrice?: number
    images: string[]
    description: string
    options: {
      size?: string[]
      color?: string[]
    }
    officialLink?: string
  }
}

export function ProductDetailModal({ isOpen, onClose, product }: ProductDetailModalProps) {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)

  if (!isOpen || !product) return null

  const handleAddToCart = () => {
    // Add to cart logic (to be implemented later)
    console.log('Added to cart:', {
      productId: product.id,
      selectedSize,
      selectedColor,
      quantity
    })
    
    // Navigate to cart page
    onClose()
    router.push('/cart')
  }

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
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="font-bold text-lg text-gray-900">Product Details</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          {/* Product Images */}
          <div className="mb-6">
            <div className="aspect-square bg-gray-200 rounded-lg mb-3 relative overflow-hidden flex items-center justify-center">
              <span className="text-gray-400 text-lg">{product.name}</span>
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                {selectedImage + 1} / {product.images.length}
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-16 bg-gray-200 rounded-lg border-2 transition-colors ${
                    selectedImage === index ? 'border-primary-600' : 'border-transparent'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
            <h1 className="font-bold text-xl text-gray-900 mb-2">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-2xl text-primary-600">
                ₩{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">
                  ₩{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            
            {/* Official store link button */}
            {product.officialLink && (
              <a 
                href={product.officialLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View on Official Store
              </a>
            )}
          </div>

          {/* Options */}
          {product.options.color && product.options.color.length > 0 && (
            <div className="mb-4">
              <h3 className="font-medium text-gray-900 mb-2">Color</h3>
              <div className="flex gap-2 flex-wrap">
                {product.options.color.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-lg text-sm transition-colors ${
                      selectedColor === color
                        ? 'border-primary-600 bg-primary-50 text-primary-600'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.options.size && product.options.size.length > 0 && (
            <div className="mb-4">
              <h3 className="font-medium text-gray-900 mb-2">Size</h3>
              <div className="flex gap-2 flex-wrap">
                {product.options.size.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg text-sm transition-colors ${
                      selectedSize === size
                        ? 'border-primary-600 bg-primary-50 text-primary-600'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-2">Quantity</h3>
            <div className="quantity-control w-fit">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="quantity-btn hover:bg-gray-50"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="quantity-input"
                min="1"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="quantity-btn hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-2">Description</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>


        </div>

        {/* Bottom Action Bar */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
          <div className="flex gap-3 mb-3">
            <button 
              onClick={onClose}
              className="btn-secondary px-4 py-3"
            >
              Back
            </button>
            <button 
              onClick={handleAddToCart}
              className="btn-primary flex-1 py-3"
            >
              Add to Cart
            </button>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Total {quantity} item{quantity > 1 ? 's' : ''} • ₩{(product.price * quantity).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}