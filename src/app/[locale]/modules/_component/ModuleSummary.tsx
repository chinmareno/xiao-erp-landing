type Props = {
  title: string;
  description: string;
};

export const ModuleSummary = ({ title, description }: Props) => {
  return (
    <div className="mb-12 rounded-2xl bg-white p-6 shadow-lg md:p-8">
      <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl">
        {title}
      </h2>
      <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
        {description}
      </p>
    </div>
  );
};
