import { Surface } from '../ui/Surface'

export function DocsReferenceRow({ name, path, body }) {
  return (
    <Surface variant="subtle" className="flex items-start justify-between gap-4 p-4">
      <div>
        <p className="text-sm font-medium text-[var(--text-base)]">{name}</p>
        <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">{body}</p>
      </div>
      <div className="rounded-full border border-[var(--border-soft)] px-3 py-1.5 text-xs text-[var(--text-muted)]">
        {path}
      </div>
    </Surface>
  )
}

export function DocsStepCard({ index, title, body }) {
  return (
    <Surface variant="subtle" className="p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[rgba(255,255,255,0.04)] text-xs font-semibold text-[var(--text-base)]">
          {index}
        </div>
        <div>
          <p className="text-sm font-medium text-[var(--text-base)]">{title}</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{body}</p>
        </div>
      </div>
    </Surface>
  )
}

export function DocsLayoutCard({ icon: Icon, title, body }) {
  return (
    <Surface variant="subtle" className="p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.04)]">
          <Icon className="h-4 w-4 text-[var(--text-base)]" />
        </div>
        <p className="text-sm font-medium text-[var(--text-base)]">{title}</p>
      </div>
      <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">{body}</p>
    </Surface>
  )
}

export function DocsMiniMetric({ icon: Icon, title, value, body }) {
  return (
    <Surface variant="subtle" className="p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-[var(--text-soft)]">{title}</p>
        <Icon className="h-4 w-4 text-[var(--text-muted)]" />
      </div>
      <p className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">{value}</p>
      <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{body}</p>
    </Surface>
  )
}
