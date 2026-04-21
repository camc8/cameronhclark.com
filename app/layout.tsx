import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

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
