import { useState } from 'react'
import { cn } from '../../lib/cn'
import { getRecipe } from '../../lib/recipes'

export function Switch({
  label,
  defaultChecked = false,
  checked,
  disabled = false,
  onCheckedChange,
  variant = 'secondary',
}) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked)
  const recipe = getRecipe(variant)
  const currentChecked = checked ?? internalChecked

  function toggle() {
    if (disabled) {
      return
    }

    const nextValue = !currentChecked
    if (checked === undefined) {
      setInternalChecked(nextValue)
    }
    onCheckedChange?.(nextValue)
  }

  return (
    <div className="flex items-center justify-between gap-3">
      <span className={cn('text-sm text-[var(--color-text-soft)]', disabled && 'opacity-50')}>{label}</span>
      <button
        type="button"
        disabled={disabled}
        aria-pressed={currentChecked}
        onClick={toggle}
        className={cn(
          'relative h-7 w-12 rounded-full border transition-all duration-[var(--motion-fast)] ease-[var(--ease-premium)] disabled:cursor-not-allowed disabled:opacity-50',
          recipe.input,
          currentChecked && 'border-[var(--color-border-strong)] bg-[var(--color-accent-soft)]',
        )}
      >
        <span
          className={cn(
            'absolute top-0.5 h-5.5 w-5.5 rounded-full bg-[var(--color-text-strong)] transition-all duration-[var(--motion-fast)] ease-[var(--ease-premium)]',
            currentChecked ? 'left-[22px]' : 'left-0.5',
          )}
        />
      </button>
    </div>
  )
}
