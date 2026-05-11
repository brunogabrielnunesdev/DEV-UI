import { useState } from 'react'
import { Search } from 'lucide-react'
import { ShowcaseComponentCard } from '../../ShowcaseComponentCard'

export function CommandSearchCard({ title, description }) {
  const [placeholder, setPlaceholder] = useState('Command search')
  const [shortcut, setShortcut] = useState('cmd+k')

  const jsxCode = `<div className="rounded-[var(--radius-sm)] border border-[rgba(96,165,250,0.2)] bg-[var(--bg-1)] p-4 shadow-[var(--shadow-glow-blue)]">...</div>`
  const fullExampleCode = `import { Search } from 'lucide-react'\n\nexport function CommandSearchExample() {\n  return (\n    <div className="rounded-[var(--radius-sm)] border border-[rgba(96,165,250,0.2)] bg-[var(--bg-1)] p-4 shadow-[var(--shadow-glow-blue)]">\n      <div className="flex items-center gap-3 text-sm text-[var(--text-soft)]">\n        <Search className="h-4 w-4" />\n        ${placeholder}\n        <span className="ml-auto rounded border border-[var(--border-soft)] px-2 py-0.5 text-xs">${shortcut}</span>\n      </div>\n    </div>\n  )\n}`

  return (
    <ShowcaseComponentCard
      title={title}
      description={description}
      jsxCode={jsxCode}
      tailwindCode="rounded-[var(--radius-sm)] border border-[rgba(96,165,250,0.2)] bg-[var(--bg-1)] p-4 shadow-[var(--shadow-glow-blue)]"
      fullExampleCode={fullExampleCode}
      preview={
        <div className="rounded-[var(--radius-sm)] border border-[rgba(96,165,250,0.2)] bg-[var(--bg-1)] p-4 shadow-[var(--shadow-glow-blue)]">
          <div className="flex items-center gap-3 text-sm text-[var(--text-soft)]">
            <Search className="h-4 w-4" />
            {placeholder}
            <span className="ml-auto rounded border border-[var(--border-soft)] px-2 py-0.5 text-xs">{shortcut}</span>
          </div>
        </div>
      }
      controls={
        <>
          <label className="grid gap-2 text-sm text-[var(--text-soft)]">Label<input value={placeholder} onChange={(event) => setPlaceholder(event.target.value)} className="rounded-[12px] border border-[var(--border-soft)] bg-[var(--bg-2)] px-3 py-2 text-[var(--text-base)] outline-none" /></label>
          <label className="grid gap-2 text-sm text-[var(--text-soft)]">Shortcut<input value={shortcut} onChange={(event) => setShortcut(event.target.value)} className="rounded-[12px] border border-[var(--border-soft)] bg-[var(--bg-2)] px-3 py-2 text-[var(--text-base)] outline-none" /></label>
        </>
      }
    />
  )
}
