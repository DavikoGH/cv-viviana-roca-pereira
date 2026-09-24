import { PersonalInfo, ExperienceItem, EducationItem, CourseItem, SkillItem } from '../types/cv';

export const personalInfo: PersonalInfo = {
  name: 'Viviana Roca Pereira',
  firstNameScript: 'Viviana',
  lastNameSans: 'ROCA PEREIRA',
  title: 'Modelo Independiente',
  subtitle: 'Azafata de Alta Gama & Imagen Corporativa',
  bio: 'Modelo y azafata profesional con destacada trayectoria en ferias de negocios internacionales, desfiles de moda de alta costura, campañas publicitarias BTL y eventos corporativos para marcas globales. Con sólida formación administrativa y de protocolo, destaco por mi empatía, excelente dicción, puntualidad rigurosa y gran capacidad para conectar con el público, proyectando sofisticación y prestigio para cada marca representada.',
  email: 'viviana.roca.p@gmail.com',
  phone: '+5917777777',
  phoneFormatted: '+591 777 7777',
  city: 'Santa Cruz de la Sierra',
  country: 'Bolivia',
  height: '1.74 m',
  measurements: '88 - 60 - 90',
  shoeSize: '38',
  eyeColor: 'Castaños',
  hairColor: 'Castaño Oscuro / Ondulado',
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Intermedio Profesional' },
    { name: 'Portugués', level: 'Básico Conversacional' },
  ],
  portraitImg: '/images/viviana_portrait.jpg',
  fullBodyImg: '/images/viviana_fullbody.jpg',
};

export const experiencesData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Azafata FEXPO',
    company: 'Feria Exposición de Santa Cruz (Fexpocruz)',
    year: '2025',
    location: 'Santa Cruz, Bolivia',
    type: 'Feria Internacional',
    description: 'Azafata principal en el pabellón corporativo y tecnológico de mayor afluencia. Encargada del protocolo de bienvenida, atención a comitivas internacionales y vocería de marca para medios de comunicación.',
    highlights: [
      'Atención personalizada a delegaciones empresariales y prensa internacional.',
      'Presentación de productos y dinámicas de fidelización para más de 12.000 visitantes diarios.',
      'Coordinación de actividades de relaciones públicas con gerencia comercial.',
      'Reconocimiento especial por puntualidad, carisma y excelencia en protocolo.'
    ],
    featured: true,
  },
  {
    id: 'exp-2',
    role: 'Modelo Independiente',
    company: 'COCA COLA',
    year: '2024',
    location: 'Nacional (Bolivia)',
    type: 'Campaña BTL & Publicidad',
    description: 'Modelo de imagen para la campaña publicitaria nacional "Verano Refrescante" y activaciones Fan Fest. Participación estelar en comerciales para televisión, plataformas digitales y cartelería en vía pública.',
    highlights: [
      'Filmación de spots publicitarios y sesiones fotográficas en exteriores e interiores.',
      'Gira promocional en activaciones masivas con interacción directa con consumidores.',
      'Proyección de dinamismo, frescura y altos estándares de estética publicitaria.',
      'Embajadora de marca durante eventos deportivos y festivales juveniles.'
    ],
    featured: true,
  },
  {
    id: 'exp-3',
    role: 'Modelo Independiente',
    company: 'PONTA GROSA',
    year: '2023',
    location: 'Santa Cruz / Cochabamba',
    type: 'Moda & Pasarela',
    description: 'Modelo de pasarela principal y catálogo de colecciones de temporada. Presentación exclusiva de indumentaria textil femenina y calzado en galas de moda y sesiones editoriales de alta costura.',
    highlights: [
      'Apertura y cierre de desfiles de temporada en showroom de alta gama.',
      'Fotopose y sesiones fotográficas para catálogo impreso y campañas e-commerce.',
      'Coordinación fluida de backstage y cambios de vestuario en tiempo real.',
      'Impacto en medios digitales y revistas de moda destacadas del país.'
    ],
    featured: true,
  },
  {
    id: 'exp-4',
    role: 'Modelo de Pasarela',
    company: 'Bolivia Moda (BOMO)',
    year: '2022',
    location: 'Santa Cruz de la Sierra',
    type: 'Semana de la Moda',
    description: 'Seleccionada por diseñadores de renombre para la pasarela de gala del Bolivia Moda. Modelado de colecciones de autor, trajes de noche y vestidos de fiesta con cobertura televisiva nacional.',
    highlights: [
      'Pasarela de alta precisión rítmica y elegancia bajo estándares internacionales.',
      'Trabajo coordinado con equipos de estilistas, diseñadores y directores de arte.',
      'Entrevistas promocionales para cadenas de televisión e influencers de moda.'
    ],
  },
  {
    id: 'exp-5',
    role: 'Azafata Corporativa',
    company: 'Banco BCP & Foro Económico',
    year: '2021',
    location: 'Centro de Convenciones Los Tajibos',
    type: 'Eventos Corporativos & Finanzas',
    description: 'Recepción protocolar, acreditación y acompañamiento a ponentes internacionales y directores bancarios en la cumbre financiera anual.',
    highlights: [
      'Gestión de protocolo en escenario para la entrega de galardones y reconocimientos.',
      'Asistencia bilingüe a participantes extranjeros en mesa de registro.',
      'Supervisión de sala VIP y atención personalizada a autoridades invitadas.'
    ],
  },
  {
    id: 'exp-6',
    role: 'Modelo Promocional',
    company: 'Cervecería Boliviana Nacional (Paceña)',
    year: '2020',
    location: 'Santa Cruz / La Paz',
    type: 'Activaciones de Marca',
    description: 'Imagen institucional para eventos festivos, festivales de música electrónica y ferias gastronómicas. Impulso de venta y fidelización de marca.',
    highlights: [
      'Conducción de dinámicas interactivas con el público y entrega de premios.',
      'Presencia en áreas lounge y stands oficiales con uniforme de alta costura.',
      'Cumplimiento estricto de lineamientos de consumo responsable y marca.'
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Secretaria Administrativa',
    institution: 'Instituto Técnico CEICOM',
    year: '2015',
    type: 'Educación Técnica Superior',
    description: 'Carrera técnica profesional orientada a la gestión documental, redacción comercial, atención a ejecutivos, protocolo empresarial y organización de eventos institucionales.',
    skillsAcquired: [
      'Protocolo y etiqueta en relaciones públicas corporativas',
      'Redacción ejecutiva y correspondencia comercial bilingüe',
      'Organización de agendas, recepciones y logística de conferencias',
      'Manejo de herramientas de ofimática y gestión de archivos'
    ]
  },
  {
    id: 'edu-2',
    degree: 'Bachiller en Humanidades',
    institution: 'Instituto Americano',
    year: '2013',
    type: 'Educación Secundaria',
    description: 'Graduación con honores en humanidades, destacando en oratoria, participación en actividades cívicas, grupos de teatro y liderazgo estudiantil.',
    skillsAcquired: [
      'Habilidades de expresión oral y dicción en público',
      'Compromiso ético, disciplina y trabajo colaborativo',
      'Desarrollo del pensamiento crítico y cultural'
    ]
  },
  {
    id: 'edu-3',
    degree: 'Certificación Profesional en Modelaje & Pasarela',
    institution: 'Academia Premier Models Agency',
    year: '2016',
    type: 'Especialización Artística',
    description: 'Formación intensiva de 12 meses en técnicas de pasarela de alta costura, fotopose editorial, expresión corporal, maquillaje escénico y estilismo.',
    skillsAcquired: [
      'Técnicas avanzadas de caminata en pasarela y giros',
      'Dominio de fotopose para fotografía de moda y catálogo',
      'Expresión escénica ante cámaras de televisión y flash',
      'Automaquillaje profesional y cuidado de imagen integral'
    ]
  }
];

export const coursesData: CourseItem[] = [
  {
    id: 'course-1',
    name: 'Protocolo, Etiqueta Social y Relaciones Públicas',
    institution: 'Academia de Liderazgo & Protocolo Diplomático',
    year: '2023',
    category: 'Protocolo',
    duration: '80 horas académicas',
    description: 'Reglas de precedencia, ceremonial de estado, etiqueta en banquetes de gala y resolución de contingencias protocolares en eventos multinacionales.'
  },
  {
    id: 'course-2',
    name: 'Expresión Corporal, Fotopose y Pasarela Profesional',
    institution: 'Studio Model Arts Bolivia',
    year: '2022',
    category: 'Modelaje',
    duration: '60 horas de taller práctico',
    description: 'Dominio escénico, postura ergonómica, sincronía de movimientos en tarima y manejo de prendas voluminosas y tacones de altura.'
  },
  {
    id: 'course-3',
    name: 'Oratoria, Modulación de Voz y Comunicación Asertiva',
    institution: 'Instituto de Comunicación Integral',
    year: '2021',
    category: 'Comunicación',
    duration: '45 horas',
    description: 'Técnicas de respiración diafragmática, proyección vocal ante micrófonos, modulación emocional y manejo de audiencias exigentes.'
  },
  {
    id: 'course-4',
    name: 'Asesoría de Imagen, Estilismo y Maquillaje de Alta Definición',
    institution: 'Glamour Beauty International Academy',
    year: '2020',
    category: 'Modelaje',
    duration: '50 horas prácticas',
    description: 'Colorimetría aplicada al vestuario y tez, técnicas de maquillaje para luces de estudio y televisión 4K, y cuidado dermatológico.'
  },
  {
    id: 'course-5',
    name: 'Marketing Personal y Gestión de Marca para Creadores',
    institution: 'Digital Talent & Marketing Institute',
    year: '2019',
    category: 'Marketing',
    duration: '40 horas',
    description: 'Construcción de marca personal atractiva, interacción positiva con audiencias en redes sociales y representación fiel de patrocinadores.'
  },
  {
    id: 'course-6',
    name: 'Excelencia en Atención al Cliente y Negociación en Ferias',
    institution: 'Cámara de Comercio & Servicios de Santa Cruz',
    year: '2018',
    category: 'Protocolo',
    duration: '35 horas',
    description: 'Estrategias de fidelización de visitantes, atención cordial bajo presión en pabellones masivos y resolución empática de consultas.'
  },
  {
    id: 'course-7',
    name: 'Primeros Auxilios y Seguridad Preventiva en Eventos Masivos',
    institution: 'Cruz Roja Boliviana - Filial Santa Cruz',
    year: '2017',
    category: 'Seguridad',
    duration: '30 horas',
    description: 'Capacitación en respuesta rápida ante descompensaciones de asistentes, evacuación segura y soporte básico de emergencia.'
  },
  {
    id: 'course-8',
    name: 'Inglés Conversacional para Ferias y Eventos Internacionales',
    institution: 'Centro Boliviano Americano (CBA)',
    year: '2016',
    category: 'Comunicación',
    duration: '120 horas',
    description: 'Vocabulario comercial, recepción de invitados angloparlantes y terminología turística y corporativa.'
  }
];

export const skillsData: SkillItem[] = [
  {
    name: 'Buen trato al cliente',
    percentage: 98,
    category: 'Interpersonal',
    icon: 'sentiment_very_satisfied',
    description: 'Calidez, sonrisa constante, cortesía impecable y genuina vocación de servicio en cada interacción presencial.'
  },
  {
    name: 'Comunicación asertiva',
    percentage: 95,
    category: 'Interpersonal',
    icon: 'record_voice_over',
    description: 'Excelente dicción, tono de voz envolvente y habilidad para transmitir mensajes corporativos con claridad e impacto.'
  },
  {
    name: 'Organización de clientes & protocolo',
    percentage: 92,
    category: 'Gestión & Eventos',
    icon: 'groups',
    description: 'Manejo de flujo de personas en stands, registro ágil de invitados VIP y ordenamiento protocolar riguroso.'
  },
  {
    name: 'Resolución de problemas',
    percentage: 90,
    category: 'Interpersonal',
    icon: 'lightbulb',
    description: 'Proactividad para solucionar imprevistos en vivo de manera serena, eficaz y manteniendo la elegancia.'
  },
  {
    name: 'Trabajo en equipo',
    percentage: 96,
    category: 'Interpersonal',
    icon: 'handshake',
    description: 'Coordinación armoniosa con azafatas, fotógrafos, directores creativos, personal de logística y seguridad.'
  },
  {
    name: 'Pasarela & Fotopose Profesional',
    percentage: 95,
    category: 'Modelaje & Pasarela',
    icon: 'star',
    description: 'Dominio del ritmo, giros limpios en tarima, actitud escénica y ángulos ideales para fotografía publicitaria.'
  },
  {
    name: 'Presencia Escénica & Carisma',
    percentage: 97,
    category: 'Modelaje & Pasarela',
    icon: 'auto_awesome',
    description: 'Atracción visual natural, porte elegante y magnetismo que potencia la visibilidad de cualquier marca.'
  },
  {
    name: 'Puntualidad & Ética Profesional',
    percentage: 99,
    category: 'Gestión & Eventos',
    icon: 'schedule',
    description: 'Llegada anticipada a pautas de maquillaje, ensayos y eventos; disciplina y confidencialidad absoluta.'
  }
];
