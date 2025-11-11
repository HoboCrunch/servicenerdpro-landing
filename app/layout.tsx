import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import Footer from './components/Footer'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'Service Pro+ - Professional Websites for Service Businesses',
  description: 'Get a professional website, branding, and Google presence for your service business—delivered in 7 days. $199/month. No $5,000 upfront fees. No tech skills required.',
  keywords: ['service business website', 'contractor website', 'small business website', 'professional branding', 'local SEO', 'website design'],
  authors: [{ name: 'Service Pro+' }],
  openGraph: {
    title: 'Service Pro+ - Professional Websites for Service Businesses',
    description: 'Stop losing customers to online competition. Get your website, branding, and Google presence in 7 days for $199/month.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Pro+ - Professional Websites for Service Businesses',
    description: 'Website, branding, and Google presence delivered in 7 days. $199/month.',
  },
  icons: {
    icon: '/servicenerdpro-logo.svg',
    shortcut: '/servicenerdpro-logo.svg',
    apple: '/servicenerdpro-logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PZV18FBWD6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PZV18FBWD6');
          `}
        </Script>
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
