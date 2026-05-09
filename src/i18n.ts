export type Language = "it" | "en";

type EducationItem = {
  title: string;
  school: string;
  period: string;
};

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  bullets: string[];
  stack: string[];
};

export type Translation = {
  profileLabel: string;
  summary: string;
  technicalSkills: string;
  professionalExperience: string;
  educationLabel: string;
  additionalInfo: string;
  languages: string;
  additionalSkills: string;
  certifications: string;
  italian: string;
  english: string;
  contactTitle: string;
  contactDescription: string;
  contactButton: string;
  education: EducationItem[];
  experiences: ExperienceItem[];
};

export const translations: Record<Language, Translation> = {
  it: {
    profileLabel: "CV Personale",
    summary:
      "Full Stack Software Developer con esperienza nello sviluppo di applicazioni enterprise e sistemi gestionali. Specializzato in Java Spring, React e integrazione API, con esperienza su database relazionali/NoSQL e servizi AWS.",
    technicalSkills: "Competenze Tecniche",
    professionalExperience: "Esperienza Professionale",
    educationLabel: "Formazione",
    additionalInfo: "Informazioni Aggiuntive",
    languages: "Lingue",
    additionalSkills: "Competenze Aggiuntive",
    certifications: "Certificazioni",
    italian: "Italiano: madrelingua",
    english: "Inglese: B1",
    contactTitle: "Vuoi metterti in contatto?",
    contactDescription:
      "Sono disponibile per opportunit\u00e0 come Full Stack Developer o Backend Developer.",
    contactButton: "Contattami",
    education: [
      {
        title: "Laurea Magistrale in Matematica",
        school: 'Universit\u00e0 degli Studi di Bari "Aldo Moro"',
        period: "2018",
      },
      {
        title: "Laurea Triennale in Matematica",
        school: 'Universit\u00e0 degli Studi di Bari "Aldo Moro"',
        period: "2013",
      },
    ],
    experiences: [
      {
        title: "Senior Full Stack Developer",
        company: "Macnil",
        location: "Gravina in Puglia (BA)",
        period: "Sep 2023 - Present",
        description:
          "Sviluppo e manutenzione di applicazioni enterprise in ambito Fleet Management e automazione di processi aziendali, con focus su sviluppo full stack, integrazione sistemi e affidabilit\u00e0 applicativa.",
        bullets: [
          "Progettazione e sviluppo di funzionalit\u00e0 frontend e backend.",
          "Sviluppo di soluzioni per l'automazione dell'inserimento di nuovi contratti.",
          "Integrazione con API esterne, tra cui HubSpot CRM e TeamSystem.",
          "Gestione e ottimizzazione di flussi applicativi enterprise.",
          "Supporto tecnico, manutenzione evolutiva e risoluzione problematiche applicative.",
        ],
        stack: [
          "React",
          "Java Spring",
          "PostgreSQL",
          "MongoDB",
          "Cassandra",
          "MySQL",
          "AWS",
          "Docker",
          "Jenkins",
          "Dremio",
        ],
      },
      {
        title: "Full Stack Developer",
        company: "Macnil",
        location: "Gravina in Puglia (BA)",
        period: "Aug 2021 - Dec 2022",
        description:
          "Sviluppo e manutenzione di una piattaforma di Fleet Management in ambiente enterprise, occupandomi sia del frontend che del backend applicativo.",
        bullets: [
          "Sviluppo e manutenzione di componenti applicativi full stack.",
          "Gestione di database relazionali e NoSQL.",
          "Supporto alla risoluzione di problematiche tecniche lato cliente.",
          "Collaborazione al miglioramento dell'affidabilit\u00e0 del sistema.",
        ],
        stack: ["React", "Java Spring", "PostgreSQL", "MongoDB", "Cassandra", "MySQL", "AWS"],
      },
      {
        title: "Frontend Developer",
        company: "Accenture",
        location: "Milano",
        period: "May 2019 - Jul 2021",
        description:
          "Progetti enterprise per Intesa Sanpaolo e Alba Leasing, con focus sullo sviluppo frontend, manutenzione evolutiva e rilascio software.",
        bullets: [
          "Sviluppo di componenti frontend con Angular e AngularJS.",
          "Gestione e risoluzione di defect applicativi.",
          "Supporto alle fasi di rilascio in produzione.",
          "Collaborazione in contesti Agile e Waterfall.",
          "Sviluppo di nuove funzionalit\u00e0 per portali enterprise.",
        ],
        stack: [
          "Angular 7",
          "AngularJS",
          "XDCE",
          "TypeScript",
          "JavaScript",
          "HTML",
          "SCSS",
          "Jenkins",
          "Kibana",
        ],
      },
    ],
  },
  en: {
    profileLabel: "Private CV",
    summary:
      "Full Stack Software Developer with experience in enterprise applications and business management systems. Specialized in Java Spring, React and API integration, with experience in relational/NoSQL databases and AWS services.",
    technicalSkills: "Technical Skills",
    professionalExperience: "Professional Experience",
    educationLabel: "Education",
    additionalInfo: "Additional Info",
    languages: "Languages",
    additionalSkills: "Additional Skills",
    certifications: "Certifications",
    italian: "Italian: native",
    english: "English: B1",
    contactTitle: "Want to get in touch?",
    contactDescription:
      "Available for opportunities as Full Stack Developer or Backend Developer.",
    contactButton: "Contact Me",
    education: [
      {
        title: "Master's Degree in Mathematics",
        school: 'University of Bari "Aldo Moro"',
        period: "2018",
      },
      {
        title: "Bachelor's Degree in Mathematics",
        school: 'University of Bari "Aldo Moro"',
        period: "2013",
      },
    ],
    experiences: [
      {
        title: "Senior Full Stack Developer",
        company: "Macnil",
        location: "Gravina in Puglia (BA)",
        period: "Sep 2023 - Present",
        description:
          "Development and maintenance of enterprise applications in the Fleet Management sector and business process automation, with a focus on full stack development, system integration, and application reliability.",
        bullets: [
          "Design and development of frontend and backend features.",
          "Development of solutions for automating the onboarding of new contracts.",
          "Integration with external APIs, including HubSpot CRM and TeamSystem.",
          "Management and optimization of enterprise application workflows.",
          "Technical support, evolutionary maintenance, and troubleshooting of application issues.",
        ],
        stack: [
          "React",
          "Java Spring",
          "PostgreSQL",
          "MongoDB",
          "Cassandra",
          "MySQL",
          "AWS",
          "Docker",
          "Jenkins",
          "Dremio",
        ],
      },
      {
        title: "Full Stack Developer",
        company: "Macnil",
        location: "Gravina in Puglia (BA)",
        period: "Aug 2021 - Dec 2022",
        description:
          "Development and maintenance of an enterprise Fleet Management platform, working on both frontend and backend application layers.",
        bullets: [
          "Development and maintenance of full stack application components.",
          "Management of relational and NoSQL databases.",
          "Support in resolving client-side technical issues.",
          "Collaboration in improving system reliability.",
        ],
        stack: ["React", "Java Spring", "PostgreSQL", "MongoDB", "Cassandra", "MySQL", "AWS"],
      },
      {
        title: "Frontend Developer",
        company: "Accenture",
        location: "Milan",
        period: "May 2019 - Jul 2021",
        description:
          "Enterprise projects for Intesa Sanpaolo and Alba Leasing, focused on frontend development, evolutionary maintenance, and software releases.",
        bullets: [
          "Development of frontend components using Angular and AngularJS.",
          "Management and resolution of application defects.",
          "Support during production release phases.",
          "Collaboration in Agile and Waterfall environments.",
          "Development of new features for enterprise portals.",
        ],
        stack: [
          "Angular 7",
          "AngularJS",
          "XDCE",
          "TypeScript",
          "JavaScript",
          "HTML",
          "SCSS",
          "Jenkins",
          "Kibana",
        ],
      },
    ],
  },
};
