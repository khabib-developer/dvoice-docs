import type { ReactNode } from "react";
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import LanguageChanger from "@/components/languageChanger";
import { baseOptions } from "@/app/layout.config";

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  return (
    <DocsLayout
      {...baseOptions(lang)}
      sidebar={{
        tabs: {
          transform(option, node) {
            return {
              ...option,
              props: {
                className:
                  "gap-4 px-3 py-2 [&_svg]:w-[16px] sidebar-select-option",
              },
            };
          },
        },
      }}
      tree={source.pageTree[lang]}
    >
      {children}
    </DocsLayout>
  );
}
