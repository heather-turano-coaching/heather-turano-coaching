import React from "react";

import { Baseline } from "../../development/Baseline";
import { Heading } from "./Heading";

export default {
  component: Heading,
  title: "Display|Heading",
};

export const heading = () => (
  <>
    <Heading>Heading default - H1</Heading>
    <Heading fontSize="h1">Heading H1 (xxl)</Heading>
    <Heading fontSize="h2">Heading H2 (xl)</Heading>
    <Heading fontSize="h3">Heading H3 (lg)</Heading>
    <Heading fontSize="h4">Heading H4 (md)</Heading>
    <Heading fontSize="h5">Heading H5 (sm)</Heading>
  </>
);
export const headingWithBaseline = () => (
  <>
    <Baseline />
    <Heading>Heading default - H1</Heading>
    <Heading fontSize="h1">Heading H1 (xxl)</Heading>
    <Heading fontSize="h2">Heading H2 (xl)</Heading>
    <Heading fontSize="h3">Heading H3 (lg)</Heading>
    <Heading fontSize="h4">Heading H4 (md)</Heading>
    <Heading fontSize="h5">Heading H5 (sm)</Heading>
  </>
);
