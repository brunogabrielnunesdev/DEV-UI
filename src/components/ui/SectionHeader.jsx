export function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="space-y-3">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.32em] text-[var(--text-muted)]">{eyebrow}</p> : null}
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">{title}</h2>
        <p className="max-w-3xl text-sm leading-7 text-[var(--text-soft)]">{description}</p>
      </div>
    </div>
  )
}
