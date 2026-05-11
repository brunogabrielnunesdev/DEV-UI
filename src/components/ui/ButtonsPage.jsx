import { ArrowRight, Download, Plus } from 'lucide-react'
import { Button } from './Button'
import { ShowcaseActions } from './ShowcaseActions'
import { SectionHeader } from './SectionHeader'
import { Surface } from './Surface'

const variants = ['solid', 'glass', 'outline', 'ghost', 'glow']
const tones = ['white', 'blue', 'green', 'destructive']

export function ButtonsPage() {
  return (
    <div className="space-y-8">
      <Surface variant="panel" className="p-6">
        <SectionHeader
          eyebrow="Buttons"
          title="Cinco estilos realmente distintos"
          description="Solid premium, soft glass, outline minimal, ghost subtle e elevated glow com tons white, blue, green, destructive, alem de estados disabled e loading."
        />
        <div className="mt-5">
          <ShowcaseActions
            componentCode="<Button variant='solid' tone='blue'>Ship release</Button>"
            jsxCode="<ButtonsPage />"
            tailwindCode="rounded-[var(--radius-sm)] border px-4 h-11 transition-all duration-[var(--motion-base)]"
            previewLabel="Preview Buttons"
          />
        </div>
      </Surface>

      <div className="grid gap-6">
        {variants.map((variant) => (
          <Surface key={variant} variant="panel" className="p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.03em]">{variant}</h3>
                <p className="mt-1 text-sm text-[var(--text-muted)]">Mesma linguagem visual, construcao claramente diferente.</p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="flex flex-wrap gap-3">
                {tones.map((tone) => (
                  <Button key={tone} variant={variant} tone={tone}>{tone}</Button>
                ))}
                <Button variant={variant} tone="white" disabled>disabled</Button>
                <Button variant={variant} tone="blue" loading>loading</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant={variant} tone="white" leftIcon={Plus}>icon left</Button>
                <Button variant={variant} tone="blue" rightIcon={ArrowRight}>icon right</Button>
                <Button variant={variant} tone="green" leftIcon={Download}>compact</Button>
                <Button variant={variant} tone="white" size="compact">compact</Button>
                <Button variant={variant} tone="white" size="lg">large</Button>
                <Button variant={variant} tone="blue" fullWidth className="max-w-[280px]">full width</Button>
              </div>
            </div>
          </Surface>
        ))}
      </div>
    </div>
  )
}
