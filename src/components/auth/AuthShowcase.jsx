import {
  BriefcaseBusiness,
  BrainCircuit,
  Building2,
  Code2,
  Globe,
  LockKeyhole,
  MonitorCog,
  PanelsTopLeft,
  Shield,
  Sparkles,
  TerminalSquare,
  Workflow,
} from 'lucide-react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { ShowcaseActions } from '../ui/ShowcaseActions'
import { SectionHeader } from '../ui/SectionHeader'
import { Surface } from '../ui/Surface'

const authVariants = [
  { title: 'Centered auth', layout: 'centered', icon: Shield, variant: 'panel' },
  { title: 'Split screen', layout: 'split', icon: Sparkles, variant: 'glass' },
  { title: 'Floating auth', layout: 'floating', icon: Workflow, variant: 'panel' },
  { title: 'Glass auth', layout: 'glass', icon: Sparkles, variant: 'glass' },
  { title: 'Enterprise auth', layout: 'enterprise', icon: Building2, variant: 'contrast' },
  { title: 'Branding sidebar', layout: 'branding', icon: PanelsTopLeft, variant: 'panel' },
  { title: 'Extreme minimal', layout: 'minimal', icon: LockKeyhole, variant: 'panel' },
  { title: 'AI SaaS auth', layout: 'ai', icon: BrainCircuit, variant: 'glass' },
  { title: 'Dashboard auth', layout: 'dashboard', icon: MonitorCog, variant: 'panel' },
  { title: 'IDE auth', layout: 'ide', icon: TerminalSquare, variant: 'panel' },
  { title: 'Finance auth', layout: 'finance', icon: Building2, variant: 'glass' },
  { title: 'Workspace auth', layout: 'workspace', icon: Workflow, variant: 'panel' },
]

const socialSets = [
  { title: 'Premium social buttons', style: 'solid' },
  { title: 'Minimal social buttons', style: 'ghost' },
  { title: 'Outline social buttons', style: 'outline' },
  { title: 'Icon-only social buttons', style: 'icon' },
  { title: 'Grouped social buttons', style: 'grouped' },
]

const socials = [
  { label: 'GitHub', icon: Code2 },
  { label: 'Google', icon: Globe },
  { label: 'Discord', icon: Workflow },
  { label: 'LinkedIn', icon: BriefcaseBusiness },
]

const registerVariants = [
  'Register minimal',
  'Register split layout',
  'Register enterprise',
  'Register glass',
  'Register floating card',
  'Onboarding workspace UI',
  'Onboarding wizard',
  'Multi-step auth',
  'Auth with preview lateral',
  'Auth with dashboard preview',
  'Auth with IDE preview',
  'Auth with analytics preview',
]

export function AuthShowcase() {
  return (
    <div className="space-y-8">
      <Surface variant="panel" className="p-6">
        <SectionHeader
          eyebrow="Auth"
          title="Auth expandido com layouts realmente diferentes"
          description="A variacao aqui vem de composicao, densidade, branding lateral, preview de sistema, blocos de atividade, shell de IDE e contextos enterprise."
        />
        <div className="mt-5">
          <ShowcaseActions
            componentCode="<WorkspaceAuth />"
            jsxCode="<AuthShowcase />"
            tailwindCode="grid grid-cols-[1fr_0.92fr] overflow-hidden rounded-[var(--radius-md)]"
            previewLabel="Preview Auth"
          />
        </div>
      </Surface>

      <Surface variant="glass" className="p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.04em]">Social auth patterns</h3>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--text-soft)]">
              GitHub, Google, Discord and LinkedIn rendered in multiple interaction styles for product, enterprise and devtool flows.
            </p>
          </div>
          <ShowcaseActions
            componentCode="<SocialButton provider='github' />"
            jsxCode="<SocialAuthRow />"
            tailwindCode="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border px-4 py-3"
            previewLabel="Preview Social"
          />
        </div>
        <div className="grid grid-cols-5 gap-4">
          {socialSets.map((set) => (
            <div key={set.title} className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4">
              <p className="mb-3 text-sm font-medium text-[var(--text-base)]">{set.title}</p>
              <div className="space-y-2">
                {set.style === 'icon' ? (
                  <div className="flex gap-2">
                    {socials.map((social) => {
                      const Icon = social.icon
                      return (
                        <button key={social.label} className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.04)] text-[var(--text-soft)]">
                          <Icon className="h-4 w-4" />
                        </button>
                      )
                    })}
                  </div>
                ) : set.style === 'grouped' ? (
                  <div className="flex overflow-hidden rounded-[14px] border border-[var(--border-soft)]">
                    {socials.slice(0, 2).map((social) => {
                      const Icon = social.icon
                      return (
                        <button key={social.label} className="flex flex-1 items-center justify-center gap-2 border-r border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-3 py-3 text-sm text-[var(--text-soft)] last:border-r-0">
                          <Icon className="h-4 w-4" />
                          {social.label}
                        </button>
                      )
                    })}
                  </div>
                ) : (
                  socials.map((social) => {
                    const Icon = social.icon
                    return (
                      <button
                        key={social.label}
                        className={`flex w-full items-center justify-center gap-2 rounded-[14px] border px-3 py-3 text-sm ${
                          set.style === 'solid'
                            ? 'border-[var(--border-strong)] bg-white text-black'
                            : set.style === 'outline'
                              ? 'border-[var(--border-strong)] bg-transparent text-[var(--text-base)]'
                              : 'border-transparent bg-transparent text-[var(--text-soft)] hover:bg-[rgba(255,255,255,0.04)]'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {social.label}
                      </button>
                    )
                  })
                )}
              </div>
            </div>
          ))}
        </div>
      </Surface>

      <div className="grid grid-cols-2 gap-6">
        {authVariants.map((item) => (
          <AuthVariant key={item.title} item={item} />
        ))}
      </div>

      <Surface variant="panel" className="p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">Register, onboarding and workspace flows</h3>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-[var(--text-soft)]">
              Added register pages, onboarding wizard, welcome screens, workspace creation, invite team flow, profile setup, environment setup and project creation variants.
            </p>
          </div>
          <ShowcaseActions
            componentCode="<RegisterSplitLayout />"
            jsxCode="<RegisterFlowGrid />"
            tailwindCode="grid gap-4 rounded-[var(--radius-md)] border border-[var(--border-soft)]"
            previewLabel="Preview Register"
          />
        </div>
        <div className="grid grid-cols-3 gap-6">
          {registerVariants.map((title, index) => (
            <RegisterVariant key={title} title={title} index={index} />
          ))}
        </div>
      </Surface>
    </div>
  )
}

function AuthVariant({ item }) {
  const Icon = item.icon

  return (
    <Surface variant={item.variant} className={`overflow-hidden p-0 ${item.layout === 'enterprise' || item.layout === 'workspace' ? 'col-span-2' : ''}`}>
      {item.layout === 'centered' && (
        <div className="p-8">
          <TopMeta Icon={Icon} title={item.title} />
          <div className="mx-auto mt-8 max-w-md space-y-4 text-center">
            <h3 className="text-3xl font-semibold tracking-[-0.04em]">Welcome back</h3>
            <p className="text-sm leading-7 text-[var(--text-soft)]">Focused center stack with zero distractions and strong contrast.</p>
            <AuthFields />
          </div>
        </div>
      )}

      {item.layout === 'split' && (
        <div className="grid grid-cols-[1fr_0.9fr]">
          <div className="devui-grid border-r border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(59,130,246,0.1),rgba(255,255,255,0.02))] p-8">
            <TopMeta Icon={Icon} title={item.title} />
            <div className="mt-10 max-w-sm">
              <h3 className="text-4xl font-semibold tracking-[-0.05em]">Secure AI shipping for modern teams.</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">Large branding panel plus focused auth workspace.</p>
            </div>
          </div>
          <div className="flex items-center p-8">
            <div className="w-full"><AuthFields /></div>
          </div>
        </div>
      )}

      {item.layout === 'floating' && (
        <div className="relative bg-[linear-gradient(180deg,var(--bg-2),var(--bg-0))] p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_35%)]" />
          <div className="relative">
            <TopMeta Icon={Icon} title={item.title} />
            <div className="mx-auto mt-10 max-w-md rounded-[var(--radius-lg)] border border-[var(--border-strong)] bg-black/70 p-6 shadow-[var(--shadow-float)] backdrop-blur-xl">
              <AuthFields />
            </div>
          </div>
        </div>
      )}

      {item.layout === 'glass' && (
        <div className="grid grid-cols-[0.85fr_1.15fr]">
          <div className="border-r border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-8">
            <TopMeta Icon={Icon} title={item.title} />
            <div className="mt-8 space-y-3">
              <div className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.04)] p-4">
                <p className="text-sm text-[var(--text-soft)]">Team trust</p>
              </div>
              <div className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.04)] p-4">
                <p className="text-sm text-[var(--text-soft)]">Enterprise audit</p>
              </div>
            </div>
          </div>
          <div className="p-8 backdrop-blur-xl">
            <AuthFields />
          </div>
        </div>
      )}

      {item.layout === 'enterprise' && (
        <div className="grid grid-cols-[0.9fr_1.1fr]">
          <div className="border-r border-black/8 bg-white p-10 text-black">
            <TopMeta Icon={Icon} title={item.title} dark={false} />
            <h3 className="mt-10 text-4xl font-semibold tracking-[-0.05em] text-black">Identity for regulated teams.</h3>
            <p className="mt-4 text-sm leading-7 text-black/70">High contrast auth shell inspired by premium enterprise products.</p>
            <div className="mt-8 grid gap-3">
              {['SAML', 'Audit trails', 'SCIM sync'].map((text) => (
                <div key={text} className="rounded-[14px] border border-black/10 bg-black/[0.03] px-4 py-3 text-sm">{text}</div>
              ))}
            </div>
          </div>
          <div className="bg-[var(--bg-1)] p-10">
            <AuthFields enterprise />
          </div>
        </div>
      )}

      {item.layout === 'branding' && (
        <div className="grid grid-cols-[240px_1fr]">
          <aside className="border-r border-[var(--border-soft)] bg-[rgba(255,255,255,0.02)] p-6">
            <TopMeta Icon={Icon} title={item.title} />
            <div className="mt-8 space-y-2">
              {['Brand story', 'Capabilities', 'Case studies', 'Security'].map((entry, index) => (
                <div key={entry} className={`rounded-[14px] px-3 py-2 text-sm ${index === 0 ? 'bg-[rgba(255,255,255,0.06)] text-[var(--text-strong)]' : 'text-[var(--text-soft)]'}`}>{entry}</div>
              ))}
            </div>
          </aside>
          <div className="p-8">
            <AuthFields />
          </div>
        </div>
      )}

      {item.layout === 'minimal' && (
        <div className="p-12">
          <div className="mx-auto max-w-sm space-y-6">
            <div className="text-center">
              <TopMeta Icon={Icon} title={item.title} centered />
              <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">One column, low chrome, strong typography.</p>
            </div>
            <AuthFields minimal />
          </div>
        </div>
      )}

      {item.layout === 'ai' && (
        <div className="grid grid-cols-[1fr_320px]">
          <div className="p-8">
            <TopMeta Icon={Icon} title={item.title} />
            <div className="mt-8 grid gap-4 rounded-[var(--radius-lg)] border border-[rgba(96,165,250,0.18)] bg-[rgba(59,130,246,0.08)] p-6 shadow-[var(--shadow-glow-blue)]">
              <p className="text-sm uppercase tracking-[0.24em] text-[#bfdbfe]">AI workspace access</p>
              <AuthFields />
            </div>
          </div>
          <aside className="border-l border-[var(--border-soft)] bg-[rgba(255,255,255,0.02)] p-6">
            <div className="space-y-3">
              {['Prompt history', 'Recent agents', 'Pinned copilots'].map((entry) => (
                <div key={entry} className="rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4 text-sm text-[var(--text-soft)]">{entry}</div>
              ))}
            </div>
          </aside>
        </div>
      )}

      {item.layout === 'dashboard' && (
        <div className="grid grid-cols-[220px_1fr]">
          <aside className="border-r border-[var(--border-soft)] bg-[rgba(255,255,255,0.02)] p-6">
            <TopMeta Icon={Icon} title={item.title} />
            <div className="mt-8 grid gap-2">
              {['Overview', 'Signals', 'Members'].map((entry) => (
                <div key={entry} className="rounded-[14px] border border-[var(--border-soft)] px-3 py-2 text-sm text-[var(--text-soft)]">{entry}</div>
              ))}
            </div>
          </aside>
          <div className="p-8">
            <div className="mb-6 grid grid-cols-3 gap-3">
              {['Runs', 'Nodes', 'Seats'].map((entry) => (
                <div key={entry} className="rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4 text-sm text-[var(--text-soft)]">{entry}</div>
              ))}
            </div>
            <AuthFields />
          </div>
        </div>
      )}

      {item.layout === 'ide' && (
        <div className="grid grid-cols-[220px_1fr] bg-black">
          <aside className="border-r border-[var(--border-soft)] bg-[var(--bg-2)] p-5">
            <TopMeta Icon={Icon} title={item.title} />
            <div className="mt-8 space-y-2 font-mono text-xs text-[var(--text-muted)]">
              {['src/', 'auth/', 'config.ts', 'tokens.ts', 'README.md'].map((entry) => (
                <div key={entry} className="rounded-[12px] px-3 py-2 hover:bg-[rgba(255,255,255,0.04)]">{entry}</div>
              ))}
            </div>
          </aside>
          <div className="p-8">
            <div className="mb-4 flex gap-2">
              {['login.tsx', 'social.tsx', 'providers.ts'].map((entry, index) => (
                <div key={entry} className={`rounded-t-[12px] border px-3 py-2 text-xs font-mono ${index === 0 ? 'border-[var(--border-strong)] bg-[var(--bg-3)] text-[var(--text-base)]' : 'border-[var(--border-soft)] text-[var(--text-muted)]'}`}>{entry}</div>
              ))}
            </div>
            <div className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[var(--bg-2)] p-5">
              <AuthFields minimal />
            </div>
          </div>
        </div>
      )}

      {item.layout === 'finance' && (
        <div className="grid grid-cols-[0.95fr_1.05fr]">
          <div className="border-r border-[var(--border-soft)] p-8">
            <TopMeta Icon={Icon} title={item.title} />
            <div className="mt-8 rounded-[var(--radius-lg)] border border-[rgba(52,211,153,0.18)] bg-[rgba(16,185,129,0.08)] p-6 shadow-[var(--shadow-glow-green)]">
              <p className="text-sm text-[#d1fae5]">Capital operations and secure treasury workflows.</p>
            </div>
          </div>
          <div className="p-8">
            <AuthFields enterprise />
          </div>
        </div>
      )}

      {item.layout === 'workspace' && (
        <div className="grid grid-cols-[1.05fr_0.95fr]">
          <div className="p-8">
            <TopMeta Icon={Icon} title={item.title} />
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
                <p className="text-sm text-[var(--text-base)]">Recent activity</p>
                <div className="mt-4 space-y-2">
                  {['Deployed auth flow', 'Updated seats', 'Invited finance'].map((entry) => (
                    <div key={entry} className="text-sm text-[var(--text-muted)]">{entry}</div>
                  ))}
                </div>
              </div>
              <div className="rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
                <p className="text-sm text-[var(--text-base)]">Workspace preview</p>
                <div className="mt-4 grid gap-2">
                  <div className="h-10 rounded-[12px] bg-[rgba(255,255,255,0.04)]" />
                  <div className="h-16 rounded-[12px] bg-[rgba(255,255,255,0.04)]" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-l border-[var(--border-soft)] p-8">
            <AuthFields />
          </div>
        </div>
      )}
    </Surface>
  )
}

function TopMeta({ Icon, title, dark = true, centered = false }) {
  return (
    <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
      <div className={`flex h-11 w-11 items-center justify-center rounded-[16px] border ${dark ? 'border-[var(--border-soft)] bg-[rgba(255,255,255,0.04)]' : 'border-black/10 bg-black/[0.04]'}`}>
        <Icon className={`h-5 w-5 ${dark ? 'text-[var(--text-base)]' : 'text-black/70'}`} />
      </div>
      <div>
        <p className={`text-sm font-medium ${dark ? 'text-[var(--text-base)]' : 'text-black'}`}>{title}</p>
        <p className={`text-sm ${dark ? 'text-[var(--text-muted)]' : 'text-black/55'}`}>Premium auth pattern</p>
      </div>
    </div>
  )
}

function AuthFields({ enterprise = false, minimal = false }) {
  return (
    <div className={`space-y-4 ${minimal ? 'space-y-3' : ''}`}>
      <Input appearance={enterprise ? 'default' : 'elevated'} label="Email" placeholder="team@devaker.ai" />
      <Input appearance={enterprise ? 'default' : 'elevated'} label="Password" placeholder="********" />
      <Button variant="solid" tone={enterprise ? 'white' : 'blue'} fullWidth>
        Continue
      </Button>
      <Button variant="outline" tone="white" fullWidth leftIcon={Code2}>
        Continue with GitHub
      </Button>
      <div className="grid grid-cols-3 gap-2">
        <Button variant="ghost" tone="white"><Globe className="h-4 w-4" /></Button>
        <Button variant="ghost" tone="white"><Workflow className="h-4 w-4" /></Button>
        <Button variant="ghost" tone="white"><BriefcaseBusiness className="h-4 w-4" /></Button>
      </div>
    </div>
  )
}

function RegisterVariant({ title, index }) {
  return (
    <Surface variant={index % 2 === 0 ? 'panel' : 'glass'} className="overflow-hidden p-0">
      {index === 0 && (
        <div className="p-6">
          <p className="text-sm font-medium text-[var(--text-base)]">{title}</p>
          <div className="mt-4 space-y-3">
            <Input appearance="elevated" label="Full name" placeholder="Olivia Stone" />
            <Input appearance="elevated" label="Email" placeholder="olivia@company.com" />
            <Button variant="solid" tone="blue" fullWidth>Create account</Button>
          </div>
        </div>
      )}
      {index === 1 && (
        <div className="grid grid-cols-[0.9fr_1.1fr]">
          <div className="devui-grid border-r border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(59,130,246,0.08),rgba(255,255,255,0.02))] p-6">
            <p className="text-lg font-semibold text-[var(--text-strong)]">{title}</p>
            <p className="mt-2 text-sm text-[var(--text-soft)]">Brand, trust and product proof.</p>
          </div>
          <div className="p-6">
            <Input appearance="default" label="Workspace" placeholder="Foundry" />
            <div className="mt-4"><Button variant="solid" tone="white" fullWidth>Continue</Button></div>
          </div>
        </div>
      )}
      {index === 2 && (
        <div className="grid grid-cols-[1fr_0.85fr]">
          <div className="border-r border-black/8 bg-white p-6 text-black">
            <p className="text-lg font-semibold text-black">{title}</p>
            <p className="mt-2 text-sm text-black/65">Enterprise registration and procurement-ready onboarding.</p>
          </div>
          <div className="p-6">
            <Input appearance="default" label="Organization" placeholder="Northstar Capital" />
            <div className="mt-4"><Button variant="solid" tone="blue" fullWidth>Request access</Button></div>
          </div>
        </div>
      )}
      {index === 3 && (
        <div className="p-6 backdrop-blur-xl">
          <p className="text-lg font-semibold text-[var(--text-strong)]">{title}</p>
          <div className="mt-4 grid gap-3">
            <Input appearance="glass" label="Email" placeholder="hello@startup.ai" />
            <Input appearance="glass" label="Password" placeholder="********" />
          </div>
        </div>
      )}
      {index === 4 && (
        <div className="bg-[linear-gradient(180deg,var(--bg-2),var(--bg-0))] p-6">
          <div className="mx-auto max-w-sm rounded-[var(--radius-lg)] border border-[var(--border-strong)] bg-black/70 p-5 shadow-[var(--shadow-float)]">
            <p className="text-lg font-semibold text-[var(--text-strong)]">{title}</p>
            <div className="mt-4"><Button variant="solid" tone="white" fullWidth>Start setup</Button></div>
          </div>
        </div>
      )}
      {index === 5 && (
        <div className="p-6">
          <p className="text-lg font-semibold text-[var(--text-strong)]">{title}</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {['Workspace name', 'Team size', 'Permissions', 'Integrations'].map((item) => (
              <div key={item} className="rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4 text-sm text-[var(--text-soft)]">{item}</div>
            ))}
          </div>
        </div>
      )}
      {index === 6 && (
        <div className="p-6">
          <p className="text-lg font-semibold text-[var(--text-strong)]">{title}</p>
          <div className="mt-4 h-2 rounded-full bg-[rgba(255,255,255,0.06)]"><div className="h-full w-2/3 rounded-full bg-[#3b82f6]" /></div>
          <div className="mt-4 grid gap-3">
            {['Profile', 'Workspace', 'Invite team'].map((step, stepIndex) => (
              <div key={step} className={`rounded-[14px] border px-4 py-3 text-sm ${stepIndex === 1 ? 'border-[rgba(96,165,250,0.22)] bg-[rgba(59,130,246,0.08)] text-[#dbeafe]' : 'border-[var(--border-soft)] text-[var(--text-soft)]'}`}>{step}</div>
            ))}
          </div>
        </div>
      )}
      {index === 7 && (
        <div className="grid grid-cols-3">
          {['Identity', 'Workspace', 'Project'].map((step, stepIndex) => (
            <div key={step} className={`p-5 ${stepIndex < 2 ? 'border-r border-[var(--border-soft)]' : ''}`}>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">Step {stepIndex + 1}</p>
              <p className="mt-3 text-sm text-[var(--text-base)]">{step}</p>
            </div>
          ))}
        </div>
      )}
      {index === 8 && (
        <div className="grid grid-cols-[0.8fr_1.2fr]">
          <div className="border-r border-[var(--border-soft)] p-6">
            <p className="text-lg font-semibold text-[var(--text-strong)]">{title}</p>
            <p className="mt-2 text-sm text-[var(--text-soft)]">Preview lateral with product story.</p>
          </div>
          <div className="p-6">
            <div className="h-28 rounded-[var(--radius-md)] bg-[rgba(255,255,255,0.04)]" />
          </div>
        </div>
      )}
      {index === 9 && (
        <div className="grid grid-cols-[220px_1fr]">
          <div className="border-r border-[var(--border-soft)] bg-[rgba(255,255,255,0.02)] p-5">
            <p className="text-sm text-[var(--text-base)]">Workspace KPIs</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-3 gap-3">
              {['Runs', 'Members', 'Health'].map((item) => (
                <div key={item} className="rounded-[14px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4 text-sm text-[var(--text-soft)]">{item}</div>
              ))}
            </div>
          </div>
        </div>
      )}
      {index === 10 && (
        <div className="grid grid-cols-[220px_1fr] bg-black">
          <div className="border-r border-[var(--border-soft)] p-5 font-mono text-xs text-[var(--text-muted)]">
            {['register.tsx', 'onboarding.tsx', 'workspace.tsx'].map((entry) => (
              <div key={entry} className="rounded-[12px] px-3 py-2 hover:bg-[rgba(255,255,255,0.04)]">{entry}</div>
            ))}
          </div>
          <div className="p-6">
            <pre className="font-mono text-xs leading-6 text-[#a1a1aa]">const setup = {'{'} workspace: "atlas", env: "prod" {'}'}</pre>
          </div>
        </div>
      )}
      {index === 11 && (
        <div className="p-6">
          <p className="text-lg font-semibold text-[var(--text-strong)]">{title}</p>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-[var(--radius-sm)] border border-[rgba(96,165,250,0.18)] bg-[rgba(59,130,246,0.08)] p-4 shadow-[var(--shadow-glow-blue)]">
              <p className="text-sm text-[#dbeafe]">Analytics preview</p>
            </div>
            <div className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4 text-sm text-[var(--text-soft)]">
              Invite team, create organization and setup environment.
            </div>
          </div>
        </div>
      )}
    </Surface>
  )
}
