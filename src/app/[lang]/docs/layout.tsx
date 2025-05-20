import type { ReactNode } from "react";
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import LanguageChanger from "@/components/languageChanger";

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
      sidebar={{ footer: <LanguageChanger /> }}
      tree={source.pageTree[lang]}
    >
      {children}
    </DocsLayout>
  );
}
