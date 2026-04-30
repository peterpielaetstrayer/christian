export function Footer() {
  const licenseNumber = process.env.NEXT_PUBLIC_LICENSE_NUMBER ?? '1153030'
  const licenseLabel = process.env.NEXT_PUBLIC_LICENSE_LABEL ?? 'CA CSLB'
  const insuredLabel = process.env.NEXT_PUBLIC_INSURED_LABEL ?? 'Licensed & Insured'

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              href="tel:+18056513637"
              className="min-h-11 py-2 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              Call / Text
            </a>
            <span className="text-muted-foreground">·</span>
            <a
              href="mailto:pielaetbuilt@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="min-h-11 py-2 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              Email
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            Pielaet Construction
          </p>
          <p className="text-sm text-muted-foreground">
            {licenseNumber ? `${licenseLabel} #${licenseNumber} · ${insuredLabel}` : insuredLabel}
          </p>
          <p className="max-w-[42rem] text-sm text-muted-foreground">
            Serving Santa Barbara to Los Angeles. Larger jobs negotiable outside the area.
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
