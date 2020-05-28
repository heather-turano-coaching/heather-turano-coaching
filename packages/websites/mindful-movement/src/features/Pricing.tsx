import {
  Button,
  Heading,
  Section,
  Typography,
} from "@heather-turano-coaching/components";
import { FC } from "react";
import React from "react";

export const Pricing: FC = () => (
  <Section styleType="blank">
    <div id="#about"></div>
    <Heading fontSize="h1" fontFamily="Playfair Display">
      Pricing
    </Heading>
    <br />
    <Typography variant="label" fontSize="md">
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec
      sed odio dui. Curabitur blandit tempus porttitor. Cras justo odio, dapibus
      ac facilisis in, egestas eget quam.
    </Typography>
    <Button label="test stripe" />
  </Section>
);
