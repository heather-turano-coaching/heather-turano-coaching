import React from "react";

import { Avatar } from "./Avatar";

// @ts-ignore

const Moana = require("../../.storybook/assets/moana.jpg");

export default {
  component: Avatar,
  title: "Display|Avatar"
};

export const base = () => <Avatar image={Moana} alt="moana" />;
export const noImage = () => <Avatar alt="moana" />;
export const allSizes = () => (
  <>
    <Avatar image={Moana} alt="moana" size="h1" />
    <Avatar image={Moana} alt="moana" size="h2" />
    <Avatar image={Moana} alt="moana" size="h3" />
    <Avatar image={Moana} alt="moana" size="h4" />
    <Avatar image={Moana} alt="moana" size="h5" />
    <Avatar image={Moana} alt="moana" size="xxl" />
    <Avatar image={Moana} alt="moana" size="xl" />
    <Avatar image={Moana} alt="moana" size="lg" />
    <Avatar image={Moana} alt="moana" size="md" />
    <Avatar image={Moana} alt="moana" size="sm" />
    <Avatar image={Moana} alt="moana" size="xs" />
    <Avatar image={Moana} alt="moana" size="xxs" />
    <Avatar image={Moana} alt="moana" size={{ custom: 88 }} />
    <Avatar image={Moana} alt="moana" size={{ custom: 128 }} />
  </>
);
export const allSizesWithNoImage = () => (
  <>
    <Avatar alt="moana" size="h1" />
    <Avatar alt="moana" size="h2" />
    <Avatar alt="moana" size="h3" />
    <Avatar alt="moana" size="h4" />
    <Avatar alt="moana" size="h5" />
    <Avatar alt="moana" size="xxl" />
    <Avatar alt="moana" size="xl" />
    <Avatar alt="moana" size="lg" />
    <Avatar alt="moana" size="md" />
    <Avatar alt="moana" size="sm" />
    <Avatar alt="moana" size="xs" />
    <Avatar alt="moana" size="xxs" />
    <Avatar alt="moana" size={{ custom: 88 }} />
    <Avatar alt="moana" size={{ custom: 128 }} />
  </>
);
