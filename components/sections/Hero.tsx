'use client'

import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink px-6 pb-24 pt-32 text-white sm:pt-40">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(198,187,169,0.12),transparent)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: copy */}
          <div>
            <span className="mb-6 inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
              Em breve
            </span>

            <h1 className="font-[family-name:var(--font-archivo-black)] text-5xl leading-tight tracking-tight sm:text-6xl">
              A plataforma de ingressos{' '}
              <span className="text-gold">que trabalha para você</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-400">
              Taxas justas, painel intuitivo e uma rede social embutida que conecta
              seus participantes — mais engajamento, mais vendas, mais controle.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                variant="primary"
                className="px-8 py-4 text-base"
                onClick={() => {
                  document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Entrar na waitlist
              </Button>

              <Button
                variant="secondary"
                className="px-8 py-4 text-base"
                onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Ver como funciona
              </Button>
            </div>
          </div>

          {/* Right: floating mockup card */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl border border-gold/20 bg-ink-muted p-6 shadow-2xl shadow-gold/5">
              {/* Window dots */}
              <div className="mb-5 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
              </div>

              {/* Metric cards */}
              <div className="mb-5 grid grid-cols-3 gap-3">
                {[
                  { label: 'Ingressos vendidos', value: '1.240' },
                  { label: 'Receita total', value: 'R$\u202f48.300' },
                  { label: 'Conversão', value: '68%' },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-gold/10 bg-ink-soft p-3"
                  >
                    <p className="text-xs text-gray-500">{m.label}</p>
                    <p className="mt-1 text-lg font-bold text-gold">{m.value}</p>
                  </div>
                ))}
              </div>

              {/* Mini table */}
              <div className="rounded-xl border border-gold/10 bg-ink-soft p-3">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Eventos recentes
                </p>
                {[
                  { name: 'Open Bar Sábado', tickets: 340, status: 'Ativo' },
                  { name: 'Noite Latina', tickets: 210, status: 'Ativo' },
                  { name: 'Festival de Verão', tickets: 690, status: 'Encerrado' },
                ].map((ev) => (
                  <div
                    key={ev.name}
                    className="flex items-center justify-between border-t border-gold/5 py-2 text-xs"
                  >
                    <span className="text-gray-300">{ev.name}</span>
                    <span className="text-gray-500">{ev.tickets} ing.</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                        ev.status === 'Ativo'
                          ? 'bg-gold/20 text-gold'
                          : 'bg-gray-800 text-gray-500'
                      }`}
                    >
                      {ev.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Glow behind card */}
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-gold/5 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
