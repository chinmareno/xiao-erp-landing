import Link from "next/link";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Button } from "@/components/ui/button";
import { getI18n } from "@/public/locales/i18n/server";

export const DesktopNavbar = async () => {
  const t = await getI18n();
  const appUrl = process.env.APP_URL!;

  return (
    <nav className="border-b bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between py-3.5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold"> {t("logo")}</span>
        </Link>

        <div className="hidden items-center gap-2 sm:flex">
          <Button asChild className="capitalize" variant="ghost">
            <Link href={`${appUrl}/login`}>
              {t("landingPage.navbar.login")}
            </Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href={`${appUrl}/signup`}>
              {t("landingPage.navbar.signup")}
            </Link>
          </Button>
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};
