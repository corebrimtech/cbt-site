import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Blog | Core Brim Tech",
  description: "Insights on cybersecurity, AI, ethical hacking, and technology innovation from Core Brim Tech.",
}

const blogPosts = [
  {
    slug: "getting-started-bug-bounty",
    title: "Getting Started with Bug Bounty Hunting in 2025",
    excerpt:
      "A comprehensive guide for aspiring ethical hackers on how to start bug bounty hunting, from tools to platforms to mindset.",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Cybersecurity",
    categoryColor: "blue",
  },
  {
    slug: "ruth-ai-vision",
    title: "Ruth AI: The Future of Autonomous Cyber Defense",
    excerpt:
      "Exploring how Ruth AI combines artificial intelligence with cybersecurity to create intelligent defense systems for enterprises.",
    date: "January 10, 2025",
    readTime: "6 min read",
    category: "AI",
    categoryColor: "purple",
  },
  {
    slug: "cloud-security-best-practices",
    title: "Essential Cloud Security Practices for 2025",
    excerpt:
      "Learn the critical security measures every organization should implement for AWS, Azure, and GCP environments.",
    date: "January 5, 2025",
    readTime: "10 min read",
    category: "Cloud Security",
    categoryColor: "blue",
  },
]

export default function BlogPage() {
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

          <div className="mb-16">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Insights on cybersecurity, AI, ethical hacking, and technology innovation. Stay updated with the latest
              trends and best practices from Core Brim Tech.
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className={`px-3 py-1 ${
                        post.categoryColor === "blue"
                          ? "bg-blue-600/10 text-blue-600"
                          : "bg-purple-600/10 text-purple-600"
                      } text-sm font-medium rounded-full`}
                    >
                      {post.category}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 hover:text-blue-600 transition">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Get the latest cybersecurity insights, Ruth AI updates, and technology trends delivered directly to your
              inbox.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
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
