"use client";
import CertificationSteps from "@/components/CertificationSteps";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/Banner";
import Storaged from "@/utils/storaged";
import { useState } from "react";
import SearchSection from "@/components/search";
import CardPage from "@/components/cards";
import Contact from "@/components/contact";
import MotivacionalSection from "@/components/MotivacionalSection";
import CursosPresenciais from "@/components/CursosPresenciais"; // 🔥 cards diferenciados

export default function Home() {
  const cardProps = Storaged();

  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("todos");

  // --- Lógica de filtragem combinada (Busca + Filtro) ---
  const filteredCards = cardProps.filter((card) => {
    const searchTermLower = searchTerm.toLowerCase();

    const matchesSearch =
      (card.title || "").toLowerCase().includes(searchTermLower) ||
      (card.description || "").toLowerCase().includes(searchTermLower);

    let matchesFilter = true;

    if (activeFilter === "mais_clicados") {
      matchesFilter = card.maisClicado === true;
    } else if (activeFilter === "lancamentos") {
      matchesFilter = card.lancamentos === true;
    } else if (activeFilter === "presenciais") {
      // 🔍 Filtro especial — mostra apenas cursos presenciais
      matchesFilter =
        card.category === "Curso Técnico em Enfermagem" ||
        card.category === "Curso de Refrigeração e Climatização";
    }

    return matchesSearch && matchesFilter;
  });

  // --- Lógica de exibição ---
  const showOnlyPresenciais = activeFilter === "presenciais";

  return (
    <>
      <main className="mt-0">
        <HeroSection />
        <MotivacionalSection />

        {/* 🔎 Seção de Busca */}
        <SearchSection
          searchTerm={searchTerm}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* 🩺 Seção de Cursos Presenciais */}
        {(activeFilter === "todos" || activeFilter === "presenciais") && (
          <section id="presenciais" className="py-12 lg:py-8">
            <div className="max-w-7xl mx-auto px-4">
              {/* Exibe o título apenas quando não estiver no filtro exclusivo */}
              {activeFilter === "todos" && <h2 className=""></h2>}
              <CursosPresenciais />
            </div>
          </section>
        )}

        {/* 🧩 Cursos em Destaque */}
        {!showOnlyPresenciais && (
          <>
            <hr className="max-w-5xl mx-auto border-slate-200 my-6" />

            <section id="cursos" className="py-12 lg:py-12">
              <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-black mb-8 text-center">
                  Áreas em Destaque
                </h2>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                  {filteredCards.map((card, i) => (
                    <CardPage key={i} {...card} />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* 🎓 Certificação */}
        <div id="Certificado">
          <CertificationSteps />
        </div>

        {/* 📞 Contato */}
        <div id="contato">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
