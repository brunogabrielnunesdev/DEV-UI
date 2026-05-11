import { Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { buttonStyles, toneVars } from '../../lib/recipes'

export function Button({
  children,
  variant = 'solid',
  tone = 'white',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  fullWidth = false,
  className,
  ...props
}) {
  const sizes = {
    sm: 'h-10 px-3.5 text-sm',
    compact: 'h-9 px-3 text-sm',
    md: 'h-11 px-4 text-sm',
    lg: 'h-13 px-6 text-[15px]',
    xl: 'h-14 px-7 text-base',
    icon: 'h-11 w-11 px-0',
  }

  return (
    <motion.button
      whileHover={disabled ? undefined : { scale: 1.01, y: -1 }}
      whileTap={disabled ? undefined : { scale: 0.99 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] border font-medium tracking-[-0.02em] transition-all duration-[var(--motion-base)] ease-[var(--ease-premium)] focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)] disabled:cursor-not-allowed disabled:opacity-45',
        buttonStyles[variant],
        sizes[size],
        fullWidth && 'w-full',
        className,
      )}
      style={toneVars(tone)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : LeftIcon ? <LeftIcon className="h-4 w-4" /> : null}
      <span>{children}</span>
      {!loading && RightIcon ? <RightIcon className="h-4 w-4" /> : null}
    </motion.button>
  )
}
