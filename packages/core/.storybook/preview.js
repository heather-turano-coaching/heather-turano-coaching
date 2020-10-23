import { addDecorator } from "@storybook/react";
import React from "react";

import { HTCTheme } from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
};

addDecorator((Story, context) => (
  <HTCTheme>
    <Story {...context} />
  </HTCTheme>
));
