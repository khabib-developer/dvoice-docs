import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { i18n } from "./i18n";
import { icons } from "lucide-react";
import { createElement } from "react";
import { attachFile } from "fumadocs-openapi/server";

export const source = loader({
  // it assigns a URL to your pages
  i18n,
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons]);
  },
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  pageTree: {},
});
