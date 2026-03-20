import type { Metadata } from 'next'
import { Archivo_Black, Archivo } from 'next/font/google'
import './globals.css'

const archivoBlack = Archivo_Black({
  variable: '--font-archivo-black',
  subsets: ['latin'],
  weight: '400',
})

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Kizuno — A plataforma de ingressos que trabalha para você',
  description:
    'Taxas competitivas, painel intuitivo e rede social entre participantes. Para gestores de eventos, donos de pubs e promoters.',
  openGraph: {
    title: 'Kizuno — A plataforma de ingressos que trabalha para você',
    description:
      'Taxas competitivas, painel intuitivo e rede social entre participantes.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${archivoBlack.variable} ${archivo.variable} h-full antialiased`} style={{ colorScheme: 'dark' }}>
      <body className="min-h-full font-[family-name:var(--font-archivo)]">{children}</body>
    </html>
  )
}
