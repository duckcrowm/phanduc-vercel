'use client'

import { Briefcase, CheckCircle2, Laptop } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'
import type { Project, ProjectType } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

type Filter = 'all' | ProjectType

const groupTypes: ProjectType[] = ['work', 'freelance']

export function ProjectsSection() {
  const { t } = useLanguage()
  const p = t.projects
  const [filter, setFilter] = useState<Filter>('all')

  const tabs: { value: Filter; label: string; count: number }[] = [
    { value: 'all', label: p.all, count: p.items.length },
    ...groupTypes.map((type) => ({
      value: type,
      label: p.groups[type].title,
      count: p.items.filter((e) => e.type === type).length,
    })),
  ]

  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading id="projects-title" title={p.title} code={p.code} />

        <div role="tablist" aria-label={p.filterAria} className="mb-10 flex flex-wrap gap-2">
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
          {groupTypes
            .filter((type) => filter === 'all' || filter === type)
            .map((type) => {
              const group = p.groups[type]
              const items = p.items.filter((e) => e.type === type)
              const Icon = type === 'work' ? Briefcase : Laptop
              return (
                <div key={type}>
                  <div className="mb-6 flex flex-wrap items-end justify-between gap-2">
                    <div>
                      <h3 className="flex items-center gap-2 font-display text-2xl font-semibold">
                        <Icon className="size-5 text-primary" aria-hidden="true" />
                        {group.title}
                      </h3>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">{`// ${group.code}`}</p>
                    </div>
                    <span className="rounded-full bg-accent px-3 py-1 font-mono text-xs text-accent-foreground">
                      {items.length} {group.unit}
                    </span>
                  </div>
                  <ol className="grid gap-4 md:grid-cols-2">
                    {items.map((item) => (
                      <ProjectCard key={`${item.company}-${item.period}`} item={item} resultLabel={p.result} />
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

function ProjectCard({ item, resultLabel }: { item: Project; resultLabel: string }) {
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
            <span aria-hidden="true">{'-'}</span>
            {task}
          </li>
        ))}
      </ul>
      <div className="mt-auto rounded-lg bg-muted p-4">
        <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider">{resultLabel}</p>
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
