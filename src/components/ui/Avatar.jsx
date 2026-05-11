import { cn } from '../../lib/cn'

const toneClasses = {
  grayscale: 'bg-[linear-gradient(180deg,#3f3f46,#18181b)] text-white',
  blue: 'bg-[linear-gradient(180deg,#60a5fa,#2563eb)] text-white',
  green: 'bg-[linear-gradient(180deg,#4ade80,#10b981)] text-white',
  violet: 'bg-[linear-gradient(180deg,#c084fc,#7c3aed)] text-white',
}

export function Avatar({
  initials = 'DA',
  size = 'md',
  tone = 'grayscale',
  status,
  className,
}) {
  const sizes = {
    sm: 'h-9 w-9 text-xs',
    md: 'h-11 w-11 text-sm',
    lg: 'h-14 w-14 text-base',
    xl: 'h-16 w-16 text-lg',
  }

  return (
    <div className="relative">
      <div
        className={cn(
          'flex items-center justify-center rounded-full border border-[var(--border-soft)] font-semibold tracking-[-0.03em] shadow-[var(--shadow-panel)]',
          sizes[size],
          toneClasses[tone],
          className,
        )}
      >
        {initials}
      </div>
      {status ? (
        <span
          className={cn(
            'absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[var(--bg-1)]',
            status === 'online' && 'bg-[#34d399]',
            status === 'busy' && 'bg-[#f87171]',
            status === 'idle' && 'bg-[#fbbf24]',
          )}
        />
      ) : null}
    </div>
  )
}
