"use client";
import React from "react";
import Link from "next/link";
import { Dot } from "lucide-react";
import ConsultorModalTrigger from "./ConsultorModalTrigger";
import Image from "next/image";

export default function PageSistecMec() {
  return (
    <main className="min-h-screen bg-[#4B0082] text-white font-sans">
      <section className="relative isolate overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(60%_60%_at_50%_40%,#F2A413_0%,transparent_60%)]" />
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            {/* Coluna esquerda */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-wide uppercase">
                <Dot className="h-3 w-3 fill-current" />
                Educação Técnica de Excelência
              </span>

              <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight">
                Somos{" "}
                <span className="text-[#F2A413]">
                  Aprovados pelo SISTEC-MEC
                </span>
              </h1>
              <p className="mt-4 max-w-2xl text-white/80">
                Confiança que se comprova: o{" "}
                <strong className="text-white">Colégio MarabáTec</strong> possui{" "}
                <strong>registro e conformidade</strong> no{" "}
                <strong>SISTEC/MEC</strong>, garantindo certificação oficial,
                transparência e qualidade em cada diplomação.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="https://sistec.mec.gov.br/consultapublicaunidadeensino"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#F2A413] px-5 py-3 font-semibold text-[#4B0082] shadow-md shadow-black/20 transition hover:scale-[1.03] hover:shadow-[#F2A413]/40"
                >
                  Verificar no SISTEC
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <ConsultorModalTrigger
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/10"
                  selectedContent="SISTEC-MEC – Verificação e Matrícula"
                  whatsappNumber="5531999022636"
                >
                  Fale com um Consultor
                </ConsultorModalTrigger>
              </div>

              {/* BENEFÍCIOS */}
              <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  "Certificação Oficial Reconhecida",
                  "Conformidade e Auditoria MEC",
                  "Transparência e Segurança de Dados",
                  "Credibilidade e Validação Nacional",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white/10 ring-1 ring-white/10 p-3 backdrop-blur-sm"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 text-[#F2A413]" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna direita */}
            <div className="relative">
              <div className="rounded-3xl bg-white/10 backdrop-blur-md p-6 ring-1 ring-white/20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
                <div className="flex items-center gap-4">
                  <SealSistec className="h-16 w-16 shrink-0" />
                  <div>
                    <p className="text-sm uppercase tracking-wide text-white/70">
                      Selo de Conformidade
                    </p>
                    <p className="text-xl font-bold text-[#F2A413]">
                      Aprovação SISTEC-MEC
                    </p>
                  </div>
                </div>
                <dl className="mt-6 grid grid-cols-3 gap-4">
                  <Stat label="Alunos Certificados" value="500+" />
                  <Stat label="Taxa de Aprovação" value="98%" />
                  <Stat
                    label="Avaliação Média"
                    value={
                      <span className="inline-flex items-center">
                        5<span className="ml-1">★</span>
                      </span>
                    }
                  />
                </dl>
                <p className="mt-6 text-xs text-white/70">
                  Todos os certificados emitidos seguem os requisitos legais e
                  podem ser validados oficialmente no SISTEC/MEC.
                </p>
              </div>

              <figure className="mt-4 overflow-hidden rounded-2xl bg-white ring-1 ring-[#4B0082]/10">
                <Image
                  src="/images/Sistec.webp"
                  alt="Portal SISTEC/MEC — Consulta Pública"
                  width={960}
                  height={600}
                  priority
                  className="h-auto w-full"
                />
                <figcaption className="flex items-center justify-between gap-3 px-4 py-2 text-[12px] text-slate-700">
                  <span>
                    Portal SISTEC/MEC — Consulta Pública (Unidade de Ensino)
                  </span>
                  <Link
                    href="https://sistec.mec.gov.br/consultapublicaunidadeensino"
                    target="_blank"
                    className="font-semibold text-[#4B0082] hover:underline"
                  >
                    Verificar agora
                  </Link>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10">
            Perguntas <span className="text-[#F2A413]">Frequentes</span>
          </h2>
          <div className="divide-y divide-white/10 rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-md">
            {FAQ.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="ml-4 rounded-full border border-white/15 bg-white/5 p-1 text-xs text-white/60 group-open:rotate-180 transition">
                    <ArrowDown className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-3 text-white/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-gradient-to-r from-[#6b00ce] to-[#7F2CCB] p-8 ring-1 ring-white/20 sm:flex-row">
            <p className="text-lg font-semibold text-white text-center sm:text-left">
              Pronto para validar sua formação com{" "}
              <span className="text-amber-300 font-extrabold">
                Certificação Oficial
              </span>
              ?
            </p>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-end">
              <Link
                href="https://sistec.mec.gov.br/consultapublicaunidadeensino"
                target="_blank"
                className="inline-flex items-center justify-center rounded-2xl bg-white text-[#4B0082] px-5 py-3 font-semibold shadow-md transition hover:scale-[1.03]"
              >
            
                Verificar no SISTEC
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <ConsultorModalTrigger
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-5 py-3 font-semibold text-white/90 hover:bg-white/10"
                selectedContent="SISTEC-MEC – Verificação e Matrícula"
                whatsappNumber="5531999022636"
              >
                Fale com um Consultor
              </ConsultorModalTrigger>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ======= helpers ======= */
const FAQ = [
  {
    q: "O que é o SISTEC-MEC?",
    a: "É o Sistema Nacional de Informações da Educação Profissional e Tecnológica do MEC, onde instituições e cursos técnicos são registrados e acompanhados.",
  },
  {
    q: "Como validar um certificado?",
    a: "A verificação é feita pelo portal do SISTEC/MEC informando dados do aluno e/ou do documento emitido.",
  },
  {
    q: "A aprovação garante reconhecimento?",
    a: "Sim. A conformidade no SISTEC/MEC assegura validade nacional para certificados emitidos dentro das normas.",
  },
  {
    q: "Os dados dos alunos são seguros?",
    a: "Seguimos práticas de transparência e segurança conforme exigências legais e auditorias periódicas.",
  },
];

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-[#4B0082]/30 p-4 text-center ring-1 ring-white/10">
      <div className="text-2xl font-extrabold text-[#F2A413]">{value}</div>
      <div className="mt-1 text-[11px] uppercase tracking-wide text-white/70">
        {label}
      </div>
    </div>
  );
}

function SealSistec(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#F2C94C" />
          <stop offset="100%" stopColor="#F2A413" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="56" fill="url(#g)" />
      <circle
        cx="60"
        cy="60"
        r="49"
        fill="#4B0082"
        stroke="#F2A413"
        strokeWidth="3"
      />
      <path
        d="M38 64l14 12 30-34"
        fill="none"
        stroke="#F2A413"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckCircle({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8 12l3 3 5-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5v14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 12l7 7 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
