import { Typography, TypographyProps } from "@material-ui/core";
import { Meta, Story } from "@storybook/react";
import React from "react";

export default {
  title: "Material (Atoms) / Typography",
  component: Typography,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as Meta;

const Template: Story<TypographyProps> = (args) => (
  <Typography {...args}>This is a button</Typography>
);

export const h1 = Template.bind({});
h1.args = {
  variant: "h1"
};

export const h2 = Template.bind({});
h2.args = {
  variant: "h2"
};
