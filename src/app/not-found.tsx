// app/not-found.tsx
"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { ArrowLeft, GraduationCap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5531982631563";
const WHATSAPP_MESSAGE =
  "Olá! Cheguei a uma página não encontrada no site e preciso de ajuda.";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function NotFound() {
  // Parallax/Glow suave que segue o mouse (respeita motion reduzido)
  const x = useSpring(0, { stiffness: 80, damping: 20, mass: 0.5 });
  const y = useSpring(0, { stiffness: 80, damping: 20, mass: 0.5 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const relX = ((e.clientX / innerWidth) * 100 - 50) / 2; // -25..25
      const relY = ((e.clientY / innerHeight) * 100 - 50) / 2;
      x.set(relX);
      y.set(relY);
    };
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mql.matches) window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [x, y]);

  const glow = useMotionTemplate`radial-gradient(600px 220px at calc(50% + ${x}%) calc(50% + ${y}%), rgba(242,150,14,0.14), transparent 60%)`;

  return (
    <main className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-[#4B0082] via-[#6a37a5] to-[#37165c] text-white">
      {/* textura + glow dinâmico */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"
      />
      <motion.div
        aria-hidden
        style={{ backgroundImage: glow }}
        className="absolute -inset-x-24 -top-16 bottom-0 opacity-80 pointer-events-none"
      />

      {/* blobs decorativos */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#F2960E]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-[#EE820F]/20 blur-3xl"
      />

      <section className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 py-16 md:py-24 lg:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center relative"
        >
          {/* chip */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-md px-4 py-1.5 rounded-full"
          >
            <GraduationCap className="w-4 h-4 text-[#EE820F]" />
            <span className="text-[11px] sm:text-xs font-semibold">
              Educação Técnica de Excelência
            </span>
          </motion.div>

          {/* título */}
          <motion.h1
            variants={fadeUp}
            className="mt-6 font-extrabold tracking-tight drop-shadow-lg text-balance text-5xl sm:text-6xl md:text-7xl"
          >
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#ffedd5]">
              4
              <span className="text-[#F2960E] drop-shadow-[0_0_10px_rgba(242,150,14,.45)]">
                0
              </span>
              4
            </span>
          </motion.h1>

          {/* subtítulo */}
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base sm:text-lg md:text-xl text-white/90 text-pretty"
          >
            Ops! A página que você procura não existe ou foi movida.
          </motion.p>

          {/* cards */}
          <motion.div
            variants={fadeUp}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 text-left shadow-lg"
            >
              <h3 className="font-semibold text-white">
                O que você pode fazer?
              </h3>
              <ul className="mt-3 text-white/85 list-disc list-inside space-y-1 text-sm sm:text-[15px]">
                <li>Voltar para a página inicial.</li>
                <li>Explorar nossos cursos.</li>
                <li>Falar com um consultor agora.</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 text-left shadow-lg relative overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 opacity-30">
                <Sparkles className="w-16 h-16 text-[#F2960E]" />
              </div>
              <h3 className="font-semibold text-white">Ainda com dúvidas?</h3>
              <p className="mt-3 text-white/85 text-sm sm:text-[15px]">
                Nossa equipe está pronta para ajudar você a encontrar o conteúdo
                certo.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold bg-gradient-to-r from-[#F2960E] to-[#EE820F] text-white shadow-md hover:brightness-110 transition"
              >
                Falar no WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* ações */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#F2960E] text-white font-semibold px-6 sm:px-8 py-4 rounded-xl shadow-lg hover:bg-[#ffb347] transition-all duration-300"
            >
              <Link href="/">
                <span className="inline-flex items-center">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Voltar para o início
                </span>
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="border border-white/20 bg-white/10 text-white font-semibold px-6 sm:px-8 py-4 rounded-xl backdrop-blur-md relative overflow-hidden group"
            >
              <Link href="#cursos">
                <span className="relative z-10">Ver cursos disponíveis</span>
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#F2960E] to-[#EE820F] blur-sm"
                />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-[#25D366] text-white font-semibold px-6 sm:px-8 py-4 rounded-xl shadow-lg hover:brightness-110 transition-all duration-300"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com um consultor no WhatsApp"
              >
                Falar no WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* partículas sutis */}
          <Particles />
        </motion.div>
      </section>
    </main>
  );
}

function Particles() {
  const dots = Array.from({ length: 18 });
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none">
      {dots.map((_, i) => (
        <motion.span
          key={i}
          className="absolute block w-[3px] h-[3px] rounded-full bg-white/70"
          initial={{
            opacity: 0,
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: 0.8,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: ["0%", "-8%", "0%"],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            repeatType: "mirror",
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
