'use client'

import { BottomNav } from '@/components/layout/BottomNav'
import { TopHeader } from '@/components/layout/TopHeader'
import Link from 'next/link'
import { useState } from 'react'
import { ProductDetailModal } from '@/components/modals/ProductDetailModal'
import { FilterModal } from '@/components/modals/FilterModal'
import { SortModal } from '@/components/modals/SortModal'
import { WishFinderModal } from '@/components/modals/WishFinderModal'

// Product data
const PRODUCTS = [
  { 
    id: 1, 
    name: 'Chanel No.5 Perfume', 
    brand: 'Chanel', 
    price: 185000, 
    category: 'Special',
    image: '/placeholder-product.jpg',
    images: ['/placeholder-1.jpg', '/placeholder-2.jpg', '/placeholder-3.jpg'],
    description: 'One of the world\'s most famous perfumes, Chanel No.5 expresses feminine elegance with its timeless classic scent.',
    options: {
      size: ['50ml', '100ml', '200ml'],
      color: []
    },
    officialLink: 'https://www.chanel.com'
  },
  { 
    id: 2, 
    name: 'Gucci Marmont Bag', 
    brand: 'Gucci', 
    price: 1250000, 
    category: 'Brand',
    image: '/placeholder-product.jpg',
    images: ['/placeholder-1.jpg', '/placeholder-2.jpg'],
    description: 'Gucci\'s iconic Marmont collection features luxurious quilted design and signature double G hardware.',
    options: {
      size: ['Small', 'Medium', 'Large'],
      color: ['Black', 'Beige', 'White']
    },
    officialLink: 'https://www.gucci.com'
  },
  { 
    id: 3, 
    name: 'iPhone 15 Pro', 
    brand: 'Apple', 
    price: 1350000, 
    category: 'Category',
    image: '/placeholder-product.jpg',
    images: ['/placeholder-1.jpg', '/placeholder-2.jpg', '/placeholder-3.jpg', '/placeholder-4.jpg'],
    description: 'The lightest Pro model crafted from titanium, featuring the powerful A17 Pro chip and professional camera system.',
    options: {
      size: ['128GB', '256GB', '512GB', '1TB'],
      color: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium']
    },
    officialLink: 'https://www.apple.com'
  },
  { 
    id: 4, 
    name: 'Nike Air Max', 
    brand: 'Nike', 
    price: 139000, 
    category: 'Special',
    image: '/placeholder-product.jpg',
    images: ['/placeholder-1.jpg', '/placeholder-2.jpg'],
    description: 'Sneakers featuring Nike\'s classic Air Max technology, combining comfort and style in one product.',
    options: {
      size: ['240', '250', '260', '270', '280', '290'],
      color: ['White', 'Black', 'Navy', 'Gray']
    },
    officialLink: 'https://www.nike.com'
  }
]

export default function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState(undefined)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const [isSortModalOpen, setIsSortModalOpen] = useState(false)
  const [isWishFinderModalOpen, setIsWishFinderModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('special')
  const [activeBrand, setActiveBrand] = useState('All')
  const [activeCategory, setActiveCategory] = useState('All')

  const handleProductClick = (product: any) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(undefined)
  }

  const handleFilterOpen = () => {
    setIsFilterModalOpen(true)
  }

  const handleFilterClose = () => {
    setIsFilterModalOpen(false)
  }

  const handleSortOpen = () => {
    setIsSortModalOpen(true)
  }

  const handleSortClose = () => {
    setIsSortModalOpen(false)
  }

  const handleWishFinderOpen = () => {
    setIsWishFinderModalOpen(true)
  }

  const handleWishFinderClose = () => {
    setIsWishFinderModalOpen(false)
  }

  // Brand list
  const brands = ['All', 'Chanel', 'Gucci', 'Apple', 'Nike', 'LV', 'Hermès', 'Dior']
  
  // Category list  
  const categories = ['All', 'Perfume·Cosmetics', 'Bags·Wallets', 'Electronics', 'Shoes·Clothing', 'Accessories', 'Watches·Jewelry']
  return (
    <>
      <TopHeader title="Shopping" showBack={false} hasNotifications={true} />
      
      <div className="page-content px-4">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="flex items-center gap-2">
            {/* Search Input with Category Button Inside */}
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search for products"
                className="form-input pl-12 pr-10"
              />
              {/* Category Button Inside Search */}
              <button className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors rounded-md">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              {/* Search Icon */}
              <svg 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* Wish Finder Button - Radar Icon Only */}
            <button 
              onClick={handleWishFinderOpen}
              className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth={2}/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v20M2 12h20"/>
                <circle cx="12" cy="12" r="6" strokeWidth={1}/>
                <circle cx="12" cy="12" r="2" strokeWidth={1}/>
              </svg>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-3 gap-1">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="product-card cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleProductClick(product)}
            >
              <div className="relative">
                <div className="product-image bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">{product.name}</span>
                </div>
                <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-brand">{product.brand}</p>
                <div>
                  <span className="product-price">
                    ₩{product.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Add dummy products */}
          {Array.from({ length: 8 }).map((_, index) => {
            // Generate dummy product data
            const dummyProduct = {
              id: index + 10,
              name: `Travel Product ${index + 5}`,
              brand: 'Brand Name',
              price: Math.floor(Math.random() * 100 + 20) * 1000,
              category: 'Special',
              image: '/placeholder-product.jpg',
              images: ['/placeholder-1.jpg', '/placeholder-2.jpg'],
              description: `This product is essential for travel, featuring high-quality materials and practical design. It includes various functions that enhance travel convenience.`,
              options: {
                size: ['S', 'M', 'L'],
                color: ['Black', 'White', 'Gray']
              },
              officialLink: 'https://example.com'
            }
            
            return (
              <div 
                key={`dummy-${index}`} 
                className="product-card cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleProductClick(dummyProduct)}
              >
                <div className="relative">
                  <div className="product-image bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Product {index + 5}</span>
                  </div>
                  <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <div className="product-info">
                  <h3 className="product-title">{dummyProduct.name}</h3>
                  <p className="product-brand">{dummyProduct.brand}</p>
                  <div>
                    <span className="product-price">
                      ₩{dummyProduct.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Load More Button */}
        <div className="mt-8 text-center">
          <button className="btn-outline w-full">Load More Products</button>
        </div>
      </div>

      <BottomNav />
      
      {/* Product detail modal */}
      <ProductDetailModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />

      {/* Filter modal */}
      <FilterModal 
        isOpen={isFilterModalOpen}
        onClose={handleFilterClose}
      />

      {/* Sort modal */}
      <SortModal 
        isOpen={isSortModalOpen}
        onClose={handleSortClose}
      />

      {/* Wish Finder modal */}
      <WishFinderModal 
        isOpen={isWishFinderModalOpen}
        onClose={handleWishFinderClose}
      />
    </>
  )
}