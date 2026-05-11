import { motion } from 'framer-motion'
import { modalBackdrop, modalPanel } from '../../animations/motion'
import { Button } from './Button'
import { cn } from '../../lib/cn'
import { getRecipe } from '../../lib/recipes'

export function Modal({
  open,
  title,
  description,
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
      <div
        className={cn(
          'w-full rounded-[var(--radius-xl)] border p-5 shadow-[var(--shadow-soft)]',
          recipe.surface,
        )}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--color-text-strong)]">
              {title}
            </h3>
            <p className="text-sm leading-7 text-[var(--color-text-soft)]">{description}</p>
          </div>
          <Button variant="ghost" size="sm">
            Close
          </Button>
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-overlay)] px-4"
      onClick={onClose}
    >
      <motion.div
        variants={modalPanel}
        className={cn(
          'w-full max-w-xl rounded-[var(--radius-xl)] border p-6 shadow-[var(--shadow-soft)] sm:p-7',
          recipe.surface,
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text-strong)]">
              {title}
            </h3>
            <p className="text-sm leading-7 text-[var(--color-text-soft)]">{description}</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
        {children}
      </motion.div>
    </motion.div>
  )
}
