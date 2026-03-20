export function DashboardPreview() {
  return (
    <section className="bg-ink px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: copy */}
          <div>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-gold">
              Painel de controle
            </span>
            <h2 className="font-[family-name:var(--font-archivo-black)] text-3xl tracking-tight text-white sm:text-4xl">
              Gerencie tudo em um só lugar
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Veja em tempo real quantos ingressos foram vendidos, sua receita acumulada
              e a taxa de conversão do seu evento — sem precisar de planilha.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                'Relatórios em tempo real',
                'Exportação de base de compradores',
                'Controle de lotes e desconto',
                'Check-in digital via QR Code',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-[10px] text-gold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: dashboard mockup */}
          <div className="relative">
            <div className="rounded-2xl border border-gold/20 bg-ink-muted p-5 shadow-2xl shadow-gold/5">
              {/* Window chrome */}
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
                <div className="ml-auto h-3 w-32 rounded-full bg-gold/10" />
              </div>

              {/* Top metric row */}
              <div className="mb-4 grid grid-cols-3 gap-3">
                {[
                  { label: 'Ingressos', value: '1.240', delta: '+12%' },
                  { label: 'Receita', value: 'R$\u202f48.3k', delta: '+8%' },
                  { label: 'Conversão', value: '68%', delta: '+3pp' },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl border border-gold/10 bg-ink-soft p-3">
                    <p className="text-[10px] text-gray-500">{m.label}</p>
                    <p className="mt-0.5 text-lg font-bold text-gold">{m.value}</p>
                    <p className="text-[10px] text-green-400">{m.delta}</p>
                  </div>
                ))}
              </div>

              {/* Mini chart — sparkline bars */}
              <div className="mb-4 rounded-xl border border-gold/10 bg-ink-soft p-4">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                  Vendas por dia
                </p>
                <div className="flex h-16 items-end gap-1">
                  {[30, 55, 45, 70, 60, 80, 95, 65, 75, 90, 85, 100, 78, 88].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-gold/60 to-gold"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="rounded-xl border border-gold/10 bg-ink-soft p-3">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                  Eventos ativos
                </p>
                {[
                  { name: 'Open Bar Sábado', sold: '340/500', pct: 68 },
                  { name: 'Noite Latina', sold: '210/300', pct: 70 },
                  { name: 'Festival de Verão', sold: '690/800', pct: 86 },
                ].map((ev) => (
                  <div key={ev.name} className="border-t border-gold/5 py-2">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-gray-300">{ev.name}</span>
                      <span className="text-gray-500">{ev.sold}</span>
                    </div>
                    <div className="mt-1 h-1 w-full rounded-full bg-gold/10">
                      <div
                        className="h-1 rounded-full bg-gold"
                        style={{ width: `${ev.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-gold/5 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
