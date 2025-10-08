"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Modal from "./modalContactsCourses/modal";
import SubscriptionForm from "@/components/modalContactsCourses/SubscriptionForm";

export default function MotivacionalSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"form" | "loading" | "success">(
    "form"
  );

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("loading");

    setTimeout(() => {
      setFormStatus("success");
    }, 2000);
  };

  return (
    <>
      <section className="relative bg-gradient-to-r from-[#3C1361] via-[#7F2CCB] to-[#7F2CCB] text-white py-20 px-6 md:px-12 overflow-hidden rounded-3xl shadow-2xl max-w-7xl mx-auto my-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto Motivacional */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span className="uppercase text-sm tracking-[0.2em] text-[#F2960E] font-semibold">
              Transforme seu Futuro
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Conquiste Seu Curso <br />e Alcance{" "}
              <span className="text-[#F2960E] drop-shadow-md">
                Grandes Resultados
              </span>
            </h2>
            <p className="text-lg text-gray-100 leading-relaxed max-w-lg">
              Estude com especialistas, conquiste sua certificação reconhecida e
              abra portas para novas oportunidades. Tenha a carreira que sempre
              sonhou e aumente seus ganhos com uma formação premium.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <a href="#cursos">
                <Button className="bg-[#F2960E] text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-[#ffb347] hover:scale-105 transition-all duration-300">
                  Quero Conquistar Agora
                </Button>
              </a>
              <Button
                onClick={() => setIsModalOpen(true)}
                className="relative overflow-hidden group px-8 py-3 rounded-xl text-white font-semibold border border-white/30 backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <span className="relative z-10">Fale com um Consultor</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F2960E] to-[#EE820F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-sm"></div>
              </Button>
            </div>
          </motion.div>

          {/* Imagem Motivacional */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-[#F2960E]/30"
          >
            <Image
              src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg"
              alt="Aluno conquistando seu futuro"
              fill
              className="object-cover scale-105 hover:scale-110 transition-transform duration-500"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Modal de Inscrição */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <SubscriptionForm
          formStatus={formStatus}
          selectedContent="Curso Premium"
          onSubmit={handleFormSubmit}
          onCancel={() => setIsModalOpen(false)}
          onSuccessRedirect={() =>
            (window.location.href = "https://wa.me/seunumerowhatsapp")
          }
        />
      </Modal>
    </>
  );
}
