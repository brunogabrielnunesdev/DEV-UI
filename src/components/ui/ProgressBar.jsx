import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { getRecipe } from '../../lib/recipes'

export function ProgressBar({ value, variant = 'secondary' }) {
  const recipe = getRecipe(variant)

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
        <span>Progress</span>
        <span>{value}%</span>
      </div>
      <div className={cn('h-3 overflow-hidden rounded-full border', recipe.input)}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(value, 100)}%` }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-[var(--color-accent)]"
        />
      </div>
    </div>
  )
}
