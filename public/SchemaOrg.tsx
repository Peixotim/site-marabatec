"use client";
import Script from "next/script";

export default function SchemaOrg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://colegiomarabatec.com.br/#organization",
    name: "Colégio MarabaTec",
    alternateName: [
      "MarabaTec",
      "Colégio MarabaTec",
      "Colegio MarabaTec",
      "marabatec",
      "colegio marabatec",
      "Escola Técnica MarabaTec",
      "Centro Técnico MarabaTec",
      "Cursos Técnicos MarabaTec",
      "Instituto MarabaTec",
      "MarabaTec Ensino Técnico",
      "MarabaTec Profissionalizante",
      "MarabaTec Cursos",
      "MarabaTec Educação",
      "Colégio Técnico MarabaTec",
    ],
    url: "https://colegiomarabatec.com.br",
    logo: "https://colegiomarabatec.com.br/logo.png",
    image: "https://colegiomarabatec.com.br/logo.png",
    description:
      "O Colégio MarabaTec é uma instituição de ensino técnico e profissionalizante comprometida com a formação de qualidade. Oferece cursos reconhecidos nas áreas da saúde, administração, tecnologia e refrigeração. Educação técnica de excelência para o futuro profissional.",
    email: "contato@colegiomarabatec.com.br",
    telephone: "+55-31-98263-1563",
    foundingDate: "2018",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Exemplo, 100 - Centro",
      addressLocality: "Marabá",
      addressRegion: "PA",
      postalCode: "68500-000",
      addressCountry: "BR",
    },
    sameAs: [
      "https://www.instagram.com/marabatecoficial",
      "https://www.facebook.com/colegiomarabatec",
      "https://colegiomarabatec.com.br",
    ],
    hasCourse: [
      {
        "@type": "Course",
        name: "Curso Técnico em Enfermagem",
        description:
          "Formação completa e reconhecida pelo MEC para quem deseja atuar na área da saúde.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Colégio MarabaTec",
        },
      },
      {
        "@type": "Course",
        name: "Curso Técnico em Administração",
        description:
          "Capacitação para atuar em empresas, gestão de pessoas e processos administrativos.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Colégio MarabaTec",
        },
      },
      {
        "@type": "Course",
        name: "Curso de Refrigeração e Climatização",
        description:
          "Curso técnico prático com foco em refrigeração e climatização residencial e comercial.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Colégio MarabaTec",
        },
      },
      {
        "@type": "Course",
        name: "Curso Técnico em Informática",
        description:
          "Formação voltada para o mercado de tecnologia com foco em hardware, redes e desenvolvimento de sistemas.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Colégio MarabaTec",
        },
      },
    ],
    openingHours: "Mo-Fr 08:00-18:00",
  };

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
