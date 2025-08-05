import { BottomNav } from '@/components/layout/BottomNav'
import { TopHeader } from '@/components/layout/TopHeader'
import Link from 'next/link'

export default function HomePage() {
  const brands = [
    { 
      name: 'Chanel', 
      color: 'bg-gradient-to-br from-black to-gray-800', 
      textColor: 'text-white', 
      accent: 'shadow-xl',
      logo: (
        <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-3">
          <span className="text-white font-bold text-sm">C</span>
        </div>
      )
    },
    { 
      name: 'Gucci', 
      color: 'bg-gradient-to-br from-green-600 to-emerald-700', 
      textColor: 'text-white', 
      accent: 'shadow-xl',
      logo: (
        <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-3">
          <span className="text-white font-bold text-sm">G</span>
        </div>
      )
    },
    { 
      name: 'Apple', 
      color: 'bg-gradient-to-br from-gray-800 to-slate-900', 
      textColor: 'text-white', 
      accent: 'shadow-xl',
      logo: (
        <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-3">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z"/>
            <path d="M15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z"/>
          </svg>
        </div>
      )
    },
    { 
      name: 'Nike', 
      color: 'bg-gradient-to-br from-orange-500 to-red-600', 
      textColor: 'text-white', 
      accent: 'shadow-xl',
      logo: (
        <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-3">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.456 0-2.525-.616-3.207-1.848-.617-1.155-.925-2.679-.925-4.572 0-1.847.291-3.668.874-5.464L2.487 3.157c-.291.925-.437 1.803-.437 2.634 0 1.155.291 2.017.874 2.586.583.616 1.364.925 2.34.925.925 0 2.017-.291 3.276-.874L24 .5v7.3z"/>
          </svg>
        </div>
      )
    },
    { 
      name: 'LV', 
      color: 'bg-gradient-to-br from-amber-600 to-yellow-700', 
      textColor: 'text-white', 
      accent: 'shadow-xl',
      logo: (
        <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-3">
          <span className="text-white font-bold text-sm">LV</span>
        </div>
      )
    },
    { 
      name: 'Hermès', 
      color: 'bg-gradient-to-br from-orange-600 to-orange-700', 
      textColor: 'text-white', 
      accent: 'shadow-xl',
      logo: (
        <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-3">
          <span className="text-white font-bold text-sm">H</span>
        </div>
      )
    },
    { 
      name: 'Dior', 
      color: 'bg-gradient-to-br from-gray-700 to-slate-800', 
      textColor: 'text-white', 
      accent: 'shadow-xl',
      logo: (
        <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-3">
          <span className="text-white font-bold text-sm">D</span>
        </div>
      )
    },
    { 
      name: 'Prada', 
      color: 'bg-gradient-to-br from-black to-gray-900', 
      textColor: 'text-white', 
      accent: 'shadow-xl',
      logo: (
        <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-3">
          <span className="text-white font-bold text-sm">P</span>
        </div>
      )
    }
  ]

  return (
    <>
      <TopHeader title="TripPick" showBack={false} hasNotifications={true} />
      
      <div className="page-content">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-100 mx-4 rounded-3xl mb-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary-200 to-transparent rounded-full -mr-32 -mt-32 opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-200 to-transparent rounded-full -ml-24 -mb-24 opacity-30"></div>
          <div className="relative text-center py-12 px-6">
            <div className="mb-4">
              <span className="inline-block text-4xl mb-2">🇰🇷</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
              New Culture of<br/>Korean Travel Shopping
            </h1>
            <div className="inline-block bg-white bg-opacity-80 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <p className="text-lg font-medium text-primary-700">TripPick</p>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
              Pre-order your desired Korean products<br/>
              <span className="font-medium text-primary-600">and pick them up locally</span>
            </p>
          </div>
        </div>

        <div className="px-4">
          {/* Brand Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Popular Brands</h2>
              <div className="flex items-center text-primary-600 text-sm font-medium">
                <span>View All</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {brands.map((brand, index) => (
                <Link key={index} href="/shop" className="block group">
                  <div className={`${brand.color} ${brand.textColor} ${brand.accent} rounded-2xl p-4 text-center transform group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden min-h-[100px] flex flex-col items-center justify-center`}>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {brand.logo}
                      </div>
                      <p className="text-xs font-bold leading-tight">{brand.name}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-600 mb-1">50K+</div>
                  <div className="text-xs text-gray-500">Total Orders</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600 mb-1">4.9★</div>
                  <div className="text-xs text-gray-500">Average Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600 mb-1">24H</div>
                  <div className="text-xs text-gray-500">Average Delivery</div>
                </div>
              </div>
            </div>
          </section>

          {/* Reviews Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Customer Reviews</h2>
              <div className="flex items-center text-yellow-500">
                <span className="text-lg mr-1">⭐</span>
                <span className="text-sm font-medium text-gray-600">4.9 (2,847)</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-100 to-transparent rounded-full -mr-10 -mt-10"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      M
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Minji Kim</p>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
                        <span className="text-xs text-gray-500 ml-1">Perfect travel experience!</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    "I got a Gucci bag at such a great price! It's authentic and delivery was super fast. So convenient to pick it up during my trip! 👍"
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100 to-transparent rounded-full -mr-10 -mt-10"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      J
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Jihoon Park</p>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
                        <span className="text-xs text-gray-500 ml-1">Wish Finder is amazing!</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    "Found my iPhone instantly with Wish Finder! Such an incredible feature. The AI technology is truly amazing! 🔍"
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How it Works */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6">
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">Select Brand</h3>
                    <p className="text-sm text-gray-600">Touch your preferred brand to explore products</p>
                  </div>
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">Smart Search</h3>
                    <p className="text-sm text-gray-600">Discover products with AI-powered Wish Finder</p>
                  </div>
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3" strokeWidth={2}/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                    </svg>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">Pre-order</h3>
                    <p className="text-sm text-gray-600">Order and reserve before your trip</p>
                  </div>
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17" />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">Local Pickup</h3>
                    <p className="text-sm text-gray-600">Conveniently pick up at your travel destination</p>
                  </div>
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="mb-8">
            <Link href="/shop" className="block">
              <div className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-700 to-indigo-700 rounded-3xl p-8 text-white text-center group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className="mb-4">
                    <div className="inline-block p-3 bg-white bg-opacity-20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 17a2 2 0 11-4 0 2 2 0 014 0zM9 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Start Your Journey Now!</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Prepare for your perfect Korean trip<br/>
                    smarter with TripPick
                  </p>
                  <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full font-bold group-hover:bg-opacity-30 transition-all duration-300">
                    Start Shopping
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <BottomNav />
    </>
  )
}