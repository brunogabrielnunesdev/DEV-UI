import { useState } from 'react'
import { ShowcaseComponentCard } from '../../ShowcaseComponentCard'

export function SliderCard({ title, description }) {
  const [value, setValue] = useState(42)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(100)
  const [step, setStep] = useState(1)
  const [disabled, setDisabled] = useState(false)

  const jsxCode = `<input type="range" min={${min}} max={${max}} step={${step}} value={${value}}${disabled ? ' disabled' : ''} className="accent-[#3b82f6]" />`
  const fullExampleCode = `import { useState } from 'react'\n\nexport function SliderExample() {\n  const [value, setValue] = useState(${value})\n\n  return (\n    <input type="range" min={${min}} max={${max}} step={${step}} value={value} onChange={(event) => setValue(Number(event.target.value))}${disabled ? ' disabled' : ''} className="accent-[#3b82f6]" />\n  )\n}`

  return (
    <ShowcaseComponentCard
      title={title}
      description={description}
      jsxCode={jsxCode}
      tailwindCode="accent-[#3b82f6]"
      fullExampleCode={fullExampleCode}
      preview={
        <div className="grid gap-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-[var(--text-base)]">Value</span>
            <span className="text-[var(--text-muted)]">{value}</span>
          </div>
          <input type="range" min={min} max={max} step={step} value={value} disabled={disabled} onChange={(event) => setValue(Number(event.target.value))} className="accent-[#3b82f6]" />
        </div>
      }
      controls={
        <>
          <div className="grid grid-cols-2 gap-3">
            <label className="grid gap-2 text-sm text-[var(--text-soft)]">Min<input type="number" value={min} onChange={(event) => setMin(Number(event.target.value))} className="rounded-[12px] border border-[var(--border-soft)] bg-[var(--bg-2)] px-3 py-2 text-[var(--text-base)] outline-none" /></label>
            <label className="grid gap-2 text-sm text-[var(--text-soft)]">Max<input type="number" value={max} onChange={(event) => setMax(Number(event.target.value))} className="rounded-[12px] border border-[var(--border-soft)] bg-[var(--bg-2)] px-3 py-2 text-[var(--text-base)] outline-none" /></label>
            <label className="grid gap-2 text-sm text-[var(--text-soft)]">Step<input type="number" value={step} onChange={(event) => setStep(Number(event.target.value) || 1)} className="rounded-[12px] border border-[var(--border-soft)] bg-[var(--bg-2)] px-3 py-2 text-[var(--text-base)] outline-none" /></label>
            <label className="grid gap-2 text-sm text-[var(--text-soft)]">Value<input type="number" value={value} onChange={(event) => setValue(Number(event.target.value))} className="rounded-[12px] border border-[var(--border-soft)] bg-[var(--bg-2)] px-3 py-2 text-[var(--text-base)] outline-none" /></label>
          </div>
          <label className="flex items-center gap-2 text-sm text-[var(--text-soft)]"><input type="checkbox" checked={disabled} onChange={(event) => setDisabled(event.target.checked)} /> Disabled</label>
        </>
      }
    />
  )
}
