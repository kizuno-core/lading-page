const steps = [
  {
    number: '01',
    title: 'Crie sua conta',
    description: 'Cadastro simples, sem contrato ou fidelidade. Pronto em menos de 2 minutos.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Monte seu evento',
    description: 'Adicione nome, data, lotes e imagem em minutos. Sem burocracia.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Compartilhe o link',
    description: 'Link único do evento, pronto para redes sociais. Um clique para seus seguidores comprarem.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Receba e acompanhe',
    description: 'Veja vendas em tempo real e saque quando quiser. Sem espera, sem surpresa.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
]

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-ink px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="font-[family-name:var(--font-archivo-black)] text-3xl tracking-tight text-white sm:text-4xl">
            Comece a vender em menos de 5 minutos
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Sem reunião de onboarding. Sem manual. Só você e suas vendas.
          </p>
        </div>

        <div className="relative">
          {/* Linha conectora vertical (desktop) */}
          <div className="absolute left-8 top-10 hidden h-[calc(100%-5rem)] w-px bg-gold/15 lg:block" />

          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                {/* Número + ícone */}
                <div className="relative flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/20 bg-gold/5">
                    <span className="text-gold">{step.icon}</span>
                  </div>
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-ink">
                    {step.number.replace('0', '')}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="pt-3">
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
