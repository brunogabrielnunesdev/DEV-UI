import { useState } from 'react'
import { cn } from '../../lib/cn'
import { getRecipe } from '../../lib/recipes'

export function Tabs({ items, variant = 'secondary' }) {
  const [active, setActive] = useState(items[0]?.id)
  const recipe = getRecipe(variant)

  return (
    <div className="space-y-3">
      <div className={cn('inline-flex rounded-[var(--radius-sm)] border p-1', recipe.surface)}>
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item.id)}
            className={cn(
              'rounded-[10px] px-3 py-2 text-sm transition-all duration-[var(--motion-fast)] ease-[var(--ease-premium)]',
              active === item.id
                ? recipe.button
                : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-strong)]',
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="rounded-[var(--radius-sm)] bg-[var(--color-hover)] p-3 text-sm text-[var(--color-text-soft)]">
        {items.find((item) => item.id === active)?.label} panel
      </div>
    </div>
  )
}
