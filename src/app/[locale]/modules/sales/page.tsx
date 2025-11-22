import {
  Handshake,
  DollarSign,
  FileText,
  Boxes,
  ClipboardList,
  CheckCircle,
  TrendingUp,
  Package,
  Calculator,
} from "lucide-react";

import { ModuleHeader } from "../_component/ModuleHeader";
import { ModuleSummary } from "../_component/ModuleSummary";
import { ModuleVisualFlow } from "../_component/ModuleVisualFlow";
import { ModuleFeatureGrid } from "../_component/ModuleFeatureGrid";
import { ModuleUseCase } from "../_component/ModuleUseCase";
import { ModuleBenefitList } from "../_component/ModuleBenefitList";
import BackHomeButton from "@/components/BackHomeButton";
import { getI18n, getScopedI18n } from "@/public/locales/i18n/server";

const SalesModulePage = async () => {
  const scopedT = await getScopedI18n("landingPage.modulesPath.sales");
  const t = await getI18n();

  const features = [
    {
      icon: <Handshake className="h-6 w-6" />,
      title: scopedT("features.customerManagement.title"),
      description: scopedT("features.customerManagement.desc"),
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: scopedT("features.quotationInvoicing.title"),
      description: scopedT("features.quotationInvoicing.desc"),
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: scopedT("features.salesOrders.title"),
      description: scopedT("features.salesOrders.desc"),
    },
    {
      icon: <Boxes className="h-6 w-6" />,
      title: scopedT("features.orderFulfillment.title"),
      description: scopedT("features.orderFulfillment.desc"),
    },
  ];

  const benefits = scopedT("benefits").split("||");

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <ModuleHeader
          icon={<TrendingUp className="h-8 w-8 text-white" />}
          title={scopedT("header.title")}
          description={scopedT("header.desc")}
          backgroundColor="bg-teal-600"
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
              icon={<ClipboardList className="h-8 w-8" />}
              title={scopedT("visualFlow.before1.title")}
              description={scopedT("visualFlow.before1.desc")}
            />
            <ModuleVisualFlow.Item
              icon={<CheckCircle className="h-8 w-8" />}
              title={scopedT("visualFlow.before2.title")}
              description={scopedT("visualFlow.before2.desc")}
            />
          </ModuleVisualFlow.Before>

          <ModuleVisualFlow.Center
            icon={<TrendingUp className="h-6 w-6" />}
            title={scopedT("visualFlow.center.title")}
            description={scopedT("visualFlow.center.desc")}
            cardBorderColor="border-teal-200"
            cardBackgroundColor="bg-teal-50"
            iconBackgroundColor="bg-teal-600"
            iconColor="text-white"
          />

          <ModuleVisualFlow.After>
            <ModuleVisualFlow.Item
              icon={<Package className="h-8 w-8" />}
              title={scopedT("visualFlow.after1.title")}
              description={scopedT("visualFlow.after1.desc")}
            />
            <ModuleVisualFlow.Item
              icon={<Calculator className="h-8 w-8" />}
              title={scopedT("visualFlow.after2.title")}
              description={scopedT("visualFlow.after2.desc")}
            />
          </ModuleVisualFlow.After>
        </ModuleVisualFlow>

        {/* Feature Grid */}
        <ModuleFeatureGrid
          title={scopedT("featureGridTitle")}
          features={features}
          iconBackgroundColor="bg-teal-100"
          iconColor="text-teal-600"
        />

        {/* Use Case */}
        <ModuleUseCase
          title={scopedT("useCase.title")}
          description={scopedT("useCase.desc")}
          gradientFrom="from-teal-600"
          gradientTo="to-teal-700"
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

export default SalesModulePage;
