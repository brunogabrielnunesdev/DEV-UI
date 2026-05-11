import {
  BellRing,
  BriefcaseBusiness,
  CreditCard,
  KeyRound,
  Laptop,
  LayoutPanelTop,
  LockKeyhole,
  PlugZap,
  Settings2,
  ShieldCheck,
  Sparkles,
  UserRound,
  Users,
  Waypoints,
} from 'lucide-react'
import { Avatar } from '../ui/Avatar'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { ShowcaseActions } from '../ui/ShowcaseActions'
import { SectionHeader } from '../ui/SectionHeader'
import { Surface } from '../ui/Surface'

const settingsNav = [
  'Account overview',
  'Security',
  'Notifications',
  'Appearance',
  'Billing',
  'Connected accounts',
  'Sessions & devices',
  'API keys',
  'Developer settings',
  'Workspace settings',
  'Organization settings',
  'Team management',
]

const dropdownStyles = [
  'Minimal dropdown',
  'Glass dropdown',
  'IDE dropdown',
  'Enterprise dropdown',
  'Compact dropdown',
  'Floating dropdown',
  'Command-menu dropdown',
]

export function AccountSystemShowcase() {
  return (
    <div className="space-y-8">
      <Surface variant="panel" className="p-6">
        <SectionHeader
          eyebrow="Profile / Account"
          title="User, workspace, organization and settings surfaces for real SaaS products"
          description="Profile pages, settings shells, account switchers, workspace switchers, dropdowns, sessions, API keys, billing and permissions designed as reusable product structure."
        />
        <div className="mt-5">
          <ShowcaseActions
            componentCode="<AccountOverview />"
            jsxCode="<AccountSystemShowcase />"
            tailwindCode="grid gap-6 rounded-[var(--radius-lg)] border border-[var(--border-soft)]"
            previewLabel="Preview Account"
          />
        </div>
      </Surface>

      <div className="grid grid-cols-[0.95fr_1.05fr] gap-6">
        <Surface variant="panel" className="p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">Profile and account overview</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
                User profile, collaborator cards, billing identity, linked accounts and workspace switch context in one surface.
              </p>
            </div>
            <ShowcaseActions
              componentCode="<ProfileOverview />"
              jsxCode="<ProfilePanel />"
              tailwindCode="rounded-[var(--radius-md)] border border-[var(--border-soft)] p-6"
              previewLabel="Preview Profile"
            />
          </div>

          <div className="grid grid-cols-[0.9fr_1.1fr] gap-5">
            <div className="rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
              <div className="flex items-center gap-4">
                <Avatar initials="OS" size="xl" tone="blue" status="online" />
                <div>
                  <p className="text-lg font-semibold text-[var(--text-strong)]">Olivia Stone</p>
                  <p className="text-sm text-[var(--text-muted)]">Staff Product Engineer</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill text="Workspace owner" />
                <Pill text="Enterprise plan" />
                <Pill text="EU region" />
              </div>
              <div className="mt-5 grid gap-3">
                <SettingRow icon={BriefcaseBusiness} title="Billing profile" meta="Northstar Labs LLC" />
                <SettingRow icon={ShieldCheck} title="Security score" meta="92 / 100" />
                <SettingRow icon={Users} title="Team" meta="12 collaborators active" />
              </div>
            </div>

            <div className="grid gap-4">
              <Surface variant="glass" className="p-5">
                <p className="text-sm font-medium text-[var(--text-base)]">Connected accounts</p>
                <div className="mt-4 space-y-3">
                  {['GitHub', 'Google Workspace', 'Slack'].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-3">
                      <span className="text-sm text-[var(--text-soft)]">{item}</span>
                      <span className="text-xs text-[var(--text-muted)]">Connected</span>
                    </div>
                  ))}
                </div>
              </Surface>
              <Surface variant="subtle" className="p-5">
                <p className="text-sm font-medium text-[var(--text-base)]">Sessions & devices</p>
                <div className="mt-4 space-y-3">
                  <SettingRow icon={Laptop} title="MacBook Pro" meta="Sao Paulo • online" />
                  <SettingRow icon={Laptop} title="Cloud shell" meta="us-east-1 • 2h ago" />
                </div>
              </Surface>
            </div>
          </div>
        </Surface>

        <Surface variant="glass" className="p-0 overflow-hidden">
          <div className="grid grid-cols-[260px_1fr]">
            <aside className="border-r border-[var(--border-soft)] bg-[rgba(255,255,255,0.02)] p-5">
              <div className="mb-5 flex items-center gap-3">
                <Settings2 className="h-4 w-4 text-[var(--text-muted)]" />
                <span className="text-sm text-[var(--text-base)]">Settings shell</span>
              </div>
              <div className="space-y-2">
                {settingsNav.map((item, index) => (
                  <div key={item} className={`rounded-[14px] px-3 py-2 text-sm ${index === 0 ? 'bg-[rgba(255,255,255,0.06)] text-[var(--text-strong)]' : 'text-[var(--text-soft)]'}`}>
                    {item}
                  </div>
                ))}
              </div>
            </aside>

            <div className="p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">Settings pages</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
                    Sidebar layout, preference tabs, billing, API, integrations, notifications and keyboard shortcuts.
                  </p>
                </div>
                <ShowcaseActions
                  componentCode="<SettingsSidebarLayout />"
                  jsxCode="<SettingsShell />"
                  tailwindCode="grid grid-cols-[260px_1fr] overflow-hidden rounded-[var(--radius-lg)]"
                  previewLabel="Preview Settings"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <SettingsPanel title="Appearance settings" icon={Sparkles} body="Dark mode, radius, compact density and accent behavior." />
                <SettingsPanel title="Notification center" icon={BellRing} body="Mentions, deployment notifications, API alerts and monitoring updates." />
                <SettingsPanel title="Billing settings" icon={CreditCard} body="Usage plans, invoices, payment method and limits." />
                <SettingsPanel title="Developer settings" icon={KeyRound} body="API keys, tokens, webhooks and environment behavior." />
                <SettingsPanel title="Workspace preferences" icon={LayoutPanelTop} body="Workspace name, logo, defaults, pinned tools and startup destination." />
                <SettingsPanel title="Connected apps" icon={PlugZap} body="Connected apps, integrations settings and access scopes." />
              </div>
            </div>
          </div>
        </Surface>
      </div>

      <div className="grid grid-cols-[1fr_0.9fr] gap-6">
        <Surface variant="panel" className="p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">Workspace, roles and member flows</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
                Invite member flow, role matrix, permission UI, organization settings and team management cards.
              </p>
            </div>
            <ShowcaseActions
              componentCode="<InviteMemberFlow />"
              jsxCode="<TeamManagementPanels />"
              tailwindCode="grid gap-4 rounded-[var(--radius-md)] border border-[var(--border-soft)]"
              previewLabel="Preview Team"
            />
          </div>

          <div className="grid grid-cols-[1fr_0.9fr] gap-5">
            <div className="space-y-4">
              <Surface variant="subtle" className="p-5">
                <p className="text-sm font-medium text-[var(--text-base)]">Invite member flow</p>
                <div className="mt-4 grid gap-3">
                  <Input appearance="elevated" label="Work email" placeholder="teammate@company.com" />
                  <Input appearance="elevated" label="Role" placeholder="Admin" />
                  <Button variant="solid" tone="blue" fullWidth>Send invite</Button>
                </div>
              </Surface>
              <Surface variant="subtle" className="p-5">
                <p className="text-sm font-medium text-[var(--text-base)]">Role / permission UI</p>
                <div className="mt-4 space-y-3">
                  {[
                    ['Owner', 'Full access to billing, members and keys'],
                    ['Admin', 'Manage projects, seats and environments'],
                    ['Editor', 'Can ship updates and manage content'],
                  ].map(([title, meta], index) => (
                    <div key={title} className={`rounded-[14px] border px-4 py-3 ${index === 0 ? 'border-[rgba(96,165,250,0.22)] bg-[rgba(59,130,246,0.08)]' : 'border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)]'}`}>
                      <p className="text-sm font-medium text-[var(--text-base)]">{title}</p>
                      <p className="mt-1 text-xs leading-6 text-[var(--text-muted)]">{meta}</p>
                    </div>
                  ))}
                </div>
              </Surface>
            </div>

            <div className="space-y-4">
              <Surface variant="glass" className="p-5">
                <p className="text-sm font-medium text-[var(--text-base)]">Team management</p>
                <div className="mt-4 space-y-3">
                  {[
                    ['OS', 'Olivia Stone', 'Owner', 'online'],
                    ['MA', 'Miguel Alves', 'Admin', 'busy'],
                    ['LR', 'Luna Reed', 'Editor', 'idle'],
                  ].map(([initials, name, role, status]) => (
                    <div key={name} className="flex items-center justify-between rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Avatar initials={initials} tone="grayscale" status={status} />
                        <div>
                          <p className="text-sm text-[var(--text-base)]">{name}</p>
                          <p className="text-xs text-[var(--text-muted)]">{role}</p>
                        </div>
                      </div>
                      <Button variant="ghost" tone="white" size="compact">Manage</Button>
                    </div>
                  ))}
                </div>
              </Surface>
              <Surface variant="subtle" className="p-5">
                <p className="text-sm font-medium text-[var(--text-base)]">Workspace & organization switchers</p>
                <div className="mt-4 grid gap-3">
                  <SwitcherCard title="Workspace switcher" subtitle="Atlas AI • Production" />
                  <SwitcherCard title="Account switcher" subtitle="Northstar Labs • Enterprise" />
                </div>
              </Surface>
            </div>
          </div>
        </Surface>

        <Surface variant="panel" className="p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">Dropdowns, popovers and activity</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
                Profile dropdowns in multiple styles, notifications, quick actions, logout and settings shortcuts plus activity timeline widgets.
              </p>
            </div>
            <ShowcaseActions
              componentCode="<ProfileDropdown variant='glass' />"
              jsxCode="<AccountDropdowns />"
              tailwindCode="rounded-[var(--radius-md)] border border-[var(--border-soft)] shadow-[var(--shadow-panel)]"
              previewLabel="Preview Dropdowns"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {dropdownStyles.map((title, index) => (
              <DropdownVariant key={title} title={title} index={index} />
            ))}
          </div>

          <div className="mt-5 grid grid-cols-[1fr_0.92fr] gap-4">
            <Surface variant="glass" className="p-5">
              <p className="text-sm font-medium text-[var(--text-base)]">Notifications center</p>
              <div className="mt-4 space-y-3">
                {[
                  ['Deployment finished', '2m ago'],
                  ['API key rotated', '14m ago'],
                  ['Workspace mention', '26m ago'],
                ].map(([title, time]) => (
                  <div key={title} className="flex items-start justify-between rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-3">
                    <div>
                      <p className="text-sm text-[var(--text-base)]">{title}</p>
                      <p className="text-xs text-[var(--text-muted)]">{time}</p>
                    </div>
                    <BellRing className="h-4 w-4 text-[var(--text-muted)]" />
                  </div>
                ))}
              </div>
            </Surface>
            <Surface variant="subtle" className="p-5">
              <p className="text-sm font-medium text-[var(--text-base)]">Workspace activity timeline</p>
              <div className="mt-4 space-y-4">
                {[
                  ['API key created', 'Developer settings'],
                  ['Billing threshold updated', 'Account overview'],
                  ['New member invited', 'Team management'],
                ].map(([title, meta]) => (
                  <div key={title} className="flex gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#3b82f6]" />
                    <div>
                      <p className="text-sm text-[var(--text-base)]">{title}</p>
                      <p className="text-xs text-[var(--text-muted)]">{meta}</p>
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

function SettingsPanel({ title, icon: Icon, body }) {
  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
      <div className="flex items-center gap-3">
        <Icon className="h-4 w-4 text-[var(--text-muted)]" />
        <p className="text-sm font-medium text-[var(--text-base)]">{title}</p>
      </div>
      <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{body}</p>
    </div>
  )
}

function SettingRow({ icon: Icon, title, meta }) {
  return (
    <div className="flex items-center gap-3 rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-3">
      <Icon className="h-4 w-4 text-[var(--text-muted)]" />
      <div>
        <p className="text-sm text-[var(--text-base)]">{title}</p>
        <p className="text-xs text-[var(--text-muted)]">{meta}</p>
      </div>
    </div>
  )
}

function SwitcherCard({ title, subtitle }) {
  return (
    <div className="rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-3">
      <p className="text-sm text-[var(--text-base)]">{title}</p>
      <p className="mt-1 text-xs text-[var(--text-muted)]">{subtitle}</p>
    </div>
  )
}

function DropdownVariant({ title, index }) {
  const base =
    index % 3 === 0
      ? 'bg-[rgba(255,255,255,0.03)]'
      : index % 3 === 1
        ? 'bg-[rgba(255,255,255,0.04)] backdrop-blur-xl'
        : 'bg-[var(--bg-1)]'

  return (
    <div className={`rounded-[var(--radius-md)] border border-[var(--border-soft)] p-4 shadow-[var(--shadow-panel)] ${base}`}>
      <div className="mb-4 flex items-center gap-3">
        <Avatar initials="OS" tone={index % 2 === 0 ? 'blue' : 'grayscale'} size="md" />
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-[var(--text-base)]">Olivia Stone</p>
          <p className="truncate text-xs text-[var(--text-muted)]">olivia@devaker.ai</p>
        </div>
        <span className="ml-auto rounded-full border border-[var(--border-soft)] px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">Owner</span>
      </div>
      <div className="space-y-2">
        {['Workspace selector', 'Notifications', 'Quick actions', 'Settings shortcut', 'Logout'].map((item) => (
          <div key={item} className="rounded-[12px] px-3 py-2 text-sm text-[var(--text-soft)] hover:bg-[rgba(255,255,255,0.04)]">
            {item}
          </div>
        ))}
      </div>
      <div className="mt-4 border-t border-[var(--border-soft)] pt-3">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">{title}</p>
      </div>
    </div>
  )
}

function Pill({ text }) {
  return (
    <span className="rounded-full border border-[var(--border-soft)] px-3 py-1.5 text-xs text-[var(--text-muted)]">
      {text}
    </span>
  )
}
