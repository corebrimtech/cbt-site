import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms of Service | Core Brim Tech",
  description: "Terms of Service for Core Brim Tech - Legal terms and conditions for using our services.",
}

export default function TermsPage() {
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

          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing or using Core Brim Tech's website and services, you agree to be bound by these Terms of
                Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Core Brim Tech provides cybersecurity solutions, AI-powered automation tools, software development
                services, and related technology services. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Cybersecurity consultation and ethical hacking services</li>
                <li>Penetration testing and vulnerability assessments</li>
                <li>AI and automation solutions</li>
                <li>Custom software development</li>
                <li>Technology training and education</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Acceptable Use Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to use our services only for lawful purposes. You must not:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Use our tools or services for unauthorized access to systems or networks</li>
                <li>Engage in any illegal hacking or malicious activities</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit malware, viruses, or harmful code</li>
                <li>Attempt to interfere with or disrupt our services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Ethical Hacking and Security Tools</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our cybersecurity tools and services are designed for authorized security testing and ethical purposes
                only. Users must:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Obtain proper authorization before conducting any security assessments</li>
                <li>Use tools only on systems you own or have explicit permission to test</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Report vulnerabilities responsibly</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Core Brim Tech is not responsible for any misuse of our tools or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content, software, tools, and materials provided by Core Brim Tech are protected by intellectual
                property laws. You may not copy, modify, distribute, sell, or lease any part of our services without
                explicit permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To the fullest extent permitted by law, Core Brim Tech shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from your use of our services. Our total liability
                shall not exceed the amount paid by you for our services in the past 12 months.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our services are provided "as is" and "as available" without any warranties of any kind, either express
                or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to indemnify and hold harmless Core Brim Tech from any claims, damages, losses, or expenses
                arising from your use of our services or violation of these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We reserve the right to terminate or suspend your access to our services at any time, without notice,
                for conduct that we believe violates these Terms of Service or is harmful to other users or our
                business.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms of Service shall be governed by and construed in accordance with the laws of Sierra Leone.
                Any disputes shall be resolved in the courts of Sierra Leone.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We reserve the right to modify these Terms of Service at any time. We will notify users of any
                significant changes by posting the new terms on this page with an updated "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
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
