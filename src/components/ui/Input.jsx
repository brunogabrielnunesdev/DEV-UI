import { cn } from '../../lib/cn'
import { inputStyles } from '../../lib/recipes'

export function Input({
  appearance = 'default',
  label,
  helper,
  state = 'default',
  icon: Icon,
  className,
  ...props
}) {
  const stateClass = {
    default: 'border-[var(--border-base)]',
    error: 'border-[rgba(248,113,113,0.35)] shadow-[0_0_0_1px_rgba(248,113,113,0.15)]',
    success: 'border-[rgba(52,211,153,0.35)] shadow-[0_0_0_1px_rgba(52,211,153,0.15)]',
    disabled: 'opacity-50',
  }

  return (
    <label className="grid gap-2">
      {label ? <span className="text-sm font-medium text-[var(--text-base)]">{label}</span> : null}
      <div
        className={cn(
          'flex h-12 items-center gap-3 rounded-[var(--radius-sm)] border px-4 text-sm text-[var(--text-base)] transition-all duration-[var(--motion-base)] ease-[var(--ease-premium)] focus-within:border-[rgba(96,165,250,0.34)] focus-within:shadow-[var(--shadow-focus)]',
          inputStyles[appearance],
          stateClass[state],
          className,
        )}
      >
        {Icon ? <Icon className="h-4 w-4 text-[var(--text-muted)]" /> : null}
        <input className="w-full bg-transparent outline-none placeholder:text-[var(--text-muted)]" {...props} />
      </div>
      {helper ? <span className="text-xs text-[var(--text-muted)]">{helper}</span> : null}
    </label>
  )
}
