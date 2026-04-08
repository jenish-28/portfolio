import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jenishkumarpatel.dev"),
  title: "Jenishkumar Patel | Full-Stack Software Developer",
  description:
    "Portfolio of Jenishkumar Patel, a full-stack software developer building scalable web applications with React, Next.js, FastAPI, and clean architecture.",
  openGraph: {
    title: "Jenishkumar Patel | Full-Stack Software Developer",
    description:
      "Production-focused full-stack engineer specializing in React, FastAPI, analytics platforms, and secure backend systems.",
    type: "website",
    url: "/",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0a0a0f] text-[#f0f0f0]">{children}</body>
    </html>
  );
}
