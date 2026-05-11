import {
  Command,
  Dock,
  FolderTree,
  LayoutDashboard,
  LayoutPanelLeft,
  LayoutPanelTop,
  MonitorSmartphone,
  PanelLeftClose,
  PanelRightClose,
  Search,
  Sidebar,
  Sparkles,
  SquareDashedMousePointer,
  TerminalSquare,
  Waypoints,
} from 'lucide-react'
import { Avatar } from '../ui/Avatar'
import { Button } from '../ui/Button'
import { ShowcaseActions } from '../ui/ShowcaseActions'
import { SectionHeader } from '../ui/SectionHeader'
import { Surface } from '../ui/Surface'

const sidebarVariants = [
  'Compact sidebar',
  'Expandable sidebar',
  'Nested sidebar',
  'IDE sidebar',
  'Monitoring sidebar',
  'Finance sidebar',
  'AI workspace sidebar',
  'Devtools sidebar',
  'Analytics sidebar',
  'Glass sidebar',
  'Floating sidebar',
]

export function StructuralLayoutsShowcase() {
  return (
    <div className="space-y-8">
      <Surface variant="panel" className="p-6">
        <SectionHeader
          eyebrow="Layouts"
          title="Structural layouts, shells, sidebars and topbars for future SaaS systems"
          description="Sticky navbars, floating navbars, app shells, command topbars, IDE shells, side panels, dock layouts, resizable layouts and multi-column workspace structure."
        />
        <div className="mt-5">
          <ShowcaseActions
            componentCode="<WorkspaceShell />"
            jsxCode="<StructuralLayoutsShowcase />"
            tailwindCode="grid min-h-[560px] rounded-[var(--radius-lg)] border border-[var(--border-soft)]"
            previewLabel="Preview Layouts"
          />
        </div>
      </Surface>

      <div className="grid grid-cols-[1fr_0.92fr] gap-6">
        <Surface variant="glass" className="overflow-hidden p-0">
          <div className="border-b border-[var(--border-soft)] px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">Topbars and app shells</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">Sticky, floating, workspace, command and mobile-inspired top-level navigation surfaces.</p>
              </div>
              <ShowcaseActions
                componentCode="<CommandTopbar />"
                jsxCode="<TopbarVariants />"
                tailwindCode="sticky top-0 z-20 border-b border-[var(--border-soft)] bg-black/70 backdrop-blur-xl"
                previewLabel="Preview Topbars"
              />
            </div>
          </div>
          <div className="p-6 space-y-5">
            <TopbarVariant title="Sticky navbar" icon={LayoutPanelTop} />
            <TopbarVariant title="Floating navbar" icon={Sparkles} floating />
            <TopbarVariant title="Workspace topbar" icon={LayoutDashboard} workspace />
            <TopbarVariant title="Command topbar" icon={Command} command />
            <TopbarVariant title="Mobile navbar" icon={MonitorSmartphone} mobile />
          </div>
        </Surface>

        <Surface variant="panel" className="p-6">
          <div className="mb-5 flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">Shell layouts and panels</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">IDE shell, dashboard shell, split layout, resizable panels, dock layout, floating panels and command overlays.</p>
            </div>
            <ShowcaseActions
              componentCode="<IdeShellLayout />"
              jsxCode="<ShellPatterns />"
              tailwindCode="grid grid-cols-[220px_1fr_320px] bg-[var(--bg-1)]"
              previewLabel="Preview Shells"
            />
          </div>

          <div className="grid gap-4">
            <ShellPattern title="IDE shell layout" left="Explorer" center="Editor preview" right="Terminal / logs" dark />
            <ShellPattern title="Dashboard shell" left="Primary nav" center="Metrics + content" right="Activity / actions" />
            <ShellPattern title="Resizable split layout" left="Table / board" center="Details panel" right="Inspector" />
            <ShellPattern title="Dock layout" left="Tools dock" center="Main canvas" right="Quick command tray" />
            <ShellPattern title="Command overlay" left="Search" center="Actions list" right="Shortcut hints" />
          </div>
        </Surface>
      </div>

      <Surface variant="panel" className="p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">Sidebar system expansion</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
              Sidebars with grouped sections, pinned tools, recent projects, favorites, workspace switchers, quick actions, collapse states and shortcut hints.
            </p>
          </div>
          <ShowcaseActions
            componentCode="<MonitoringSidebar />"
            jsxCode="<SidebarVariants />"
            tailwindCode="grid grid-cols-3 gap-4 rounded-[var(--radius-md)]"
            previewLabel="Preview Sidebars"
          />
        </div>

        <div className="grid grid-cols-3 gap-6">
          {sidebarVariants.map((title, index) => (
            <SidebarVariant key={title} title={title} index={index} />
          ))}
        </div>
      </Surface>

      <div className="grid grid-cols-[1fr_0.9fr] gap-6">
        <Surface variant="glass" className="p-6">
          <div className="mb-5 flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">Command, search and quick actions</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">Spotlight search, floating command bar, quick actions dock, pinned tools and keyboard shortcut helpers.</p>
            </div>
            <ShowcaseActions
              componentCode="<FloatingCommandBar />"
              jsxCode="<CommandSurfaces />"
              tailwindCode="rounded-full border border-[var(--border-soft)] bg-black/75 px-4 py-3"
              previewLabel="Preview Command"
            />
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-black/75 px-4 py-3 shadow-[var(--shadow-float)]">
              <Search className="h-4 w-4 text-[var(--text-muted)]" />
              <span className="text-sm text-[var(--text-soft)]">Spotlight search across workspaces, logs and docs...</span>
              <span className="ml-auto rounded border border-[var(--border-soft)] px-2 py-0.5 text-xs text-[var(--text-muted)]">cmd+k</span>
            </div>
            <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[var(--border-soft)] bg-black/70 px-4 py-3 shadow-[var(--shadow-float)]">
              {[Command, SquareDashedMousePointer, Dock, TerminalSquare, Waypoints].map((Icon, index) => (
                <button key={index} className={`flex h-11 w-11 items-center justify-center rounded-full ${index === 1 ? 'bg-white text-black' : 'bg-[rgba(255,255,255,0.05)] text-[var(--text-soft)]'}`}>
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {['Keyboard shortcut helper', 'Pinned tools', 'Quick actions dock'].map((item) => (
                <div key={item} className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4 text-sm text-[var(--text-soft)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Surface>

        <Surface variant="panel" className="p-6">
          <div className="mb-5 flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">Realtime activity and structural widgets</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">Activity feed, notifications, recent projects panel, onboarding widgets, welcome panels and AI helper modules.</p>
            </div>
            <ShowcaseActions
              componentCode="<RecentProjectsPanel />"
              jsxCode="<ActivityWidgets />"
              tailwindCode="grid gap-4 rounded-[var(--radius-md)] border border-[var(--border-soft)]"
              previewLabel="Preview Activity"
            />
          </div>

          <div className="grid gap-4">
            <div className="grid grid-cols-[1fr_0.92fr] gap-4">
              <WidgetCard title="Recent projects panel" icon={FolderTree} body="Atlas AI, Foundry Ops, Finance Core and Cloud Infra." />
              <WidgetCard title="AI assistant widget" icon={Sparkles} body="Prompt suggestions, rollout actions and command follow-ups." />
            </div>
            <div className="grid grid-cols-[0.9fr_1.1fr] gap-4">
              <WidgetCard title="Welcome / onboarding panel" icon={LayoutPanelLeft} body="Setup flows, environment wizard and account completion." />
              <WidgetCard title="Realtime metric cards" icon={PanelRightClose} body="Usage, health, latency and deployment state widgets." />
            </div>
            <Surface variant="subtle" className="p-5">
              <p className="text-sm font-medium text-[var(--text-base)]">Activity feed</p>
              <div className="mt-4 space-y-3">
                {[
                  ['Deployment completed', '2m ago'],
                  ['Workspace created', '8m ago'],
                  ['API limit updated', '14m ago'],
                ].map(([title, time]) => (
                  <div key={title} className="flex items-center gap-3">
                    <Avatar initials={title.charAt(0)} size="sm" tone="grayscale" />
                    <div>
                      <p className="text-sm text-[var(--text-base)]">{title}</p>
                      <p className="text-xs text-[var(--text-muted)]">{time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Surface>
          </div>
        </Surface>
      </div>
    </div>
  )
}

function TopbarVariant({ title, icon: Icon, floating, workspace, command, mobile }) {
  return (
    <div className={`rounded-[var(--radius-md)] border border-[var(--border-soft)] px-4 py-3 ${floating ? 'bg-black/70 shadow-[var(--shadow-float)]' : 'bg-[rgba(255,255,255,0.03)]'}`}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Icon className="h-4 w-4 text-[var(--text-muted)]" />
          <span className="text-sm text-[var(--text-base)]">{title}</span>
        </div>
        <div className="flex items-center gap-3">
          {workspace ? <span className="rounded-full bg-[rgba(255,255,255,0.05)] px-3 py-1 text-xs text-[var(--text-soft)]">Atlas AI</span> : null}
          {command ? <span className="rounded border border-[var(--border-soft)] px-2 py-0.5 text-xs text-[var(--text-muted)]">cmd+k</span> : null}
          {mobile ? <MonitorSmartphone className="h-4 w-4 text-[var(--text-muted)]" /> : <Avatar initials="OS" size="sm" tone="blue" />}
        </div>
      </div>
    </div>
  )
}

function ShellPattern({ title, left, center, right, dark }) {
  return (
    <div className={`grid grid-cols-[180px_1fr_220px] overflow-hidden rounded-[var(--radius-md)] border border-[var(--border-soft)] ${dark ? 'bg-[var(--bg-1)]' : 'bg-[rgba(255,255,255,0.03)]'}`}>
      <div className="border-r border-[var(--border-soft)] p-4 text-sm text-[var(--text-soft)]">{left}</div>
      <div className="border-r border-[var(--border-soft)] p-4 text-sm text-[var(--text-base)]">{center}</div>
      <div className="p-4 text-sm text-[var(--text-muted)]">{right}</div>
      <div className="col-span-3 border-t border-[var(--border-soft)] px-4 py-3 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">{title}</div>
    </div>
  )
}

function SidebarVariant({ title, index }) {
  const accent =
    index === 3
      ? 'bg-[var(--bg-1)]'
      : index === 9
        ? 'bg-[rgba(255,255,255,0.04)] backdrop-blur-xl'
        : 'bg-[rgba(255,255,255,0.03)]'

  return (
    <div className={`rounded-[var(--radius-md)] border border-[var(--border-soft)] p-4 ${accent}`}>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-medium text-[var(--text-base)]">{title}</p>
        <Sidebar className="h-4 w-4 text-[var(--text-muted)]" />
      </div>
      <div className="space-y-2">
        {['Overview', 'Signals', 'Projects', 'Favorites'].map((item, itemIndex) => (
          <div key={item} className={`rounded-[12px] px-3 py-2 text-sm ${itemIndex === 0 ? 'bg-[rgba(255,255,255,0.06)] text-[var(--text-strong)]' : 'text-[var(--text-soft)]'}`}>{item}</div>
        ))}
      </div>
      <div className="mt-4 border-t border-[var(--border-soft)] pt-3">
        <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
          <span>Pinned tools</span>
          <span>cmd+1</span>
        </div>
        <div className="mt-3 grid gap-2">
          {['Schema', 'Logs', 'Deploy'].map((tool) => (
            <div key={tool} className="rounded-[12px] bg-[rgba(255,255,255,0.04)] px-3 py-2 text-xs text-[var(--text-soft)]">{tool}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

function WidgetCard({ title, icon: Icon, body }) {
  return (
    <Surface variant="glass" className="p-5">
      <div className="flex items-center gap-3">
        <Icon className="h-4 w-4 text-[var(--text-muted)]" />
        <p className="text-sm font-medium text-[var(--text-base)]">{title}</p>
      </div>
      <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{body}</p>
    </Surface>
  )
}
