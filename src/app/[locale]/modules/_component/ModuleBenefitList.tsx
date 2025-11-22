import { CheckCircle } from "lucide-react";

type ModuleBenefitListProps = {
  title: string;
  benefits: string[];
};

export const ModuleBenefitList = ({
  title,
  benefits,
}: ModuleBenefitListProps) => {
  return (
    <div className="rounded-2xl bg-white p-8 pb-16 shadow-lg">
      <h2 className="mb-6 text-center text-2xl font-semibold text-gray-900 sm:text-3xl">
        {title}
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 rounded-lg bg-green-50 p-4"
          >
            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <span className="font-medium text-gray-700">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
