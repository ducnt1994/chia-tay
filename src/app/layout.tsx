import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Farewell - Chia Tay Đồng Nghiệp',
  description: 'Trang web chia tay dành cho đồng nghiệp với những lời chúc tốt đẹp và kỷ niệm đáng nhớ',
  keywords: 'farewell, chia tay, đồng nghiệp, kỷ niệm, team building',
  authors: [{ name: 'Team Farewell' }],
  openGraph: {
    title: 'Farewell - Chia Tay Đồng Nghiệp',
    description: 'Trang web chia tay dành cho đồng nghiệp với những lời chúc tốt đẹp và kỷ niệm đáng nhớ',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
