import { useState } from 'react'
import { Checkbox } from '../../../ui/Checkbox'
import { ShowcaseComponentCard } from '../../ShowcaseComponentCard'

export function CheckboxCard({ title, description }) {
  const [checked, setChecked] = useState(true)
  const [disabled, setDisabled] = useState(false)

  const jsxCode = `<Checkbox label="Sync analytics to workspace" checked={${checked}} onCheckedChange={setChecked}${disabled ? ' disabled' : ''} variant="secondary" />`
  const fullExampleCode = `import { useState } from 'react'\nimport { Checkbox } from './components/ui/Checkbox'\n\nexport function CheckboxExample() {\n  const [checked, setChecked] = useState(${checked})\n  return <Checkbox label="Sync analytics to workspace" checked={checked} onCheckedChange={setChecked}${disabled ? ' disabled' : ''} variant="secondary" />\n}`

  return (
    <ShowcaseComponentCard
      title={title}
      description={description}
      jsxCode={jsxCode}
      tailwindCode="flex h-5 w-5 items-center justify-center rounded-md border"
      fullExampleCode={fullExampleCode}
      preview={<Checkbox label="Sync analytics to workspace" checked={checked} onCheckedChange={setChecked} disabled={disabled} variant="secondary" />}
      controls={
        <div className="flex gap-4 text-sm text-[var(--text-soft)]">
          <label className="flex items-center gap-2"><input type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)} /> Checked</label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={disabled} onChange={(event) => setDisabled(event.target.checked)} /> Disabled</label>
        </div>
      }
    />
  )
}
