'use client'
import { APIProvider } from '@vis.gl/react-google-maps'
import '../styles/tailwind.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </APIProvider>
  )
}
