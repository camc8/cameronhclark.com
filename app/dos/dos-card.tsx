'use client'

import Image from 'next/image'

const PHONE = '3058020002'
const PHONE_DISPLAY = '(305) 802-0002'
const EMAIL = 'cameron@doshealthcare.com'
const NAME = 'Cameron Hernando Clark'
const TITLE = 'Community Relations Director'
const SPECIALTY = 'Assisted Living & Memory Care Placement'
const COMPANY = 'DOS Healthcare'

function saveContact() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${NAME}`,
    `N:Clark;Cameron;Hernando;;`,
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
  return (
    <div className="min-h-dvh bg-stone-100 flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-xs">
        <div className="bg-white rounded-2xl shadow-md border border-stone-200 overflow-hidden">

          {/* Gold accent bar */}
          <div className="h-[3px] bg-gradient-to-r from-stone-400 via-amber-300 to-stone-400" />

          <div className="px-7 pt-8 pb-7 flex flex-col items-center text-center">

            {/* Photo */}
            <div className="mb-5 w-24 h-24 rounded-full overflow-hidden ring-2 ring-stone-200 ring-offset-2 shrink-0">
              <Image
                src="/images/cameron-clark.jpg"
                alt="Cameron Hernando Clark"
                width={96}
                height={96}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>

            {/* Name */}
            <h1
              className="text-xl font-semibold text-stone-900 tracking-wide leading-tight mb-0.5"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              {NAME}
            </h1>

            {/* Title */}
            <p
              className="text-sm text-stone-600 mb-1 tracking-wide"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              {TITLE}
            </p>

            {/* Specialty */}
            <p
              className="text-xs text-stone-400 italic mb-4 leading-snug"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              &ldquo;{SPECIALTY}&rdquo;
            </p>

            {/* Company badge */}
            <div className="inline-flex items-center gap-1.5 bg-stone-50 border border-stone-200 rounded-full px-3 py-1 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-800 inline-block" />
              <span
                className="text-xs font-medium text-stone-700 tracking-wider uppercase"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                {COMPANY}
              </span>
            </div>

            {/* Divider */}
            <div className="w-12 h-px bg-stone-200 mb-6" />

            {/* Action buttons */}
            <div className="grid grid-cols-3 gap-2 w-full mb-6">
              <a
                href={`sms:+1${PHONE}`}
                className="flex flex-col items-center gap-1.5 py-3 px-1 rounded-xl bg-stone-900 text-white hover:bg-stone-700 active:scale-95 transition-all"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span className="text-[11px] font-medium tracking-wide" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  Text
                </span>
              </a>

              <a
                href={`tel:+1${PHONE}`}
                className="flex flex-col items-center gap-1.5 py-3 px-1 rounded-xl bg-stone-900 text-white hover:bg-stone-700 active:scale-95 transition-all"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.95-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-[11px] font-medium tracking-wide" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  Call
                </span>
              </a>

              <button
                onClick={saveContact}
                className="flex flex-col items-center gap-1.5 py-3 px-1 rounded-xl bg-stone-900 text-white hover:bg-stone-700 active:scale-95 transition-all cursor-pointer"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v14a2 2 0 0 1-2 2z" />
                  <polyline points="17 21 17 13 7 13 7 21" />
                  <polyline points="7 3 7 8 15 8" />
                </svg>
                <span className="text-[11px] font-medium tracking-wide" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  Save
                </span>
              </button>
            </div>

            {/* Contact info */}
            <div className="w-full space-y-2.5 border-t border-stone-100 pt-5">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2.5 text-stone-500 hover:text-stone-900 transition-colors justify-center"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-400 shrink-0">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-xs" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  {EMAIL}
                </span>
              </a>
              <a
                href={`tel:+1${PHONE}`}
                className="flex items-center gap-2.5 text-stone-500 hover:text-stone-900 transition-colors justify-center"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-400 shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.95-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-xs" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  {PHONE_DISPLAY}
                </span>
              </a>
            </div>
          </div>
        </div>

        <p
          className="text-center text-[11px] text-stone-400 mt-4 tracking-widest uppercase"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          DOS Healthcare
        </p>
      </div>
    </div>
  )
}
