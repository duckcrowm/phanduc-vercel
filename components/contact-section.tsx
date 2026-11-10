'use client'

import { ArrowUpRight, Briefcase, Mail, Phone, UserRound as Linkedin } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { profile } from '@/lib/portfolio-data'

export function ContactSection() {
  const { t } = useLanguage()
  const c = t.contact

  const channels = [
    { label: c.email, value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: c.phone, value: profile.phone, href: `tel:${profile.phoneRaw}`, icon: Phone },
    { label: 'Upwork', value: profile.upwork, href: profile.upworkUrl, icon: Briefcase },
    { label: 'LinkedIn', value: profile.linkedin, href: profile.linkedinUrl, icon: Linkedin },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="bg-grid flex flex-col gap-4 p-8 sm:p-12">
            <p className="font-mono text-xs text-muted-foreground">{'// contact'}</p>
            <h2 id="contact-title" className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {c.title}
            </h2>
            <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">{c.text}</p>
          </div>
          <ul className="grid gap-px border-t border-border bg-border sm:grid-cols-2">
            {channels.map((ch) => {
              const external = ch.href.startsWith('http')
              return (
                <li key={ch.label} className="bg-card">
                  <a
                    href={ch.href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-4 p-6 transition-colors hover:bg-accent"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border text-primary">
                      <ch.icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="font-mono text-xs text-muted-foreground">{ch.label}</span>
                      <span className="truncate font-medium">{ch.value}</span>
                    </span>
                    <ArrowUpRight
                      className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
