import Link from "next/link";
import React, { FC } from "react";
import { css } from "styled-components";

import { DocsPageProps } from "../docs-page";

export const LayoutRoot: FC<Pick<DocsPageProps, "nav">> = ({
  nav,
  children
}) => (
  <div
    css={css`
      display: flex;
    `}
  >
    <ul>
      {Object.entries(nav).map(([key, value]) => {
        return (
          <li key={key}>
            <div>
              <Link href={`/${value[0].path.join("/")}`}>{key}</Link>
            </div>
            <ul>
              {value.map((item) => (
                <li key={item.path.join("/")}>
                  <Link href={`/${item.path.join("/")}`}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
    {children}
  </div>
);
