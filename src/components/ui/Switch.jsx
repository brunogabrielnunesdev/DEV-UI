import { useState } from 'react'
import { cn } from '../../lib/cn'
import { getRecipe } from '../../lib/recipes'

export function Switch({ label, defaultChecked = false, variant = 'secondary' }) {
  const [checked, setChecked] = useState(defaultChecked)
  const recipe = getRecipe(variant)

  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm text-[var(--color-text-soft)]">{label}</span>
      <button
        type="button"
        onClick={() => setChecked((value) => !value)}
        className={cn(
          'relative h-7 w-12 rounded-full border transition-all duration-[var(--motion-fast)] ease-[var(--ease-premium)]',
          recipe.input,
          checked && 'border-[var(--color-border-strong)] bg-[var(--color-accent-soft)]',
        )}
      >
        <span
          className={cn(
            'absolute top-0.5 h-5.5 w-5.5 rounded-full bg-[var(--color-text-strong)] transition-all duration-[var(--motion-fast)] ease-[var(--ease-premium)]',
            checked ? 'left-[22px]' : 'left-0.5',
          )}
        />
      </button>
    </div>
  )
}
