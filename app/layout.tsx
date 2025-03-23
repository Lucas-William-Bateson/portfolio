import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lucas William Bateson - Software Developer',
  description: 'Portfolio of Lucas William Bateson, a software developer specializing in full-stack development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script defer src="https://telemetry.l3s.me/script.js" data-website-id="61df698f-abe7-40e6-a726-08ac9ad5b85d"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}