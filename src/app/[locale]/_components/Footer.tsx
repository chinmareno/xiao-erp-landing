import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { getScopedI18n } from "@/public/locales/i18n/server";

export const Footer = async () => {
  const scopedT = await getScopedI18n("landingPage.footer");

  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid md:grid-cols-4">
          <div>
            <h3 className="text-foreground mb-4 text-lg font-semibold">
              {scopedT("xiaoErp.title")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {scopedT("xiaoErp.desc")}
            </p>
          </div>

          <div>
            <h4 className="text-foreground mb-4 font-semibold">
              {scopedT("modules.title")}
            </h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <Link
                  href="/modules/accounting"
                  className="hover:text-primary transition-colors"
                >
                  {scopedT("modules.accounting")}
                </Link>
              </li>
              <li>
                <Link
                  href="/modules/inventory"
                  className="hover:text-primary transition-colors"
                >
                  {scopedT("modules.inventory")}
                </Link>
              </li>
              <li>
                <Link
                  href="/modules/purchasing"
                  className="hover:text-primary transition-colors"
                >
                  {scopedT("modules.purchasing")}
                </Link>
              </li>
              <li>
                <Link
                  href="/modules/sales"
                  className="hover:text-primary transition-colors"
                >
                  {scopedT("modules.sales")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground mb-4 font-semibold">
              {scopedT("support.title")}
            </h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {scopedT("support.documentation")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {scopedT("support.help")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {scopedT("support.contactUs")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground mb-4 font-semibold">
              {scopedT("company.title")}
            </h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {scopedT("company.aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {scopedT("company.pricing")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {scopedT("company.privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {scopedT("company.termsOfService")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="text-muted-foreground flex flex-col items-center justify-between text-center text-sm md:flex-row">
          <p>&copy; 2024 XiaoERP. {scopedT("allRightReserved")}</p>
          <p className="mt-2 md:mt-0">
            {scopedT("availableIn")} English, 中文, & Bahasa Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};
