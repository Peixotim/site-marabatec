"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import Modal from "@/components/modalContactsCourses/modal";
import SubscriptionForm from "@/components/modalContactsCourses/SubscriptionForm";
import { submitSubscription } from "@/components/lib/api";

export default function EJAPage() {
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
        course: "Educação de Jovens e Adultos (EJA)",
        enterpriseId: Number(process.env.NEXT_PUBLIC_ENTERPRISE_ID),
      };

      await submitSubscription(data);

      const message = `Olá! Meu nome é ${data.name} e tenho interesse no curso EJA. Gostaria de mais informações sobre a matrícula.`;
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
    <main className="bg-gradient-to-b from-[#F9FAFB] to-[#E8EAF6] py-12">
      <section className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Cabeçalho */}
        <h1 className="text-4xl font-extrabold text-indigo-800 mb-4">
          Educação de Jovens e Adultos (EJA)
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Ainda dá tempo de mudar sua história! O <strong>EJA</strong> é feito
          para quem não teve a chance de concluir os estudos e quer alcançar
          novos sonhos com o diploma na mão.
        </p>

        {/* Imagem destaque */}
        <div className="mt-8 flex justify-center">
          <Image
            src="/images/eja.jpeg"
            alt="Pessoa feliz recebendo certificado do EJA"
            width={900}
            height={500}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Benefícios */}
      <section className="mt-16 bg-white py-12 shadow-inner">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
            Por que escolher o EJA AvançaTec?
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-left text-gray-700">
            <li className="bg-indigo-50 p-5 rounded-xl shadow-sm">
              📘 <strong>Aulas fáceis e diretas</strong> — conteúdo adaptado,
              com explicações simples e exemplos do dia a dia.
            </li>
            <li className="bg-indigo-50 p-5 rounded-xl shadow-sm">
              🕐 <strong>Estude no seu ritmo</strong> — organize seus horários,
              sem pressão.
            </li>
            <li className="bg-indigo-50 p-5 rounded-xl shadow-sm">
              👩‍🏫 <strong>Acompanhamento de verdade</strong> — professores que
              ajudam de perto, com paciência e atenção.
            </li>
            <li className="bg-indigo-50 p-5 rounded-xl shadow-sm">
              🎓 <strong>Certificado reconhecido pelo MEC</strong> — abra portas
              para o mercado de trabalho e novos cursos.
            </li>
          </ul>
        </div>
      </section>

      {/* Chamada para ação */}
      <section className="py-16 text-center bg-gradient-to-r from-indigo-700 to-purple-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Chegou sua hora de recomeçar 💪
        </h2>
        <p className="text-lg mb-8">
          Faça sua matrícula agora e dê o primeiro passo para o futuro que você
          sempre quis.
        </p>

        <button
          onClick={openModal}
          className="px-10 py-4 bg-white text-indigo-700 font-bold rounded-full shadow-lg 
          hover:scale-105 hover:shadow-indigo-300 transition-all duration-300"
        >
          Quero me inscrever
        </button>
      </section>

      {/* Modal de inscrição */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <SubscriptionForm
          formStatus={formStatus}
          onSubmit={handleFormSubmit}
          onCancel={closeModal}
          onSuccessRedirect={handleWhatsAppRedirect}
          selectedContent="Educação de Jovens e Adultos (EJA)"
        />
      </Modal>
    </main>
  );
}
