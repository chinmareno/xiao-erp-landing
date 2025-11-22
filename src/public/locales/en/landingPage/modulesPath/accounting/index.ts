import { features } from "./features";
import { visualFlow } from "./visualFlow";

export const accounting = {
  header: {
    title: "Accounting Module",
    desc: "Streamline your financial operations with intelligent automation",
  },
  summary: {
    title: "What Our Accounting Module Does",
    desc: "Our Accounting Module automates bookkeeping, invoicing, and financial reporting so you can focus on growing your business. By seamlessly integrating with your sales, inventory, and operations data, it eliminates manual data entry while ensuring 100% accuracy in your financial records. From transaction recording to tax compliance, everything happens automatically in the background.",
  },
  visualFlow: visualFlow,
  featureGridTitle: "Key Accounting Features",
  useCase: {
    title: "Real-World Example",
    desc: "Imagine your sales team closes a $15,000 deal. As soon as they hit 'confirm' in the Sales Module, an invoice is automatically created and sent to the customer. Behind the scenes, the Accounting Module logs the transaction, applies the correct tax rules, and updates your receivables. Once payment is received, it’s matched to the invoice and reflected instantly in your cash flow. At month-end, your financial reports already include this transaction — no manual work required. That’s how true integration saves time and eliminates errors.",
  },
  benefitListTitle: "Transform Your Financial Operations",
  features: features,
  benefits:
    "Eliminates manual data entry and reduces human error||" +
    "Maintains audit-ready bookkeeping with complete transaction trails||" +
    "Real-time synchronization with sales and inventory modules||" +
    "Ensures local tax compliance with automatic updates||" +
    "One-click report export to Excel, PDF, or accounting software",
};
