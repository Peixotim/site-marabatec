import Link from "next/link";
import { Award } from "lucide-react";
import { slugify } from "@/utils/slugify";

export interface CourseCardProps {
  title: string;
  subTitle: string;
  img?: {
    src: string;
    alt: string;
  };
  rating: number;
  badge?: string;
  description?: string;
}

export default function CourseCard({
  title,
  subTitle,
  description,
  badge,
}: CourseCardProps) {
  return (
    <div
      className="group w-full max-w-sm rounded-3xl border border-[#E5D0FF] 
      bg-gradient-to-br from-white via-[#FBF8FF] to-[#F6EEFF] 
      p-6 shadow-[0_4px_20px_rgba(75,0,130,0.08)] hover:shadow-[0_8px_30px_rgba(242,150,14,0.25)]
      hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col font-sans h-full"
    >
      {/* Cabeçalho */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="px-3 py-1 text-xs font-semibold rounded-full 
          bg-gradient-to-r from-[#7F2CCB]/20 to-[#4B0082]/30 
          text-[#4B0082] border border-[#E0D0FF]"
        >
          {subTitle}
        </span>
        <Award
          className="text-[#F2A413] group-hover:rotate-12 transition-transform duration-300"
          size={22}
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-grow">
        <h2
          className="text-2xl font-bold text-[#4B0082] mb-3 
          transition-colors duration-300 group-hover:text-[#F2A413]"
        >
          {title}
        </h2>

        {description && (
          <p className="text-[#3B3B3B] text-sm mb-6 leading-relaxed">
            {badge && (
              <span className="font-semibold text-[#4B0082]">{badge} </span>
            )}
            {description}
          </p>
        )}

        <div className="flex-grow" />

        {/* Botão */}
        <Link
          href={`/cursos/${slugify(title)}`}
          className="mt-auto block w-full text-center py-3 rounded-xl font-semibold 
          bg-gradient-to-r from-[#4B0082] via-[#7F2CCB] to-[#4B0082] text-white 
          transition-all duration-500 hover:brightness-110 hover:scale-[1.04]
          hover:shadow-[0_0_18px_rgba(242,150,14,0.45)]"
        >
          Saiba Mais
        </Link>
      </div>
    </div>
  );
}
