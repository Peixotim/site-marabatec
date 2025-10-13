"use client";

import Script from "next/script";

export default function SchemaOrg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Colégio MarabáTec",
    image: "https://colegiomarabatec.com.br/logo.png",
    "@id": "https://colegiomarabatec.com.br",
    url: "https://colegiomarabatec.com.br",
    telephone: "+55-31-99902-2636",
    description:
      "O Colégio MarabáTec oferece cursos técnicos e profissionalizantes reconhecidos pelo MEC. Educação moderna e de qualidade para transformar seu futuro.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Canaã dos Carajás, 94, Bairro Vale Dourado",
      addressLocality: "Canaã dos Carajás",
      addressRegion: "PA",
      postalCode: "68537-000",
      addressCountry: "BR",
    },
    sameAs: [
      "https://www.instagram.com/colegiomarabatec",
      "https://www.facebook.com/colegiomarabatec",
      "https://colegiomarabatec.com.br",
    ],
    openingHours: "Mo-Fr 08:00-18:00",
    logo: "https://colegiomarabatec.com.br/logo.png",
    founder: {
      "@type": "Organization",
      name: "Colégio MarabáTec",
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
