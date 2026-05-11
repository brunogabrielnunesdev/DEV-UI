import { Bell, Command, Search, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { Surface } from '../ui/Surface'
import { Badge } from '../ui/Badge'

export function LibraryShell({ pages, activePage, onNavigate, title, children }) {
  return (
    <div className="grid min-h-screen grid-cols-[280px_minmax(0,1fr)] bg-[var(--bg-0)]">
      <aside className="sticky top-0 flex h-screen flex-col border-r border-[var(--border-soft)] bg-[rgba(0,0,0,0.84)] px-6 py-6 backdrop-blur-xl">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-[18px] border border-[var(--border-base)] bg-[linear-gradient(180deg,rgba(59,130,246,0.18),rgba(255,255,255,0.04))] shadow-[var(--shadow-glow-blue)]">
            <Sparkles className="h-5 w-5 text-[var(--text-strong)]" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[-0.03em] text-[var(--text-strong)]">DevUI Library</p>
            <p className="text-sm text-[var(--text-muted)]">Premium dark system</p>
          </div>
        </div>

        <div className="space-y-2">
          {pages.map((page) => {
            const Icon = page.icon
            const active = page.id === activePage

            return (
              <motion.button
                key={page.id}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => onNavigate(page.id)}
                className={`flex h-11 w-full items-center gap-3 rounded-[var(--radius-sm)] border px-4 text-sm transition-all duration-[var(--motion-base)] ${
                  active
                    ? 'border-[var(--border-strong)] bg-[rgba(255,255,255,0.06)] text-[var(--text-strong)] shadow-[var(--shadow-panel)]'
                    : 'border-transparent text-[var(--text-soft)] hover:border-[var(--border-soft)] hover:bg-[rgba(255,255,255,0.03)]'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{page.label}</span>
              </motion.button>
            )
          })}
        </div>

        <Surface variant="glass" className="mt-auto p-4">
          <div className="space-y-3">
            <Badge tone="blue">Design System</Badge>
            <p className="text-sm leading-6 text-[var(--text-soft)]">
              Unified docs shell, reusable recipes, premium spacing, and production-minded dark UI.
            </p>
          </div>
        </Surface>
      </aside>

      <main className="min-w-0">
        <header className="sticky top-0 z-30 border-b border-[var(--border-soft)] bg-[rgba(0,0,0,0.74)] px-8 py-5 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">DevUI</p>
              <h1 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">{title}</h1>
            </div>
            <div className="flex items-center gap-3">
              <Surface variant="subtle" className="flex items-center gap-3 px-4 py-3">
                <Search className="h-4 w-4 text-[var(--text-muted)]" />
                <span className="text-sm text-[var(--text-muted)]">Search components, pages, states...</span>
                <Badge>⌘K</Badge>
              </Surface>
              <button className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] text-[var(--text-soft)]">
                <Bell className="h-4 w-4" />
              </button>
              <button className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] text-[var(--text-soft)]">
                <Command className="h-4 w-4" />
              </button>
            </div>
          </div>
        </header>
        <div className="px-8 py-8">{children}</div>
      </main>
    </div>
  )
}
