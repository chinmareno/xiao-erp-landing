import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getScopedI18n } from "@/public/locales/i18n/server";

export const Hero = async () => {
  const scopedT = await getScopedI18n("landingPage.rootPath.hero");

  return (
    <section className="pb-20 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-foreground mb-6 text-center text-4xl leading-tight font-bold md:text-6xl">
            {scopedT("title")}
            <span className="text-primary mt-2 block">{scopedT("title2")}</span>
          </h1>

          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl leading-relaxed">
            {scopedT("desc")}
          </p>

          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 hover:cursor-pointer"
            >
              {scopedT("trialButton")}

              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 hover:cursor-pointer"
            >
              {scopedT("demoButton")}
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-card border-border flex flex-col items-center rounded-lg border p-6">
              <Shield className="text-primary mb-4 h-12 w-12" />
              <h3 className="mb-2 text-lg font-semibold">
                {scopedT("card1.title")}
              </h3>
              <p className="text-muted-foreground text-center">
                {scopedT("card1.desc")}
              </p>
            </div>

            <div className="bg-card border-border flex flex-col items-center rounded-lg border p-6">
              <Zap className="text-primary mb-4 h-12 w-12" />
              <h3 className="mb-2 text-lg font-semibold">
                {scopedT("card2.title")}
              </h3>
              <p className="text-muted-foreground text-center">
                {scopedT("card2.desc")}
              </p>
            </div>

            <div className="bg-card border-border flex flex-col items-center rounded-lg border p-6">
              <Users className="text-primary mb-4 h-12 w-12" />
              <h3 className="mb-2 text-lg font-semibold">
                {scopedT("card3.title")}
              </h3>
              <p className="text-muted-foreground text-center">
                {scopedT("card3.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
