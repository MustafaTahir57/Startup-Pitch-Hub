import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("startup").title("Startups"),
    ]);


//     This file controls how the Sanity Studio sidebar looks — basically it's the navigation/menu of your CMS dashboard.
// Without it, Sanity auto-generates the sidebar. With it, you have full control over what appears and in what order.