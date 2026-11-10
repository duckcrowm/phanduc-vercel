import { GraduationCap, MapPin } from 'lucide-react'
import { profile, tools } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading id="about-title" title="Dự Án Cá Nhân" code="about_me" />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-6 rounded-xl border border-border bg-card p-6 sm:p-8">
            <p className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              {profile.location}
            </p>
            {profile.about.map((p) => (
              <p key={p.slice(0, 20)} className="text-pretty leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}

            <dl className="grid grid-cols-3 gap-3 border-t border-border pt-6">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <dt className="order-2 text-xs text-muted-foreground sm:text-sm">{stat.label}</dt>
                  <dd className="order-1 font-display text-3xl font-bold text-primary sm:text-4xl">{stat.value}</dd>
                </div>
              ))}
            </dl>

            <p className="flex items-center gap-2 rounded-lg bg-muted px-4 py-3 text-sm">
              <GraduationCap className="size-5 shrink-0 text-primary" aria-hidden="true" />
              {profile.education}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h3 className="mb-6 font-display text-xl font-semibold">Công cụ</h3>
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
                    aria-label={`Mức thành thạo ${tool.name}`}
                    aria-valuenow={tool.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="h-full rounded-full bg-primary" style={{ width: `${tool.level}%` }} />
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
