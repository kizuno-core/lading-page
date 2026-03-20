const metrics = [
  { value: '2.400+', label: 'Eventos realizados' },
  { value: '180 mil', label: 'Ingressos emitidos' },
  { value: 'R$\u202f7,2 mi', label: 'Receita processada' },
]

export function SocialProof() {
  return (
    <section className="border-y border-gold/10 bg-ink-soft px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="font-[family-name:var(--font-archivo-black)] text-4xl text-gold sm:text-5xl">
                {m.value}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-widest text-gray-500">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
