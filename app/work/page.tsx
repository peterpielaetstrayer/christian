import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProjectImage } from '@/components/project-image'
import { getProjects } from '@/data/projects'

const projects = getProjects()

export default function WorkPage() {
  return (
    <>
      <Navigation />
      
      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-12 max-w-3xl md:mb-16">
          <h1 className="mb-5 font-serif text-3xl text-foreground sm:text-4xl md:mb-6 md:text-5xl">
            Work
          </h1>
          <p className="text-base leading-relaxed text-secondary sm:text-lg">
            A selection of custom residential work—renovations, structural modifications, and detailed carpentry.
            Built for long-term durability and clean finish alignment.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {projects.map((project) => (
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
                <h2 className="font-serif text-lg text-foreground transition-colors group-hover:text-accent sm:text-xl">
                  {project.title}
                </h2>
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
      </main>

      <Footer />
    </>
  )
}
