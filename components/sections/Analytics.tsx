const months = [
  { label: 'Jan', value: 18400, height: 45 },
  { label: 'Fev', value: 24100, height: 59 },
  { label: 'Mar', value: 31200, height: 76 },
  { label: 'Abr', value: 28700, height: 70 },
  { label: 'Mai', value: 38900, height: 95 },
  { label: 'Jun', value: 41200, height: 100 },
]

const CHART_HEIGHT_PX = 160

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
          {/* Barras com altura em px para resolver corretamente */}
          <div className="flex items-end gap-3" style={{ height: `${CHART_HEIGHT_PX + 28}px` }}>
            {months.map((m) => {
              const barHeight = Math.round((m.height / 100) * CHART_HEIGHT_PX)
              return (
                <div key={m.label} className="relative flex flex-1 flex-col items-center justify-end">
                  {/* Valor acima da barra */}
                  <span className="mb-1.5 text-[10px] font-semibold text-gold">
                    {formatCurrency(m.value)}
                  </span>
                  {/* Barra */}
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-gold/60 to-gold"
                    style={{ height: `${barHeight}px` }}
                  />
                </div>
              )
            })}
          </div>

          {/* Labels dos meses */}
          <div className="mt-2 flex gap-3">
            {months.map((m) => (
              <div key={m.label} className="flex-1 text-center text-xs text-gray-500">
                {m.label}
              </div>
            ))}
          </div>

          {/* Resumo */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gold/10 pt-6">
            <div>
              <p className="text-xs text-gray-500">Receita total (6 meses)</p>
              <p className="mt-1 text-xl font-bold text-white">{`R$\u202f182.500`}</p>
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
