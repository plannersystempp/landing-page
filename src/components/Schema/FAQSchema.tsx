export function FAQSchema() {
  const faqs = [
    {
      question: "O que é o PlannerSystem?",
      answer: "O PlannerSystem é um ecossistema completo para gestão de pessoal em eventos corporativos. Nossa plataforma SaaS permite que empresas de eventos controlem staff, gerenciem folha de pagamento, acompanhem horas trabalhadas e tenham inteligência financeira em tempo real, tudo em um único lugar."
    },
    {
      question: "Como funciona o controle de pessoal no PlannerSystem?",
      answer: "Nosso sistema permite cadastrar funcionários fixos e freelancers, definir funções e alocações por divisão. Você pode controlar check-in/check-out, lançar horas trabalhadas com regras automáticas de horas extras e gerar cachês de forma automatizada."
    },
    {
      question: "O PlannerSystem calcula a folha de pagamento automaticamente?",
      answer: "Sim! O sistema calcula automaticamente os pagamentos baseados em cachês diários, horas extras, adicionais noturnos e outras variáveis. Você gera relatórios completos de pagamentos com filtros avançados por período e profissional."
    },
    {
      question: "Posso gerenciar múltiplos eventos simultaneamente?",
      answer: "Absolutamente! O PlannerSystem foi desenvolvido para empresas que gerenciam vários eventos ao mesmo tempo. Você pode acompanhar custos estimados por evento, visualizar orçamentos em tempo real e ter controle total sobre cada operação."
    },
    {
      question: "Existe um aplicativo para o staff de campo?",
      answer: "Sim! Temos um aplicativo mobile dedicado para o staff de campo. Eles podem fazer check-in/check-out, receber comunicações diretas, visualizar escalas e lançar suas horas trabalhadas diretamente pelo celular."
    },
    {
      question: "Quais são os planos disponíveis?",
      answer: "Oferecemos três planos: Básico (R$99,90/mês) para até 5 eventos/mês, Profissional (R$249,90/mês) com eventos ilimitados e app para staff, e Enterprise (R$499,90/mês) com API de integração e gerente dedicado."
    }
  ]

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}