import { Badge } from './Badge'
import { Input } from './Input'
import { cn } from '../../lib/cn'
import { getRecipe } from '../../lib/recipes'

export function CommandMenu({ variant = 'secondary' }) {
  const recipe = getRecipe(variant)

  return (
    <div className={cn('rounded-[var(--radius-lg)] border p-3 shadow-[var(--shadow-card)]', recipe.surface)}>
      <Input variant={variant} placeholder="Type a command or search..." />
      <div className="mt-3 space-y-2">
        {['New workspace', 'Invite member', 'Open analytics'].map((item, index) => (
          <div
            key={item}
            className="flex items-center justify-between rounded-[var(--radius-sm)] px-3 py-2 text-sm text-[var(--color-text-soft)] transition-colors hover:bg-[var(--color-hover)] hover:text-[var(--color-text-strong)]"
          >
            <span>{item}</span>
            <Badge variant={variant}>{index + 1}</Badge>
          </div>
        ))}
      </div>
    </div>
  )
}
