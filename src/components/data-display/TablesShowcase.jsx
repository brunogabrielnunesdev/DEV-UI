import { ArrowDownWideNarrow, Search, SlidersHorizontal } from 'lucide-react'
import { Button } from '../ui/Button'
import { ShowcaseActions } from '../ui/ShowcaseActions'
import { SectionHeader } from '../ui/SectionHeader'
import { Surface } from '../ui/Surface'

const tableVariants = [
  'Compact table',
  'Enterprise data table',
  'Finance table',
  'Analytics table',
  'Monitoring table',
  'IDE style table',
  'SQL result table',
  'Activity table',
  'Logs table',
  'Kanban data layout',
]

export function TablesShowcase() {
  return (
    <div className="space-y-8">
      <Surface variant="panel" className="p-6">
        <SectionHeader
          eyebrow="Tables"
          title="Diversidade estrutural real para dados, logs, activity e board views"
          description="Compact, enterprise, finance, analytics, monitoring, IDE and kanban-like layouts now use different affordances, density and navigation patterns."
        />
        <div className="mt-5">
          <ShowcaseActions
            componentCode="<EnterpriseTable rows={rows} />"
            jsxCode="<TablesShowcase />"
            tailwindCode="overflow-hidden rounded-[var(--radius-md)] border border-[var(--border-soft)]"
            previewLabel="Preview Tables"
          />
        </div>
      </Surface>

      <div className="grid gap-6">
        {tableVariants.map((title, index) => (
          <TableVariant key={title} title={title} index={index} />
        ))}
      </div>
    </div>
  )
}

function TableVariant({ title, index }) {
  const variant = index % 2 === 0 ? 'panel' : 'glass'

  return (
    <Surface variant={variant} className="p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-[var(--text-muted)]">Unique layout, unique controls, same visual ecosystem.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" tone="white" leftIcon={Search}>Search</Button>
          <Button variant="ghost" tone="white" leftIcon={SlidersHorizontal}>Filters</Button>
          <ShowcaseActions componentCode="<DataTable />" jsxCode={`<TableVariant title="${title}" />`} tailwindCode="grid gap-3 rounded-[14px]" previewLabel="Preview" />
        </div>
      </div>

      {index === 0 && <CompactTable />}
      {index === 1 && <EnterpriseTable />}
      {index === 2 && <FinanceTable />}
      {index === 3 && <AnalyticsTable />}
      {index === 4 && <MonitoringTable />}
      {index === 5 && <IdeTable />}
      {index === 6 && <SqlResult />}
      {index === 7 && <ActivityTable />}
      {index === 8 && <LogsTable />}
      {index === 9 && <KanbanData />}
    </Surface>
  )
}

function CompactTable() {
  return (
    <div className="overflow-hidden rounded-[var(--radius-sm)] border border-[var(--border-soft)]">
      <div className="grid grid-cols-[1.2fr_0.8fr_0.6fr] bg-[rgba(255,255,255,0.04)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
        <span>Name</span><span>Status</span><span>Time</span>
      </div>
      {['Atlas', 'Nova', 'Pulse'].map((row, index) => (
        <div key={row} className="grid grid-cols-[1.2fr_0.8fr_0.6fr] border-t border-[var(--border-soft)] px-4 py-2 text-sm text-[var(--text-soft)]">
          <span className="text-[var(--text-base)]">{row}</span><span>{index === 1 ? 'Queued' : 'Healthy'}</span><span>{index + 1}m</span>
        </div>
      ))}
    </div>
  )
}

function EnterpriseTable() {
  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--border-soft)]">
      <div className="sticky top-0 grid grid-cols-[50px_1.1fr_0.7fr_0.7fr_0.5fr] bg-[rgba(255,255,255,0.05)] px-4 py-3 text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
        <span><input type="checkbox" /></span><span>Organization</span><span>Owner</span><span>Plan</span><span>Action</span>
      </div>
      {['Acme', 'Vertex', 'Northstar'].map((row) => (
        <div key={row} className="grid grid-cols-[50px_1.1fr_0.7fr_0.7fr_0.5fr] items-center border-t border-[var(--border-soft)] px-4 py-3 text-sm text-[var(--text-soft)]">
          <span><input type="checkbox" /></span>
          <span className="text-[var(--text-base)]">{row}</span>
          <span>Ops Team</span>
          <span>Enterprise</span>
          <span className="text-[var(--text-muted)]">Edit</span>
        </div>
      ))}
      <div className="flex items-center justify-between border-t border-[var(--border-soft)] px-4 py-3">
        <div className="text-sm text-[var(--text-muted)]">Bulk actions: Archive, Export, Assign</div>
        <div className="flex gap-2">
          <Button variant="outline" tone="white">Prev</Button>
          <Button variant="solid" tone="white">1</Button>
          <Button variant="outline" tone="white">2</Button>
        </div>
      </div>
    </div>
  )
}

function FinanceTable() {
  return (
    <div className="grid grid-cols-[1fr_320px] gap-4">
      <div className="overflow-hidden rounded-[var(--radius-sm)] border border-[var(--border-soft)]">
        <div className="grid grid-cols-4 bg-[rgba(16,185,129,0.08)] px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#d1fae5]">
          <span>Account</span><span>Balance</span><span>Delta</span><span>Risk</span>
        </div>
        {['Treasury', 'Payroll', 'Reserve'].map((item, index) => (
          <div key={item} className="grid grid-cols-4 border-t border-[var(--border-soft)] px-4 py-3 text-sm text-[var(--text-soft)]">
            <span className="text-[var(--text-base)]">{item}</span>
            <span>{['$420k', '$92k', '$180k'][index]}</span>
            <span>{['+12%', '-3%', '+4%'][index]}</span>
            <span>{['Low', 'Medium', 'Low'][index]}</span>
          </div>
        ))}
      </div>
      <div className="rounded-[var(--radius-sm)] border border-[rgba(52,211,153,0.16)] bg-[rgba(16,185,129,0.06)] p-4 shadow-[var(--shadow-glow-green)]">
        <p className="text-sm text-[#d1fae5]">Cash summary</p>
        <p className="mt-3 text-3xl font-semibold text-[var(--text-strong)]">$692k</p>
      </div>
    </div>
  )
}

function AnalyticsTable() {
  return (
    <div className="grid grid-cols-[0.85fr_1.15fr] gap-4">
      <div className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4">
        <p className="text-sm text-[var(--text-soft)]">Top channels</p>
        <div className="mt-4 space-y-3">
          {['Organic', 'Paid', 'Direct'].map((channel, index) => (
            <div key={channel}>
              <div className="mb-1 flex justify-between text-xs text-[var(--text-muted)]"><span>{channel}</span><span>{[64, 22, 14][index]}%</span></div>
              <div className="h-2 rounded-full bg-[rgba(255,255,255,0.05)]"><div className="h-full rounded-full bg-[#3b82f6]" style={{ width: `${[64, 22, 14][index]}%` }} /></div>
            </div>
          ))}
        </div>
      </div>
      <CompactTable />
    </div>
  )
}

function MonitoringTable() {
  return (
    <div className="space-y-3">
      {['api-east', 'jobs-sync', 'db-reader'].map((service, index) => (
        <div key={service} className="grid grid-cols-[0.8fr_0.6fr_0.6fr_0.8fr] items-center rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm text-[var(--text-soft)]">
          <span className="text-[var(--text-base)]">{service}</span>
          <span>{['Healthy', 'Warn', 'Healthy'][index]}</span>
          <span>{['84ms', '240ms', '62ms'][index]}</span>
          <span className="text-[var(--text-muted)]">Expand row</span>
        </div>
      ))}
    </div>
  )
}

function IdeTable() {
  return (
    <div className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[var(--bg-1)] p-0">
      <div className="flex items-center gap-2 border-b border-[var(--border-soft)] px-4 py-3 text-xs font-mono text-[var(--text-muted)]">
        <span>results.ts</span><span>/</span><span>table.log</span><ArrowDownWideNarrow className="ml-auto h-4 w-4" />
      </div>
      <div className="font-mono text-xs">
        {['id   status   owner   latency', '1    ok       ops     82ms', '2    warn     infra   201ms', '3    ok       data    64ms'].map((line, index) => (
          <div key={line} className="border-t border-[var(--border-soft)] px-4 py-3 text-[var(--text-soft)]">
            <span className="mr-3 text-[rgba(255,255,255,0.24)]">{index + 1}</span>{line}
          </div>
        ))}
      </div>
    </div>
  )
}

function SqlResult() {
  return (
    <div className="grid grid-cols-[0.95fr_1.05fr] gap-4">
      <div className="rounded-[var(--radius-sm)] border border-[rgba(52,211,153,0.18)] bg-[var(--bg-1)] p-4 shadow-[var(--shadow-glow-green)] font-mono text-xs text-[var(--text-soft)]">
        <div><span className="text-[#60a5fa]">select</span> <span className="text-[#4ade80]">*</span> <span className="text-[#e4e4e7]">from runs limit 20;</span></div>
      </div>
      <CompactTable />
    </div>
  )
}

function ActivityTable() {
  return (
    <div className="space-y-3">
      {['Schema published', 'Agent retrained', 'Workspace invited'].map((item, index) => (
        <div key={item} className="grid grid-cols-[0.7fr_0.6fr_1fr] items-start rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-4 text-sm text-[var(--text-soft)]">
          <span className="text-[var(--text-base)]">{item}</span>
          <span>{index + 1}m ago</span>
          <span className="text-[var(--text-muted)]">Expanded context row with supporting activity narrative.</span>
        </div>
      ))}
    </div>
  )
}

function LogsTable() {
  return (
    <div className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-black font-mono text-xs">
      <div className="border-b border-[var(--border-soft)] px-4 py-3 text-[var(--text-muted)]">logs/live.stream</div>
      {['INFO auth handshake complete', 'WARN queue depth above target', 'ERROR worker timeout recovered'].map((line, index) => (
        <div key={line} className="grid grid-cols-[80px_1fr] border-t border-[var(--border-soft)] px-4 py-3">
          <span className="text-[rgba(255,255,255,0.24)]">{`00:0${index}:12`}</span>
          <span className={index === 2 ? 'text-[#f87171]' : index === 1 ? 'text-[#fbbf24]' : 'text-[#a1a1aa]'}>{line}</span>
        </div>
      ))}
    </div>
  )
}

function KanbanData() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {['Backlog', 'Queued', 'Running', 'Resolved'].map((lane) => (
        <div key={lane} className="rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4">
          <p className="text-sm font-medium text-[var(--text-base)]">{lane}</p>
          <div className="mt-3 space-y-2">
            <div className="rounded-[12px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.04)] p-3 text-sm text-[var(--text-soft)]">Row block A</div>
            <div className="rounded-[12px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.04)] p-3 text-sm text-[var(--text-soft)]">Row block B</div>
          </div>
        </div>
      ))}
    </div>
  )
}
