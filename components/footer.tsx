export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:+1234567890"
              className="text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              Call / Text
            </a>
            <span className="text-muted-foreground">·</span>
            <a
              href="mailto:contact@example.com"
              className="text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              Email
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            Pielaet Construction &amp; Design
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
