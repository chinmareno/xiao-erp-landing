import { Package, ShoppingCart, TrendingUp, Calculator } from "lucide-react";
import ModulesOverviewCard from "./ModulesOverviewCard";
import { getCurrentLocale, getScopedI18n } from "@/public/locales/i18n/server";

export const ModulesOverview = async () => {
  const scopedT = await getScopedI18n("landingPage.rootPath.moduleOverview");
  const locale = await getCurrentLocale();

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
            {scopedT("title")}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            {scopedT("desc")}
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <ModulesOverviewCard
            description={scopedT("accounting.desc")}
            features={scopedT("accounting.features")}
            icon={<Calculator />}
            iconClassName=""
            title={scopedT("accounting.title")}
            learnMoreHref={`${locale}/modules/accounting`}
          />
          <ModulesOverviewCard
            description={scopedT("inventory.desc")}
            features={scopedT("inventory.features")}
            icon={<Package />}
            iconClassName=""
            title={scopedT("inventory.title")}
            learnMoreHref={`${locale}/modules/inventory`}
          />
          <ModulesOverviewCard
            description={scopedT("purchasing.desc")}
            features={scopedT("purchasing.features")}
            icon={<ShoppingCart />}
            iconClassName=""
            title={scopedT("purchasing.title")}
            learnMoreHref={`${locale}/modules/purchasing`}
          />
          <ModulesOverviewCard
            description={scopedT("sales.desc")}
            features={scopedT("sales.features")}
            icon={<TrendingUp />}
            iconClassName=""
            title={scopedT("sales.title")}
            learnMoreHref={`${locale}/modules/sales`}
          />
        </div>

        <div className="px-4 text-center sm:px-6 lg:px-0">
          <div className="border-muted bg-muted/40 mx-auto max-w-4xl rounded-3xl border px-6 py-10 shadow-md backdrop-blur-sm sm:px-10 lg:px-16">
            <h3 className="text-foreground mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              {scopedT("lastCard.title")}
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
              {scopedT("lastCard.desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
