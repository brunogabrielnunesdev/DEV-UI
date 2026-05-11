import { cn } from '../../lib/cn'
import { getRecipe } from '../../lib/recipes'

export function Card({
  className,
  interactive = false,
  variant = 'secondary',
  children,
  ...props
}) {
  const recipe = getRecipe(variant)

  return (
    <div
      className={cn(
        'rounded-[var(--radius-lg)] border shadow-[var(--shadow-card)] transition-all duration-[var(--motion-base)] ease-[var(--ease-premium)]',
        recipe.surface,
        interactive && 'hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={cn('space-y-3 p-6', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h2
      className={cn('text-xl font-semibold tracking-[-0.03em] text-[var(--color-text-strong)]', className)}
      {...props}
    >
      {children}
    </h2>
  )
}

export function CardDescription({ className, children, ...props }) {
  return (
    <p className={cn('text-sm leading-7 text-[var(--color-text-soft)]', className)} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn('px-6 pb-6', className)} {...props}>
      {children}
    </div>
  )
}
