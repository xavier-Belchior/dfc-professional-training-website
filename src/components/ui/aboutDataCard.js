import {
  Users,
  Clock3,
  BadgeCheck,
  Handshake,
  CheckCircle,
  Zap,
  Lock,
  Award,
  Briefcase,
  TrendingUp,
  Target,
  Eye,
  GraduationCap,
  BookOpen,
  Building,
  Heart,
} from "lucide-react";

export const aboutFeatures = [
  {
    id: 1,
    title: "Acompanhamento Personalizado",
    description:
      "Cada cliente é único. Oferecemos soluções adaptadas às suas necessidades específicas.",
    icon: Users,
  },
  {
    id: 2,
    title: "Rapidez & Eficiência",
    description:
      "Processos simplificados e entregas ágeis que fazem a diferença no dia a dia do seu negócio.",
    icon: Clock3,
  },
  {
    id: 3,
    title: "Profissionalismo Certificado",
    description:
      "Equipa qualificada, com experiência comprovada e em constante atualização.",
    icon: BadgeCheck,
  },
  {
    id: 4,
    title: "Parcerias & Formação",
    description:
      "Desenvolvemos talentos e colaboramos com instituições para fortalecer o mercado.",
    icon: Handshake,
  },
];
export const kpis = [
  {
    id: 1,
    value: 250,
    title: "Clientes Satisfeitos",
  },
  {
    id: 2,
    value: 600,
    title: "Projetos Concluídos",
  },
  {
    id: 3,
    value: 1500,
    title: "Horas de Consultoria & Apoio",
  },
  {
    id: 4,
    value: 20,
    title: "Profissionais Dedicados",
  },
];

export const keyFeatures = [
  {
    id: 1,
    title: "Formação Prática",
    description: "Formação prática para o mercado de trabalho",
    icon: CheckCircle,
  },
  {
    id: 2,
    title: "Professores Experientes",
    description: "Professores qualificados e experientes",
    icon: Users,
  },
  {
    id: 3,
    title: "Certificação Reconhecida",
    description: "Certificação profissional reconhecida",
    icon: Award,
  },
];

export const stats = [
  {
    icon: GraduationCap,
    number: 500,
    suprex: "+",
    label: "Alunos Formados",
    description: "Profissionais capacitados para o mercado",
  },
  {
    icon: BookOpen,
    number: 12,
    suprex: "+",
    label: "Cursos Disponíveis",
    description: "Formações em diferentes áreas",
  },
  {
    icon: TrendingUp,
    number: 85,
    suprex: "%",
    label: "Taxa de Emprego",
    description: "Alunos empregados após a formação",
  },
  {
    icon: Building,
    number: 10,
    suprex: "+",
    label: "Empresas Parceiras",
    description: "Parcerias com organizações de referência",
  },
];

export const missionContent = {
  mission: {
    icon: Target,
    title: "Missão",
    description:
      "Organizar e estruturar o universo financeiro, promovendo a aceleração e consolidação de negócios com foco no crescimento sólido e sustentável. Assegurar a saúde financeira por meio de gestão estratégica, decisões fundamentadas em dados e processos transparentes, garantindo clareza, segurança e excelência em cada etapa, impulsionando resultados consistentes e a evolução empresarial contínua.",
  },
  vision: {
    icon: Eye,
    title: "Visão",
    description:
      "Ser reconhecida no Mundo como parceira estratégica indispensável aos empresários que almejam crescimento sustentável e excelência em gestão. Consolidar-se como referência em consultoria de negócios, destacando-se pela comunicação clara, proximidade com o cliente e capacidade de estruturar organizações de forma eficiente, demonstrando que, com planejamento e organização adequada, não há limites para a expansão e o sucesso de um negócio.",
  },
  values: {
    icon: Heart,
    title: "Valores",
    description:
      "Não forjamos dados, não manipulamos números. Trabalhamos com dados contábeis rigorosos e informações financeiras fidedignas, entregando clareza para decisões seguras.",
  },
};
