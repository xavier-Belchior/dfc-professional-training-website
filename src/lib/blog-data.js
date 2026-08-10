// O JavaScript nativo não usa interfaces de tipagem.
// Se não estiver a usar módulos (ES6), pode remover a palavra-chave 'export'.

export const CATEGORIES = [
  "Todos",
  "Formação",
  "Empregabilidade",
  "Carreira",
  "Tecnologia",
  "Negócios",
  "Desenvolvimento Pessoal",
];

export const featuredArticle = {
  id: "featured-1",
  title: "5 Competências Mais Procuradas no Mercado de Trabalho",
  excerpt:
    "Conheça as habilidades técnicas e comportamentais que aumentam as oportunidades de emprego e carreira nos sectores em crescimento.",
  image:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
  category: "Empregabilidade",
  date: "10 Set 2025",
  views: 324,
  readingTime: "5 min de leitura",
  author: {
    name: "DFC Training",
  },
  content: `
    <p>O mercado de trabalho está em constante transformação e as competências exigidas pelas empresas evoluem rapidamente. Neste artigo, exploramos as cinco competências mais procuradas que podem impulsionar a sua carreira.</p>

    <h2>1. Pensamento Crítico e Resolução de Problemas</h2>
    <p>A capacidade de analisar informações complexas e tomar decisões fundamentadas é valorizada em praticamente todas as profissões. Empresas procuram profissionais que conseguem identificar desafios, avaliar alternativas e implementar soluções criativas.</p>

    <h2>2. Comunicação Eficaz</h2>
    <p>Saber comunicar ideias de forma clara, concisa e persuasiva é essencial. Isto inclui comunicação escrita, verbal e através de diferentes plataformas digitais. Profissionais com boas capacidades de comunicação conseguem colaborar melhor com equipas multidisciplinares.</p>

    <h2>3. Adaptabilidade e Flexibilidade</h2>
    <p>Num mundo onde a tecnologia evolui constantemente, a capacidade de se adaptar a novas situações, ferramentas e metodologias é crítica. As empresas valorizam profissionais que aprendem rapidamente e não têm receio de novos desafios.</p>

    <h2>4. Competências Digitais</h2>
    <p>Desde o conhecimento básico de ferramentas ofimáticas até às competências avançadas em análise de dados e programação, as capacidades digitais são cada vez mais importantes em qualquer setor profissional.</p>

    <h2>5. Inteligência Emocional</h2>
    <p>A capacidade de compreender e gerir emoções, tanto nossas como dos outros, contribui para um melhor ambiente de trabalho e maior produtividade. Líderes com inteligência emocional conseguem motivar equipas de forma mais eficaz.</p>

    <p>Investir no desenvolvimento destas competências é um passo importante para garantir relevância profissional e oportunidades de crescimento.</p>
  `,
};

export const blogArticles = [
  {
    id: "article-1",
    title: "5 Competências Mais Procuradas no Mercado de Trabalho",
    excerpt:
      "Conheça as habilidades técnicas e comportamentais que aumentam as oportunidades...",
    image: "/images/courses/programacao.png",
    category: "Empregabilidade",
    date: "10 Set 2025",
    views: 324,
    readingTime: "5 min de leitura",
    author: {
      name: "Carlos Silva",
    },
    content:
      "<p>O mercado de trabalho está em constante transformação e as competências exigidas pelas empresas evoluem rapidamente.</p><h2>1. Pensamento Crítico</h2><p>A capacidade de analisar informações complexas é valorizada em praticamente todas as profissões.</p><h2>2. Comunicação Eficaz</h2><p>Saber comunicar ideias de forma clara é essencial para o sucesso profissional.</p><h2>3. Adaptabilidade</h2><p>A capacidade de se adaptar a novas situações é crítica no mundo moderno.</p><h2>4. Competências Digitais</h2><p>As capacidades digitais são cada vez mais importantes em qualquer setor.</p><h2>5. Inteligência Emocional</h2><p>Compreender e gerir emoções contribui para um melhor ambiente de trabalho.</p>",
  },
  {
    id: "article-2",
    title: "Por Que Investir em Formação Profissional?",
    excerpt:
      "Descubra como os cursos profissionais podem acelerar a sua carreira e abrir novas oportunidades...",
    image: "/images/courses/contabilidade.png",
    category: "Formação",
    date: "01 Set 2025",
    views: 198,
    readingTime: "7 min de leitura",
    author: {
      name: "Ana Costa",
    },
    content:
      "<p>A formação profissional contínua é essencial para manter a competitiveness.</p><h2>Benefícios Diretos</h2><p>Cursos profissionais oferecem conhecimento atualizado e reconhecido pelo mercado.</p>",
  },
  {
    id: "article-3",
    title: "Como Escolher o Curso Certo para o Seu Futuro",
    excerpt:
      "Aprenda a identificar as suas aptidões e seleccionar uma formação alinhada com os seus objectivos...",
    image: "/images/courses/seguranca.png",
    category: "Carreira",
    date: "25 Ago 2025",
    views: 412,
    readingTime: "6 min de leitura",
    author: {
      name: "João Martins",
    },
    content:
      "<p>Escolher o curso certo é uma decisão importante para a sua carreira.</p><h2>Avalie Seus Interesses</h2><p>Comece por identificar o que o motiva e onde tem maior facilidade.</p>",
  },
  {
    id: "article-4",
    title: "Tendências de Tecnologia em 2025",
    excerpt:
      "Exploramos as principais tendências tecnológicas que estão transformando o mercado...",
    image: "/images/courses/mecanica.png",
    category: "Tecnologia",
    date: "20 Ago 2025",
    views: 287,
    readingTime: "8 min de leitura",
    author: {
      name: "Pedro Oliveira",
    },
    content:
      "<p>A transformação digital é hoje uma realidade em quase todas as indústrias.</p><h2>Inteligência Artificial</h2><p>A IA está revolucionando processos em diversos setores.</p>",
  },
  {
    id: "article-5",
    title: "Empreendedorismo Digital: Começar do Zero",
    excerpt:
      "Guia prático para quem quer iniciar um negócio online com sucesso...",
    image: "/images/courses/programacao.png",
    category: "Negócios",
    date: "15 Ago 2025",
    views: 256,
    readingTime: "9 min de leitura",
    author: {
      name: "Mariana Santos",
    },
    content:
      "<p>Muitos têm ideias brilhantes mas não sabem por onde começar.</p><h2>Valide a Sua Ideia</h2><p>Antes de investir, valide se existe mercado para o seu produto.</p>",
  },
  {
    id: "article-6",
    title: "Desenvolvimento Pessoal: Dicas para o Crescimento",
    excerpt:
      "Estratégias práticas para melhorar as suas competências e atingir os seus objectivos...",
    image: "/images/courses/programacao.png",
    category: "Desenvolvimento Pessoal",
    date: "10 Ago 2025",
    views: 189,
    readingTime: "4 min de leitura",
    author: {
      name: "Rita Ferreira",
    },
    content:
      "<p>O desenvolvimento pessoal é um processo contínuo de crescimento.</p><h2>Autoconhecimento</h2><p>O primeiro passo é aprender a conhecer melhor a si próprio.</p>",
  },
  {
    id: "article-7",
    title: "Gestão de Carreira: Passo a Passo",
    excerpt:
      "Como planear e executar uma estratégia de desenvolvimento profissional eficaz...",
    image: "/images/courses/eletricidade.png",
    category: "Carreira",
    date: "05 Ago 2025",
    views: 342,
    readingTime: "6 min de leitura",
    author: {
      name: "Miguel Fernandes",
    },
    content:
      "<p>A gestão de carreira requer planeamento e estratégia.</p><h2>Defina Objetivos Claros</h2><p>Saiba exatamente o que quer atingir nos próximos anos.</p>",
  },
  {
    id: "article-8",
    title: "Certificações Profissionais que Impulsionam a Carreira",
    excerpt:
      "Conheça as certificações mais valorizadas pelo mercado de trabalho...",
    image: "/images/courses/soldadura.png",
    category: "Formação",
    date: "01 Ago 2025",
    views: 203,
    readingTime: "7 min de leitura",
    author: {
      name: "Susana Rocha",
    },
    content:
      "<p>As certificações profissionais validam o seu conhecimento e aumentam a sua credibilidade no mercado.</p><h2>Escolha Estratégica</h2><p>Procure certificações que sejam referência na sua área de atuação.</p>",
  },
];
export const popularArticles = blogArticles
  .slice(0, 5)
  .sort((a, b) => b.views - a.views);
