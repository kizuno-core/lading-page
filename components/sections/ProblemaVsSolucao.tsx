const problems = [
  'Taxas de até 10% comendo sua margem',
  'Dados dos seus compradores presos na plataforma',
  'Interface antiquada que atrasa sua operação',
  'Sem engajamento pós-venda com o público',
]

const solutions = [
  'Taxa competitiva e transparente desde o primeiro ingresso',
  'Base de compradores 100% sua, exportável a qualquer hora',
  'Painel criado para velocidade — evento no ar em minutos',
  'Rede social integrada: seu público se conecta antes mesmo do evento',
]

export function ProblemaVsSolucao() {
  return (
    <section className="bg-ink-soft px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="font-[family-name:var(--font-archivo-black)] text-3xl tracking-tight text-white sm:text-4xl">
            Você ainda perde dinheiro com taxas abusivas?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Enquanto outros seguram seus dados e cobram caro, o Kizuno coloca você no controle.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Coluna Problema */}
          <div className="rounded-2xl border border-white/5 bg-ink p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <h3 className="text-lg font-semibold text-gray-400">Plataformas tradicionais</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3 text-sm text-gray-500">
                  <span className="mt-0.5 flex-shrink-0 text-red-500/60">✗</span>
                  {problem}
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna Solução */}
          <div className="rounded-2xl border border-gold/30 bg-ink p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 text-gold">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <h3 className="text-lg font-semibold text-white">Com o Kizuno</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution) => (
                <li key={solution} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="mt-0.5 flex-shrink-0 text-gold">✓</span>
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
