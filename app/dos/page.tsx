'use client'

import { GeistSans } from 'geist/font/sans'

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
    <div
      className={`${GeistSans.className} min-h-screen bg-neutral-50 flex flex-col items-center justify-center px-4 py-12`}
    >
      <div className="w-full max-w-sm">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
          {/* Top accent bar */}
          <div className="h-1 bg-neutral-900" />

          <div className="px-8 py-10 text-center">
            {/* Avatar */}
            <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center">
              <span className="text-white text-lg font-semibold tracking-tight">
                CHC
              </span>
            </div>

            {/* Name & Title */}
            <h1 className="text-xl font-semibold text-neutral-900 tracking-tight mb-1">
              {NAME}
            </h1>
            <p className="text-sm font-medium text-neutral-600 mb-1">
              {TITLE}
            </p>
            <p className="text-xs text-neutral-400 italic mb-4">
              &ldquo;{SPECIALTY}&rdquo;
            </p>

            {/* Company badge */}
            <div className="inline-flex items-center gap-1.5 bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 inline-block" />
              <span className="text-xs font-medium text-neutral-700">
                {COMPANY}
              </span>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <a
                href={`sms:+1${PHONE}`}
                className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-700 transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span className="text-xs font-medium">Text me</span>
              </a>

              <a
                href={`tel:+1${PHONE}`}
                className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-700 transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.95-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-xs font-medium">Call me</span>
              </a>

              <button
                onClick={saveContact}
                className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-700 transition-colors cursor-pointer"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="text-xs font-medium">Save contact</span>
              </button>
            </div>

            {/* Contact info */}
            <div className="space-y-3 text-sm border-t border-neutral-100 pt-6">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900 transition-colors justify-center"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-neutral-400 shrink-0"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {EMAIL}
              </a>
              <a
                href={`tel:+1${PHONE}`}
                className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900 transition-colors justify-center"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-neutral-400 shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.95-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-neutral-400 mt-6">
          DOS Healthcare · Senior Care Placement
        </p>
      </div>
    </div>
  )
}
