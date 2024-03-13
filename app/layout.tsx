import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const madimi = localFont({
  src: [
    {
      path: '../public/fonts/MadimiOne-Regular.ttf',
      weight: '400',
    },
  ]
});

export const metadata: Metadata = {
  title: "Lucas William Bateson",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={madimi.className}>{children}</body>
    </html>
  );
}
