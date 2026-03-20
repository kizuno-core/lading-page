'use client'

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gold/10 bg-ink/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span
          className="font-[family-name:var(--font-archivo-black)] text-xl tracking-widest text-gold"
        >
          KIZUNO
        </span>

        <button
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          className="rounded-lg border border-gold bg-transparent px-5 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-ink"
        >
          Acesso antecipado
        </button>
      </div>
    </nav>
  )
}
