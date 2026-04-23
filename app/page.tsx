import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProjectImage } from '@/components/project-image'
import { getFeaturedProjects } from '@/data/projects'

const featuredProjects = getFeaturedProjects()
const heroProject = featuredProjects[0]

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
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 pt-6 md:pt-10">
          <div className="relative">
            <ProjectImage
              ratio="16/9"
              src={heroProject.images.hero.src}
              alt={heroProject.images.hero.alt}
              priority
              sizes="(min-width: 1024px) 80vw, 100vw"
              className="min-h-[320px] md:min-h-[520px]"
              overlay="soft"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-16">
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="font-serif text-4xl leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  High-end framing and structural work.
                  <br />
                  Done right the first time.
                </h1>
                <p className="mx-auto mt-5 max-w-[34rem] text-base leading-relaxed text-white/80 sm:text-lg md:mt-6 md:text-xl">
                  Serving Santa Barbara to Los Angeles. Larger jobs negotiable outside the area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <h2 className="mb-10 font-serif text-2xl text-foreground sm:text-3xl md:mb-16">
            Selected Work
          </h2>
          
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
                  className="min-h-11 py-2 text-base text-secondary transition-colors hover:text-accent sm:text-lg"
                >
                  Call / Text
                </a>
                <span className="text-muted-foreground">·</span>
                <a
                  href="mailto:pielaetbuilt@gmail.com"
                  className="min-h-11 py-2 text-base text-secondary transition-colors hover:text-accent sm:text-lg"
                >
                  Email
                </a>
                <span className="text-muted-foreground">·</span>
                <Link
                  href="/contact"
                  className="min-h-11 py-2 text-base text-secondary transition-colors hover:text-accent sm:text-lg"
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
