import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { getRecipe } from '../../lib/recipes'

export function Skeleton({ variant = 'secondary' }) {
  const recipe = getRecipe(variant)

  return (
    <div className={cn('rounded-[var(--radius-md)] border p-3', recipe.surface)}>
      <motion.div
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="space-y-3"
      >
        <div className="h-4 w-2/3 rounded-full bg-[var(--color-hover)]" />
        <div className="h-12 rounded-[var(--radius-sm)] bg-[var(--color-hover)]" />
        <div className="h-4 w-5/6 rounded-full bg-[var(--color-hover)]" />
      </motion.div>
    </div>
  )
}
