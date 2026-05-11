import { formsCardsData } from '../showcase/forms/formsCardsData'
import { ShowcaseActions } from './ShowcaseActions'
import { SectionHeader } from './SectionHeader'
import { Surface } from './Surface'

export function FormsPage() {
  return (
    <div className="space-y-8">
      <Surface variant="panel" className="p-6">
        <SectionHeader
          eyebrow="Forms"
          title="Inputs e controles com mais contraste, mais identidade e mais legibilidade"
          description="Cinco aparencias base para campos, mais textarea, select, search, date, slider, switch, checkbox, radio, tag input e command search."
        />
        <div className="mt-5">
          <ShowcaseActions
            componentCode="<Input appearance='command' icon={Search} placeholder='Search docs' />"
            jsxCode="<FormsPage />"
            tailwindCode="border-[var(--border-strong)] bg-[var(--bg-1)] shadow-[var(--shadow-glow-blue)]"
            previewLabel="Preview Forms"
          />
        </div>
      </Surface>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {formsCardsData.map((item) => (
          <item.Card key={item.id} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  )
}
