import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { getRecipe } from '../../lib/recipes'

export function IconButton({ children, variant = 'secondary', className, ...props }) {
  const recipe = getRecipe(variant)

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border text-sm font-semibold text-[var(--color-text-strong)] transition-all duration-[var(--motion-base)] ease-[var(--ease-premium)]',
        recipe.button,
        className,
      )}
      type="button"
      {...props}
    >
      {children}
    </motion.button>
  )
}
