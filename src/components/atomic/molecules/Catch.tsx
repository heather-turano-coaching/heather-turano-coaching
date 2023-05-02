/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AudiencefulForm } from "@htc/features/form";
import { makeRem } from "@htc/theme";
import { FC } from "react";
import styled from "styled-components";
import { Typography } from "../display";
import { Button, Input } from "../inputs";

const SCatch = styled("div")`
  display: grid;
  padding: ${makeRem(32)};
  min-height: 80vh;

  & > * {
    place-self: center;
    max-width: 50ch;
    text-align: center;
  }

  img {
    max-width: ${makeRem(200)};
    height: auto;
    margin-bottom: ${makeRem(32)};
  }
`;

export const Catch: FC<{
  children: string;
  signUpCopy?: string;
  imgSrc: string;
  imgAlt: string;
}> = ({ children, signUpCopy, imgSrc, imgAlt }) => {
  return (
    <SCatch>
      <div>
        <img src={imgSrc} alt={imgAlt} />
        <Typography variant="paragraph" fontSize={"h5"}>
          {children}
        </Typography>
        {!!signUpCopy && (
          <>
            <Typography
              variant="paragraph"
              style={{
                margin: `${makeRem(16)} 0`
              }}
            >
              {signUpCopy}
            </Typography>
            <AudiencefulForm
              action="https://app.audienceful.com/api/emails/subscribe/EvQNzrAoyP3dAjf55xvKBX?t=695"
              style={{
                marginTop: makeRem(32)
              }}
            >
              <Input
                label="Email Address"
                type="text"
                name="email"
                id="email"
                placeholder="youremail@yourdomain.com"
                required
                style={{
                  marginBottom: makeRem(16)
                }}
              />
              <Button
                type="submit"
                label="Subscribe!"
                styleType="secondary"
                style={{
                  width: "100%"
                }}
              />
            </AudiencefulForm>
          </>
        )}
      </div>
    </SCatch>
  );
};
