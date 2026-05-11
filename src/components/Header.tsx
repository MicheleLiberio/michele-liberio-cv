import type { Dispatch, SetStateAction } from "react";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "../data/profile";
import type { Language, Translation } from "../i18n";
import { LanguageToggle } from "./LanguageToggle";

type HeaderProps = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  t: Translation;
};

export function Header({ language, setLanguage, t }: HeaderProps) {
  const handleDownloadPdf = () => {
    window.print();
  };

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
          <div className="flex items-center gap-3">
            <MapPin size={16} /> {profile.location}
          </div>
          <div className="flex items-center gap-3">
            <Mail size={16} /> {profile.email}
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} /> {profile.phone}
          </div>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:underline"
          >
            GitHub
          </a>
          {false && <button
            type="button"
            onClick={handleDownloadPdf}
            className="no-print mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            <Download size={16} /> {t.downloadPdfButton}
          </button>}
        </div>
      </div>
    </header>
  );
}
