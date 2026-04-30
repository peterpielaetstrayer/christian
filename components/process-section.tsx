type ProcessStep = {
  title: string
  detail: string
}

const processSteps: ProcessStep[] = [
  {
    title: 'Send scope',
    detail: 'Text photos, drawings, and a short description.',
  },
  {
    title: 'Clarify + confirm',
    detail: 'Quick questions to lock scope, constraints, and timeline.',
  },
  {
    title: 'Estimate + schedule',
    detail: 'Clear pricing, sequencing, and start window.',
  },
  {
    title: 'Execute cleanly',
    detail: 'Code-aware build with tight coordination and finish alignment.',
  },
]

export function ProcessBlock({
  heading = 'Process',
  subheading = 'Clarity up front. Clean execution in the field.',
}: {
  heading?: string
  subheading?: string
}) {
  return (
    <div>
      <h2 className="mb-4 font-serif text-2xl text-foreground sm:text-3xl">{heading}</h2>
      <p className="text-base leading-relaxed text-secondary sm:text-lg">{subheading}</p>

      <ol className="mt-10 space-y-6">
        {processSteps.map((step, index) => (
          <li key={step.title} className="flex gap-4">
            <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center border border-border text-sm text-muted-foreground">
              {index + 1}
            </div>
            <div>
              <p className="text-base font-medium text-foreground sm:text-lg">{step.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-secondary sm:text-base">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function ProcessSection({
  heading = 'Process',
  subheading = 'Clarity up front. Clean execution in the field.',
  variant = 'split',
}: {
  heading?: string
  subheading?: string
  variant?: 'split' | 'stack'
}) {
  const split = variant === 'split'

  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className={split ? 'grid gap-12 md:grid-cols-2 md:gap-16' : 'max-w-3xl'}>
          <div className={split ? 'max-w-xl' : undefined}>
            <h2 className="mb-4 font-serif text-2xl text-foreground sm:text-3xl">{heading}</h2>
            <p className="text-base leading-relaxed text-secondary sm:text-lg">{subheading}</p>
          </div>

          <ol className={split ? 'space-y-6' : 'mt-10 space-y-6'}>
            {processSteps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center border border-border text-sm text-muted-foreground">
                  {index + 1}
                </div>
                <div>
                  <p className="text-base font-medium text-foreground sm:text-lg">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-secondary sm:text-base">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

