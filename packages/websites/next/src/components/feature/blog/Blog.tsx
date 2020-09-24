import { HeroPlain } from "components/content/heros";
import { IPageBlog } from "lib/contentful";
import { FC } from "react";

export const PageBlog: FC<IPageBlog> = ({ fields }) => (
  <>
    <HeroPlain title={fields.heroTitle} subTitle={fields.heroSubtitle} />
  </>
);
