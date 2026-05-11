import { CalendarDays, Search, SlidersHorizontal, Tag } from 'lucide-react'
import { Button } from './Button'
import { Input } from './Input'
import { ShowcaseActions } from './ShowcaseActions'
import { Textarea } from './Textarea'
import { SectionHeader } from './SectionHeader'
import { Surface } from './Surface'

const appearances = ['default', 'glass', 'elevated', 'command', 'underline']

export function FormsPage() {
  return (
    <div className="space-y-8">
      <Surface variant="panel" className="p-6">
        <SectionHeader
          eyebrow="Forms"
          title="Inputs e controles com mais contraste, mais identidade e mais legibilidade"
          description="Cinco aparencias base para campos, mais textarea, select, search, date, slider, switch, checkbox, radio, tag input e command search."
        />
        <div className="mt-5">
          <ShowcaseActions
            componentCode="<Input appearance='command' icon={Search} placeholder='Search docs' />"
            jsxCode="<FormsPage />"
            tailwindCode="border-[var(--border-strong)] bg-[var(--bg-1)] shadow-[var(--shadow-glow-blue)]"
            previewLabel="Preview Forms"
          />
        </div>
      </Surface>

      <div className="grid grid-cols-2 gap-6">
        <Surface variant="panel" className="p-6">
          <h3 className="text-lg font-semibold">Field styles</h3>
          <div className="mt-5 grid gap-4">
            {appearances.map((appearance) => (
              <Input
                key={appearance}
                appearance={appearance}
                label={appearance}
                icon={appearance === 'command' ? Search : undefined}
                placeholder="Enter workspace name"
                helper="Helper text with calm hierarchy."
              />
            ))}
            <Input appearance="default" label="Error" state="error" placeholder="Invalid token" helper="Something needs attention." />
            <Input appearance="default" label="Success" state="success" placeholder="Connected" helper="Everything looks healthy." />
            <Input appearance="default" label="Disabled" state="disabled" placeholder="Unavailable" disabled helper="Currently locked." />
          </div>
        </Surface>

        <Surface variant="glass" className="p-6">
          <h3 className="text-lg font-semibold">Extended controls</h3>
          <div className="mt-5 grid gap-4">
            <Textarea appearance="glass" label="Textarea" placeholder="Write a premium product note..." helper="Used for richer product content." />
            <Input appearance="elevated" label="Select" placeholder="Enterprise plan" helper="Select placeholder style." />
            <Input appearance="command" label="Search input" icon={Search} placeholder="Search docs, endpoints, datasets..." />
            <Input appearance="default" label="Date input" icon={CalendarDays} placeholder="2026-05-11" />
            <div className="grid gap-2">
              <span className="text-sm font-medium text-[var(--text-base)]">Slider</span>
              <input type="range" className="accent-[#3b82f6]" defaultValue={42} />
            </div>
            <div className="flex items-center justify-between rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-3">
              <span className="text-sm text-[var(--text-soft)]">Switch</span>
              <button className="relative h-7 w-12 rounded-full border border-[rgba(52,211,153,0.3)] bg-[rgba(16,185,129,0.16)]">
                <span className="absolute left-[22px] top-0.5 h-5.5 w-5.5 rounded-full bg-[var(--text-strong)]" />
              </button>
            </div>
            <div className="grid gap-3">
              <label className="flex items-center gap-3 text-sm text-[var(--text-soft)]"><input type="checkbox" defaultChecked /> Checkbox</label>
              <label className="flex items-center gap-3 text-sm text-[var(--text-soft)]"><input type="radio" defaultChecked name="plan" /> Radio</label>
            </div>
            <div className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-3">
              <div className="mb-3 flex items-center gap-2 text-sm text-[var(--text-soft)]"><Tag className="h-4 w-4" /> Tag input</div>
              <div className="flex flex-wrap gap-2">
                {['api', 'schema', 'analytics'].map((item) => (
                  <span key={item} className="rounded-full border border-[var(--border-base)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-xs text-[var(--text-base)]">{item}</span>
                ))}
              </div>
            </div>
            <div className="rounded-[var(--radius-sm)] border border-[rgba(96,165,250,0.2)] bg-[var(--bg-1)] p-4 shadow-[var(--shadow-glow-blue)]">
              <div className="flex items-center gap-3 text-sm text-[var(--text-soft)]">
                <Search className="h-4 w-4" />
                Command search
                <span className="ml-auto rounded border border-[var(--border-soft)] px-2 py-0.5 text-xs">cmd+k</span>
              </div>
            </div>
            <Button variant="solid" tone="blue" leftIcon={SlidersHorizontal}>Apply filters</Button>
          </div>
        </Surface>
      </div>
    </div>
  )
}
