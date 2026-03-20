const months = [
  { label: 'Jan', value: 18400, height: 45 },
  { label: 'Fev', value: 24100, height: 59 },
  { label: 'Mar', value: 31200, height: 76 },
  { label: 'Abr', value: 28700, height: 70 },
  { label: 'Mai', value: 38900, height: 95 },
  { label: 'Jun', value: 41200, height: 100 },
]

function formatCurrency(value: number) {
  if (value >= 1000) return `R$\u202f${(value / 1000).toFixed(0)}k`
  return `R$\u202f${value}`
}

export function Analytics() {
  return (
    <section className="bg-ink px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-gold">
            Analytics
          </span>
          <h2 className="font-[family-name:var(--font-archivo-black)] text-3xl tracking-tight text-white sm:text-4xl">
            Receita crescendo mês a mês
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Acompanhe a evolução das suas vendas e tome decisões baseadas em dados reais.
          </p>
        </div>

        <div className="rounded-2xl border border-gold/20 bg-ink-muted p-8">
          {/* Chart */}
          <div className="flex h-48 items-end gap-4">
            {months.map((m) => (
              <div key={m.label} className="flex flex-1 flex-col items-center gap-2">
                <span className="text-xs font-semibold text-gold">
                  {formatCurrency(m.value)}
                </span>
                <div
                  className="w-full origin-bottom rounded-t-lg bg-gradient-to-t from-gold/60 to-gold [animation:grow_0.5s_ease_both]"
                  style={{ height: `${m.height}%` }}
                />
                <span className="text-xs text-gray-500">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gold/10 pt-6">
            <div>
              <p className="text-xs text-gray-500">Receita total (6 meses)</p>
              <p className="mt-1 text-xl font-bold text-white">R$\u202f182.500</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Crescimento</p>
              <p className="mt-1 text-xl font-bold text-green-400">+124%</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Melhor mês</p>
              <p className="mt-1 text-xl font-bold text-gold">Junho</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
