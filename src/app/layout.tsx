// src/app/layout.tsx
import '../styles/globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Canary Wallet',
  description: 'Early warning smart wallet with canary mechanism',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
