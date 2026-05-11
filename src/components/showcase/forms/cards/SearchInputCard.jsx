import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '../../../ui/Input'
import { ShowcaseComponentCard } from '../../ShowcaseComponentCard'

export function SearchInputCard({ title, description }) {
  const [placeholder, setPlaceholder] = useState('Search docs, endpoints, datasets...')
  const [disabled, setDisabled] = useState(false)

  const jsxCode = `<Input appearance="command" label="Search input" icon={Search} placeholder="${placeholder}"${disabled ? ' disabled state="disabled"' : ''} />`
  const fullExampleCode = `import { Search } from 'lucide-react'\nimport { Input } from './components/ui/Input'\n\nexport function SearchInputExample() {\n  return <Input appearance="command" label="Search input" icon={Search} placeholder="${placeholder}"${disabled ? ' disabled state="disabled"' : ''} />\n}`

  return (
    <ShowcaseComponentCard
      title={title}
      description={description}
      jsxCode={jsxCode}
      tailwindCode="border-[var(--border-strong)] bg-[var(--bg-1)] shadow-[var(--shadow-glow-blue)]"
      fullExampleCode={fullExampleCode}
      preview={<Input appearance="command" label="Search input" icon={Search} placeholder={placeholder} disabled={disabled} state={disabled ? 'disabled' : 'default'} />}
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
