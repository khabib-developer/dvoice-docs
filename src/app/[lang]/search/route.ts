// app/api/search/route.ts
import { source } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";

export const { GET } = createFromSource(source, {
  localeMap: {
    // you can customise search configs for specific locales
    uz: {
      // use the English tokenizer
      "custom-locale": "english",
    },
  },
} as any);
