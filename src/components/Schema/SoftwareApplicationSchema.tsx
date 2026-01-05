export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PlannerSystem",
    "description": "Ecossistema completo para gestão de pessoal em eventos corporativos. Controle de staff, folha de pagamento automática e inteligência financeira em tempo real.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "99.90",
      "highPrice": "499.90",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
      "offerCount": 3,
      "offers": [
        {
          "@type": "Offer",
          "name": "Plano Básico",
          "price": "99.90",
          "priceCurrency": "BRL",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "99.90",
            "priceCurrency": "BRL",
            "billingDuration": "P1M"
          }
        },
        {
          "@type": "Offer",
          "name": "Plano Profissional",
          "price": "249.90",
          "priceCurrency": "BRL",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "249.90",
            "priceCurrency": "BRL",
            "billingDuration": "P1M"
          }
        },
        {
          "@type": "Offer",
          "name": "Plano Enterprise",
          "price": "499.90",
          "priceCurrency": "BRL",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "499.90",
            "priceCurrency": "BRL",
            "billingDuration": "P1M"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "PlannerSystem",
      "url": "https://plannersystem.com.br",
      "description": "Especialista em tecnologia para gestão de eventos corporativos"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PlannerSystem",
      "url": "https://plannersystem.com.br"
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-03",
    "keywords": "gestão de pessoal eventos, controle staff eventos, folha pagamento eventos, software eventos corporativos",
    "features": [
      "Gestão de staff e pessoal",
      "Folha de pagamento automática",
      "Controle financeiro em tempo real",
      "App mobile para staff",
      "Relatórios inteligentes",
      "Estimativa de custos por evento",
      "Lançamento de horas com HE",
      "Gestão de freelancers e funcionários fixos"
    ],
    "screenshot": "https://plannersystem.com.br/images/dashboard-screenshot.jpg",
    "softwareVersion": "2.0.0",
    "downloadUrl": "https://plannersystem.com.br/demo",
    "installUrl": "https://plannersystem.com.br/cadastro",
    "applicationSuite": "PlannerSystem Suite",
    "releaseNotes": "https://plannersystem.com.br/changelog",
    "softwareRequirements": "Navegador web moderno com conexão à internet",
    "memoryRequirements": "512MB RAM",
    "storageRequirements": "100MB disponível"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}