'use client'

import { useEffect, useState } from 'react'
import { profile } from '@/lib/portfolio-data'

function formatTime(date: Date) {
  return date.toLocaleTimeString('en-GB', { timeZone: 'Asia/Ho_Chi_Minh', hour12: false })
}

export function SiteFooter() {
  const [time, setTime] = useState('--:--:--')

  useEffect(() => {
    setTime(formatTime(new Date()))
    const id = setInterval(() => setTime(formatTime(new Date())), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 font-mono text-xs text-muted-foreground sm:flex-row">
        <p>
          {'© '}
          {new Date().getFullYear()} {profile.name}
        </p>
        <p className="flex flex-wrap justify-center gap-x-4">
          <span>
            SERVER TIME: <time className="text-primary">{time}</time>
          </span>
          <span>COORDINATES: {profile.coordinates}</span>
        </p>
      </div>
    </footer>
  )
}
