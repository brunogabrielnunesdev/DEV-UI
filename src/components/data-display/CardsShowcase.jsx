import { Activity, AppWindowMac, BadgeDollarSign, Boxes, Bot, ChartNoAxesCombined, CloudCog, FolderGit2, PlugZap, Rocket, UserRound, Users } from 'lucide-react'
import { Button } from '../ui/Button'
import { ShowcaseActions } from '../ui/ShowcaseActions'
import { SectionHeader } from '../ui/SectionHeader'
import { Surface } from '../ui/Surface'

const cards = [
  { title: 'Feature card', icon: AppWindowMac },
  { title: 'Stats card', icon: ChartNoAxesCombined },
  { title: 'Pricing card', icon: BadgeDollarSign },
  { title: 'Integration card', icon: PlugZap },
  { title: 'Dashboard widget', icon: Boxes },
  { title: 'Glass card', icon: Boxes },
  { title: 'Spotlight hover card', icon: Activity },
  { title: 'Metric card', icon: ChartNoAxesCombined },
  { title: 'Activity card', icon: UserRound },
]

const expansionCards = [
  { title: 'Workspace card', icon: Boxes, meta: 'Shared copilots and docs' },
  { title: 'Project card', icon: FolderGit2, meta: 'Release pipeline and notes' },
  { title: 'Team card', icon: Users, meta: 'Members, roles and async reviews' },
  { title: 'Cloud infra card', icon: CloudCog, meta: 'Node health and scale zones' },
  { title: 'Deployment pipeline', icon: Rocket, meta: 'Build, verify and ship' },
  { title: 'AI assistant panel', icon: Bot, meta: 'Prompt history and actions' },
]

export function CardsShowcase() {
  return (
    <div className="space-y-8">
      <Surface variant="panel" className="p-6">
        <SectionHeader
          eyebrow="Cards"
          title="Cards com profundidade, hover elegante e spacing premium"
          description="Cada card aqui parece parte do mesmo produto, sem cair em repeticao superficial de borda e cor."
        />
        <div className="mt-5">
          <ShowcaseActions
            componentCode="<FeatureCard title='AI workflows' />"
            jsxCode="<CardsShowcase />"
            tailwindCode="group p-6 transition-all duration-[var(--motion-base)] hover:-translate-y-1"
            previewLabel="Preview Cards"
          />
        </div>
      </Surface>

      <div className="grid grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon
          return (
            <Surface
              key={card.title}
              variant={index % 3 === 1 ? 'glass' : 'panel'}
              className="group p-6 transition-all duration-[var(--motion-base)] hover:-translate-y-1 hover:border-[var(--border-strong)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-[18px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.04)] text-[var(--text-base)] transition-all group-hover:shadow-[var(--shadow-glow-blue)]">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">Card</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em]">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                Reusable surface para AI tools, enterprise dashboards e workflows com hierarquia limpa.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="h-12 rounded-[var(--radius-sm)] bg-[rgba(255,255,255,0.03)]" />
                <div className="h-12 rounded-[var(--radius-sm)] bg-[rgba(255,255,255,0.03)]" />
                <div className="h-12 rounded-[var(--radius-sm)] bg-[rgba(255,255,255,0.03)]" />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-[var(--text-muted)]">Updated 2m ago</span>
                <Button variant="ghost" tone="white">Open</Button>
              </div>
            </Surface>
          )
        })}
      </div>

      <Surface variant="glass" className="p-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">Expanded card families</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
              New card structures for workspace launchers, team collaboration, cloud infra, deployments and AI panels.
            </p>
          </div>
          <ShowcaseActions
            componentCode="<WorkspaceCard />"
            jsxCode="<ExpandedCards />"
            tailwindCode="grid gap-4 rounded-[var(--radius-md)] border border-[var(--border-soft)]"
            previewLabel="Preview Expanded"
          />
        </div>
        <div className="grid grid-cols-3 gap-6">
          {expansionCards.map((card, index) => {
            const Icon = card.icon

            return (
              <Surface key={card.title} variant={index % 2 === 0 ? 'panel' : 'glass'} className="overflow-hidden p-0">
                {index === 0 && (
                  <div className="p-6">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-[18px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.04)]">
                        <Icon className="h-5 w-5 text-[var(--text-base)]" />
                      </div>
                      <span className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">Workspace</span>
                    </div>
                    <h4 className="text-xl font-semibold tracking-[-0.03em] text-[var(--text-strong)]">{card.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">{card.meta}</p>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <MiniPill text="Recent activity" />
                      <MiniPill text="Environment selector" />
                    </div>
                  </div>
                )}

                {index === 1 && (
                  <div className="grid grid-cols-[0.72fr_1fr]">
                    <div className="border-r border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
                      <Icon className="h-5 w-5 text-[var(--text-base)]" />
                      <p className="mt-4 text-sm font-medium text-[var(--text-base)]">{card.title}</p>
                    </div>
                    <div className="p-5">
                      <p className="text-sm leading-7 text-[var(--text-soft)]">{card.meta}</p>
                      <div className="mt-4 h-20 rounded-[var(--radius-sm)] bg-[rgba(255,255,255,0.04)]" />
                    </div>
                  </div>
                )}

                {index === 2 && (
                  <div className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[rgba(255,255,255,0.04)]">
                        <Icon className="h-5 w-5 text-[var(--text-base)]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--text-strong)]">{card.title}</h4>
                        <p className="text-sm text-[var(--text-muted)]">{card.meta}</p>
                      </div>
                    </div>
                    <div className="mt-5 flex gap-2">
                      <MiniPill text="12 members" />
                      <MiniPill text="4 roles" />
                    </div>
                  </div>
                )}

                {index === 3 && (
                  <div className="p-6">
                    <div className="rounded-[var(--radius-lg)] border border-[rgba(96,165,250,0.18)] bg-[rgba(59,130,246,0.08)] p-5 shadow-[var(--shadow-glow-blue)]">
                      <div className="flex items-center justify-between">
                        <Icon className="h-5 w-5 text-[#dbeafe]" />
                        <span className="text-xs uppercase tracking-[0.24em] text-[#bfdbfe]">Cloud</span>
                      </div>
                      <p className="mt-4 text-lg font-semibold text-[var(--text-strong)]">{card.title}</p>
                      <p className="mt-2 text-sm text-[#dbeafe]">{card.meta}</p>
                    </div>
                  </div>
                )}

                {index === 4 && (
                  <div className="grid grid-cols-3">
                    {['Build', 'Verify', 'Ship'].map((step, stepIndex) => (
                      <div key={step} className={`p-5 ${stepIndex < 2 ? 'border-r border-[var(--border-soft)]' : ''}`}>
                        <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">{step}</p>
                        <div className="mt-4 h-10 rounded-[12px] bg-[rgba(255,255,255,0.04)]" />
                      </div>
                    ))}
                  </div>
                )}

                {index === 5 && (
                  <div className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <Icon className="h-5 w-5 text-[#dbeafe]" />
                      <p className="text-sm font-medium text-[var(--text-base)]">{card.title}</p>
                    </div>
                    <div className="rounded-[var(--radius-sm)] bg-[rgba(59,130,246,0.08)] p-4 text-sm text-[#dbeafe]">
                      Suggest a rollout plan for the workspace auth expansion and create copy-ready components.
                    </div>
                    <div className="mt-4 grid gap-2">
                      <MiniPill text="Prompt history" />
                      <MiniPill text="Quick actions" />
                    </div>
                  </div>
                )}
              </Surface>
            )
          })}
        </div>
      </Surface>
    </div>
  )
}

function MiniPill({ text }) {
  return (
    <span className="rounded-full border border-[var(--border-soft)] px-3 py-1.5 text-xs text-[var(--text-muted)]">
      {text}
    </span>
  )
}
