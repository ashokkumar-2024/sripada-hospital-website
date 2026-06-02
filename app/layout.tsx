import type { Metadata } from 'next'
import { Figtree, Noto_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const figtree = Figtree({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-figtree'
})

const notoSans = Noto_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: '--font-noto-sans'
})

export const metadata: Metadata = {
  title: 'Sripada Multi-Speciality Hospitals | Advanced Healthcare Under One Roof',
  description: 'Sripada Hospitals offers integrated Allopathy, Ayurveda & Rehabilitation services with 24/7 emergency care, experienced specialists, and modern facilities.',
  keywords: 'hospital, multi-speciality, allopathy, ayurveda, rehabilitation, emergency care, ICU, surgery, healthcare',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Sripada Multi-Speciality Hospitals',
    description: 'Advanced Multi-Speciality Care Under One Roof - Integrating Allopathy, Ayurveda & Rehabilitation',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0891B2',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${notoSans.variable} bg-background`}>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <main id="main-content">{children}</main>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
