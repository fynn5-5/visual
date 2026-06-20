import { useState } from "react"
import { Send, Mail } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { SocialLinks } from "@/components/shared/SocialLinks"

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = "Name is required"
  if (!data.email.trim()) {
    errors.email = "Email is required"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email"
  }
  if (!data.message.trim()) errors.message = "Message is required"
  return errors
}

export function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
      setForm({ name: "", email: "", message: "" })
    }, 1000)
  }

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <Section id="contact" eyebrow="Let's talk">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-void-text tracking-tight mb-8">
            Ready to build
            <br />
            <span className="text-void-accent">something great?</span>
          </h2>
          <p className="font-sans text-lg text-void-text/60 leading-relaxed mb-8 max-w-md">
            Tell us about your project. We&apos;ll get back to you within 24 hours
            to discuss how we can bring your vision to life.
          </p>
          <a
            href="mailto:hello@voidstudio.design"
            className="inline-flex items-center gap-2 font-mono text-sm text-void-accent hover:text-void-accent-hover transition-colors"
          >
            <Mail size={16} />
            hello@voidstudio.design
          </a>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-void-surface border border-void-muted rounded-sm">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-void-accent/10 text-void-accent mb-6">
                <Send size={24} />
              </div>
              <h3 className="font-sans text-xl font-bold text-void-text mb-2">
                Message sent!
              </h3>
              <p className="font-sans text-sm text-void-text/60">
                We&apos;ll be in touch soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 font-sans text-sm text-void-accent hover:text-void-accent-hover transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-void-text/50 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full bg-void-surface border border-void-muted rounded-sm px-4 py-3 text-void-text font-sans text-sm placeholder:text-void-text/30 focus:outline-none focus:border-void-accent transition-colors"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1.5 font-sans text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-void-text/50 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full bg-void-surface border border-void-muted rounded-sm px-4 py-3 text-void-text font-sans text-sm placeholder:text-void-text/30 focus:outline-none focus:border-void-accent transition-colors"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1.5 font-sans text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-void-text/50 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="w-full bg-void-surface border border-void-muted rounded-sm px-4 py-3 text-void-text font-sans text-sm placeholder:text-void-text/30 focus:outline-none focus:border-void-accent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="mt-1.5 font-sans text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 font-sans text-sm font-bold px-8 py-3 bg-void-accent text-void-black hover:bg-void-accent-hover transition-colors duration-200 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "Sending..." : "Send Message"}
                {!sending && <Send size={16} />}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  )
}
