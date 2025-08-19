import defaultMdxComponents from "fumadocs-ui/mdx";
import * as FilesComponents from "fumadocs-ui/components/files";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import type { MDXComponents } from "mdx/types";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import * as icons from "lucide-react";
import { APIPage } from "fumadocs-openapi/ui";
import defaultComponents from "fumadocs-ui/mdx";
import { openapi } from "./lib/openapi";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    APIPage: (props: any) => <APIPage {...openapi.getAPIPageProps(props)} />,
    ...components,
  };
}
