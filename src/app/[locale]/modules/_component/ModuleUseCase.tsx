type Props = {
  title: string;
  description: string;
  gradientFrom?: string;
  gradientTo?: string;
};

export const ModuleUseCase = ({
  title,
  description,
  gradientFrom = "from-blue-600",
  gradientTo = "to-indigo-700",
}: Props) => {
  return (
    <div
      className={`mb-12 rounded-2xl bg-gradient-to-r ${gradientFrom} ${gradientTo} p-8 text-white shadow-lg`}
    >
      <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">{title}</h2>
      <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
        <p className="text-base leading-relaxed sm:text-lg">{description}</p>
      </div>
    </div>
  );
};
