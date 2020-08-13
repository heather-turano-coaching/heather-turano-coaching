import { makeColor } from "@heather-turano-coaching/design-system";
import React from "react";

import { ColorPalette } from "./color";

export default {
  title: "Design System|Color",
  component: ColorPalette
};

export const Scalable = () => (
  <ColorPalette
    scalable={[
      [
        {
          color: makeColor({ scalable: { color: "primary", scale: 0 } }),
          name: "primary 0"
        },
        {
          color: makeColor({ scalable: { color: "primary", scale: 1 } }),
          name: "primary 1"
        },
        {
          color: makeColor({ scalable: { color: "primary", scale: 2 } }),
          name: "primary 2"
        },
        {
          color: makeColor({ scalable: { color: "primary", scale: 3 } }),
          name: "primary 3"
        }
      ],
      [
        {
          color: makeColor({ scalable: { color: "accent", scale: 0 } }),
          name: "accent 0"
        },
        {
          color: makeColor({ scalable: { color: "accent", scale: 1 } }),
          name: "accent 1"
        },
        {
          color: makeColor({ scalable: { color: "accent", scale: 2 } }),
          name: "accent 2"
        },
        {
          color: makeColor({ scalable: { color: "accent", scale: 3 } }),
          name: "accent 3"
        }
      ],
      [
        {
          color: makeColor({ scalable: { color: "gray", scale: 0 } }),
          name: "gray 0"
        },
        {
          color: makeColor({ scalable: { color: "gray", scale: 1 } }),
          name: "gray 1"
        },
        {
          color: makeColor({ scalable: { color: "gray", scale: 2 } }),
          name: "gray 2"
        },
        {
          color: makeColor({ scalable: { color: "gray", scale: 3 } }),
          name: "gray 3"
        }
      ],
      [
        {
          color: makeColor({ scalable: { color: "secondary", scale: 0 } }),
          name: "secondary 0"
        },
        {
          color: makeColor({ scalable: { color: "secondary", scale: 1 } }),
          name: "secondary 1"
        },
        {
          color: makeColor({ scalable: { color: "secondary", scale: 2 } }),
          name: "secondary 2"
        },
        {
          color: makeColor({ scalable: { color: "secondary", scale: 3 } }),
          name: "secondary 3"
        }
      ],
      [
        {
          color: makeColor({ scalable: { color: "light", scale: 0 } }),
          name: "light 0"
        },
        {
          color: makeColor({ scalable: { color: "light", scale: 1 } }),
          name: "light 1"
        },
        {
          color: makeColor({ scalable: { color: "light", scale: 2 } }),
          name: "light 2"
        },
        {
          color: makeColor({ scalable: { color: "light", scale: 3 } }),
          name: "light 3"
        }
      ]
    ]}
  />
);

export const fixed = () => (
  <ColorPalette
    fixed={[
      [
        {
          color: makeColor({ fixed: "dark" }),
          name: "dark"
        },
        {
          color: makeColor({ fixed: "light" }),
          name: "light"
        }
      ]
    ]}
  />
);
