import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'About | Pielaet Construction & Design',
  description: 'Learn about the structural carpentry, custom residential building, and craftsmanship behind Pielaet Construction & Design.',
  alternates: { canonical: '/about' },
}

const coreFocus = [
  'Custom residential framing and structural carpentry',
  'Vaults, arches and nonstandard geometry',
  'Finish carpentry and considered transitions',
  'Design and drafting as practical building tools',
  'Coordination from structural work to final detail',
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      
      <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <h1 className="mb-10 font-serif text-3xl text-foreground sm:text-4xl md:mb-12 md:text-5xl">
          About
        </h1>

        {/* Bio */}
        <section className="mb-16 md:mb-20">
          <div className="max-w-none">
            <p className="text-base leading-relaxed text-foreground sm:text-lg">
              Pielaet Construction & Design is rooted in more than a decade of detail-driven
              framing and carpentry. The work ranges from structural layouts and unusual curved
              forms to finished details, with an eye for how each part contributes to the whole.
            </p>
          </div>
        </section>

        {/* Core Focus */}
        <section className="mb-16 border-t border-border pt-12 md:mb-20 md:pt-16">
          <h2 className="mb-8 font-serif text-2xl text-foreground">Core Focus</h2>
          <ul className="space-y-4">
            {coreFocus.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                <p className="text-base leading-relaxed text-foreground sm:text-lg">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Documentation */}
        <section className="border-t border-border pt-12 md:pt-16">
          <h2 className="mb-6 font-serif text-2xl text-foreground">How we work</h2>
          <p className="text-base leading-relaxed text-secondary sm:text-lg">
            Good work begins by understanding the drawings, the site, and the real constraints.
            It continues through thoughtful layout, practical problem-solving, and attention to
            the surfaces and junctions people experience every day.
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}
