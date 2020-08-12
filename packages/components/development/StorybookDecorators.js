import React from "react";
import { FontFamily } from "./FontFamily";
export var addFont = function (storyFn) {
  return React.createElement(
    "div",
    null,
    React.createElement(FontFamily, null),
    storyFn()
  );
};
//# sourceMappingURL=StorybookDecorators.js.map
