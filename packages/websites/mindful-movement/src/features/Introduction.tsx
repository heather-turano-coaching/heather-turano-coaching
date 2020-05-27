import {
  Heading,
  Section,
  Typography,
} from "@heather-turano-coaching/components";
import React, { FC } from "react";

export const Introduction: FC = () => (
  <Section styleType="blank">
    <div id="#about"></div>
    <Heading fontSize="h1" fontFamily="Playfair Display">
      Re-invent your relationship with exercise.
    </Heading>
    <br />
    <Typography variant="paragraph" fontSize="md">
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec
      sed odio dui. Curabitur blandit tempus porttitor. Cras justo odio, dapibus
      ac facilisis in, egestas eget quam.
    </Typography>
  </Section>
);
