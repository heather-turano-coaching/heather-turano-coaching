import React, { FC } from "react";

import { LinkCard } from "./LinkCard";
import { LinkCardLayout } from "./LinkCardLayout";
import { LinkCardSubTitle } from "./LinkCardSubTitle";
import { LinkCardTitle } from "./LinkCardTitle";

export type BasicLinkCardProps = {
  title: string;
  subTitle?: string;
  href: string;
  important?: boolean;
};

export const BasicLinkCard: FC<BasicLinkCardProps> = ({
  href,
  title,
  subTitle,
  important = false
}) => {
  return (
    <LinkCard href={href} important={important}>
      <LinkCardLayout orientation="column">
        <LinkCardTitle important={important}> {title}</LinkCardTitle>
        {subTitle && (
          <LinkCardSubTitle important={important}>{subTitle}</LinkCardSubTitle>
        )}
      </LinkCardLayout>
    </LinkCard>
  );
};
