const productLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Preços', href: '#pricing' },
  { label: 'Como funciona', href: '#como-funciona' },
]

const companyLinks = [
  { label: 'Sobre', href: '#' },
  { label: 'Contato', href: '#' },
  { label: 'Blog (em breve)', href: '#' },
]

export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-ink-soft px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Coluna 1: Logo + tagline + social */}
          <div>
            <p className="font-[family-name:var(--font-archivo-black)] text-xl tracking-tight text-white">
              KIZUNO
            </p>
            <p className="mt-2 text-sm text-gray-500">
              A plataforma de ingressos feita para quem cria eventos de verdade.
            </p>
            <div className="mt-5 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-600 transition-colors hover:text-gold"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-600 transition-colors hover:text-gold"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 2: Produto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Produto
            </h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Empresa */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Empresa
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-gray-600">© 2026 Kizuno. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-gray-600 transition-colors hover:text-gold">
              Política de Privacidade
            </a>
            <a href="#" className="text-xs text-gray-600 transition-colors hover:text-gold">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
