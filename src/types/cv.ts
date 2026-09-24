export interface PersonalInfo {
  name: string;
  firstNameScript: string;
  lastNameSans: string;
  title: string;
  subtitle: string;
  bio: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  city: string;
  country: string;
  height: string;
  measurements: string;
  shoeSize: string;
  eyeColor: string;
  hairColor: string;
  languages: { name: string; level: string }[];
  portraitImg: string;
  fullBodyImg: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  year: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  featured?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  type: string;
  description: string;
  skillsAcquired: string[];
}

export interface CourseItem {
  id: string;
  name: string;
  institution: string;
  year: string;
  category: 'Modelaje' | 'Comunicación' | 'Protocolo' | 'Marketing' | 'Seguridad';
  duration?: string;
  description: string;
}

export interface SkillItem {
  name: string;
  percentage: number;
  category: 'Interpersonal' | 'Modelaje & Pasarela' | 'Gestión & Eventos';
  icon: string;
  description: string;
}

export type SectionType = 'home' | 'experiencia' | 'formacion' | 'cursos' | 'habilidades';
