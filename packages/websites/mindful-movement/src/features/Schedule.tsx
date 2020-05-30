import {
  ContentfulRichText,
  FormContainer,
  Heading,
  Section,
  Select,
} from "@heather-turano-coaching/components";
import { makeOutset } from "@heather-turano-coaching/design-system";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC, useCallback, useMemo, useState } from "react";
import styled from "styled-components";

type Coach = {
  id: string;
  name: string;
  youCanBookMeEmbeddedLink?: { youCanBookMeEmbeddedLink: string };
};

const StyledFormContainer = styled.div`
  ${makeOutset({ vertical: "xs" })};
`;

export const Schedule: FC = () => {
  const { contentfulPageHome: data } = useStaticQuery<{
    contentfulPageHome: {
      scheduleTitle: string;
      scheduleDescription: { json: string };
      coaches: Coach[];
    };
  }>(graphql`
    {
      contentfulPageHome {
        scheduleTitle
        scheduleDescription {
          json
        }
        coaches {
          id
          name
          youCanBookMeEmbeddedLink {
            youCanBookMeEmbeddedLink
          }
        }
      }
    }
  `);
  const [activeCoach, setActiveCoach] = useState<Coach>();
  console.log(data);

  const handleChange = useCallback(
    ({ target: { value } }) => {
      const coach = data.coaches.reduce<Coach | undefined>((accum, coach) => {
        if (coach.id === value) return coach;
        return accum;
      }, undefined);
      setActiveCoach(coach);
    },
    [setActiveCoach, data.coaches]
  );

  return (
    <Section styleType="layered">
      {useMemo(
        () => (
          <>
            <Heading fontSize="h1" fontFamily="Playfair Display">
              {data.scheduleTitle}
            </Heading>
            <br />
            <ContentfulRichText
              copyProps={{ variant: "paragraph", fontSize: "md" }}
              richText={data.scheduleDescription.json}
            />
          </>
        ),
        [data.scheduleTitle, data.scheduleDescription]
      )}
      <StyledFormContainer>
        <FormContainer>
          <Select id="select-coach" name="select-coach" onChange={handleChange}>
            <option value="" disabled selected>
              Select a coach
            </option>
            {useMemo(
              () =>
                data.coaches.map((coach: Coach) => (
                  <option key={coach.id} value={coach.id}>
                    {coach.name}
                  </option>
                )),
              [data.coaches]
            )}
          </Select>
        </FormContainer>
      </StyledFormContainer>
      {activeCoach && activeCoach.youCanBookMeEmbeddedLink && (
        <div
          dangerouslySetInnerHTML={{
            __html:
              activeCoach.youCanBookMeEmbeddedLink.youCanBookMeEmbeddedLink,
          }}
        />
      )}
    </Section>
  );
};
