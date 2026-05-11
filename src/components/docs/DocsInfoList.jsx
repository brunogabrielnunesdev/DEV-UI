import { Surface } from '../ui/Surface'

export function DocsInfoList({ title, items }) {
  return (
    <Surface variant="subtle" className="p-5">
      <p className="text-sm font-medium text-[var(--text-base)]">{title}</p>
      <div className="mt-4 grid gap-2">
        {items.map((item) => (
          <div key={item} className="rounded-[14px] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm leading-6 text-[var(--text-soft)]">
            {item}
          </div>
        ))}
      </div>
    </Surface>
  )
}
