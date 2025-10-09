"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Stethoscope, Snowflake } from "lucide-react";

export default function CursosPresenciais() {
  const cursos = [
    {
      title: "Curso Técnico em Enfermagem",
      description:
        "Aprenda na prática com profissionais experientes e torne-se referência no cuidado à saúde.",
      icon: <Stethoscope size={40} className="text-white" />,
      href: "/cursos/enfermagemPresencial",
      bg: "from-[#7F2CCB] to-[#4B0082]",
      accent: "shadow-[0_0_25px_#F2960Eaa]",
    },
    {
      title: "Curso de Refrigeração e Climatização",
      description:
        "Domine as técnicas de instalação, manutenção e climatização com foco no mercado moderno.",
      icon: <Snowflake size={40} className="text-white" />,
      href: "/cursos/refrigeracao-e-climatizacao-Presencial",
      bg: "from-[#F2960E] to-[#EE820F]",
      accent: "shadow-[0_0_25px_#7F2CCBaa]",
    },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white via-[#F9F5FF]/40 to-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4B0082] mb-12">
          Cursos <span className="text-[#F2960E]">Presenciais</span> Exclusivos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cursos.map((curso, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04, rotate: i % 2 ? 0.5 : -0.5 }}
              transition={{ type: "spring", stiffness: 200, damping: 14 }}
              className={`relative p-10 rounded-3xl bg-gradient-to-br ${curso.bg} text-white shadow-xl ${curso.accent} overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-2xl bg-white/10">{curso.icon}</div>
                <h3 className="text-2xl font-extrabold">{curso.title}</h3>
                <p className="text-white/90 max-w-xs">{curso.description}</p>
                <Link
                  href={curso.href}
                  className="mt-6 inline-block px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-sm border border-white/30 transition-all duration-300"
                >
                  Saiba Mais
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
