import type { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
};

export function Pill({ children }: PillProps) {
  return (
    <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-800 shadow-sm dark:border-blue-900 dark:bg-blue-950/60 dark:text-blue-200">
      {children}
    </span>
  );
}
