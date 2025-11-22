import { features } from "./features";
import { visualFlow } from "./visualFlow";

export const inventory = {
  header: {
    title: "库存模块",
    desc: "轻松实现库存智能管理",
  },
  summary: {
    title: "库存模块帮您做什么",
    desc: "实时同步库存和订单数据，库存不足自动提醒，提升订单处理效率。让仓库与销售采购协同，避免缺货和积压。",
  },
  visualFlow: visualFlow,
  featureGridTitle: "核心功能",
  useCase: {
    title: "真实场景示例",
    desc: "销售完成 500 件订单后，库存立即扣减并发出补货提醒。采购订单自动生成，货到后同步更新库存和财务，完全无需手工表格操作。",
  },
  benefitListTitle: "库存优化优势",
  features: features,
  benefits:
    "库存实时可见||" +
    "提升仓储效率，减少错误||" +
    "支持多仓库与批次管理||" +
    "深度集成销售采购流程||" +
    "提供历史数据，优化补货策略",
};
