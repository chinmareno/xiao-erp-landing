import { Hero } from "./_components/Hero";
import { ModulesOverview } from "./_components/ModulesOverview";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <ModulesOverview />
    </div>
  );
};

export default LandingPage;
