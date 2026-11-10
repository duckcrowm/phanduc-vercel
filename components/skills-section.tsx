'use client'

import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'
import { tools } from '@/lib/portfolio-data'

export function SkillsSection() {
  const { t } = useLanguage()
  const s = t.skills

  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading id="skills-title" title={s.title} code={s.code} />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h3 className="mb-6 font-display text-xl font-semibold">{s.toolsTitle}</h3>
            <ul className="flex flex-col gap-4">
              {tools.map((tool) => (
                <li key={tool.name}>
                  <div className="mb-1.5 flex items-center justify-between font-mono text-xs">
                    <span>{tool.name}</span>
                    <span className="text-muted-foreground">{tool.level}%</span>
                  </div>
                  <div
                    className="h-1.5 overflow-hidden rounded-full bg-muted"
                    role="progressbar"
                    aria-label={s.toolLevel(tool.name)}
                    aria-valuenow={tool.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="h-full rounded-full bg-foreground" style={{ width: `${tool.level}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h3 className="mb-6 font-display text-xl font-semibold">{s.groupsTitle}</h3>
            <div className="flex flex-col gap-7">
              {s.groups.map((group) => (
                <div key={group.title}>
                  <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                    {group.title}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-muted px-3.5 py-1.5 text-sm transition-colors hover:border-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
