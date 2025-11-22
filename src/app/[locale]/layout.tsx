import type { ReactElement } from "react";
import { notFound } from "next/navigation";
import { I18nProviderClient } from "@/public/locales/i18n/client";
import { HideOnScrollWrapper } from "@/components/wrapper/HideOnScrollWrapper";
import { MobileNavbar } from "./_components/navbar/MobileNavbar";
import { DesktopNavbar } from "./_components/navbar/DesktopNavbar";
import { Footer } from "./_components/Footer";

const RootLayout = async ({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactElement;
}) => {
  const { locale } = await params;
  const availableLocale = ["en", "zh", "id"];

  if (!availableLocale.includes(locale)) {
    notFound();
  }

  return (
    <I18nProviderClient locale={locale}>
      <div className="bg-background text-text-primary">
        <div className="fixed z-50 block w-full sm:hidden">
          <MobileNavbar />
        </div>
        <div className="fixed z-50 hidden w-full sm:block">
          <HideOnScrollWrapper>
            <DesktopNavbar />
          </HideOnScrollWrapper>
        </div>
        <div className="bg-transparent pt-28">{children}</div>
        <Footer />
      </div>
    </I18nProviderClient>
  );
};

export default RootLayout;
