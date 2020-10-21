import React from "react";

import { Typography } from "../typography";
import { Stepper } from "./Stepper";

export default {
  component: Stepper,
  title: "Display|Stepper"
};

export const base = () => (
  <div style={{ width: "65%", minWidth: "65%", margin: "0 auto" }}>
    <Stepper
      steps={[
        {
          icon: "hammer",
          label: "option 1",
          description:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod."
        },
        {
          icon: "thumbs-up",
          label: "option 2",
          description:
            "Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit."
        },
        {
          icon: "traffic-cone",
          label: "option 3",
          description:
            "Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
        },
        {
          icon: "trophy",
          label: "option 4",
          description:
            "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        }
      ]}
    >
      {({ description }) => (
        <Typography variant="text">{description}</Typography>
      )}
    </Stepper>
  </div>
);

export const with5Options = () => (
  <div style={{ width: "65%", minWidth: "65%", margin: "0 auto" }}>
    <Stepper
      steps={[
        {
          icon: "hammer",
          label: "option 1",
          description:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod."
        },
        {
          icon: "thumbs-up",
          label: "option 2",
          description:
            "Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit."
        },
        {
          icon: "traffic-cone",
          label: "option 3",
          description:
            "Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
        },
        {
          icon: "trophy",
          label: "option 4",
          description:
            "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        },
        {
          icon: "map-marker-smile",
          label: "option 5",
          description:
            "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        }
      ]}
    >
      {({ description }) => (
        <Typography variant="text">{description}</Typography>
      )}
    </Stepper>
  </div>
);
