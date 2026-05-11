import { useState } from 'react'
import { Select } from '../../../ui/Select'
import { ShowcaseComponentCard } from '../../ShowcaseComponentCard'

const optionSets = {
  plans: ['Enterprise', 'Growth', 'Startup'],
  regions: ['US East', 'Europe West', 'Sao Paulo'],
}

export function SelectCard({ title, description }) {
  const [setKey, setSetKey] = useState('plans')
  const [selected, setSelected] = useState(optionSets.plans[0])
  const [disabled, setDisabled] = useState(false)

  const options = optionSets[setKey]
  const jsxCode = `<Select label="Select" options={${JSON.stringify(options)}} value="${selected}"${disabled ? ' disabled' : ''} variant="secondary" />`
  const fullExampleCode = `import { useState } from 'react'\nimport { Select } from './components/ui/Select'\n\nexport function SelectExample() {\n  const [value, setValue] = useState('${selected}')\n  return <Select label="Select" options={${JSON.stringify(options)}} value={value} onChange={(event) => setValue(event.target.value)}${disabled ? ' disabled' : ''} variant="secondary" />\n}`

  return (
    <ShowcaseComponentCard
      title={title}
      description={description}
      jsxCode={jsxCode}
      tailwindCode="h-12 w-full appearance-none rounded-[var(--radius-sm)] border px-4 pr-10 text-sm"
      fullExampleCode={fullExampleCode}
      preview={<Select label="Select" options={options} value={selected} onChange={(event) => setSelected(event.target.value)} disabled={disabled} variant="secondary" />}
      controls={
        <>
          <label className="grid gap-2 text-sm text-[var(--text-soft)]">
            Options
            <select value={setKey} onChange={(event) => { const next = event.target.value; setSetKey(next); setSelected(optionSets[next][0]) }} className="rounded-[12px] border border-[var(--border-soft)] bg-[var(--bg-2)] px-3 py-2 text-[var(--text-base)] outline-none">
              <option value="plans">Plans</option>
              <option value="regions">Regions</option>
            </select>
          </label>
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
