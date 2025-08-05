import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TripPick - Korean Travel Shopping',
  description: 'Pre-order your desired Korean products and pick them up locally with TripPick',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  )
}