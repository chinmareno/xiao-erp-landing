import type { ReactNode } from "react";

type Feature = {
  icon: ReactNode;
  title: string;
  description: string;
};

type Props = {
  title: string;
  features: Feature[];
  iconBackgroundColor: string;
  iconColor: string;
};

export const ModuleFeatureGrid = ({
  title,
  features,
  iconBackgroundColor,
  iconColor,
}: Props) => {
  return (
    <div className="mb-12">
      <h2 className="mb-8 text-center text-2xl font-semibold text-gray-900 sm:text-3xl md:text-4xl">
        {title}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="flex items-start space-x-4">
              <div
                className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${iconBackgroundColor}`}
              >
                <div className={iconColor}>{feature.icon}</div>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
