import {
  Heading,
  Section,
  Typography
} from "@heather-turano-coaching/core/components";
import { SEO } from "@heather-turano-coaching/gatsby";
import React from "react";
import styled from "styled-components";

import { Layout } from "../components";

const StyledSectionContainer = styled.div`
  height: 100%;

  & > * {
    height: 100%;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO pageTitle="Payment Successful!" />
      <StyledSectionContainer>
        <Section styleType="blank">
          <Heading fontSize="h1" fontFamily="Playfair Display">
            Great! Your payment was successfully processed.
          </Heading>
          <br />
          <Typography variant="label" fontSize="sm">
            You'll be receiving an email with a copy of your reciept. Please
            keep it and print it for your own personal records.
          </Typography>
          <br />
          <Typography variant="label" fontSize="sm">
            Next, please click on the below link to schedule your session(s)
          </Typography>
          <br />
          <div
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://heather-turano-website-purchase.youcanbook.me/?noframe=true&skipHeaderFooter=true" id="ycbmiframeheather-turano-website-purchase" style="width:100%;height:1000px;border:0px;background-color:transparent;" frameborder="0" allowtransparency="true"></iframe><script>window.addEventListener && window.addEventListener("message", function(event){if (event.origin === "https://heather-turano-website-purchase.youcanbook.me"){document.getElementById("ycbmiframeheather-turano-website-purchase").style.height = event.data + "px";}}, false);</script>`
            }}
          ></div>
        </Section>
      </StyledSectionContainer>
    </Layout>
  );
};

export default IndexPage;
