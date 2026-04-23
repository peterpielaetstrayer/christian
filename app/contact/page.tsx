'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('Project Inquiry')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )
    window.location.href = `mailto:pielaetbuilt@gmail.com?subject=${subject}&body=${body}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Navigation />
      
      <main className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <h1 className="mb-6 font-serif text-4xl text-foreground md:text-5xl">
          Start with the scope.
        </h1>

        <p className="mb-12 text-lg leading-relaxed text-secondary">
          Share drawings, photos, or a problem description.
          <br />
          Text preferred. Calls are fine too.
        </p>

        {/* Direct Contact Links */}
        <div className="mb-16 flex flex-col gap-6 border-b border-border pb-12 md:flex-row md:items-center">
          <a
            href="tel:+18056513637"
            className="text-lg text-foreground transition-colors hover:text-accent"
          >
            (805) 651-3637
          </a>
          <span className="hidden text-muted-foreground md:inline">·</span>
          <a
            href="mailto:pielaetbuilt@gmail.com"
            className="text-lg text-foreground transition-colors hover:text-accent"
          >
            pielaetbuilt@gmail.com
          </a>
        </div>

        <p className="mb-12 text-base leading-relaxed text-secondary">
          Serving Santa Barbara to Los Angeles. Larger jobs negotiable outside the area.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-foreground">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              placeholder="Your name"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full resize-none border-b border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              placeholder="Describe your project, share scope details, or ask a question..."
              required
            />
          </div>

          <button
            type="submit"
            className="border border-foreground bg-transparent px-8 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Send Message
          </button>
        </form>
      </main>

      <Footer />
    </>
  )
}
