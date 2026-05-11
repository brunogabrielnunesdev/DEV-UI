import {
  Activity,
  BarChart3,
  Blocks,
  Bot,
  Brain,
  BriefcaseBusiness,
  Cable,
  CalendarRange,
  CloudCog,
  Code2,
  Database,
  DollarSign,
  FolderKanban,
  LayoutDashboard,
  Radar,
  ReceiptText,
  ServerCog,
  TerminalSquare,
  Users,
} from 'lucide-react'
import { Button } from '../ui/Button'
import { ShowcaseActions } from '../ui/ShowcaseActions'
import { SectionHeader } from '../ui/SectionHeader'
import { Surface } from '../ui/Surface'

const dashboards = [
  { title: 'Finance dashboard', key: 'finance', icon: DollarSign, variant: 'panel' },
  { title: 'Analytics dashboard', key: 'analytics', icon: BarChart3, variant: 'glass' },
  { title: 'AI dashboard', key: 'ai', icon: Brain, variant: 'panel' },
  { title: 'Dev tools dashboard', key: 'devtools', icon: Code2, variant: 'panel' },
  { title: 'Admin dashboard', key: 'admin', icon: LayoutDashboard, variant: 'glass' },
  { title: 'Monitoring dashboard', key: 'monitoring', icon: Radar, variant: 'panel' },
  { title: 'API management', key: 'api', icon: Cable, variant: 'glass' },
  { title: 'Productivity dashboard', key: 'productivity', icon: CalendarRange, variant: 'panel' },
  { title: 'Team workspace', key: 'workspace', icon: Users, variant: 'panel' },
  { title: 'SQL / data dashboard', key: 'sql', icon: Database, variant: 'glass' },
  { title: 'Cloud infra dashboard', key: 'cloud', icon: CloudCog, variant: 'panel' },
  { title: 'IDE environment', key: 'ide', icon: TerminalSquare, variant: 'panel' },
]

export function DashboardShowcase() {
  return (
    <div className="space-y-8">
      <Surface variant="panel" className="p-6">
        <SectionHeader
          eyebrow="Dashboards"
          title="Doze dashboards com navegacao, prioridade e composicao diferentes"
          description="Cada variant muda estrutura, widgets, densidade de painel e enfase de workflow, mantendo o mesmo ecossistema visual DevAker."
        />
        <div className="mt-5">
          <ShowcaseActions
            componentCode="<FinanceDashboard />"
            jsxCode="<DashboardShowcase />"
            tailwindCode="grid gap-4 rounded-[var(--radius-md)] border border-[var(--border-soft)]"
            previewLabel="Preview Dashboards"
          />
        </div>
      </Surface>

      <div className="grid gap-6">
        {dashboards.map((dash) => (
          <DashboardVariant key={dash.key} dash={dash} />
        ))}
      </div>
    </div>
  )
}

function DashboardVariant({ dash }) {
  const Icon = dash.icon

  return (
    <Surface variant={dash.variant} className="overflow-hidden p-0">
      <div className="border-b border-[var(--border-soft)] px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-[16px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.04)]">
              <Icon className="h-5 w-5 text-[var(--text-base)]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-[-0.03em]">{dash.title}</h3>
              <p className="text-sm text-[var(--text-muted)]">Distinct shell for a distinct workflow.</p>
            </div>
          </div>
          <ShowcaseActions
            componentCode={`<${dash.title.replace(/[^a-zA-Z]/g, '')} />`}
            jsxCode={`<DashboardVariant type="${dash.key}" />`}
            tailwindCode="overflow-hidden border-b border-[var(--border-soft)] px-6 py-4"
            previewLabel="Preview Dashboard"
          />
        </div>
      </div>

      {dash.key === 'finance' && (
        <div className="grid grid-cols-[1.1fr_0.9fr]">
          <div className="border-r border-[var(--border-soft)] p-6">
            <div className="grid grid-cols-4 gap-3">
              {['Cash flow', 'MRR', 'Runway', 'Invoices'].map((item, index) => (
                <Metric key={item} label={item} value={['$842k', '$129k', '24 mo', '18 open'][index]} />
              ))}
            </div>
            <div className="mt-4 rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-[var(--text-soft)]">Portfolio allocation</span>
                <Button variant="ghost" tone="green">Rebalance</Button>
              </div>
              <div className="grid grid-cols-[0.65fr_1fr] gap-4">
                <div className="flex items-center justify-center">
                  <div className="flex h-40 w-40 items-center justify-center rounded-full border-[12px] border-[rgba(16,185,129,0.22)] border-t-[rgba(59,130,246,0.4)] text-sm text-[var(--text-soft)]">72% utilized</div>
                </div>
                <div className="space-y-3">
                  {['Treasury', 'Payroll', 'Vendors', 'Reserve'].map((item, index) => (
                    <div key={item} className="flex items-center justify-between rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm">
                      <span className="text-[var(--text-base)]">{item}</span>
                      <span className="text-[var(--text-muted)]">{[42, 18, 14, 26][index]}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <SideList title="Approvals queue" icon={ReceiptText} items={['Expense report pending CFO', 'Contract renewal awaiting review', 'Tax export generated']} />
          </div>
        </div>
      )}

      {dash.key === 'analytics' && (
        <div className="grid grid-cols-[1.3fr_0.7fr]">
          <div className="p-6">
            <div className="mb-4 grid grid-cols-3 gap-3">
              {['Visitors', 'Conversion', 'Activation'].map((item, index) => (
                <Metric key={item} label={item} value={['840k', '6.2%', '41%'][index]} />
              ))}
            </div>
            <div className="rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.02)] p-5">
              <p className="mb-4 text-sm text-[var(--text-soft)]">Multi-series trend</p>
              <div className="relative h-48 rounded-[var(--radius-sm)] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]">
                <div className="absolute inset-x-0 bottom-0 h-32 rounded-[var(--radius-sm)] bg-[linear-gradient(180deg,rgba(59,130,246,0.26),rgba(59,130,246,0.02))]" />
                <div className="absolute inset-x-6 bottom-6 h-20 rounded-[var(--radius-sm)] bg-[linear-gradient(180deg,rgba(16,185,129,0.18),rgba(16,185,129,0.02))]" />
              </div>
            </div>
          </div>
          <div className="border-l border-[var(--border-soft)] p-6">
            <SideList title="Breakdowns" icon={Blocks} items={['Organic search up 12%', 'Docs retention improved', 'North America strongest region']} />
          </div>
        </div>
      )}

      {dash.key === 'ai' && (
        <div className="grid grid-cols-[300px_1fr_300px]">
          <aside className="border-r border-[var(--border-soft)] p-5">
            <SideList title="Pinned copilots" icon={Bot} items={['Code reviewer', 'Prompt tuner', 'Schema generator']} />
          </aside>
          <div className="p-6">
            <div className="rounded-[var(--radius-md)] border border-[rgba(96,165,250,0.18)] bg-[rgba(59,130,246,0.08)] p-5 shadow-[var(--shadow-glow-blue)]">
              <p className="text-sm uppercase tracking-[0.24em] text-[#bfdbfe]">Prompt center</p>
              <div className="mt-4 rounded-[var(--radius-sm)] bg-black/30 p-4 text-sm text-[var(--text-soft)]">Generate an onboarding flow for a cloud workspace admin team.</div>
              <div className="mt-4 flex gap-3">
                <Button variant="solid" tone="blue">Run prompt</Button>
                <Button variant="outline" tone="white">View history</Button>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <Metric label="Model latency" value="418ms" />
              <Metric label="Prompt quality" value="94.6%" />
            </div>
          </div>
          <aside className="border-l border-[var(--border-soft)] p-5">
            <SideList title="Recent generations" icon={Brain} items={['Billing summary', 'CLI docs rewrite', 'API schema diff']} />
          </aside>
        </div>
      )}

      {dash.key === 'devtools' && (
        <div className="grid grid-cols-[220px_1fr] bg-[var(--bg-1)]">
          <aside className="border-r border-[var(--border-soft)] p-5 font-mono text-xs text-[var(--text-muted)]">
            {['src/', 'components/', 'devtools/', 'schema.ts', 'api.ts', 'logs.sql'].map((item) => (
              <div key={item} className="rounded-[12px] px-3 py-2 hover:bg-[rgba(255,255,255,0.04)]">{item}</div>
            ))}
          </aside>
          <div className="p-6">
            <div className="mb-4 flex gap-2">
              {['request.ts', 'response.json', 'terminal.log'].map((tab, index) => (
                <div key={tab} className={`rounded-t-[12px] border px-3 py-2 text-xs font-mono ${index === 0 ? 'border-[var(--border-strong)] bg-[var(--bg-3)] text-[var(--text-base)]' : 'border-[var(--border-soft)] text-[var(--text-muted)]'}`}>{tab}</div>
              ))}
            </div>
            <div className="grid grid-cols-[1.1fr_0.9fr] gap-4">
              <CodePanel title="Request playground" accent="blue" lines={['const req = await client.post("/v1/agents/run")', 'headers: { "x-workspace": "atlas" }', 'payload: { mode: "sync" }']} />
              <CodePanel title="Terminal widget" accent="green" lines={['$ pnpm dev', 'ready in 312ms', 'watching schema changes...']} />
            </div>
          </div>
        </div>
      )}

      {dash.key === 'admin' && (
        <div className="grid grid-cols-[0.9fr_1.1fr]">
          <div className="border-r border-[var(--border-soft)] p-6">
            <SideList title="Approvals" icon={BriefcaseBusiness} items={['Invite pending review', 'Role escalation requested', 'Billing override flagged']} />
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <Metric label="Active orgs" value="182" />
              <Metric label="Open tickets" value="24" />
              <Metric label="Policy alerts" value="7" />
              <Metric label="Seats changed" value="19" />
            </div>
          </div>
        </div>
      )}

      {dash.key === 'monitoring' && (
        <div className="grid grid-cols-[1fr_320px]">
          <div className="p-6">
            <div className="grid grid-cols-[0.9fr_1.1fr] gap-4">
              <Surface variant="subtle" className="p-5">
                <p className="text-sm text-[var(--text-soft)]">Incident radar</p>
                <div className="mt-4 flex h-52 items-center justify-center rounded-full border border-[rgba(239,68,68,0.18)] text-sm text-[var(--text-muted)]">3 active incidents</div>
              </Surface>
              <CodePanel title="Live logs" accent="red" lines={['WARN cpu threshold crossed', 'INFO autoscaler added node', 'OK latency back within target']} />
            </div>
          </div>
          <aside className="border-l border-[var(--border-soft)] p-6">
            <SideList title="Health states" icon={Activity} items={['db-primary healthy', 'cdn-eu degraded', 'queue-backfill healthy']} />
          </aside>
        </div>
      )}

      {dash.key === 'api' && (
        <div className="grid grid-cols-[340px_1fr]">
          <aside className="border-r border-[var(--border-soft)] p-6">
            <div className="space-y-3">
              {['GET /v1/workspaces', 'POST /v1/agents/run', 'DELETE /v1/keys/:id'].map((endpoint, index) => (
                <div key={endpoint} className={`rounded-[14px] border px-4 py-3 text-sm ${index === 1 ? 'border-[rgba(96,165,250,0.22)] bg-[rgba(59,130,246,0.1)] text-[#dbeafe]' : 'border-[var(--border-soft)] text-[var(--text-soft)]'}`}>{endpoint}</div>
              ))}
            </div>
          </aside>
          <div className="p-6">
            <CodePanel title="Request / response viewer" accent="blue" lines={['requestId: "req_1283"', 'status: 200', 'duration: 184ms', 'cache: HIT']} />
          </div>
        </div>
      )}

      {dash.key === 'productivity' && (
        <div className="grid grid-cols-[1fr_0.8fr]">
          <div className="p-6">
            <div className="grid grid-cols-3 gap-4">
              {['Inbox zero', 'Tasks due', 'Focus score'].map((item, index) => (
                <Metric key={item} label={item} value={['12', '8', '91'][index]} />
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {['Backlog', 'In progress', 'Review'].map((lane) => (
                <div key={lane} className="rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4">
                  <p className="text-sm font-medium text-[var(--text-base)]">{lane}</p>
                  <div className="mt-3 space-y-2">
                    <div className="rounded-[12px] bg-[rgba(255,255,255,0.04)] p-3 text-sm text-[var(--text-soft)]">Ship new editor</div>
                    <div className="rounded-[12px] bg-[rgba(255,255,255,0.04)] p-3 text-sm text-[var(--text-soft)]">Review pricing copy</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <aside className="border-l border-[var(--border-soft)] p-6">
            <SideList title="Timeline" icon={CalendarRange} items={['09:00 standup', '11:30 review', '15:00 deploy window']} />
          </aside>
        </div>
      )}

      {dash.key === 'workspace' && (
        <div className="grid grid-cols-[260px_1fr_260px]">
          <aside className="border-r border-[var(--border-soft)] p-5">
            <SideList title="Pinned tools" icon={FolderKanban} items={['Projects', 'Roadmap', 'Conversations']} />
          </aside>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <Surface variant="subtle" className="p-5">
                <p className="text-sm text-[var(--text-soft)]">Workspace cards</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <MiniCard title="Atlas" meta="AI ops" />
                  <MiniCard title="Foundry" meta="Product infra" />
                </div>
              </Surface>
              <Surface variant="subtle" className="p-5">
                <p className="text-sm text-[var(--text-soft)]">Project cards</p>
                <div className="mt-4 grid gap-3">
                  <MiniCard title="Docs revamp" meta="8 tasks active" />
                  <MiniCard title="Billing API" meta="2 incidents resolved" />
                </div>
              </Surface>
            </div>
          </div>
          <aside className="border-l border-[var(--border-soft)] p-5">
            <SideList title="Notification center" icon={Users} items={['Olivia mentioned you', 'Review assigned to backend', 'New member joined design']} />
          </aside>
        </div>
      )}

      {dash.key === 'sql' && (
        <div className="grid grid-cols-[1fr_0.9fr]">
          <div className="border-r border-[var(--border-soft)] p-6">
            <CodePanel title="SQL editor" accent="green" lines={['select team_id, count(*) as runs', 'from agent_runs', 'group by team_id order by runs desc;']} />
          </div>
          <div className="p-6">
            <div className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--border-soft)]">
              <div className="grid grid-cols-3 bg-[rgba(255,255,255,0.04)] px-4 py-3 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                <span>team_id</span>
                <span>runs</span>
                <span>growth</span>
              </div>
              {['alpha', 'delta', 'gamma'].map((item, index) => (
                <div key={item} className="grid grid-cols-3 border-t border-[var(--border-soft)] px-4 py-3 text-sm text-[var(--text-soft)]">
                  <span>{item}</span>
                  <span>{[182, 140, 128][index]}</span>
                  <span>{['+22%', '+11%', '+8%'][index]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {dash.key === 'cloud' && (
        <div className="grid grid-cols-[0.8fr_1.2fr]">
          <aside className="border-r border-[var(--border-soft)] p-6">
            <SideList title="Infra nodes" icon={ServerCog} items={['eu-west-api', 'us-east-worker', 'edge-cache-03']} />
          </aside>
          <div className="p-6">
            <div className="grid grid-cols-3 gap-4">
              <Metric label="CPU avg" value="42%" />
              <Metric label="Memory" value="68%" />
              <Metric label="Pods" value="128" />
            </div>
            <div className="mt-4 rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
              <p className="text-sm text-[var(--text-soft)]">Network map</p>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {['Ingress', 'Queue', 'Workers'].map((item) => (
                  <div key={item} className="rounded-[14px] border border-[var(--border-soft)] p-4 text-center text-sm text-[var(--text-base)]">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {dash.key === 'ide' && (
        <div className="grid grid-cols-[220px_1fr_300px] bg-black">
          <aside className="border-r border-[var(--border-soft)] p-5 font-mono text-xs text-[var(--text-muted)]">
            {['workspace/', 'routes/', 'components/', 'dashboard.tsx', 'auth.tsx', 'logs.md'].map((item) => (
              <div key={item} className="rounded-[12px] px-3 py-2 hover:bg-[rgba(255,255,255,0.04)]">{item}</div>
            ))}
          </aside>
          <div className="p-6">
            <div className="mb-4 flex gap-2">
              {['main.tsx', 'auth.tsx', 'schema.sql'].map((tab, index) => (
                <div key={tab} className={`rounded-t-[12px] border px-3 py-2 text-xs font-mono ${index === 0 ? 'border-[var(--border-strong)] bg-[var(--bg-3)] text-[var(--text-base)]' : 'border-[var(--border-soft)] text-[var(--text-muted)]'}`}>{tab}</div>
              ))}
            </div>
            <CodePanel title="Editor" accent="purple" lines={['export function AppShell() {', '  return <WorkspaceLayout />', '}']} />
          </div>
          <aside className="border-l border-[var(--border-soft)] p-6">
            <SideList title="Terminal + logs" icon={TerminalSquare} items={['vite ready in 320ms', 'lint clean', 'schema regenerated']} />
          </aside>
        </div>
      )}
    </Surface>
  )
}

function Metric({ label, value }) {
  return (
    <Surface variant="subtle" className="p-4">
      <p className="text-sm text-[var(--text-muted)]">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">{value}</p>
    </Surface>
  )
}

function SideList({ title, icon: Icon, items }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <Icon className="h-4 w-4 text-[var(--text-muted)]" />
        <p className="text-sm font-medium text-[var(--text-base)]">{title}</p>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item} className="rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4 text-sm text-[var(--text-soft)]">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

function CodePanel({ title, lines, accent }) {
  const accents = {
    blue: 'border-[rgba(96,165,250,0.16)] shadow-[var(--shadow-glow-blue)]',
    green: 'border-[rgba(52,211,153,0.16)] shadow-[var(--shadow-glow-green)]',
    red: 'border-[rgba(248,113,113,0.16)]',
    purple: 'border-[rgba(168,85,247,0.18)] shadow-[0_0_0_1px_rgba(168,85,247,0.12),0_0_20px_rgba(168,85,247,0.08)]',
  }

  return (
    <div className={`rounded-[var(--radius-md)] border bg-[var(--bg-2)] p-5 ${accents[accent]}`}>
      <p className="mb-4 text-sm text-[var(--text-soft)]">{title}</p>
      <div className="space-y-2 font-mono text-xs leading-6">
        {lines.map((line, index) => (
          <div key={`${line}-${index}`} className="text-[var(--text-muted)]">
            <span className="mr-3 text-[rgba(255,255,255,0.24)]">{index + 1}</span>
            <span className="text-[#60a5fa]">{line.split(' ')[0]}</span>
            <span className="text-[#e4e4e7]"> {line.slice(line.split(' ')[0].length + 1)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MiniCard({ title, meta }) {
  return (
    <div className="rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4">
      <p className="text-sm font-medium text-[var(--text-base)]">{title}</p>
      <p className="mt-1 text-xs text-[var(--text-muted)]">{meta}</p>
    </div>
  )
}
