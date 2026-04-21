import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import path from 'path'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default async function AppleIcon() {
  const fontData = await readFile(
    path.join(process.cwd(), 'app/fonts/cormorant-garamond-700.ttf'),
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
          borderRadius: '38px',
        }}
      >
        <span
          style={{
            color: '#fff',
            fontSize: '128px',
            fontWeight: 700,
            fontFamily: 'Garamond',
            lineHeight: 1,
            paddingBottom: '10px',
          }}
        >
          C
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Garamond', data: fontData, style: 'normal', weight: 700 }],
    },
  )
}
