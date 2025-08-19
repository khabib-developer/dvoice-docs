import { createOpenAPI } from "fumadocs-openapi/server";
import path from "path";

const specPath = path.resolve(process.cwd(), "openapi.yaml");

export const openapi = createOpenAPI({
  input: [specPath],
  shikiOptions: {
    themes: {
      dark: "tokyo-night",
      light: "github-light",
    },
  },
});
