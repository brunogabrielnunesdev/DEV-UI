import { Surface } from '../ui/Surface'
import { ShowcaseActions } from '../ui/ShowcaseActions'
import { DocsCodeBlock } from './DocsCodeBlock'
import { DocsInfoList } from './DocsInfoList'

export function DocsExampleCard({ eyebrow, title, description, preview, code, actions, steps }) {
  return (
    <Surface variant="glass" className="overflow-hidden p-0">
      <div className="border-b border-[var(--border-soft)] px-6 py-5">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">{eyebrow}</p>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">{title}</h3>
          <p className="max-w-3xl text-sm leading-7 text-[var(--text-soft)]">{description}</p>
          <ShowcaseActions previewLabel="Preview Component" {...actions} />
        </div>
      </div>
      <div className="grid grid-cols-[0.95fr_1.05fr]">
        <div className="border-r border-[var(--border-soft)] p-6">
          <div className="rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.02)] p-6">
            {preview}
          </div>
        </div>
        <div className="p-6">
          <DocsCodeBlock code={code} />
          <div className="mt-5 grid gap-2">
            {steps.map((step) => (
              <div key={step} className="rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm leading-6 text-[var(--text-soft)]">
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Surface>
  )
}

export function DocsLogicExampleCard({ eyebrow, title, description, preview, code, actions, propsList, logicList }) {
  return (
    <Surface variant="glass" className="overflow-hidden p-0">
      <div className="border-b border-[var(--border-soft)] px-6 py-5">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">{eyebrow}</p>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">{title}</h3>
          <p className="max-w-3xl text-sm leading-7 text-[var(--text-soft)]">{description}</p>
          <ShowcaseActions previewLabel="Preview Component" {...actions} />
        </div>
      </div>
      <div className="grid grid-cols-[0.9fr_1.1fr]">
        <div className="border-r border-[var(--border-soft)] p-6">
          <div className="rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.02)] p-6">
            {preview}
          </div>
        </div>
        <div className="p-6">
          <DocsCodeBlock code={code} />
          <div className="mt-5 grid gap-4">
            <DocsInfoList title="Props importantes" items={propsList} />
            <DocsInfoList title="Como a logica funciona" items={logicList} />
          </div>
        </div>
      </div>
    </Surface>
  )
}

export function DocsCodePanel({ title, description, code, actions }) {
  return (
    <Surface variant="subtle" className="p-5">
      <div className="space-y-3">
        <p className="text-sm font-medium text-[var(--text-base)]">{title}</p>
        <p className="text-sm leading-7 text-[var(--text-soft)]">{description}</p>
        <ShowcaseActions {...actions} />
        <DocsCodeBlock code={code} />
      </div>
    </Surface>
  )
}
