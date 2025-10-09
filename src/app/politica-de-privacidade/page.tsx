"use client";
import {
  ShieldCheck,
  ArrowLeft,
  Lock,
  User,
  Share2,
  Shield,
  RefreshCw,
  FileCheck,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function PoliticaPrivacidade() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#efeafe] via-[#f6f2ff] to-white py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 border border-[#4B0082]/10">
        {/* Cabeçalho */}
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-[#4B0082] to-[#6a37a5] shadow-md">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold text-zinc-900">
            Política de Privacidade
          </h1>
        </div>

        <p className="text-lg text-zinc-700 leading-relaxed mb-10">
          Sua privacidade é muito importante para nós. Esta Política de
          Privacidade descreve como coletamos, usamos e protegemos suas
          informações em conformidade com a{" "}
          <span className="font-semibold text-[#F2960E]">
            Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)
          </span>
          .
        </p>

        {/* Seções */}
        <div className="space-y-8 text-zinc-700 leading-relaxed">
          <section className="p-6 rounded-2xl bg-white border border-[#4B0082]/10 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <User className="w-6 h-6 text-[#F2960E]" />
              <h2 className="text-xl font-bold text-zinc-900">
                1. Dados que coletamos
              </h2>
            </div>
            <ul className="list-disc pl-6 space-y-1 text-zinc-700">
              <li>Nome completo</li>
              <li>Telefone / WhatsApp</li>
              <li>E-mail (quando informado)</li>
              <li>Área de interesse ou curso escolhido</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl bg-white border border-[#4B0082]/10 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <FileCheck className="w-6 h-6 text-[#F2960E]" />
              <h2 className="text-xl font-bold text-zinc-900">
                2. Como utilizamos seus dados
              </h2>
            </div>
            <p className="text-zinc-700">
              Os dados coletados serão utilizados exclusivamente para:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 text-zinc-700">
              <li>Entrar em contato sobre sua inscrição.</li>
              <li>Enviar informações relevantes sobre cursos e eventos.</li>
              <li>Atender solicitações de suporte.</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl bg-white border border-[#4B0082]/10 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Share2 className="w-6 h-6 text-[#F2960E]" />
              <h2 className="text-xl font-bold text-zinc-900">
                3. Compartilhamento de dados
              </h2>
            </div>
            <p className="text-zinc-700">
              Não compartilhamos seus dados pessoais com terceiros, exceto
              quando exigido por lei ou para prestação dos serviços contratados.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white border border-[#4B0082]/10 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Lock className="w-6 h-6 text-[#F2960E]" />
              <h2 className="text-xl font-bold text-zinc-900">4. Segurança</h2>
            </div>
            <p className="text-zinc-700">
              Adotamos medidas técnicas e organizacionais para proteger seus
              dados contra acessos não autorizados, perda ou divulgação
              indevida.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white border border-[#4B0082]/10 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-6 h-6 text-[#F2960E]" />
              <h2 className="text-xl font-bold text-zinc-900">
                5. Seus direitos
              </h2>
            </div>
            <p className="text-zinc-700">
              Você tem direito a acessar, corrigir, excluir ou solicitar a
              portabilidade dos seus dados. Para exercer esses direitos, entre
              em contato conosco pelo e-mail{" "}
              <a
                href="mailto:gestaoavancatec@gmail.com"
                className="text-[#4B0082] font-semibold hover:text-[#F2960E] hover:underline transition-colors"
              >
                gestaoavancatec@gmail.com
              </a>
              .
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white border border-[#4B0082]/10 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <RefreshCw className="w-6 h-6 text-[#F2960E]" />
              <h2 className="text-xl font-bold text-zinc-900">
                6. Alterações nesta política
              </h2>
            </div>
            <p className="text-zinc-700">
              Podemos atualizar esta Política de Privacidade periodicamente.
              Recomendamos que você a consulte regularmente para estar sempre
              informado.
            </p>
          </section>
        </div>

        {/* Rodapé */}
        <div className="mt-12 flex items-center justify-between border-t border-[#4B0082]/10 pt-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-6 py-2 rounded-xl text-white font-medium shadow-md
                       bg-gradient-to-r from-[#F2960E] to-[#EE820F]
                       hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#F2960E]/40 transition"
          >
            <ArrowLeft size={18} />
            Voltar
          </button>
          <span className="text-sm text-zinc-500 italic">
            Última atualização: Setembro/2025
          </span>
        </div>
      </div>
    </div>
  );
}
