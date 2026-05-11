import { useState } from 'react'
import { Check, Copy, Eye, FileJson2, LayoutTemplate, TerminalSquare, Wind } from 'lucide-react'
import { Button } from './Button'

async function writeToClipboard(text) {
  if (!text || typeof navigator === 'undefined' || !navigator.clipboard?.writeText) {
    return false
  }

  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

export function ShowcaseActions({
  componentCode = '<Component />',
  jsxCode = '<Component />',
  tailwindCode = 'rounded-2xl border border-white/10 bg-white/5',
  jsonCode,
  sqlCode,
  requestCode,
  responseCode,
  commandCode,
  previewLabel = 'Preview',
}) {
  const [copied, setCopied] = useState('')

  async function handleCopy(type, value) {
    const success = await writeToClipboard(value)
    if (!success) {
      return
    }

    setCopied(type)
    window.setTimeout(() => setCopied(''), 1200)
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="ghost" tone="white" size="compact" leftIcon={Copy} onClick={() => handleCopy('component', componentCode)}>
        {copied === 'component' ? 'Copied' : 'Copy Component'}
      </Button>
      <Button variant="ghost" tone="white" size="compact" leftIcon={LayoutTemplate} onClick={() => handleCopy('jsx', jsxCode)}>
        {copied === 'jsx' ? 'Copied' : 'Copy JSX'}
      </Button>
      <Button variant="ghost" tone="white" size="compact" leftIcon={Wind} onClick={() => handleCopy('tailwind', tailwindCode)}>
        {copied === 'tailwind' ? 'Copied' : 'Copy Tailwind'}
      </Button>
      {jsonCode ? (
        <Button
          variant={copied === 'json' ? 'glow' : 'ghost'}
          tone={copied === 'json' ? 'green' : 'white'}
          size="compact"
          leftIcon={copied === 'json' ? Check : FileJson2}
          onClick={() => handleCopy('json', jsonCode)}
        >
          {copied === 'json' ? 'Copied JSON' : 'Copy JSON'}
        </Button>
      ) : null}
      {sqlCode ? (
        <Button
          variant={copied === 'sql' ? 'glow' : 'ghost'}
          tone={copied === 'sql' ? 'green' : 'white'}
          size="compact"
          leftIcon={copied === 'sql' ? Check : LayoutTemplate}
          onClick={() => handleCopy('sql', sqlCode)}
        >
          {copied === 'sql' ? 'Copied SQL' : 'Copy SQL'}
        </Button>
      ) : null}
      {requestCode ? (
        <Button
          variant={copied === 'request' ? 'glow' : 'ghost'}
          tone={copied === 'request' ? 'green' : 'white'}
          size="compact"
          leftIcon={copied === 'request' ? Check : TerminalSquare}
          onClick={() => handleCopy('request', requestCode)}
        >
          {copied === 'request' ? 'Copied Request' : 'Copy Request'}
        </Button>
      ) : null}
      {responseCode ? (
        <Button
          variant={copied === 'response' ? 'glow' : 'ghost'}
          tone={copied === 'response' ? 'green' : 'white'}
          size="compact"
          leftIcon={copied === 'response' ? Check : FileJson2}
          onClick={() => handleCopy('response', responseCode)}
        >
          {copied === 'response' ? 'Copied Response' : 'Copy Response'}
        </Button>
      ) : null}
      {commandCode ? (
        <Button
          variant={copied === 'command' ? 'glow' : 'ghost'}
          tone={copied === 'command' ? 'green' : 'white'}
          size="compact"
          leftIcon={copied === 'command' ? Check : TerminalSquare}
          onClick={() => handleCopy('command', commandCode)}
        >
          {copied === 'command' ? 'Copied Command' : 'Copy Command'}
        </Button>
      ) : null}
      <Button variant="outline" tone="blue" size="compact" leftIcon={Eye}>
        {previewLabel}
      </Button>
    </div>
  )
}
