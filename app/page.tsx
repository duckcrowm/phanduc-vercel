import { AboutSection } from '@/components/about-section'
import { CertificatesSection } from '@/components/certificates-section'
import { ContactSection } from '@/components/contact-section'
import { ExperienceSection } from '@/components/experience-section'
import { GallerySection } from '@/components/gallery-section'
import { HeroSection } from '@/components/hero-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <GallerySection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
