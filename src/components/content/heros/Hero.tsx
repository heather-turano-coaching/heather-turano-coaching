import { IHeroFields } from "@htc/lib/contentful";
import { FC, FunctionComponent } from "react";

import { HeroProps } from "./HeroContainer";
import { HeroOffsetHorizontal } from "./HeroOffsetHorizontal";
import { HeroOffsetVertical } from "./HeroOffsetVertical";
import { HeroPlain } from "./HeroPlain";
import { HeroSplitHorizontal } from "./HeroSplitHorizontal";

const heroComponentMap: {
  [key in IHeroFields["type"]]: FunctionComponent<HeroProps>;
} = {
  plain: HeroPlain,
  "offset-vertical": HeroOffsetVertical,
  "offset-horizontal": HeroOffsetHorizontal,
  "split-horizontal": HeroSplitHorizontal
};

export const Hero: FC<IHeroFields & { hideGradient?: boolean }> = ({
  type,
  children,
  systemId,
  image,
  ...restProps
}) => {
  const HeroComponent = heroComponentMap[type];
  return (
    <HeroComponent
      {...restProps}
      image={image?.fields?.file?.url}
      imageAlt={image?.fields?.file?.fileName}
    />
  );
};
