'use client'

import Image from 'next/image'
import { useEffect } from 'react'

const PHONE = '3058020002'
const PHONE_DISPLAY = '(305) 802-0002'
const EMAIL = 'cameron@doshealthcare.com'
const NAME_LINE1 = 'Cameron'
const NAME_LINE2 = 'Hernando Clark'
const TITLE = 'Community Relations Director'
const SPECIALTY = 'Assisted Living & Memory Care Placement'
const COMPANY = 'DOS Healthcare'
const BG = '#f5f5f4' // stone-100

function saveContact() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Cameron Hernando Clark',
    'N:Clark;Cameron;Hernando;;',
    `ORG:${COMPANY}`,
    `TITLE:${TITLE}`,
    `TEL;TYPE=CELL:+1${PHONE}`,
    `EMAIL:${EMAIL}`,
    'END:VCARD',
  ].join('\r\n')

  const blob = new Blob([vcard], { type: 'text/vcard' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'cameron-clark-dos.vcf'
  a.click()
  URL.revokeObjectURL(url)
}

export default function DosCard() {
  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    html.style.backgroundColor = BG
    body.style.backgroundColor = BG
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    return () => {
      html.style.backgroundColor = ''
      body.style.backgroundColor = ''
      html.style.overflow = ''
      body.style.overflow = ''
    }
  }, [])

  return (
    <div className="h-dvh overflow-hidden bg-stone-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xs">
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">

          <div className="px-7 pt-7 pb-6 flex flex-col items-center text-center">

            {/* Photo */}
            <div className="mb-4 w-20 h-20 rounded-full overflow-hidden ring-1 ring-stone-200 shrink-0">
              <Image
                src="/images/cameron-clark.jpg"
                alt="Cameron Hernando Clark"
                width={80}
                height={80}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>

            {/* Name */}
            <h1 className="font-serif text-3xl font-bold text-stone-900 tracking-wide leading-[1.1] mb-1">
              {NAME_LINE1}
              <br />
              {NAME_LINE2}
            </h1>

            {/* Title */}
            <p className="font-serif text-sm text-stone-500 mb-1">
              {TITLE}
            </p>

            {/* Specialty */}
            <p className="font-serif text-sm text-stone-400 italic mb-1">
              {SPECIALTY}
            </p>

            {/* Company */}
            <p className="font-serif text-sm text-stone-400 tracking-widest uppercase mb-5">
              {COMPANY}
            </p>

            {/* Primary actions */}
            <div className="flex justify-center gap-8 mb-3 w-full">
              <a href={`sms:+1${PHONE}`} className="flex flex-col items-center gap-1.5 active:scale-95 transition-transform">
                <div className="w-14 h-14 rounded-full bg-stone-900 hover:bg-stone-700 transition-colors flex items-center justify-center text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <span className="text-xs text-stone-500 font-medium">Text</span>
              </a>

              <a href={`tel:+1${PHONE}`} className="flex flex-col items-center gap-1.5 active:scale-95 transition-transform">
                <div className="w-14 h-14 rounded-full bg-stone-900 hover:bg-stone-700 transition-colors flex items-center justify-center text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.95-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="text-xs text-stone-500 font-medium">Call</span>
              </a>
            </div>

            {/* Save Contact */}
            <button
              onClick={saveContact}
              className="w-full flex items-center justify-center gap-2 py-2.5 mb-4 rounded-xl border border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100 hover:border-stone-300 active:scale-[0.98] transition-all cursor-pointer"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="text-sm font-medium">Save Contact</span>
            </button>

            {/* Contact info */}
            <div className="w-full space-y-2 border-t border-stone-100 pt-4">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 justify-center text-stone-400 hover:text-stone-800 transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-sm">{EMAIL}</span>
              </a>
              <a href={`tel:+1${PHONE}`} className="flex items-center gap-2.5 justify-center text-stone-400 hover:text-stone-800 transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.95-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-sm">{PHONE_DISPLAY}</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
