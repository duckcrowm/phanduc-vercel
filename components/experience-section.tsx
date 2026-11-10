'use client'

import { Briefcase, CheckCircle2, Laptop } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { experiences, type Experience, type ExperienceType } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

type Filter = 'all' | ExperienceType

const groups: { type: ExperienceType; title: string; code: string; unit: string }[] = [
  { type: 'work', title: 'Kinh nghiệm làm việc', code: 'in_house_and_corporate_experience', unit: 'công ty' },
  {
    type: 'freelance',
    title: 'Dự án ngắn hạn / Freelancer',
    code: 'freelance_and_short_term_collaborations',
    unit: 'dự án / nền tảng',
  },
]

export function ExperienceSection() {
  const [filter, setFilter] = useState<Filter>('all')

  const tabs: { value: Filter; label: string; count: number }[] = [
    { value: 'all', label: 'Tất cả', count: experiences.length },
    ...groups.map((g) => ({
      value: g.type,
      label: g.title,
      count: experiences.filter((e) => e.type === g.type).length,
    })),
  ]

  return (
    <section id="experience" aria-labelledby="experience-title" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading id="experience-title" title="Hành trình" code="experience.log" />

        <div role="tablist" aria-label="Lọc kinh nghiệm" className="mb-10 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={filter === tab.value}
              onClick={() => setFilter(tab.value)}
              className={cn(
                'rounded-full border px-4 py-2 font-mono text-xs transition-colors',
                filter === tab.value
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border text-muted-foreground hover:border-primary hover:text-primary',
              )}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-16">
          {groups
            .filter((g) => filter === 'all' || filter === g.type)
            .map((group) => {
              const items = experiences.filter((e) => e.type === group.type)
              const Icon = group.type === 'work' ? Briefcase : Laptop
              return (
                <div key={group.type}>
                  <div className="mb-6 flex flex-wrap items-end justify-between gap-2">
                    <div>
                      <h3 className="flex items-center gap-2 font-display text-2xl font-semibold">
                        <Icon className="size-5 text-primary" aria-hidden="true" />
                        {group.title}
                      </h3>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">{`// ${group.code}`}</p>
                    </div>
                    <span className="rounded-md bg-accent px-3 py-1 font-mono text-xs text-accent-foreground">
                      {items.length} {group.unit}
                    </span>
                  </div>
                  <ol className="grid gap-4 md:grid-cols-2">
                    {items.map((item) => (
                      <ExperienceCard key={`${item.company}-${item.period}`} item={item} />
                    ))}
                  </ol>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ item }: { item: Experience }) {
  return (
    <li className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60">
      <div className="flex flex-col gap-1">
        <p className="font-mono text-xs text-primary">{item.period}</p>
        <h4 className="font-display text-lg font-semibold">{item.role}</h4>
        <p className="text-sm text-muted-foreground">{item.company}</p>
      </div>
      <ul className="flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
        {item.tasks.map((task) => (
          <li key={task} className="flex gap-2">
            <span className="text-primary" aria-hidden="true">
              {'-'}
            </span>
            {task}
          </li>
        ))}
      </ul>
      <div className="mt-auto rounded-lg bg-muted p-4">
        <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider">Kết quả</p>
        <ul className="flex flex-col gap-1.5 text-sm">
          {item.results.map((result) => (
            <li key={result} className="flex gap-2">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {result}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}
