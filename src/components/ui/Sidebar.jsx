import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

export function Sidebar({ brand, tagline, groups, footer }) {
  return (
    <aside className="border-b border-[var(--color-border)] bg-[var(--color-surface)]/92 px-6 py-6 backdrop-blur-xl lg:min-h-screen lg:border-b-0 lg:border-r lg:px-5">
      <div className="flex h-full flex-col gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface-elevated)] text-sm font-semibold tracking-[0.2em] text-[var(--color-text-strong)]">
              N
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[-0.02em] text-[var(--color-text-strong)]">
                {brand}
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">{tagline}</p>
            </div>
          </div>
        </div>

        <nav className="grid gap-6">
          {groups.map((group) => (
            <div key={group.title} className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-text-muted)]">
                {group.title}
              </p>
              <div className="grid gap-1.5">
                {group.items.map((item) => (
                  <motion.button
                    key={item.label ?? item.family}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      'flex h-11 items-center rounded-[var(--radius-sm)] border px-4 text-sm transition-all duration-[var(--motion-base)] ease-[var(--ease-premium)]',
                      item.active
                        ? 'border-[var(--color-border-strong)] bg-[var(--color-accent-soft)] text-[var(--color-accent-strong)]'
                        : 'border-transparent bg-transparent text-[var(--color-text-soft)] hover:border-[var(--color-border)] hover:bg-[var(--color-hover)] hover:text-[var(--color-text-strong)]',
                    )}
                    type="button"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="mt-auto">{footer}</div>
      </div>
    </aside>
  )
}
