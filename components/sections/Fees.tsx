const platforms = [
  {
    name: 'Sympla',
    fee: '10% + R$\u202f2,00 por ingresso',
    barWidth: '85%',
    barColor: 'bg-red-500/70',
    textColor: 'text-red-400',
    highlight: false,
  },
  {
    name: 'Kizuno',
    fee: 'A partir de 5% por ingresso',
    barWidth: '45%',
    barColor: 'bg-gold',
    textColor: 'text-gold',
    highlight: true,
  },
]

export function Fees() {
  return (
    <section className="bg-ink-soft px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-gold">
            Comparativo de taxas
          </span>
          <h2 className="font-[family-name:var(--font-archivo-black)] text-3xl tracking-tight text-white sm:text-4xl">
            Menos taxa. Mais lucro para você.
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            As plataformas tradicionais ficam com uma fatia grande do seu faturamento.
            No Kizuno, você fica com mais.
          </p>
        </div>

        <div className="space-y-8">
          {platforms.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-6 ${
                p.highlight
                  ? 'border-gold/30 bg-ink-muted'
                  : 'border-white/5 bg-ink-muted/50'
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className={`text-lg font-bold ${p.highlight ? 'text-gold' : 'text-gray-400'}`}>
                    {p.name}
                  </p>
                  <p className="text-sm text-gray-500">{p.fee}</p>
                </div>
                {p.highlight && (
                  <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                    Menor taxa
                  </span>
                )}
              </div>

              <div className="h-4 w-full overflow-hidden rounded-full bg-white/5">
                <div
                  className={`h-4 rounded-full ${p.barColor} transition-all duration-700`}
                  style={{ width: p.barWidth }}
                />
              </div>
              <p className={`mt-2 text-right text-sm font-semibold ${p.textColor}`}>
                {p.barWidth} do valor vai para a plataforma
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-600">
          * Valores ilustrativos com base em dados públicos. Taxas podem variar conforme plano e volume.
        </p>
      </div>
    </section>
  )
}
