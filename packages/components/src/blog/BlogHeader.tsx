import React, { FC } from "react";

import { Heading, Icon, Copy } from "../typography";
import { Link } from "../buttons-links";

import "./BlogHeader.module.scss";

export interface BlogHeaderProps {
  title: string;
  description?: string;
  backLinkRoute: string;
  backLinkText: string;
  dateCreated: string;
  author: string;
}

export const BlogHeader: FC<BlogHeaderProps> = ({
  title,
  description,
  backLinkRoute,
  backLinkText,
  dateCreated,
  author
}) => (
  <header>
    <div styleName="page-header">
      <div styleName="link">
        <Link to={backLinkRoute}>
          <Icon
            icon="long-arrow-left"
            iconSize="md"
            iconColor={{ scalable: { color: "accent" } }}
          />
          <Copy
            type="label"
            fontSize="md"
            fontColor={{ scalable: { color: "accent" } }}
          >
            {backLinkText}
          </Copy>
        </Link>
      </div>
      <div styleName="date">
        <div>
          <Copy
            type="paragraph"
            fontSize="md"
            fontColor={{ scalable: { color: "gray" } }}
          >
            <span>{dateCreated}</span>
            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          </Copy>
        </div>
        <div>
          <Copy
            type="paragraph"
            fontSize="md"
            fontColor={{ scalable: { color: "secondary" } }}
          >
            <span>Written by {author}</span>
          </Copy>
        </div>
      </div>
      <Heading fontSize="h2">{title}</Heading>
      {description ? (
        <div styleName="description">
          <Copy type="paragraph" fontSize="xxl">
            {description}
          </Copy>
        </div>
      ) : null}
    </div>
  </header>
);