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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: "AI Money",
  description: "AI Money is a smart financial technology platform that leverages artificial intelligence to simplify how individuals and businesses manage, grow, and optim",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} scroll-smooth`}>
      <body>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"AI Money","description":"AI Money is a smart financial technology platform that leverages artificial intelligence to simplify how individuals and businesses manage, grow, and optimize their money. It combines intelligent automation, predictive analytics, and real-time data processing to deliver personalized financial insights, faster decision-making, and more efficient money management.\r\n\r\nThe platform can power services such as automated budgeting, smart investment recommendations, risk assessment, fraud detection, credit scoring, and digital payment optimization. By transforming complex financial processes into seamless digital experiences, AI Money helps users save time, reduce risk, and unlock better financial opportunities.\r\n\r\nDesigned for the modern digital economy, AI Money bridges the gap between finance and advanced AI technology — making financial services smarter, faster, and more accessible for everyone.","email":"jiachwen99@gmail.com","address":"B5-1-3, Forest Green Condominium, Bandar Sungai Long"}` }} />
      {children}</body>
    </html>
  )
}
