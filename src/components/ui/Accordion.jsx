import { useState } from 'react'
import { cn } from '../../lib/cn'
import { getRecipe } from '../../lib/recipes'

export function Accordion({ items, variant = 'secondary' }) {
  const [openIndex, setOpenIndex] = useState(0)
  const recipe = getRecipe(variant)

  return (
    <div className={cn('rounded-[var(--radius-md)] border', recipe.surface)}>
      {items.map((item, index) => (
        <div key={item.title} className={cn(index > 0 && 'border-t border-[var(--color-border)]')}>
          <button
            type="button"
            onClick={() => setOpenIndex((current) => current === index ? -1 : index)}
            className="flex w-full items-center justify-between px-4 py-3 text-left"
          >
            <span className="text-sm font-medium text-[var(--color-text-strong)]">{item.title}</span>
            <span className="text-[var(--color-text-muted)]">{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index ? (
            <div className="px-4 pb-4 text-sm leading-7 text-[var(--color-text-soft)]">{item.content}</div>
          ) : null}
        </div>
      ))}
    </div>
  )
}
