import {
  Image,
  Section,
  Title,
  makeFlex
} from "@heather-turano-coaching/components";
import { makeOutset } from "@heather-turano-coaching/design-system";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC, useMemo } from "react";
import styled from "styled-components";

const StyledCertSection = styled.div`
  ${makeFlex("row", "center", "center")};

  & > div {
    &:not(:last-child) {
      ${makeOutset({ right: 20 })};
    }
  }
`;

export const AboutCertifications: FC = () => {
  const { contentfulPageAbout: queryData } = useStaticQuery(graphql`
    {
      contentfulPageAbout {
        certificationsTitle
        certificationsListOfCertifications {
          certificationTitle
          sealImage {
            file {
              url
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <Section styleType="blank">
        <Title size="lg">{queryData.certificationsTitle}</Title>
        <StyledCertSection>
          {queryData.certificationsListOfCertifications.map((cert: any) => (
            <Image
              src={cert.sealImage.file.url}
              alt={cert.certificationTitle}
              size={{ custom: 100 }}
              key={cert.certificationTitle}
            />
          ))}
        </StyledCertSection>
      </Section>
    </>
  );
};
