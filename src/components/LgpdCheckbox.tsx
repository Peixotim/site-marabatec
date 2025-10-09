"use client";

import { X } from "lucide-react";
import { useState } from "react";

interface LgpdCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function LgpdCheckbox({ checked, onChange }: LgpdCheckboxProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mt-6">
      <label className="flex items-start gap-3 cursor-pointer">
        {/* Checkbox invisível padrão */}
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer hidden"
        />

        {/* Caixa customizada */}
        <span className="w-5 h-5 mt-1 flex items-center justify-center rounded border border-[#4B0082]/50 peer-checked:bg-gradient-to-br from-[#F2960E] to-[#EE820F] peer-checked:text-white transition-all duration-200 shadow-sm">
          {checked && "✔"}
        </span>

        <span className="text-sm text-zinc-700">
          Eu li e aceito as{" "}
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="text-[#4B0082] font-medium hover:text-[#F2960E] hover:underline transition-colors duration-200"
          >
            Políticas de Privacidade
          </button>
          .
        </span>
      </label>

      {/* Modal LGPD */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 relative border border-[#4B0082]/10">
            {/* Botão fechar */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-zinc-500 hover:text-[#4B0082] transition"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl font-bold text-[#4B0082] mb-4">
              Lei Geral de Proteção de Dados (LGPD)
            </h2>

            <div className="text-sm text-zinc-700 max-h-80 overflow-y-auto space-y-4">
              <p>
                A <strong>LGPD (Lei nº 13.709/2018)</strong> dispõe sobre o
                tratamento de dados pessoais, inclusive nos meios digitais, por
                pessoa natural ou jurídica de direito público ou privado, com o
                objetivo de proteger os direitos fundamentais de liberdade e de
                privacidade e o livre desenvolvimento da personalidade da pessoa
                natural.
              </p>
              <p>
                Ao aceitar, você autoriza o uso dos seus dados fornecidos neste
                formulário para fins de inscrição, comunicação e contato por
                nossa equipe.
              </p>
              <p>
                Para mais detalhes, você pode acessar a lei completa no{" "}
                <a
                  href="https://www.gov.br/cidadania/pt-br/acesso-a-informacao/lgpd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F2960E] font-semibold hover:underline"
                >
                  site oficial do Governo
                </a>
                .
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-gradient-to-r from-[#F2960E] to-[#EE820F] text-white rounded-lg font-medium hover:opacity-90 transition-all duration-200 shadow-md"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
