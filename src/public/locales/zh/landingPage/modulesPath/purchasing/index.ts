import { features } from "./features";
import { visualFlow } from "./visualFlow";

export const purchasing = {
  header: {
    title: "采购模块",
    desc: "全面掌控采购全流程",
  },
  summary: {
    title: "简化采购，提升效率",
    desc: "涵盖采购申请、审批、下单、收货到付款全过程，帮助企业管控成本，减少延误和错误。",
  },
  visualFlow: visualFlow,
  featureGridTitle: "关键功能",
  useCase: {
    title: "完整流程示范",
    desc: "员工申请办公椅，经理在线审批后自动生成订单。货到自动入库，财务接收发票并完成付款，全流程透明且可追踪。",
  },
  benefitListTitle: "采购流程优势",
  features: features,
  benefits:
    "避免重复采购和越权||" +
    "集中管理供应商信息||" +
    "库存和财务同步更新||" +
    "持续优化采购和谈判策略||" +
    "提升流程透明度和合规性",
};
