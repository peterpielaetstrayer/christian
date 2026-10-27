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
  // Review deployments should never compete with the published domain in search.
  robots: process.env.VERCEL_ENV === 'preview' ? { index: false, follow: false } : undefined,
  metadataBase: new URL('https://www.pielaetconstruction.com'),
  title: 'Pielaet Construction & Design — Custom residential construction',
  description:
    'Custom residential construction, renovations, and structural work from Santa Barbara to Los Angeles.',
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
