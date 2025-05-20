"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

export default function LanguageChanger() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const currentLocale = pathname.split("/")[1]; // Extract the current locale from the pathname
  const languages = [
    { code: "en", name: "English" },
    { code: "ru", name: "Русский" },
    { code: "uz", name: "O‘zbekcha" },
  ];

  const handleLanguageChange = (newLocale: string) => {
    // Replace the locale in the current pathname
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    startTransition(() => {
      router.push(newPathname);
    });
  };

  return (
    <div style={{ position: "absolute", bottom: "10px" }} className="l">
      <select
        value={currentLocale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        disabled={isPending}
        className="border rounded-md outline-none p-1 bg-gray-800 text-white"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
