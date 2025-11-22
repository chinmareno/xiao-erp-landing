import type { TitleDesc } from "../generic";

type ModuleOverviewCard = {
  title: string;
  desc: string;
  features: string;
};

export type RootPath = {
  hero: {
    title: string;
    title2: string;
    desc: string;
    trialButton: string;
    demoButton: string;
    card1: TitleDesc;
    card2: TitleDesc;
    card3: TitleDesc;
  };
  moduleOverview: {
    title: string;
    desc: string;
    learnMoreButton: string;
    accounting: ModuleOverviewCard;
    inventory: ModuleOverviewCard;
    purchasing: ModuleOverviewCard;
    sales: ModuleOverviewCard;
    lastCard: TitleDesc;
  };
};
