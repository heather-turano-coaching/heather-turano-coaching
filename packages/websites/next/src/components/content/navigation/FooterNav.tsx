import {
  Footer,
  FooterSection,
  FooterText
} from "@heather-turano-coaching/core/components";
import { makeColor } from "@heather-turano-coaching/core/design-system";
import { AweberForm } from "components/atomic";
import React, { FC } from "react";
import { css } from "styled-components";

import { formString } from "./footer.form";

export const FooterNav: FC = () => (
  <Footer>
    <FooterSection title="Heather Turano Coaching, LLC">
      <FooterText>
        <span>
          Copyright © 2018, Heather Turano Coaching, LLC, All Rights Reserved.
          Live Life Mindful is a trademark of Heather Turano Coaching, LLC. The
          use of the trademark Live Life Mindful outside the bounds of this
          website requires exclusive written consent from Heather Turano
          Coaching, LLC.
        </span>
      </FooterText>
      <FooterText>
        <span>This website was designed and developed by &nbsp;</span>
        <div>
          <a
            href="https://github.com/drewdecarme"
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              display: inline-block;
              text-decoration-color: ${makeColor({ fixed: "light" })};
              color: ${makeColor({ fixed: "light" })};
            `}
          >
            Imagined Elements, LLC
          </a>
        </div>
      </FooterText>
    </FooterSection>
    <FooterSection title="Privacy &amp; Security">
      <FooterText>
        Heather Turano Coaching takes your privacy very seriously. Use the links
        below to learn more about our policies
      </FooterText>
      <ul>
        {/* {disclosurePages.map((page) => (
          <li key={page.frontmatter.slug}>
            <FooterText>
              <FrameworkLink to={page.frontmatter.slug}>
                {page.frontmatter.title}
              </FrameworkLink>
            </FooterText>
          </li>
        ))} */}
      </ul>
    </FooterSection>
    <FooterSection title="Subscribe">
      <div
        css={css`
          label {
            display: none !important;
          }
        `}
      >
        <AweberForm formScript={formString} />
      </div>
    </FooterSection>
  </Footer>
);
