import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const coreFocus = [
  'Structural framing',
  'Vault and arch geometry',
  'Finish carpentry',
  'Code-aware execution',
  'Limited drafting support',
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
              Builder and craft-focused carpenter with over a decade of experience in high-end 
              framing and finish work. Trusted to execute complex structural geometry while 
              maintaining clean finishes and durable construction.
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
          <h2 className="mb-6 font-serif text-2xl text-foreground">Documentation</h2>
          <p className="text-base leading-relaxed text-secondary sm:text-lg">
            Finished work, in-progress builds, and detail shots are documented for clarity 
            and transparency throughout the construction process.
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}
