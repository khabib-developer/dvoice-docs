import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { i18n } from "@/lib/i18n";

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: "Dvoice",
      url: `/${locale}/docs/documentation/get-started/overview`,
      transparentMode: "top",
    },
  };
}
