import { cn } from '../../lib/cn'
import { Surface } from '../ui/Surface'
import { ShowcaseActions } from '../ui/ShowcaseActions'

export function ShowcaseContainer({
  title,
  description,
  snippet = '<Component />',
  className,
  contentClassName,
  children,
  actions,
  fullExampleCode,
}) {
  return (
    <Surface variant="panel" className={cn('group relative overflow-hidden p-6', className)}>
      <div className="absolute right-4 top-4 opacity-100 md:opacity-0 md:transition-all md:duration-[var(--motion-base)] md:group-hover:opacity-100 md:group-focus-within:opacity-100">
        <ShowcaseActions
          componentCode={snippet}
          jsxCode={snippet}
          tailwindCode={snippet}
          fullExampleCode={fullExampleCode ?? snippet}
          previewLabel={title ?? 'Component preview'}
        />
      </div>

      {(title || description) ? (
        <div className="mb-5 pr-28">
          {title ? <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--text-strong)]">{title}</h3> : null}
          {description ? <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{description}</p> : null}
        </div>
      ) : null}

      <div className={cn('grid gap-4', contentClassName)}>
        {children}
      </div>

      {actions ? <div className="mt-5">{actions}</div> : null}
    </Surface>
  )
}
