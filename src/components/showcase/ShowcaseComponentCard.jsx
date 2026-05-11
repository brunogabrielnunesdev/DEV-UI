import { cn } from '../../lib/cn'
import { ShowcaseActions } from '../ui/ShowcaseActions'
import { Surface } from '../ui/Surface'

export function ShowcaseComponentCard({
  title,
  description,
  preview,
  controls,
  jsxCode,
  tailwindCode,
  fullExampleCode,
  className,
  previewClassName,
}) {
  return (
    <Surface variant="panel" className={cn('group relative overflow-hidden p-5', className)}>
      <div className="absolute right-4 top-4 opacity-100 md:opacity-0 md:transition-all md:duration-[var(--motion-base)] md:group-hover:opacity-100 md:group-focus-within:opacity-100">
        <ShowcaseActions
          jsxCode={jsxCode}
          tailwindCode={tailwindCode}
          fullExampleCode={fullExampleCode}
          previewLabel={title}
        />
      </div>

      <div className="pr-16">
        <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--text-strong)]">{title}</h3>
        {description ? <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{description}</p> : null}
      </div>

      <div className={cn('mt-5 rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.02)] p-4', previewClassName)}>
        {preview}
      </div>

      {controls ? (
        <div className="mt-4 rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.025)] p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">Controls</p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">Local state</p>
          </div>
          <div className="grid gap-3">
            {controls}
          </div>
        </div>
      ) : null}
    </Surface>
  )
}
