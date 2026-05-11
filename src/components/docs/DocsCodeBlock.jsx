import { Braces } from 'lucide-react'

export function DocsCodeBlock({ code }) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[var(--bg-1)]">
      <div className="flex items-center justify-between border-b border-[var(--border-soft)] px-4 py-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
          <Braces className="h-4 w-4" />
          JSX example
        </div>
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        </div>
      </div>
      <div className="overflow-x-auto px-4 py-4 font-mono text-[13px] leading-7">
        {code.split('\n').map((line, index) => (
          <div key={`${line}-${index}`} className="flex gap-4">
            <span className="w-6 text-right text-[rgba(255,255,255,0.24)]">{index + 1}</span>
            <span>{highlightLine(line)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function highlightLine(line) {
  const stringRegex = /(".*?"|'.*?'|`.*?`)/g
  const parts = line.split(stringRegex).filter(Boolean)

  return parts.map((part, index) => {
    if (stringRegex.test(part)) {
      stringRegex.lastIndex = 0
      return (
        <span key={`${part}-${index}`} className="text-[#4ade80]">
          {part}
        </span>
      )
    }

    const tokens = part.split(/\b(import|from|return|const|function|export|default|true|false|null)\b/).filter(Boolean)

    return tokens.map((token, tokenIndex) => {
      if (/^(import|from|return|const|function|export|default|true|false|null)$/.test(token)) {
        return (
          <span key={`${token}-${tokenIndex}`} className="text-[#60a5fa]">
            {token}
          </span>
        )
      }

      if (/[<>/]/.test(token)) {
        return (
          <span key={`${token}-${tokenIndex}`} className="text-[#c084fc]">
            {token}
          </span>
        )
      }

      return (
        <span key={`${token}-${tokenIndex}`} className="text-[#e4e4e7]">
          {token}
        </span>
      )
    })
  })
}
