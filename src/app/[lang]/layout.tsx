import "../global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import LanguageChanger from "@/components/languageChanger";

const inter = Inter({
  subsets: ["latin"],
});

const locales = [
  {
    name: "English",
    locale: "en",
  },
  {
    name: "Uzbek",
    locale: "uz",
  },
  {
    name: "Russian",
    locale: "ru",
  },
];

const translations = {
  ru: {
    toc: "Оглавление",
    search: "Поиск",
    lastUpdate: "Последнее обновление",
    searchNoResult: "Результаты не найдены",
    previousPage: "Предыдущая страница",
    nextPage: "Следующая страница",
    chooseLanguage: "Выбрать язык",
  },
  uz: {
    toc: "Mundarija",
    search: "Qidirish",
    lastUpdate: "Oxirgi yangilanish",
    searchNoResult: "Hech qanday natija topilmadi",
    previousPage: "Oldingi sahifa",
    nextPage: "Keyingi sahifa",
    chooseLanguage: "Tilni tanlang",
  },
  en: {
    toc: "Table of Contents",
    search: "Search",
    lastUpdate: "Last update",
    searchNoResult: "No results found",
    previousPage: "Previous page",
    nextPage: "Next page",
    chooseLanguage: "Choose language",
  },
};

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body>
        <RootProvider
          i18n={{
            locale: lang,
            locales,
            translations: (translations as any)[lang],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
