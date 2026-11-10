export function SectionHeading({ id, title, code }: { id?: string; title: string; code: string }) {
  return (
    <div className="mb-10 flex flex-col gap-2">
      <p className="font-mono text-xs text-primary">{`// ${code}`}</p>
      <h2 id={id} className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}
