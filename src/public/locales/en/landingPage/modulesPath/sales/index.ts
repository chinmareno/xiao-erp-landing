import { features } from "./features";
import { visualFlow } from "./visualFlow";

export const sales = {
  header: {
    title: "Sales Module",
    desc: "Manage the entire sales lifecycle from lead to revenue—intuitively and efficiently",
  },
  summary: {
    title: "What Our Sales Module Delivers",
    desc: "The Sales Module simplifies everything from lead generation and quote creation to final delivery and invoicing. By automating key touchpoints and integrating tightly with inventory and accounting, it eliminates redundant processes and lets your team focus on closing deals faster.",
  },
  visualFlow,
  featureGridTitle: "Core Features That Drive Sales",
  useCase: {
    title: "See It Live: Closing Deals, Effortlessly",
    desc: "A new customer inquires through your CRM. Within minutes, your sales rep creates a tailored quote and emails it with a single click. The customer accepts, and the system converts it to a Sales Order. Inventory updates in real-time, the invoice is auto-generated, and your Accounting Module logs the revenue. Zero delays. Just streamlined selling.",
  },
  benefitListTitle: "Benefits You Can Count On",
  features,
  benefits:
    "Accelerates the sales cycle with automation||" +
    "Reduces manual errors in quotes and invoices||" +
    "Provides visibility into lead-to-cash pipeline||" +
    "Integrates seamlessly with Inventory and Accounting||" +
    "Improves customer satisfaction with timely follow-ups",
};
