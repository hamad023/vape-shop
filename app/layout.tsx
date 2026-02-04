import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cole Vape Store - Premium Vape Products & Flavors',
  description: 'Discover premium vape products with exceptional flavors. Explore our collection of fruit, menthol, tobacco, and dessert flavors.',
  keywords: ['vape', 'vape store', 'vape flavors', 'e-liquid', 'premium vape'],
  authors: [{ name: 'Cole Vape Store' }],
  openGraph: {
    title: 'Cole Vape Store - Premium Vape Products & Flavors',
    description: 'Discover premium vape products with exceptional flavors.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Cole Vape Store',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cole Vape Store - Premium Vape Products & Flavors',
    description: 'Discover premium vape products with exceptional flavors.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💨</text></svg>" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
