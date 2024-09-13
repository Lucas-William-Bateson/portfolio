import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const syne = Inter({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://portfolio.lucasbateson.com/"), // Update to your actual portfolio URL
    title: "Portfolio - Lucas William Bateson",
    description:
        "Lucas William Bateson is a creative developer and IT enthusiast specializing in building interactive and efficient web applications.",
    generator: "Next.js",
    applicationName: "Lucas Bateson Portfolio",
    keywords: [
        "Lucas Bateson portfolio",
        "React",
        "frontend developer",
        "backend developer",
        "full-stack developer",
        "software engineer",
        "creative developer",
        "web developer",
        "Next.js",
        "Vue.js",
        "Python",
        "Flask",
        "tech",
        "software development",
        "media production",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Portfolio - Lucas William Bateson",
        description:
            "Explore the portfolio of Lucas William Bateson, a developer skilled in React, Vue.js, Python, Flask, and media production. Discover his work in IT and media.",
        url: "https://portfolio.lucasbateson.com/",
        siteName: "Lucas Bateson Portfolio",
        images: [
            {
                url: "./public/lucasbateson_metadata.jpg",
                width: 1200,
                height: 630,
                alt: "Portfolio - Lucas William Bateson",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio - Lucas William Bateson",
        description:
            "Explore the portfolio of Lucas William Bateson, a developer skilled in React, Vue.js, Python, Flask, and media production.",
        creator: "@lucasbateson",
        creatorId: "your-twitter-id",
        images: ["./public/lucasbateson_metadata.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
