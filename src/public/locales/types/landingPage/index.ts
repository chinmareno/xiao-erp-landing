import type { Company, Footer, Navbar, Support } from "./layout";
import type { ModulesPath } from "./modulesPath";
import type { RootPath } from "./rootPath";

export type LandingPage = {
  navbar: Navbar;
  footer: Footer;
  support: Support;
  company: Company;
  allRightReserved: string;
  availableIn: string;
  rootPath: RootPath;
  modulesPath: ModulesPath;
};
