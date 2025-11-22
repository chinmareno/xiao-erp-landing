import type { ReactNode } from "react";

export type ModuleIconProps = {
  icon: ReactNode;
  backgroundColor?: string;
  textColor?: string;
};

export const ModuleIcon = ({
  icon,
  backgroundColor = "bg-slate-100",
  textColor = "text-slate-600",
}: ModuleIconProps) => {
  return (
    <div
      className={
        "mb-2 flex h-20 w-20 items-center justify-center rounded-full " +
        backgroundColor
      }
    >
      <div className={textColor}>{icon}</div>
    </div>
  );
};
