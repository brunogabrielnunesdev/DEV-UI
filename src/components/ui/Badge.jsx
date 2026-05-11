import { cn } from '../../lib/cn'

export function Badge({ children, tone = 'default', className }) {
  const tones = {
    default: 'border-[var(--border-base)] bg-[rgba(255,255,255,0.04)] text-[var(--text-soft)]',
    blue: 'border-[rgba(96,165,250,0.22)] bg-[rgba(59,130,246,0.12)] text-[#dbeafe]',
    green: 'border-[rgba(52,211,153,0.22)] bg-[rgba(16,185,129,0.12)] text-[#d1fae5]',
    white: 'border-[var(--border-strong)] bg-white text-black',
  }

  return (
    <span className={cn('inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em]', tones[tone], className)}>
      {children}
    </span>
  )
}
