import type { Translation } from "../i18n";
import { SectionTitle } from "./ui/SectionTitle";

type EducationProps = {
  t: Translation;
};

export function Education({ t }: EducationProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <SectionTitle>{t.educationLabel}</SectionTitle>
      <div className="grid gap-4 md:grid-cols-2">
        {t.education.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">{item.title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">{item.school}</p>
            <p className="mt-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
              {item.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
