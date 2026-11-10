'use client'

import { useEffect, useState } from 'react'

export function TypedRole({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0)
  const [length, setLength] = useState(roles[0].length)
  const [deleting, setDeleting] = useState(false)

  const current = roles[index]

  useEffect(() => {
    const done = !deleting && length === current.length
    const empty = deleting && length === 0
    const delay = done ? 1800 : deleting ? 40 : 80

    const timer = setTimeout(() => {
      if (done) setDeleting(true)
      else if (empty) {
        setDeleting(false)
        setIndex((i) => (i + 1) % roles.length)
      } else setLength((l) => l + (deleting ? -1 : 1))
    }, delay)

    return () => clearTimeout(timer)
  }, [length, deleting, current.length, roles.length])

  return (
    <>
      <span className="sr-only">{roles.join(' ')}</span>
      <span aria-hidden="true" className="text-primary">
        {current.slice(0, length)}
        <span className="animate-caret">|</span>
      </span>
    </>
  )
}
