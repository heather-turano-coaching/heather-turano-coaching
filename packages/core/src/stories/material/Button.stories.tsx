import { Button, ButtonProps } from "@material-ui/core";
import { Meta, Story } from "@storybook/react";
import React from "react";

export default {
  title: "Material (Atoms) / Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>This is a button</Button>
);

export const Primary_Contained_Small = Template.bind({});
Primary_Contained_Small.args = {
  variant: "contained",
  color: "primary",
  size: "small"
};

export const Primary_Contained_Medium = Template.bind({});
Primary_Contained_Medium.args = {
  variant: "contained",
  color: "primary",
  size: "medium"
};

export const Primary_Contained_Large = Template.bind({});
Primary_Contained_Large.args = {
  variant: "contained",
  color: "primary",
  size: "large"
};

export const Primary_Contained_Large_Anchor = Template.bind({});
Primary_Contained_Large_Anchor.args = {
  variant: "contained",
  color: "primary",
  size: "large",
  href: "go"
};

export const Primary_Outlined_Small = Template.bind({});
Primary_Outlined_Small.args = {
  variant: "outlined",
  color: "primary",
  size: "small"
};

export const Primary_Outlined_Medium = Template.bind({});
Primary_Outlined_Medium.args = {
  variant: "outlined",
  color: "primary",
  size: "medium"
};

export const Primary_Outlined_Large = Template.bind({});
Primary_Outlined_Large.args = {
  variant: "outlined",
  color: "primary",
  size: "large"
};

export const Primary_Outlined_Large_Anchor = Template.bind({});
Primary_Contained_Large_Anchor.args = {
  variant: "outlined",
  color: "primary",
  size: "large",
  href: "go"
};

export const Secondary_Contained_Small = Template.bind({});
Secondary_Contained_Small.args = {
  variant: "contained",
  color: "secondary",
  size: "small"
};

export const Secondary_Contained_Medium = Template.bind({});
Secondary_Contained_Medium.args = {
  variant: "contained",
  color: "secondary",
  size: "medium"
};

export const Secondary_Contained_Large = Template.bind({});
Secondary_Contained_Large.args = {
  variant: "contained",
  color: "secondary",
  size: "large"
};

export const Secondary_Contained_Large_Anchor = Template.bind({});
Secondary_Contained_Large_Anchor.args = {
  variant: "contained",
  color: "secondary",
  size: "large",
  href: "go"
};

export const Secondary_Outlined_Small = Template.bind({});
Secondary_Outlined_Small.args = {
  variant: "outlined",
  color: "secondary",
  size: "small"
};

export const Secondary_Outlined_Medium = Template.bind({});
Secondary_Outlined_Medium.args = {
  variant: "outlined",
  color: "secondary",
  size: "medium"
};

export const Secondary_Outlined_Large = Template.bind({});
Secondary_Outlined_Large.args = {
  variant: "outlined",
  color: "secondary",
  size: "large"
};

export const Secondary_Outlined_Large_Anchor = Template.bind({});
Secondary_Contained_Large_Anchor.args = {
  variant: "outlined",
  color: "secondary",
  size: "large",
  href: "go"
};
