import { Tag } from "@tryghost/content-api";

export const featuredCategoryDelimiter = "__FEATURE__";

export const getFeaturedCategories = (categories: Tag[]) =>
  categories
    .filter(category =>
      (category.description || "").includes(featuredCategoryDelimiter)
    )
    .map(category => ({
      ...category,
      description: (category.description as string).split(
        featuredCategoryDelimiter
      )[1]
    }));
