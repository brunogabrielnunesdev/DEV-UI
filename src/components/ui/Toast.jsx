import { cn } from '../../lib/cn'
import { getRecipe } from '../../lib/recipes'

export function Toast({ title, description, variant = 'secondary' }) {
  const recipe = getRecipe(variant)

  return (
    <div className={cn('rounded-[var(--radius-md)] border p-4 shadow-[var(--shadow-card)]', recipe.surface)}>
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <p className="text-sm font-medium text-[var(--color-text-strong)]">{title}</p>
          <p className="text-sm leading-6 text-[var(--color-text-soft)]">{description}</p>
        </div>
        <span className="text-[var(--color-text-muted)]">×</span>
      </div>
    </div>
  )
}
