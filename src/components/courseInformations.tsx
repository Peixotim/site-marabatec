"use client";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Award,
  Users,
  Target,
  Star,
  ArrowLeft,
} from "lucide-react";
import { slugify } from "@/utils/slugify";
import { CourseCardProps } from "./courseCard";
import { useState, useCallback } from "react";
import Modal from "./modalContactsCourses/modal";
import SubscriptionForm from "./modalContactsCourses/SubscriptionForm";
import { submitSubscription } from "./lib/api";

export interface CourseSection {
  title: string;
  content: string;
}
export interface CourseInformationsProps {
  title: string;
  sections: CourseSection[];
  img?: { src: string; alt: string };
  whatYouWillLearn?: string[];
  depoiments?: { texto: string; autor: string; cargo: string };
}
interface ComponentProps {
  course: CourseInformationsProps;
  cardData?: CourseCardProps;
}

export default function CourseInformations({
  course,
  cardData,
}: ComponentProps) {
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
        course: course.title,
        enterpriseId: Number(process.env.NEXT_PUBLIC_ENTERPRISE_ID),
      };

      await submitSubscription(data);

      const message = `Olá! Meu nome é ${data.name} e tenho interesse no curso de ${data.course}. Gostaria de mais informações sobre a matrícula.`;
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

  const categorySlug = cardData ? slugify(cardData.subTitle) : "";

  return (
    <div className="relative bg-gradient-to-br font-sans overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br  to-[#F2A413]/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 z-10">
        {/* Botão Voltar */}
        <Link
          href={categorySlug ? `/cursos/${categorySlug}` : "/"}
          className="group mb-8 inline-flex items-center gap-2 text-[#4B0082] font-semibold hover:text-[#F2A413] transition-colors"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Voltar para {cardData?.subTitle || "Cursos"}
        </Link>

        {/* Cabeçalho */}
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="flex flex-col gap-4 pt-4">
            <span className="font-bold text-[#7F2CCB] uppercase tracking-wider">
              {cardData?.subTitle}
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#4B0082] tracking-tight">
              {course.title}
            </h1>
            <p className="text-lg text-[#5A5470] leading-relaxed">
              Transforme sua carreira com um curso prático, focado no mercado e
              com certificação reconhecida.
            </p>

            {cardData && cardData.rating > 0 && (
              <div className="flex items-center gap-2 text-[#F2A413] mt-2">
                {Array.from({ length: Math.round(cardData.rating) }).map(
                  (_, index) => (
                    <Star key={index} className="w-6 h-6" fill="currentColor" />
                  )
                )}
                <span className="text-sm text-[#5A5470] font-medium ml-2">
                  ({cardData.rating.toFixed(1)} de 5 estrelas)
                </span>
              </div>
            )}
          </div>

          {/* O que você vai aprender */}
          {course.whatYouWillLearn?.length ? (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#E5D0FF]">
              <h2 className="text-2xl font-bold text-[#4B0082] mb-6 flex items-center gap-3">
                <Award className="text-[#F2A413]" /> O que você vai aprender
              </h2>
              <ul className="space-y-4">
                {course.whatYouWillLearn.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle
                      className="text-[#F2A413] mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-[#5A5470]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </header>

        {/* CTA */}
        <div className="mt-12 lg:mt-16 bg-gradient-to-br from-[#4B0082] via-[#7F2CCB] to-[#4B0082] rounded-2xl p-8 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-white">
          {course.img && (
            <div className="md:col-span-1 aspect-[4/3] relative rounded-xl overflow-hidden">
              <Image
                src={course.img.src}
                alt={course.img.alt}
                fill
                className="object-cover opacity-90 hover:opacity-100 transition-all"
              />
            </div>
          )}

          <div className="md:col-span-2 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-white">
              Pronto para dar o próximo passo?
            </h3>
            <p className="text-white/90 mt-2">
              Garanta sua vaga e comece a transformar sua carreira agora mesmo.
            </p>
            <button
              onClick={openModal}
              className="mt-6 w-full max-w-xs flex flex-col items-center justify-center gap-1 bg-white/10 text-white p-4 rounded-lg font-bold text-lg transition-all duration-300 border border-white/20 hover:bg-white/20 hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <CheckCircle size={22} className="text-[#F2A413]" />
                <span>Quero me Inscrever</span>
              </div>
              <span className="text-xs font-normal opacity-80">
                Vagas limitadas!
              </span>
            </button>
          </div>
        </div>

        {/* Conteúdo */}
        <main className="mt-12 lg:mt-16 space-y-8">
          {course.sections.map((section, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#E5D0FF]"
            >
              <h2 className="text-2xl font-bold text-[#4B0082] mb-4 flex items-center gap-3">
                {section.title.includes("Objetivo") ? (
                  <Target className="text-[#F2A413]" />
                ) : (
                  <Users className="text-[#F2A413]" />
                )}
                {section.title}
              </h2>
              <div
                className="prose max-w-none text-[#5A5470] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          ))}

          {/* Depoimento */}
          {course.depoiments && (
            <div className="bg-gradient-to-r from-[#4B0082] via-[#7F2CCB] to-[#7F2CCB] rounded-xl p-10 sm:p-12 shadow-2xl text-center text-white">
              <blockquote className="max-w-3xl mx-auto">
                <p className="text-2xl sm:text-3xl font-light italic text-[#F2A413]">
                  “{course.depoiments.texto}”
                </p>
                <footer className="mt-8">
                  <p className="font-bold text-lg text-white">
                    {course.depoiments.autor}
                  </p>
                  <p className="text-sm text-white/80">
                    {course.depoiments.cargo}
                  </p>
                </footer>
              </blockquote>
            </div>
          )}
        </main>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <SubscriptionForm
          formStatus={formStatus}
          onSubmit={handleFormSubmit}
          onCancel={closeModal}
          onSuccessRedirect={handleWhatsAppRedirect}
          selectedContent={course.title}
        />
      </Modal>
    </div>
  );
}
