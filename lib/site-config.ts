/**
 * Configuração central do site — informação de contacto, metadados e URLs.
 * Mantém a informação partilhada num único local.
 */
export const siteConfig = {
  name: "Tiago A. G. Fonseca",
  shortName: "Tiago Fonseca",
  role: "Psicólogo Clínico de Adultos",
  tagline: "Sócio · Psicólogo Clínico de Adultos",
  location: "Lisboa, Portugal",
  url: "https://tiagofonseca.pt",
  description:
    "Tiago A. G. Fonseca — Psicólogo Clínico de Adultos e Sócio na Psinove. Psicoterapia de adultos, supervisão clínica, formação e investigação em Lisboa.",
  email: "tiagoagfonseca@gmail.com",
  phone: "+351 914 613 246",
  phoneHref: "+351914613246",
  address: "Av. António Augusto de Aguiar, 19, Lisboa",
  addressMapUrl: "https://maps.google.com/?q=Av.+António+Augusto+de+Aguiar+19+Lisboa",
  cvUrl: "/tiago-fonseca-cv.pdf",
  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
} as const;
