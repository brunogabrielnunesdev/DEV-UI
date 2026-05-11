import { motion } from 'framer-motion'
import { modalBackdrop, modalPanel } from '../../animations/motion'
import { cn } from '../../lib/cn'
import { getRecipe } from '../../lib/recipes'

export function Drawer({
  open,
  title,
  children,
  onClose,
  variant = 'secondary',
  staticMode = false,
}) {
  const recipe = getRecipe(variant)

  if (!open && !staticMode) {
    return null
  }

  if (staticMode) {
    return (
      <div className={cn('rounded-[var(--radius-lg)] border p-4 shadow-[var(--shadow-soft)]', recipe.surface)}>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[var(--color-text-strong)]">{title}</h3>
          <span className="text-[var(--color-text-muted)]">×</span>
        </div>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      variants={modalBackdrop}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-50 bg-[var(--color-overlay)]"
      onClick={onClose}
    >
      <motion.div
        variants={modalPanel}
        className={cn(
          'ml-auto flex h-full w-[420px] flex-col border-l p-6 shadow-[var(--shadow-soft)]',
          recipe.surface,
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-[var(--color-text-strong)]">{title}</h3>
          <button type="button" className="text-[var(--color-text-muted)]" onClick={onClose}>
            ×
          </button>
        </div>
        {children}
      </motion.div>
    </motion.div>
  )
}
