import {
  ArrowRight,
  BadgeCheck,
  Bot,
  BrainCircuit,
  Building2,
  ChartColumn,
  Command,
  Globe2,
  Layers3,
  Lock,
  MessagesSquare,
  MonitorSmartphone,
  ServerCog,
  Sparkles,
  Star,
  TerminalSquare,
  Users,
  Workflow,
} from 'lucide-react'
import { Button } from '../ui/Button'
import { ShowcaseActions } from '../ui/ShowcaseActions'
import { SectionHeader } from '../ui/SectionHeader'
import { Surface } from '../ui/Surface'

const landingVariants = [
  { title: 'Minimal landing', type: 'minimal', icon: Sparkles },
  { title: 'Enterprise landing', type: 'enterprise', icon: Building2 },
  { title: 'AI SaaS landing', type: 'ai', icon: BrainCircuit },
  { title: 'Devtools landing', type: 'devtools', icon: TerminalSquare },
  { title: 'Finance landing', type: 'finance', icon: ChartColumn },
  { title: 'Analytics landing', type: 'analytics', icon: Layers3 },
  { title: 'Workspace landing', type: 'workspace', icon: Users },
  { title: 'Infrastructure cloud', type: 'cloud', icon: ServerCog },
  { title: 'IDE modern landing', type: 'ide', icon: Command },
]

export function LandingPagesShowcase() {
  return (
    <div className="space-y-8">
      <Surface variant="panel" className="p-6">
        <SectionHeader
          eyebrow="Landing Pages"
          title="Landing pages premium para produtos reais, nao templates genericos"
          description="Hero sections, pricing, bento grids, integrations, trusted by, analytics showcase, command palette, IDE preview, terminal preview e CTAs em estruturas realmente diferentes."
        />
        <div className="mt-5">
          <ShowcaseActions
            componentCode="<AiLandingHero />"
            jsxCode="<LandingPagesShowcase />"
            tailwindCode="grid gap-6 rounded-[var(--radius-lg)] border border-[var(--border-soft)]"
            previewLabel="Preview Landing"
          />
        </div>
      </Surface>

      <Surface variant="glass" className="p-6">
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-6">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--text-muted)]">Landing toolkit</p>
            <h3 className="text-4xl font-semibold tracking-[-0.05em] text-[var(--text-strong)]">
              Heroes, pricing, integrations, testimonials, FAQ, enterprise trust and workspace previews.
            </h3>
            <p className="max-w-2xl text-sm leading-7 text-[var(--text-soft)]">
              Cada landing abaixo combina seções diferentes para parecer um produto específico: AI SaaS,
              devtools, analytics, finance, workspace collaboration ou cloud infrastructure.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="solid" tone="blue" rightIcon={ArrowRight}>Explore launch kit</Button>
              <Button variant="glass" tone="white" leftIcon={Command}>Preview command hero</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Hero', 'Pricing', 'Bento grid', 'Integrations', 'Testimonials', 'FAQ'].map((item) => (
              <div key={item} className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4">
                <p className="text-sm font-medium text-[var(--text-base)]">{item}</p>
                <p className="mt-2 text-xs leading-6 text-[var(--text-muted)]">Reusable section block</p>
              </div>
            ))}
          </div>
        </div>
      </Surface>

      <div className="grid gap-6">
        {landingVariants.map((item) => (
          <LandingVariant key={item.title} item={item} />
        ))}
      </div>
    </div>
  )
}

function LandingVariant({ item }) {
  const Icon = item.icon

  return (
    <Surface variant="panel" className="overflow-hidden p-0">
      <div className="border-b border-[var(--border-soft)] px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-[16px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.04)]">
              <Icon className="h-5 w-5 text-[var(--text-base)]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--text-strong)]">{item.title}</h3>
              <p className="text-sm text-[var(--text-muted)]">Distinct structure, same ecosystem.</p>
            </div>
          </div>
          <ShowcaseActions
            componentCode={`<${item.title.replace(/[^a-zA-Z]/g, '')} />`}
            jsxCode={`<LandingVariant type="${item.type}" />`}
            tailwindCode="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-soft)]"
            previewLabel="Preview Landing"
          />
        </div>
      </div>

      {item.type === 'minimal' && (
        <div className="grid grid-cols-[1.15fr_0.85fr] p-8">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">Minimal launch system</p>
            <h4 className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-[var(--text-strong)]">
              A clean OS for startups building serious software.
            </h4>
            <p className="max-w-2xl text-sm leading-8 text-[var(--text-soft)]">
              High-contrast hero, quiet typography and strong whitespace with trusted-by, CTA and lightweight product proofs.
            </p>
            <div className="flex gap-3">
              <Button variant="solid" tone="white">Get started</Button>
              <Button variant="ghost" tone="blue">View docs</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Linear', 'Northstar', 'Nova', 'Clerk'].map((brand) => (
                <span key={brand} className="rounded-full border border-[var(--border-soft)] px-3 py-1 text-xs text-[var(--text-muted)]">{brand}</span>
              ))}
            </div>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-6">
            <div className="grid gap-4">
              <HeroCard title="Feature proof" meta="Usage acceleration +32%" />
              <HeroCard title="Pricing teaser" meta="Enterprise ready tiers" />
              <HeroCard title="Trusted by" meta="160+ product teams" />
            </div>
          </div>
        </div>
      )}

      {item.type === 'enterprise' && (
        <div className="grid grid-cols-[0.95fr_1.05fr]">
          <div className="border-r border-[var(--border-soft)] bg-white p-10 text-black">
            <p className="text-xs uppercase tracking-[0.28em] text-black/45">Enterprise cloud</p>
            <h4 className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-black">
              Security, compliance and product velocity in one platform.
            </h4>
            <p className="mt-4 max-w-xl text-sm leading-8 text-black/70">
              White-side enterprise contrast, strong CTA, proof points, governance cards and procurement-friendly layout.
            </p>
            <div className="mt-6 flex gap-3">
              <Button variant="solid" tone="white">Talk to sales</Button>
              <Button variant="outline" tone="white">Security brief</Button>
            </div>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-2 gap-4">
              {['SOC2', 'SAML', 'SCIM', 'Audit trails'].map((item) => (
                <div key={item} className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
                  <p className="text-sm font-medium text-[var(--text-base)]">{item}</p>
                  <p className="mt-2 text-xs leading-6 text-[var(--text-muted)]">Enterprise trust block</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {item.type === 'ai' && (
        <div className="grid grid-cols-[1fr_340px]">
          <div className="p-8">
            <div className="rounded-[var(--radius-lg)] border border-[rgba(96,165,250,0.18)] bg-[linear-gradient(180deg,rgba(59,130,246,0.08),rgba(255,255,255,0.02))] p-8 shadow-[var(--shadow-glow-blue)]">
              <p className="text-xs uppercase tracking-[0.28em] text-[#bfdbfe]">AI workspace</p>
              <h4 className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-[var(--text-strong)]">
                Turn prompts into systems, not one-off outputs.
              </h4>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-[#dbeafe]">
                AI hero with prompt input, assistant panel, prompt history and workflow-focused CTA composition.
              </p>
              <div className="mt-6 rounded-[var(--radius-md)] bg-black/30 p-5 text-sm text-[#dbeafe]">
                Build a premium onboarding flow for a B2B AI workspace with team permissions and command palette access.
              </div>
            </div>
          </div>
          <aside className="border-l border-[var(--border-soft)] bg-[rgba(255,255,255,0.02)] p-6">
            <div className="space-y-3">
              {['AI assistant panels', 'Prompt history', 'Command center', 'Recent activity'].map((entry) => (
                <div key={entry} className="rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4 text-sm text-[var(--text-soft)]">{entry}</div>
              ))}
            </div>
          </aside>
        </div>
      )}

      {item.type === 'devtools' && (
        <div className="grid grid-cols-[220px_1fr] bg-[var(--bg-1)]">
          <aside className="border-r border-[var(--border-soft)] p-5 font-mono text-xs text-[var(--text-muted)]">
            {['landing.tsx', 'features.tsx', 'pricing.tsx', 'terminal.tsx', 'cta.tsx'].map((file, index) => (
              <div key={file} className={`rounded-[12px] px-3 py-2 ${index === 0 ? 'bg-[rgba(255,255,255,0.06)] text-[var(--text-base)]' : 'hover:bg-[rgba(255,255,255,0.04)]'}`}>{file}</div>
            ))}
          </aside>
          <div className="p-8">
            <div className="grid grid-cols-[1.1fr_0.9fr] gap-4">
              <div className="rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-black p-5">
                <div className="mb-4 flex items-center gap-3 text-sm text-[var(--text-soft)]">
                  <TerminalSquare className="h-4 w-4" />
                  Terminal preview
                </div>
                <pre className="font-mono text-xs leading-6 text-[#a1a1aa]">$ devaker launch workspace\n$ devaker sync schema\n$ devaker preview landing</pre>
              </div>
              <div className="grid gap-4">
                <HeroCard title="IDE preview" meta="Editor-first landing block" />
                <HeroCard title="Command palette showcase" meta="Search-driven navigation" />
              </div>
            </div>
          </div>
        </div>
      )}

      {item.type === 'finance' && (
        <div className="grid grid-cols-[0.9fr_1.1fr] p-8">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.28em] text-[#86efac]">Finance operations</p>
            <h4 className="text-5xl font-semibold tracking-[-0.06em] text-[var(--text-strong)]">
              Financial visibility designed for teams that move real money.
            </h4>
            <p className="max-w-xl text-sm leading-8 text-[var(--text-soft)]">
              Includes pricing, revenue analytics, billing cards, finance widgets and trust-heavy enterprise CTA.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <MetricTile label="ARR tracked" value="$4.2M" tone="green" />
            <MetricTile label="Payback" value="11 mo" tone="blue" />
            <MetricTile label="Collection rate" value="98.2%" tone="green" />
            <MetricTile label="Open invoices" value="18" tone="blue" />
          </div>
        </div>
      )}

      {item.type === 'analytics' && (
        <div className="p-8">
          <div className="grid grid-cols-[1.15fr_0.85fr] gap-6">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">Analytics showcase</p>
              <h4 className="text-5xl font-semibold tracking-[-0.06em] text-[var(--text-strong)]">See signals, not noise.</h4>
              <div className="grid grid-cols-3 gap-4">
                <MetricTile label="Sessions" value="940k" tone="blue" />
                <MetricTile label="Activation" value="41%" tone="green" />
                <MetricTile label="Expansion" value="+12%" tone="blue" />
              </div>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-6">
              <div className="h-48 rounded-[var(--radius-sm)] bg-[linear-gradient(180deg,rgba(59,130,246,0.16),transparent)]" />
              <div className="mt-4 space-y-2">
                <p className="text-sm text-[var(--text-base)]">Analytics CTA</p>
                <p className="text-xs leading-6 text-[var(--text-muted)]">Pair charts with product proof and case-study snippets.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {item.type === 'workspace' && (
        <div className="p-8">
          <div className="grid grid-cols-[1fr_320px] gap-6">
            <div className="grid grid-cols-2 gap-4">
              <HeroCard title="Workspace preview" meta="Shared projects, docs and copilots" />
              <HeroCard title="Team collaboration" meta="Recent activity and roles" />
              <HeroCard title="Plugin marketplace" meta="Discover extensions" />
              <HeroCard title="Notification center" meta="Stay aligned in context" />
            </div>
            <div className="rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-6">
              <p className="text-sm font-medium text-[var(--text-base)]">Workspace launcher</p>
              <div className="mt-4 space-y-3">
                {['Atlas', 'Foundry', 'Delta AI'].map((workspace) => (
                  <div key={workspace} className="rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm text-[var(--text-soft)]">{workspace}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {item.type === 'cloud' && (
        <div className="grid grid-cols-[0.85fr_1.15fr]">
          <div className="border-r border-[var(--border-soft)] p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">Infrastructure</p>
            <h4 className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-[var(--text-strong)]">
              Operate cloud systems with product-grade clarity.
            </h4>
            <p className="mt-4 text-sm leading-8 text-[var(--text-soft)]">
              Infra landing with status cards, realtime metrics, deployment pipeline and environment selector sections.
            </p>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-3 gap-4">
              {['Realtime status', 'Deploy pipeline', 'Environment selector'].map((item) => (
                <div key={item} className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
                  <p className="text-sm text-[var(--text-base)]">{item}</p>
                  <p className="mt-2 text-xs leading-6 text-[var(--text-muted)]">Cloud infra section</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {item.type === 'ide' && (
        <div className="grid grid-cols-[220px_1fr_280px] bg-black">
          <aside className="border-r border-[var(--border-soft)] p-5 font-mono text-xs text-[var(--text-muted)]">
            {['hero.tsx', 'bento.tsx', 'terminal.tsx', 'pricing.tsx', 'faq.tsx'].map((file) => (
              <div key={file} className="rounded-[12px] px-3 py-2 hover:bg-[rgba(255,255,255,0.04)]">{file}</div>
            ))}
          </aside>
          <div className="p-8">
            <div className="mb-4 flex gap-2">
              {['landing.tsx', 'command.tsx', 'editor.tsx'].map((tab, index) => (
                <div key={tab} className={`rounded-t-[12px] border px-3 py-2 text-xs font-mono ${index === 0 ? 'border-[var(--border-strong)] bg-[var(--bg-3)] text-[var(--text-base)]' : 'border-[var(--border-soft)] text-[var(--text-muted)]'}`}>{tab}</div>
              ))}
            </div>
            <div className="rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[var(--bg-2)] p-6">
              <p className="text-sm text-[var(--text-base)]">Advanced code preview</p>
              <pre className="mt-4 font-mono text-xs leading-6 text-[#a1a1aa]">export const hero = {'{'}\n  title: "Build, preview and ship",\n  command: "cmd+k",\n{'}'}</pre>
            </div>
          </div>
          <aside className="border-l border-[var(--border-soft)] p-6">
            <div className="space-y-3">
              {['Keyboard shortcuts helper', 'Floating command menu', 'Pinned tools'].map((entry) => (
                <div key={entry} className="rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4 text-sm text-[var(--text-soft)]">{entry}</div>
              ))}
            </div>
          </aside>
        </div>
      )}
    </Surface>
  )
}

function HeroCard({ title, meta }) {
  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
      <p className="text-sm font-medium text-[var(--text-base)]">{title}</p>
      <p className="mt-2 text-xs leading-6 text-[var(--text-muted)]">{meta}</p>
    </div>
  )
}

function MetricTile({ label, value, tone }) {
  return (
    <div className={`rounded-[var(--radius-md)] border p-5 ${
      tone === 'green'
        ? 'border-[rgba(52,211,153,0.18)] bg-[rgba(16,185,129,0.08)]'
        : 'border-[rgba(96,165,250,0.18)] bg-[rgba(59,130,246,0.08)]'
    }`}>
      <p className="text-sm text-[var(--text-soft)]">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">{value}</p>
    </div>
  )
}
