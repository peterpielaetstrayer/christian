import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pielaet Construction — High-end framing and structural work',
  description:
    'High-end framing and structural work from Santa Barbara to Los Angeles.',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon-192.svg',
        type: 'image/svg+xml',
        sizes: '192x192',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
