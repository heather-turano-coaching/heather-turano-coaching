import { __makeTemplateObject } from "tslib";
import { sizeConfig } from "@heather-turano-coaching/design-system";
import { createGlobalStyle } from "styled-components";
export var Baseline = createGlobalStyle(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  :root{\n    --color: #7ec3f140;\n    --baseline: ",
        "px;\n    --background-baseline: repeating-linear-gradient(\n      to bottom,\n      var(--color),\n      var(--color) 1px,\n      transparent 1px,\n      transparent var(--baseline)\n    );\n  }\n\n  html {\n    font-size: 16px;\n  }\n  html,\n  body {\n    height: 100vh;\n    width: 100wh;\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    display: block;\n    background-image: var(--background-baseline);\n    background-size: var(--background-width) 100%;\n    background-position: 0 var(--baseline-offset);\n  }\n"
      ],
      [
        "\n  :root{\n    --color: #7ec3f140;\n    --baseline: ",
        "px;\n    --background-baseline: repeating-linear-gradient(\n      to bottom,\n      var(--color),\n      var(--color) 1px,\n      transparent 1px,\n      transparent var(--baseline)\n    );\n  }\n\n  html {\n    font-size: 16px;\n  }\n  html,\n  body {\n    height: 100vh;\n    width: 100wh;\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    display: block;\n    background-image: var(--background-baseline);\n    background-size: var(--background-width) 100%;\n    background-position: 0 var(--baseline-offset);\n  }\n"
      ]
    )),
  sizeConfig.baselineGrid
);
var templateObject_1;
//# sourceMappingURL=Baseline.js.map
