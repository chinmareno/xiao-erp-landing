"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Check, Globe } from "lucide-react";
import { Button } from "./ui/button";
import {
  useChangeLocale,
  useCurrentLocale,
} from "@/public/locales/i18n/client";

export type LanguageLocale = "en" | "zh" | "id";

type Props = {
  align?: "start" | "center" | "end";
};

export const LanguageSelector = ({ align = "start" }: Props) => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const languages = [
    { code: "en", name: "English" },
    { code: "zh", name: "中文" },
    { code: "id", name: "Bahasa Indonesia" },
  ] as const;

  return (
    <Menubar className="w-full border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger asChild>
          <Button className="w-full gap-2 rounded-full border-none bg-transparent text-black shadow-none hover:cursor-pointer hover:bg-zinc-200">
            <Globe />
          </Button>
        </MenubarTrigger>
        <MenubarContent hideWhenDetached align={align}>
          {languages.map((language, index) => (
            <div key={language.code + index}>
              <MenubarItem
                key={language.code + index}
                className="hover:cursor-pointer"
                onClick={() => {
                  changeLocale(language.code);
                }}
              >
                {
                  void (locale === language.code ? (
                    <Check className="h-4 w-4 text-blue-600" />
                  ) : (
                    <span className="h-4 w-4" />
                  ))
                }
                {language.name}
              </MenubarItem>
              <MenubarSeparator className="last:hidden" />
            </div>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
