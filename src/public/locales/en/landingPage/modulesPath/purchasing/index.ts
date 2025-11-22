import { features } from "./features";
import { visualFlow } from "./visualFlow";

export const purchasing = {
  header: {
    title: "Purchasing Module",
    desc: "Gain control and visibility over every business purchase",
  },
  summary: {
    title: "Streamline All Procurement Activities",
    desc: "The Purchasing Module ensures that every purchase made is tracked, approved, and reconciled with your accounting system. From purchase requests to vendor evaluation and goods receipt, your team can eliminate delays, minimize errors, and optimize cash flow.",
  },
  visualFlow: visualFlow,
  featureGridTitle: "Key Capabilities for Efficient Procurement",
  useCase: {
    title: "Real Example: PR to PO to Payment",
    desc: "A department requests 200 office chairs. The PR is auto-routed to the procurement manager, who compares vendor quotes. After approval, a PO is issued. When the goods arrive, they're marked as received in Inventory, and the invoice is matched automatically by the Accounting Module — all tracked in one place.",
  },
  benefitListTitle: "Bring Clarity and Control to Your Spending",
  features: features,
  benefits:
    "Reduces unauthorized or duplicate purchases||" +
    "Centralizes procurement data and vendor history||" +
    "Auto-updates inventory and accounting records||" +
    "Improves negotiation with vendor performance tracking||" +
    "Ensures audit-compliant purchasing workflows",
};
