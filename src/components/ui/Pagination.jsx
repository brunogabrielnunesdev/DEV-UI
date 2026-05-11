import { cn } from '../../lib/cn'
import { getRecipe } from '../../lib/recipes'

export function Pagination({ page, total, variant = 'secondary' }) {
  const recipe = getRecipe(variant)

  return (
    <div className="flex items-center gap-2">
      <button type="button" className={cn('h-9 rounded-[var(--radius-sm)] border px-3 text-sm', recipe.subtleButton)}>
        Prev
      </button>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          type="button"
          className={cn(
            'h-9 min-w-9 rounded-[var(--radius-sm)] border px-3 text-sm',
            index + 1 === page ? recipe.button : recipe.subtleButton,
          )}
        >
          {index + 1}
        </button>
      ))}
      <button type="button" className={cn('h-9 rounded-[var(--radius-sm)] border px-3 text-sm', recipe.subtleButton)}>
        Next
      </button>
    </div>
  )
}
