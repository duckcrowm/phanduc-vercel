'use client'

import { useEffect, useState } from 'react'

export function Typewriter({ text, speed = 55 }: { text: string; speed?: number }) {
  const [length, setLength] = useState(0)

  useEffect(() => {
    if (length >= text.length) return
    const timer = setTimeout(() => setLength((l) => l + 1), speed)
    return () => clearTimeout(timer)
  }, [length, text.length, speed])

  return (
    <span className="relative block">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="invisible block">
        {text}_
      </span>
      <span aria-hidden="true" className="absolute inset-0">
        {text.slice(0, length)}
        <span className="animate-caret text-primary">_</span>
      </span>
    </span>
  )
}
