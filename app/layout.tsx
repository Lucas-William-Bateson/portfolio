import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Optimize font loading
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Use swap to prevent FOIT (Flash of Invisible Text)
  preload: true
});

export const metadata: Metadata = {
  title: 'Lucas William Bateson - Software Developer',
  description: 'Portfolio of Lucas William Bateson, a software developer specializing in full-stack development.',
  // Add metadata for better performance and SEO
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to analytics domain */}
        <link rel="preconnect" href="https://telemetry.l3s.me" crossOrigin="" />

        {/* Analytics script with performance optimizations */}
        <script
          defer
          src="https://telemetry.l3s.me/script.js"
          data-website-id="61df698f-abe7-40e6-a726-08ac9ad5b85d"
          data-auto-track="true"
          data-cache="true"
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}