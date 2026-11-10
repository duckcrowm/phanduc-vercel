import { ContactSection } from '@/components/contact-section'
import { ExperienceSection } from '@/components/experience-section'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { SkillsSection } from '@/components/skills-section'

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-3 pb-3 sm:px-5 sm:pb-5">
      <SiteHeader />
      <div className="mt-3 overflow-hidden rounded-[2rem] border border-border bg-card/40 sm:mt-4">
        <main>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
