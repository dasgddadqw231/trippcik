import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TripPick - 여행용품 전문 쇼핑몰',
  description: '트립픽에서 원하는 여행용품을 찾아보세요',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  )
}