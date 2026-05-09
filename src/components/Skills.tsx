import { skills } from "../data/skills";
import type { Translation } from "../i18n";
import { Pill } from "./ui/Pill";
import { SectionTitle } from "./ui/SectionTitle";

type SkillsProps = {
  t: Translation;
};

export function Skills({ t }: SkillsProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <SectionTitle>{t.technicalSkills}</SectionTitle>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="mb-4 font-bold text-slate-950 dark:text-white">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <Pill key={skill}>{skill}</Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
