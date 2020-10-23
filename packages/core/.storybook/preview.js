import { addDecorator } from "@storybook/react";
import React from "react";

import { HTCTheme, makeTheme } from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
};

const theme = makeTheme();

addDecorator((Story, context) => (
  <HTCTheme appTheme={theme}>
    <Story {...context} />
  </HTCTheme>
));
