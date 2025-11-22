import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
  backgroundColor: string;
};

export const ModuleHeader = ({
  icon,
  title,
  description,
  backgroundColor,
}: Props) => {
  return (
    <div className="mb-16 text-center">
      <div
        className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full ${backgroundColor}`}
      >
        {icon}
      </div>
      <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h1>
      <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg md:text-xl">
        {description}
      </p>
    </div>
  );
};
