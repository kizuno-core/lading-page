'use client'

const plans = [
  {
    name: 'Gratuito',
    price: 'R$\u202f0',
    description: 'Para começar a vender sem risco.',
    highlight: false,
    features: [
      'Até 3 eventos por mês',
      'Taxa padrão de mercado',
      'Painel de gestão',
      'Suporte via e-mail',
    ],
    cta: 'Entrar na waitlist',
  },
  {
    name: 'Pro',
    price: 'A definir',
    description: 'Para quem quer escalar.',
    highlight: true,
    features: [
      'Eventos ilimitados',
      'Taxa reduzida',
      'Rede social do evento',
      'Suporte prioritário',
      'Relatórios avançados',
    ],
    cta: 'Entrar na waitlist',
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    description: 'Para grandes produtoras.',
    highlight: false,
    features: [
      'Tudo do Pro',
      'Taxa negociada',
      'Conta dedicada',
      'Integrações customizadas',
      'SLA garantido',
    ],
    cta: 'Falar com o time',
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-ink-soft px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="font-[family-name:var(--font-archivo-black)] text-3xl tracking-tight text-white sm:text-4xl">
            Planos para todo tamanho de operação
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Comece grátis. Escale quando precisar.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 ${
                plan.highlight
                  ? 'bg-ink-muted shadow-2xl shadow-gold/10 ring-2 ring-gold'
                  : 'bg-ink-muted ring-1 ring-gold/10'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
                  Mais popular
                </span>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-semibold ${plan.highlight ? 'text-gold' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1 text-3xl font-extrabold ${plan.highlight ? 'text-gold' : 'text-gold-dark'}`}>
                  {plan.price}
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  {plan.description}
                </p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <span className="text-gold">✓</span>
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`block rounded-lg py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlight
                    ? 'bg-gold text-ink hover:bg-gold-dark'
                    : 'border border-gold/30 text-gold hover:bg-gold/10'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
