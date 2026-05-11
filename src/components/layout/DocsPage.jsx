import { useEffect, useMemo, useState } from 'react'
import {
  Blocks,
  Bot,
  Braces,
  Check,
  ChevronRight,
  Command,
  Copy,
  FileCode2,
  FolderKanban,
  LayoutDashboard,
  MonitorCog,
  PanelsTopLeft,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
} from 'lucide-react'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Modal } from '../ui/Modal'
import { Textarea } from '../ui/Textarea'
import { ShowcaseActions } from '../ui/ShowcaseActions'
import { SectionHeader } from '../ui/SectionHeader'
import { Surface } from '../ui/Surface'
import { Avatar } from '../ui/Avatar'
import { Toast } from '../ui/Toast'

const docsSections = [
  { id: 'introduction', label: 'Introducao' },
  { id: 'getting-started', label: 'Primeiros passos' },
  { id: 'foundation', label: 'Foundation' },
  { id: 'imports', label: 'Imports e variants' },
  { id: 'components', label: 'Components' },
  { id: 'layouts', label: 'Layouts' },
  { id: 'navigation', label: 'Navigation' },
  { id: 'devtools', label: 'DevTools' },
  { id: 'profile', label: 'Profile & Settings' },
  { id: 'new-page', label: 'Nova pagina' },
  { id: 'new-component', label: 'Novo componente' },
  { id: 'logic', label: 'Adicionar logica' },
  { id: 'implementation', label: 'Como implementar' },
  { id: 'practices', label: 'Boas praticas' },
]

const colorTokens = [
  ['bg-0', '#000000'],
  ['bg-1', '#050505'],
  ['bg-2', '#0A0A0A'],
  ['bg-3', '#111111'],
  ['bg-4', '#18181B'],
  ['text-strong', '#FFFFFF'],
  ['text-base', '#E4E4E7'],
  ['text-soft', '#A1A1AA'],
  ['blue-400', '#3B82F6'],
  ['green-400', '#34D399'],
]

const componentGroups = [
  {
    title: 'Core UI',
    items: [
      ['Button', 'src/components/ui/Button.jsx', 'Primary action, icon action and loading state.'],
      ['Input', 'src/components/ui/Input.jsx', 'Labeled field with state, helper and icon support.'],
      ['Textarea', 'src/components/ui/Textarea.jsx', 'Long-form text with the same input language.'],
      ['Select', 'src/components/ui/Select.jsx', 'Selection field for compact filters and forms.'],
      ['Checkbox', 'src/components/ui/Checkbox.jsx', 'Binary option inside forms and settings panels.'],
      ['Radio', 'Pattern', 'Use the same input shell when a single choice is required.'],
      ['Switch', 'src/components/ui/Switch.jsx', 'Immediate preference toggles and feature flags.'],
      ['Badge', 'src/components/ui/Badge.jsx', 'Tone label for state, role or category.'],
      ['Card', 'src/components/ui/Card.jsx', 'Content surface with header, content and interaction.'],
      ['Modal / Dialog', 'src/components/ui/Modal.jsx', 'Focus task or confirmation surface.'],
      ['Tabs', 'src/components/ui/Tabs.jsx', 'Inline segmented content switcher.'],
      ['Tooltip', 'src/components/ui/Tooltip.jsx', 'Short helper text and keyboard hints.'],
      ['Dropdown', 'src/components/ui/DropdownMenu.jsx', 'Quick actions and contextual menus.'],
      ['Table', 'Pattern', 'Use the documented table shell inside data-heavy pages.'],
      ['Toast', 'src/components/ui/Toast.jsx', 'Transient feedback and command confirmations.'],
      ['Alert', 'Pattern', 'Use a Surface with tone-specific borders for persistent feedback.'],
    ],
  },
  {
    title: 'Layouts',
    items: [
      ['DashboardLayout', 'Pattern', 'Metrics, feed, table and side navigation composition.'],
      ['AuthLayout', 'Pattern', 'Login, register and onboarding shells.'],
      ['LandingLayout', 'Pattern', 'Hero, trust, CTA and product proof sections.'],
      ['IDELayout', 'Pattern', 'Explorer, editor, bottom dock and assistant rail.'],
      ['WorkspaceLayout', 'Pattern', 'Command-first operational shell for products.'],
      ['DocsLayout', 'Pattern', 'Sidebar docs shell with preview and code split.'],
    ],
  },
  {
    title: 'Navigation',
    items: [
      ['Navbar', 'Pattern', 'Top-level product navigation and quick actions.'],
      ['Sidebar', 'src/components/ui/Sidebar.jsx', 'Persistent vertical wayfinding and grouped links.'],
      ['CommandPalette', 'src/components/ui/CommandMenu.jsx', 'Search and action launcher.'],
      ['WorkspaceSwitcher', 'Pattern', 'Environment and workspace context switch.'],
      ['ProfileDropdown', 'Pattern', 'Account entrypoint with actions and shortcuts.'],
    ],
  },
  {
    title: 'DevTools',
    items: [
      ['SQLPreview', 'Pattern in DevtoolsShowcase', 'Query preview, execution state and result shell.'],
      ['JSONViewer', 'Pattern in DevtoolsShowcase', 'Readable payload block with syntax emphasis.'],
      ['TerminalBlock', 'Pattern in DevtoolsShowcase', 'Shell output, logs and deployment streams.'],
      ['APIResponseBlock', 'Pattern in DevtoolsShowcase', 'Response payload and request metadata.'],
      ['CodeEditorPreview', 'Pattern in DevtoolsShowcase', 'Editor tabs, active line and minimap.'],
      ['LogsViewer', 'Pattern in DevtoolsShowcase', 'Realtime logs and observability output.'],
      ['DatasetPreview', 'Pattern in DevtoolsShowcase', 'Rows, schema and table relations preview.'],
    ],
  },
  {
    title: 'Profile / Settings',
    items: [
      ['SettingsSidebar', 'Pattern in AccountSystemShowcase', 'Long-form settings navigation shell.'],
      ['ProfileCard', 'Pattern in AccountSystemShowcase', 'User identity and role summary.'],
      ['SecurityPanel', 'Pattern in AccountSystemShowcase', 'Security score, sessions and devices.'],
      ['NotificationCenter', 'Pattern in AccountSystemShowcase', 'Mentions, deploy alerts and system updates.'],
      ['TeamManagement', 'Pattern in AccountSystemShowcase', 'Invite, roles and member permissions.'],
    ],
  },
]

const buttonCode = `import { Button } from './components/ui/Button'
import { Sparkles } from 'lucide-react'

export function ExampleActions() {
  return (
    <div className="flex gap-3">
      <Button variant="solid" tone="blue">
        Create workspace
      </Button>
      <Button variant="glass" tone="white" leftIcon={Sparkles}>
        AI assist
      </Button>
      <Button variant="outline" tone="green" loading>
        Saving changes
      </Button>
    </div>
  )
}`

const loginCode = `import { Input } from './components/ui/Input'
import { Button } from './components/ui/Button'
import { Badge } from './components/ui/Badge'

export function LoginScreen() {
  return (
    <div className="mx-auto grid max-w-md gap-6 rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-8">
      <div className="space-y-3">
        <Badge tone="blue">Auth</Badge>
        <h1 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">
          Sign in to your workspace
        </h1>
      </div>

      <div className="grid gap-4">
        <Input label="Email" placeholder="team@company.com" />
        <Input label="Password" type="password" placeholder="••••••••" />
      </div>

      <Button variant="solid" tone="blue" fullWidth>
        Continue
      </Button>
    </div>
  )
}`

const dashboardCode = `import { Button } from './components/ui/Button'
import { Surface } from './components/ui/Surface'

export function DashboardPage() {
  return (
    <div className="grid grid-cols-[260px_1fr] gap-6">
      <aside className="rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
        Sidebar navigation
      </aside>

      <main className="grid gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">
            Operations dashboard
          </h1>
          <Button variant="glass" tone="white">Open command</Button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Surface variant="panel" className="p-5">Metric card</Surface>
          <Surface variant="panel" className="p-5">Metric card</Surface>
          <Surface variant="panel" className="p-5">Metric card</Surface>
        </div>

        <Surface variant="panel" className="p-5">
          Table, charts and activity feed
        </Surface>
      </main>
    </div>
  )
}`

const settingsCode = `import { Input } from './components/ui/Input'
import { Button } from './components/ui/Button'

export function SettingsPage() {
  return (
    <div className="grid grid-cols-[240px_1fr] gap-6">
      <aside className="rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
        Settings sidebar
      </aside>

      <section className="grid gap-6 rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-6">
        <div className="grid gap-4">
          <Input label="Workspace name" placeholder="Atlas Labs" />
          <Input label="Support email" placeholder="ops@atlas.dev" />
        </div>

        <Button variant="solid" tone="green">Save preferences</Button>
      </section>
    </div>
  )
}`

const devCode = `import { Button } from './components/ui/Button'

export function SqlPreview() {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[var(--bg-1)] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-medium text-[var(--text-base)]">SQL Preview</h3>
        <Button variant="glass" tone="green" size="compact">
          Run query
        </Button>
      </div>

      <pre className="overflow-x-auto rounded-[14px] bg-black/40 p-4 font-mono text-xs leading-6 text-[#d1fae5]">
select workspace_id, avg(latency_ms)
from api_logs
group by workspace_id;
      </pre>
    </div>
  )
}`

const installCode = `npm install
npm run dev`

const folderCode = `src/
  components/
    ui/
    layout/
    navigation/
    auth/
    dashboard/
    devtools/
    feedback/
    account/
    data-display/
  lib/
    cn.js
    recipes.js
  tokens/
    theme.css
  styles/
    base.css
  App.jsx`

const importCode = `import { Button } from './components/ui/Button'
import { Input } from './components/ui/Input'
import { Surface } from './components/ui/Surface'
import { Badge } from './components/ui/Badge'`

const layoutUsageCode = `export function WorkspaceScreen() {
  return (
    <div className="grid grid-cols-[260px_1fr] gap-6">
      <aside className="rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
        Sidebar
      </aside>

      <main className="grid gap-6">
        <section className="rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-6">
          Content
        </section>
      </main>
    </div>
  )
}`

const newPageCode = `import { Badge } from './components/ui/Badge'
import { Button } from './components/ui/Button'
import { Input } from './components/ui/Input'
import { Surface } from './components/ui/Surface'

export function BillingPage() {
  return (
    <div className="grid gap-6">
      <div className="space-y-3">
        <Badge tone="blue">Billing</Badge>
        <h1 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">
          Usage and plan management
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Surface variant="panel" className="p-5">Plan</Surface>
        <Surface variant="panel" className="p-5">Usage</Surface>
        <Surface variant="panel" className="p-5">Invoices</Surface>
      </div>

      <Surface variant="panel" className="p-6">
        <div className="grid gap-4">
          <Input label="Billing email" placeholder="finance@company.com" />
          <Button variant="solid" tone="green">Save billing contact</Button>
        </div>
      </Surface>
    </div>
  )
}`

const newComponentCode = `import { Surface } from './components/ui/Surface'
import { cn } from './lib/cn'

export function HealthCard({ title, value, tone = 'default', className }) {
  const toneClass = {
    default: 'text-[var(--text-base)]',
    blue: 'text-[#dbeafe]',
    green: 'text-[#d1fae5]',
  }

  return (
    <Surface variant="panel" className={cn('p-5', className)}>
      <p className="text-sm text-[var(--text-soft)]">{title}</p>
      <p className={cn('mt-3 text-3xl font-semibold tracking-[-0.04em]', toneClass[tone])}>
        {value}
      </p>
    </Surface>
  )
}`

const modalLogicCode = `import { useState } from 'react'
import { Button } from './components/ui/Button'
import { Modal } from './components/ui/Modal'

export function ModalExample() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="solid" tone="blue" onClick={() => setOpen(true)}>
        Open modal
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Create workspace"
        description="Control the modal with local React state."
      >
        <Button variant="ghost" tone="white" onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </Modal>
    </>
  )
}`

const tabsLogicCode = `import { useState } from 'react'
import { Button } from './components/ui/Button'

const tabs = ['Overview', 'Usage', 'Settings']

export function ControlledTabsExample() {
  const [activeTab, setActiveTab] = useState('Overview')

  return (
    <div className="grid gap-4">
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? 'solid' : 'ghost'}
            tone={activeTab === tab ? 'blue' : 'white'}
            size="compact"
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Button>
        ))}
      </div>

      <div>{activeTab} content</div>
    </div>
  )
}`

const sidebarLogicCode = `import { useState } from 'react'
import { Button } from './components/ui/Button'

export function SidebarToggleExample() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="grid grid-cols-[auto_1fr] gap-4">
      <aside className={collapsed ? 'w-20' : 'w-56'}>
        Sidebar
      </aside>

      <div className="grid gap-4">
        <Button variant="outline" tone="white" onClick={() => setCollapsed((value) => !value)}>
          {collapsed ? 'Expand' : 'Collapse'}
        </Button>
      </div>
    </div>
  )
}`

const toastLogicCode = `import { useState } from 'react'
import { Button } from './components/ui/Button'
import { Toast } from './components/ui/Toast'

export function ToastExample() {
  const [visible, setVisible] = useState(false)

  function showToast() {
    setVisible(true)
    window.setTimeout(() => setVisible(false), 1600)
  }

  return (
    <div className="grid gap-4">
      <Button variant="solid" tone="green" onClick={showToast}>
        Show toast
      </Button>
      {visible ? (
        <Toast title="Saved" description="Your changes were updated." />
      ) : null}
    </div>
  )
}`

const loadingLogicCode = `import { useState } from 'react'
import { Button } from './components/ui/Button'

export function LoadingButtonExample() {
  const [loading, setLoading] = useState(false)

  async function handleSave() {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setLoading(false)
  }

  return (
    <Button loading={loading} onClick={handleSave} variant="solid" tone="blue">
      Save changes
    </Button>
  )
}`

const cardsLogicCode = `import { useState } from 'react'
import { Button } from './components/ui/Button'
import { Surface } from './components/ui/Surface'

export function DynamicCardsExample() {
  const [metrics, setMetrics] = useState([
    { label: 'Requests', value: '2.4M' },
    { label: 'Latency', value: '184ms' },
    { label: 'Healthy', value: '99.98%' },
  ])

  function refreshMetrics() {
    setMetrics([
      { label: 'Requests', value: '2.6M' },
      { label: 'Latency', value: '172ms' },
      { label: 'Healthy', value: '99.99%' },
    ])
  }

  return (
    <div className="grid gap-4">
      <Button variant="glass" tone="white" onClick={refreshMetrics}>
        Refresh metrics
      </Button>
      <div className="grid grid-cols-3 gap-4">
        {metrics.map((item) => (
          <Surface key={item.label} variant="panel" className="p-4">
            <p>{item.label}</p>
            <p>{item.value}</p>
          </Surface>
        ))}
      </div>
    </div>
  )
}`

const tableLogicCode = `const rows = [
  { service: 'Atlas API', latency: '184ms', status: 'ok' },
  { service: 'Nova Worker', latency: '241ms', status: 'warn' },
]

export function TableFromArrayExample() {
  return (
    <div className="grid gap-2">
      {rows.map((row) => (
        <div key={row.service} className="grid grid-cols-3">
          <span>{row.service}</span>
          <span>{row.latency}</span>
          <span>{row.status}</span>
        </div>
      ))}
    </div>
  )
}`

const dropdownLogicCode = `import { useState } from 'react'
import { Button } from './components/ui/Button'

const items = ['Open settings', 'Invite member', 'Sign out']

export function DropdownExample() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <Button variant="outline" tone="white" onClick={() => setOpen((value) => !value)}>
        Actions
      </Button>

      {open ? (
        <div className="absolute mt-2 grid gap-1 rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg-2)] p-2">
          {items.map((item) => (
            <button key={item} onClick={() => setOpen(false)}>
              {item}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}`

const formLogicCode = `import { useState } from 'react'
import { Input } from './components/ui/Input'
import { Button } from './components/ui/Button'

export function SimpleFormExample() {
  const [values, setValues] = useState({ name: '', email: '' })
  const [error, setError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!values.email.includes('@')) {
      setError('Use a valid email address.')
      return
    }

    setError('')
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <Input label="Name" name="name" value={values.name} onChange={handleChange} />
      <Input label="Email" name="email" value={values.email} onChange={handleChange} state={error ? 'error' : 'default'} helper={error || 'We will use this email for updates.'} />
      <Button variant="solid" tone="blue">Create account</Button>
    </form>
  )
}`

const variantLogicCode = `import { useState } from 'react'
import { Button } from './components/ui/Button'

export function DynamicVariantExample() {
  const [tone, setTone] = useState('blue')

  return (
    <div className="grid gap-4">
      <div className="flex gap-2">
        <Button size="compact" variant="ghost" tone="white" onClick={() => setTone('blue')}>Blue</Button>
        <Button size="compact" variant="ghost" tone="white" onClick={() => setTone('green')}>Green</Button>
        <Button size="compact" variant="ghost" tone="white" onClick={() => setTone('white')}>White</Button>
      </div>
      <Button variant="solid" tone={tone}>
        Dynamic tone
      </Button>
    </div>
  )
}`

const realtimeLogicCode = `import { useEffect, useState } from 'react'

export function RealtimeMetricsExample() {
  const [latency, setLatency] = useState(184)

  useEffect(() => {
    const id = window.setInterval(() => {
      setLatency((value) => (value >= 220 ? 176 : value + 8))
    }, 1200)

    return () => window.clearInterval(id)
  }, [])

  return <div>{latency}ms</div>
}`

const sqlLogicCode = `import { useState } from 'react'
import { Button } from './components/ui/Button'

const queries = {
  requests: 'select count(*) from api_logs;',
  latency: 'select avg(latency_ms) from api_logs;',
}

export function DynamicSqlExample() {
  const [mode, setMode] = useState('requests')

  return (
    <div className="grid gap-4">
      <div className="flex gap-2">
        <Button size="compact" variant="ghost" tone="white" onClick={() => setMode('requests')}>Requests</Button>
        <Button size="compact" variant="ghost" tone="white" onClick={() => setMode('latency')}>Latency</Button>
      </div>
      <pre>{queries[mode]}</pre>
    </div>
  )
}`

const jsonLogicCode = `import { useState } from 'react'
import { Button } from './components/ui/Button'

const payloads = {
  success: { status: 'ok', latency: 184, healthy: true },
  degraded: { status: 'warn', latency: 241, healthy: false },
}

export function DynamicJsonExample() {
  const [state, setState] = useState('success')

  return (
    <div className="grid gap-4">
      <div className="flex gap-2">
        <Button size="compact" variant="ghost" tone="white" onClick={() => setState('success')}>Healthy</Button>
        <Button size="compact" variant="ghost" tone="white" onClick={() => setState('degraded')}>Degraded</Button>
      </div>
      <pre>{JSON.stringify(payloads[state], null, 2)}</pre>
    </div>
  )
}`

export function DocsPage() {
  const examples = useMemo(
    () => [
      {
        id: 'button-usage',
        eyebrow: 'Button',
        title: 'Como usar um Button',
        description:
          'Importe de components/ui, escolha variant e tone conforme a hierarquia da acao e combine loading, icones e full width sem criar uma versao nova do componente.',
        code: buttonCode,
        preview: <ButtonPreview />,
        actions: {
          componentCode: "<Button variant='solid' tone='blue'>Create workspace</Button>",
          jsxCode: buttonCode,
          tailwindCode: 'flex gap-3',
        },
        steps: [
          'Importe `Button` de `src/components/ui/Button.jsx`.',
          'Use `variant="solid"` para acao principal, `glass` para acao premium secundaria, `outline` ou `ghost` para menor peso visual.',
          'Use `tone="blue"` para primary, `green` para success, `destructive` para risco e `white` para neutro.',
          'Ative `loading`, `disabled`, `leftIcon`, `rightIcon` ou `fullWidth` conforme o estado da interface.',
        ],
      },
      {
        id: 'login-usage',
        eyebrow: 'Auth',
        title: 'Como criar uma tela de login',
        description:
          'Comece pelo AuthLayout pattern, monte o bloco central com Input e Button e mantenha a hierarquia limpa com badge, titulo forte e espacamento generoso.',
        code: loginCode,
        preview: <LoginPreview />,
        actions: {
          componentCode: '<LoginScreen />',
          jsxCode: loginCode,
          tailwindCode:
            'mx-auto grid max-w-md gap-6 rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-8',
        },
        steps: [
          'Use o pattern `AuthLayout` das showcases de auth para decidir entre centered, split, glass ou enterprise.',
          'Importe `Input`, `Button` e `Badge`.',
          'Mantenha no maximo uma acao principal visivel e duas acoes sociais logo abaixo do formulario.',
          'Use helper text e estados de erro diretamente em `Input` em vez de criar um campo customizado.',
        ],
      },
      {
        id: 'dashboard-usage',
        eyebrow: 'Dashboard',
        title: 'Como criar um dashboard',
        description:
          'Escolha o DashboardLayout pattern, componha sidebar, topbar, metric cards e areas de dados sem quebrar a respiracao do sistema.',
        code: dashboardCode,
        preview: <DashboardPreview />,
        actions: {
          componentCode: '<DashboardPage />',
          jsxCode: dashboardCode,
          tailwindCode: 'grid grid-cols-[260px_1fr] gap-6',
        },
        steps: [
          'Comece por um shell de duas colunas: navegacao fixa e conteudo principal.',
          'Coloque metric cards no primeiro bloco, tabela ou grafico no segundo e feed/notifications na lateral ou no rodape.',
          'Prefira `Surface` para criar paines consistentes antes de inventar novos cards.',
          'Se a tela crescer, extraia blocos como `MetricsRail`, `ActivityFeed` e `UsageTable`.',
        ],
      },
      {
        id: 'settings-usage',
        eyebrow: 'Settings',
        title: 'Como criar uma pagina de settings',
        description:
          'Reaproveite o shell do account system: sidebar de configuracao, paineis em coluna unica e formulario simples com labels claros.',
        code: settingsCode,
        preview: <SettingsPreview />,
        actions: {
          componentCode: '<SettingsPage />',
          jsxCode: settingsCode,
          tailwindCode: 'grid grid-cols-[240px_1fr] gap-6',
        },
        steps: [
          'Use `SettingsSidebar` como pattern de navegacao longa.',
          'Agrupe preferencias por contexto: account, security, notifications, integrations e billing.',
          'Use `Input`, `Textarea`, `Switch` e `Checkbox` dentro de paineis com largura controlada.',
          'Mantenha CTA de salvar sempre no final do painel ou no topo direito da secao.',
        ],
      },
      {
        id: 'dev-usage',
        eyebrow: 'Dev',
        title: 'Como usar componentes DEV na pratica',
        description:
          'Monte previews tecnicos reaproveitando os blocos do DevtoolsShowcase: SQL, JSON, terminal, code editor e request/response usando sempre a mesma base dark e monoespacada.',
        code: devCode,
        preview: <DevPreview />,
        actions: {
          componentCode: '<SqlPreview />',
          jsxCode: devCode,
          tailwindCode: 'rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[var(--bg-1)] p-5',
          sqlCode: "select workspace_id, avg(latency_ms) from api_logs group by workspace_id;",
          commandCode: 'pnpm run build',
        },
        steps: [
          'Use `SQLPreview`, `JSONViewer`, `TerminalBlock` e `CodeEditorPreview` como patterns tecnicos antes de desenhar um bloco novo.',
          'Aplique `font-mono`, superfice escura mais fechada e contraste suave para payloads e logs.',
          'Sempre ofereca acao de copia em codigo, SQL, request ou command usando `ShowcaseActions`.',
          'Quando houver status, destaque com azul para foco, verde para sucesso e vermelho apenas para erro real.',
        ],
      },
    ],
    [],
  )

  return (
    <div className="grid grid-cols-[240px_minmax(0,1fr)] gap-6">
      <aside className="sticky top-[104px] h-[calc(100vh-140px)]">
        <Surface variant="glass" className="h-full p-4">
          <div className="mb-4 flex items-center gap-3 rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-3">
            <Search className="h-4 w-4 text-[var(--text-muted)]" />
            <span className="text-sm text-[var(--text-muted)]">Search docs, components, patterns...</span>
          </div>
          <div className="space-y-2">
            {docsSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center justify-between rounded-[var(--radius-sm)] border border-transparent px-3 py-2 text-sm text-[var(--text-soft)] transition-all duration-[var(--motion-base)] hover:border-[var(--border-soft)] hover:bg-[rgba(255,255,255,0.03)] hover:text-[var(--text-strong)]"
              >
                <span>{section.label}</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </Surface>
      </aside>

      <div className="space-y-8">
        <section id="introduction" className="space-y-6">
          <Surface variant="panel" className="overflow-hidden p-8">
            <div className="grid grid-cols-[1.08fr_0.92fr] gap-6">
              <div className="space-y-5">
                <Badge tone="blue">Documentation</Badge>
                <h2 className="text-5xl font-semibold tracking-[-0.06em] text-[var(--text-strong)]">
                  DevAker UI: design system premium para produtos SaaS e ecossistemas DEV.
                </h2>
                <p className="max-w-3xl text-base leading-8 text-[var(--text-soft)]">
                  Esta pagina explica a fundacao visual, a organizacao da biblioteca, as props mais
                  comuns e o fluxo pratico para montar telas reais sem quebrar a identidade do sistema.
                </p>
                <ShowcaseActions
                  componentCode="<DocsPage />"
                  jsxCode="<DocsPage />"
                  tailwindCode="grid grid-cols-[240px_minmax(0,1fr)] gap-6"
                  previewLabel="Preview Docs"
                />
              </div>
              <div className="grid gap-4">
                <MiniMetric icon={Blocks} title="Componentes e patterns" value="50+" body="Primitives, page shells e blocs reutilizaveis." />
                <MiniMetric icon={TerminalSquare} title="Foco dev-first" value="IDE + SaaS" body="Dark system pensado para devtools, auth e dashboards." />
                <MiniMetric icon={Sparkles} title="Consistencia visual" value="Tokens globais" body="Cores, superficies, motion e radius controlados por variaveis." />
              </div>
            </div>
          </Surface>

          <div className="grid grid-cols-4 gap-4">
            {[
              ['React + Vite', 'Component architecture and app shell'],
              ['Tailwind CSS', 'Layout, spacing and token wiring'],
              ['Framer Motion', 'Subtle motion and transitions'],
              ['Lucide React', 'Consistent icon language'],
            ].map(([title, body]) => (
              <Surface key={title} variant="subtle" className="p-4">
                <p className="text-sm font-medium text-[var(--text-base)]">{title}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{body}</p>
              </Surface>
            ))}
          </div>
        </section>

        <section id="getting-started" className="space-y-6">
          <Surface variant="panel" className="p-6">
            <SectionHeader
              eyebrow="Primeiros passos"
              title="Onboarding rapido para novos devs"
              description="Esta secao explica como instalar, rodar, localizar componentes, entender a estrutura da UI e montar a primeira tela sem depender de orientacao manual do time."
            />
            <div className="mt-6 grid grid-cols-[0.92fr_1.08fr] gap-6">
              <CodePanel
                title="1. Instalar e rodar"
                description="Depois de instalar as dependencias, rode a app localmente para navegar pela library e usar a pagina Docs como referencia viva."
                code={installCode}
                actions={{
                  componentCode: '<InstallSteps />',
                  jsxCode: installCode,
                  commandCode: installCode,
                  previewLabel: 'Preview setup',
                }}
              />
              <div className="grid gap-4">
                <StepCard
                  index="1"
                  title="Instalar dependencias"
                  body="Rode `npm install` na raiz do projeto para baixar tudo que a UI Library precisa."
                />
                <StepCard
                  index="2"
                  title="Rodar o projeto"
                  body="Use `npm run dev` e abra a UI para navegar entre os showcases e a documentacao."
                />
                <StepCard
                  index="3"
                  title="Comecar pela Docs"
                  body="A pagina Docs foi pensada como onboarding. Use ela antes de sair copiando estruturas aleatorias."
                />
              </div>
            </div>
          </Surface>

          <div className="grid grid-cols-[1fr_1fr] gap-6">
            <CodePanel
              title="2. Entender a estrutura"
              description="A maior parte da biblioteca esta organizada em `components` por contexto e em `ui` para primitives."
              code={folderCode}
              actions={{
                componentCode: '<FolderStructure />',
                jsxCode: folderCode,
                tailwindCode: 'grid gap-6',
                previewLabel: 'Preview structure',
              }}
            />
            <InfoList
              title="Como se localizar"
              items={[
                'Procure primeiro em `components/ui` quando precisar de um primitive.',
                'Procure em `layout`, `auth`, `dashboard`, `navigation` ou `devtools` quando precisar de um pattern completo.',
                'Use `lib/recipes.js` para entender variants compartilhados.',
                'Use `tokens/theme.css` como fonte de verdade para cores, radius, spacing e motion.',
              ]}
            />
          </div>

          <div className="grid grid-cols-[1fr_1fr] gap-6">
            <CodePanel
              title="3. Importar componentes"
              description="Sempre importe da camada correta. Primitives saem de `components/ui`; patterns maiores saem da pasta tematica."
              code={importCode}
              actions={{
                componentCode: '<ImportsExample />',
                jsxCode: importCode,
                previewLabel: 'Preview imports',
              }}
            />
            <CodePanel
              title="4. Montar a primeira tela"
              description="A primeira tela quase sempre nasce da combinacao entre um shell simples, 2 ou 3 surfaces e componentes base."
              code={layoutUsageCode}
              actions={{
                componentCode: '<WorkspaceScreen />',
                jsxCode: layoutUsageCode,
                tailwindCode: 'grid grid-cols-[260px_1fr] gap-6',
                previewLabel: 'Preview layout',
              }}
            />
          </div>

          <Surface variant="glass" className="p-6">
            <p className="text-sm font-medium text-[var(--text-base)]">Fluxo recomendado para a primeira implementacao</p>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {[
                ['Escolha um layout', 'Comece por auth, dashboard, docs, landing ou workspace shell.'],
                ['Escolha primitives', 'Use Button, Input, Surface, Badge, Tabs e components similares.'],
                ['Aplique variants', 'Ajuste peso visual com variant e semantica com tone antes de criar algo novo.'],
              ].map(([title, body]) => (
                <Surface key={title} variant="subtle" className="p-4">
                  <p className="text-sm font-medium text-[var(--text-base)]">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{body}</p>
                </Surface>
              ))}
            </div>
          </Surface>
        </section>

        <section id="foundation" className="space-y-6">
          <Surface variant="panel" className="p-6">
            <SectionHeader
              eyebrow="Foundation"
              title="Design system e arquitetura visual"
              description="Dark-first, contraste forte, espacamento respirado, motion curta e acentos controlados por tokens para manter a biblioteca coerente em qualquer produto."
            />
            <div className="mt-6 grid grid-cols-[1fr_1fr] gap-6">
              <div className="grid grid-cols-5 gap-3">
                {colorTokens.map(([label, color]) => (
                  <div key={label} className="space-y-2">
                    <div className="h-16 rounded-[var(--radius-sm)] border border-[var(--border-soft)]" style={{ background: color }} />
                    <p className="text-xs text-[var(--text-muted)]">{label}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4">
                <InfoList
                  title="Uso de cores"
                  items={[
                    'Branco forte para titulos, CTAs neutros e superficies de alto contraste.',
                    'Azul para foco tecnico, acao primaria, estados de navegacao e superfices premium.',
                    'Verde para sucesso, healthy states, deploy concluido e feedback positivo.',
                    'Glass apenas em shells premium, overlays, command surfaces e auth com profundidade.',
                    'Glow sempre sutil e reservado para foco, destaque tecnico ou feedback de copia.',
                  ]}
                />
                <InfoList
                  title="Motion philosophy"
                  items={[
                    'Fade, blur leve e pequena elevacao no hover.',
                    'Sem bounce, zoom exagerado ou animacao decorativa sem funcao.',
                    'Interacoes devem reforcar hierarquia, nao chamar mais atencao do que o conteudo.',
                  ]}
                />
              </div>
            </div>
          </Surface>

          <div className="grid grid-cols-3 gap-6">
            <Surface variant="panel" className="p-5">
              <p className="text-sm font-medium text-[var(--text-base)]">Variants</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['default', 'primary', 'secondary', 'outline', 'ghost', 'glass', 'success', 'destructive', 'premium', 'ide'].map((item) => (
                  <Badge key={item} tone={item === 'success' ? 'green' : item === 'primary' ? 'blue' : 'default'} className="normal-case tracking-normal">
                    {item}
                  </Badge>
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                Use `variant` para estrutura visual. Use `tone` para o papel semantico da acao ou status.
              </p>
            </Surface>
            <Surface variant="panel" className="p-5">
              <p className="text-sm font-medium text-[var(--text-base)]">Sizes</p>
              <div className="mt-4 grid gap-3">
                {['sm', 'compact', 'md', 'lg', 'xl', 'icon', 'full-width'].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-3 py-2">
                    <span className="text-sm text-[var(--text-soft)]">{item}</span>
                    <span className="text-xs text-[var(--text-muted)]">Use according to density and emphasis</span>
                  </div>
                ))}
              </div>
            </Surface>
            <Surface variant="panel" className="p-5">
              <p className="text-sm font-medium text-[var(--text-base)]">Common props</p>
              <div className="mt-4 grid gap-2">
                {['children', 'className', 'variant', 'size', 'disabled', 'loading', 'icon', 'onClick', 'active', 'selected', 'expanded'].map((item) => (
                  <div key={item} className="rounded-[12px] bg-[rgba(255,255,255,0.03)] px-3 py-2 text-sm text-[var(--text-soft)]">
                    {item}
                  </div>
                ))}
              </div>
            </Surface>
          </div>
        </section>

        <section id="imports" className="space-y-6">
          <Surface variant="panel" className="p-6">
            <SectionHeader
              eyebrow="Imports e variants"
              title="Como importar, escolher variants e combinar componentes"
              description="Esta e a camada mais importante para manter consistencia. O fluxo certo e importar primitives pequenos, aplicar variants e so entao compor um pattern maior."
            />
            <div className="mt-6 grid grid-cols-[0.95fr_1.05fr] gap-6">
              <CodePanel
                title="Import strategy"
                description="Imports devem refletir o nivel do componente: primitive em `ui`, page pattern em pasta tematica."
                code={importCode}
                actions={{
                  componentCode: '<ImportStrategy />',
                  jsxCode: importCode,
                  previewLabel: 'Preview import',
                }}
              />
              <div className="grid gap-4">
                <InfoList
                  title="Quando usar cada variant"
                  items={[
                    '`solid`: CTA principal e decisao primaria.',
                    '`glass`: superficies premium, overlays e CTA secundario elegante.',
                    '`outline`: filtros, acoes secundarias e contexto administrativo.',
                    '`ghost`: menus, listagens densas e toolbars.',
                    '`glow`: destaque raro para acao especial ou feedback forte.',
                  ]}
                />
                <InfoList
                  title="Como combinar"
                  items={[
                    'Badge + heading + body + CTA para blocos introdutorios.',
                    'Surface + Input + helper + Button para formularios.',
                    'Sidebar + topbar + cards + table para dashboards.',
                    'Surface + font-mono + copy action para blocos DEV.',
                  ]}
                />
              </div>
            </div>
          </Surface>
        </section>

        <section id="components" className="space-y-6">
          <Surface variant="panel" className="p-6">
            <SectionHeader
              eyebrow="Components"
              title="Primitives, states e exemplos de composicao"
              description="A library mistura primitives reutilizaveis com patterns documentados. Use primitives primeiro; extraia patterns so quando o mesmo bloco reaparecer em mais de uma tela."
            />
            <div className="mt-6 grid grid-cols-2 gap-6">
              <Surface variant="subtle" className="p-5">
                <p className="text-sm font-medium text-[var(--text-base)]">Button / Input preview</p>
                <div className="mt-4 grid gap-4">
                  <div className="flex flex-wrap gap-3">
                    <Button variant="solid" tone="white">Default</Button>
                    <Button variant="solid" tone="blue">Primary</Button>
                    <Button variant="glass" tone="green" leftIcon={Check}>Success</Button>
                    <Button variant="outline" tone="white">Outline</Button>
                    <Button variant="ghost" tone="white">Ghost</Button>
                  </div>
                  <Input label="Workspace name" helper="Use a concise product-facing label." placeholder="Atlas" />
                  <Textarea label="Description" helper="Muted helper text keeps forms readable." placeholder="Describe the purpose of this workspace..." />
                </div>
              </Surface>
              <Surface variant="glass" className="p-5">
                <p className="text-sm font-medium text-[var(--text-base)]">Feedback / content preview</p>
                <div className="mt-4 grid gap-4">
                  <div className="rounded-[var(--radius-sm)] border border-[rgba(96,165,250,0.22)] bg-[rgba(59,130,246,0.08)] p-4 text-sm text-[#dbeafe]">
                    Tooltip, alert and toast patterns should explain context without overwhelming the page.
                  </div>
                  <div className="rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
                    <p className="text-lg font-semibold text-[var(--text-strong)]">Card title</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
                      Cards hold related information. Prefer strong spacing and low visual noise over heavy decoration.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge>Default</Badge>
                    <Badge tone="blue">Primary</Badge>
                    <Badge tone="green">Success</Badge>
                    <Badge tone="white">Contrast</Badge>
                  </div>
                </div>
              </Surface>
            </div>
          </Surface>

          {componentGroups[0].items.map(([name, path, body]) => (
            <ReferenceRow key={name} name={name} path={path} body={body} />
          ))}
        </section>

        <section id="layouts" className="space-y-6">
          <Surface variant="panel" className="p-6">
            <SectionHeader
              eyebrow="Layouts"
              title="Page shells para auth, dashboard, docs, landing e workspace"
              description="Layouts nao sao so containers. Eles definem a hierarquia principal da tela, o ritmo dos espacos e como o usuario navega pelo produto."
            />
            <div className="mt-6 grid grid-cols-3 gap-4">
              <LayoutCard icon={ShieldCheck} title="AuthLayout" body="Use para login, register, onboarding e setup flows." />
              <LayoutCard icon={LayoutDashboard} title="DashboardLayout" body="Use para operacoes, analytics e centros de comando." />
              <LayoutCard icon={Braces} title="IDELayout" body="Use para editor, explorer, terminal e paines tecnicos." />
              <LayoutCard icon={Command} title="WorkspaceLayout" body="Use para products with fast switching, command entry and recent activity." />
              <LayoutCard icon={Sparkles} title="LandingLayout" body="Use para marketing product pages and launch surfaces." />
              <LayoutCard icon={FolderKanban} title="DocsLayout" body="Use para documentacao, examples and side-by-side code blocks." />
            </div>
          </Surface>

          {componentGroups[1].items.map(([name, path, body]) => (
            <ReferenceRow key={name} name={name} path={path} body={body} />
          ))}
        </section>

        <section id="navigation" className="space-y-6">
          <Surface variant="panel" className="p-6">
            <SectionHeader
              eyebrow="Navigation"
              title="Navigation deve orientar, nao competir com o conteudo"
              description="Sidebars, navbars e command surfaces devem manter contexto, expor a proxima acao e reduzir friccao para fluxos frequentes."
            />
            <div className="mt-6 grid grid-cols-[1fr_1fr] gap-6">
              <Surface variant="subtle" className="p-5">
                <p className="text-sm font-medium text-[var(--text-base)]">Workspace switch + profile entry</p>
                <div className="mt-4 flex items-center justify-between rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar initials="DA" tone="blue" status="online" />
                    <div>
                      <p className="text-sm text-[var(--text-base)]">DevAker Core</p>
                      <p className="text-xs text-[var(--text-muted)]">engineering workspace</p>
                    </div>
                  </div>
                  <Button variant="ghost" tone="white" size="compact">Switch</Button>
                </div>
              </Surface>
              <Surface variant="glass" className="p-5">
                <p className="text-sm font-medium text-[var(--text-base)]">Command search</p>
                <div className="mt-4 flex items-center gap-3 rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[var(--bg-1)] px-4 py-3">
                  <Search className="h-4 w-4 text-[var(--text-muted)]" />
                  <span className="text-sm text-[var(--text-muted)]">Open command palette, pages or recent actions</span>
                  <Badge>CMD</Badge>
                </div>
              </Surface>
            </div>
          </Surface>

          {componentGroups[2].items.map(([name, path, body]) => (
            <ReferenceRow key={name} name={name} path={path} body={body} />
          ))}
        </section>

        <section id="devtools" className="space-y-6">
          <Surface variant="panel" className="p-6">
            <SectionHeader
              eyebrow="DevTools"
              title="Patterns tecnicos com identidade de IDE moderna"
              description="Os blocos DEV da DevAker UI devem parecer tooling real: editor claro, terminal legivel, payloads estruturados e superficies que priorizam leitura e contexto."
            />
            <div className="mt-6 grid grid-cols-[1fr_0.95fr] gap-6">
              <DevSqlCard />
              <DevTerminalCard />
            </div>
          </Surface>

          {componentGroups[3].items.map(([name, path, body]) => (
            <ReferenceRow key={name} name={name} path={path} body={body} />
          ))}
        </section>

        <section id="profile" className="space-y-6">
          <Surface variant="panel" className="p-6">
            <SectionHeader
              eyebrow="Profile / Settings"
              title="Account, workspace e preferencias devem parecer produto real"
              description="Use os patterns de account system para settings, teams, permission flows, sessions and devices, profile dropdowns e billing sem reinventar shells por pagina."
            />
            <div className="mt-6 grid grid-cols-3 gap-4">
              <LayoutCard icon={Settings2} title="SettingsSidebar" body="Long-form settings navigation with quiet grouping." />
              <LayoutCard icon={MonitorCog} title="SecurityPanel" body="Devices, sessions, auth and operational hygiene." />
              <LayoutCard icon={PanelsTopLeft} title="TeamManagement" body="Roles, invites, ownership and workspace membership." />
            </div>
          </Surface>

          {componentGroups[4].items.map(([name, path, body]) => (
            <ReferenceRow key={name} name={name} path={path} body={body} />
          ))}
        </section>

        <section id="new-page" className="space-y-6">
          <Surface variant="panel" className="p-6">
            <SectionHeader
              eyebrow="Nova pagina"
              title="Como criar uma nova pagina sem quebrar o ecossistema"
              description="Novas paginas devem nascer de um shell claro, com conteudo organizado em blocos reutilizaveis. O objetivo nao e ser diferente a qualquer custo; e expandir o sistema sem bagunca."
            />
            <div className="mt-6 grid grid-cols-[1fr_1fr] gap-6">
              <CodePanel
                title="Exemplo de pagina nova"
                description="Este exemplo mostra uma pagina de billing reaproveitando primitives existentes."
                code={newPageCode}
                actions={{
                  componentCode: '<BillingPage />',
                  jsxCode: newPageCode,
                  tailwindCode: 'grid gap-6',
                  previewLabel: 'Preview page',
                }}
              />
              <InfoList
                title="Checklist de criacao"
                items={[
                  'Escolha primeiro o shell: dashboard, settings, auth, docs ou workspace.',
                  'Defina a hierarquia: intro, metricas, conteudo principal, acoes.',
                  'Use `Surface` para separar blocos antes de inventar novos cards.',
                  'Mantenha no maximo um CTA principal por secao.',
                  'Se a pagina repetir muito um bloco, extraia um component local.',
                ]}
              />
            </div>
          </Surface>
        </section>

        <section id="new-component" className="space-y-6">
          <Surface variant="panel" className="p-6">
            <SectionHeader
              eyebrow="Novo componente"
              title="Como criar um componente novo do jeito certo"
              description="Um componente novo so deve nascer quando variants e composicao nao resolverem o problema. A regra e manter API curta, tokens centralizados e markup simples."
            />
            <div className="mt-6 grid grid-cols-[1fr_1fr] gap-6">
              <CodePanel
                title="Exemplo de primitive novo"
                description="Este exemplo mostra um card pequeno, com API clara e dependencias minimas."
                code={newComponentCode}
                actions={{
                  componentCode: '<HealthCard title=\"Healthy services\" value=\"99.98%\" />',
                  jsxCode: newComponentCode,
                  previewLabel: 'Preview component',
                }}
              />
              <InfoList
                title="Regras para novos componentes"
                items={[
                  'Comece por `Surface`, `Button`, `Badge`, `Input` e os tokens existentes.',
                  'Receba `className` para composicao e ajuste fino.',
                  'Prefira `variant`, `tone` e `size` a props muito especificas.',
                  'Evite colocar logica de pagina dentro de primitive.',
                  'Se for um bloco grande e exclusivo de um dominio, crie-o na pasta tematica em vez de `ui`.',
                ]}
              />
            </div>
          </Surface>
        </section>

        <section id="logic" className="space-y-6">
          <Surface variant="panel" className="p-6">
            <SectionHeader
              eyebrow="Como adicionar logica aos componentes"
              title="Transforme a UI em paginas interativas reais com React"
              description="Esta secao ensina como conectar estado, props, eventos e renderizacao dinamica aos componentes da DevAker UI. O foco e frontend React: comportamento, interacao e atualizacao da interface."
            />
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                ['useState', 'Controla modal, tabs, dropdown, loading e estados visuais.'],
                ['props', 'Passa dados, callbacks, variantes e configuracoes entre componentes.'],
                ['events', 'Use onClick, onChange e onSubmit para reagir a interacoes.'],
                ['conditional rendering', 'Mostre ou esconda modal, toast, dropdown e paines quando necessario.'],
                ['map()', 'Renderize listas, tabelas e cards dinamicos a partir de arrays.'],
                ['dynamic variants', 'Troque tone, variant e estado visual conforme a logica da tela.'],
              ].map(([title, body]) => (
                <Surface key={title} variant="subtle" className="p-4">
                  <p className="text-sm font-medium text-[var(--text-base)]">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{body}</p>
                </Surface>
              ))}
            </div>
          </Surface>

          <LogicDocExample
            eyebrow="Modal"
            title="1. Abrir e fechar Modal"
            description="Use `useState` para controlar se o modal esta visivel. O estado fica no componente pai e e passado para `Modal` via props."
            code={modalLogicCode}
            preview={<ModalLogicPreview />}
            actions={{
              componentCode: '<ModalExample />',
              jsxCode: modalLogicCode,
              previewLabel: 'Preview modal',
            }}
            propsList={['open: define se o modal esta aberto.', 'onClose: callback para fechar.', 'title / description: conteudo de cabecalho.']}
            logicList={['`const [open, setOpen] = useState(false)` cria o estado inicial.', '`onClick={() => setOpen(true)}` abre o modal.', '`onClose={() => setOpen(false)}` fecha o modal.', 'O modal aparece apenas quando `open` for `true`.']}
          />

          <LogicDocExample
            eyebrow="Tabs"
            title="2. Trocar Tabs"
            description="Mesmo quando um primitive ja tem estado interno, vale aprender a criar tabs controladas quando a tela precisa reagir ao valor ativo."
            code={tabsLogicCode}
            preview={<ControlledTabsPreview />}
            actions={{
              componentCode: '<ControlledTabsExample />',
              jsxCode: tabsLogicCode,
              previewLabel: 'Preview tabs',
            }}
            propsList={['variant: muda o peso visual do botao da aba.', 'tone: reforca a aba ativa.', 'onClick: atualiza a aba selecionada.']}
            logicList={['Guarde a aba em `activeTab`.', 'Use renderizacao condicional para trocar o painel.', 'Compare `activeTab === tab` para mudar variant, tone e conteudo ativo.']}
          />

          <LogicDocExample
            eyebrow="Sidebar"
            title="3. Alternar Sidebar"
            description="Use um booleano para guardar se a sidebar esta expandida ou recolhida. Esse mesmo estado pode controlar largura, labels e itens secundarios."
            code={sidebarLogicCode}
            preview={<SidebarLogicPreview />}
            actions={{
              componentCode: '<SidebarToggleExample />',
              jsxCode: sidebarLogicCode,
              previewLabel: 'Preview sidebar',
            }}
            propsList={['collapsed: estado local que controla largura e densidade.', 'onClick: alterna entre expandido e recolhido.']}
            logicList={['`setCollapsed((value) => !value)` inverte o estado atual.', 'A largura muda dinamicamente com base em `collapsed`.', 'Voce tambem pode esconder labels ou secao secundaria usando o mesmo booleano.']}
          />

          <LogicDocExample
            eyebrow="Toast + Loading"
            title="4. Mostrar Toast e criar loading button"
            description="Esses dois padroes aparecem juntos com frequencia: um botao dispara uma acao, entra em loading e depois mostra um feedback visual curto."
            code={`${toastLogicCode}\n\n${loadingLogicCode}`}
            preview={<ToastAndLoadingPreview />}
            actions={{
              componentCode: '<ToastExample /><LoadingButtonExample />',
              jsxCode: `${toastLogicCode}\n\n${loadingLogicCode}`,
              previewLabel: 'Preview feedback',
            }}
            propsList={['loading: bloqueia a acao e mostra spinner no Button.', 'title / description: textos do Toast.']}
            logicList={['Use `loading` para impedir clique duplo.', 'Use estado booleano para mostrar e esconder o toast.', 'Quando necessario, use `setTimeout` para fechar o feedback automaticamente.']}
          />

          <LogicDocExample
            eyebrow="Cards + Table"
            title="5. Atualizar cards dinamicamente e renderizar tabelas com arrays"
            description="Guarde os dados em arrays ou objetos e use `map()` para transformar dados em UI. Esse e o padrao principal para dashboards e listas."
            code={`${cardsLogicCode}\n\n${tableLogicCode}`}
            preview={<CardsAndTableLogicPreview />}
            actions={{
              componentCode: '<DynamicCardsExample /><TableFromArrayExample />',
              jsxCode: `${cardsLogicCode}\n\n${tableLogicCode}`,
              previewLabel: 'Preview data',
            }}
            propsList={['metrics: array de cards.', 'rows: array de linhas da tabela.', 'key: identificador estavel para renderizacao de listas.']}
            logicList={['Armazene a estrutura em estado quando o valor pode mudar.', 'Use `map()` para criar um componente por item.', 'Ao atualizar o array com `setMetrics`, o React redesenha automaticamente a UI.']}
          />

          <LogicDocExample
            eyebrow="Dropdown"
            title="6. Criar dropdown funcional"
            description="Dropdown simples pode ser controlado com um booleano local. O menu abre e fecha com `onClick`, e cada item pode disparar sua propria acao."
            code={dropdownLogicCode}
            preview={<DropdownLogicPreview />}
            actions={{
              componentCode: '<DropdownExample />',
              jsxCode: dropdownLogicCode,
              previewLabel: 'Preview dropdown',
            }}
            propsList={['open: controla se a lista esta visivel.', 'items: array de acoes renderizadas dinamicamente.']}
            logicList={['Use `open` para renderizar o menu com condicional.', 'Clique no botao principal para alternar o estado.', 'Clique em um item para executar a acao e depois fechar o dropdown.']}
          />

          <LogicDocExample
            eyebrow="Forms"
            title="7. Criar formulario simples e controlar estados de erro"
            description="Formularios na DevAker UI devem ser controlados com estado React. Isso facilita validacao, mensagens de erro, disabled state e envio de dados."
            code={formLogicCode}
            preview={<FormLogicPreview />}
            actions={{
              componentCode: '<SimpleFormExample />',
              jsxCode: formLogicCode,
              previewLabel: 'Preview form',
            }}
            propsList={['value: valor controlado do input.', 'onChange: atualiza o estado.', 'state: muda o estilo para `error` ou `default`.', 'helper: mostra a mensagem de apoio ou erro.']}
            logicList={['Guarde todos os valores em um unico objeto `values`.', 'Leia `event.target.name` e `event.target.value` para atualizar o campo certo.', 'No submit, valide os dados e atualize `error` se precisar.', 'O estilo do Input pode reagir ao estado de erro dinamicamente.']}
          />

          <LogicDocExample
            eyebrow="Dynamic variants"
            title="8. Trocar variants visualmente em tempo real"
            description="Nem toda mudanca dinamica e sobre dados. Muitas telas trocam `tone`, `variant`, estado ativo ou estilo selecionado conforme a interacao."
            code={variantLogicCode}
            preview={<VariantLogicPreview />}
            actions={{
              componentCode: '<DynamicVariantExample />',
              jsxCode: variantLogicCode,
              previewLabel: 'Preview variants',
            }}
            propsList={['tone: muda o papel visual do componente.', 'variant: muda a estrutura.', 'active state: decide qual opcao esta selecionada.']}
            logicList={['Guarde o valor atual em estado.', 'Use esse valor para alimentar props do componente.', 'Esse mesmo padrao vale para filtros, segmented controls e theme toggles locais.']}
          />

          <LogicDocExample
            eyebrow="Realtime"
            title="9. Atualizar metricas do dashboard e simular realtime updates"
            description="Para simular tempo real em demos, dashboards ou paines tecnicos, use `useEffect` com `setInterval` e atualize o estado em pequenos ciclos."
            code={realtimeLogicCode}
            preview={<RealtimeLogicPreview />}
            actions={{
              componentCode: '<RealtimeMetricsExample />',
              jsxCode: realtimeLogicCode,
              previewLabel: 'Preview realtime',
            }}
            propsList={['useEffect: inicia e limpa o intervalo.', 'latency: valor dinamico mostrado na UI.']}
            logicList={['`useEffect` roda depois que o componente monta.', 'Crie um intervalo e limpe com `clearInterval` no retorno.', 'Sempre derive a UI do estado, nunca altere o DOM manualmente.']}
          />

          <LogicDocExample
            eyebrow="DEV blocks"
            title="10. Atualizar SQLPreview e JSONViewer dinamicamente"
            description="Blocos DEV tambem recebem logica. O usuario pode trocar query, mudar payload, alternar ambiente ou renderizar resposta diferente sem recriar o componente."
            code={`${sqlLogicCode}\n\n${jsonLogicCode}`}
            preview={<SqlJsonLogicPreview />}
            actions={{
              componentCode: '<DynamicSqlExample /><DynamicJsonExample />',
              jsxCode: `${sqlLogicCode}\n\n${jsonLogicCode}`,
              sqlCode: "select count(*) from api_logs;",
              jsonCode: '{"status":"ok","latency":184,"healthy":true}',
              previewLabel: 'Preview DEV logic',
            }}
            propsList={['mode/state: define qual query ou payload deve aparecer.', 'onClick: alterna o preset atual.', 'children / content: renderiza o bloco tecnico com os dados atuais.']}
            logicList={['Use objetos como `queries` e `payloads` para mapear presets.', 'Guarde apenas a chave ativa em estado.', 'Leia o conteudo atual com `queries[mode]` ou `payloads[state]`.']}
          />
        </section>

        <section id="implementation" className="space-y-6">
          <Surface variant="panel" className="p-6">
            <SectionHeader
              eyebrow="Como implementar na pratica"
              title="Passo a passo para montar telas novas sem perder o padrao DEV"
              description="Cada exemplo abaixo mostra preview, JSX, acao de copia e um guia curto de quando usar aquele bloco."
            />
          </Surface>

          {examples.map((example) => (
            <DocsExample key={example.id} {...example} />
          ))}
        </section>

        <section id="practices" className="space-y-6">
          <Surface variant="panel" className="p-6">
            <SectionHeader
              eyebrow="Best practices"
              title="Boas praticas para manter a DevAker UI consistente"
              description="A regra principal e sempre expandir o sistema com intencao. Antes de criar algo novo, confirme se um variant, surface ou layout pattern ja resolve o problema."
            />
            <div className="mt-6 grid grid-cols-2 gap-6">
              <InfoList
                title="Do"
                items={[
                  'Reutilize primitives antes de duplicar markup.',
                  'Use `variant` e `tone` para adaptar sem quebrar a linguagem visual.',
                  'Mantenha componentes pequenos e compose em patterns maiores.',
                  'Extraia um novo pattern quando ele aparecer em duas ou mais telas.',
                  'Use motion com moderacao e sempre a servico da legibilidade.',
                  'Planeje a responsividade depois da composicao desktop, mas sem bloquear fluid width e wrapping basico.',
                ]}
              />
              <InfoList
                title="Avoid"
                items={[
                  'Criar componentes aleatorios so para uma pagina.',
                  'Trocar cor ou padding e chamar isso de nova variante.',
                  'Adicionar glow, gradiente ou blur sem papel funcional.',
                  'Misturar densidades muito diferentes na mesma tela.',
                  'Criar uma nova sidebar quando um grouped navigation pattern ja existe.',
                  'Documentar uma API inexistente; prefira pattern documentado quando ainda nao houver primitive.',
                ]}
              />
            </div>
          </Surface>
        </section>
      </div>
    </div>
  )
}

function DocsExample({ eyebrow, title, description, preview, code, actions, steps }) {
  return (
    <Surface variant="glass" className="overflow-hidden p-0">
      <div className="border-b border-[var(--border-soft)] px-6 py-5">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">{eyebrow}</p>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">{title}</h3>
          <p className="max-w-3xl text-sm leading-7 text-[var(--text-soft)]">{description}</p>
          <ShowcaseActions previewLabel="Preview Component" {...actions} />
        </div>
      </div>
      <div className="grid grid-cols-[0.95fr_1.05fr]">
        <div className="border-r border-[var(--border-soft)] p-6">
          <div className="rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.02)] p-6">
            {preview}
          </div>
        </div>
        <div className="p-6">
          <CodeBlock code={code} />
          <div className="mt-5 grid gap-2">
            {steps.map((step) => (
              <div key={step} className="rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm leading-6 text-[var(--text-soft)]">
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Surface>
  )
}

function LogicDocExample({ eyebrow, title, description, preview, code, actions, propsList, logicList }) {
  return (
    <Surface variant="glass" className="overflow-hidden p-0">
      <div className="border-b border-[var(--border-soft)] px-6 py-5">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">{eyebrow}</p>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">{title}</h3>
          <p className="max-w-3xl text-sm leading-7 text-[var(--text-soft)]">{description}</p>
          <ShowcaseActions previewLabel="Preview Component" {...actions} />
        </div>
      </div>
      <div className="grid grid-cols-[0.9fr_1.1fr]">
        <div className="border-r border-[var(--border-soft)] p-6">
          <div className="rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.02)] p-6">
            {preview}
          </div>
        </div>
        <div className="p-6">
          <CodeBlock code={code} />
          <div className="mt-5 grid gap-4">
            <InfoList title="Props importantes" items={propsList} />
            <InfoList title="Como a logica funciona" items={logicList} />
          </div>
        </div>
      </div>
    </Surface>
  )
}

function ReferenceRow({ name, path, body }) {
  return (
    <Surface variant="subtle" className="flex items-start justify-between gap-4 p-4">
      <div>
        <p className="text-sm font-medium text-[var(--text-base)]">{name}</p>
        <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">{body}</p>
      </div>
      <div className="rounded-full border border-[var(--border-soft)] px-3 py-1.5 text-xs text-[var(--text-muted)]">
        {path}
      </div>
    </Surface>
  )
}

function StepCard({ index, title, body }) {
  return (
    <Surface variant="subtle" className="p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[rgba(255,255,255,0.04)] text-xs font-semibold text-[var(--text-base)]">
          {index}
        </div>
        <div>
          <p className="text-sm font-medium text-[var(--text-base)]">{title}</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{body}</p>
        </div>
      </div>
    </Surface>
  )
}

function CodePanel({ title, description, code, actions }) {
  return (
    <Surface variant="subtle" className="p-5">
      <div className="space-y-3">
        <p className="text-sm font-medium text-[var(--text-base)]">{title}</p>
        <p className="text-sm leading-7 text-[var(--text-soft)]">{description}</p>
        <ShowcaseActions {...actions} />
        <CodeBlock code={code} />
      </div>
    </Surface>
  )
}

function LayoutCard({ icon: Icon, title, body }) {
  return (
    <Surface variant="subtle" className="p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.04)]">
          <Icon className="h-4 w-4 text-[var(--text-base)]" />
        </div>
        <p className="text-sm font-medium text-[var(--text-base)]">{title}</p>
      </div>
      <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">{body}</p>
    </Surface>
  )
}

function MiniMetric({ icon: Icon, title, value, body }) {
  return (
    <Surface variant="subtle" className="p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-[var(--text-soft)]">{title}</p>
        <Icon className="h-4 w-4 text-[var(--text-muted)]" />
      </div>
      <p className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">{value}</p>
      <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{body}</p>
    </Surface>
  )
}

function InfoList({ title, items }) {
  return (
    <Surface variant="subtle" className="p-5">
      <p className="text-sm font-medium text-[var(--text-base)]">{title}</p>
      <div className="mt-4 grid gap-2">
        {items.map((item) => (
          <div key={item} className="rounded-[14px] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm leading-6 text-[var(--text-soft)]">
            {item}
          </div>
        ))}
      </div>
    </Surface>
  )
}

function ButtonPreview() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <Button variant="solid" tone="white">Default white</Button>
        <Button variant="solid" tone="blue">Blue primary</Button>
        <Button variant="solid" tone="green">Green success</Button>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="glass" tone="white">Soft glass</Button>
        <Button variant="outline" tone="white">Outline minimal</Button>
        <Button variant="ghost" tone="white">Ghost subtle</Button>
        <Button variant="glow" tone="blue">Elevated glow</Button>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="solid" tone="blue" size="compact" leftIcon={Command}>Compact</Button>
        <Button variant="solid" tone="green" size="lg" rightIcon={ChevronRight}>Large</Button>
        <Button variant="outline" tone="white" loading>Loading</Button>
        <Button variant="ghost" tone="white" disabled>Disabled</Button>
      </div>
    </div>
  )
}

function LoginPreview() {
  return (
    <div className="mx-auto grid max-w-md gap-5">
      <Badge tone="blue">Login</Badge>
      <div className="space-y-2">
        <h4 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">Sign in to Atlas</h4>
        <p className="text-sm leading-7 text-[var(--text-soft)]">Use your workspace credentials to continue.</p>
      </div>
      <Input label="Email" placeholder="team@atlas.dev" />
      <Input label="Password" type="password" placeholder="••••••••" />
      <Button variant="solid" tone="blue" fullWidth>Continue</Button>
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" tone="white">GitHub</Button>
        <Button variant="glass" tone="white">Google</Button>
      </div>
    </div>
  )
}

function DashboardPreview() {
  return (
    <div className="grid grid-cols-[180px_1fr] gap-4">
      <div className="rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4">
        <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">Sidebar</p>
        <div className="mt-3 grid gap-2">
          {['Overview', 'Deployments', 'Usage', 'Settings'].map((item, index) => (
            <div key={item} className={`rounded-[12px] px-3 py-2 text-sm ${index === 0 ? 'bg-[rgba(255,255,255,0.06)] text-[var(--text-strong)]' : 'text-[var(--text-soft)]'}`}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-4">
        <div className="grid grid-cols-3 gap-3">
          {['Requests', 'Latency', 'Healthy services'].map((item, index) => (
            <div key={item} className={`rounded-[var(--radius-sm)] border p-4 ${index === 1 ? 'border-[rgba(96,165,250,0.22)] bg-[rgba(59,130,246,0.08)] text-[#dbeafe]' : 'border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)]'}`}>
              <p className="text-xs uppercase tracking-[0.18em]">{item}</p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{
                index === 0 ? '2.4M' : index === 1 ? '184ms' : '99.98%'
              }</p>
            </div>
          ))}
        </div>
        <div className="rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm text-[var(--text-base)]">Usage table</p>
            <Badge>LIVE</Badge>
          </div>
          <div className="grid gap-2 text-sm text-[var(--text-soft)]">
            <div className="grid grid-cols-3 rounded-[12px] bg-[rgba(255,255,255,0.04)] px-3 py-2">
              <span>Atlas API</span><span>184ms</span><span>ok</span>
            </div>
            <div className="grid grid-cols-3 rounded-[12px] px-3 py-2">
              <span>Nova Worker</span><span>241ms</span><span>warn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SettingsPreview() {
  return (
    <div className="grid grid-cols-[170px_1fr] gap-4">
      <div className="rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4">
        {['Account', 'Security', 'Notifications', 'Billing'].map((item, index) => (
          <div key={item} className={`rounded-[12px] px-3 py-2 text-sm ${index === 0 ? 'bg-[rgba(255,255,255,0.06)] text-[var(--text-strong)]' : 'text-[var(--text-soft)]'}`}>
            {item}
          </div>
        ))}
      </div>
      <div className="grid gap-4">
        <Input label="Workspace name" placeholder="Atlas Labs" />
        <Input label="Support email" placeholder="support@atlas.dev" />
        <Textarea label="Description" placeholder="Short product-facing workspace summary..." />
        <div className="flex justify-end">
          <Button variant="solid" tone="green">Save changes</Button>
        </div>
      </div>
    </div>
  )
}

function DevPreview() {
  return (
    <div className="grid gap-4">
      <DevSqlCard />
      <DevTerminalCard compact />
    </div>
  )
}

function DevSqlCard() {
  return (
    <Surface variant="subtle" className="p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FileCode2 className="h-4 w-4 text-[var(--text-muted)]" />
          <p className="text-sm text-[var(--text-base)]">SQL Preview</p>
        </div>
        <Button variant="glass" tone="green" size="compact">Run query</Button>
      </div>
      <div className="rounded-[14px] bg-[var(--bg-1)] p-4 font-mono text-xs leading-6 text-[#d1fae5]">
        select workspace_id, avg(latency_ms)
        <br />
        from api_logs
        <br />
        group by workspace_id;
      </div>
    </Surface>
  )
}

function DevTerminalCard({ compact = false }) {
  return (
    <Surface variant="glass" className="p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <TerminalSquare className="h-4 w-4 text-[var(--text-muted)]" />
          <p className="text-sm text-[var(--text-base)]">Terminal Block</p>
        </div>
        <Button variant="ghost" tone="white" size="compact" leftIcon={Copy}>Copy command</Button>
      </div>
      <div className={`rounded-[14px] border border-[var(--border-soft)] bg-black px-4 py-4 font-mono ${compact ? 'text-xs' : 'text-[13px]'} leading-6`}>
        <div className="text-[#a1a1aa]">$ pnpm build</div>
        <div className="text-[#60a5fa]">transforming modules...</div>
        <div className="text-[#4ade80]">build completed successfully</div>
      </div>
    </Surface>
  )
}

function ModalLogicPreview() {
  const [open, setOpen] = useState(false)

  return (
    <div className="grid gap-4">
      <Button variant="solid" tone="blue" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Create workspace"
        description="This modal is controlled by local React state."
      >
        <div className="grid gap-3">
          <Input label="Workspace name" placeholder="Atlas Labs" />
          <div className="flex justify-end gap-3">
            <Button variant="ghost" tone="white" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="solid" tone="blue" onClick={() => setOpen(false)}>
              Create
            </Button>
          </div>
        </div>
      </Modal>
      <p className="text-sm leading-6 text-[var(--text-muted)]">Clique no botao para abrir. Clique em Close, Cancel ou fora do modal para fechar.</p>
    </div>
  )
}

function ControlledTabsPreview() {
  const tabs = ['Overview', 'Usage', 'Settings']
  const [activeTab, setActiveTab] = useState('Overview')

  return (
    <div className="grid gap-4">
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? 'solid' : 'ghost'}
            tone={activeTab === tab ? 'blue' : 'white'}
            size="compact"
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Button>
        ))}
      </div>
      <Surface variant="subtle" className="p-4">
        <p className="text-sm text-[var(--text-base)]">{activeTab} panel</p>
        <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
          {activeTab === 'Overview' && 'Use esta aba para status geral e resumo da workspace.'}
          {activeTab === 'Usage' && 'Use esta aba para metricas, consumo e analytics de uso.'}
          {activeTab === 'Settings' && 'Use esta aba para preferencias, configuracoes e controles operacionais.'}
        </p>
      </Surface>
    </div>
  )
}

function SidebarLogicPreview() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="grid grid-cols-[auto_1fr] gap-4">
      <div className={`${collapsed ? 'w-20' : 'w-52'} rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4 transition-all duration-[var(--motion-base)]`}>
        <div className="grid gap-2">
          {['Overview', 'Deployments', 'Members', 'Settings'].map((item, index) => (
            <div key={item} className={`rounded-[12px] px-3 py-2 text-sm ${index === 0 ? 'bg-[rgba(255,255,255,0.06)] text-[var(--text-strong)]' : 'text-[var(--text-soft)]'}`}>
              {collapsed ? item.slice(0, 1) : item}
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-4">
        <Button variant="outline" tone="white" onClick={() => setCollapsed((value) => !value)}>
          {collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        </Button>
        <p className="text-sm leading-6 text-[var(--text-muted)]">O mesmo estado pode controlar largura, labels, grupos e quick actions da navegação.</p>
      </div>
    </div>
  )
}

function ToastAndLoadingPreview() {
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSave() {
    setLoading(true)
    await new Promise((resolve) => window.setTimeout(resolve, 1000))
    setLoading(false)
    setVisible(true)
    window.setTimeout(() => setVisible(false), 1500)
  }

  return (
    <div className="grid gap-4">
      <div className="flex gap-3">
        <Button variant="solid" tone="blue" loading={loading} onClick={handleSave}>
          Save changes
        </Button>
        <Button variant="solid" tone="green" onClick={() => setVisible(true)}>
          Show toast
        </Button>
      </div>
      {visible ? <Toast title="Saved successfully" description="Your workspace preferences are now updated." /> : null}
    </div>
  )
}

function CardsAndTableLogicPreview() {
  const [metrics, setMetrics] = useState([
    { label: 'Requests', value: '2.4M' },
    { label: 'Latency', value: '184ms' },
    { label: 'Healthy', value: '99.98%' },
  ])

  const rows = [
    { service: 'Atlas API', latency: '184ms', status: 'ok' },
    { service: 'Nova Worker', latency: '241ms', status: 'warn' },
    { service: 'Pulse SQL', latency: '98ms', status: 'ok' },
  ]

  function refreshMetrics() {
    setMetrics([
      { label: 'Requests', value: '2.6M' },
      { label: 'Latency', value: '172ms' },
      { label: 'Healthy', value: '99.99%' },
    ])
  }

  return (
    <div className="grid gap-4">
      <Button variant="glass" tone="white" size="compact" onClick={refreshMetrics}>
        Refresh metrics
      </Button>
      <div className="grid grid-cols-3 gap-3">
        {metrics.map((item) => (
          <Surface key={item.label} variant="panel" className="p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">{item.label}</p>
            <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">{item.value}</p>
          </Surface>
        ))}
      </div>
      <Surface variant="subtle" className="overflow-hidden p-0">
        <div className="grid grid-cols-3 bg-[rgba(255,255,255,0.04)] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
          <span>service</span><span>latency</span><span>status</span>
        </div>
        {rows.map((row) => (
          <div key={row.service} className="grid grid-cols-3 border-t border-[var(--border-soft)] px-4 py-3 text-sm text-[var(--text-soft)]">
            <span>{row.service}</span>
            <span>{row.latency}</span>
            <span>{row.status}</span>
          </div>
        ))}
      </Surface>
    </div>
  )
}

function DropdownLogicPreview() {
  const [open, setOpen] = useState(false)
  const items = ['Open settings', 'Invite member', 'Sign out']

  return (
    <div className="relative grid justify-start gap-3">
      <Button variant="outline" tone="white" onClick={() => setOpen((value) => !value)}>
        {open ? 'Close actions' : 'Open actions'}
      </Button>
      {open ? (
        <div className="absolute top-12 z-10 grid min-w-52 gap-1 rounded-[16px] border border-[var(--border-soft)] bg-[var(--bg-2)] p-2 shadow-[var(--shadow-panel)]">
          {items.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-[12px] px-3 py-2 text-left text-sm text-[var(--text-soft)] transition-colors hover:bg-[rgba(255,255,255,0.04)] hover:text-[var(--text-strong)]"
            >
              {item}
            </button>
          ))}
        </div>
      ) : null}
      <p className="text-sm leading-6 text-[var(--text-muted)]">Dropdown aparece com renderização condicional e fecha ao selecionar uma ação.</p>
    </div>
  )
}

function FormLogicPreview() {
  const [values, setValues] = useState({ name: '', email: '' })
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!values.email.includes('@')) {
      setError('Use a valid email address.')
      setSubmitted(false)
      return
    }

    setError('')
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <Input label="Name" name="name" value={values.name} onChange={handleChange} placeholder="Olivia Stone" />
      <Input
        label="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="team@company.com"
        state={error ? 'error' : 'default'}
        helper={error || 'We will use this email for account updates.'}
      />
      <Button variant="solid" tone="blue">Create account</Button>
      {submitted ? (
        <div className="rounded-[14px] border border-[rgba(52,211,153,0.22)] bg-[rgba(16,185,129,0.08)] px-4 py-3 text-sm text-[#d1fae5]">
          Form submitted successfully.
        </div>
      ) : null}
    </form>
  )
}

function VariantLogicPreview() {
  const [tone, setTone] = useState('blue')

  return (
    <div className="grid gap-4">
      <div className="flex gap-2">
        {['blue', 'green', 'white'].map((item) => (
          <Button key={item} size="compact" variant="ghost" tone="white" onClick={() => setTone(item)}>
            {item}
          </Button>
        ))}
      </div>
      <Button variant="solid" tone={tone}>
        Dynamic tone: {tone}
      </Button>
      <p className="text-sm leading-6 text-[var(--text-muted)]">Esse mesmo padrão vale para active state, selected filters e trocas de emphasis na UI.</p>
    </div>
  )
}

function RealtimeLogicPreview() {
  const [latency, setLatency] = useState(184)
  const [requests, setRequests] = useState(2400000)

  useEffect(() => {
    const id = window.setInterval(() => {
      setLatency((value) => (value >= 220 ? 176 : value + 8))
      setRequests((value) => value + 1200)
    }, 1200)

    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="grid grid-cols-2 gap-4">
      <Surface variant="panel" className="p-4">
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">latency</p>
        <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">{latency}ms</p>
      </Surface>
      <Surface variant="panel" className="p-4">
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">requests</p>
        <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">{requests.toLocaleString()}</p>
      </Surface>
    </div>
  )
}

function SqlJsonLogicPreview() {
  const queries = {
    requests: 'select count(*) from api_logs;',
    latency: 'select avg(latency_ms) from api_logs;',
  }

  const payloads = {
    success: { status: 'ok', latency: 184, healthy: true },
    degraded: { status: 'warn', latency: 241, healthy: false },
  }

  const [mode, setMode] = useState('requests')
  const [state, setState] = useState('success')

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-4">
        <Surface variant="subtle" className="p-4">
          <div className="mb-3 flex gap-2">
            <Button size="compact" variant="ghost" tone="white" onClick={() => setMode('requests')}>Requests</Button>
            <Button size="compact" variant="ghost" tone="white" onClick={() => setMode('latency')}>Latency</Button>
          </div>
          <pre className="rounded-[14px] bg-[var(--bg-1)] p-4 font-mono text-xs leading-6 text-[#d1fae5] whitespace-pre-wrap">{queries[mode]}</pre>
        </Surface>
        <Surface variant="glass" className="p-4">
          <div className="mb-3 flex gap-2">
            <Button size="compact" variant="ghost" tone="white" onClick={() => setState('success')}>Healthy</Button>
            <Button size="compact" variant="ghost" tone="white" onClick={() => setState('degraded')}>Degraded</Button>
          </div>
          <pre className="rounded-[14px] bg-[var(--bg-1)] p-4 font-mono text-xs leading-6 text-[#dbeafe] whitespace-pre-wrap">{JSON.stringify(payloads[state], null, 2)}</pre>
        </Surface>
      </div>
    </div>
  )
}

function CodeBlock({ code }) {
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
