import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | Core Brim Tech",
  description: "Privacy Policy for Core Brim Tech - Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Core Brim Tech Logo" width={50} height={50} className="w-12 h-12" />
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CORE BRIM TECH
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-blue-600 transition mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Core Brim Tech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website or use
                our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Fill out contact forms on our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Request information about our services</li>
                <li>Engage with our cybersecurity tools or platforms</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This information may include your name, email address, phone number, and any other information you
                choose to provide.
              </p>

              <h3 className="text-xl font-semibold mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your device,
                including information about your web browser, IP address, time zone, and cookies installed on your
                device.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you technical updates, security alerts, and administrative messages</li>
                <li>Improve our website and services</li>
                <li>Develop new products and services</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal
                information. However, no method of transmission over the internet or electronic storage is 100% secure,
                and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to delete your personal information</li>
                <li>The right to object to or restrict processing</li>
                <li>The right to data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website may contain links to third-party websites or services. We are not responsible for the
                privacy practices of these third parties. We encourage you to review their privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none text-muted-foreground mb-4 space-y-2">
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:momodukamarakolleh0@gmail.com" className="text-blue-600 hover:underline">
                    momodukamarakolleh0@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong> +44 7932 070340
                </li>
                <li>
                  <strong>Location:</strong> Freetown, Sierra Leone
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-accent/50 py-8 px-6 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">© 2025 Core Brim Tech. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-muted-foreground hover:text-blue-600 transition text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-blue-600 transition text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
