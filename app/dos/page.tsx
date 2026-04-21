import type { Metadata, Viewport } from 'next'
import DosCard from './dos-card'

export const metadata: Metadata = {
  title: { absolute: 'Cameron Hernando Clark — DOS Healthcare' },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
}

export const viewport: Viewport = {
  themeColor: '#f7f4ed',
}

export default function DosPage() {
  return <DosCard />
}
