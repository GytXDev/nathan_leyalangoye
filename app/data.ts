export interface Skill {
  name: string;
  category: string;
}

export interface Project {
  title: string;
  description: string;
  context?: string;
  role: string;
  contributions?: string[];
  technologies: string[];
  link?: string;
  location?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  specialization?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description?: string;
  tasks: string[];
}

export interface Contact {
  type: string;
  label: string;
  url: string;
  icon: string;
}

export const skills: Skill[] = [
  // Langages
  { name: "JavaScript", category: "Langages" },
  { name: "Python", category: "Langages" },
  { name: "Dart", category: "Langages" },

  // Frontend
  { name: "React", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },

  // ERP
  { name: "Odoo", category: "ERP" },

  // Bases de données
  { name: "PostgreSQL", category: "Bases de données" },

  // ORM
  { name: "Drizzle ORM", category: "ORM" },
];

export const projects: Project[] = [
  {
    title: "Péage automatisé",
    description:
      "Modernisation des infrastructures de péage au Gabon et à Kinshasa (Congo)",
    context: "Modernisation des infrastructures de péage",
    role: "Développeur logiciel (contribution active)",
    contributions: [
      "Développement de modules Odoo spécifiques",
      "Gestion des passages et des abonnements",
      "Synchronisation des données terrain",
      "Mise en place de la comptabilité analytique",
    ],
    technologies: ["Odoo", "Python", "XML", "JavaScript", "PostgreSQL"],
    location: "BIFFOUN (Gabon) / Kinshasa (Congo)",
  },
  {
    title: "The Capital Cloud",
    description:
      "Plateforme SaaS complète de gestion financière personnelle et professionnelle. Permet de suivre ses dépenses, catégoriser les transactions, générer des rapports détaillés et visualiser l'évolution de ses finances grâce à des graphiques interactifs. Interface intuitive et moderne pour une gestion optimale du budget.",
    role: "Développeur full-stack",
    technologies: ["React", "Node.js", "PostgreSQL"],
    link: "https://the-capital-cloud.vercel.app/",
  },
  {
    title: "Lumina Auto",
    description: "Application mobile de vente et d'achat de véhicules",
    role: "Développeur mobile",
    technologies: ["Flutter (Dart)", "Firebase"],
    location: "Google Play Store",
  },
  {
    title: "Pog'Up Conciergerie",
    description: "Site web officiel d'une agence de conciergerie",
    role: "Développeur web",
    technologies: ["React / Vue.js", "Node.js"],
    link: "https://pogup-conciergerie.com/",
  },
  {
    title: "GetPass Events",
    description: "Plateforme web de gestion et de réservation d'événements",
    role: "Développeur web",
    technologies: [
      "JavaScript",
      "APIs REST",
      "Bases de données relationnelles",
    ],
    link: "https://www.getpass.events/",
  },
];

export const experiences: Experience[] = [
  {
    title: "Développeur en informatique",
    company: "Ogoouée Technologies",
    period: "2024 – 2025",
    tasks: [
      "Développement de solutions métiers sous Odoo",
      "Conception de modules sur mesure (XML, Python, JavaScript)",
      "Participation à des projets de grande envergure (péage automatisé)",
      "Digitalisation et optimisation des processus terrain",
    ],
  },
  {
    title: "Stagiaire en informatique",
    company: "Ogoouée Technologies",
    period: "2022 – 2024",
    tasks: [
      "Développement d'une application de gestion des tickets de maintenance",
      "Conception d'un module de comptabilité analytique",
      "Contribution aux systèmes de synchronisation des données",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Licence en Informatique",
    institution: "INPTIC Gabon",
    period: "2024 – 2025",
    specialization: "Développement logiciel & systèmes distribués",
  },
  {
    degree: "Baccalauréat Série D",
    institution: "Lycée d'Excellence de Franceville",
    period: "2020 – 2021",
  },
];

export const specializations: string[] = [
  "Développement web & mobile",
  "Systèmes métier complexes",
  "Intégration et personnalisation d'ERP Odoo",
];

export const contactLinks: Contact[] = [
  {
    type: "email",
    label: "Email",
    url: "mailto:mahelguindja@gmail.com",
    icon: "Mail",
  },
  {
    type: "github",
    label: "GitHub",
    url: "https://github.com/GytXDev/",
    icon: "Github",
  },
];
