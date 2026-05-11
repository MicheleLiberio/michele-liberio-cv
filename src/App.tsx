import { useState } from "react";
import { AdditionalInfo } from "./components/AdditionalInfo";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { translations } from "./i18n";
import type { Language } from "./i18n";

export default function App() {
  const [language, setLanguage] = useState<Language>("it");
  const t = translations[language];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 dark:text-white">
      <Header language={language} setLanguage={setLanguage} t={t} />
      <Skills t={t} />
      <Experience t={t} />
      <Education t={t} />
      <AdditionalInfo t={t} />
      <Footer t={t} />
    </main>
  );
}
