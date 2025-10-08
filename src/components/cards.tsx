import { Clock, Users, Award } from "lucide-react";
import Link from "next/link";
import { slugify } from "@/utils/slugify";

export interface CardPageProps {
  title: string;
  description: string;
  category: string;
  maisClicado: boolean;
  lancamentos: boolean;
  flag: string;
  benneficies: string[];
  img?: {
    src: string;
    alt: string;
  };
  bgColorFlag: string;
  bgColorCategory: string;
  bgColorHover: string;
  duration?: string;
  studentCount?: number;
}

export default function CardPage({
  title,
  description,
  category,
  benneficies,
  bgColorCategory,
  duration,
  studentCount,
}: CardPageProps) {
  const courseSlug = slugify(category);

  return (
    <div
      className="group w-full max-w-sm rounded-3xl border-2 border-[#]
      bg-white p-6 shadow-md hover:shadow-lg hover:-translate-y-2 
      transition-all duration-500 ease-out flex flex-col font-sans overflow-hidden
      hover:border-[#]"
    >
      {/* Cabeçalho */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${bgColorCategory} text-white`}
        >
          {category}
        </span>
        <Award
          className="text-[#F2960E] group-hover:rotate-12 transition-transform duration-300"
          size={22}
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-grow">
        <h2
          className="text-2xl font-bold text-[#4B0082] mb-2 
          transition-colors duration-300 group-hover:text-[#F2960E]"
        >
          {title}
        </h2>

        <p className="text-black text-sm mb-6 leading-relaxed">{description}</p>

        {(duration || studentCount) && (
          <div className="flex items-center gap-8 text-gray-600 mb-6">
            {duration && (
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-[#4B0082]" />
                <span className="text-sm font-medium">{duration}</span>
              </div>
            )}
            {studentCount && (
              <div className="flex items-center gap-2">
                <Users size={18} className="text-[#4B0082]" />
                <span className="text-sm font-medium">
                  {studentCount} alunos
                </span>
              </div>
            )}
          </div>
        )}

        {/* Benefícios */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            Especializações:
          </h3>
          <div className="flex flex-wrap gap-2">
            {benneficies.map((item, index) => (
              <span
                key={index}
                className="bg-[#F9F5FF] text-[#4B0082] px-3 py-1 rounded-full text-xs font-medium border border-[#E5D0FF]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Botão */}
        <div className="mt-auto">
          <Link
            href={`/cursos/${courseSlug}`}
            className="block w-full text-center py-3 rounded-xl font-semibold 
            bg-gradient-to-r from-[#4B0082] via-[#7F2CCB] to-[#4B0082]
            text-white transition-all duration-500 
            hover:brightness-110 hover:shadow-[0_0_18px_rgba(242,150,14,0.45)]
            hover:scale-[1.04]"
          >
            Saiba Mais
          </Link>
        </div>
      </div>
    </div>
  );
}
