"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import XiaoErpLogo from "@/components/XiaoErpLogo";
import {
  useChangeLocale,
  useCurrentLocale,
  useI18n,
} from "@/app/public/locales/client";
import { Globe, Menu, X } from "lucide-react";

export const MobileNavbar = () => {
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const [isOpen, setIsOpen] = useState(false);
  const languages = [
    { code: "en", name: "English" },
    { code: "zh", name: "中文" },
    { code: "id", name: "Bahasa Indonesia" },
  ] as const;

  return (
    <nav className="border-b bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between py-3.5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <XiaoErpLogo />
        </Link>

        {/* Hamburger Menu*/}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-200 focus:outline-none sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu */}
      {isOpen && (
        <div className="mt-2 flex flex-col items-start gap-4 rounded-lg bg-white p-4 shadow-md sm:hidden">
          <Button
            asChild
            className="w-full justify-start capitalize"
            variant="ghost"
          >
            <Link href="/login">{t("landingPage.navbar.login")}</Link>
          </Button>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 w-full justify-start"
          >
            <Link href="/signup">{t("landingPage.navbar.signup")}</Link>
          </Button>

          <div className="flex w-full flex-col border-t-2 pt-2">
            <Globe className="mb-1.5 w-full" size={19} />
            {languages.map((language, i) => (
              <div className="flex w-full items-center justify-center text-blue-600">
                <Button
                  key={i}
                  onClick={() => changeLocale(language.code)}
                  variant="ghost"
                  className={
                    "" +
                    (locale === language.code ? " font-bold underline" : "")
                  }
                >
                  {language.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
