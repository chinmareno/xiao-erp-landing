import type { TitleDesc } from "../generic";

export type ModulesPath = {
  visualFlowTitle: string;
  backHome: string;
  accounting: {
    header: TitleDesc;
    summary: TitleDesc;
    visualFlow: {
      before1: TitleDesc;
      before2: TitleDesc;
      center: TitleDesc;
      after1: TitleDesc;
      after2: TitleDesc;
    };
    featureGridTitle: string;
    useCase: TitleDesc;
    benefitListTitle: string;
    features: {
      generalLedger: TitleDesc;
      accountsPayableOrReceivable: TitleDesc;
      financialReport: TitleDesc;
      taxManagement: TitleDesc;
    };
    benefits: string;
  };
  inventory: {
    header: TitleDesc;
    summary: TitleDesc;
    visualFlow: {
      before1: TitleDesc;
      before2: TitleDesc;
      center: TitleDesc;
      after1: TitleDesc;
      after2: TitleDesc;
    };
    featureGridTitle: string;
    useCase: TitleDesc;
    benefitListTitle: string;
    features: {
      stockManagement: TitleDesc;
      purchaseOrders: TitleDesc;
      salesSync: TitleDesc;
      stockAudits: TitleDesc;
    };
    benefits: string;
  };
  purchasing: {
    header: TitleDesc;
    summary: TitleDesc;
    visualFlow: {
      before1: TitleDesc;
      before2: TitleDesc;
      center: TitleDesc;
      after1: TitleDesc;
      after2: TitleDesc;
    };
    featureGridTitle: string;
    useCase: TitleDesc;
    benefitListTitle: string;
    features: {
      purchaseRequests: TitleDesc;
      vendorComparison: TitleDesc;
      purchaseOrders: TitleDesc;
      receivingAndReconciliation: TitleDesc;
    };
    benefits: string;
  };
  sales: {
    header: TitleDesc;
    summary: TitleDesc;
    visualFlow: {
      before1: TitleDesc;
      before2: TitleDesc;
      center: TitleDesc;
      after1: TitleDesc;
      after2: TitleDesc;
    };
    featureGridTitle: string;
    useCase: TitleDesc;
    benefitListTitle: string;
    features: {
      customerManagement: TitleDesc;
      quotationInvoicing: TitleDesc;
      salesOrders: TitleDesc;
      orderFulfillment: TitleDesc;
    };
    benefits: string;
  };
};
