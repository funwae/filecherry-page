import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FileCherry - Files in, cherries out.',
  description: 'Offline-first AI OS on a USB stick. Drop your chaos folder, boot, and let Cody the Cherry Picker process everything locally.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

