import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { notFound } from "next/navigation"

const blogPosts = {
  "getting-started-bug-bounty": {
    title: "Getting Started with Bug Bounty Hunting in 2025",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Cybersecurity",
    content: `
Bug bounty hunting has become one of the most exciting and rewarding paths in cybersecurity. As we enter 2025, the landscape continues to evolve with new tools, techniques, and opportunities.

## What is Bug Bounty Hunting?

Bug bounty hunting is the practice of finding and reporting security vulnerabilities in applications, websites, and systems in exchange for rewards. Companies run bug bounty programs to crowdsource security testing from ethical hackers worldwide.

## Essential Skills

Before diving into bug bounty hunting, you should have a solid foundation in:

- **Web Technologies**: HTML, CSS, JavaScript, HTTP/HTTPS protocols
- **Programming**: Python, JavaScript, or another scripting language
- **Networking**: Understanding of TCP/IP, DNS, and network protocols
- **Security Concepts**: Common vulnerabilities (OWASP Top 10), authentication, encryption

## Getting Started

### 1. Learn the Fundamentals

Start with understanding common vulnerabilities:
- Cross-Site Scripting (XSS)
- SQL Injection
- Cross-Site Request Forgery (CSRF)
- Authentication and authorization flaws
- Server-side vulnerabilities

### 2. Choose Your Platforms

Popular bug bounty platforms include:
- HackerOne
- Bugcrowd
- Intigriti
- YesWeHack
- Open Bug Bounty

### 3. Build Your Toolkit

Essential tools for bug bounty hunting:
- **Burp Suite**: Web application security testing
- **OWASP ZAP**: Open-source web app scanner
- **Nmap**: Network discovery and security auditing
- **Sublist3r**: Subdomain enumeration
- **Nuclei**: Vulnerability scanner
- **FFuf**: Fast web fuzzer

### 4. Practice, Practice, Practice

Use legal practice platforms:
- HackTheBox
- TryHackMe
- PentesterLab
- PortSwigger Web Security Academy

## Tips for Success

1. **Start Small**: Begin with programs that have easier targets and are beginner-friendly
2. **Read Write-ups**: Learn from others' disclosed reports
3. **Be Patient**: Your first valid bug might take time to find
4. **Document Everything**: Keep detailed notes of your testing process
5. **Stay Ethical**: Always follow the program's rules and scope

## Common Mistakes to Avoid

- Testing out of scope domains
- Not reading program rules carefully
- Reporting duplicate bugs
- Poor communication in reports
- Giving up too early

## The Mindset

Bug bounty hunting requires persistence, curiosity, and continuous learning. Don't be discouraged by initial rejections or duplicate findings. Every hunter started exactly where you are now.

## Conclusion

Bug bounty hunting in 2025 offers incredible opportunities for those willing to learn and persist. Start with the fundamentals, practice consistently, and stay ethical. The cybersecurity community is welcoming and supportive—don't hesitate to ask questions and learn from others.

Happy hunting, and stay ethical!
    `,
  },
  "ruth-ai-vision": {
    title: "Ruth AI: The Future of Autonomous Cyber Defense",
    date: "January 10, 2025",
    readTime: "6 min read",
    category: "AI",
    content: `
As cyber threats become increasingly sophisticated, the need for intelligent, autonomous defense systems has never been greater. Enter Ruth AI—Core Brim Tech's flagship project that represents the future of cybersecurity automation.

## The Vision

Ruth AI is not just another security tool—it's an autonomous assistant designed to transform how organizations approach cyber defense, business operations, and decision-making.

## Key Capabilities

### 1. Autonomous Threat Detection
Ruth AI continuously monitors systems, detecting anomalies and potential threats in real-time without human intervention.

### 2. Intelligent Response
When threats are detected, Ruth AI doesn't just alert—it takes intelligent action based on context, severity, and learned patterns.

### 3. Predictive Security
Using advanced machine learning, Ruth AI predicts potential security risks before they materialize, enabling proactive defense.

### 4. Business Intelligence
Beyond security, Ruth AI assists with business operations, research, and strategic decision-making for enterprises and governments.

## The Technology Behind Ruth

Ruth AI combines several cutting-edge technologies:
- Natural Language Processing for human-like interaction
- Machine Learning for pattern recognition and prediction
- Automated reasoning for intelligent decision-making
- Real-time data processing for immediate threat response

## Use Cases

### Enterprise Security
Large organizations use Ruth AI to manage complex security infrastructures, reducing the burden on security teams.

### Government Operations
Government agencies leverage Ruth AI for critical infrastructure protection and threat intelligence.

### Research & Development
Research institutions use Ruth AI to accelerate security research and vulnerability discovery.

## The Future

As Ruth AI continues to evolve, we're pushing the boundaries of what's possible in autonomous systems. Our goal is to create technology that not only protects but empowers organizations to operate securely and efficiently.

Stay tuned for updates on Ruth AI's development and upcoming features.
    `,
  },
  "cloud-security-best-practices": {
    title: "Essential Cloud Security Practices for 2025",
    date: "January 5, 2025",
    readTime: "10 min read",
    category: "Cloud Security",
    content: `
Cloud computing has revolutionized how businesses operate, but with great convenience comes great responsibility. Here are the essential security practices every organization should implement in 2025.

## 1. Identity and Access Management (IAM)

### Principle of Least Privilege
Grant users only the permissions they need to perform their jobs—nothing more.

### Multi-Factor Authentication (MFA)
Always enforce MFA for all user accounts, especially those with administrative privileges.

### Regular Access Reviews
Conduct quarterly reviews of user permissions and remove unnecessary access.

## 2. Data Encryption

### Encryption at Rest
Ensure all stored data is encrypted using strong encryption standards (AES-256).

### Encryption in Transit
Use TLS 1.3 for all data transmission between services and clients.

### Key Management
Implement proper key rotation policies and use cloud provider key management services.

## 3. Network Security

### Security Groups and Firewalls
Configure strict ingress and egress rules for all resources.

### VPC Isolation
Segment your network using Virtual Private Clouds and subnets.

### DDoS Protection
Enable DDoS protection services offered by your cloud provider.

## 4. Monitoring and Logging

### Centralized Logging
Collect logs from all services in a centralized location for analysis.

### Real-time Alerts
Set up alerts for suspicious activities and security events.

### Log Retention
Maintain logs for at least 90 days for compliance and forensic analysis.

## 5. Compliance and Governance

### Regular Audits
Conduct regular security audits and compliance checks.

### Policy Enforcement
Use cloud-native policy engines to enforce organizational standards.

### Documentation
Maintain comprehensive documentation of your security architecture.

## 6. Backup and Disaster Recovery

### Automated Backups
Implement automated backup solutions with regular testing.

### Multi-Region Redundancy
Store critical data across multiple geographic regions.

### Recovery Testing
Regularly test your disaster recovery procedures.

## Conclusion

Cloud security is an ongoing process, not a one-time setup. Stay informed about new threats and security features, and continuously improve your security posture. Remember: security is everyone's responsibility.

At Core Brim Tech, we help organizations implement these best practices and more. Contact us for security assessments and consultation.
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

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

      <article className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-blue-600 transition mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <span className="px-3 py-1 bg-blue-600/10 text-blue-600 text-sm font-medium rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex items-center gap-6 text-muted-foreground mb-12 pb-8 border-b">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            {post.content.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              } else if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                    {paragraph.replace("### ", "")}
                  </h3>
                )
              } else if (paragraph.startsWith("- ")) {
                return (
                  <li key={index} className="ml-6 text-muted-foreground leading-relaxed">
                    {paragraph.replace("- ", "")}
                  </li>
                )
              } else if (paragraph.trim() === "") {
                return <br key={index} />
              } else if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <p key={index} className="font-semibold mt-4">
                    {paragraph.replace(/\*\*/g, "")}
                  </p>
                )
              } else {
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                )
              }
            })}
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-semibold mb-4">Share your thoughts</h3>
            <p className="text-muted-foreground mb-4">
              Have questions or insights about this article? Feel free to reach out via{" "}
              <a href="mailto:momodukamarakolleh0@gmail.com" className="text-blue-600 hover:underline">
                email
              </a>{" "}
              or connect on social media.
            </p>
          </div>
        </div>
      </article>

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
