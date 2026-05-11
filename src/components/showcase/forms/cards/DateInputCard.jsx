import { useState } from 'react'
import { CalendarDays } from 'lucide-react'
import { Input } from '../../../ui/Input'
import { ShowcaseComponentCard } from '../../ShowcaseComponentCard'

export function DateInputCard({ title, description }) {
  const [placeholder, setPlaceholder] = useState('2026-05-11')
  const [disabled, setDisabled] = useState(false)

  const jsxCode = `<Input appearance="default" label="Date input" icon={CalendarDays} placeholder="${placeholder}"${disabled ? ' disabled state="disabled"' : ''} />`
  const fullExampleCode = `import { CalendarDays } from 'lucide-react'\nimport { Input } from './components/ui/Input'\n\nexport function DateInputExample() {\n  return <Input appearance="default" label="Date input" icon={CalendarDays} placeholder="${placeholder}"${disabled ? ' disabled state="disabled"' : ''} />\n}`

  return (
    <ShowcaseComponentCard
      title={title}
      description={description}
      jsxCode={jsxCode}
      tailwindCode="flex h-12 items-center gap-3 rounded-[var(--radius-sm)] border px-4 text-sm"
      fullExampleCode={fullExampleCode}
      preview={<Input appearance="default" label="Date input" icon={CalendarDays} placeholder={placeholder} disabled={disabled} state={disabled ? 'disabled' : 'default'} />}
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
