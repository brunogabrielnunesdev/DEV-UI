import { ChevronRight, Command, Dock, Menu, MoreHorizontal, Search, SquareStack, Waypoints } from 'lucide-react'
import { Button } from '../ui/Button'
import { ShowcaseActions } from '../ui/ShowcaseActions'
import { SectionHeader } from '../ui/SectionHeader'
import { Surface } from '../ui/Surface'

const styles = [
  'Minimal',
  'Glass',
  'Enterprise',
  'Floating',
  'Contrast',
  'Workspace launcher',
  'Quick actions dock',
  'Floating command menu',
]

export function NavigationShowcase() {
  return (
    <div className="space-y-8">
      <Surface variant="panel" className="p-6">
        <SectionHeader
          eyebrow="Navigation"
          title="Cinco estilos de navegacao dentro da mesma identidade"
          description="Navbar, sidebar, tabs, segmented control, dropdown, breadcrumbs, command menu e mobile nav como patterns coesos."
        />
        <div className="mt-5">
          <ShowcaseActions
            componentCode="<CommandNav />"
            jsxCode="<NavigationShowcase />"
            tailwindCode="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)]"
            previewLabel="Preview Navigation"
          />
        </div>
      </Surface>

      <div className="grid gap-6">
        {styles.map((style, index) => (
          <Surface key={style} variant={index % 2 === 0 ? 'panel' : 'glass'} className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{style}</h3>
              <div className="flex items-center gap-2">
                <ShowcaseActions
                  componentCode={`<${style.replace(/[^a-zA-Z]/g, '')}Nav />`}
                  jsxCode={`<NavigationPattern type="${style}" />`}
                  tailwindCode="rounded-[var(--radius-sm)] border border-[var(--border-soft)]"
                  previewLabel="Preview"
                />
                <Button variant="ghost" tone="white"><MoreHorizontal className="h-4 w-4" /></Button>
              </div>
            </div>
            {index < 5 ? (
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-3">
                    <div className="flex gap-4 text-sm">
                      <span className="text-[var(--text-strong)]">Overview</span>
                      <span className="text-[var(--text-muted)]">Analytics</span>
                      <span className="text-[var(--text-muted)]">Docs</span>
                    </div>
                    <Button variant="ghost" tone="white"><Command className="h-4 w-4" /></Button>
                  </div>
                  <div className="grid grid-cols-[160px_1fr] gap-4">
                    <div className="space-y-2 rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.02)] p-3">
                      {['Overview', 'Billing', 'Access', 'API'].map((item, itemIndex) => (
                        <div key={item} className={`rounded-[12px] px-3 py-2 text-sm ${itemIndex === 0 ? 'bg-[rgba(255,255,255,0.06)] text-[var(--text-strong)]' : 'text-[var(--text-soft)]'}`}>{item}</div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                        <span>Dashboard</span>
                        <ChevronRight className="h-4 w-4" />
                        <span>Navigation</span>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-[var(--text-base)]">{style}</span>
                      </div>
                      <div className="flex gap-2">
                        {['Overview', 'Agents', 'Schemas'].map((item, tabIndex) => (
                          <button key={item} className={`rounded-[12px] border px-4 py-2 text-sm ${tabIndex === 0 ? 'border-[var(--border-strong)] bg-[rgba(255,255,255,0.08)] text-[var(--text-strong)]' : 'border-[var(--border-soft)] text-[var(--text-soft)]'}`}>{item}</button>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {['Daily', 'Weekly', 'Monthly'].map((item, segmentIndex) => (
                          <button key={item} className={`rounded-full px-3 py-1.5 text-sm ${segmentIndex === 1 ? 'bg-white text-black' : 'bg-[rgba(255,255,255,0.04)] text-[var(--text-soft)]'}`}>{item}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm text-[var(--text-soft)]">
                    <span>Workspace actions</span>
                    <ChevronRight className="h-4 w-4 rotate-90" />
                  </div>
                  <div className="flex items-center justify-between rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[var(--bg-1)] px-4 py-3 shadow-[var(--shadow-glow-blue)]">
                    <div className="flex items-center gap-3 text-sm text-[var(--text-soft)]">
                      <Command className="h-4 w-4" />
                      Command menu
                    </div>
                    <span className="rounded border border-[var(--border-soft)] px-2 py-0.5 text-xs text-[var(--text-muted)]">cmd+k</span>
                  </div>
                  <div className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4">
                    <p className="text-sm text-[var(--text-base)]">Dropdown / profile</p>
                    <p className="mt-2 text-xs leading-6 text-[var(--text-muted)]">Hover previews, breadcrumbs and utility actions.</p>
                  </div>
                </div>
              </div>
            ) : (
              <NavigationExpansion type={style} />
            )}
          </Surface>
        ))}
      </div>
    </div>
  )
}

function NavigationExpansion({ type }) {
  if (type === 'Workspace launcher') {
    return (
      <div className="grid grid-cols-[340px_1fr] gap-6">
        <div className="rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
          <div className="mb-4 flex items-center gap-3">
            <SquareStack className="h-4 w-4 text-[var(--text-muted)]" />
            <p className="text-sm text-[var(--text-base)]">Workspace launcher</p>
          </div>
          <div className="space-y-3">
            {['Atlas AI', 'Foundry Ops', 'Finance Core', 'Infra Pulse'].map((item, index) => (
              <div key={item} className={`rounded-[14px] border px-4 py-3 text-sm ${index === 0 ? 'border-[var(--border-strong)] bg-[rgba(255,255,255,0.06)] text-[var(--text-strong)]' : 'border-[var(--border-soft)] text-[var(--text-soft)]'}`}>{item}</div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
            <p className="text-sm text-[var(--text-base)]">Recent activity widget</p>
            <div className="mt-4 space-y-2">
              {['Schema synced', 'Agent deployed', 'Member invited'].map((entry) => (
                <div key={entry} className="text-sm text-[var(--text-muted)]">{entry}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
            <p className="text-sm text-[var(--text-base)]">Environment selector</p>
            <div className="mt-4 flex gap-2">
              {['Prod', 'Stage', 'Dev'].map((env, index) => (
                <span key={env} className={`rounded-full px-3 py-1.5 text-xs ${index === 0 ? 'bg-white text-black' : 'bg-[rgba(255,255,255,0.04)] text-[var(--text-soft)]'}`}>{env}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'Quick actions dock') {
    return (
      <div className="space-y-5">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[var(--border-soft)] bg-black/70 px-4 py-3 shadow-[var(--shadow-float)]">
          {[Command, Search, Dock, Waypoints, Menu].map((Icon, index) => (
            <button key={index} className={`flex h-11 w-11 items-center justify-center rounded-full ${index === 2 ? 'bg-white text-black' : 'bg-[rgba(255,255,255,0.05)] text-[var(--text-soft)]'}`}>
              <Icon className="h-4 w-4" />
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {['Pinned tools', 'Quick actions', 'Keyboard helper'].map((entry) => (
            <div key={entry} className="rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
              <p className="text-sm text-[var(--text-base)]">{entry}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-[1fr_320px] gap-6">
      <div className="rounded-[var(--radius-lg)] border border-[rgba(96,165,250,0.18)] bg-[var(--bg-1)] p-5 shadow-[var(--shadow-glow-blue)]">
        <div className="mb-4 flex items-center gap-3 text-sm text-[var(--text-soft)]">
          <Command className="h-4 w-4" />
          Floating command menu
          <span className="ml-auto rounded border border-[var(--border-soft)] px-2 py-0.5 text-xs text-[var(--text-muted)]">cmd+k</span>
        </div>
        <div className="space-y-2">
          {['Open workspace launcher', 'Create deployment', 'Search logs', 'Invite teammate'].map((entry) => (
            <div key={entry} className="rounded-[14px] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm text-[var(--text-soft)]">
              {entry}
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
        <p className="text-sm text-[var(--text-base)]">Hover preview / search overlay</p>
        <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
          Search overlays, profile dropdowns, advanced tooltips and quick navigation helpers live alongside the command layer.
        </p>
      </div>
    </div>
  )
}
