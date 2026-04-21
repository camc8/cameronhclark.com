import type { Metadata } from 'next'
import DosCard from './dos-card'

export const metadata: Metadata = {
  title: 'Cameron Clark — DOS Healthcare',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function DosPage() {
  return <DosCard />
}
