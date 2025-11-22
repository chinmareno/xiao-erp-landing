import {
  Package,
  TrendingUp,
  Calculator,
  ShoppingCart,
  PieChart,
  Boxes,
  CheckCheck,
} from "lucide-react";
import { ModuleHeader } from "../_component/ModuleHeader";
import { ModuleSummary } from "../_component/ModuleSummary";
import { ModuleVisualFlow } from "../_component/ModuleVisualFlow";
import { ModuleFeatureGrid } from "../_component/ModuleFeatureGrid";
import { ModuleUseCase } from "../_component/ModuleUseCase";
import { ModuleBenefitList } from "../_component/ModuleBenefitList";
import BackHomeButton from "@/components/BackHomeButton";
import { getI18n, getScopedI18n } from "@/public/locales/i18n/server";

const InventoryModulePage = async () => {
  const scopedT = await getScopedI18n("landingPage.modulesPath.inventory");
  const t = await getI18n();

  const features = [
    {
      icon: <Boxes className="h-6 w-6" />,
      title: scopedT("features.stockManagement.title"),
      description: scopedT("features.stockManagement.desc"),
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: scopedT("features.purchaseOrders.title"),
      description: scopedT("features.purchaseOrders.desc"),
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: scopedT("features.salesSync.title"),
      description: scopedT("features.salesSync.desc"),
    },
    {
      icon: <CheckCheck className="h-6 w-6" />,
      title: scopedT("features.stockAudits.title"),
      description: scopedT("features.stockAudits.desc"),
    },
  ];

  const benefits = scopedT("benefits").split("||");

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <ModuleHeader
          icon={<Package className="h-8 w-8 text-white" />}
          title={scopedT("header.title")}
          description={scopedT("header.desc")}
          backgroundColor="bg-amber-700"
        />

        {/* Summary */}
        <ModuleSummary
          title={scopedT("summary.title")}
          description={scopedT("summary.desc")}
        />

        {/* Visual Workflow */}
        <ModuleVisualFlow title={t("landingPage.modulesPath.visualFlowTitle")}>
          <ModuleVisualFlow.Before>
            <ModuleVisualFlow.Item
              icon={<TrendingUp className="h-8 w-8" />}
              title={scopedT("visualFlow.before1.title")}
              description={scopedT("visualFlow.before1.desc")}
            />
            <ModuleVisualFlow.Item
              icon={<ShoppingCart className="h-8 w-8" />}
              title={scopedT("visualFlow.before2.title")}
              description={scopedT("visualFlow.before2.desc")}
            />
          </ModuleVisualFlow.Before>

          <ModuleVisualFlow.Center
            icon={<Package className="h-6 w-6" />}
            title={scopedT("visualFlow.center.title")}
            description={scopedT("visualFlow.center.desc")}
            cardBorderColor="border-amber-200"
            cardBackgroundColor="bg-amber-50"
            iconBackgroundColor="bg-amber-700"
            iconColor="text-white"
          />

          <ModuleVisualFlow.After>
            <ModuleVisualFlow.Item
              icon={<Calculator className="h-8 w-8" />}
              title={scopedT("visualFlow.after1.title")}
              description={scopedT("visualFlow.after1.desc")}
            />
            <ModuleVisualFlow.Item
              icon={<PieChart className="h-8 w-8" />}
              title={scopedT("visualFlow.after2.title")}
              description={scopedT("visualFlow.after2.desc")}
            />
          </ModuleVisualFlow.After>
        </ModuleVisualFlow>

        {/* Feature Grid */}
        <ModuleFeatureGrid
          title={scopedT("featureGridTitle")}
          features={features}
          iconBackgroundColor="bg-amber-100"
          iconColor="text-amber-700"
        />

        {/* Use Case */}
        <ModuleUseCase
          title={scopedT("useCase.title")}
          description={scopedT("useCase.desc")}
          gradientFrom="from-amber-600"
          gradientTo="to-amber-700"
        />

        {/* Benefits */}
        <ModuleBenefitList
          title={scopedT("benefitListTitle")}
          benefits={benefits}
        />

        {/* Back Home */}
        <BackHomeButton />
      </div>
    </div>
  );
};

export default InventoryModulePage;
