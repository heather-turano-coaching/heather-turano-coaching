import React from "react";

import { AvatarListItem } from "./AvatarListItem";

const Moana = require("../../.storybook/assets/moana.jpg");

export default {
  component: AvatarListItem,
  title: "Display|Avatar List",
};

export const base = () => (
  <AvatarListItem name="Moana Waialiki" image={Moana} alt="testing" />
);
export const noBio = () => (
  <AvatarListItem name="Moana Waialiki" image={Moana} alt="testing" />
);
export const withBio = () => (
  <AvatarListItem
    name="Moana Waialiki"
    image={Moana}
    alt="testing"
    bio="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  />
);

export const secondaryWithoutBio = () => (
  <AvatarListItem
    name="Moana Waialiki"
    image={Moana}
    alt="testing"
    accentColor="secondary"
  />
);

export const secondaryWithBio = () => (
  <AvatarListItem
    name="Moana Waialiki"
    image={Moana}
    alt="testing"
    accentColor="secondary"
    bio="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  />
);

export const accentWithoutBio = () => (
  <AvatarListItem
    name="Moana Waialiki"
    image={Moana}
    alt="testing"
    accentColor="accent"
  />
);

export const accentWithBio = () => (
  <AvatarListItem
    name="Moana Waialiki"
    image={Moana}
    alt="testing"
    accentColor="accent"
    bio="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  />
);
