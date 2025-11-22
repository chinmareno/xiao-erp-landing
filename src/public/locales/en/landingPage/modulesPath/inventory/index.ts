import { features } from "./features";
import { visualFlow } from "./visualFlow";

export const inventory = {
  header: {
    title: "Inventory Module",
    desc: "Manage stock effortlessly with automation and accuracy",
  },
  summary: {
    title: "What Our Inventory Module Does",
    desc: "The Inventory Module keeps your warehouse in sync with your sales and purchasing teams. With real-time updates, low-stock alerts, and a clear overview of your items, you can confidently fulfill orders without worrying about stock discrepancies.",
  },
  visualFlow: visualFlow,
  featureGridTitle: "Key Inventory Features",
  useCase: {
    title: "Real-World Example",
    desc: "Imagine your sales team finalizes a bulk order of 500 units. Instantly, the Inventory Module updates stock levels and flags a low-stock warning. Meanwhile, a purchase order is auto-generated for the procurement team, who can then confirm restocking with one click. As items arrive and are logged in, stock levels sync across sales and accounting — all without spreadsheets or manual entries. That’s automation working where it matters most.",
  },
  benefitListTitle: "Why Inventory Management Matters",
  features: features,
  benefits:
    "Prevents stockouts and overstock with real-time insights||" +
    "Improves warehouse efficiency and reduces picking errors||" +
    "Supports multi-location inventory and batch tracking||" +
    "Integrates with sales and purchasing for seamless updates||" +
    "Provides historical data for smarter reordering decisions",
};
