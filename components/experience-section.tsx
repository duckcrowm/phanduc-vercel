'use client'

import { Award, GraduationCap, MapPin } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'

export function ExperienceSection() {
  const { t } = useLanguage()
  const e = t.experience

  return (
    <section id="experience" aria-labelledby="experience-title" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading id="experience-title" title={e.title} code={e.code} />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-6 rounded-xl border border-border bg-card p-6 sm:p-8">
            <p className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              {e.location}
            </p>
            {e.about.map((p) => (
              <p key={p.slice(0, 20)} className="text-pretty leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}

            <dl className="grid grid-cols-3 gap-3 border-t border-border pt-6">
              {e.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <dt className="order-2 text-xs text-muted-foreground sm:text-sm">{stat.label}</dt>
                  <dd className="order-1 font-display text-3xl font-bold text-primary sm:text-4xl">{stat.value}</dd>
                </div>
              ))}
            </dl>

            <p className="flex items-center gap-2 rounded-lg bg-muted px-4 py-3 text-sm">
              <GraduationCap className="size-5 shrink-0 text-primary" aria-hidden="true" />
              {e.education}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h3 className="mb-6 font-display text-xl font-semibold">{e.certsTitle}</h3>
            <ul className="flex flex-col gap-5">
              {e.certificates.map((cert) => (
                <li key={cert.title} className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Award className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <h4 className="font-display font-semibold leading-snug">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="font-mono text-xs text-muted-foreground">{cert.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
