import { Award, FileText } from 'lucide-react'
import { certificates } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

export function CertificatesSection() {
  return (
    <section id="certificates" aria-labelledby="certificates-title" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading id="certificates-title" title="Chứng chỉ" code="certificates" />
        <ul className="grid gap-4 sm:grid-cols-2">
          {certificates.map((cert) => (
            <li
              key={cert.title}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/60"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Award className="size-5" aria-hidden="true" />
              </span>
              <div className="flex flex-1 flex-col gap-1">
                <h3 className="font-display font-semibold leading-snug">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                  {cert.date}
                  <span className="flex items-center gap-1 rounded border border-border px-1.5 py-0.5 text-primary">
                    <FileText className="size-3" aria-hidden="true" />
                    PDF
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
