const logos = [
  { name: 'Club XYZ', abbr: 'XYZ' },
  { name: 'Produtora ABC', abbr: 'ABC' },
  { name: 'Arena Norte', abbr: 'AN' },
  { name: 'Rádio FM', abbr: 'FM' },
  { name: 'Festival Sul', abbr: 'FS' },
]

const badges = [
  {
    label: 'Seguro SSL',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    label: 'Pagamentos via Stripe',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
      </svg>
    ),
  },
  {
    label: 'LGPD compliant',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
      </svg>
    ),
  },
]

export function Autoridade() {
  return (
    <section className="bg-ink-muted px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-10 text-center text-sm font-medium uppercase tracking-widest text-gray-600">
          Confiado por organizadores em todo o Brasil
        </p>

        {/* Logos placeholder */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-12 items-center gap-2 rounded-xl border border-white/5 bg-white/3 px-5 text-gray-600 transition-colors hover:border-gold/20 hover:text-gold"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded bg-white/5 text-[10px] font-bold">
                {logo.abbr}
              </span>
              <span className="text-sm font-medium">{logo.name}</span>
            </div>
          ))}
        </div>

        {/* Badges de confiança */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 rounded-full border border-gold/15 bg-gold/5 px-4 py-2 text-xs font-medium text-gray-400"
            >
              <span className="text-gold">{badge.icon}</span>
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
