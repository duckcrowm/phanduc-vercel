import { ArrowUpRight, Briefcase, Mail, Phone, UserRound as Linkedin } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phoneRaw}`, icon: Phone },
  { label: 'Upwork', value: profile.upwork, href: profile.upworkUrl, icon: Briefcase },
  { label: 'LinkedIn', value: profile.linkedin, href: profile.linkedinUrl, icon: Linkedin },
]

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="bg-grid flex flex-col gap-4 p-8 sm:p-12">
            <p className="font-mono text-xs text-primary">{'// contact'}</p>
            <h2 id="contact-title" className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Kết Nối Ngay
            </h2>
            <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Mình luôn sẵn sàng cho những cơ hội đồng hành và những dự án đầy tiềm năng phía trước. Hãy để lại lời
              nhắn hoặc kết nối với mình qua các kênh bên dưới nhé.
            </p>
          </div>
          <ul className="grid gap-px border-t border-border bg-border sm:grid-cols-2">
            {channels.map((c) => {
              const external = c.href.startsWith('http')
              return (
                <li key={c.label} className="bg-card">
                  <a
                    href={c.href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-4 p-6 transition-colors hover:bg-accent"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border text-primary">
                      <c.icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="font-mono text-xs text-muted-foreground">{c.label}</span>
                      <span className="truncate font-medium">{c.value}</span>
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
