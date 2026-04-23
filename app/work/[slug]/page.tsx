import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProjectImage } from '@/components/project-image'
import { getProjectBySlug, getProjects } from '@/data/projects'

export async function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }))
}

export const dynamicParams = true

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  const projects = getProjects()
  const projectIndex = projects.findIndex((item) => item.slug === slug)
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject = projectIndex >= 0 && projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null
  const noteItems = [
    project?.scope ? `Scope — ${project.scope}` : null,
    ...(project?.notes ?? []),
  ].filter(Boolean) as string[]
  const galleryItems = project?.gallery.filter((image) => image.src) ?? []

  if (!project) {
    return (
      <>
        <Navigation />
        <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="mb-4 font-serif text-3xl text-foreground sm:text-4xl md:text-5xl">
              Project not found
            </h1>
            <p className="mb-8 text-base leading-relaxed text-secondary sm:text-lg">
              The project you’re looking for isn’t available.
            </p>
            <Link
              href="/work"
              className="text-sm tracking-wide text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Back to Work
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-6 md:pt-10 md:pt-12">
          <div className="relative">
            <ProjectImage
              ratio="16/9"
              src={project.images.hero.src}
              alt={project.images.hero.alt}
              priority
              overlay="soft"
              sizes="(min-width: 1024px) 80vw, 100vw"
              className="min-h-[320px] md:min-h-[520px]"
            />
            <div className="absolute inset-0 flex items-end justify-start pb-8 md:pb-12">
              <div className="max-w-2xl px-6 text-left">
                <h1 className="font-serif text-3xl leading-[1.08] text-white sm:text-4xl md:text-5xl">
                  {project.title}
                </h1>
                <div className="mt-4 space-y-1 text-sm text-white/80">
                  <p>Role — {project.role}</p>
                  <p>Focus — {project.focus}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        {(project.overview || noteItems.length > 0) && (
          <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              {project.overview ? (
                <div>
                  <h2 className="mb-6 font-serif text-2xl text-foreground">Overview</h2>
                  <p className="text-base leading-relaxed text-foreground sm:text-lg">{project.overview}</p>
                </div>
              ) : null}
              {noteItems.length > 0 ? (
                <div>
                  <h2 className="mb-6 font-serif text-2xl text-foreground">Project Notes</h2>
                  <ul className="space-y-4">
                    {noteItems.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                        <p className="text-sm leading-relaxed text-foreground sm:text-base">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </section>
        )}

        {/* Gallery */}
        {galleryItems.length > 0 ? (
          <section className="border-t border-border bg-background">
            <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
              <h2 className="mb-10 font-serif text-2xl text-foreground md:mb-12">Gallery</h2>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                {galleryItems.map((image) => (
                  <div key={image.src}>
                    <ProjectImage
                      ratio="3/2"
                      src={image.src}
                      alt={image.alt}
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    />
                    {image.caption ? (
                      <p className="mt-3 text-sm text-muted-foreground">{image.caption}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* Next / Previous */}
        <section className="border-t border-border bg-background">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-10 text-sm sm:py-12">
            {previousProject ? (
              <Link
                href={`/work/${previousProject.slug}`}
                className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                ← Previous: {previousProject.title}
              </Link>
            ) : (
              <span className="text-muted-foreground">Previous project</span>
            )}
            {nextProject ? (
              <Link
                href={`/work/${nextProject.slug}`}
                className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Next: {nextProject.title} →
              </Link>
            ) : (
              <span className="text-muted-foreground">Next project</span>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
