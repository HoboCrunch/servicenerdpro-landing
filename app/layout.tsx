import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ServiceNerd Pro - Business Management for Service Professionals',
  description: 'All-in-one platform for service businesses. Streamline operations, manage clients, and grow your business.',
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
