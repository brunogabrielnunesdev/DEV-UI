import {
  Activity,
  ArrowRight,
  Bot,
  Braces,
  Bug,
  CheckCheck,
  CircleAlert,
  Clock3,
  CloudCog,
  Copy,
  DatabaseZap,
  FileCode2,
  FileJson2,
  FileSearch2,
  FolderTree,
  Gauge,
  GitBranchPlus,
  Grip,
  History,
  LayoutPanelTop,
  MessageSquareMore,
  MonitorPlay,
  PanelsTopLeft,
  Play,
  SearchCode,
  Server,
  ServerCog,
  Sparkles,
  SquareTerminal,
  Table2,
  Terminal,
  TerminalSquare,
  TimerReset,
  Waypoints,
  Webhook,
} from 'lucide-react'
import { buildEndpoint } from '../../lib/apiClient'
import { Button } from '../ui/Button'
import { ShowcaseActions } from '../ui/ShowcaseActions'
import { SectionHeader } from '../ui/SectionHeader'
import { Surface } from '../ui/Surface'

const inventory = [
  'SQL block',
  'JSON viewer',
  'API response card',
  'Endpoint card',
  'Fake data table',
  'Schema generator',
  'Request/response panel',
  'Code block',
  'Copy button',
  'Terminal style component',
  'Generator panel',
  'Export modal',
  'Dataset preview',
  'Prompt history',
  'Spotlight search',
  'AI prompt input',
  'Schema editor',
  'API playground',
  'Logs stream',
  'Webhook events',
  'Rate limit cards',
  'Endpoint explorer',
  'Environment selector',
  'Cloud infra cards',
]

const syntaxGallery = [
  {
    title: 'TypeScript',
    icon: FileCode2,
    accent: 'blue',
    copyKind: 'jsx',
    lines: [
      [['keyword', 'export'], ['plain', ' function '], ['symbol', 'AgentPanel'], ['plain', '() {']],
      [['keyword', '  const'], ['plain', ' status = '], ['string', '"healthy"']],
      [['keyword', '  return'], ['symbol', ' <WorkspaceShell'], ['plain', ' status={status} />']],
      [['plain', '}']],
    ],
  },
  {
    title: 'JavaScript',
    icon: Braces,
    accent: 'orange',
    copyKind: 'jsx',
    lines: [
      [['keyword', 'const'], ['plain', ' run = async () => {']],
      [['keyword', '  await'], ['plain', ' client.post('], ['string', '"/v1/agents/run"'], ['plain', ')']],
      [['plain', '}']],
    ],
  },
  {
    title: 'SQL',
    icon: DatabaseZap,
    accent: 'green',
    copyKind: 'sql',
    lines: [
      [['keyword', 'select'], ['plain', ' workspace_id, count(*) as requests']],
      [['keyword', 'from'], ['plain', ' api_logs']],
      [['keyword', 'where'], ['plain', ' status = '], ['string', "'ok'"]],
      [['keyword', 'group by'], ['plain', ' workspace_id']],
    ],
  },
  {
    title: 'JSON',
    icon: FileJson2,
    accent: 'purple',
    copyKind: 'json',
    lines: [
      [['symbol', '{']],
      [['property', '  "workspace"'], ['plain', ': '], ['string', '"atlas"'], ['plain', ',']],
      [['property', '  "latency"'], ['plain', ': '], ['number', '184'], ['plain', ',']],
      [['property', '  "healthy"'], ['plain', ': '], ['keyword', 'true']],
      [['symbol', '}']],
    ],
  },
  {
    title: 'YAML',
    icon: FileSearch2,
    accent: 'blue',
    copyKind: 'json',
    lines: [
      [['property', 'service'], ['plain', ': '], ['string', 'devaker-api']],
      [['property', 'region'], ['plain', ': '], ['string', 'us-east-1']],
      [['property', 'autoscale'], ['plain', ': '], ['keyword', 'true']],
    ],
  },
  {
    title: 'Bash',
    icon: TerminalSquare,
    accent: 'green',
    copyKind: 'command',
    lines: [
      [['number', '$'], ['plain', ' pnpm deploy:preview']],
      [['number', '$'], ['plain', ' docker compose up api worker']],
      [['number', '$'], ['plain', ' devaker logs --tail 100']],
    ],
  },
  {
    title: 'Docker',
    icon: CloudCog,
    accent: 'orange',
    copyKind: 'command',
    lines: [
      [['keyword', 'FROM'], ['plain', ' node:22-alpine']],
      [['keyword', 'WORKDIR'], ['plain', ' /app']],
      [['keyword', 'CMD'], ['plain', ' ["pnpm","start"]']],
    ],
  },
  {
    title: '.env',
    icon: FileCode2,
    accent: 'purple',
    copyKind: 'command',
    lines: [
      [['property', 'DATABASE_URL'], ['plain', '='], ['string', 'postgres://...']],
      [['property', 'OPENAI_API_KEY'], ['plain', '='], ['string', 'sk-live-...']],
      [['property', 'DEPLOY_ENV'], ['plain', '='], ['string', 'production']],
    ],
  },
  {
    title: 'XML',
    icon: FileCode2,
    accent: 'blue',
    copyKind: 'jsx',
    lines: [
      [['symbol', '<endpoint'], ['plain', ' method='], ['string', '"POST"'], ['symbol', '>']],
      [['symbol', '  <path>'], ['plain', '/v1/agents/run'], ['symbol', '</path>']],
      [['symbol', '</endpoint>']],
    ],
  },
  {
    title: 'CSV',
    icon: Table2,
    accent: 'green',
    copyKind: 'json',
    lines: [
      [['property', 'workspace'], ['plain', ','], ['property', 'status'], ['plain', ','], ['property', 'latency']],
      [['string', 'atlas'], ['plain', ','], ['string', 'ok'], ['plain', ','], ['number', '184']],
      [['string', 'nova'], ['plain', ','], ['string', 'warn'], ['plain', ','], ['number', '241']],
    ],
  },
  {
    title: 'Java',
    icon: FileCode2,
    accent: 'orange',
    copyKind: 'jsx',
    lines: [
      [['keyword', 'public class'], ['plain', ' ApiClient '], ['symbol', '{']],
      [['keyword', '  private final'], ['plain', ' HttpClient client;']],
      [['symbol', '}']],
    ],
  },
  {
    title: 'Logs',
    icon: Terminal,
    accent: 'red',
    copyKind: 'command',
    lines: [
      [['number', '12:05:11'], ['plain', ' INFO deployment ready']],
      [['number', '12:05:14'], ['warning', ' WARN cache miss spike']],
      [['number', '12:05:19'], ['error', ' ERROR timeout recovered']],
    ],
  },
]

export function DevtoolsShowcase() {
  return (
    <div className="space-y-8">
      <Surface variant="panel" className="p-6">
        <SectionHeader
          eyebrow="IDE / DevTools"
          title="Developer experience premium com visual de plataforma real"
          description="Expansao focada em IDE moderna, terminals, API tooling, SQL/data, observability, AI assistant e engenharia operacional sem quebrar a identidade dark-first da DevAker."
        />
        <div className="mt-5">
          <ShowcaseActions
            componentCode="<DevEnvironmentShell />"
            jsxCode="<DevtoolsShowcase />"
            tailwindCode="bg-[var(--bg-1)] font-mono text-xs border border-[var(--border-soft)]"
            jsonCode='{"workspace":"atlas","healthy":true}'
            sqlCode="select * from api_logs limit 50;"
            commandCode="pnpm dev"
            previewLabel="Preview DevTools"
          />
        </div>
      </Surface>

      <Surface variant="panel" className="overflow-hidden p-0">
        <div className="grid grid-cols-[220px_1fr_300px] bg-[var(--bg-1)]">
          <aside className="border-r border-[var(--border-soft)] p-5">
            <div className="mb-4 flex items-center gap-3">
              <FolderTree className="h-4 w-4 text-[var(--text-muted)]" />
              <span className="text-sm text-[var(--text-base)]">Workspace explorer</span>
            </div>
            <div className="space-y-1 font-mono text-xs text-[var(--text-muted)]">
              {['workspace/', 'src/', 'agents/', 'monitoring/', 'terminal/', 'request.ts', 'schema.sql', '.env.production'].map((item, index) => (
                <div key={item} className={`flex items-center justify-between rounded-[12px] px-3 py-2 ${index === 5 ? 'bg-[rgba(255,255,255,0.06)] text-[var(--text-base)]' : 'hover:bg-[rgba(255,255,255,0.04)]'}`}>
                  <span>{item}</span>
                  {index > 3 ? <span className="text-[rgba(74,222,128,0.8)]">M</span> : null}
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Pinned tools</p>
              <div className="mt-3 grid gap-2">
                {['Prompt Center', 'Deploy Logs', 'API Monitor'].map((item) => (
                  <div key={item} className="rounded-[12px] bg-[rgba(255,255,255,0.04)] px-3 py-2 text-xs text-[var(--text-soft)]">{item}</div>
                ))}
              </div>
            </div>
          </aside>

          <div className="border-r border-[var(--border-soft)] p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-2">
                {['request.ts', 'infra.yaml', 'Dockerfile', 'logs.live'].map((tab, index) => (
                  <div key={tab} className={`rounded-t-[12px] border px-3 py-2 text-xs font-mono transition-all duration-[var(--motion-base)] ${index === 0 ? 'border-[var(--border-strong)] bg-[var(--bg-3)] text-[var(--text-base)] shadow-[var(--shadow-panel)]' : 'border-[var(--border-soft)] text-[var(--text-muted)]'}`}>
                    {tab}
                  </div>
                ))}
              </div>
              <ShowcaseActions
                componentCode="<EditorWorkspace />"
                jsxCode="<EditorPanel />"
                tailwindCode="font-mono text-xs rounded-t-[12px] border px-3 py-2"
                commandCode="devaker open request.ts"
                previewLabel="Preview Editor"
              />
            </div>

            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[var(--bg-2)] shadow-[var(--shadow-panel)]">
              <div className="flex items-center justify-between border-b border-[var(--border-soft)] px-4 py-3 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-2">
                  <PanelsTopLeft className="h-4 w-4" />
                  <span>workspace / api / request.ts</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[rgba(255,255,255,0.05)] px-2 py-1">main</span>
                  <span className="text-[rgba(74,222,128,0.9)]">3 changes</span>
                </div>
              </div>

              <div className="grid grid-cols-[1fr_72px]">
                <div className="relative px-4 py-4 font-mono text-[13px] leading-7">
                  <div className="absolute left-0 top-[56px] h-7 w-full bg-[rgba(255,255,255,0.035)]" />
                  {[
                    [['keyword', 'export'], ['plain', ' async function '], ['symbol', 'runAgent'], ['plain', '() {']],
                    [['keyword', '  const'], ['plain', ' response = await client.post('], ['string', '"/v1/agents/run"'], ['plain', ', payload)']],
                    [['keyword', '  return'], ['plain', ' response.data']],
                    [['plain', '}']],
                  ].map((line, index) => (
                    <div key={index} className="relative z-10 flex gap-3">
                      <span className="w-6 text-right text-[rgba(255,255,255,0.22)]">{index + 18}</span>
                      <div className="flex flex-wrap">
                        {line.map(([type, text], tokenIndex) => (
                          <span key={`${type}-${tokenIndex}`} className={syntaxColors[type]}>{text}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="mt-3 flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <Grip className="h-4 w-4" />
                    Active line, fake cursor, git indicators and smooth editor states.
                  </div>
                </div>
                <div className="border-l border-[var(--border-soft)] bg-[rgba(255,255,255,0.02)] px-3 py-4">
                  <div className="mx-auto h-full w-full rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_40%)]" />
                </div>
              </div>

              <div className="border-t border-[var(--border-soft)] bg-black/35 px-4 py-3 text-xs text-[var(--text-muted)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span>TypeScript</span>
                    <span>UTF-8</span>
                    <span>Spaces: 2</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[#60a5fa]">API Ready</span>
                    <span className="text-[#4ade80]">No problems</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-[1fr_0.92fr] gap-4">
              <EditorDock />
              <AiSidebar />
            </div>
          </div>

          <aside className="p-5">
            <div className="mb-4 flex items-center gap-3">
              <SquareTerminal className="h-4 w-4 text-[var(--text-muted)]" />
              <span className="text-sm text-[var(--text-base)]">Problems / Assistant</span>
            </div>
            <div className="space-y-3">
              <MiniInfoCard title="Problems panel" body="2 warnings, 0 errors, 1 type hint." />
              <MiniInfoCard title="Extensions panel" body="OpenAI, Postgres, Docker, Cloud Run." />
              <MiniInfoCard title="Workspace insights" body="Fastest endpoint: /v1/ping • 38ms" />
            </div>
          </aside>
        </div>
      </Surface>

      <Surface variant="glass" className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Syntax gallery</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
              SQL, JSON, CSV, XML, YAML, JavaScript, TypeScript, Java, Bash, Docker, logs, configs and .env previews with stronger visual differentiation.
            </p>
          </div>
          <ShowcaseActions
            componentCode="<SyntaxCard language='sql' />"
            jsxCode="<SyntaxGallery />"
            tailwindCode="font-mono text-xs rounded-[var(--radius-md)] border p-4"
            jsonCode='{"language":"json"}'
            sqlCode="select count(*) from api_logs;"
            commandCode="docker compose up api"
            previewLabel="Preview Syntax"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {syntaxGallery.map((item) => (
            <SyntaxCard
              key={item.title}
              title={item.title}
              icon={item.icon}
              accent={item.accent}
              lines={item.lines}
              compact
              copyKind={item.copyKind}
            />
          ))}
        </div>
      </Surface>

      <div className="grid grid-cols-[1.05fr_0.95fr] gap-6">
        <Surface variant="panel" className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Terminal experience</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
                Deployment logs, shell previews, build output, docker streams, CI previews, floating terminals and command history panels.
              </p>
            </div>
            <ShowcaseActions
              componentCode="<TerminalDock />"
              jsxCode="<TerminalExperience />"
              tailwindCode="rounded-[var(--radius-md)] border bg-black p-4 font-mono text-xs"
              commandCode="pnpm build && pnpm deploy"
              previewLabel="Preview Terminal"
            />
          </div>
          <div className="grid gap-4">
            <TerminalCard
              title="Deployment logs"
              subtitle="Vercel / CI style stream"
              lines={[
                ['$ git push origin main', 'muted'],
                ['Inspecting deployment graph...', 'info'],
                ['Build cache hit for 12 modules', 'success'],
                ['Edge function bundled in 182ms', 'success'],
                ['Deployment promoted to production', 'success'],
              ]}
            />
            <div className="grid grid-cols-2 gap-4">
              <TerminalCard
                title="Docker logs"
                subtitle="Container events"
                compact
                lines={[
                  ['api-1  | booting health probe', 'muted'],
                  ['worker-1 | queue depth 18', 'warn'],
                  ['db-1 | checkpoint complete', 'success'],
                ]}
              />
              <TerminalCard
                title="Build output"
                subtitle="TS / Vite pipeline"
                compact
                lines={[
                  ['vite v8 build start', 'muted'],
                  ['2205 modules transformed', 'info'],
                  ['bundle optimized successfully', 'success'],
                ]}
              />
            </div>
            <div className="grid grid-cols-[1fr_0.9fr] gap-4">
              <FloatingTerminal />
              <CommandHistory />
            </div>
          </div>
        </Surface>

        <Surface variant="panel" className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">API / backend tooling</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
                Explorer, request/response, REST client UI, analytics, rate limits, webhooks and API monitoring.
              </p>
            </div>
            <ShowcaseActions
              componentCode="<ApiExplorer />"
              jsxCode="<BackendPanels />"
              tailwindCode="grid gap-4 rounded-[var(--radius-md)] border border-[var(--border-soft)]"
              requestCode={`POST ${buildEndpoint('/v1/agents/run')}`}
              responseCode='{"status":200,"latency":184}'
              previewLabel="Preview API"
            />
          </div>
          <div className="space-y-4">
            <ApiExplorer />
            <div className="grid grid-cols-2 gap-4">
              <MetricPanel title="Rate limits panel" value="82%" meta="Usage budget consumed" tone="orange" />
              <MetricPanel title="API monitoring" value="99.98%" meta="Rolling availability" tone="green" />
            </div>
            <div className="grid grid-cols-[1fr_0.9fr] gap-4">
              <WebhookEvents />
              <RequestResponsePanel />
            </div>
          </div>
        </Surface>
      </div>

      <div className="grid grid-cols-[0.95fr_1.05fr] gap-6">
        <Surface variant="panel" className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Database / data experience</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
                SQL editor, query runner, schema explorer, result preview, query history, migration viewer and performance indicators.
              </p>
            </div>
            <ShowcaseActions
              componentCode="<QueryRunner />"
              jsxCode="<DatabaseExperience />"
              tailwindCode="grid gap-4 rounded-[var(--radius-md)] border border-[var(--border-soft)]"
              sqlCode="select * from workspaces where status = 'active';"
              previewLabel="Preview Data"
            />
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-[240px_1fr] gap-4">
              <SchemaExplorer />
              <QueryRunner />
            </div>
            <div className="grid grid-cols-[1fr_0.92fr] gap-4">
              <ResultPreview />
              <MigrationViewer />
            </div>
          </div>
        </Surface>

        <Surface variant="glass" className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Monitoring / infra / observability</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
                Infra dashboards, realtime metrics, cluster cards, environment health, logs stream and deployment monitor aesthetics.
              </p>
            </div>
            <ShowcaseActions
              componentCode="<ObservabilityGrid />"
              jsxCode="<MonitoringExperience />"
              tailwindCode="grid gap-4 rounded-[var(--radius-md)] border border-[var(--border-soft)]"
              commandCode="devaker monitor --env prod"
              previewLabel="Preview Infra"
            />
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-3 gap-4">
              <MetricPanel title="CPU avg" value="42%" meta="autoscale stable" tone="blue" />
              <MetricPanel title="Memory" value="68%" meta="peak in eu-west" tone="orange" />
              <MetricPanel title="Uptime" value="99.98%" meta="last 30 days" tone="green" />
            </div>
            <div className="grid grid-cols-[1fr_0.9fr] gap-4">
              <ClusterCard />
              <LogsStream />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <MetricPanel title="Deployment monitor" value="3 active" meta="1 rollback ready" tone="purple" />
              <MetricPanel title="Environment health" value="Healthy" meta="prod / stage / preview" tone="green" />
            </div>
          </div>
        </Surface>
      </div>

      <Surface variant="panel" className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">AI assistant and developer workspace</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
              AI chat layouts, prompt history, streaming response cards, project launcher, active tasks, deployment queue and collaboration widgets.
            </p>
          </div>
          <ShowcaseActions
            componentCode="<AiWorkspace />"
            jsxCode="<DeveloperWorkspace />"
            tailwindCode="grid gap-4 rounded-[var(--radius-md)] border border-[var(--border-soft)]"
            jsonCode='{"prompt":"generate endpoint explorer"}'
            commandCode="devaker agent run prompt-center"
            previewLabel="Preview Workspace"
          />
        </div>
        <div className="grid grid-cols-[0.95fr_1.05fr] gap-6">
          <AiWorkspace />
          <DeveloperWorkspace />
        </div>
      </Surface>

      <Surface variant="panel" className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Developer component inventory</h3>
          <ShowcaseActions
            componentCode="<DevtoolsInventory />"
            jsxCode="<InventoryGrid />"
            tailwindCode="grid grid-cols-4 gap-3"
            jsonCode='{"count":24}'
            previewLabel="Preview Inventory"
          />
        </div>
        <div className="grid grid-cols-4 gap-3">
          {inventory.map((tool) => (
            <div key={tool} className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm text-[var(--text-soft)]">
              {tool}
            </div>
          ))}
        </div>
      </Surface>
    </div>
  )
}

function EditorDock() {
  return (
    <Surface variant="subtle" className="p-4">
      <div className="mb-3 flex items-center gap-3 text-sm text-[var(--text-base)]">
        <LayoutPanelTop className="h-4 w-4 text-[var(--text-muted)]" />
        Bottom panel
      </div>
      <div className="grid grid-cols-3 gap-3">
        <MiniInfoCard title="Problems" body="2 warnings" />
        <MiniInfoCard title="Tests" body="18 passing" />
        <MiniInfoCard title="Git" body="3 modified" />
      </div>
    </Surface>
  )
}

function AiSidebar() {
  return (
    <Surface variant="glass" className="p-4">
      <div className="mb-3 flex items-center gap-3 text-sm text-[var(--text-base)]">
        <Bot className="h-4 w-4 text-[#60a5fa]" />
        AI assistant sidebar
      </div>
      <div className="space-y-3">
        <div className="rounded-[14px] bg-[rgba(59,130,246,0.08)] p-4 text-sm text-[#dbeafe]">
          Generate webhook retry dashboard with realtime status cards.
        </div>
        <div className="rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4 text-sm text-[var(--text-soft)]">
          Suggested actions: create API explorer, add logs viewer, review SQL panel.
        </div>
      </div>
    </Surface>
  )
}

function SyntaxCard({ title, icon: Icon, lines, accent, compact = false, copyKind }) {
  const accentClass = {
    blue: 'border-[rgba(96,165,250,0.18)] shadow-[var(--shadow-glow-blue)]',
    green: 'border-[rgba(52,211,153,0.18)] shadow-[var(--shadow-glow-green)]',
    purple: 'border-[rgba(168,85,247,0.18)] shadow-[0_0_0_1px_rgba(168,85,247,0.12),0_0_20px_rgba(168,85,247,0.08)]',
    orange: 'border-[rgba(251,191,36,0.18)] shadow-[0_0_0_1px_rgba(251,191,36,0.12),0_0_20px_rgba(251,191,36,0.08)]',
    red: 'border-[rgba(248,113,113,0.18)] shadow-[0_0_0_1px_rgba(248,113,113,0.12),0_0_20px_rgba(248,113,113,0.08)]',
  }

  const copyPayload = lines
    .map((line) => line.map((token) => token[1]).join(''))
    .join('\n')

  return (
    <div className={`rounded-[var(--radius-md)] border bg-[var(--bg-1)] p-4 transition-all duration-[var(--motion-base)] hover:-translate-y-0.5 ${accentClass[accent]}`}>
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-sm text-[var(--text-base)]">
          <Icon className="h-4 w-4 text-[var(--text-muted)]" />
          {title}
        </div>
        <ShowcaseActions
          componentCode={`<SyntaxCard language="${title.toLowerCase()}" />`}
          jsxCode="<SyntaxCard />"
          tailwindCode="font-mono text-xs rounded-[var(--radius-md)] border p-4"
          jsonCode={copyKind === 'json' ? copyPayload : undefined}
          sqlCode={copyKind === 'sql' ? copyPayload : undefined}
          commandCode={copyKind === 'command' ? copyPayload : undefined}
          previewLabel="Preview"
        />
      </div>
      <div className={`space-y-1 font-mono ${compact ? 'text-xs' : 'text-[13px]'} leading-6`}>
        {lines.map((line, index) => (
          <div key={index} className="flex gap-3">
            <span className="w-5 text-right text-[rgba(255,255,255,0.22)]">{index + 1}</span>
            <div className="flex flex-wrap">
              {line.map(([type, text], tokenIndex) => (
                <span key={`${type}-${tokenIndex}`} className={syntaxColors[type]}>{text}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TerminalCard({ title, subtitle, lines, compact = false }) {
  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-black p-4 shadow-[var(--shadow-panel)]">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-[var(--text-base)]">{title}</p>
          <p className="text-xs text-[var(--text-muted)]">{subtitle}</p>
        </div>
        <ShowcaseActions
          componentCode="<TerminalCard />"
          jsxCode="<TerminalExperience />"
          tailwindCode="rounded-[var(--radius-md)] border bg-black p-4 font-mono text-xs"
          commandCode={lines.map(([line]) => line).join('\n')}
          previewLabel="Preview"
        />
      </div>
      <div className={`space-y-2 font-mono ${compact ? 'text-xs' : 'text-[13px]'} leading-6`}>
        {lines.map(([line, tone], index) => (
          <div key={`${line}-${index}`} className={
            tone === 'success'
              ? 'text-[#4ade80]'
              : tone === 'warn'
                ? 'text-[#fbbf24]'
                : tone === 'info'
                  ? 'text-[#60a5fa]'
                  : 'text-[#a1a1aa]'
          }>
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}

function FloatingTerminal() {
  return (
    <div className="relative h-48 rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.02)]">
      <div className="absolute right-4 top-4 w-[82%] rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-black/90 p-4 shadow-[var(--shadow-float)]">
        <div className="mb-3 flex items-center justify-between text-xs text-[var(--text-muted)]">
          <span>floating-terminal</span>
          <span>live</span>
        </div>
        <pre className="font-mono text-xs leading-6 text-[#a1a1aa]">$ railway up{'\n'}build complete{'\n'}deploy promoted</pre>
      </div>
    </div>
  )
}

function CommandHistory() {
  return (
    <Surface variant="subtle" className="p-4">
      <div className="mb-3 flex items-center gap-3 text-sm text-[var(--text-base)]">
        <History className="h-4 w-4 text-[var(--text-muted)]" />
        Command history
      </div>
      <div className="space-y-2 font-mono text-xs text-[var(--text-muted)]">
        <div>devaker env switch prod</div>
        <div>devaker deploy preview</div>
        <div>devaker logs api --tail 50</div>
      </div>
    </Surface>
  )
}

function ApiExplorer() {
  return (
    <div className="grid grid-cols-[0.92fr_1.08fr] gap-4">
      <Surface variant="glass" className="p-4">
        <div className="mb-3 flex items-center gap-3 text-sm text-[var(--text-base)]">
          <Server className="h-4 w-4 text-[var(--text-muted)]" />
          Endpoint explorer
        </div>
        <div className="space-y-2">
          {['GET /v1/workspaces', 'POST /v1/agents/run', 'GET /v1/logs/stream', 'POST /v1/webhooks/test'].map((endpoint, index) => (
            <div key={endpoint} className={`rounded-[12px] px-3 py-3 text-sm ${index === 1 ? 'border border-[rgba(96,165,250,0.22)] bg-[rgba(59,130,246,0.1)] text-[#dbeafe]' : 'border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] text-[var(--text-soft)]'}`}>
              {endpoint}
            </div>
          ))}
        </div>
      </Surface>
      <Surface variant="subtle" className="p-4">
        <div className="mb-3 flex items-center gap-3 text-sm text-[var(--text-base)]">
          <Waypoints className="h-4 w-4 text-[var(--text-muted)]" />
          HTTP request viewer
        </div>
        <div className="rounded-[14px] border border-[var(--border-soft)] bg-[var(--bg-2)] p-4 font-mono text-xs text-[#dbeafe]">
          {`POST ${buildEndpoint('/v1/agents/run')}`}
        </div>
        <div className="mt-3 text-xs text-[var(--text-muted)]">status 200 • cache miss • duration 184ms</div>
      </Surface>
    </div>
  )
}

function RequestResponsePanel() {
  return (
    <Surface variant="glass" className="p-4">
      <div className="mb-3 flex items-center gap-3 text-sm text-[var(--text-base)]">
        <Waypoints className="h-4 w-4 text-[var(--text-muted)]" />
        Request / response panel
      </div>
      <div className="space-y-3 font-mono text-xs">
        <div className="rounded-[12px] bg-[rgba(255,255,255,0.04)] p-3 text-[#dbeafe]">payload: {'{'} mode: "schema", sync: true {'}'}</div>
        <div className="rounded-[12px] bg-[rgba(16,185,129,0.08)] p-3 text-[#d1fae5]">response: {'{'} requestId: "req_1283", ok: true {'}'}</div>
      </div>
    </Surface>
  )
}

function WebhookEvents() {
  return (
    <Surface variant="subtle" className="p-4">
      <div className="mb-3 flex items-center gap-3 text-sm text-[var(--text-base)]">
        <Webhook className="h-4 w-4 text-[var(--text-muted)]" />
        Webhook events
      </div>
      <div className="space-y-3">
        {['invoice.paid', 'deployment.succeeded', 'member.invited'].map((event, index) => (
          <div key={event} className="flex items-center justify-between rounded-[12px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-3 py-3 text-sm">
            <span className="text-[var(--text-soft)]">{event}</span>
            <span className={index === 1 ? 'text-[#4ade80]' : 'text-[var(--text-muted)]'}>{index === 1 ? 'delivered' : 'queued'}</span>
          </div>
        ))}
      </div>
    </Surface>
  )
}

function MetricPanel({ title, value, meta, tone }) {
  const tones = {
    blue: 'border-[rgba(96,165,250,0.18)] bg-[rgba(59,130,246,0.08)]',
    green: 'border-[rgba(52,211,153,0.18)] bg-[rgba(16,185,129,0.08)]',
    orange: 'border-[rgba(251,191,36,0.18)] bg-[rgba(251,191,36,0.08)]',
    purple: 'border-[rgba(168,85,247,0.18)] bg-[rgba(168,85,247,0.08)]',
  }

  return (
    <div className={`rounded-[var(--radius-md)] border p-4 ${tones[tone]}`}>
      <p className="text-sm text-[var(--text-soft)]">{title}</p>
      <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">{value}</p>
      <p className="mt-2 text-xs text-[var(--text-muted)]">{meta}</p>
    </div>
  )
}

function SchemaExplorer() {
  return (
    <Surface variant="subtle" className="p-4">
      <div className="mb-3 flex items-center gap-3 text-sm text-[var(--text-base)]">
        <FileSearch2 className="h-4 w-4 text-[var(--text-muted)]" />
        Schema explorer
      </div>
      <div className="space-y-2 font-mono text-xs text-[var(--text-muted)]">
        <div className="rounded-[12px] bg-[rgba(255,255,255,0.04)] px-3 py-2">workspaces</div>
        <div className="pl-4">id uuid</div>
        <div className="pl-4">name text</div>
        <div className="pl-4">status enum</div>
        <div className="rounded-[12px] bg-[rgba(255,255,255,0.04)] px-3 py-2">api_logs</div>
      </div>
    </Surface>
  )
}

function QueryRunner() {
  return (
    <Surface variant="glass" className="p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3 text-sm text-[var(--text-base)]">
          <DatabaseZap className="h-4 w-4 text-[var(--text-muted)]" />
          Query runner
        </div>
        <Button variant="glass" tone="green" size="compact" leftIcon={Play}>Run</Button>
      </div>
      <div className="rounded-[14px] bg-[var(--bg-2)] p-4 font-mono text-xs text-[#d1fae5]">
        select workspace_id, avg(latency_ms) from api_logs group by workspace_id;
      </div>
      <div className="mt-3 flex gap-2">
        <Pill text="120ms" />
        <Pill text="cached" />
        <Pill text="rows 42" />
      </div>
    </Surface>
  )
}

function ResultPreview() {
  return (
    <Surface variant="subtle" className="p-4">
      <div className="mb-3 flex items-center gap-3 text-sm text-[var(--text-base)]">
        <Table2 className="h-4 w-4 text-[var(--text-muted)]" />
        Result preview
      </div>
      <div className="overflow-hidden rounded-[14px] border border-[var(--border-soft)]">
        <div className="grid grid-cols-3 bg-[rgba(255,255,255,0.04)] px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
          <span>workspace</span><span>avg latency</span><span>state</span>
        </div>
        {['atlas', 'nova', 'pulse'].map((item, index) => (
          <div key={item} className="grid grid-cols-3 border-t border-[var(--border-soft)] px-3 py-2 text-xs text-[var(--text-soft)]">
            <span>{item}</span><span>{[184, 242, 98][index]}ms</span><span>{index === 1 ? 'degraded' : 'ok'}</span>
          </div>
        ))}
      </div>
    </Surface>
  )
}

function MigrationViewer() {
  return (
    <Surface variant="glass" className="p-4">
      <div className="mb-3 flex items-center gap-3 text-sm text-[var(--text-base)]">
        <GitBranchPlus className="h-4 w-4 text-[var(--text-muted)]" />
        Migrations viewer
      </div>
      <div className="space-y-3">
        {['2026_05_11_add_workspace_health.sql', '2026_05_12_index_api_logs.sql', '2026_05_13_expand_usage_rollups.sql'].map((item, index) => (
          <div key={item} className="rounded-[12px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-3 py-3 text-xs font-mono text-[var(--text-soft)]">
            <div className="flex items-center justify-between">
              <span>{item}</span>
              <span className={index === 0 ? 'text-[#4ade80]' : 'text-[var(--text-muted)]'}>{index === 0 ? 'applied' : 'queued'}</span>
            </div>
          </div>
        ))}
      </div>
    </Surface>
  )
}

function ClusterCard() {
  return (
    <Surface variant="subtle" className="p-4">
      <div className="mb-3 flex items-center gap-3 text-sm text-[var(--text-base)]">
        <ServerCog className="h-4 w-4 text-[var(--text-muted)]" />
        Cluster cards
      </div>
      <div className="grid grid-cols-2 gap-3">
        {['us-east-api', 'eu-west-worker', 'edge-cache', 'postgres-read'].map((item) => (
          <div key={item} className="rounded-[12px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-3 text-xs text-[var(--text-soft)]">
            {item}
          </div>
        ))}
      </div>
    </Surface>
  )
}

function LogsStream() {
  return (
    <Surface variant="glass" className="p-4">
      <div className="mb-3 flex items-center gap-3 text-sm text-[var(--text-base)]">
        <Activity className="h-4 w-4 text-[var(--text-muted)]" />
        Logs stream
      </div>
      <div className="space-y-2 font-mono text-xs">
        <div className="text-[#a1a1aa]">12:04:13 INFO autoscaler warmed new node</div>
        <div className="text-[#60a5fa]">12:04:16 TRACE route cache hydrated</div>
        <div className="text-[#fbbf24]">12:04:21 WARN p95 above threshold</div>
        <div className="text-[#4ade80]">12:04:29 OK latency normalized</div>
      </div>
    </Surface>
  )
}

function AiWorkspace() {
  return (
    <Surface variant="glass" className="p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3 text-sm text-[var(--text-base)]">
          <Bot className="h-4 w-4 text-[#60a5fa]" />
          AI workspace
        </div>
        <ShowcaseActions
          componentCode="<AiWorkspace />"
          jsxCode="<AiPanels />"
          tailwindCode="rounded-[var(--radius-md)] border border-[var(--border-soft)] p-5"
          jsonCode='{"prompt":"generate api explorer"}'
          previewLabel="Preview AI"
        />
      </div>
      <div className="grid gap-4">
        <div className="rounded-[var(--radius-md)] border border-[rgba(96,165,250,0.18)] bg-[rgba(59,130,246,0.08)] p-5 shadow-[var(--shadow-glow-blue)]">
          <p className="text-sm font-medium text-[#eff6ff]">Prompt center</p>
          <div className="mt-3 rounded-[14px] bg-black/25 p-4 text-sm text-[#dbeafe]">
            Build an API analytics dashboard with rate limit cards, request logs and a realtime status rail.
          </div>
          <div className="mt-4 flex gap-3">
            <Button variant="solid" tone="blue">Generate</Button>
            <Button variant="ghost" tone="white">Refine</Button>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_0.92fr] gap-4">
          <MiniInfoCard title="Prompt history" body="Generate webhook monitor • Build SQL preview • Refine auth onboarding" />
          <MiniInfoCard title="Streaming response UI" body="Assistant is preparing endpoint cards, charts and request panels..." />
        </div>
      </div>
    </Surface>
  )
}

function DeveloperWorkspace() {
  return (
    <Surface variant="panel" className="p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3 text-sm text-[var(--text-base)]">
          <MonitorPlay className="h-4 w-4 text-[var(--text-muted)]" />
          Developer workspace
        </div>
        <ShowcaseActions
          componentCode="<WorkspaceLauncher />"
          jsxCode="<DeveloperWorkspace />"
          tailwindCode="grid gap-4 rounded-[var(--radius-md)] border border-[var(--border-soft)] p-5"
          commandCode="devaker workspace open atlas"
          previewLabel="Preview Workspace"
        />
      </div>
      <div className="grid gap-4">
        <div className="grid grid-cols-3 gap-4">
          <MiniInfoCard title="Pinned projects" body="Atlas AI • Foundry Ops • Infra Pulse" />
          <MiniInfoCard title="Active tasks" body="3 deploy reviews • 2 schema diffs • 1 auth refactor" />
          <MiniInfoCard title="Deployment queue" body="prod-web • worker-eu • logs-streamer" />
        </div>
        <div className="grid grid-cols-[1fr_0.92fr] gap-4">
          <MiniInfoCard title="Realtime activity" body="Miguel promoted staging • Olivia rotated API key • Luna approved webhook retry policy" />
          <MiniInfoCard title="Engineering timeline" body="09:20 build • 10:14 incident • 11:02 deploy • 11:21 rollback complete" />
        </div>
      </div>
    </Surface>
  )
}

function MiniInfoCard({ title, body }) {
  return (
    <div className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4">
      <p className="text-sm font-medium text-[var(--text-base)]">{title}</p>
      <p className="mt-2 text-xs leading-6 text-[var(--text-muted)]">{body}</p>
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

const syntaxColors = {
  keyword: 'text-[#60a5fa]',
  string: 'text-[#4ade80]',
  property: 'text-[#c084fc]',
  number: 'text-[#fbbf24]',
  warning: 'text-[#fbbf24]',
  error: 'text-[#f87171]',
  symbol: 'text-[#93c5fd]',
  plain: 'text-[#e4e4e7]',
  info: 'text-[#7dd3fc]',
}
