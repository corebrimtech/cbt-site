"use client"

import Link from "next/link"
import Image from "next/image"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <Image src="/logo.png" alt="Core Brim Tech Logo" width={120} height={120} className="mx-auto mb-6" />
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        <div className="mt-12 p-6 bg-accent/50 rounded-xl border">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#about" className="text-blue-600 hover:underline">
              About
            </Link>
            <Link href="/#projects" className="text-blue-600 hover:underline">
              Projects
            </Link>
            <Link href="/services" className="text-blue-600 hover:underline">
              Services
            </Link>
            <Link href="/blog" className="text-blue-600 hover:underline">
              Blog
            </Link>
            <Link href="/#contact" className="text-blue-600 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
