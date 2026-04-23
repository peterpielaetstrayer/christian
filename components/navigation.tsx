'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex flex-col leading-none text-foreground transition-colors hover:text-accent"
        >
          <span className="font-serif text-lg tracking-[0.18em]">PIELAET</span>
          <span className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Construction
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6">
            <Link
              href="/work"
              className={`text-sm tracking-wide transition-colors ${
                isActive('/work') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Work
            </Link>
            <Link
              href="/about"
              className={`text-sm tracking-wide transition-colors ${
                isActive('/about') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm tracking-wide transition-colors ${
                isActive('/contact') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4 border-l border-border pl-6">
            <a
              href="tel:+18056513637"
              className="text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              Call / Text
            </a>
            <a
              href="mailto:pielaetbuilt@gmail.com"
              className="text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              Email
            </a>
          </div>
        </div>

        <button
          type="button"
          className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((open) => !open)}
        >
          Menu
        </button>
      </div>

      {isOpen && (
        <div id="mobile-nav" className="border-t border-border md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6">
            <Link
              href="/work"
              className={`text-sm tracking-wide transition-colors ${
                isActive('/work') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Work
            </Link>
            <Link
              href="/about"
              className={`text-sm tracking-wide transition-colors ${
                isActive('/about') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm tracking-wide transition-colors ${
                isActive('/contact') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center gap-4 border-t border-border pt-4">
              <a
                href="tel:+18056513637"
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                Call / Text
              </a>
              <span className="text-muted-foreground">·</span>
              <a
                href="mailto:pielaetbuilt@gmail.com"
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
