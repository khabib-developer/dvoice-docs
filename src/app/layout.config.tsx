import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { i18n } from "@/lib/i18n";

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: "Dvoice",
      url: `/${locale}`,
    },
    // githubUrl: "https://github.com",
    // links: [
    //   {
    //     type: "main",
    //     text: locale === "cn" ? "文檔" : "Documentation",
    //     url: `/${locale}/docs`,
    //   },
    // ],
  };
}
