const testimonials = [
  {
    quote:
      'Migrei do Sympla e na primeira semana já vi a diferença na taxa. O painel é muito mais rápido de usar.',
    name: 'Carlos Mendes',
    role: 'Promoter',
    location: 'São Paulo',
    initials: 'CM',
  },
  {
    quote:
      'A funcionalidade de ver quem vai ao evento virou meu argumento de venda. As pessoas compram só pra aparecer na lista.',
    name: 'Juliana Rocha',
    role: 'Gestora de eventos',
    location: 'Rio de Janeiro',
    initials: 'JR',
  },
  {
    quote:
      'Já organizei mais de 40 festas e nunca tive tanta visibilidade dos meus dados. Base de clientes toda minha.',
    name: 'Rafael Torres',
    role: 'Dono de pub',
    location: 'Florianópolis',
    initials: 'RT',
  },
]

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-gold text-gold" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="bg-ink-soft px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="font-[family-name:var(--font-archivo-black)] text-3xl tracking-tight text-white sm:text-4xl">
            Quem já usa, não volta atrás
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Organizadores reais, resultados reais.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-gold/15 bg-ink p-6"
            >
              <StarRating />

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-sm font-semibold text-gold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
