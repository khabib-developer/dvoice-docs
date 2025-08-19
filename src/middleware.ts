import { createI18nMiddleware } from "fumadocs-core/i18n";
import { i18n } from "@/lib/i18n";

export default createI18nMiddleware(i18n);

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    // the negative lookahead below excludes paths we don't want middleware to handle
    "/((?!api|_next/static|_next/image|favicon.ico|openapi.yaml|openapi.json|specs/).*)",
  ],
};
