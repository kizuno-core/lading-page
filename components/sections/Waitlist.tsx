'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/Button'

export function Waitlist() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    setSubmitted(true)
  }

  return (
    <section id="waitlist" className="bg-ink px-6 py-24 text-white">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-[family-name:var(--font-archivo-black)] text-3xl tracking-tight sm:text-4xl">
          Quero acesso antecipado
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Seja um dos primeiros a usar o Kizuno. Vagas limitadas na fase beta.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-2xl border border-gold/30 bg-ink-muted px-8 py-10">
            <span className="text-4xl">🎉</span>
            <p className="mt-4 text-xl font-semibold text-white">Você está na lista!</p>
            <p className="mt-2 text-gray-500">
              Entraremos em contato assim que o acesso beta estiver disponível.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="flex-1 rounded-lg border border-gold/20 bg-ink-muted px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
              />
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-lg border border-gold/20 bg-ink-muted px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              className="w-full py-4 text-base"
            >
              Quero acesso antecipado →
            </Button>
            <p className="text-xs text-gray-600">Sem spam. Cancele quando quiser.</p>
          </form>
        )}
      </div>
    </section>
  )
}
