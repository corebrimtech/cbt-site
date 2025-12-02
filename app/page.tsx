import Link from "next/link"
import Image from "next/image"
import {
  Code,
  Lightbulb,
  Shield,
  Globe,
  Lock,
  Brain,
  Cloud,
  Terminal,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  BookOpen,
} from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
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
            {/* Mobile Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="font-medium hover:text-blue-600 transition">
                About
              </Link>
              <Link href="#projects" className="font-medium hover:text-blue-600 transition">
                Projects
              </Link>
              <Link href="/services" className="font-medium hover:text-blue-600 transition">
                Services
              </Link>
              <Link href="/blog" className="font-medium hover:text-blue-600 transition">
                Blog
              </Link>
              <Link href="#contact" className="font-medium hover:text-blue-600 transition">
                Contact
              </Link>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Momodu Kamara-Kolleh
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
                Founder of Core Brim Tech | Computer Science & Cybersecurity Student
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Building cutting-edge cybersecurity tools and AI-powered automation solutions. As a bug bounty hunter
                and ethical hacker from Sierra Leone, I'm passionate about creating innovative technologies that empower
                individuals and secure businesses globally.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Get In Touch
                </Link>
                <Link
                  href="#projects"
                  className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition"
                >
                  View My Work
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <Image src="/logo.png" alt="Core Brim Tech Logo" width={200} height={200} className="w-48 h-48" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-background p-3 rounded-full shadow-lg border">
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
                    <Shield className="text-white w-7 h-7" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-accent/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">About Core Brim Tech</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Core Brim Tech is a full-spectrum technology company based in Freetown, Sierra Leone, that builds
                advanced solutions in cybersecurity, AI, automation, software development, education, and digital
                infrastructure. Founded by Momodu Kamara-Kolleh (Austin), we're driving global impact by aligning our
                innovation with the United Nations Sustainable Development Goals (SDGs).
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our flagship project, Ruth AI, is a powerful autonomous assistant designed for cyber defense, business
                operations, research, and decision-making for governments and enterprises. Ruth AI represents the future
                of intelligent automation, combining cutting-edge AI with practical applications that solve real-world
                challenges.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From Sierra Leone to the world, we're proving that innovation has no boundaries—building technology that
                empowers individuals, secures businesses, and creates lasting positive change in society.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Core Values</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Innovation</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Constantly pushing boundaries to create novel cybersecurity solutions that address modern threats.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-600/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="text-purple-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Security First</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Building with security-first principles to create robust, trustworthy systems for ethical hackers.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Global Impact</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Creating meaningful change through technology, starting from Sierra Leone to the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ruth AI */}
            <div className="bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 h-48 flex items-center justify-center">
                <Brain className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-emerald-600/10 text-emerald-600 text-sm font-medium rounded-full">
                    Flagship
                  </span>
                  <span className="px-3 py-1 bg-blue-600/10 text-blue-600 text-sm font-medium rounded-full">AI</span>
                  <span className="px-3 py-1 bg-purple-600/10 text-purple-600 text-sm font-medium rounded-full">
                    Autonomous
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ruth AI</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our flagship autonomous assistant designed for cyber defense, business operations, research, and
                  decision-making for governments and enterprises. Ruth AI combines advanced intelligence with practical
                  applications that transform how organizations operate.
                </p>
                <div className="text-emerald-600 font-medium inline-flex items-center">
                  <span className="text-sm">In Development</span>
                </div>
              </div>
            </div>

            {/* AutoApply AI */}
            <div className="bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 h-48 flex items-center justify-center">
                <Brain className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-600/10 text-blue-600 text-sm font-medium rounded-full">AI</span>
                  <span className="px-3 py-1 bg-purple-600/10 text-purple-600 text-sm font-medium rounded-full">
                    Automation
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">AutoApply AI</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Intelligent job application automation platform powered by AI. Streamlines the application process
                  with smart form filling, resume optimization, and application tracking.
                </p>
                <div className="text-blue-600 font-medium inline-flex items-center">
                  <span className="text-sm">Coming Soon</span>
                </div>
              </div>
            </div>

            {/* CoreBrim Rexscan */}
            <div className="bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 h-48 flex items-center justify-center">
                <Terminal className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-purple-600/10 text-purple-600 text-sm font-medium rounded-full">
                    Security
                  </span>
                  <span className="px-3 py-1 bg-blue-600/10 text-blue-600 text-sm font-medium rounded-full">
                    Pentesting
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Core Brim Rexscan</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Comprehensive reconnaissance and exploitation scanner for ethical hackers and penetration testers.
                  Advanced vulnerability detection with automated exploitation capabilities.
                </p>
                <div className="text-blue-600 font-medium inline-flex items-center">
                  <span className="text-sm">In Development</span>
                </div>
              </div>
            </div>

            {/* CloudCrack */}
            <div className="bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 h-48 flex items-center justify-center">
                <Cloud className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-600/10 text-blue-600 text-sm font-medium rounded-full">Cloud</span>
                  <span className="px-3 py-1 bg-purple-600/10 text-purple-600 text-sm font-medium rounded-full">
                    Security
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">CloudCrack</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Advanced post-exploitation toolkit for AWS, Azure, and GCP environments. Designed for security
                  professionals conducting authorized cloud penetration tests and assessments.
                </p>
                <div className="text-blue-600 font-medium inline-flex items-center">
                  <span className="text-sm">In Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-accent/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-xl border text-center hover:shadow-md transition">
              <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Cybersecurity</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ethical hacking, penetration testing, vulnerability assessment, and bug bounty hunting
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border text-center hover:shadow-md transition">
              <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="text-purple-600 w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">AI & Machine Learning</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Machine learning, natural language processing, and intelligent automation systems
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border text-center hover:shadow-md transition">
              <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Cloud Security</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                AWS, Azure, GCP security, cloud penetration testing, and serverless architectures
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border text-center hover:shadow-md transition">
              <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-purple-600 w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Full-Stack Development</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                JavaScript, Python, React, Node.js, Elixir, databases, and RESTful APIs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
              Interested in collaboration, partnerships, or have a project in mind? Let's discuss how Core Brim Tech can
              help secure and innovate your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl border">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a
                      href="mailto:momodukamarakolleh0@gmail.com"
                      className="text-muted-foreground hover:text-blue-600 transition"
                    >
                      momodukamarakolleh0@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-600/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-purple-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:+447932070340" className="text-muted-foreground hover:text-blue-600 transition">
                      +44 7932 070340
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">Freetown, Sierra Leone</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://twitter.com/corebrimtech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/momodu-kamara-kolleh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/corebrimtech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl border">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Ahead in Cybersecurity</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get exclusive insights on ethical hacking, AI innovation, and cybersecurity trends. Join our newsletter for
            weekly updates, Ruth AI progress, and expert tips.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm mt-3 opacity-75">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent/50 py-8 px-6 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <Link href="/" className="flex items-center gap-3 justify-center md:justify-start">
                <Image src="/logo.png" alt="Core Brim Tech Logo" width={40} height={40} className="w-10 h-10" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  CORE BRIM TECH
                </span>
              </Link>
              <p className="text-muted-foreground mt-2">© 2025 Core Brim Tech. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <Link href="#about" className="text-muted-foreground hover:text-blue-600 transition text-sm">
                About
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-blue-600 transition text-sm">
                Projects
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-blue-600 transition text-sm">
                Services
              </Link>
              <Link href="/blog" className="text-muted-foreground hover:text-blue-600 transition text-sm">
                Blog
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-blue-600 transition text-sm">
                Contact
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-blue-600 transition text-sm">
                Privacy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-blue-600 transition text-sm">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
