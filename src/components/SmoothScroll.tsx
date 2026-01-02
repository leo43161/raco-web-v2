"use client";
import { ReactLenis, type LenisRef } from 'lenis/react' // Nota: la doc dice lenis/react pero el paquete es lenis
import { cancelFrame, frame } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef | null>(null)

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)
    return () => cancelFrame(update)
  }, [])

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  )
}