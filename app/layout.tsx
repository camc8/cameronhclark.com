import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cameron Hernando Clark',
  description:
    'Software engineer, marketing director, property manager, and AI entrepreneur.',
  openGraph: {
    title: 'Cameron Hernando Clark',
    description:
      'Software engineer, marketing director, property manager, and AI entrepreneur.',
    url: 'https://camc8.com',
    siteName: 'Cameron Hernando Clark',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-white text-neutral-900 antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
