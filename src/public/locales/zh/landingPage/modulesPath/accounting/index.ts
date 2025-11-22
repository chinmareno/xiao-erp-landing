import { features } from "./features";
import { visualFlow } from "./visualFlow";

export const accounting = {
  header: {
    title: "会计模块",
    desc: "用智能自动化提升财务效率",
  },
  summary: {
    title: "会计模块核心功能",
    desc: "自动处理账务、开票和财务报表，与销售、库存等模块无缝对接，减少人工操作，确保数据精准。涵盖交易全流程和税务合规，系统后台全自动完成。",
  },
  visualFlow: visualFlow,
  featureGridTitle: "核心功能",
  useCase: {
    title: "典型应用场景",
    desc: "销售完成一笔 15,000 美元交易后，系统自动开票、记账、套用税率并更新应收账款。客户付款后自动对账，反映现金流，月底报表也自动生成，无需人工干预。",
  },
  benefitListTitle: "财务管理升级利器",
  features: features,
  benefits:
    "减少人工录入，降低错误风险||" +
    "支持审计，完整保留记录||" +
    "财务数据与销售、库存实时同步||" +
    "自动更新税率，确保政策合规||" +
    "一键导出Excel、PDF或外部财务软件",
};
