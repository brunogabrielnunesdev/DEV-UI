import { useState } from 'react'
import { ArrowRight, Download, Plus } from 'lucide-react'
import { Button } from '../../ui/Button'
import { ShowcaseComponentCard } from '../ShowcaseComponentCard'

const iconMap = {
  none: null,
  plus: Plus,
  arrow: ArrowRight,
  download: Download,
}

export function ButtonCard({ title, description }) {
  const [variant, setVariant] = useState('solid')
  const [size, setSize] = useState('md')
  const [tone, setTone] = useState('blue')
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [icon, setIcon] = useState('none')

  const SelectedIcon = iconMap[icon]
  const jsxCode = `<Button variant="${variant}" tone="${tone}" size="${size}"${disabled ? ' disabled' : ''}${loading ? ' loading' : ''}${SelectedIcon ? ` leftIcon={${SelectedIcon.name}}` : ''}>Ship release</Button>`
  const fullExampleCode = `import { ${SelectedIcon ? SelectedIcon.name : ''} } from 'lucide-react'\nimport { Button } from './components/ui/Button'\n\nexport function ButtonExample() {\n  return <Button variant="${variant}" tone="${tone}" size="${size}"${disabled ? ' disabled' : ''}${loading ? ' loading' : ''}${SelectedIcon ? ` leftIcon={${SelectedIcon.name}}` : ''}>Ship release</Button>\n}`

  return (
    <ShowcaseComponentCard
      title={title}
      description={description}
      jsxCode={jsxCode}
      tailwindCode="inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] border font-medium"
      fullExampleCode={fullExampleCode}
      preview={<Button variant={variant} tone={tone} size={size} disabled={disabled} loading={loading} leftIcon={SelectedIcon ?? undefined}>Ship release</Button>}
      controls={
        <>
          <div className="grid grid-cols-2 gap-3">
            <label className="grid gap-2 text-sm text-[var(--text-soft)]">Variant<select value={variant} onChange={(event) => setVariant(event.target.value)} className="rounded-[12px] border border-[var(--border-soft)] bg-[var(--bg-2)] px-3 py-2 text-[var(--text-base)] outline-none">{['solid', 'glass', 'outline', 'ghost', 'glow'].map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
            <label className="grid gap-2 text-sm text-[var(--text-soft)]">Size<select value={size} onChange={(event) => setSize(event.target.value)} className="rounded-[12px] border border-[var(--border-soft)] bg-[var(--bg-2)] px-3 py-2 text-[var(--text-base)] outline-none">{['sm', 'compact', 'md', 'lg', 'xl'].map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
            <label className="grid gap-2 text-sm text-[var(--text-soft)]">Tone<select value={tone} onChange={(event) => setTone(event.target.value)} className="rounded-[12px] border border-[var(--border-soft)] bg-[var(--bg-2)] px-3 py-2 text-[var(--text-base)] outline-none">{['white', 'blue', 'green', 'destructive'].map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
            <label className="grid gap-2 text-sm text-[var(--text-soft)]">Icon<select value={icon} onChange={(event) => setIcon(event.target.value)} className="rounded-[12px] border border-[var(--border-soft)] bg-[var(--bg-2)] px-3 py-2 text-[var(--text-base)] outline-none">{['none', 'plus', 'arrow', 'download'].map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
          </div>
          <div className="flex gap-4 text-sm text-[var(--text-soft)]">
            <label className="flex items-center gap-2"><input type="checkbox" checked={disabled} onChange={(event) => setDisabled(event.target.checked)} /> Disabled</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={loading} onChange={(event) => setLoading(event.target.checked)} /> Loading</label>
          </div>
        </>
      }
    />
  )
}
