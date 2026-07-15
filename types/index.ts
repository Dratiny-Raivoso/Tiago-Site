import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Competence {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  place: string;
  description: string;
}

export interface EducationItem {
  period: string;
  title: string;
  place: string;
}

export interface ContactChannel {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
