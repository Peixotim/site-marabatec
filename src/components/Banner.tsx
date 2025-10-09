"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, BookUser, GraduationCap, Star, Users } from "lucide-react";
import Link from "next/link";
import Modal from "./modalContactsCourses/modal";
import SubscriptionForm from "./modalContactsCourses/SubscriptionForm";
import { submitSubscription } from "./lib/api";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const StatCard = ({
  value,
  label,
  i,
}: {
  value: string;
  label: string;
  i: number;
}) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="visible"
    custom={i}
    className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:bg-white/15 transition-all duration-300"
  >
    <p className="text-4xl lg:text-5xl font-extrabold text-white drop-shadow-md">
      {value}
    </p>
    <p className="text-sm text-white/80 mt-2">{label}</p>
  </motion.div>
);

const FeatureItem = ({
  icon,
  text,
  i,
}: {
  icon: React.ReactNode;
  text: string;
  i: number;
}) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="visible"
    custom={i}
    className="flex items-center gap-3 text-white/90 hover:text-[#F2960E] transition-colors duration-300"
  >
    <div className="p-2 bg-white/10 rounded-lg">{icon}</div>
    <p className="font-medium">{text}</p>
  </motion.div>
);

export const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"form" | "loading" | "success">(
    "form"
  );
  const [whatsappMessage, setWhatsappMessage] = useState("");

  const WHATSAPP_NUMBER = "5531982631563";

  const openModal = () => {
    setFormStatus("form");
    setIsModalOpen(true);
  };
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("loading");

    try {
      const formData = new FormData(event.currentTarget);
      const data = {
        name: formData.get("name") as string,
        phone: (formData.get("whatsapp") as string).replace(/\D/g, ""),
        areaOfInterest: formData.get("interestArea") as string,
        course: "Contato Geral (Hero Section)",
        enterpriseId: Number(process.env.NEXT_PUBLIC_ENTERPRISE_ID),
      };

      await submitSubscription(data);

      const message = `Olá! Meu nome é ${data.name} e tenho interesse na área de ${data.areaOfInterest}. Gostaria de mais informações.`;
      setWhatsappMessage(message);

      setFormStatus("success");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Houve um problema. Tente novamente.");
      setFormStatus("form");
    }
  };

  const handleWhatsAppRedirect = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    closeModal();
  };

  return (
    <>
      <section
        id="inicio"
        className="relative w-full bg-gradient-to-br from-[#4B0082] via-[#6a37a5] to-[#37165c] text-white py-16 md:py-20 px-6 lg:px-12 overflow-hidden"
      >
        {/* Textura de fundo */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Texto principal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 bg-white/10 text-xs font-semibold py-1.5 px-4 rounded-full backdrop-blur-sm border border-white/20 self-start"
            >
              <GraduationCap className="w-4 h-4 text-[#EE820F]" />
              Educação Técnica de Excelência
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight drop-shadow-lg"
            >
              Transformando Vidas Através da{" "}
              <span className="text-[#F2960E]">Educação</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-lg text-white/90 leading-relaxed max-w-lg"
            >
              Construindo profissionais do futuro com cursos técnicos por
              competência. Certificação reconhecida e metodologia inovadora.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <FeatureItem
                icon={<Award className="w-5 h-5 text-[#F2960E]" />}
                text="Certificação Oficial"
                i={3}
              />
              <FeatureItem
                icon={<Users className="w-5 h-5 text-[#F2960E]" />}
                text="Turmas Reduzidas"
                i={4}
              />
              <FeatureItem
                icon={<BookUser className="w-5 h-5 text-[#F2960E]" />}
                text="Professores Especialistas"
                i={5}
              />
              <FeatureItem
                icon={<Star className="w-5 h-5 text-[#F2960E]" />}
                text="Metodologia Única"
                i={6}
              />
            </div>

            {/* Botões */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={7}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Button
                size="lg"
                className="bg-[#F2960E] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-[#ffb347] hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="#cursos">Conheça Nossos Cursos</Link>
              </Button>

              <Button
                size="lg"
                onClick={openModal}
                className="relative overflow-hidden px-8 py-4 rounded-xl text-white font-semibold border border-white/20 backdrop-blur-md bg-white/10 group transition-all duration-300"
              >
                <span className="relative z-10">Fale com um Consultor</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F2960E] to-[#EE820F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-sm"></div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Cards animados */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-6 text-amber-500"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <StatCard value="500+" label="Alunos Certificados" i={1} />
            <StatCard value="15+" label="Cursos Disponíveis" i={2} />
            <StatCard value="98%" label="Taxa de Aprovação" i={3} />
            <StatCard value="5★" label="Avaliação Média" i={4} />
          </motion.div>
        </div>
      </section>

      {/* Modal de Inscrição */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <SubscriptionForm
          formStatus={formStatus}
          onSubmit={handleFormSubmit}
          onCancel={closeModal}
          onSuccessRedirect={handleWhatsAppRedirect}
          selectedContent="Área Desejada"
        />
      </Modal>
    </>
  );
};
