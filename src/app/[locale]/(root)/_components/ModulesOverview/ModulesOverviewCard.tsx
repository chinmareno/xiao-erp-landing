import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getI18n } from "@/public/locales/i18n/server";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string;
  iconClassName: string;
  learnMoreHref: string;
};

export const ModulesOverviewCard = async ({
  iconClassName,
  icon,
  title,
  description,
  features,
  learnMoreHref,
}: Props) => {
  const featuresArray = features.split("||");
  const t = await getI18n();
  return (
    <Card className="group border-border flex pb-11 transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div
          className={`h-12 w-12 rounded-lg ${iconClassName} mb-4 flex items-center justify-center`}
        >
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="mb-6 space-y-2">
          {featuresArray.map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className="text-muted-foreground flex items-center text-sm"
            >
              <ArrowRight className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <Button
        asChild
        variant="outline"
        className="mt-auto w-11/12 self-center bg-black text-white transition-colors hover:cursor-pointer hover:bg-black/85 hover:text-white"
      >
        <Link href={learnMoreHref}>
          {t("landingPage.rootPath.moduleOverview.learnMoreButton")}
        </Link>
      </Button>
    </Card>
  );
};

export default ModulesOverviewCard;
