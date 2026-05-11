import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
        {children}
      </h2>
      <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
    </div>
  );
}
