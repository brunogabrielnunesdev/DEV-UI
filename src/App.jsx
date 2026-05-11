import { useMemo, useState } from 'react'
import {
  BadgeHelp,
  AppWindow,
  Blend,
  BookOpenText,
  Boxes,
  Gauge,
  Globe2,
  LayoutDashboard,
  PanelLeftClose,
  MousePointerSquareDashed,
  PanelsTopLeft,
  ShieldCheck,
  TableProperties,
  TerminalSquare,
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { LibraryShell } from './components/layout/LibraryShell'
import { AccountSystemShowcase } from './components/account/AccountSystemShowcase'
import { LandingPagesShowcase } from './components/layout/LandingPagesShowcase'
import { StructuralLayoutsShowcase } from './components/layout/StructuralLayoutsShowcase'
import { DocsPage } from './components/layout/DocsPage'
import { OverviewPage } from './components/layout/OverviewPage'
import { ButtonsPage } from './components/ui/ButtonsPage'
import { FormsPage } from './components/ui/FormsPage'
import { AuthShowcase } from './components/auth/AuthShowcase'
import { CardsShowcase } from './components/data-display/CardsShowcase'
import { DashboardShowcase } from './components/dashboard/DashboardShowcase'
import { NavigationShowcase } from './components/navigation/NavigationShowcase'
import { TablesShowcase } from './components/data-display/TablesShowcase'
import { FeedbackShowcase } from './components/feedback/FeedbackShowcase'
import { DevtoolsShowcase } from './components/devtools/DevtoolsShowcase'

const pages = [
  { id: 'overview', label: 'Overview', icon: AppWindow },
  { id: 'docs', label: 'Docs', icon: BookOpenText },
  { id: 'landing', label: 'Landing Pages', icon: Globe2 },
  { id: 'buttons', label: 'Buttons', icon: MousePointerSquareDashed },
  { id: 'forms', label: 'Forms', icon: Blend },
  { id: 'auth', label: 'Auth', icon: ShieldCheck },
  { id: 'cards', label: 'Cards', icon: Boxes },
  { id: 'account', label: 'Account', icon: BadgeHelp },
  { id: 'layouts', label: 'Layouts', icon: PanelLeftClose },
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'navigation', label: 'Navigation', icon: PanelsTopLeft },
  { id: 'tables', label: 'Tables', icon: TableProperties },
  { id: 'feedback', label: 'Feedback', icon: Gauge },
  { id: 'devtools', label: 'DevTools', icon: TerminalSquare },
]

function App() {
  const [activePage, setActivePage] = useState('overview')

  const activeMeta = useMemo(
    () => pages.find((page) => page.id === activePage) ?? pages[0],
    [activePage],
  )

  return (
    <LibraryShell
      pages={pages}
      activePage={activePage}
      onNavigate={setActivePage}
      title={activeMeta.label}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
          transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
        >
          {activePage === 'overview' && <OverviewPage />}
          {activePage === 'docs' && <DocsPage />}
          {activePage === 'landing' && <LandingPagesShowcase />}
          {activePage === 'buttons' && <ButtonsPage />}
          {activePage === 'forms' && <FormsPage />}
          {activePage === 'auth' && <AuthShowcase />}
          {activePage === 'cards' && <CardsShowcase />}
          {activePage === 'account' && <AccountSystemShowcase />}
          {activePage === 'layouts' && <StructuralLayoutsShowcase />}
          {activePage === 'dashboard' && <DashboardShowcase />}
          {activePage === 'navigation' && <NavigationShowcase />}
          {activePage === 'tables' && <TablesShowcase />}
          {activePage === 'feedback' && <FeedbackShowcase />}
          {activePage === 'devtools' && <DevtoolsShowcase />}
        </motion.div>
      </AnimatePresence>
    </LibraryShell>
  )
}

export default App
