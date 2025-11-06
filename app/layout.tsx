import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ServiceNerd Pro - Professional Websites for Service Businesses',
  description: 'Get a professional website, branding, and Google presence for your service business—delivered in 7 days. $199/month. No $5,000 upfront fees. No tech skills required.',
  keywords: ['service business website', 'contractor website', 'small business website', 'professional branding', 'local SEO', 'website design'],
  authors: [{ name: 'ServiceNerd Pro' }],
  openGraph: {
    title: 'ServiceNerd Pro - Professional Websites for Service Businesses',
    description: 'Stop losing customers to online competition. Get your website, branding, and Google presence in 7 days for $199/month.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ServiceNerd Pro - Professional Websites for Service Businesses',
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
      <body>{children}</body>
    </html>
  )
}
