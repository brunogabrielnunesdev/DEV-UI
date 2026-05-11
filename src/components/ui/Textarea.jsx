import { cn } from '../../lib/cn'
import { inputStyles } from '../../lib/recipes'

export function Textarea({ appearance = 'default', label, helper, className, ...props }) {
  return (
    <label className="grid gap-2">
      {label ? <span className="text-sm font-medium text-[var(--text-base)]">{label}</span> : null}
      <textarea
        className={cn(
          'min-h-28 rounded-[var(--radius-sm)] border px-4 py-3 text-sm leading-7 text-[var(--text-base)] outline-none transition-all duration-[var(--motion-base)] ease-[var(--ease-premium)] placeholder:text-[var(--text-muted)] focus:border-[rgba(96,165,250,0.34)] focus:shadow-[var(--shadow-focus)]',
          inputStyles[appearance],
          className,
        )}
        {...props}
      />
      {helper ? <span className="text-xs text-[var(--text-muted)]">{helper}</span> : null}
    </label>
  )
}
