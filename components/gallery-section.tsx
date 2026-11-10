import Image from 'next/image'
import { Camera } from 'lucide-react'
import { photos } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

export function GallerySection() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading id="gallery-title" title="Khoảnh khắc của mình" code="photography" />
        <p className="-mt-4 mb-10 flex max-w-2xl gap-3 text-pretty leading-relaxed text-muted-foreground">
          <Camera className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
          Với mình, chiếc máy ảnh là người bạn đồng hành để bắt trọn những khoảnh khắc đáng giá, từ đường phố Sài
          Gòn đến những chuyến đi xa. Đây là vài khung hình mình chụp bằng Fujifilm X-S10.
        </p>
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {photos.map((photo, i) => (
            <li
              key={photo.src}
              className={i % 2 === 0 ? 'lg:translate-y-6' : undefined}
            >
              <figure className="group overflow-hidden rounded-xl border border-border bg-card">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={photo.src || '/placeholder.svg'}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-3 py-2 font-mono text-xs text-muted-foreground">{photo.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
