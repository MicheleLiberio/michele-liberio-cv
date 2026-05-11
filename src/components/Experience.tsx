import type { Translation } from "../i18n";
import { Pill } from "./ui/Pill";
import { SectionTitle } from "./ui/SectionTitle";

type ExperienceProps = {
  t: Translation;
};

export function Experience({ t }: ExperienceProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <SectionTitle>{t.professionalExperience}</SectionTitle>
      <div className="space-y-6">
        {t.experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.period}`}
            className="rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 md:p-8"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  {experience.title}
                </h3>
                <p className="mt-1 text-slate-600 dark:text-slate-400">
                  {experience.company} &middot; {experience.location}
                </p>
              </div>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                {experience.period}
              </p>
            </div>

            <p className="mt-5 leading-7 text-slate-700 dark:text-slate-300">
              {experience.description}
            </p>

            <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {experience.stack.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
