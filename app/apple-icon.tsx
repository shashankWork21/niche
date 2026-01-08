import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          position: 'relative',
        }}
      >
        {/* Corner cuts - brutalist style */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '0 24px 24px 0',
            borderColor: 'transparent #00ff41 transparent transparent',
          }}
        />

        {/* Outer frame */}
        <div
          style={{
            position: 'absolute',
            width: '90%',
            height: '90%',
            border: '4px solid #00ff41',
            boxSizing: 'border-box',
          }}
        />

        {/* Abstract "N" letter mark */}
        <div
          style={{
            display: 'flex',
            width: '110px',
            height: '110px',
            position: 'relative',
          }}
        >
          {/* Left vertical bar */}
          <div
            style={{
              position: 'absolute',
              left: '20px',
              top: '15px',
              width: '15px',
              height: '80px',
              backgroundColor: '#00ff41',
            }}
          />
          {/* Diagonal bar */}
          <div
            style={{
              position: 'absolute',
              left: '35px',
              top: '15px',
              width: '55px',
              height: '15px',
              backgroundColor: '#00ff41',
              transform: 'rotate(55deg)',
              transformOrigin: 'left top',
            }}
          />
          {/* Right vertical bar */}
          <div
            style={{
              position: 'absolute',
              right: '20px',
              top: '15px',
              width: '15px',
              height: '80px',
              backgroundColor: '#00ff41',
            }}
          />
          {/* Accent line at top */}
          <div
            style={{
              position: 'absolute',
              left: '20px',
              top: '15px',
              width: '70px',
              height: '4px',
              backgroundColor: '#00ff41',
              opacity: 0.3,
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
