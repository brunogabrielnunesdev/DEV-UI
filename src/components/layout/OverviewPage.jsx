import { Badge } from '../ui/Badge'
import { ShowcaseActions } from '../ui/ShowcaseActions'
import { SectionHeader } from '../ui/SectionHeader'
import { Surface } from '../ui/Surface'

const palette = [
  '#000000',
  '#050505',
  '#0A0A0A',
  '#111111',
  '#18181B',
  '#2563EB',
  '#3B82F6',
  '#60A5FA',
  '#10B981',
  '#34D399',
]

export function OverviewPage() {
  return (
    <div className="space-y-8">
      <Surface variant="panel" className="overflow-hidden p-8">
        <div className="devui-grid rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[linear-gradient(135deg,rgba(255,255,255,0.03),rgba(37,99,235,0.08),transparent)] p-8">
          <div className="max-w-4xl space-y-5">
            <Badge tone="blue">Overview</Badge>
            <h2 className="text-6xl font-semibold tracking-[-0.06em] text-[var(--text-strong)]">
              Dark-first design system para SaaS, enterprise tooling e produtos AI modernos.
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-[var(--text-soft)]">
              DevUI agora funciona como uma library/documentation app real: identidade visual unificada,
              tokens consistentes, componentes com respiracao e padroes prontos para dashboard, auth e devtools.
            </p>
            <ShowcaseActions
              componentCode="<OverviewHero />"
              jsxCode="<OverviewPage />"
              tailwindCode="devui-grid rounded-[var(--radius-lg)] border border-[var(--border-soft)]"
              previewLabel="Preview Overview"
            />
          </div>
        </div>
      </Surface>

      <div className="grid grid-cols-[1.2fr_0.8fr] gap-6">
        <Surface variant="panel" className="p-6">
          <SectionHeader
            eyebrow="Foundation"
            title="Core previews"
            description="Paleta, tipografia, spacing, shadows e states organizados como um ecossistema visual unico."
          />
          <div className="mt-6 grid grid-cols-3 gap-4">
            {['Buttons', 'Inputs', 'Cards', 'Navigation', 'Dashboard', 'DevTools'].map((item) => (
              <div key={item} className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4">
                <p className="text-sm font-medium text-[var(--text-base)]">{item}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">Reusable premium pattern</p>
              </div>
            ))}
          </div>
        </Surface>

        <Surface variant="glass" className="p-6">
          <SectionHeader
            eyebrow="States"
            title="State preview"
            description="Visual hierarchy para info, success, muted e high-contrast blocks."
          />
          <div className="mt-6 space-y-3">
            <div className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4 text-sm text-[var(--text-soft)]">Default surface</div>
            <div className="rounded-[var(--radius-sm)] border border-[rgba(96,165,250,0.24)] bg-[rgba(59,130,246,0.12)] p-4 text-sm text-[#dbeafe]">Focus / primary state</div>
            <div className="rounded-[var(--radius-sm)] border border-[rgba(52,211,153,0.24)] bg-[rgba(16,185,129,0.12)] p-4 text-sm text-[#d1fae5]">Success / healthy state</div>
            <div className="rounded-[var(--radius-sm)] border border-white bg-white p-4 text-sm text-black">High contrast state</div>
          </div>
        </Surface>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <Surface variant="panel" className="p-6">
          <SectionHeader eyebrow="Palette" title="Color system" description="Preto profundo, branco forte, accent tech e success emerald." />
          <div className="mt-6 grid grid-cols-2 gap-3">
            {palette.map((color) => (
              <div key={color} className="space-y-2">
                <div className="h-16 rounded-[var(--radius-sm)] border border-[var(--border-soft)]" style={{ background: color }} />
                <p className="text-xs text-[var(--text-muted)]">{color}</p>
              </div>
            ))}
          </div>
        </Surface>

        <Surface variant="panel" className="p-6">
          <SectionHeader eyebrow="Typography" title="Hierarchy" description="Headings fortes, body limpo, tracking moderno." />
          <div className="mt-6 space-y-4">
            <h2 className="text-4xl font-semibold tracking-[-0.05em]">Display 48</h2>
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-base)]">Section 24</h3>
            <p className="text-base leading-7 text-[var(--text-soft)]">Body copy premium for real SaaS docs and product shells.</p>
            <p className="text-sm uppercase tracking-[0.32em] text-[var(--text-muted)]">Label / Eyebrow</p>
          </div>
        </Surface>

        <Surface variant="panel" className="p-6">
          <SectionHeader eyebrow="Spacing" title="Breathing room" description="Padding generoso, blocos soltos e leitura calma." />
          <div className="mt-6 space-y-3">
            {[14, 18, 24, 32, 40].map((size) => (
              <div key={size} className="flex items-center gap-3">
                <div className="rounded-full bg-[rgba(255,255,255,0.08)]" style={{ width: size * 3, height: 10 }} />
                <span className="text-sm text-[var(--text-muted)]">{size}px scale</span>
              </div>
            ))}
          </div>
        </Surface>

        <Surface variant="panel" className="p-6">
          <SectionHeader eyebrow="Shadows" title="Depth" description="Sombras leves, glow sutil e contraste controlado." />
          <div className="mt-6 grid gap-4">
            <div className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[var(--bg-4)] p-4 shadow-[var(--shadow-panel)] text-sm text-[var(--text-soft)]">Panel shadow</div>
            <div className="rounded-[var(--radius-sm)] border border-[rgba(96,165,250,0.18)] bg-[var(--bg-3)] p-4 shadow-[var(--shadow-glow-blue)] text-sm text-[#dbeafe]">Blue glow</div>
            <div className="rounded-[var(--radius-sm)] border border-[rgba(52,211,153,0.18)] bg-[var(--bg-3)] p-4 shadow-[var(--shadow-glow-green)] text-sm text-[#d1fae5]">Green glow</div>
          </div>
        </Surface>
      </div>
    </div>
  )
}
