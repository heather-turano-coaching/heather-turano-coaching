import { Tag } from "@tryghost/content-api";

export const categoryDelimiter = "category-";

export const getCategoriesFromTags = (tags: Tag[]): Tag[] =>
  tags.reduce<Tag[]>((accum, tag) => {
    if (tag.name?.includes(categoryDelimiter)) {
      return [
        ...accum,
        {
          ...tag,
          name: tag.name.split("-")[1]
        }
      ];
    }
    return accum;
  }, []);
