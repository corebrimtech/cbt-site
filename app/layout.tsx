import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Core Brim Tech | Cybersecurity & Tech Innovation",
    template: "%s | Core Brim Tech",
  },
  description:
    "Core Brim Tech is a full-spectrum technology company from Sierra Leone building advanced solutions in cybersecurity, AI, automation, and digital infrastructure. Featuring Ruth AI, our flagship autonomous assistant.",
  keywords: [
    "Core Brim Tech",
    "cybersecurity",
    "Sierra Leone",
    "tech innovation",
    "Ruth AI",
    "autonomous AI",
    "ethical hacking",
    "AI automation",
    "UN SDGs",
    "penetration testing",
    "bug bounty",
    "Momodu Kamara-Kolleh",
    "Austin",
    "cloud security",
    "software development",
  ],
  authors: [{ name: "Momodu Kamara-Kolleh", url: "https://corebrimtech.com" }],
  creator: "Momodu Kamara-Kolleh",
  publisher: "Core Brim Tech",
  metadataBase: new URL("https://corebrimtech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://corebrimtech.com",
    siteName: "Core Brim Tech",
    title: "Core Brim Tech | Cybersecurity & Tech Innovation",
    description:
      "Building advanced cybersecurity solutions and AI-powered automation from Sierra Leone to the world. Featuring Ruth AI.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Core Brim Tech Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Brim Tech | Cybersecurity & Tech Innovation",
    description: "Building advanced cybersecurity solutions and AI-powered automation from Sierra Leone to the world.",
    images: ["/logo.png"],
    creator: "@corebrimtech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  manifest: "/manifest.json",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Vercel Analytics */}
        <Script
          src="https://va.vercel-scripts.com/v1/script.debug.js"
          strategy="afterInteractive"
          data-mode="production"
        />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Core Brim Tech",
              description:
                "Full-spectrum technology company building advanced cybersecurity and AI solutions from Sierra Leone.",
              url: "https://corebrimtech.com",
              logo: "https://corebrimtech.com/logo.png",
              founder: {
                "@type": "Person",
                name: "Momodu Kamara-Kolleh",
                alternateName: "Austin",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Freetown",
                addressCountry: "Sierra Leone",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "momodukamarakolleh0@gmail.com",
                telephone: "+447932070340",
                contactType: "Business Inquiries",
              },
              sameAs: [
                "https://twitter.com/corebrimtech",
                "https://linkedin.com/in/momodu-kamara-kolleh",
                "https://github.com/corebrimtech",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
