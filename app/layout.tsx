import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const headingFont = Playfair_Display({
  subsets: ['latin'],
  weight: ["400","700","800"],
  variable: '--font-heading',
  display: 'swap',
})

const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  weight: ["300","400"],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Generated landing page',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  )
}
