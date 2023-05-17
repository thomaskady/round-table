import './globals.css'
import { Encode_Sans_Expanded } from 'next/font/google'

const encode = Encode_Sans_Expanded({
  weight: ['200', '400', '700', '900'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Round Table',
  description: 'Connecting parents and children',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={encode.className}>{children}</body>
    </html>
  )
}
