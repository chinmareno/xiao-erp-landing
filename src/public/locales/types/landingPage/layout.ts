import type { TitleDesc } from "../generic";

export type Navbar = {
  login: string;
  signup: string;
};

export type Footer = {
  xiaoErp: TitleDesc;
  modules: {
    title: string;
    accounting: string;
    inventory: string;
    purchasing: string;
    sales: string;
  };
  support: {
    title: string;
    documentation: string;
    help: string;
    contactUs: string;
  };
  company: {
    title: string;
    aboutUs: string;
    pricing: string;
    privacyPolicy: string;
    termsOfService: string;
  };
  allRightReserved: string;
  availableIn: string;
};

export type Support = {
  title: string;
  documentation: string;
  help: string;
  contactUs: string;
};

export type Company = {
  title: string;
  aboutUs: string;
  pricing: string;
  privacyPolicy: string;
  termsOfService: string;
};
