import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JVJ Computers - Quality Computers & Accessories',
  description: 'Your trusted source for laptops, computers, accessories, and professional repair services in Uganda.',
  keywords: 'computers, laptops, accessories, repairs, Uganda, JVJ Computers',
  authors: [{ name: 'JVJ Computers' }],
  openGraph: {
    title: 'JVJ Computers - Quality Computers & Accessories',
    description: 'Your trusted source for laptops, computers, accessories, and professional repair services.',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
