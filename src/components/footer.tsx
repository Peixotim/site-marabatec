import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#4B0082] via-[#7F2CCB] to-[#2A004F] text-white overflow-hidden">
      {/* Overlay brilhante */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#F2A413]/10 via-transparent to-[#7F2CCB]/10"></div>

      <div className="relative container mx-auto px-6 py-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* COLUNA 1 - SOBRE */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#F2A413] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(242,164,19,0.4)]">
                <span className="text-[#4B0082] font-extrabold text-2xl">
                  M
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#F2A413] leading-none">
                  MarabáTec
                </h3>
                <p className="text-xs text-[#F2A413]/90">
                  Educação Técnica de Excelência
                </p>
              </div>
            </div>

            <p className="text-sm text-white/80 leading-relaxed max-w-xs">
              Transformando vidas através da educação. Construindo profissionais
              do futuro com competência, tecnologia e inovação.
            </p>

            <div className="flex space-x-4 pt-3">
              <a
                href="https://www.instagram.com/avancatec.oficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:scale-110 transition-transform"
              >
                <Instagram className="w-6 h-6 text-white hover:text-[#F2A413] transition-colors" />
              </a>
            </div>
          </div>

          {/* COLUNA 2 - CURSOS */}
          <div>
            <h4 className="font-semibold text-[#F2A413] mb-4 text-lg">
              Cursos
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              {[
                "Área da Saúde",
                "Administração & Gestão",
                "Tecnologia e Informática",
                "Engenharia & Manutenção",
                "Construção e Infraestrutura",
              ].map((curso) => (
                <li key={curso}>
                  <a
                    href="#cursos"
                    className="hover:text-[#F2A413] transition-colors"
                  >
                    {curso}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 3 - LINKS ÚTEIS */}
          <div>
            <h4 className="font-semibold text-[#F2A413] mb-4 text-lg">
              Links Úteis
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#cursos", label: "Cursos" },
                { href: "#contato", label: "Contato" },
                { href: "#Certificado", label: "Certificação" },
                { href: "/sistec", label: "SISTEC-MEC" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#F2A413] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 4 - CONTATO */}
          <div>
            <h4 className="font-semibold text-[#F2A413] mb-4 text-lg">
              Entre em Contato
            </h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-[#F2A413]" />
                <span>
                  R. Luiz Rodrigues dos Santos, 44 <br />
                  Todos os Santos – Cel. Fabriciano - MG
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#F2A413]" />
                <a
                  href="mailto:gestaoavancatec@gmail.com"
                  className="hover:text-[#F2A413] transition-colors"
                >
                  gestaoavancatec@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#F2A413]" />
                <a
                  href="tel:+5531982631563"
                  className="hover:text-[#F2A413] transition-colors"
                >
                  (31) 98263-1563
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-[#F2A413]/20 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} MarabáTec — Todos os direitos
            reservados.
          </p>
          <p className="text-sm text-white/60 mt-1">CNPJ: 38.063.045/0001-88</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
