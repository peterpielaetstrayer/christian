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
        <section className="mx-auto max-w-7xl px-6 pt-10">
          <div className="relative">
            <ProjectImage
              ratio="16/9"
              src={heroProject.images.hero.src}
              alt={heroProject.images.hero.alt}
              priority
              sizes="(min-width: 1024px) 80vw, 100vw"
              className="min-h-[360px] md:min-h-[520px]"
              overlay="soft"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-10 md:pb-16">
              <div className="mx-auto max-w-4xl px-6 text-center">
                <h1 className="font-serif text-5xl leading-tight text-white md:text-6xl lg:text-7xl">
                  Craft-forward building.
                  <br />
                  Precision execution.
                </h1>
                <p className="mt-6 text-lg text-white/80 md:text-xl">
                  High-end framing, complex structural work, clean finishes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <h2 className="mb-16 font-serif text-3xl text-foreground">Selected Work</h2>
          
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link 
                key={project.slug} 
                href={`/work/${project.slug}`}
                className="group"
              >
                <ProjectImage
                  ratio="3/2"
                  src={project.images.card.src}
                  alt={project.images.card.alt}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="transition-opacity group-hover:opacity-90"
                />
                <div className="mt-6 space-y-2">
                  <h3 className="font-serif text-xl text-foreground group-hover:text-accent transition-colors">
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
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
            <h2 className="mb-16 font-serif text-3xl text-foreground">Trusted to Solve</h2>
            
            <div className="grid gap-x-16 gap-y-6 md:grid-cols-2">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                  <p className="text-lg leading-relaxed text-foreground">
                    {capability}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Strip */}
        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-8 text-xl text-foreground">
                Serious inquiries and collaborators welcome.
              </p>
              <div className="flex items-center justify-center gap-6">
                <a
                  href="tel:+1234567890"
                  className="text-lg text-secondary transition-colors hover:text-accent"
                >
                  Call / Text
                </a>
                <span className="text-muted-foreground">·</span>
                <a
                  href="mailto:contact@example.com"
                  className="text-lg text-secondary transition-colors hover:text-accent"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
