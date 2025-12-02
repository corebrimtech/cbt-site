"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} className="relative z-50" aria-label="Toggle menu">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40" onClick={closeMenu} />
          <nav className="fixed top-16 right-0 left-0 bg-background border-b z-40 p-6">
            <div className="flex flex-col space-y-4">
              <Link href="/#about" className="text-lg font-medium hover:text-blue-600 transition" onClick={closeMenu}>
                About
              </Link>
              <Link
                href="/#projects"
                className="text-lg font-medium hover:text-blue-600 transition"
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link href="/services" className="text-lg font-medium hover:text-blue-600 transition" onClick={closeMenu}>
                Services
              </Link>
              <Link href="/blog" className="text-lg font-medium hover:text-blue-600 transition" onClick={closeMenu}>
                Blog
              </Link>
              <Link href="/#contact" className="text-lg font-medium hover:text-blue-600 transition" onClick={closeMenu}>
                Contact
              </Link>
            </div>
          </nav>
        </>
      )}
    </div>
  )
}
