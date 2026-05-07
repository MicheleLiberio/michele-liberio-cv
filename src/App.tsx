import React from "react";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const profile = {
  name: "Michele Liberio",
  role: "Full Stack Software Developer",
  location: "Bari / Remote",
  email: "mikelelib@libero.it",
  phone: "+39 3287892201",
  linkedin: "#",
  github: "#",
};

const skills = {
  Backend: ["Java", "Spring", "Spring Boot", "REST API", "SQL"],
  Frontend: ["React", "Angular", "AngularJS", "TypeScript", "JavaScript", "HTML", "SCSS"],
  Database: ["PostgreSQL", "MySQL", "MongoDB", "Cassandra"],
  "Cloud & DevOps": ["AWS", "Docker", "Jenkins", "Git"],
  Tools: ["Datadog", "Kibana", "Postman", "Bitbucket", "SourceTree", "Trello", "HP ALM", "MantisBT"],
};

const experiences = [
  {
    title: "Senior Full Stack Software Engineer",
    company: "Macnil",
    location: "Gravina in Puglia (BA)",
    period: "Sep 2023 – Present",
    description:
      "Sviluppo di applicazioni enterprise in ambito Fleet Management e soluzioni interne per automazione dei processi aziendali.",
    bullets: [
      "Progettazione e sviluppo di funzionalità frontend e backend.",
      "Sviluppo in prima persona di funzionalità per l’automazione dell’inserimento di nuovi contratti.",
      "Integrazione con API esterne, tra cui HubSpot e TeamSystem.",
      "Supporto tecnico, manutenzione applicativa e miglioramento dell’esperienza utente.",
    ],
    stack: ["React", "Java Spring", "PostgreSQL", "MongoDB", "Cassandra", "MySQL", "AWS", "Docker", "Jenkins"],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Macnil",
    location: "Gravina in Puglia (BA)",
    period: "Aug 2021 – Dec 2022",
    description:
      "Progettazione e sviluppo di una piattaforma di Fleet Management, con attività sia frontend che backend.",
    bullets: [
      "Sviluppo e manutenzione di componenti applicativi full stack.",
      "Gestione di database relazionali e NoSQL.",
      "Collaborazione alla risoluzione di problematiche tecniche lato cliente.",
      "Supporto al miglioramento dell’affidabilità del sistema.",
    ],
    stack: ["React", "Java Spring", "PostgreSQL", "MongoDB", "Cassandra", "MySQL", "AWS"],
  },
  {
    title: "Frontend Software Engineer",
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
    stack: ["Angular 7", "AngularJS", "XDCE", "TypeScript", "JavaScript", "HTML", "SCSS", "Jenkins", "Kibana"],
  },
];

const education = [
  {
    title: "Laurea Magistrale in Matematica",
    school: "Università degli Studi di Bari “Aldo Moro”",
    period: "2018",
  },
  {
    title: "Laurea Triennale in Matematica",
    school: "Università degli Studi di Bari “Aldo Moro”",
    period: "2013",
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">{children}</h2>
      <div className="mt-2 h-1 w-12 rounded-full bg-slate-950 dark:bg-white" />
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
      {children}
    </span>
  );
}

function Header() {
  return (
    <header className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 md:flex-row md:items-center md:justify-between lg:px-8">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
          Private CV
        </p>
        <h1 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl text-slate-700 dark:text-slate-300">{profile.role}</p>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg">
          Software Engineer Full Stack con esperienza nello sviluppo di applicazioni enterprise e sistemi gestionali.
          Specializzato in Java Spring, React e integrazione API, con esperienza su database relazionali/NoSQL e servizi AWS.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-3"><MapPin size={16} /> {profile.location}</div>
          <div className="flex items-center gap-3"><Mail size={16} /> {profile.email}</div>
          <div className="flex items-center gap-3"><Phone size={16} /> {profile.phone}</div>
          <div className="flex items-center gap-3">LinkedIn</div>
          <div className="flex items-center gap-3">GitHub</div>
        </div>
      </div>
    </header>
  );
}

function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <SectionTitle>Technical Skills</SectionTitle>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
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

function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <SectionTitle>Professional Experience</SectionTitle>
      <div className="space-y-6">
        {experiences.map((experience) => (
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

function Education() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <SectionTitle>Education</SectionTitle>
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item) => (
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

function AdditionalInfo() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <SectionTitle>Additional Info</SectionTitle>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="font-bold text-slate-950 dark:text-white">Languages</h3>
          <p className="mt-3 text-slate-700 dark:text-slate-300">Italiano: madrelingua</p>
          <p className="text-slate-700 dark:text-slate-300">Inglese: B1</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="font-bold text-slate-950 dark:text-white">Additional Skills</h3>
          <p className="mt-3 text-slate-700 dark:text-slate-300">Python, Matlab, R, Microsoft Office</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="font-bold text-slate-950 dark:text-white">Certifications</h3>
          <p className="mt-3 text-slate-700 dark:text-slate-300">ECDL Full Standard, ECDL IT Security</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-14 pt-8 lg:px-8">
      <div className="rounded-3xl bg-slate-950 p-8 text-white dark:bg-white dark:text-slate-950">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Vuoi metterti in contatto?</h2>
            <p className="mt-2 opacity-80">Sono disponibile per opportunità come Software Engineer, Backend Engineer o Full Stack Developer.</p>
          </div>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-slate-950 shadow-sm dark:bg-slate-950 dark:text-white">
            Contattami <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <Header />
      <Skills />
      <Experience />
      <Education />
      <AdditionalInfo />
      <Footer />
    </main>
  );
}
