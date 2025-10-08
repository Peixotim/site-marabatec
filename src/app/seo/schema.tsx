"use client";

import Script from "next/script";

export default function SchemaOrg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Colégio AvançaTec",
    image: "https://colegioavancatec.com.br/logo.png",
    "@id": "https://colegioavancatec.com.br",
    url: "https://colegioavancatec.com.br",
    telephone: "+55-31-99902-2636",
    description:
      "O Colégio AvançaTec oferece cursos técnicos e profissionalizantes reconhecidos pelo MEC. Educação de qualidade para transformar sua carreira.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Canaã dos Carajás, 94, Bairro Vale Dourado",
      addressLocality: "Canaã dos Carajás",
      addressRegion: "PA",
      postalCode: "68537-000",
      addressCountry: "BR",
    },
    sameAs: [
      "https://www.instagram.com/colegioavancatec",
      "https://www.facebook.com/colegioavancatec",
      "https://colegioavancatec.com.br",
    ],
    openingHours: "Mo-Fr 08:00-18:00",
    logo: "https://colegioavancatec.com.br/logo.png",
    founder: {
      "@type": "Person",
      name: "Colégio AvançaTec",
    },
  };

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
