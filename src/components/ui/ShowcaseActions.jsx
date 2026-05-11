import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AlertCircle,
  Check,
  Code2,
  Eye,
  LayoutTemplate,
  MoreHorizontal,
  Wind,
} from 'lucide-react'
import { writeToClipboard } from '../../lib/clipboard'
import { cn } from '../../lib/cn'

export function ShowcaseActions({
  componentCode = '<Component />',
  jsxCode = '<Component />',
  tailwindCode = 'rounded-2xl border border-white/10 bg-white/5',
  fullExampleCode,
  previewLabel = 'Preview',
  className,
  align = 'right',
}) {
  const [copied, setCopied] = useState('')
  const [open, setOpen] = useState(false)
  const [error, setError] = useState('')
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 })
  const rootRef = useRef(null)
  const triggerRef = useRef(null)
  const menuRef = useRef(null)

  const fullExample = fullExampleCode ?? jsxCode

  const actions = useMemo(
    () => [
      { key: 'jsx', label: 'Copy JSX', icon: LayoutTemplate, value: jsxCode },
      { key: 'tailwind', label: 'Copy Tailwind', icon: Wind, value: tailwindCode },
      { key: 'full', label: 'Copy Full Example', icon: Code2, value: fullExample },
    ],
    [fullExample, jsxCode, tailwindCode],
  )

  useEffect(() => {
    function updatePosition() {
      if (!triggerRef.current) {
        return
      }

      const rect = triggerRef.current.getBoundingClientRect()
      const menuWidth = 250
      const spacing = 10
      const rawLeft = align === 'right' ? rect.right - menuWidth : rect.left
      const clampedLeft = Math.min(
        Math.max(12, rawLeft),
        Math.max(12, window.innerWidth - menuWidth - 12),
      )

      setMenuPosition({
        top: rect.bottom + spacing,
        left: clampedLeft,
      })
    }

    function handlePointerDown(event) {
      if (
        !rootRef.current?.contains(event.target) &&
        !menuRef.current?.contains(event.target)
      ) {
        setOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    if (open) {
      updatePosition()
    }

    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('keydown', handleEscape)
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition, true)

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('keydown', handleEscape)
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition, true)
    }
  }, [align, open])

  async function handleCopy(type, value) {
    const success = await writeToClipboard(value)
    if (!success) {
      setError('Clipboard unavailable')
      window.setTimeout(() => setError(''), 1600)
      return
    }

    setError('')
    setCopied(type)
    setOpen(false)
    window.setTimeout(() => setCopied(''), 1200)
  }

  return (
    <div ref={rootRef} className={cn('relative inline-flex shrink-0', className)}>
      <button
        ref={triggerRef}
        type="button"
        aria-label="Open showcase actions"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          'flex h-10 w-10 items-center justify-center rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] text-[var(--text-soft)] backdrop-blur-xl transition-all duration-[var(--motion-base)] ease-[var(--ease-premium)] hover:border-[var(--border-base)] hover:bg-[rgba(255,255,255,0.06)] hover:text-[var(--text-strong)] focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)]',
          open && 'border-[rgba(96,165,250,0.18)] bg-[rgba(59,130,246,0.08)] text-[#dbeafe]',
        )}
      >
        <MoreHorizontal className="h-4 w-4" />
      </button>

      {typeof document !== 'undefined'
        ? createPortal(
            <AnimatePresence>
              {open ? (
                <motion.div
                  ref={menuRef}
                  initial={{ opacity: 0, y: 8, scale: 0.98, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: 6, scale: 0.98, filter: 'blur(6px)' }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  role="menu"
                  style={{ top: menuPosition.top, left: menuPosition.left, position: 'fixed' }}
                  className="z-[120] w-[250px] overflow-hidden rounded-[20px] border border-[var(--border-base)] bg-[rgba(8,8,10,0.92)] shadow-[var(--shadow-float)] backdrop-blur-2xl"
                >
                  <div className="border-b border-[var(--border-soft)] px-4 py-3">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">Actions</p>
                        <p className="mt-1 text-sm text-[var(--text-base)]">{previewLabel}</p>
                      </div>
                      <div className="flex h-8 items-center rounded-full border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-2.5 text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                        <Eye className="mr-1.5 h-3.5 w-3.5" />
                        Copy
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-1 p-2">
                    {actions.map((action) => {
                      const copiedState = copied === action.key
                      const Icon = copiedState ? Check : action.icon

                      return (
                        <button
                          key={action.key}
                          type="button"
                          role="menuitem"
                          onClick={() => handleCopy(action.key, action.value)}
                          className={cn(
                            'flex items-center justify-between rounded-[14px] px-3 py-3 text-left transition-all duration-[var(--motion-fast)] ease-[var(--ease-premium)] focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)]',
                            copiedState
                              ? 'bg-[rgba(16,185,129,0.1)] text-[#d1fae5]'
                              : 'text-[var(--text-soft)] hover:bg-[rgba(255,255,255,0.04)] hover:text-[var(--text-strong)]',
                          )}
                        >
                          <span className="flex items-center gap-3 text-sm">
                            <Icon className="h-4 w-4" />
                            {copiedState ? `${action.label} copied` : action.label}
                          </span>
                          <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                            {copiedState ? 'done' : 'copy'}
                          </span>
                        </button>
                      )
                    })}
                  </div>

                  <div className="border-t border-[var(--border-soft)] px-4 py-3">
                    {error ? (
                      <div className="flex items-center gap-2 text-xs text-[#fca5a5]">
                        <AlertCircle className="h-4 w-4" />
                        {error}
                      </div>
                    ) : (
                      <p className="text-xs leading-6 text-[var(--text-muted)]">
                        Open with click, close with outside click or <span className="text-[var(--text-base)]">Esc</span>.
                      </p>
                    )}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </div>
  )
}
