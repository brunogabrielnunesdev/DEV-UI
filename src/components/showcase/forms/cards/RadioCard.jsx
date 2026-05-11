import { useState } from 'react'
import { ShowcaseComponentCard } from '../../ShowcaseComponentCard'

export function RadioCard({ title, description }) {
  const options = ['Starter', 'Growth', 'Enterprise']
  const [selected, setSelected] = useState('Growth')
  const [disabled, setDisabled] = useState(false)

  const jsxCode = `<input type="radio" name="plan-card" checked={selected === "${selected}"}${disabled ? ' disabled' : ''} />`
  const fullExampleCode = `import { useState } from 'react'\n\nexport function RadioExample() {\n  const [selected, setSelected] = useState('${selected}')\n  return (\n    <div className="grid gap-3">\n      {['Starter', 'Growth', 'Enterprise'].map((item) => (\n        <label key={item} className="flex items-center gap-3 text-sm text-[var(--text-soft)]">\n          <input type="radio" name="plan-card" checked={selected === item} onChange={() => setSelected(item)}${disabled ? ' disabled' : ''} />\n          {item}\n        </label>\n      ))}\n    </div>\n  )\n}`

  return (
    <ShowcaseComponentCard
      title={title}
      description={description}
      jsxCode={jsxCode}
      tailwindCode="flex items-center gap-3 text-sm"
      fullExampleCode={fullExampleCode}
      preview={
        <div className="grid gap-3">
          {options.map((item) => (
            <label key={item} className="flex items-center gap-3 text-sm text-[var(--text-soft)]">
              <input type="radio" name="plan-card-preview" checked={selected === item} disabled={disabled} onChange={() => setSelected(item)} />
              {item}
            </label>
          ))}
        </div>
      }
      controls={
        <>
          <label className="grid gap-2 text-sm text-[var(--text-soft)]">
            Selected
            <select value={selected} onChange={(event) => setSelected(event.target.value)} className="rounded-[12px] border border-[var(--border-soft)] bg-[var(--bg-2)] px-3 py-2 text-[var(--text-base)] outline-none">
              {options.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
          <label className="flex items-center gap-2 text-sm text-[var(--text-soft)]"><input type="checkbox" checked={disabled} onChange={(event) => setDisabled(event.target.checked)} /> Disabled</label>
        </>
      }
    />
  )
}
