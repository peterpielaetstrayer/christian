import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const coreFocus = [
  'Custom renovations + additions',
  'Structural modifications (code-aware)',
  'Exterior carpentry + envelope details',
  'Finish alignment + clean transitions',
  'Clear communication + disciplined sequencing',
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
              Pielaet Construction & Design is a California General B contractor focused on
              custom residential work—renovations, additions, and structural modifications.
              We bring structural judgment and a design eye to the same problem: building
              spaces that look right and perform for decades.
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
            We start with the scope and constraints, clarify sequencing, and then execute with
            clean coordination across trades. In-progress documentation and detail photos keep
            decisions explicit and reduce rework.
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}
