import {
  Calculator,
  TrendingUp,
  PieChart,
  Receipt,
  CreditCard,
  Building2,
  Package,
  DollarSign,
} from "lucide-react";
import { ModuleHeader } from "../_component/ModuleHeader";
import { ModuleSummary } from "../_component/ModuleSummary";
import { ModuleVisualFlow } from "../_component/ModuleVisualFlow";
import { ModuleFeatureGrid } from "../_component/ModuleFeatureGrid";
import { ModuleUseCase } from "../_component/ModuleUseCase";
import { ModuleBenefitList } from "../_component/ModuleBenefitList";
import BackHomeButton from "@/components/BackHomeButton";
import { getI18n, getScopedI18n } from "@/public/locales/i18n/server";

const AccountingModulePage = async () => {
  const scopedT = await getScopedI18n("landingPage.modulesPath.accounting");
  const t = await getI18n();

  const features = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: scopedT("features.generalLedger.title"),
      description: scopedT("features.generalLedger.desc"),
    },
    {
      icon: <Receipt className="h-6 w-6" />,
      title: scopedT("features.accountsPayableOrReceivable.title"),
      description: scopedT("features.accountsPayableOrReceivable.desc"),
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: scopedT("features.financialReport.title"),
      description: scopedT("features.financialReport.desc"),
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: scopedT("features.taxManagement.title"),
      description: scopedT("features.taxManagement.desc"),
    },
  ];

  const benefits = scopedT("benefits").split("||");

  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-12">
      {/* Header */}
      <ModuleHeader
        icon={<Calculator className="h-8 w-8 text-white" />}
        title={scopedT("header.title")}
        description={scopedT("header.desc")}
        backgroundColor="bg-blue-600"
      />

      {/* Summary Section */}
      <ModuleSummary
        title={scopedT("summary.title")}
        description={scopedT("summary.desc")}
      />

      {/* Visual Work Flow */}
      <ModuleVisualFlow title={t("landingPage.modulesPath.visualFlowTitle")}>
        <ModuleVisualFlow.Before>
          <ModuleVisualFlow.Item
            icon={<TrendingUp className="h-8 w-8" />}
            title={scopedT("visualFlow.before1.title")}
            description={scopedT("visualFlow.before1.desc")}
          />
          <ModuleVisualFlow.Item
            icon={<Package className="h-8 w-8" />}
            title={scopedT("visualFlow.before2.title")}
            description={scopedT("visualFlow.before2.desc")}
          />
        </ModuleVisualFlow.Before>

        <ModuleVisualFlow.Center
          icon={<Calculator className="h-6 w-6" />}
          title={scopedT("visualFlow.center.title")}
          description={scopedT("visualFlow.center.desc")}
          cardBorderColor="border-blue-200"
          cardBackgroundColor="bg-blue-50"
          iconBackgroundColor="bg-blue-600"
          iconColor="text-white"
        />

        <ModuleVisualFlow.After>
          <ModuleVisualFlow.Item
            icon={<CreditCard className="h-8 w-8" />}
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

      {/* Feature Highlights */}
      <ModuleFeatureGrid
        title={scopedT("featureGridTitle")}
        features={features}
        iconBackgroundColor="bg-blue-100"
        iconColor="text-blue-600"
      />

      {/* Use Case Section */}
      <ModuleUseCase
        title={scopedT("useCase.title")}
        description={scopedT("useCase.desc")}
        gradientFrom="from-blue-600"
        gradientTo="to-indigo-700"
      />

      {/* Benefits Section */}
      <ModuleBenefitList
        title={scopedT("benefitListTitle")}
        benefits={benefits}
      />

      {/* Back Home Button */}
      <BackHomeButton />
    </div>
  );
};

export default AccountingModulePage;
