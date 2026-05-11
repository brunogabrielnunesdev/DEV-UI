import { Button } from './Button'
import { cn } from '../../lib/cn'
import { getRecipe } from '../../lib/recipes'

export function DropdownMenu({ label, items, variant = 'secondary' }) {
  const recipe = getRecipe(variant)

  return (
    <div className="space-y-2">
      <Button variant={variant} size="sm" className="w-full justify-between">
        <span>{label}</span>
        <span>⌄</span>
      </Button>
      <div className={cn('rounded-[var(--radius-md)] border p-2 shadow-[var(--shadow-card)]', recipe.surface)}>
        {items.map((item) => (
          <button
            key={item}
            type="button"
            className="flex h-10 w-full items-center rounded-[var(--radius-sm)] px-3 text-sm text-[var(--color-text-soft)] transition-colors hover:bg-[var(--color-hover)] hover:text-[var(--color-text-strong)]"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}
