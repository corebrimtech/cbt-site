import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Shield, Brain, Terminal, Code, GraduationCap, Users, Check, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Services | Core Brim Tech",
  description: "Professional cybersecurity, AI development, and technology consultation services from Core Brim Tech.",
}

const services = [
  {
    icon: Shield,
    title: "Penetration Testing & Security Audits",
    description:
      "Comprehensive security assessments to identify vulnerabilities in your systems, applications, and infrastructure before attackers do.",
    features: [
      "Web application penetration testing",
      "Network infrastructure assessments",
      "Cloud security audits (AWS, Azure, GCP)",
      "Mobile application security testing",
      "Detailed vulnerability reports with remediation",
    ],
    color: "blue",
  },
  {
    icon: Terminal,
    title: "Ethical Hacking Services",
    description:
      "Authorized security testing to evaluate your defenses, featuring real-world attack simulations and red team operations.",
    features: [
      "Red team engagements",
      "Social engineering assessments",
      "Physical security testing",
      "Post-exploitation analysis",
      "Security awareness training",
    ],
    color: "purple",
  },
  {
    icon: Brain,
    title: "AI & Automation Solutions",
    description:
      "Custom AI-powered tools and automation systems designed to enhance your business operations and security posture.",
    features: [
      "AI-driven threat detection systems",
      "Intelligent automation workflows",
      "Custom chatbot development",
      "Machine learning integration",
      "Ruth AI enterprise solutions",
    ],
    color: "blue",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Full-stack development services for secure, scalable applications tailored to your business needs.",
    features: [
      "Web application development",
      "API design and integration",
      "Database architecture and optimization",
      "DevSecOps implementation",
      "Security-first development practices",
    ],
    color: "purple",
  },
  {
    icon: Users,
    title: "Security Consultation",
    description:
      "Strategic cybersecurity guidance to help organizations build robust security programs and comply with industry standards.",
    features: [
      "Security program development",
      "Compliance consulting (ISO 27001, GDPR)",
      "Incident response planning",
      "Security architecture review",
      "Risk assessment and management",
    ],
    color: "blue",
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    description:
      "Hands-on cybersecurity training programs to upskill your team in ethical hacking, secure coding, and threat detection.",
    features: [
      "Ethical hacking workshops",
      "Secure coding training",
      "Security awareness programs",
      "Custom corporate training",
      "Bug bounty preparation courses",
    ],
    color: "purple",
  },
]

export default function ServicesPage() {
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
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-blue-600 transition mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From ethical hacking to AI development, Core Brim Tech offers comprehensive cybersecurity and technology
              solutions for businesses, governments, and individuals worldwide.
            </p>
          </div>

          <div className="grid gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-16 h-16 rounded-xl ${
                            service.color === "blue" ? "bg-blue-600/10" : "bg-purple-600/10"
                          } flex items-center justify-center`}
                        >
                          <Icon
                            className={`w-8 h-8 ${service.color === "blue" ? "text-blue-600" : "text-purple-600"}`}
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                        <div className="space-y-3">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <Check
                                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                  service.color === "blue" ? "text-blue-600" : "text-purple-600"
                                }`}
                              />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Organization?</h2>
                <p className="text-lg opacity-90 mb-6">
                  Let's discuss how Core Brim Tech can help strengthen your security posture, develop custom solutions,
                  or train your team in cutting-edge cybersecurity practices.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="mailto:info@corebrimtech.com"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition"
                  >
                    Email Us
                  </a>
                </div>
              </div>
              <div className="w-full md:w-auto flex justify-center">
                <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-24 h-24" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-muted-foreground">Vulnerabilities Discovered</div>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-muted-foreground">Bug Bounty Programs</div>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
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
