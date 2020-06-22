import React from "react";

import { Image } from "./Image";

const htcLogo = require("../../.storybook/assets/htc-logo-stacked.svg");
const logo = htcLogo.default;

export default {
  component: Image,
  title: "Display|Image",
};

export const base = () => <Image src={logo} alt="htcLogo" />;

export const preDefinedSizes = () => (
  <>
    <Image src={logo} alt="htcLogo" size="xxs" />
    <Image src={logo} alt="htcLogo" size="xs" />
    <Image src={logo} alt="htcLogo" size="sm" />
    <Image src={logo} alt="htcLogo" size="md" />
    <Image src={logo} alt="htcLogo" size="lg" />
    <Image src={logo} alt="htcLogo" size="xl" />
    <Image src={logo} alt="htcLogo" size="xxl" />
  </>
);
export const manualHeight = () => (
  <Image src={logo} alt="htcLogo" manualHeight={100} />
);
export const sizeProvidedOverridenByHeight = () => (
  <Image src={logo} alt="htcLogo" manualHeight={100} />
);
export const manualWidthProvided_heightAdustsAutomatically = () => (
  <Image src={logo} alt="htcLogo" manualWidth={100} />
);
export const manualHeightProvided_widthAdjustsAutomatically = () => (
  <Image src={logo} alt="htcLogo" manualHeight={400} />
);
export const widthAlwaysTaksPrecedenceOverHeight = () => (
  <Image src={logo} alt="htcLogo" manualHeight={500} manualWidth={100} />
);
export const manualWidthIs100PercentOf30PercentContainer = () => (
  <div
    style={{
      width: "500px",
      background: "lightblue",
      padding: 20,
    }}
  >
    <div
      style={{
        width: "30%",
        background: "white",
        padding: 20,
      }}
    >
      <Image src={logo} alt="htcLogo" manualWidth={400} />
    </div>
  </div>
);
