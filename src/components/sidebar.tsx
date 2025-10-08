"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Book,
  Award,
  Phone,
  Menu,
  X,
  GraduationCapIcon,
} from "lucide-react";
import Image from "next/image";

const menuItems = [
  { name: "Início", icon: <Home size={20} />, href: "/" },
  { name: "Cursos", icon: <Book size={20} />, href: "#cursos" },
  { name: "Certificação", icon: <Award size={20} />, href: "#Certificado" },
  { name: "Contato", icon: <Phone size={20} />, href: "#contato" },
  {
    name: "SISTEC-MEC",
    icon: <GraduationCapIcon size={20} />,
    href: "/sistec",
  },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 📱 Botão Mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-gradient-to-r from-[#4B0082] to-[#803dcd] text-white p-3 rounded-xl shadow-xl hover:scale-105 hover:shadow-purple-400/30 transition-all duration-300"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* 🖥️ Sidebar Desktop */}
      <motion.aside
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className={`hidden lg:flex sticky top-0 left-0 h-screen
        ${expanded ? "w-64" : "w-24"} 
        bg-gradient-to-b from-[#3C1361] via-[#7F2CCB] to-[#4B0082]
        backdrop-blur-xl shadow-2xl border-r border-white/10 
        text-white transition-all duration-300`}
      >
        <div className="flex flex-col justify-between w-full p-5">
          {/* LOGO */}
          <motion.div
            className="flex flex-col items-center justify-center mb-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <AnimatePresence mode="wait">
              {expanded ? (
                <motion.div
                  key="fullLogo"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-36 h-24 transition-all duration-300"
                >
                  <Image
                    src="/images/logo.png"
                    alt="Logo completa MarabáTec"
                    fill
                    className="object-contain drop-shadow-lg"
                    priority
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="miniLogo"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-12 h-12 transition-all duration-300"
                >
                  <Image
                    src="/images/M.png"
                    alt="Símbolo M MarabáTec"
                    fill
                    className="object-contain drop-shadow-lg"
                    priority
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* LINKS */}
          <ul className="space-y-3">
            {menuItems.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="group flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300
                  hover:bg-gradient-to-r hover:from-[#803dcd]/30 hover:to-[#F2960E]/20 hover:shadow-lg"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#F2960E] group-hover:text-white transition-all"
                  >
                    {item.icon}
                  </motion.div>

                  {expanded && (
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-medium text-white group-hover:text-[#F2960E]"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* FOOTER */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 text-center text-xs text-white/60"
          >
            {expanded ? (
              <>
                <p>© 2025 MarabáTec</p>
                <p className="text-[10px] text-white/40 mt-1">
                  Todos os direitos reservados
                </p>
              </>
            ) : (
              "©"
            )}
          </motion.div>
        </div>
      </motion.aside>

      {/* 📱 Sidebar Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ type: "spring", stiffness: 80 }}
            className="fixed top-0 left-0 z-50 w-64 h-full bg-gradient-to-b from-[#3C1361] via-[#7F2CCB] to-[#4B0082] backdrop-blur-xl shadow-2xl p-6 flex flex-col justify-between rounded-r-3xl text-white"
          >
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-32 h-20 mb-3">
                <Image
                  src="/images/logo.png"
                  alt="Logo completa MarabáTec"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
              <p className="text-lg font-bold">
                MARABÁ<span className="text-[#F2960E]">TEC</span>
              </p>
              <p className="text-xs text-[#F2960E]/80 uppercase tracking-wide">
                Colégio Técnico
              </p>
            </div>

            <ul className="space-y-6">
              {menuItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-[#F2960E] transition-all duration-300"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <p className="text-xs text-white/50 text-center mt-8">
              © 2025 MarabáTec
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
