import { ExternalLink } from "lucide-react";
import { profile } from "../data/profile";
import type { Translation } from "../i18n";

type FooterProps = {
  t: Translation;
};

export function Footer({ t }: FooterProps) {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-14 pt-8 lg:px-8">
      <div className="rounded-3xl bg-slate-950 p-8 text-white dark:bg-white dark:text-slate-950">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">{t.contactTitle}</h2>
            <p className="mt-2 opacity-80">{t.contactDescription}</p>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-slate-950 shadow-sm dark:bg-slate-950 dark:text-white"
          >
            {t.contactButton} <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
