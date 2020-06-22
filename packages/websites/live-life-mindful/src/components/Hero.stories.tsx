import React from "react";

import { Hero } from "./Hero";

import { Heading } from "../typography";
import { Section } from "../layouts";

const dandilion = require("../../.storybook/assets/dandilion.jpg");

export default {
  component: Hero,
  title: "Basic|Hero"
};

export const base = () => (
  <Hero image={dandilion} alt="versailles-dandilion">
    <Heading fontSize="h1">Title here</Heading>
  </Hero>
);
export const noContent = () => (
  <Hero image={dandilion} alt="versailles-dandilion" />
);
export const withWhiteBorder = () => (
  <Hero
    image={dandilion}
    alt="versailles-dandilion"
    borderColor={{ fixed: "light" }}
  >
    <Heading fontSize="h1">Title here</Heading>
  </Hero>
);
export const withGradient = () => (
  <Hero
    image={dandilion}
    alt="versailles-dandilion"
    borderColor={{ fixed: "light" }}
    gradient={{ scalable: { color: "secondary" } }}
  >
    <Heading fontSize="h1">Title here</Heading>
  </Hero>
);
export const withSection = () => (
  <Hero
    image={dandilion}
    alt="versailles-dandilion"
    borderColor={{ fixed: "light" }}
    gradient={{ scalable: { color: "secondary" } }}
  >
    <Section styleType="hero">
      <Heading fontSize="h1" fontColor={{ fixed: "light" }}>
        <div>Title Here</div>
      </Heading>
    </Section>
  </Hero>
);
