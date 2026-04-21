import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import path from 'path'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default async function Icon() {
  const fontData = await readFile(
    path.join(process.cwd(), 'app/fonts/playfair-display-900.ttf'),
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000',
          borderRadius: '7px',
        }}
      >
        <span
          style={{
            color: '#fff',
            fontSize: '23px',
            fontWeight: 700,
            fontFamily: 'Playfair',
            lineHeight: 1,
            paddingBottom: '2px',
          }}
        >
          C
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Playfair', data: fontData, style: 'normal', weight: 900 }],
    },
  )
}
