import { features } from "./features";
import { visualFlow } from "./visualFlow";

export const sales = {
  header: {
    title: "销售模块",
    desc: "从客户开发到收款，全面数字化管理",
  },
  summary: {
    title: "销售模块能做什么",
    desc: "自动化线索管理、报价、订单处理和开票收款，提升销售效率，深度集成库存和财务，加快成交速度。",
  },
  visualFlow: visualFlow,
  featureGridTitle: "核心销售功能",
  useCase: {
    title: "真实成交流程",
    desc: "客户咨询后，销售快速生成个性报价。确认后自动生成订单，更新库存，发送发票，财务实时入账，流程顺畅无缝。",
  },
  benefitListTitle: "提升销售转化率",
  features: features,
  benefits:
    "显著缩短销售周期||" +
    "减少手工错误||" +
    "清晰追踪线索到收入全过程||" +
    "库存和财务实时同步||" +
    "提升客户满意度和响应速度",
};
