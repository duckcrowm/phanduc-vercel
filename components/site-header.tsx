'use client'

import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { profile, type Lang } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

const languages: { value: Lang; label: string }[] = [
  { value: 'vi', label: 'VIE' },
  { value: 'en', label: 'ENG' },
]

export function SiteHeader() {
  const { resolvedTheme, setTheme } = useTheme()
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#home', label: t.nav.home },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#experience', label: t.nav.experience },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className="sticky top-3 z-50 mt-3 sm:top-5 sm:mt-5">
      <div className="relative">
        <div className="flex h-14 items-center justify-between gap-3 rounded-full border border-border bg-background/80 px-5 backdrop-blur-md">
          <a href="#home" className="font-mono text-sm font-semibold tracking-tight">
            <span className="text-primary">~/</span>
            {profile.shortName}
            <span className="animate-caret text-primary">_</span>
          </a>

          <nav aria-label={t.ui.mainNav} className="hidden md:block">
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-full px-3 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div
              role="group"
              aria-label={t.ui.language}
              className="flex h-9 items-center rounded-full border border-border p-0.5 font-mono text-[11px] font-semibold"
            >
              {languages.map((l) => (
                <button
                  key={l.value}
                  type="button"
                  aria-pressed={lang === l.value}
                  onClick={() => setLang(l.value)}
                  className={cn(
                    'rounded-full px-2.5 py-1.5 transition-colors',
                    lang === l.value
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label={t.ui.toggleTheme}
            >
              <Sun className="size-4 dark:hidden" aria-hidden="true" />
              <Moon className="hidden size-4 dark:block" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex size-9 items-center justify-center rounded-full border border-border md:hidden"
              aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            aria-label={t.ui.mobileNav}
            className="absolute inset-x-0 top-full mt-2 rounded-3xl border border-border bg-background/95 p-3 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-full px-4 py-2.5 font-mono text-sm uppercase tracking-wider text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
