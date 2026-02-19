'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [hoverText, setHoverText] = useState('')
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const isVisible = useRef(false)
  const [visible, setVisible] = useState(false)

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  const listenersRef = useRef(new Set<Element>())
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const addHoverListeners = useCallback(() => {
    const interactiveElements = document.querySelectorAll(
      'a, button, [data-cursor-hover], [data-cursor-text]'
    )

    interactiveElements.forEach((el) => {
      if (listenersRef.current.has(el)) return
      listenersRef.current.add(el)

      el.addEventListener('mouseenter', () => {
        setIsHovering(true)
        const text = (el as HTMLElement).dataset.cursorText
        if (text) setHoverText(text)
      })
      el.addEventListener('mouseleave', () => {
        setIsHovering(false)
        setHoverText('')
      })
    })
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.innerWidth < 768) return

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible.current) {
        isVisible.current = true
        setVisible(true)
      }
    }

    const handleMouseLeave = () => {
      isVisible.current = false
      setVisible(false)
    }

    const handleMouseEnter = () => {
      isVisible.current = true
      setVisible(true)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    addHoverListeners()

    const observer = new MutationObserver(() => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
      debounceRef.current = setTimeout(addHoverListeners, 200)
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      observer.disconnect()
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [cursorX, cursorY, addHoverListeners])

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[10001]"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        className="rounded-full flex items-center justify-center"
        style={{
          backgroundColor: isHovering ? 'var(--color-accent)' : 'var(--color-text)',
        }}
        animate={{
          width: isHovering ? 80 : 16,
          height: isHovering ? 80 : 16,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {hoverText && isHovering && (
          <motion.span
            className="text-xs font-medium"
            style={{ color: 'var(--color-bg)' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  )
}
