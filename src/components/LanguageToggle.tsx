import type { Dispatch, SetStateAction } from "react";
import type { Language } from "../i18n";

type LanguageToggleProps = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
};

export function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <div className="mb-8 flex gap-2">
      <button
        onClick={() => setLanguage("it")}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
          language === "it"
            ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
            : "bg-white text-slate-500 dark:bg-slate-900 dark:text-slate-400"
        }`}
      >
        IT
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
          language === "en"
            ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
            : "bg-white text-slate-500 dark:bg-slate-900 dark:text-slate-400"
        }`}
      >
        EN
      </button>
    </div>
  );
}
