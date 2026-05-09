import type { Translation } from "../i18n";
import { SectionTitle } from "./ui/SectionTitle";

type AdditionalInfoProps = {
  t: Translation;
};

export function AdditionalInfo({ t }: AdditionalInfoProps) {
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
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            Python, Matlab, R, Microsoft Office
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="font-bold text-slate-950 dark:text-white">{t.certifications}</h3>
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            ECDL Full Standard, ECDL IT Security
          </p>
        </div>
      </div>
    </section>
  );
}
