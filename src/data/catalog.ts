import type { Category, CategorySlug, Product } from "@/types/catalog";

/**
 * Catálogo baseado no Instagram @graficarbprint (bio, destaques e posts) e no Google Maps
 * ("RB Print Gráfica e Estamparia"). A gráfica não divulga preços — tudo "Sob consulta".
 * TODO(cliente): enviar fotos reais dos produtos; até lá, os cards usam a arte da marca.
 */
export const categories: Category[] = [
  {
    slug: "fotos",
    name: "Fotos e Revelação",
    shortName: "Fotos",
    description: "Revelação em vários tamanhos, foto 3x4 na hora, Polaroid e restauração de fotos antigas.",
  },
  {
    slug: "canecas",
    name: "Canecas e Presentes",
    shortName: "Canecas",
    description: "Canecas personalizadas, ímãs de geladeira e chaveiros para presentear.",
  },
  {
    slug: "camisas",
    name: "Camisas e Linha Baby",
    shortName: "Camisas",
    description: "Estampa em DTF para adultos e bodies personalizados para bebê.",
  },
  {
    slug: "azulejos",
    name: "Azulejos Personalizados",
    shortName: "Azulejos",
    description: "Sua foto, sua arte, em azulejo pronto para decorar ou presentear.",
  },
  {
    slug: "cartoes",
    name: "Cartões e Impressos",
    shortName: "Cartões",
    description: "Cartão de visita, panfletos e impressos para divulgar sua marca.",
  },
  {
    slug: "banners",
    name: "Banners e Grandes Formatos",
    shortName: "Banners",
    description: "Banner, wind banner e plantas em grandes formatos, com alta definição.",
  },
  {
    slug: "adesivos",
    name: "Adesivos",
    shortName: "Adesivos",
    description: "Adesivo vinil, folha adesiva A4 e recorte personalizado.",
  },
  {
    slug: "copias",
    name: "Cópias e Serviços",
    shortName: "Cópias",
    description: "Xerox, encadernação e plastificação para deixar seu material pronto.",
  },
];

export const products: Product[] = [
  // Fotos e revelação
  {
    slug: "foto-revelada",
    name: "Foto revelada",
    category: "fotos",
    summary: "Do 10x15 ao 60x80 — qualidade que você vê e guarda.",
    popular: true,
    badge: "Vários tamanhos",
    keywords: ["foto", "revelação", "impressão", "ampliação", "10x15", "20x30", "60x80"],
  },
  {
    slug: "foto-3x4",
    name: "Foto 3x4 / documento",
    category: "fotos",
    summary: "Tiramos a foto na hora, pronta em instantes para RG, carteira e concursos.",
    badge: "Na hora",
    keywords: ["3x4", "documento", "foto", "rg", "carteira de trabalho"],
  },
  {
    slug: "foto-passaporte-visto",
    name: "Foto 5x5 / 5x7 passaporte e visto",
    category: "fotos",
    summary: "Foto no padrão exigido para passaporte e visto, saem na hora.",
    badge: "Na hora",
    keywords: ["passaporte", "visto", "5x7", "5x5", "foto"],
  },
  {
    slug: "foto-polaroid",
    name: "Foto Polaroid",
    category: "fotos",
    summary: "As melhores lembranças em formato especial, prontas para presentear.",
    keywords: ["polaroid", "instantânea", "lembrancinha"],
  },
  {
    slug: "restauracao-fotos",
    name: "Restauração de fotos antigas",
    category: "fotos",
    summary: "Recuperamos fotos antigas com qualidade, cuidado e precisão.",
    keywords: ["restauração", "foto antiga", "retrato", "memória"],
  },
  // Canecas e presentes
  {
    slug: "caneca-branca",
    name: "Caneca branca personalizada",
    category: "canecas",
    summary: "Impressão premium, cores vivas e duradouras — do seu jeito.",
    popular: true,
    badge: "Mais pedida",
    keywords: ["caneca", "branca", "sublimação", "presente"],
  },
  {
    slug: "caneca-alca-coracao",
    name: "Caneca alça de coração",
    category: "canecas",
    summary: "Um toque romântico para presentear quem você ama.",
    keywords: ["caneca", "coração", "namorados", "presente"],
  },
  {
    slug: "caneca-interior-cor",
    name: "Caneca interior colorido",
    category: "canecas",
    summary: "Branca por fora, colorida por dentro — mais estilo pro dia a dia.",
    keywords: ["caneca", "colorida", "interior"],
  },
  {
    slug: "caneca-alca-dourada",
    name: "Caneca alça dourada",
    category: "canecas",
    summary: "Um acabamento mais sofisticado para ocasiões especiais.",
    keywords: ["caneca", "dourada", "luxo"],
  },
  {
    slug: "caneca-vidro-zero-grau",
    name: "Caneca de vidro zero grau",
    category: "canecas",
    summary: "Muda de cor com o gelo — efeito surpresa na hora de servir.",
    badge: "Térmica",
    keywords: ["caneca", "vidro", "zero grau", "térmica", "gelo"],
  },
  {
    slug: "caneca-toda-preta",
    name: "Caneca toda preta",
    category: "canecas",
    summary: "Visual moderno e discreto, com a sua arte em destaque.",
    keywords: ["caneca", "preta"],
  },
  {
    slug: "caneca-com-colher",
    name: "Caneca com colher",
    category: "canecas",
    summary: "Prática e personalizada, com a colherzinha combinando no cabo.",
    keywords: ["caneca", "colher"],
  },
  {
    slug: "ima-geladeira",
    name: "Ímã de geladeira",
    category: "canecas",
    summary: "Transforme fotos e datas especiais em lembrança pra vida toda.",
    popular: true,
    badge: "Clássico",
    keywords: ["ímã", "imã", "geladeira", "foto", "aniversário", "lembrancinha"],
  },
  {
    slug: "chaveiro",
    name: "Chaveiro personalizado",
    category: "canecas",
    summary: "Para lembrancinhas, brindes de empresa e presentes rápidos.",
    keywords: ["chaveiro", "brinde", "lembrancinha"],
  },
  // Camisas e linha baby
  {
    slug: "camisa-dtf",
    name: "Camisa personalizada em DTF",
    category: "camisas",
    summary: "Cores vivas, toque suave e alta resistência — pronta em até 3 dias úteis.",
    popular: true,
    badge: "Pronta em 3 dias",
    keywords: ["camisa", "camiseta", "dtf", "estampa"],
  },
  {
    slug: "camisa-time-empresa",
    name: "Camisas de time ou empresa",
    category: "camisas",
    summary: "Uniformize seu time, sua equipe ou seu evento com a identidade de vocês.",
    keywords: ["time", "uniforme", "empresa", "evento", "torcida"],
  },
  {
    slug: "body-bebe",
    name: "Body personalizado para bebê",
    category: "camisas",
    summary: "Pra anunciar a novidade ou vestir o bebê com estilo — linha baby da RB Print.",
    keywords: ["body", "bebê", "baby", "chá de bebê", "gestante", "maternidade"],
  },
  // Azulejos
  {
    slug: "azulejo-10x10",
    name: "Azulejo personalizado 10x10 cm",
    category: "azulejos",
    summary: "Sua foto, sua arte, seu estilo — pronto pra presentear.",
    keywords: ["azulejo", "quadro", "decoração", "10x10"],
  },
  {
    slug: "azulejo-20x20",
    name: "Azulejo personalizado 20x20 cm",
    category: "azulejos",
    summary: "O tamanho mais pedido para decorar a casa ou o escritório.",
    popular: true,
    keywords: ["azulejo", "quadro", "decoração", "20x20"],
  },
  {
    slug: "azulejo-30x30",
    name: "Azulejo personalizado 30x30 cm",
    category: "azulejos",
    summary: "Formato grande para dar mais destaque à sua foto ou frase.",
    keywords: ["azulejo", "quadro", "decoração", "30x30"],
  },
  // Cartões e impressos
  {
    slug: "cartao-visita",
    name: "Cartão de visita",
    category: "cartoes",
    summary: "Papel couché premium, verniz ou fosco, frente e verso.",
    popular: true,
    badge: "Mais pedido",
    keywords: ["cartão", "visita", "empresa"],
  },
  {
    slug: "panfletos",
    name: "Panfletos",
    category: "cartoes",
    summary: "Informe, promova e venda mais — diversos tamanhos e papéis.",
    keywords: ["panfleto", "flyer", "folheto", "divulgação"],
  },
  {
    slug: "impressos-empresa",
    name: "Impressos para empresa",
    category: "cartoes",
    summary: "Divulgue sua marca com qualidade e profissionalismo em qualquer impresso.",
    keywords: ["impressos", "empresa", "papelaria", "timbrado"],
  },
  // Banners e grandes formatos
  {
    slug: "banner",
    name: "Banner personalizado",
    category: "banners",
    summary: "Alta definição e cores vibrantes para o seu negócio aparecer de longe.",
    popular: true,
    keywords: ["banner", "lona", "loja", "evento"],
  },
  {
    slug: "wind-banner",
    name: "Wind banner",
    category: "banners",
    summary: "A bandeira que balança na porta e chama atenção pro seu negócio.",
    keywords: ["wind banner", "bandeira", "fachada"],
  },
  {
    slug: "planta-arquitetura",
    name: "Plantas de arquitetura em grande formato",
    category: "banners",
    summary: "Impressão em alta definição para o seu projeto sair com mais clareza.",
    keywords: ["planta", "arquitetura", "grande formato", "projeto", "engenharia"],
  },
  // Adesivos
  {
    slug: "adesivo-vinil",
    name: "Adesivo vinil",
    category: "adesivos",
    summary: "Resistente à água e ao sol, com durabilidade muito maior que o adesivo tradicional.",
    popular: true,
    badge: "Mais durável",
    keywords: ["adesivo", "vinil", "vitrine", "carro"],
  },
  {
    slug: "folha-adesiva-a4",
    name: "Folha adesiva A4",
    category: "adesivos",
    summary: "Transforme suas ideias em adesivos personalizados no formato A4.",
    keywords: ["adesivo", "folha", "a4", "etiqueta", "rótulo"],
  },
  {
    slug: "adesivo-recorte",
    name: "Adesivo recorte personalizado",
    category: "adesivos",
    summary: "Recorte no formato da sua arte, em folha ou cartela.",
    keywords: ["adesivo", "recorte", "cartela", "rótulo"],
  },
  // Cópias e serviços
  {
    slug: "xerox",
    name: "Cópias / Xerox",
    category: "copias",
    summary: "Preto e branco ou colorido, em papel ofício ou fotográfico — feito na hora.",
    popular: true,
    badge: "Na hora",
    keywords: ["xerox", "cópia", "copia", "impressão", "documento"],
  },
  {
    slug: "encadernacao",
    name: "Encadernação",
    category: "copias",
    summary: "Pra apostilas, trabalhos acadêmicos e relatórios ficarem organizados e protegidos.",
    keywords: ["encadernação", "apostila", "trabalho", "espiral"],
  },
  {
    slug: "plastificacao",
    name: "Plastificação",
    category: "copias",
    summary: "Protege documentos e materiais contra rasgos, sujeira e desgaste.",
    keywords: ["plastificação", "proteção", "documento", "laminação"],
  },
];

export function getCategory(slug: CategorySlug): Category {
  const category = categories.find((c) => c.slug === slug);
  if (!category) throw new Error(`Categoria desconhecida: ${slug}`);
  return category;
}

export function isCategorySlug(value: string | null): value is CategorySlug {
  return categories.some((c) => c.slug === value);
}

const normalize = (value: string) =>
  value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim();

export function searchProducts(query: string, list: Product[] = products): Product[] {
  const q = normalize(query);
  if (!q) return list;
  return list.filter((p) => {
    const haystack = normalize(
      [p.name, p.summary, getCategory(p.category).name, ...(p.keywords ?? [])].join(" "),
    );
    return q.split(/\s+/).every((term) => haystack.includes(term));
  });
}

export const popularProducts = products.filter((p) => p.popular);
