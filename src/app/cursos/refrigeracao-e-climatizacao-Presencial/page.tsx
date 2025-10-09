"use client";

import { Snowflake, Wrench, Thermometer, CheckCircle } from "lucide-react";
import { useState, useCallback } from "react";
import Modal from "@/components/modalContactsCourses/modal";
import SubscriptionForm from "@/components/modalContactsCourses/SubscriptionForm";
import { submitSubscription } from "@/components/lib/api";

export default function Refrigeração() {
  const depoimentos = [
    {
      nome: "Rafael Souza",
      texto:
        "O curso é prático e direto ao ponto. Já consegui meu primeiro emprego na área!",
    },
    {
      nome: "Marina Lopes",
      texto:
        "Professores experientes e aulas modernas. Super recomendo para quem quer empreender!",
    },
  ];

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
        course: "Curso de Refrigeração e Climatização",
        enterpriseId: Number(process.env.NEXT_PUBLIC_ENTERPRISE_ID),
      };
      await submitSubscription(data);
      const message = `Olá! Meu nome é ${data.name} e tenho interesse no curso de Refrigeração e Climatização. Gostaria de mais informações sobre a matrícula.`;
      setWhatsappMessage(message);
      setFormStatus("success");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Houve um problema. Por favor, tente novamente.");
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
    <main className="min-h-screen bg-gradient-to-b from-white via-[#FFF8F0] to-white text-[#4B0082] relative overflow-hidden">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F2A413]/10 via-transparent to-[#4B0082]/10 pointer-events-none" />

      {/* HERO */}
      <section className="relative text-center py-28 bg-gradient-to-r from-[#F2960E] via-[#EE820F] to-[#F2960E] text-white shadow-xl">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-black mb-4 animate-fade-in-down">
            Curso de Refrigeração e Climatização
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto animate-fade-in-up">
            Torne-se especialista em sistemas de refrigeração e climatização.
            Aulas presenciais com foco total em prática e inovação.
          </p>
          <button
            onClick={openModal}
            className="mt-8 px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold text-white text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            Quero me inscrever agora
          </button>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="max-w-6xl mx-auto py-20 px-6 space-y-16 relative z-10">
        {/* Benefícios */}
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <Snowflake size={44} className="mx-auto text-[#4B0082]" />,
              title: "Tecnologia e Sustentabilidade",
              desc: "Domine sistemas ecológicos e aprenda soluções modernas para o setor.",
            },
            {
              icon: <Wrench size={44} className="mx-auto text-[#4B0082]" />,
              title: "Treinamento Prático",
              desc: "Aulas presenciais com equipamentos reais e foco total na prática.",
            },
            {
              icon: (
                <Thermometer size={44} className="mx-auto text-[#4B0082]" />
              ),
              title: "Alta Empregabilidade",
              desc: "Profissionais formados são altamente requisitados no mercado.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white shadow-lg border border-[#F2A413]/30 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              {item.icon}
              <h3 className="font-bold mt-3 text-lg text-[#4B0082]">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="bg-gradient-to-br from-[#FFF7EB] to-[#FFFAF3] p-10 rounded-3xl shadow-2xl border border-[#F2960E]/40">
          <h2 className="text-3xl font-bold mb-10 text-center text-[#4B0082]">
            Depoimentos de Alunos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {depoimentos.map((d, i) => (
              <blockquote
                key={i}
                className="p-6 rounded-2xl bg-white shadow-md border-l-4 border-[#F2960E]"
              >
                <p className="italic text-gray-700 mb-3">“{d.texto}”</p>
                <footer className="text-[#4B0082] font-semibold">
                  {d.nome}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="mt-20 bg-gradient-to-r from-[#4B0082] via-[#7F2CCB] to-[#4B0082] rounded-3xl p-10 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Garanta sua vaga agora mesmo!
          </h3>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Dê o próximo passo em sua carreira e conquiste certificação técnica
            reconhecida nacionalmente.
          </p>
          <button
            onClick={openModal}
            className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-8 py-4 text-lg font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            <CheckCircle size={22} className="text-[#F2A413]" />
            Quero me inscrever
          </button>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <SubscriptionForm
          formStatus={formStatus}
          onSubmit={handleFormSubmit}
          onCancel={closeModal}
          onSuccessRedirect={handleWhatsAppRedirect}
          selectedContent="Curso de Refrigeração e Climatização"
        />
      </Modal>
    </main>
  );
}
