import { useState } from 'react'
import { Switch } from '../../../ui/Switch'
import { ShowcaseComponentCard } from '../../ShowcaseComponentCard'

export function SwitchCard({ title, description }) {
  const [checked, setChecked] = useState(true)
  const [disabled, setDisabled] = useState(false)

  const jsxCode = `<Switch label="Enable deploy notifications" checked={${checked}} onCheckedChange={setChecked}${disabled ? ' disabled' : ''} variant="secondary" />`
  const fullExampleCode = `import { useState } from 'react'\nimport { Switch } from './components/ui/Switch'\n\nexport function SwitchExample() {\n  const [checked, setChecked] = useState(${checked})\n  return <Switch label="Enable deploy notifications" checked={checked} onCheckedChange={setChecked}${disabled ? ' disabled' : ''} variant="secondary" />\n}`

  return (
    <ShowcaseComponentCard
      title={title}
      description={description}
      jsxCode={jsxCode}
      tailwindCode="relative h-7 w-12 rounded-full border transition-all duration-[var(--motion-fast)]"
      fullExampleCode={fullExampleCode}
      preview={<Switch label="Enable deploy notifications" checked={checked} onCheckedChange={setChecked} disabled={disabled} variant="secondary" />}
      controls={
        <div className="flex gap-4 text-sm text-[var(--text-soft)]">
          <label className="flex items-center gap-2"><input type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)} /> Checked</label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={disabled} onChange={(event) => setDisabled(event.target.checked)} /> Disabled</label>
        </div>
      }
    />
  )
}
