import {
  BellRing,
  Bot,
  CheckCircle2,
  CircleAlert,
  Clock3,
  MessageSquareMore,
  ShieldAlert,
  Sparkles,
  WandSparkles,
} from 'lucide-react'
import { Button } from '../ui/Button'
import { ShowcaseActions } from '../ui/ShowcaseActions'
import { SectionHeader } from '../ui/SectionHeader'
import { Surface } from '../ui/Surface'

const variants = [
  'Alert banner',
  'Stacked notifications',
  'Floating toasts',
  'Command notification',
  'AI response alert',
  'Success panel',
  'Destructive dialog',
  'Premium modal',
  'Onboarding popup',
  'Update banner',
  'Activity notifications',
]

export function FeedbackShowcase() {
  return (
    <div className="space-y-8">
      <Surface variant="panel" className="p-6">
        <SectionHeader
          eyebrow="Feedback"
          title="Feedback com mais variedade de hierarquia, motion e UX"
          description="Banners, stacked alerts, floating surfaces, command-style messages, onboarding popups and destructive dialogs now diverge structurally instead of repeating the same card."
        />
        <div className="mt-5">
          <ShowcaseActions
            componentCode="<AlertBanner tone='blue' />"
            jsxCode="<FeedbackShowcase />"
            tailwindCode="rounded-[var(--radius-md)] border border-[var(--border-soft)] p-5"
            previewLabel="Preview Feedback"
          />
        </div>
      </Surface>

      <div className="grid grid-cols-3 gap-6">
        {variants.map((variant, index) => (
          <FeedbackVariant key={variant} variant={variant} index={index} />
        ))}
      </div>
    </div>
  )
}

function FeedbackVariant({ variant, index }) {
  return (
    <Surface variant={index % 3 === 1 ? 'glass' : 'panel'} className="p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">{variant}</h3>
        <ShowcaseActions componentCode="<FeedbackItem />" jsxCode={`<FeedbackVariant variant="${variant}" />`} tailwindCode="shadow-[var(--shadow-panel)] backdrop-blur-xl" previewLabel="Preview" />
      </div>

      {index === 0 && (
        <div className="rounded-[var(--radius-sm)] border border-[rgba(96,165,250,0.22)] bg-[rgba(59,130,246,0.12)] p-4">
          <div className="flex items-start gap-3">
            <CircleAlert className="mt-0.5 h-5 w-5 text-[#dbeafe]" />
            <div>
              <p className="text-sm font-medium text-[#eff6ff]">API rate limits changed</p>
              <p className="mt-1 text-sm leading-6 text-[#dbeafe]">Traffic policy was updated for all enterprise keys.</p>
            </div>
          </div>
        </div>
      )}

      {index === 1 && (
        <div className="space-y-3">
          {['Deploy finished', 'Dataset synced', 'Schema exported'].map((item) => (
            <div key={item} className="rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4">
              <div className="flex items-center gap-3">
                <BellRing className="h-4 w-4 text-[var(--text-muted)]" />
                <div>
                  <p className="text-sm text-[var(--text-base)]">{item}</p>
                  <p className="text-xs text-[var(--text-muted)]">moments ago</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {index === 2 && (
        <div className="relative pt-6">
          <div className="absolute right-2 top-0 w-72 rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-black/85 p-4 shadow-[var(--shadow-float)]">
            <p className="text-sm font-medium text-[var(--text-base)]">Export ready</p>
            <p className="mt-1 text-sm text-[var(--text-soft)]">Your CSV package is prepared.</p>
          </div>
          <div className="h-28 rounded-[var(--radius-sm)] bg-[rgba(255,255,255,0.02)]" />
        </div>
      )}

      {index === 3 && (
        <div className="rounded-[var(--radius-sm)] border border-[rgba(96,165,250,0.18)] bg-[var(--bg-1)] p-4 shadow-[var(--shadow-glow-blue)]">
          <div className="flex items-center justify-between font-mono text-sm text-[#dbeafe]">
            <span>Command queued: redeploy workers</span>
            <span>cmd</span>
          </div>
        </div>
      )}

      {index === 4 && (
        <div className="rounded-[var(--radius-sm)] border border-[rgba(96,165,250,0.18)] bg-[rgba(59,130,246,0.08)] p-5">
          <div className="flex items-start gap-3">
            <Bot className="mt-0.5 h-5 w-5 text-[#bfdbfe]" />
            <div>
              <p className="text-sm font-medium text-[#eff6ff]">AI response insight</p>
              <p className="mt-2 text-sm leading-6 text-[#dbeafe]">The assistant found a schema mismatch in two environments and prepared a safe patch plan.</p>
            </div>
          </div>
        </div>
      )}

      {index === 5 && (
        <div className="rounded-[var(--radius-md)] border border-[rgba(52,211,153,0.18)] bg-[rgba(16,185,129,0.08)] p-5 shadow-[var(--shadow-glow-green)]">
          <CheckCircle2 className="h-6 w-6 text-[#4ade80]" />
          <p className="mt-3 text-lg font-semibold text-[#ecfdf5]">Migration successful</p>
          <p className="mt-1 text-sm text-[#d1fae5]">7 workspaces were updated without conflicts.</p>
        </div>
      )}

      {index === 6 && (
        <div className="rounded-[var(--radius-md)] border border-[rgba(248,113,113,0.2)] bg-[rgba(239,68,68,0.08)] p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert className="mt-0.5 h-5 w-5 text-[#fca5a5]" />
            <div>
              <p className="text-lg font-semibold text-[#fff1f2]">Delete production key?</p>
              <p className="mt-1 text-sm leading-6 text-[#fecdd3]">This action revokes all dependent agents immediately.</p>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <Button variant="outline" tone="white">Cancel</Button>
            <Button variant="solid" tone="destructive">Delete</Button>
          </div>
        </div>
      )}

      {index === 7 && (
        <div className="rounded-[var(--radius-lg)] border border-[var(--border-strong)] bg-[rgba(255,255,255,0.05)] p-6 shadow-[var(--shadow-float)]">
          <p className="text-2xl font-semibold tracking-[-0.04em]">Premium modal</p>
          <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">Layered spacing, crisp edges and calm action emphasis.</p>
          <div className="mt-5 flex gap-3">
            <Button variant="outline" tone="white">Maybe later</Button>
            <Button variant="solid" tone="blue">Confirm</Button>
          </div>
        </div>
      )}

      {index === 8 && (
        <div className="rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5">
          <WandSparkles className="h-5 w-5 text-[#dbeafe]" />
          <p className="mt-3 text-lg font-semibold">Onboarding popup</p>
          <p className="mt-1 text-sm text-[var(--text-soft)]">Take a quick tour of pipelines, datasets and copilots.</p>
          <div className="mt-4 h-2 rounded-full bg-[rgba(255,255,255,0.06)]"><div className="h-full w-1/3 rounded-full bg-white" /></div>
        </div>
      )}

      {index === 9 && (
        <div className="flex items-center justify-between rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] px-4 py-3">
          <div>
            <p className="text-sm font-medium text-[var(--text-base)]">Version 3.2 is now live</p>
            <p className="text-xs text-[var(--text-muted)]">New command overlays and editor previews available.</p>
          </div>
          <Button variant="ghost" tone="blue">Read update</Button>
        </div>
      )}

      {index === 10 && (
        <div className="space-y-3">
          {['Olivia ran schema export', 'CLI agent connected', 'Billing alert resolved'].map((item, itemIndex) => (
            <div key={item} className="flex items-start gap-3 rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.03)] p-4">
              {itemIndex === 0 ? <Sparkles className="mt-0.5 h-4 w-4 text-[#60a5fa]" /> : itemIndex === 1 ? <MessageSquareMore className="mt-0.5 h-4 w-4 text-[var(--text-muted)]" /> : <Clock3 className="mt-0.5 h-4 w-4 text-[#34d399]" />}
              <div>
                <p className="text-sm text-[var(--text-base)]">{item}</p>
                <p className="text-xs text-[var(--text-muted)]">{itemIndex + 2}m ago</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Surface>
  )
}
