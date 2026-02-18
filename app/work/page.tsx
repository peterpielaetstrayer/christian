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
      
      <main className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mb-16 max-w-3xl">
          <h1 className="mb-6 font-serif text-4xl text-foreground md:text-5xl">Work</h1>
          <p className="text-lg leading-relaxed text-secondary">
            A selection of framing, structural, and finish work.
            <br />
            Executed with precision and attention to long-term durability.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
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
                <h2 className="font-serif text-xl text-foreground transition-colors group-hover:text-accent">
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
