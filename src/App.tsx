import React,{useState} from "react";
import {Mail,Phone,MapPin,ExternalLink} from "lucide-react";

type Language="it"|"en";

const profile={
  name: "Michele Liberio",
  role: "Full Stack Software Developer",
  location: "Bari / Remote",
  email: "mikelelib@libero.it",
  phone: "+39 3287892201",
  linkedin: "#",
  github: "#",
};

const translations={
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
      "Sono disponibile per opportunità come Full Stack Developer o Backend Developer.",
    contactButton: "Contattami",
    education: [
      {
        title: "Laurea Magistrale in Matematica",
        school: "Università degli Studi di Bari “Aldo Moro”",
        period: "2018"
      },
      {
        title: "Laurea Triennale in Matematica",
        school: "Università degli Studi di Bari “Aldo Moro”",
        period: "2013",
      }
    ],
    experiences: [
      {
        title: "Senior Full Stack Developer",
        company: "Macnil",
        location: "Gravina in Puglia (BA)",
        period: "Sep 2023 – Present",
        description:
          "Sviluppo e manutenzione di applicazioni enterprise in ambito Fleet Management e automazione di processi aziendali, con focus su sviluppo full stack, integrazione sistemi e affidabilità applicativa.",
        bullets: [
          "Progettazione e sviluppo di funzionalità frontend e backend.",
          "Sviluppo di soluzioni per l’automazione dell’inserimento di nuovi contratti.",
          "Integrazione con API esterne, tra cui HubSpot CRM e TeamSystem.",
          "Gestione e ottimizzazione di flussi applicativi enterprise.",
          "Supporto tecnico, manutenzione evolutiva e risoluzione problematiche applicative.",
        ],
        stack: ["React","Java Spring","PostgreSQL","MongoDB","Cassandra","MySQL","AWS","Docker","Jenkins","Dremio"],
      },
      {
        title: "Full Stack Developer",
        company: "Macnil",
        location: "Gravina in Puglia (BA)",
        period: "Aug 2021 – Dec 2022",
        description:
          "Sviluppo e manutenzione di una piattaforma di Fleet Management in ambiente enterprise, occupandomi sia del frontend che del backend applicativo.",
        bullets: [
          "Sviluppo e manutenzione di componenti applicativi full stack.",
          "Gestione di database relazionali e NoSQL.",
          "Supporto alla risoluzione di problematiche tecniche lato cliente.",
          "Collaborazione al miglioramento dell’affidabilità del sistema.",
        ],
        stack: ["React","Java Spring","PostgreSQL","MongoDB","Cassandra","MySQL","AWS"],
      },
      {
        title: "Frontend Developer",
        company: "Accenture",
        location: "Milano",
        period: "May 2019 – Jul 2021",
        description:
          "Progetti enterprise per Intesa Sanpaolo e Alba Leasing, con focus sullo sviluppo frontend, manutenzione evolutiva e rilascio software.",
        bullets: [
          "Sviluppo di componenti frontend con Angular e AngularJS.",
          "Gestione e risoluzione di defect applicativi.",
          "Supporto alle fasi di rilascio in produzione.",
          "Collaborazione in contesti Agile e Waterfall.",
          "Sviluppo di nuove funzionalità per portali enterprise.",
        ],
        stack: ["Angular 7","AngularJS","XDCE","TypeScript","JavaScript","HTML","SCSS","Jenkins","Kibana"],
      },
    ]
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
        school: "University of Bari “Aldo Moro”",
        period: "2018"
      },
      {
        title: "Bachelor's Degree in Mathematics",
        school: "University of Bari “Aldo Moro”",
        period: "2013",
      }
    ],
    experiences: [
      {
        title: "Senior Full Stack Developer",
        company: "Macnil",
        location: "Gravina in Puglia (BA)",
        period: "Sep 2023 – Present",
        description:
          "Development and maintenance of enterprise applications in the Fleet Management sector and business process automation, with a focus on full stack development, system integration, and application reliability.",
        bullets: [
          "Design and development of frontend and backend features.",
          "Development of solutions for automating the onboarding of new contracts.",
          "Integration with external APIs, including HubSpot CRM and TeamSystem.",
          "Management and optimization of enterprise application workflows.",
          "Technical support, evolutionary maintenance, and troubleshooting of application issues.",
        ],
        stack: ["React","Java Spring","PostgreSQL","MongoDB","Cassandra","MySQL","AWS","Docker","Jenkins","Dremio"],
      },
      {
        title: "Full Stack Developer",
        company: "Macnil",
        location: "Gravina in Puglia (BA)",
        period: "Aug 2021 – Dec 2022",
        description:
          "Development and maintenance of an enterprise Fleet Management platform, working on both frontend and backend application layers.",
        bullets: [
          "Development and maintenance of full stack application components.",
          "Management of relational and NoSQL databases.",
          "Support in resolving client-side technical issues.",
          "Collaboration in improving system reliability.",
        ],
        stack: ["React","Java Spring","PostgreSQL","MongoDB","Cassandra","MySQL","AWS"],
      },
      {
        title: "Frontend Developer",
        company: "Accenture",
        location: "Milan",
        period: "May 2019 – Jul 2021",
        description:
          "Enterprise projects for Intesa Sanpaolo and Alba Leasing, focused on frontend development, evolutionary maintenance, and software releases.",
        bullets: [
          "Development of frontend components using Angular and AngularJS.",
          "Management and resolution of application defects.",
          "Support during production release phases.",
          "Collaboration in Agile and Waterfall environments.",
          "Development of new features for enterprise portals.",
        ],
        stack: ["Angular 7","AngularJS","XDCE","TypeScript","JavaScript","HTML","SCSS","Jenkins","Kibana"],
      },
    ]
  },
};

const skills={
  Backend: ["Java","Spring","Spring Boot","REST API","SQL"],
  Frontend: ["React","Angular","AngularJS","TypeScript","JavaScript","HTML","SCSS"],
  Database: ["PostgreSQL","MySQL","MongoDB","Cassandra"],
  "Cloud & DevOps": ["AWS","Docker","Jenkins","Git"],
  Tools: ["Datadog","Kibana","Postman","Bitbucket","SourceTree","Trello","HP ALM","MantisBT"],
  "Integrations & Platforms": ["HubSpot CRM","TeamSystem"],
};

function SectionTitle({children}: {children: React.ReactNode}) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">{children}</h2>
      <div className="mt-2 h-1 w-12 rounded-full bg-slate-950 dark:bg-white" />
    </div>
  );
}

function Pill({children}: {children: React.ReactNode}) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
      {children}
    </span>
  );
}

function LanguageToggle({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}) {
  return (
    <div className="mb-8 flex gap-2">
      <button
        onClick={() => setLanguage("it")}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${language==="it"
          ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
          :"bg-white text-slate-500 dark:bg-slate-900 dark:text-slate-400"
          }`}
      >
        IT
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${language==="en"
          ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
          :"bg-white text-slate-500 dark:bg-slate-900 dark:text-slate-400"
          }`}
      >
        EN
      </button>
    </div>
  );
}

function Header({
  language,
  setLanguage,
  t,
}: {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  t: typeof translations.it;
}) {
  return (
    <header className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 md:flex-row md:items-center md:justify-between lg:px-8">
      <div>
        <LanguageToggle language={language} setLanguage={setLanguage} />

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
          {t.profileLabel}
        </p>

        <h1 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-4 text-xl text-slate-700 dark:text-slate-300">{profile.role}</p>

        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg">
          {t.summary}
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-3"><MapPin size={16} /> {profile.location}</div>
          <div className="flex items-center gap-3"><Mail size={16} /> {profile.email}</div>
          <div className="flex items-center gap-3"><Phone size={16} /> {profile.phone}</div>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:underline">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

function Skills({t}: {t: typeof translations.it}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <SectionTitle>{t.technicalSkills}</SectionTitle>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category,items]) => (
          <div key={category} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 font-bold text-slate-950 dark:text-white">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => <Pill key={skill}>{skill}</Pill>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience({t}: {t: typeof translations.it}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <SectionTitle>{t.professionalExperience}</SectionTitle>
      <div className="space-y-6">
        {t.experiences.map((experience) => (
          <article key={`${experience.company}-${experience.period}`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">{experience.title}</h3>
                <p className="mt-1 text-slate-600 dark:text-slate-400">{experience.company} · {experience.location}</p>
              </div>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{experience.period}</p>
            </div>

            <p className="mt-5 leading-7 text-slate-700 dark:text-slate-300">{experience.description}</p>

            <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
              {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {experience.stack.map((item) => <Pill key={item}>{item}</Pill>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education({t}: {t: typeof translations.it}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <SectionTitle>{t.educationLabel}</SectionTitle>
      <div className="grid gap-4 md:grid-cols-2">
        {t.education.map((item) => (
          <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">{item.title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">{item.school}</p>
            <p className="mt-4 text-sm font-semibold text-slate-500 dark:text-slate-400">{item.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AdditionalInfo({t}: {t: typeof translations.it}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <SectionTitle>{t.additionalInfo}</SectionTitle>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="font-bold text-slate-950 dark:text-white">{t.languages}</h3>
          <p className="mt-3 text-slate-700 dark:text-slate-300">{t.italian}</p>
          <p className="text-slate-700 dark:text-slate-300">{t.english}</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="font-bold text-slate-950 dark:text-white">{t.additionalSkills}</h3>
          <p className="mt-3 text-slate-700 dark:text-slate-300">Python, Matlab, R, Microsoft Office</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="font-bold text-slate-950 dark:text-white">{t.certifications}</h3>
          <p className="mt-3 text-slate-700 dark:text-slate-300">ECDL Full Standard, ECDL IT Security</p>
        </div>
      </div>
    </section>
  );
}

function Footer({t}: {t: typeof translations.it}) {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-14 pt-8 lg:px-8">
      <div className="rounded-3xl bg-slate-950 p-8 text-white dark:bg-white dark:text-slate-950">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">{t.contactTitle}</h2>
            <p className="mt-2 opacity-80">{t.contactDescription}</p>
          </div>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-slate-950 shadow-sm dark:bg-slate-950 dark:text-white">
            {t.contactButton} <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [language,setLanguage]=useState<Language>("it");
  const t=translations[language];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <Header language={language} setLanguage={setLanguage} t={t} />
      <Skills t={t} />
      <Experience t={t} />
      <Education t={t} />
      <AdditionalInfo t={t} />
      <Footer t={t} />
    </main>
  );
}