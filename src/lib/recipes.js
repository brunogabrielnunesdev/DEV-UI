export const buttonStyles = {
  solid: 'border-[color:var(--tone-border)] bg-[color:var(--tone-solid)] text-[color:var(--tone-on-solid)] hover:brightness-110',
  glass: 'border-[color:var(--tone-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] text-[color:var(--tone-text)] backdrop-blur-xl hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.05))]',
  outline: 'border-[color:var(--tone-border)] bg-transparent text-[color:var(--tone-text)] hover:bg-[rgba(255,255,255,0.04)]',
  ghost: 'border-transparent bg-transparent text-[color:var(--tone-text)] hover:bg-[rgba(255,255,255,0.04)]',
  glow: 'border-[color:var(--tone-border)] bg-[color:var(--tone-solid-soft)] text-[color:var(--tone-text)] shadow-[var(--tone-glow)] hover:-translate-y-0.5',
}

export const inputStyles = {
  default: 'border-[var(--border-base)] bg-[var(--bg-4)]',
  glass: 'border-[var(--border-base)] bg-[rgba(255,255,255,0.04)] backdrop-blur-xl',
  elevated: 'border-[var(--border-soft)] bg-[var(--bg-3)] shadow-[var(--shadow-panel)]',
  command: 'border-[var(--border-strong)] bg-[var(--bg-1)] shadow-[var(--shadow-glow-blue)]',
  underline: 'rounded-none border-x-0 border-t-0 border-b-[var(--border-strong)] bg-transparent px-0',
}

export const surfaceStyles = {
  panel: 'border border-[var(--border-base)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] shadow-[var(--shadow-panel)]',
  subtle: 'border border-[var(--border-soft)] bg-[rgba(255,255,255,0.025)]',
  glass: 'border border-[var(--border-base)] bg-[rgba(255,255,255,0.04)] backdrop-blur-xl shadow-[var(--shadow-panel)]',
  contrast: 'border border-[var(--border-strong)] bg-white text-black shadow-[var(--shadow-float)]',
  inset: 'border border-[var(--border-soft)] bg-[var(--surface-inset)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]',
}

export const tones = {
  white: {
    solid: '#ffffff',
    solidSoft: 'rgba(255,255,255,0.09)',
    text: '#ffffff',
    border: 'rgba(255,255,255,0.12)',
    onSolid: '#050505',
    glow: '0 0 0 1px rgba(255,255,255,0.12), 0 0 20px rgba(255,255,255,0.08)',
  },
  blue: {
    solid: '#3b82f6',
    solidSoft: 'rgba(59,130,246,0.14)',
    text: '#dbeafe',
    border: 'rgba(96,165,250,0.24)',
    onSolid: '#eff6ff',
    glow: '0 0 0 1px rgba(96,165,250,0.16), 0 0 24px rgba(37,99,235,0.16)',
  },
  green: {
    solid: '#10b981',
    solidSoft: 'rgba(16,185,129,0.14)',
    text: '#d1fae5',
    border: 'rgba(52,211,153,0.24)',
    onSolid: '#ecfdf5',
    glow: '0 0 0 1px rgba(52,211,153,0.16), 0 0 24px rgba(16,185,129,0.16)',
  },
  destructive: {
    solid: '#ef4444',
    solidSoft: 'rgba(239,68,68,0.14)',
    text: '#fee2e2',
    border: 'rgba(248,113,113,0.24)',
    onSolid: '#fff5f5',
    glow: '0 0 0 1px rgba(248,113,113,0.16), 0 0 24px rgba(239,68,68,0.14)',
  },
}

export function toneVars(tone = 'white') {
  const item = tones[tone] ?? tones.white

  return {
    '--tone-solid': item.solid,
    '--tone-solid-soft': item.solidSoft,
    '--tone-text': item.text,
    '--tone-border': item.border,
    '--tone-on-solid': item.onSolid,
    '--tone-glow': item.glow,
  }
}

export function getRecipe(variant = 'secondary') {
  const recipes = {
    default: {
      surface: surfaceStyles.subtle,
      input: 'border-[var(--border-base)] bg-[var(--bg-4)] text-[var(--text-base)]',
      button: 'bg-[rgba(255,255,255,0.06)] text-[var(--text-strong)] shadow-[var(--shadow-panel)]',
    },
    primary: {
      surface: `${surfaceStyles.panel} border-[rgba(96,165,250,0.18)]`,
      input: 'border-[rgba(96,165,250,0.24)] bg-[rgba(59,130,246,0.08)] text-[#dbeafe]',
      button: 'bg-[rgba(59,130,246,0.14)] text-[#eff6ff] border border-[rgba(96,165,250,0.24)]',
    },
    secondary: {
      surface: surfaceStyles.panel,
      input: 'border-[var(--border-base)] bg-[var(--bg-4)] text-[var(--text-base)]',
      button: 'bg-[rgba(255,255,255,0.06)] text-[var(--text-strong)] border border-[var(--border-soft)]',
    },
    outline: {
      surface: surfaceStyles.subtle,
      input: 'border-[var(--border-strong)] bg-transparent text-[var(--text-base)]',
      button: 'bg-transparent text-[var(--text-base)] border border-[var(--border-strong)]',
    },
    ghost: {
      surface: surfaceStyles.subtle,
      input: 'border-[var(--border-soft)] bg-transparent text-[var(--text-base)]',
      button: 'bg-transparent text-[var(--text-soft)]',
    },
    glass: {
      surface: surfaceStyles.glass,
      input: 'border-[var(--border-base)] bg-[rgba(255,255,255,0.04)] text-[var(--text-base)] backdrop-blur-xl',
      button: 'bg-[rgba(255,255,255,0.05)] text-[var(--text-strong)] border border-[var(--border-base)] backdrop-blur-xl',
    },
    success: {
      surface: `${surfaceStyles.subtle} border-[rgba(52,211,153,0.2)] bg-[rgba(16,185,129,0.07)]`,
      input: 'border-[rgba(52,211,153,0.24)] bg-[rgba(16,185,129,0.08)] text-[#d1fae5]',
      button: 'bg-[rgba(16,185,129,0.14)] text-[#ecfdf5] border border-[rgba(52,211,153,0.24)]',
    },
    destructive: {
      surface: `${surfaceStyles.subtle} border-[rgba(248,113,113,0.2)] bg-[rgba(239,68,68,0.07)]`,
      input: 'border-[rgba(248,113,113,0.24)] bg-[rgba(239,68,68,0.08)] text-[#fee2e2]',
      button: 'bg-[rgba(239,68,68,0.14)] text-[#fff5f5] border border-[rgba(248,113,113,0.24)]',
    },
    premium: {
      surface: `${surfaceStyles.panel} border-[rgba(255,255,255,0.12)] shadow-[var(--shadow-float)]`,
      input: 'border-[var(--border-strong)] bg-[var(--bg-3)] text-[var(--text-strong)] shadow-[var(--shadow-panel)]',
      button: 'bg-white text-black border border-white shadow-[var(--shadow-float)]',
    },
    ide: {
      surface: `${surfaceStyles.subtle} bg-[var(--bg-1)]`,
      input: 'border-[var(--border-strong)] bg-[var(--bg-1)] text-[var(--text-base)] shadow-[var(--shadow-glow-blue)]',
      button: 'bg-[rgba(59,130,246,0.1)] text-[#dbeafe] border border-[rgba(96,165,250,0.2)]',
    },
  }

  return recipes[variant] ?? recipes.secondary
}
