import React, { FC } from "react";

import { LinkCard } from "./LinkCard";
import { LinkCardImage } from "./LinkCardImage";
import { LinkCardLayout } from "./LinkCardLayout";
import { LinkCardOverline } from "./LinkCardOverline";
import { LinkCardSubTitle } from "./LinkCardSubTitle";
import { LinkCardTitle } from "./LinkCardTitle";

export type BlogLinkCardProps = {
  title: string;
  subTitle?: string;
  href: string;
  important?: boolean;
  overline: string;
  src: string;
  alt: string;
};

export const BlogLinkCard: FC<BlogLinkCardProps> = ({
  href,
  title,
  subTitle,
  important = false,
  src,
  alt,
  overline
}) => {
  return (
    <LinkCard href={href} important={important} flushLeft>
      <LinkCardLayout orientation="column">
        <LinkCardOverline important={important}>{overline}</LinkCardOverline>
      </LinkCardLayout>
      <LinkCardLayout orientation="row">
        <LinkCardImage src={src} alt={alt} />
        <div>
          <LinkCardTitle important={important}>{title}</LinkCardTitle>
          {subTitle && (
            <LinkCardSubTitle important={important}>
              {subTitle}
            </LinkCardSubTitle>
          )}
        </div>
      </LinkCardLayout>
    </LinkCard>
  );
};
