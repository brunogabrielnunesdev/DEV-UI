import { useState } from 'react'
import { Textarea } from '../../../ui/Textarea'
import { ShowcaseComponentCard } from '../../ShowcaseComponentCard'

export function TextareaCard({ title, description }) {
  const [placeholder, setPlaceholder] = useState('Write a premium product note...')
  const [disabled, setDisabled] = useState(false)

  const jsxCode = `<Textarea appearance="glass" label="Textarea" placeholder="${placeholder}"${disabled ? ' disabled' : ''} helper="Use for multi-line content." />`
  const fullExampleCode = `import { Textarea } from './components/ui/Textarea'\n\nexport function TextareaExample() {\n  return <Textarea appearance="glass" label="Textarea" placeholder="${placeholder}"${disabled ? ' disabled' : ''} helper="Use for multi-line content." />\n}`

  return (
    <ShowcaseComponentCard
      title={title}
      description={description}
      jsxCode={jsxCode}
      tailwindCode="min-h-28 rounded-[var(--radius-sm)] border px-4 py-3"
      fullExampleCode={fullExampleCode}
      preview={<Textarea appearance="glass" label="Textarea" placeholder={placeholder} disabled={disabled} helper="Use for multi-line content." />}
      controls={
        <>
          <label className="grid gap-2 text-sm text-[var(--text-soft)]">
            Placeholder
            <input value={placeholder} onChange={(event) => setPlaceholder(event.target.value)} className="rounded-[12px] border border-[var(--border-soft)] bg-[var(--bg-2)] px-3 py-2 text-[var(--text-base)] outline-none" />
          </label>
          <label className="flex items-center gap-2 text-sm text-[var(--text-soft)]"><input type="checkbox" checked={disabled} onChange={(event) => setDisabled(event.target.checked)} /> Disabled</label>
        </>
      }
    />
  )
}
