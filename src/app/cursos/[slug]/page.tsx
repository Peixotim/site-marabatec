"use client";

import { useParams } from "next/navigation";
import StoragedCourses from "@/utils/storagedCourses";
import StoragedCoursesInfo from "@/utils/storagedCoursesInformations";
import { slugify } from "@/utils/slugify";
import { CourseInformationsProps } from "@/components/courseInformations";
import CourseInformations from "@/components/courseInformations";
import CourseCard from "@/components/courseCard";
import Link from "next/link";

export default function CursosSlugPage() {
  const { slug } = useParams<{ slug: string }>();
  const decodedSlug = decodeURIComponent(slug || "");

  // --- LÓGICA PRINCIPAL ---

  const allCoursesForCards = StoragedCourses();
  const filteredByCategory = allCoursesForCards.filter(
    (course) => slugify(course.subTitle) === decodedSlug
  );

  // ==============================
  // 1️⃣ VISUALIZAÇÃO POR CATEGORIA
  // ==============================
  if (filteredByCategory.length > 0) {
    return (
      <div className="bg-gradient-to-br min-h-screen relative overflow-hidden">
        {/* Overlay decorativo */}
        <div className="absolute inset-0 bg-gradient-to-br to-[#F2A413]/10 pointer-events-none"></div>

        <div className="relative p-8 max-w-7xl mx-auto">
          {/* Botão de voltar */}
          <Link
            href="/"
            className="group relative mb-10 inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#4B0082] px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-500 hover:scale-105"
          >
            <div className="absolute inset-0 w-0 bg-[#F2A413] transition-all duration-500 ease-out group-hover:w-full"></div>
            <span className="relative flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:-translate-x-1"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Voltar
            </span>
          </Link>

          {/* Título da categoria */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#4B0082] leading-tight">
            Explore os melhores cursos de{" "}
            <span className="text-[#F2A413]">
              {filteredByCategory[0].subTitle}
            </span>
          </h1>

          <p className="text-[#4B0082]/80 text-lg mb-10 max-w-2xl">
            Aprimore suas habilidades com cursos reconhecidos e conteúdo de alta
            qualidade. Escolha abaixo e invista no seu futuro!
          </p>

          {/* Lista de cursos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredByCategory.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ==============================
  // 2️⃣ VISUALIZAÇÃO POR CURSO
  // ==============================
  const allCourseDetails = StoragedCoursesInfo();
  const course = allCourseDetails.find(
    (c: CourseInformationsProps) => slugify(c.title) === decodedSlug
  );

  if (course) {
    const cardData = allCoursesForCards.find((c) => c.title === course.title);
    return <CourseInformations course={course} cardData={cardData} />;
  }

  // ==============================
  // 3️⃣ PÁGINA DE ERRO
  // ==============================
  return (
    <div className="bg-gradient-to-br  flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-4xl font-extrabold text-[#4B0082] mb-3">
        Página não encontrada!
      </h1>
      <p className="text-[#4B0082]/70 text-lg mb-8 max-w-md">
        O conteúdo que você procura não existe ou foi movido. Verifique o
        endereço ou volte à página inicial.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4B0082] via-[#7F2CCB] to-[#F2A413] text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(242,164,19,0.5)]"
      >
        Voltar para o Início
      </Link>
    </div>
  );
}
