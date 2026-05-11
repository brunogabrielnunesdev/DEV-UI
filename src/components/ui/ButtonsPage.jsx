import { ButtonCard } from '../showcase/buttons/ButtonCard'
import { ShowcaseActions } from './ShowcaseActions'
import { SectionHeader } from './SectionHeader'
import { Surface } from './Surface'

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

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ButtonCard title="Button" description="Componente de acao com variant, size, tone, loading, disabled e icon." />
      </div>
    </div>
  )
}
