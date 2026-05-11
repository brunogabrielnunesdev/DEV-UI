# DevUI

DevUI e a UI Library oficial do ecossistema Dev.

Ela foi desenhada para servir como base visual de produtos SaaS premium, dashboards enterprise, auth systems, IDE-like tools e experiences DEV modernas sem perder consistencia entre paginas, componentes e layouts.

O foco da biblioteca nao e apenas "ter componentes". O foco e oferecer:

- design system dark-first
- arquitetura reutilizavel
- patterns de tela reais
- variants consistentes
- documentacao clara
- evolucao segura para futuros produtos

## Visao do ecossistema DEV

DevAker UI deve parecer uma mistura entre:

- Linear
- Vercel
- Raycast
- Stripe dark mode
- modern AI SaaS
- developer tooling platforms

Isso significa:

- preto profundo como base
- cinzas em camadas para profundidade
- branco forte para contraste
- azul como primary tech accent
- verde emerald para success / healthy states
- muito espaco negativo
- motion sutil
- zero poluicao visual

## Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

Observacao:

- A documentacao desta biblioteca foca apenas em frontend, design system, layouts e composicao visual.
- Axios, requests, backend e consumo HTTP nao fazem parte do escopo desta documentacao.

## Scripts

Instalacao:

```bash
npm install
```

Rodar em desenvolvimento:

```bash
npm run dev
```

Gerar build:

```bash
npm run build
```

Preview de producao:

```bash
npm run preview
```

## Estrutura de pastas

### Estrutura atual do projeto

```text
src/
  animations/
  components/
    account/
    auth/
    dashboard/
    data-display/
    devtools/
    feedback/
    layout/
    navigation/
    ui/
  lib/
  styles/
  tokens/
  App.jsx
  index.css
```

### Mapa recomendado para evolucao

Algumas categorias ainda estao agrupadas em showcases maiores. Para novos arquivos, siga esta organizacao logica:

- `components/ui`
  Primitives base: Button, Input, Textarea, Badge, Modal, Tabs, Tooltip, surfaces e utilitarios de interacao.
- `components/layout`
  Shells e documentacao: LibraryShell, Overview, Docs, landing compositions e structural layouts.
- `components/navigation`
  Navbars, sidebars, command patterns, switchers, breadcrumbs e menus de contexto.
- `components/auth`
  Login, register, onboarding e auth surfaces.
- `components/forms`
  Use este bucket ao extrair formularios maiores de `ui` para evitar inchaco da pasta base.
- `components/dashboard`
  Dashboards, metric rails, charts containers e shell operacional.
- `components/devtools`
  IDE visuals, code previews, terminal, SQL, JSON, logs, API blocks e observability panels.
- `components/profile`
  Use este bucket ao separar profile-specific surfaces do account system.
- `components/settings`
  Use este bucket ao separar settings pages, sidebars e preference panels.
- `components/feedback`
  Alerts, toasts, empty states, error states, progress e modals de confirmacao.
- `components/cards`
  Use este bucket ao separar familias de cards fora de `data-display`.
- `components/landing`
  Use este bucket ao extrair hero, pricing, FAQ, trust e CTA sections reaproveitaveis.
- `pages`
  Opcional quando a app passar de showcase para docs com roteamento real.
- `layouts`
  Opcional para wrappers compartilhados quando houver `react-router` ou multiplas entradas.
- `lib/utils`
  Utilitarios puros de string, classnames e formatacao.
- `hooks`
  Estado de interface, clipboard, media queries, motion helpers e interacoes comuns.
- `styles`
  Base global e regras nao pertencentes a um componente.

## Arquivos-chave

- `src/tokens/theme.css`
  Fonte de verdade para cores, radius, spacing, shadows e motion.
- `src/styles/base.css`
  Reset e comportamento visual global.
- `src/lib/recipes.js`
  Recipes reutilizaveis para buttons, inputs, surfaces e compatibilidade de variants.
- `src/components/layout/LibraryShell.jsx`
  Shell principal da UI Library.
- `src/components/layout/DocsPage.jsx`
  Documentacao visual interna da biblioteca.
- `src/components/ui/ShowcaseActions.jsx`
  Acoes de copia e preview da library.

## Arquitetura visual

### Dark-first approach

Toda a biblioteca parte de um sistema dark-first. Isso nao significa apenas trocar o fundo para preto; significa controlar contraste, profundidade e leitura com superfices escuras em camadas.

Base:

- `#000000`
- `#050505`
- `#0A0A0A`
- `#111111`
- `#18181B`

Textos:

- `#FFFFFF`
- `#E4E4E7`
- `#A1A1AA`
- `#71717A`

Accent tech:

- Azul: `#2563EB`, `#3B82F6`, `#60A5FA`
- Verde: `#10B981`, `#34D399`, `#4ADE80`

### Hierarquia visual

- titulos grandes e fortes
- subtitulos suaves
- body copy limpa e discreta
- labels curtas e precisas
- espacamento generoso entre blocos

### Spacing

A escala principal e controlada em `theme.css` com `--space-1` ate `--space-8`.

Uso recomendado:

- `space-1` a `space-3`: labels, densidade compacta, toolbars
- `space-4` a `space-5`: cards, formularios, rows
- `space-6` a `space-8`: heroes, sections e page shells

### Radius

- `--radius-xs`
- `--radius-sm`
- `--radius-md`
- `--radius-lg`
- `--radius-xl`

Regra:

- componentes pequenos: `sm`
- formularios e cards: `sm` ou `md`
- modals, auth cards e shells premium: `lg` ou `xl`

### Borders

O sistema usa bordas discretas:

- `rgba(255,255,255,0.06)`
- `rgba(255,255,255,0.08)`
- `rgba(255,255,255,0.10)`

Borda existe para separar camadas, nao para desenhar um contorno pesado.

### Shadows e glow

Sombras devem ser leves e funcionais:

- `--shadow-panel`
- `--shadow-soft`
- `--shadow-float`

Glow deve ser raro e sutil:

- foco
- componente premium destacado
- feedback de copia
- estados tecnicos especificos

Nao use glow como decoracao generica.

### Typography

Stack principal:

- Inter
- SF Pro Display
- Geist

Stack mono:

- JetBrains Mono
- SFMono-Regular
- Consolas

### Motion philosophy

Permitido:

- fade
- blur leve
- scale pequeno
- slide curto
- hover transitions suaves

Evitar:

- bounce
- elastic
- zoom exagerado
- animacao caricata
- motion sem funcao

## Design tokens

Os tokens vivem em `src/tokens/theme.css`.

Categorias principais:

- backgrounds
- borders
- text colors
- accent colors
- surface colors
- shadows
- radius
- spacing
- typography
- motion

Regra central:

> qualquer nova pagina deve tentar resolver o visual trocando composicao e tokens, nao inventando cores ou efeitos novos.

## Variants

A biblioteca trabalha com dois niveis:

1. `variant`
2. `tone`

### Variants documentados

- `default`
  Uso neutro, pouco destaque.
- `primary`
  Estrutura principal com mais enfase.
- `secondary`
  Estrutura padrao para grande parte das superfices.
- `outline`
  Acoes secundarias e filtros.
- `ghost`
  Acoes leves, toolbars, menus e contextos densos.
- `glass`
  Surfaces premium, overlays, docs, auth glass e command-like experiences.
- `success`
  Estados positivos, healthy metrics, deploy concluido.
- `destructive`
  Confirmacoes de risco, erros e acoes irreversiveis.
- `premium`
  Blocos de alto contraste ou destaque.
- `ide`
  Padrão tecnico para code/editor/devtools surfaces.

### Quando usar `tone`

`tone` define a intencao semantica:

- `white`
  neutro e high contrast
- `blue`
  primary tech
- `green`
  success / healthy
- `destructive`
  error / danger

## Sizes

Os tamanhos mais comuns da biblioteca sao:

- `sm`
- `compact`
- `md`
- `lg`
- `xl`
- `icon`
- `fullWidth`

Guia rapido:

- `sm`
  toolbars, menus, contexts densos
- `compact`
  quick actions e barras internas
- `md`
  default
- `lg`
  acoes principais e auth
- `xl`
  CTAs importantes em hero ou sections premium
- `icon`
  acoes isoladas com icone
- `fullWidth`
  formularios, auth e drawers

## Props comuns

Estes props aparecem com frequencia em toda a biblioteca:

- `children`
  Conteudo principal do componente.
- `className`
  Ajuste fino de layout sem quebrar a API base.
- `variant`
  Estrutura visual principal.
- `size`
  Escala e densidade do componente.
- `disabled`
  Desabilita interacao.
- `loading`
  Estado de carregamento com feedback visual.
- `icon`
  Icone unico quando o componente aceita entrada generica.
- `leftIcon` / `rightIcon`
  Icones posicionados em acoes como Button.
- `onClick`
  Callback de interacao.
- `active`
  Estado selecionado em navegacao.
- `selected`
  Estado de escolha em listas e tabs.
- `expanded`
  Estado aberto em accordions, drawers e side panels.

## Componentes documentados

### Core UI

- Button
- Input
- Textarea
- Select
- Checkbox
- Radio (pattern documentado)
- Switch
- Badge
- Card
- Modal
- Dialog (pattern com Modal)
- Tabs
- Tooltip
- Dropdown
- Table (pattern documentado)
- Toast
- Alert (pattern documentado)

### Layouts

- DashboardLayout
- AuthLayout
- LandingLayout
- IDELayout
- WorkspaceLayout
- DocsLayout

### Navigation

- Navbar
- Sidebar
- CommandPalette
- WorkspaceSwitcher
- ProfileDropdown

### DevTools

- SQLPreview
- JSONViewer
- TerminalBlock
- APIResponseBlock
- CodeEditorPreview
- LogsViewer
- DatasetPreview

### Profile / Settings

- SettingsSidebar
- ProfileCard
- SecurityPanel
- NotificationCenter
- TeamManagement

## Padrrao dos componentes

Ao criar ou editar um componente:

1. comece por uma primitive existente
2. use `variant` antes de criar um novo componente
3. mantenha a logica separada da camada visual quando possivel
4. use tokens em vez de hex espalhado
5. preserve espacamento, radius e densidade do sistema

## Como reutilizar componentes

Regra:

> composicao acima de duplicacao

Exemplos:

- antes de criar um novo card, combine `Surface` + `Badge` + `Button`
- antes de criar um novo formulario, monte com `Input`, `Textarea`, `Button` e states existentes
- antes de criar uma nova sidebar, confirme se o pattern atual resolve com novo conteudo

## Como criar novos componentes

Passo a passo:

1. confirme se o caso de uso nao pode ser resolvido com um `variant`
2. escolha a pasta correta
3. use tokens de `theme.css`
4. mantenha a API curta
5. extraia subpartes apenas quando houver reutilizacao real
6. adicione exemplos na pagina `Docs`
7. atualize este README se a regra de uso mudar

## Convencoes da biblioteca

- Use nomes claros e diretos.
- Prefira props descritivos.
- Evite componentes gigantescos.
- Nao duplique cores ou espacamentos em strings arbitrarias sem necessidade.
- Use `ShowcaseActions` em superfices que precisem de copy / preview.
- Para novos blocos DEV, preserve a identidade de editor, terminal e code tooling ja existente.

## Como implementar na pratica

Esta secao e obrigatoria para qualquer dev novo no projeto.

### 1. Como usar um Button

Importacao:

```jsx
import { Button } from './src/components/ui/Button'
import { Sparkles } from 'lucide-react'
```

Exemplo basico:

```jsx
<Button variant="solid" tone="blue">
  Create workspace
</Button>
```

Exemplo com variant:

```jsx
<Button variant="glass" tone="white">
  Open preview
</Button>
```

Exemplo com loading:

```jsx
<Button variant="outline" tone="green" loading>
  Saving changes
</Button>
```

Exemplo com icone:

```jsx
<Button variant="solid" tone="blue" leftIcon={Sparkles}>
  AI Assist
</Button>
```

Quando usar cada variacao:

- `solid`
  CTA principal
- `glass`
  CTA premium secundario
- `outline`
  acao secundaria
- `ghost`
  toolbars e menus
- `glow`
  destaque especial e controlado

### 2. Como criar uma tela de login

Escolha do layout:

- Use o pattern `AuthLayout` mais proximo do objetivo: centered, split, glass ou enterprise.

Imports basicos:

```jsx
import { Badge } from './src/components/ui/Badge'
import { Input } from './src/components/ui/Input'
import { Button } from './src/components/ui/Button'
```

Exemplo:

```jsx
export function LoginScreen() {
  return (
    <div className="mx-auto grid max-w-md gap-6 rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-8">
      <div className="space-y-3">
        <Badge tone="blue">Auth</Badge>
        <h1 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">
          Sign in to your workspace
        </h1>
      </div>

      <div className="grid gap-4">
        <Input label="Email" placeholder="team@company.com" />
        <Input label="Password" type="password" placeholder="••••••••" />
      </div>

      <Button variant="solid" tone="blue" fullWidth>
        Continue
      </Button>
    </div>
  )
}
```

Checklist:

- manter bloco central limpo
- usar apenas uma acao principal
- usar social buttons logo abaixo do form, nao acima
- manter helper e error state dentro de `Input`

### 3. Como criar um dashboard

Escolha do layout:

- Use `DashboardLayout` pattern das showcases.

Estrutura recomendada:

1. Sidebar
2. Topbar
3. Metric cards
4. Area principal com tabela, grafico ou feed
5. Widgets secundarios

Exemplo:

```jsx
import { Button } from './src/components/ui/Button'
import { Surface } from './src/components/ui/Surface'

export function DashboardPage() {
  return (
    <div className="grid grid-cols-[260px_1fr] gap-6">
      <aside className="rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
        Sidebar navigation
      </aside>

      <main className="grid gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">
            Operations dashboard
          </h1>
          <Button variant="glass" tone="white">Open command</Button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Surface variant="panel" className="p-5">Metric card</Surface>
          <Surface variant="panel" className="p-5">Metric card</Surface>
          <Surface variant="panel" className="p-5">Metric card</Surface>
        </div>

        <Surface variant="panel" className="p-5">
          Table, charts and activity feed
        </Surface>
      </main>
    </div>
  )
}
```

### 4. Como criar uma pagina de settings

Escolha do layout:

- Use o shell de `AccountSystemShowcase` como base.

Exemplo:

```jsx
import { Input } from './src/components/ui/Input'
import { Button } from './src/components/ui/Button'

export function SettingsPage() {
  return (
    <div className="grid grid-cols-[240px_1fr] gap-6">
      <aside className="rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-5">
        Settings sidebar
      </aside>

      <section className="grid gap-6 rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-6">
        <div className="grid gap-4">
          <Input label="Workspace name" placeholder="Atlas Labs" />
          <Input label="Support email" placeholder="ops@atlas.dev" />
        </div>

        <Button variant="solid" tone="green">Save preferences</Button>
      </section>
    </div>
  )
}
```

### 5. Como usar componentes DEV

Use estes patterns antes de criar blocos tecnicos do zero:

- `SQLPreview`
- `JSONViewer`
- `TerminalBlock`
- `CodeEditorPreview`
- `LogsViewer`
- `DatasetPreview`

Exemplo:

```jsx
import { Button } from './src/components/ui/Button'

export function SqlPreview() {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-[var(--bg-1)] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-medium text-[var(--text-base)]">SQL Preview</h3>
        <Button variant="glass" tone="green" size="compact">
          Run query
        </Button>
      </div>

      <pre className="overflow-x-auto rounded-[14px] bg-black/40 p-4 font-mono text-xs leading-6 text-[#d1fae5]">
select workspace_id, avg(latency_ms)
from api_logs
group by workspace_id;
      </pre>
    </div>
  )
}
```

## Como combinar componentes corretamente

Algumas combinacoes recomendadas:

- `Badge + Heading + Body + Button`
  Para hero cards e settings intros.
- `Input + Helper + Button fullWidth`
  Para auth e onboarding.
- `Surface + Tabs + Table`
  Para dashboards.
- `Surface + Button compact + pre font-mono`
  Para DEV blocks.
- `Sidebar + topbar + cards + table + feed`
  Para dashboards completos.

## Como adicionar logica aos componentes

Esta biblioteca nao serve apenas para montar UI estatica. Os componentes da DevAker UI foram pensados para receber estado, props e interacoes React de forma simples.

O foco aqui e frontend:

- `useState`
- props
- eventos
- renderizacao condicional
- `map()`
- loading state
- error state
- active / selected state
- mudanca dinamica de `variant` e `tone`

### O que controlar com estado

- modal aberto ou fechado
- aba ativa
- sidebar expandida ou recolhida
- dropdown aberto
- loading de botoes
- erro de formulario
- cards e metricas dinamicas
- SQL / JSON / terminal dinamicos

### Exemplo: abrir e fechar modal

```jsx
import { useState } from 'react'
import { Button } from './src/components/ui/Button'
import { Modal } from './src/components/ui/Modal'

export function ModalExample() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="solid" tone="blue" onClick={() => setOpen(true)}>
        Open modal
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Create workspace"
        description="Control the modal with local React state."
      >
        Modal content
      </Modal>
    </>
  )
}
```

### Exemplo: loading button

```jsx
import { useState } from 'react'
import { Button } from './src/components/ui/Button'

export function LoadingButtonExample() {
  const [loading, setLoading] = useState(false)

  async function handleSave() {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setLoading(false)
  }

  return (
    <Button loading={loading} onClick={handleSave} variant="solid" tone="blue">
      Save changes
    </Button>
  )
}
```

### Exemplo: formulario controlado com erro

```jsx
import { useState } from 'react'
import { Input } from './src/components/ui/Input'
import { Button } from './src/components/ui/Button'

export function SimpleFormExample() {
  const [values, setValues] = useState({ email: '' })
  const [error, setError] = useState('')

  function handleChange(event) {
    setValues({ email: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!values.email.includes('@')) {
      setError('Use a valid email address.')
      return
    }

    setError('')
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <Input
        label="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
        state={error ? 'error' : 'default'}
        helper={error || 'We will use this email for updates.'}
      />
      <Button variant="solid" tone="blue">Create account</Button>
    </form>
  )
}
```

### Exemplo: renderizar cards e tabelas com `map()`

```jsx
const rows = [
  { service: 'Atlas API', latency: '184ms', status: 'ok' },
  { service: 'Nova Worker', latency: '241ms', status: 'warn' },
]

export function TableFromArrayExample() {
  return (
    <div className="grid gap-2">
      {rows.map((row) => (
        <div key={row.service} className="grid grid-cols-3">
          <span>{row.service}</span>
          <span>{row.latency}</span>
          <span>{row.status}</span>
        </div>
      ))}
    </div>
  )
}
```

### Regra pratica

Sempre pense em 3 camadas:

1. dados e estado
2. comportamento e eventos
3. componente visual

Ou seja:

- o estado mora no componente pai
- as props levam dados e callbacks para os filhos
- a UI reage ao estado

Se voce seguir esse fluxo, qualquer primitive da DevAker UI pode virar uma tela interativa real sem quebrar o design system.

## Como alterar texto e conteudo

- Troque apenas o conteudo sem mexer em spacing quando o layout ja funciona.
- Se o texto crescer muito, ajuste largura do container antes de mexer no componente.
- Em cards pequenos, corte microcopy; em pages premium, deixe o texto respirar.

## Como adicionar icones

- Use `lucide-react`.
- Prefira icones com 16px ou 18px em acoes compactas.
- Em botoes, use `leftIcon` ou `rightIcon`.
- Em headers, use icone como apoio, nao protagonista.

## Como lidar com estados

- `loading`
  use spinner curto e mantenha a largura do componente
- `disabled`
  use opacidade reduzida e sem hover significativo
- `active`
  use borda, surface ou accent sutil
- `error`
  use borda e hint vermelho, sem poluir a tela toda
- `success`
  use verde para confirmar, nao para decorar

## Responsividade

O foco atual e desktop-first, mas novas telas devem nascer com alguma elasticidade:

- permitir wrap basico em grupos de botoes
- evitar larguras fixas desnecessarias
- usar grids que possam colapsar depois
- separar shell e conteudo para facilitar futuras breakpoints

## Boas praticas

- reutilizacao acima de duplicacao
- variants antes de novo componente
- manter identidade visual
- evitar componentes aleatorios
- componentizacao correta
- spacing consistente
- motion com moderacao
- APIs curtas e claras

## Checklist para contribuicao

Antes de abrir uma nova tela ou componente, confirme:

- ele reutiliza tokens existentes
- ele respeita dark-first
- ele usa variants antes de duplicar markup
- ele preserva spacing e radius do sistema
- ele parece parte do mesmo ecossistema visual
- ele foi documentado na pagina `Docs` quando necessario

## Resultado esperado

Depois desta documentacao, qualquer pessoa do time deve conseguir:

- entender a arquitetura visual
- usar os componentes com seguranca
- montar telas novas
- expandir a biblioteca
- manter consistencia
- contribuir sem destruir o padrao DEV
