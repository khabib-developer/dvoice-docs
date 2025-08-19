import { generateFiles } from "fumadocs-openapi";
void generateFiles({
  input: ["./openapi.yaml"], // path(s) to spec(s)
  output: "./content/docs/en/api", // where to write MDX
  per: "operation", // or "tag" or "file"
  groupBy: "route", // makes folders by route
  frontmatter: (title, description) => ({ title, description }),
  addGeneratedComment: true,
});
