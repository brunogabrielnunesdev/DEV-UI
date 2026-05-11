import { useId, useState } from 'react'
import { cn } from '../../lib/cn'
import { getRecipe } from '../../lib/recipes'

export function Checkbox({ label, defaultChecked = false, variant = 'secondary' }) {
  const [checked, setChecked] = useState(defaultChecked)
  const id = useId()
  const recipe = getRecipe(variant)

  return (
    <label htmlFor={id} className="flex items-center gap-3">
      <button
        id={id}
        type="button"
        aria-pressed={checked}
        onClick={() => setChecked((value) => !value)}
        className={cn(
          'flex h-5 w-5 items-center justify-center rounded-md border text-[10px] font-bold transition-all duration-[var(--motion-fast)] ease-[var(--ease-premium)]',
          recipe.input,
          checked ? 'border-[var(--color-border-strong)] bg-[var(--color-accent)] text-black' : 'text-transparent',
        )}
      >
        ✓
      </button>
      <span className="text-sm text-[var(--color-text-soft)]">{label}</span>
    </label>
  )
}
