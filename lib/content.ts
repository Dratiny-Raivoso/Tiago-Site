import {
  Heart,
  ClipboardList,
  Search,
  LineChart,
  Clock,
  Users,
  Layers,
  BarChart3,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
} from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import type {
  NavLink,
  Competence,
  ExperienceItem,
  EducationItem,
  ContactChannel,
  SocialLink,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Competências", href: "#competencias" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Formação", href: "#formacao" },
  { label: "Contactos", href: "#contactos" },
];

export const aboutParagraphs: string[][] = [
  [
    "Licenciado e Mestre em Psicologia Clínica e da Saúde pela Faculdade de Psicologia da Universidade de Lisboa, com percurso dedicado à psicoterapia de adultos, investigação científica e formação em contextos clínicos e comunitários.",
    "Membro Efetivo da Ordem dos Psicólogos Portugueses desde 2013 e membro da Assembleia de Representantes da Ordem.",
  ],
  [
    "É sócio e psicólogo clínico de adultos na Psinove, onde concilia a prática clínica com a gestão, a formação e a supervisão. Participa ainda em projetos de investigação sobre regulação emocional, mindfulness e saúde mental.",
    "Valoriza a integridade, a atualização científica contínua e o respeito pela individualidade de cada pessoa.",
  ],
];

export const competences: Competence[] = [
  {
    icon: Heart,
    title: "Psicoterapia de Adultos",
    description: "Colaboração ativa e responsiva ao processo de mudança.",
  },
  {
    icon: ClipboardList,
    title: "Formação & Supervisão Clínica",
    description: "Formador certificado (IEFP) e supervisor clínico.",
  },
  {
    icon: Search,
    title: "Investigação Científica",
    description: "Estudos publicados em regulação emocional e mindfulness.",
  },
  {
    icon: LineChart,
    title: "Gestão",
    description: "Sócio e gestor clínico na Psinove.",
  },
  {
    icon: Clock,
    title: "Intervenção em Crise",
    description: "Formação em catástrofe, luto e emergência.",
  },
  {
    icon: Users,
    title: "Trabalho em Equipa",
    description: "Coordenação de equipas e projetos comunitários.",
  },
  {
    icon: Layers,
    title: "Ética Profissional",
    description: "Membro Efetivo da Ordem dos Psicólogos Portugueses.",
  },
  {
    icon: BarChart3,
    title: "Comunicação Clínica",
    description: "Clareza no diálogo com pacientes e equipas.",
  },
];

export const experiences: ExperienceItem[] = [
  {
    period: "Atualidade",
    role: "Sócio · Psicólogo Clínico de Adultos",
    place: "Psinove, Lisboa",
    description:
      "Prática clínica em psicoterapia de adultos, conciliada com gestão, formação e supervisão clínica na clínica de que é sócio.",
  },
  {
    period: "2014 — 2016",
    role: "Membro da Equipa Coordenadora",
    place: 'Projeto "Aventura na Cidade", ARISCO – IPSS',
    description:
      "Aplicação do Programa de Promoção de Competências Pessoais e Sociais em escolas dos concelhos de Odivelas e Loures, com financiamento da Fundação Calouste Gulbenkian.",
  },
  {
    period: "2013 — 2016",
    role: "Psicólogo Clínico de Adultos",
    place: "Serviço de Atendimento à Comunidade, Faculdade de Psicologia da Universidade de Lisboa",
    description:
      "Consultas de psicologia clínica em contexto universitário, no início do percurso profissional em prática clínica de adultos.",
  },
];

export const education: EducationItem[] = [
  {
    period: "2006 — 2011",
    title: "Licenciatura e Mestrado em Psicologia Clínica e da Saúde",
    place: "Faculdade de Psicologia da Universidade de Lisboa",
  },
  {
    period: "Desde 2018",
    title: "Pós-Graduação em Psicoterapia (Adultos)",
    place: "Associação Portuguesa de Terapias Comportamentais, Cognitivas e Integrativas",
  },
  {
    period: "Desde 2013",
    title: "Membro Efetivo · Cédula Profissional Nº15558",
    place: "Ordem dos Psicólogos Portugueses",
  },
];

export const complementaryTraining: string[] = [
  "Intervenção Psicológica em Situação de Catástrofe e Intervenção em Crise, OPP",
  "Treino de Competências Pessoais e Sociais com Crianças e Adolescentes, CRIAP",
  "Perturbações de Personalidade: Conceptualização e Tomada de Decisão, PCM Lab",
  "Intervenção no Luto em Situação de Crise, Emergência e Traumático, CRIAP",
  "Intervenção em Situações de Abuso e Negligência, Divórcio e Adoção, CRIAP",
  "Formador certificado pelo Instituto de Emprego e Formação Profissional (IEFP)",
];

export const contactChannels: ContactChannel[] = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Telefone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    icon: MapPin,
    label: "Morada",
    value: siteConfig.address,
    href: siteConfig.addressMapUrl,
  },
];

export const socialLinks: SocialLink[] = [
  { icon: Instagram, label: "Instagram", href: siteConfig.social.instagram },
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.social.linkedin },
  { icon: Mail, label: "Email", href: `mailto:${siteConfig.email}` },
];
