import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: 'Sripada Multi-Speciality Hospitals | Advanced Healthcare Under One Roof',
  description: 'Sripada Hospitals offers integrated Allopathy, Ayurveda & Rehabilitation services with 24/7 emergency care, experienced specialists, and modern facilities.',
  keywords: 'hospital, multi-speciality, allopathy, ayurveda, rehabilitation, emergency care, ICU, surgery, healthcare',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/Sripada Hospital (4).png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: '/Sripada Hospital (4).png',
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
    <html lang="en" className={`${roboto.variable} bg-background`}>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <main id="main-content">{children}</main>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
