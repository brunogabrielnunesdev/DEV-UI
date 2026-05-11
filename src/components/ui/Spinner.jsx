import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { getRecipe } from '../../lib/recipes'

export function Spinner({ variant = 'secondary', label }) {
  const recipe = getRecipe(variant)

  return (
    <div className="flex items-center gap-3">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, ease: 'linear', repeat: Infinity }}
        className={cn('h-5 w-5 rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent)]', recipe.surface)}
      />
      {label ? <span className="text-sm text-[var(--color-text-soft)]">{label}</span> : null}
    </div>
  )
}
