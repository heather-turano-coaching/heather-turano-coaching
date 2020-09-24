import {} from "pages/contact";

import { HeroOffsetHorizontal } from "components/content/heros";
import { IPageContact } from "lib/contentful";
import { FC } from "react";

export const PageContact: FC<IPageContact> = ({ fields }) => (
  <>
    <HeroOffsetHorizontal
      title={fields.title}
      subTitle={fields.heroDescription}
      img={fields.heroImage.fields.file.url}
      imgAlt={fields.heroImageAlt}
    />
  </>
);
