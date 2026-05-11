import { useId, useState } from 'react'
import { cn } from '../../lib/cn'
import { getRecipe } from '../../lib/recipes'

export function Checkbox({
  label,
  defaultChecked = false,
  checked,
  disabled = false,
  onCheckedChange,
  variant = 'secondary',
}) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked)
  const id = useId()
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
    <label htmlFor={id} className="flex items-center gap-3">
      <button
        id={id}
        type="button"
        disabled={disabled}
        aria-pressed={currentChecked}
        onClick={toggle}
        className={cn(
          'flex h-5 w-5 items-center justify-center rounded-md border text-[10px] font-bold transition-all duration-[var(--motion-fast)] ease-[var(--ease-premium)] disabled:cursor-not-allowed disabled:opacity-50',
          recipe.input,
          currentChecked ? 'border-[var(--color-border-strong)] bg-[var(--color-accent)] text-black' : 'text-transparent',
        )}
      >
        ✓
      </button>
      <span className={cn('text-sm text-[var(--color-text-soft)]', disabled && 'opacity-50')}>{label}</span>
    </label>
  )
}
