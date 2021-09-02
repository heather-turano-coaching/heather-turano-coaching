import Link from "next/link";
import React, { FC } from "react";
import { css } from "styled-components";

import { DocsPageProps } from "../docs-page";

const headerHeight = 100;
const navWidth = 260;
const titleHeight = 72;

export const LayoutRoot: FC<DocsPageProps> = ({ nav, doc, children }) => (
  <div
    css={css`
      display: grid;
      grid-template: "nav main";

      width: 100%;
      height: 100%;
      overflow: hidden;

      ${({ theme }) => css`
        grid-template-columns: ${`minmax(0, ${theme.size.makeRem(
          navWidth
        )}) auto`};
      `}
    `}
  >
    <article
      css={css`
        grid-area: nav;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: ${({ theme }) => theme.size.makeRem(headerHeight)};
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <img
          src="/logo-stacked.png"
          alt="logo-stacked"
          css={css`
            height: 60%;
          `}
        />
      </div>
      <nav>
        <ul
          css={css`
            ${({ theme }) => css`
              border-top: 1px solid ${theme.palette.light.main};
            `}
          `}
        >
          {Object.entries(nav).map(([key, value]) => {
            return (
              <li
                key={key}
                css={css`
                  ${({ theme }) => css`
                    border-bottom: 1px solid ${theme.palette.light.main};
                  `}
                `}
              >
                <div
                  css={css`
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    ${({ theme }) => css`
                      min-height: ${theme.size.makeRem(40)};
                      padding-left: ${theme.size.makeRem(24)};
                    `}
                  `}
                >
                  <Link href={`/${value[0].path.join("/")}`}>{key}</Link>
                </div>
                <ul>
                  {value.map((item, i) => (
                    <li
                      key={`${item.path.join("/")}_${i}`}
                      css={css`
                        ${({ theme }) => css`
                          padding-left: ${theme.size.makeRem(44)};
                          min-height: ${theme.size.makeRem(40)};
                          display: flex;
                          align-items: center;
                          justify-content: flex-start;
                        `}
                      `}
                    >
                      <Link href={`/${item.path.join("/")}`}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </article>

    <section
      css={css`
        grid-area: main;
        height: 100%;
        ${({ theme }) => css`
          padding-top: 0;
          position: relative;
          background: ${theme.palette.light.light};
          grid-template-rows: ${`minmax(0, ${theme.size.makeRem(
            headerHeight
          )}) 1fr`};
        `}
      `}
    >
      <div
        css={css`
          height: 100%;
          width: 100%;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
        `}
      >
        <header
          css={css`
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            left: 0;
            right: 0;
            top: 0;
            ${({ theme }) => css`
              background: ${({ theme }) => theme.palette.primary.dark};
              padding: ${theme.size.makeRem(16)} ${theme.size.makeRem(32)};
              height: ${theme.size.makeRem(headerHeight)};

              &::after {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                top: 100%;
                z-index: 100;
                height: ${theme.size.makeRem(titleHeight)};
                background: ${theme.palette.primary.dark};
              }
            `}
          `}
        >
          <span
            css={css`
              ${({ theme }) => css`
                color: ${theme.palette.primary.contrast};
                margin-bottom: ${theme.size.makeRem(8)};
              `}
            `}
          >
            {doc.data.path[0]}
          </span>
        </header>
      </div>
      <div
        css={css`
          height: 100%;
          width: 100%;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          overflow-y: auto;
        `}
      >
        <div
          css={css`
            ${({ theme }) => css`
              position: relative;
              z-index: 100;
              background: ${theme.palette.common.white};
              border-radius: ${theme.size.makeRem(4)};
              min-height: 100%;
              margin-top: ${theme.size.makeRem(headerHeight)};
              margin-bottom: ${theme.size.makeRem(32)};
              width: ${`calc(100% - ${theme.size.makeRem(32 * 2)})`};
              margin-left: auto;
              margin-right: auto;
            `}
          `}
        >
          <header
            css={css`
              ${({ theme }) => css`
                height: ${theme.size.makeRem(titleHeight)};
                border-bottom: 1px solid ${theme.palette.light.main};
                display: flex;
                align-items: center;
                padding: 0 ${theme.size.makeRem(32)};
              `}
            `}
          >
            <h2>{doc.data.title}</h2>
          </header>
          <article
            css={css`
              ${({ theme }) => css`
                padding: ${theme.size.makeRem(16)} ${theme.size.makeRem(32)};
              `}
            `}
          >
            {children}
          </article>
        </div>
      </div>
    </section>
  </div>
);
