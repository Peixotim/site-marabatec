import { CardPageProps } from "../components/cards";

export default function Storaged(): CardPageProps[] {
  return [
       {
      title: "📘 EJA – Conclua Seus Estudos e Mude de Vida",
      description:
        "Ainda dá tempo! Termine o Ensino Fundamental ou Médio com flexibilidade, aulas acessíveis e certificado reconhecido em todo o Brasil.",
      category: "Educação de Jovens e Adultos (EJA)",
      flag: "🌟 Nova Oportunidade",
      benneficies: [
        "Estude no seu ritmo",
        "Aulas online e presenciais",
        "Certificação válida em todo o país",
      ],
      img: {
        src: " ",
        alt: "Pessoa estudando com caderno e computador",
      },
      bgColorFlag: "bg-yellow-100 text-yellow-800",
      bgColorCategory: "bg-green-700 text-white",
      bgColorHover: "hover:bg-green-800",
      maisClicado: true,
      lancamentos: true,
      duration: "Conclua em até 18 meses",
      studentCount: 1200,
      redirectTo: "/eja",
    },
    {
      title: "Área da Saúde – Sua Carreira com Propósito",
      description:
        "🚨 Últimas vagas! Torne-se referência na saúde. Aprenda com especialistas e garanta certificação reconhecida. Trabalhe salvando vidas e tenha estabilidade no setor que mais cresce no Brasil!",
      category: "Saúde",
      flag: "🔥 Últimas Vagas",
      benneficies: [
        "Estude no seu ritmo",
        "Certificação Nacional",
        "Conteúdo atualizado com tendências",
      ],
      img: {
        src: "",
        alt: "Profissionais da saúde em uma discussão de caso",
      },
      
      bgColorFlag: "bg-red-100 text-red-800",
      bgColorCategory: "bg-red-800 text-red-800",
      bgColorHover: "hover:bg-red-700",
      maisClicado: true,
      lancamentos: false,
    },
    {
      title: "Administração & Gestão – Liderança na Prática",
      description:
        "📈 Suba de cargo e conquiste sua independência financeira. Aprenda estratégias modernas para gerir equipes e negócios com excelência. Vagas limitadas – garanta a sua agora!",
      category: "Finanças",
      flag: "🚀 Alta Demanda",
      benneficies: [
        "Flexibilidade total",
        "Instrutores experientes",
        "Aprenda gestão moderna",
      ],
      img: {
        src: "",
        alt: "Equipe de gestão e liderança colaborando em um escritório moderno",
      },
      bgColorFlag: "bg-amber-100 text-amber-800",
      bgColorCategory: "bg-blue-600 text-blue-800",
      bgColorHover: "hover:bg-blue-700",
      maisClicado: false,
      lancamentos: false,
    },
    {
      title: "Tecnologia e Informática – Futuro em Suas Mãos",
      description:
        "💻 Torne-se indispensável no mercado digital! Aprenda programação, redes e inovação com métodos práticos. Comece hoje mesmo e garanta sua vaga nesse setor que não para de crescer!",
      category: "Tecnologia",
      flag: "⭐ Novidade",
      benneficies: [
        "Aprenda com cases reais",
        "Certificado valorizado",
        "Suporte dedicado",
      ],
      img: {
        src: "",
        alt: "Desenvolvedor trabalhando com código em múltiplas telas",
      },
      bgColorFlag: "bg-indigo-100 text-indigo-800",
      bgColorCategory: "bg-purple-800 text-purple-800",
      bgColorHover: "hover:bg-purple-700",
      maisClicado: true,
      lancamentos: true,
    },
    {
      title: "Engenharia & Manutenção – Carreira Sólida",
      description:
        "🔧 Domine projetos e manutenção industrial para garantir salários altos e estabilidade. Vagas exclusivas – inscreva-se e prepare-se para grandes oportunidades!",
      category: "Infraestrutura",
      flag: "🔥 Concorrido",
      benneficies: [
        "Aulas práticas e objetivas",
        "Instrutores qualificados",
        "Formação completa",
      ],
      img: {
        src: "",
        alt: "Engenheiro industrial inspecionando maquinário em uma fábrica",
      },
      bgColorFlag: "bg-amber-100 text-amber-800",
      bgColorCategory: "bg-slate-800 text-slate-800",
      bgColorHover: "hover:bg-slate-700",
      maisClicado: false,
      lancamentos: false,
    },
    {
      title: "Construção e Infraestrutura – Transforme Cidades",
      description:
        "🏗 Participe das maiores obras do Brasil! Domine planejamento e execução com técnicas modernas. Matrículas abertas por tempo limitado. Aproveite!",
      category: "Infraestrutura",
      flag: "⏳ Tempo Limitado",
      benneficies: [
        "Treinamento dinâmico",
        "Certificação nacional",
        "Conteúdo atualizado",
      ],
      img: {
        src: "",
        alt: "Canteiro de obras de um grande projeto de infraestrutura urbana",
      },
      bgColorFlag: "bg-red-100 text-red-800",
      bgColorCategory: "bg-orange-400 text-slate-800",
      bgColorHover: "hover:bg-slate-700",
      maisClicado: false,
      lancamentos: false,
    },
    {
      title: "Meio Ambiente & Agro – Impacto com Resultado",
      description:
        "🌱 Seja protagonista da sustentabilidade! Aprenda práticas para gestão ambiental e produção agrícola eficiente. Torne-se um profissional requisitado no mercado!",
      category: "Meio Ambiente",
      flag: "💡 Oportunidade",
      benneficies: [
        "Aprendizado 100% online",
        "Reconhecimento no mercado",
        "Aulas com especialistas",
      ],
      img: {
        src: "",
        alt: "Agrônomo analisando uma plantação com um tablet na mão",
      },
      bgColorFlag: "bg-green-100 text-green-800",
      bgColorCategory: "bg-green-800 text-green-800",
      bgColorHover: "hover:bg-green-700",
      maisClicado: false,
      lancamentos: true,
    },
    {
      title: "Serviços – Ganhe Autoridade e Mais Clientes",
      description:
        "⚡ Capacite-se para oferecer serviços de excelência e aumentar sua renda. Cursos rápidos, práticos e com certificado para impulsionar sua carreira!",
      category: "Serviços Gerais",
      flag: "🔥 Alta Procura",
      benneficies: [
        "Certificação rápida",
        "Materiais completos",
        "Flexibilidade total",
      ],
      img: {
        src: "",
        alt: "Chef de cozinha profissional preparando um prato gourmet",
      },
      bgColorFlag: "bg-amber-100 text-amber-800",
      bgColorCategory: "bg-teal-800 text-teal-800",
      bgColorHover: "hover:bg-teal-700",
      maisClicado: true,
      lancamentos: false,
    },
  ];
}