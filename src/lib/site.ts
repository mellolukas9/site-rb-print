/**
 * Dados institucionais da RB Print.
 * Fontes: Instagram @graficarbprint (bio, destaque "Localização", post dos 20 anos) e
 * Google Maps ("RB Print Gráfica e Estamparia", 4.9★/54 avaliações, horário atualizado pelo negócio).
 */
export const site = {
  name: "RB Print",
  slogan: "A sua gráfica em Nilópolis",
  yearsInBusiness: 20,
  whatsapp: {
    /** Somente dígitos, com DDI + DDD, para a API wa.me */
    number: "5521996552041",
    display: "(21) 99655-2041",
  },
  address: {
    street: "R. Prof. Alfredo Gonçalves Figueira, 281",
    district: "Centro",
    city: "Nilópolis – RJ",
    /** TODO(cliente): não encontramos um ponto de referência divulgado (bairro Centro de Nilópolis) */
    reference: undefined as string | undefined,
    mapsUrl:
      "https://www.google.com/maps/place/RB+Print+Gr%C3%A1fica+e+Estamparia/@-22.8081188,-43.4170011,17z",
  },
  /** Horário confirmado no Google Maps (atualizado pelo próprio negócio) e no Instagram (post de sábado). */
  hours: ["Segunda a sexta, 10h às 18h", "Sábado, 10h às 17h"] as string[],
  instagram: {
    handle: "@graficarbprint",
    url: "https://www.instagram.com/graficarbprint/",
  },
  /** TODO(cliente): não encontramos página de Facebook própria — confirmar se existe */
  facebookUrl: undefined as string | undefined,
  /** 4.9 de 54 avaliações no Google (RB Print Gráfica e Estamparia) */
  googleRating: { value: 4.9, count: 54 },
} as const;
