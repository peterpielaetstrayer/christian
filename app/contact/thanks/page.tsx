import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function ContactThanksPage() {
  return (
    <>
      <Navigation />

      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h1 className="mb-5 font-serif text-3xl text-foreground sm:text-4xl md:mb-6 md:text-5xl">
          Message sent.
        </h1>

        <p className="mb-10 text-base leading-relaxed text-secondary sm:mb-12 sm:text-lg">
          If it’s time-sensitive, texting photos and a quick scope is the fastest path.
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href="tel:+18056513637"
            className="min-h-11 border border-foreground bg-transparent px-8 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Call / Text
          </a>
          <span className="text-muted-foreground">·</span>
          <Link
            href="/work"
            className="min-h-11 py-3 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            View work
          </Link>
          <span className="text-muted-foreground">·</span>
          <Link
            href="/"
            className="min-h-11 py-3 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            Home
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}

