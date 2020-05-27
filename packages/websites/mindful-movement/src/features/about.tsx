import {
  Heading,
  Section,
  Typography,
} from "@heather-turano-coaching/components";
import { FC } from "react";
import React from "react";

export const About: FC = () => (
  <Section
    styleType="blank"
    background={{ scalable: { color: "secondary", scale: 0 } }}
  >
    <div id="#about"></div>
    <Heading
      fontSize="h1"
      fontFamily="Playfair Display"
      fontColor={{ fixed: "light" }}
    >
      So what's it all about?
    </Heading>
    <br />
    <Typography variant="label" fontSize="md" fontColor={{ fixed: "light" }}>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec
      sed odio dui. Curabitur blandit tempus porttitor. Cras justo odio, dapibus
      ac facilisis in, egestas eget quam.
    </Typography>
  </Section>
);
