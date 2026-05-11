import { cn } from '../../lib/cn'
import { getRecipe } from '../../lib/recipes'

export function Select({ label, options, defaultValue, variant = 'secondary' }) {
  const recipe = getRecipe(variant)

  return (
    <label className="grid gap-2">
      {label ? <span className="text-sm font-medium text-[var(--color-text-strong)]">{label}</span> : null}
      <div className={cn('flex h-12 items-center justify-between rounded-[var(--radius-sm)] border px-4 text-sm', recipe.input)}>
        <span className="text-[var(--color-text-strong)]">{defaultValue ?? options?.[0]}</span>
        <span className="text-[var(--color-text-muted)]">⌄</span>
      </div>
    </label>
  )
}
