import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
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
            fontSize: '22px',
            fontWeight: 700,
            fontFamily: 'sans-serif',
            lineHeight: 1,
            marginTop: '1px',
          }}
        >
          C
        </span>
      </div>
    ),
    { ...size },
  )
}
