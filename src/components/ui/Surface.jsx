import { cn } from '../../lib/cn'
import { surfaceStyles } from '../../lib/recipes'

export function Surface({ children, variant = 'panel', className }) {
  return (
    <div className={cn('rounded-[var(--radius-md)]', surfaceStyles[variant], className)}>
      {children}
    </div>
  )
}
