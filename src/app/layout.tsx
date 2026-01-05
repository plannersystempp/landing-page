import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'PlannerSystem - Ecossistema Completo para Gestão de Pessoal em Eventos',
  description: 'SaaS definitivo para empresas de eventos. Controle total de pessoal, gestão de staff, folha de pagamento automática e inteligência financeira em tempo real.',
  keywords: ['gestão de pessoal eventos', 'controle staff eventos', 'folha pagamento eventos', 'gestão equipe eventos corporativos', 'software eventos'],
  authors: [{ name: 'PlannerSystem', url: 'https://plannersystem.com.br' }],
  creator: 'PlannerSystem',
  publisher: 'PlannerSystem',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://plannersystem.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PlannerSystem - Ecossistema Completo para Gestão de Pessoal em Eventos',
    description: 'Transforme sua empresa de eventos com controle total de pessoal, gestão de staff e folha de pagamento automática.',
    url: 'https://plannersystem.com.br',
    siteName: 'PlannerSystem',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PlannerSystem - Gestão Inteligente de Pessoal para Eventos',
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PlannerSystem - Ecossistema para Gestão de Pessoal em Eventos',
    description: 'Controle total de staff, folha de pagamento automática e inteligência financeira para empresas de eventos.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  )
}