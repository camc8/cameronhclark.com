import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { Cormorant_Garamond, Inter, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://camc8.com'),
  title: {
    default: 'Cameron Hernando Clark — Miami, FL',
    template: '%s | Cameron Hernando Clark',
  },
  description:
    'Cameron Hernando Clark is a Miami, Florida entrepreneur and technologist.',
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${dmSans.variable} ${GeistMono.variable}`}>
      <body className="bg-white text-neutral-900 antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
