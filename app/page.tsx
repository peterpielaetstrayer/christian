import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProjectImage } from '@/components/project-image'
import { ProcessSection } from '@/components/process-section'
import { homeHero } from '@/data/home'
import { getFeaturedProjects } from '@/data/projects'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

const featuredProjects = getFeaturedProjects()
// Review navigation is only displayed on Vercel preview deployments.
const isContrastReviewPreview = process.env.VERCEL_ENV === 'preview'

const capabilities = [
  'Code-compliant structural modifications',
  'Complex framing geometry',
  'Integration with engineering plans',
  'Clean execution from drawing to finish',
  'High-end finish carpentry',
  'Limited drafting and design support',
]

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main>
        {isContrastReviewPreview && (
          <section aria-label="Preview changes" className="mx-auto max-w-7xl px-6 pt-6">
            <div className="border border-border bg-muted/40 px-5 py-4 text-sm sm:px-6">
              <p className="font-medium text-foreground">Contrast & readability polish — November 2026</p>
              <p className="mt-1 leading-relaxed text-secondary">
                This is a private typography and accessibility review. The portfolio and overall visual language are unchanged; compare the stronger hero text contrast, clearer buttons, and more readable supporting text.
              </p>
              <div className="mt-3 flex flex-wrap gap-x-7 gap-y-2">
                <Link href="/work" className="underline underline-offset-4 hover:text-accent">
                  Review smaller portfolio text
                </Link>
                <Link href="/work/barrel-vault-framing" className="underline underline-offset-4 hover:text-accent">
                  Work detail example
                </Link>
                <Link href="/contact" className="underline underline-offset-4 hover:text-accent">
                  View contact and form
                </Link>
              </div>
            </div>
          </section>
        )}
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 pt-6 md:pt-10">
          <div className="relative">
            <ProjectImage
              ratio="16/9"
              src={homeHero.src}
              alt={homeHero.alt}
              priority
              sizes="(min-width: 1024px) 80vw, 100vw"
              className="min-h-[560px] sm:min-h-[500px] md:min-h-[520px]"
              overlay="soft"
            />
            <div className="absolute inset-0 flex items-end justify-center px-5 pb-8 sm:px-8 sm:pb-10 md:pb-16">
              <div className="mx-auto w-full max-w-4xl text-center [text-shadow:0_2px_14px_rgba(0,0,0,0.30)]">
                <h1 className="font-serif text-[2rem] leading-[1.12] text-white sm:text-5xl sm:leading-[1.08] md:text-6xl lg:text-7xl">
                  Custom residential construction
                  <br />
                  with a structural backbone.
                </h1>
                <p className="mx-auto mt-4 max-w-[34rem] text-base leading-relaxed text-white/95 sm:mt-5 sm:text-lg md:mt-6 md:text-xl">
                  Custom renovations, additions, and structural carpentry, with careful planning and attention to the details that last.
                </p>
                <div className="mx-auto mt-6 flex w-full max-w-xs flex-col items-stretch gap-3 sm:mt-7 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center md:mt-9">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center border border-white bg-white px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-7 sm:text-base"
                  >
                    Start with the scope
                  </Link>
                  <a
                    href="tel:+18056513637"
                    className="inline-flex min-h-12 items-center justify-center border border-white/90 bg-black/45 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-7 sm:text-base"
                  >
                    Call / Text
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mb-10 flex flex-col justify-between gap-3 sm:mb-12 md:mb-16 md:flex-row md:items-end">
            <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
              Selected Work
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-secondary sm:text-base">
              Framing, architectural details, and exterior construction, documented as the work takes shape.
            </p>
          </div>
          
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {featuredProjects.map((project) => (
              <Link 
                key={project.slug} 
                href={`/work/${project.slug}`}
                className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <ProjectImage
                  ratio="3/2"
                  src={project.images.card.src}
                  alt={project.images.card.alt}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="transition-opacity group-hover:opacity-90"
                />
                <div className="mt-5 space-y-2">
                  <h3 className="font-serif text-lg text-foreground transition-colors group-hover:text-accent sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.role}
                  </p>
                  <p className="text-sm text-secondary">
                    {project.focus}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Trusted to Solve */}
        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <h2 className="mb-10 font-serif text-2xl text-foreground sm:text-3xl md:mb-16">
              Trusted to Solve
            </h2>
            
            <div className="grid gap-x-16 gap-y-6 md:grid-cols-2">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                  <p className="text-base leading-relaxed text-foreground sm:text-lg">
                    {capability}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProcessSection />

        {/* Contact Strip */}
        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-6 text-lg leading-relaxed text-foreground sm:mb-8 sm:text-xl">
                Text a photo and a quick scope. I’ll respond directly.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                <a
                  href="tel:+18056513637"
                  className="min-h-11 py-2 text-base text-secondary underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-lg"
                >
                  Call / Text
                </a>
                <span className="text-muted-foreground">·</span>
                <a
                  href="mailto:pielaetbuilt@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-11 py-2 text-base text-secondary underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-lg"
                >
                  Email
                </a>
                <span className="text-muted-foreground">·</span>
                <Link
                  href="/contact"
                  className="min-h-11 py-2 text-base text-secondary underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-lg"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
