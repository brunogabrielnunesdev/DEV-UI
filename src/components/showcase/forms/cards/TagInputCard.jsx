import { useState } from 'react'
import { Tag } from 'lucide-react'
import { Button } from '../../../ui/Button'
import { ShowcaseComponentCard } from '../../ShowcaseComponentCard'

export function TagInputCard({ title, description }) {
  const [tags, setTags] = useState(['api', 'schema', 'analytics'])
  const [draft, setDraft] = useState('logs')

  function addTag() {
    if (!draft.trim()) {
      return
    }
    setTags((current) => [...current, draft.trim()])
    setDraft('')
  }

  const jsxCode = `<span className="rounded-full border border-[var(--border-base)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-xs text-[var(--text-base)]">${tags[0] ?? 'tag'}</span>`
  const fullExampleCode = `import { useState } from 'react'\nimport { Tag } from 'lucide-react'\n\nexport function TagInputExample() {\n  const [tags, setTags] = useState(${JSON.stringify(tags)})\n  return (\n    <div className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-3">\n      <div className="mb-3 flex items-center gap-2 text-sm text-[var(--text-soft)]">\n        <Tag className="h-4 w-4" />\n        Tag input\n      </div>\n      <div className="flex flex-wrap gap-2">\n        {tags.map((item) => (\n          <span key={item} className="rounded-full border border-[var(--border-base)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-xs text-[var(--text-base)]">{item}</span>\n        ))}\n      </div>\n    </div>\n  )\n}`

  return (
    <ShowcaseComponentCard
      title={title}
      description={description}
      jsxCode={jsxCode}
      tailwindCode="rounded-full border border-[var(--border-base)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-xs"
      fullExampleCode={fullExampleCode}
      preview={
        <div className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-3">
          <div className="mb-3 flex items-center gap-2 text-sm text-[var(--text-soft)]">
            <Tag className="h-4 w-4" />
            Tag input
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((item) => (
              <span key={item} className="rounded-full border border-[var(--border-base)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-xs text-[var(--text-base)]">{item}</span>
            ))}
          </div>
        </div>
      }
      controls={
        <>
          <label className="grid gap-2 text-sm text-[var(--text-soft)]">
            Next tag
            <input value={draft} onChange={(event) => setDraft(event.target.value)} className="rounded-[12px] border border-[var(--border-soft)] bg-[var(--bg-2)] px-3 py-2 text-[var(--text-base)] outline-none" />
          </label>
          <Button variant="outline" tone="white" size="compact" onClick={addTag}>Add tag</Button>
        </>
      }
    />
  )
}
