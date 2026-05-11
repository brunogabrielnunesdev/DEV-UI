import { cn } from '../../lib/cn'
import { getRecipe } from '../../lib/recipes'

export function Select({
  label,
  options = [],
  defaultValue,
  value,
  placeholder = 'Select an option',
  disabled = false,
  onChange,
  variant = 'secondary',
}) {
  const recipe = getRecipe(variant)
  const currentValue = value ?? defaultValue ?? options[0] ?? placeholder

  return (
    <label className="grid gap-2">
      {label ? <span className="text-sm font-medium text-[var(--color-text-strong)]">{label}</span> : null}
      <div className="relative">
        <select
          value={currentValue}
          disabled={disabled}
          onChange={onChange}
          className={cn(
            'h-12 w-full appearance-none rounded-[var(--radius-sm)] border px-4 pr-10 text-sm transition-all duration-[var(--motion-base)] ease-[var(--ease-premium)] focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)] disabled:cursor-not-allowed disabled:opacity-50',
            recipe.input,
          )}
        >
          {!options.includes(placeholder) ? <option value={placeholder}>{placeholder}</option> : null}
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
          ⌄
        </span>
      </div>
    </label>
  )
}
