import { motion } from 'framer-motion'
import { Button } from './Button'
import { cn } from '../../lib/cn'
import { getRecipe } from '../../lib/recipes'

export function Tooltip({ label, content, variant = 'secondary' }) {
  const recipe = getRecipe(variant)

  return (
    <div className="relative flex justify-center pt-8">
      <motion.div
        initial={{ opacity: 0, y: 6, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.22 }}
        className={cn(
          'absolute top-0 rounded-[var(--radius-sm)] border px-3 py-2 text-xs text-[var(--color-text-soft)] shadow-[var(--shadow-card)]',
          recipe.surface,
        )}
      >
        {content}
      </motion.div>
      <Button variant={variant} size="sm">{label}</Button>
    </div>
  )
}
