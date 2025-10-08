import { Search, List, Flame, Star } from "lucide-react";

interface SearchSectionProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function SearchSection({
  searchTerm,
  onSearchChange,
  activeFilter,
  onFilterChange,
}: SearchSectionProps) {
  return (
    <section className="w-full bg-gradient-to-b from-[#4B0082]/5 via-white to-[#F2960E]/10 py-16 px-4 sm:px-8 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#4B0082] tracking-tight drop-shadow-sm">
          Encontre seu <span className="text-[#F2960E]">Curso Ideal</span>
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-700 leading-relaxed">
          Explore nossa ampla gama de cursos técnicos e de pós-graduação e
          encontre o que melhor se adapta aos seus objetivos profissionais.
        </p>

        {/* Campo de busca */}
        <div className="relative mt-10">
          <div className="flex w-full max-w-3xl mx-auto rounded-2xl bg-white/90 shadow-lg shadow-purple-200/40 overflow-hidden ring-2 ring-transparent focus-within:ring-[#4B0082] transition-all duration-300 backdrop-blur-sm">
            <input
              type="text"
              placeholder="Buscar por área, curso ou palavra-chave..."
              className="flex-grow w-full px-5 py-4 bg-transparent text-lg text-slate-800 placeholder-slate-400 outline-none"
              value={searchTerm}
              onChange={onSearchChange}
            />
            <button className="bg-gradient-to-r from-[#4B0082] via-[#7F2CCB] to-[#F2960E] px-6 text-white flex items-center justify-center hover:brightness-110 transition-all duration-300">
              <Search size={24} />
            </button>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button
            onClick={() => onFilterChange("todos")}
            className={`flex items-center gap-2.5 pl-4 pr-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md ${
              activeFilter === "todos"
                ? "bg-gradient-to-r from-[#F2960E] to-[#EE820F] text-white scale-105 shadow-lg"
                : "bg-white text-[#4B0082] border border-slate-200 hover:bg-[#F9F5FF]"
            }`}
          >
            <List size={18} />
            Todos os Cursos
          </button>

          <button
            onClick={() => onFilterChange("mais_clicados")}
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md ${
              activeFilter === "mais_clicados"
                ? "bg-gradient-to-r from-[#4B0082] to-[#7F2CCB] text-white scale-105 shadow-lg"
                : "bg-white border border-[#4B0082] text-[#4B0082] hover:bg-purple-50"
            }`}
          >
            <Flame size={18} />
            Mais Clicados
          </button>

          <button
            onClick={() => onFilterChange("lancamentos")}
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md ${
              activeFilter === "lancamentos"
                ? "bg-gradient-to-r from-[#FFD700] to-[#F2960E] text-[#4B0082] scale-105 shadow-lg"
                : "bg-white border border-[#FFD700] text-[#B8860B] hover:bg-yellow-50"
            }`}
          >
            <Star size={18} />
            Lançamentos
          </button>
        </div>
      </div>
    </section>
  );
}
