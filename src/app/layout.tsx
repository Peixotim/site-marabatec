import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieBanner";
import SchemaOrg from "./seo/schema";
import Sidebar from "@/components/sidebar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "MarabaTec - Cursos Técnicos e Profissionalizantes",
    template: "%s | MarabaTec",
  },
  description:
    "MarabaTec oferece cursos técnicos e profissionalizantes reconhecidos pelo MEC. Invista na sua formação e transforme seu futuro com educação de qualidade!",
  keywords: [
    "marabatec",
    "colégio marabatec",
    "cursos técnicos",
    "cursos profissionalizantes",
    "educação técnica",
    "Marabá",
    "ensino técnico",
    "colégio técnico",
    "formação profissional",
  ],
  authors: [{ name: "MarabaTec" }],
  creator: "MarabaTec",
  publisher: "MarabaTec",
  metadataBase: new URL("https://colegiomarabatec.com.br"),
  openGraph: {
    title: "MarabaTec - Cursos Técnicos e Profissionalizantes",
    description:
      "Transforme sua vida com cursos técnicos e profissionalizantes reconhecidos pelo MEC. Conheça a MarabaTec e dê o próximo passo na sua carreira!",
    url: "https://colegiomarabatec.com.br",
    siteName: "MarabaTec",
    images: [
      {
        url: "https://colegiomarabatec.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MarabaTec - Educação Técnica de Qualidade",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MarabaTec - Cursos Técnicos e Profissionalizantes",
    description:
      "Cursos técnicos de qualidade reconhecidos pelo MEC. Matricule-se na MarabaTec e conquiste seu futuro!",
    images: ["https://colegiomarabatec.com.br/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth scroll-pt-24">
      <head>
        {/* SEO Schema e Favicon */}
        <SchemaOrg />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#024E0E" />
        <meta
          name="google-site-verification"
          content="2OJFiuwDv2e14O4Vb41KUDDSFW-5N1yVrTPy_bGSAYw"
        />
      </head>

      <body
        className={`${montserrat.className} bg-white text-gray-900 antialiased`}
      >
        <div className="flex">
          {/* Sidebar fixa */}
          <Sidebar />

          {/* Conteúdo principal */}
          <main className="flex-1 overflow-x-hidden transition-all duration-300">
            {children}

            {/* Botão do WhatsApp e Cookie Banner globais */}
            <WhatsAppButton />
            <CookieConsent />
          </main>
        </div>
      </body>
    </html>
  );
}
