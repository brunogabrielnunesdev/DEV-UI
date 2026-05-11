import { useState } from 'react'
import { Input } from '../../../ui/Input'
import { ShowcaseComponentCard } from '../../ShowcaseComponentCard'

export function InputCard({ title, description }) {
  const [placeholder, setPlaceholder] = useState('Workspace name')
  const [type, setType] = useState('text')
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState(false)

  const jsxCode = `<Input appearance="default" label="Input" type="${type}" placeholder="${placeholder}"${disabled ? ' disabled state="disabled"' : ''}${error ? ' state="error" helper="Something needs attention."' : ''} />`
  const fullExampleCode = `import { Input } from './components/ui/Input'\n\nexport function InputExample() {\n  return (\n    <Input appearance="default" label="Input" type="${type}" placeholder="${placeholder}"${disabled ? ' disabled state="disabled"' : ''}${error ? ' state="error" helper="Something needs attention."' : ''} />\n  )\n}`

  return (
    <ShowcaseComponentCard
      title={title}
      description={description}
      jsxCode={jsxCode}
      tailwindCode="flex h-12 items-center gap-3 rounded-[var(--radius-sm)] border px-4 text-sm"
      fullExampleCode={fullExampleCode}
      preview={
        <Input
          appearance="default"
          label="Input"
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          state={disabled ? 'disabled' : error ? 'error' : 'default'}
          helper={error ? 'Something needs attention.' : 'Base field for forms.'}
        />
      }
      controls={
        <>
          <label className="grid gap-2 text-sm text-[var(--text-soft)]">
            Placeholder
            <input value={placeholder} onChange={(event) => setPlaceholder(event.target.value)} className="rounded-[12px] border border-[var(--border-soft)] bg-[var(--bg-2)] px-3 py-2 text-[var(--text-base)] outline-none" />
          </label>
          <label className="grid gap-2 text-sm text-[var(--text-soft)]">
            Type
            <select value={type} onChange={(event) => setType(event.target.value)} className="rounded-[12px] border border-[var(--border-soft)] bg-[var(--bg-2)] px-3 py-2 text-[var(--text-base)] outline-none">
              {['text', 'email', 'password'].map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
          <div className="flex gap-4 text-sm text-[var(--text-soft)]">
            <label className="flex items-center gap-2"><input type="checkbox" checked={disabled} onChange={(event) => setDisabled(event.target.checked)} /> Disabled</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={error} onChange={(event) => setError(event.target.checked)} /> Error</label>
          </div>
        </>
      }
    />
  )
}
