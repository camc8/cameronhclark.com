import type { Metadata, Viewport } from 'next'
import DosCard from './dos-card'

export const metadata: Metadata = {
  title: 'Cameron Clark — DOS Healthcare',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f5f4',
}

export default function DosPage() {
  return <DosCard />
}
