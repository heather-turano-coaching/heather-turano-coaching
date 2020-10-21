import React from "react";
import styled from "styled-components";

import { AvatarCard } from "./AvatarCard";

const Moana = require("../../.storybook/assets/moana.jpg");
const Ocean = require("../../.storybook/assets/stock/beach-nature-ocean.jpg");

export default {
  component: AvatarCard,
  title: "Display|Avatar Cards"
};

const Conatiner = styled.div`
  width: 300px;
`;

export const base = () => (
  <AvatarCard authorName="Moana Waialiki" avatarImg={Moana} />
);
export const insideOfAContainer = () => (
  <Conatiner>
    <AvatarCard authorName="Moana Waialiki" avatarImg={Moana} />
  </Conatiner>
);
export const withABio = () => (
  <Conatiner>
    <AvatarCard
      authorName="Moana Waialiki"
      avatarImg={Moana}
      bio="Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna."
    />
  </Conatiner>
);
export const withABioAndFeatureImage = () => (
  <Conatiner>
    <AvatarCard
      authorName="Moana Waialiki"
      avatarImg={Moana}
      bio="Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna."
      featureImage={Ocean}
    />
  </Conatiner>
);
