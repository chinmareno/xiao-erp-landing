import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getScopedI18n } from "@/public/locales/i18n/server";

const BackHomeButton = async () => {
  const scopedT = await getScopedI18n("landingPage.modulesPath");
  return (
    <div className="mt-8 text-center">
      <Button
        asChild
        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
      >
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
          <span>{scopedT("backHome")}</span>
        </Link>
      </Button>
    </div>
  );
};

export default BackHomeButton;
