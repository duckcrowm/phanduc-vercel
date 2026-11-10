import Image from 'next/image'
import { ArrowDown, Sun } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { TypedRole } from '@/components/typed-role'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 md:grid-cols-[1.3fr_1fr] md:pt-24">
        <div className="flex flex-col gap-6">
          <p className="font-mono text-sm text-primary">{`> ${profile.greeting}`}</p>
          <h1 className="text-balance font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="font-display text-2xl font-medium text-muted-foreground sm:text-3xl">
            <TypedRole roles={profile.roles} />
          </p>
          <div className="flex max-w-xl flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
            {profile.intro.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
            <p className="flex items-center gap-2 font-medium text-foreground">
              {profile.motto}
              <Sun className="size-4 text-primary" aria-hidden="true" />
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              className="rounded-md bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Kết nối ngay
            </a>
            <a
              href="#experience"
              className="flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm transition-colors hover:border-primary hover:text-primary"
            >
              Xem dự án
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/5">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="size-3 rounded-full bg-[#ff5f56]" />
              <span className="size-3 rounded-full bg-[#ffbd2e]" />
              <span className="size-3 rounded-full bg-[#27c93f]" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">{`${profile.shortName}.png`}</span>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/avatar.png"
                alt={`Ảnh chân dung ${profile.name}`}
                fill
                priority
                sizes="(min-width: 768px) 384px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between px-4 py-3 font-mono text-xs">
              <span className="text-muted-foreground">status:</span>
              <span className="flex items-center gap-2 text-primary">
                <span className="size-2 animate-pulse rounded-full bg-primary" />
                open_to_work
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
