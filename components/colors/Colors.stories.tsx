import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Colors from "./Colors";

export default {
  title: " Colors",
  component: Colors,
} as ComponentMeta<typeof Colors>;

const colors_green = [
  { className: "green-primary", value: "rgba(135, 221, 57, 1)" },
  { className: "green-secondary", value: "rgba(94, 196, 1, 1)" },
];

const colors_red = [
  { className: "red-primary", value: "rgba(255, 85, 82, 1)" },
  { className: "red-secondary", value: "rgba(255, 85, 82, 0.72)" },
];

const colors_orange = [
  { className: "orange-light", value: "rgba(243, 122, 32, 1)" },
];

const colors_gray = [
  { className: "gray-light", value: "rgba(240, 241, 242, 1)" },
  { className: "gray-darkish", value: "rgba(55, 71, 79, 0.72)" },
];

const colors_light = [
  { className: "light-regular", value: "rgba(252, 252, 252, 0.6)" },
  { className: "light-off", value: "rgba(54, 179, 126, 0.14)" },
];

const colors_silver = [
  { className: "silver-light", value: "rgba(196, 196, 196, 1)" },
];

const colors_flashwhite = [
  { className: "flashWhite", value: "rgba(243, 244, 244, 1)" },
];

const colors_charcoal = [
  { className: "charcoal", value: "rgba(55, 71, 79, 1)" },
];

const colors_blackolive = [
  { className: "blackOlive", value: "rgba(62, 62, 62, 1)" },
];

const Template: ComponentStory<typeof Colors> = (args) => <Colors {...args} />;

export const green = Template.bind({});
green.args = {
  colors: colors_green,
};

export const red = Template.bind({});
red.args = {
  colors: colors_red,
};

export const orange = Template.bind({});
orange.args = {
  colors: colors_orange,
};

export const gray = Template.bind({});
gray.args = {
  colors: colors_gray,
};

export const light = Template.bind({});
light.args = {
  colors: colors_light,
};

export const silver = Template.bind({});
silver.args = {
  colors: colors_silver,
};

export const flashwhite = Template.bind({});
flashwhite.args = {
  colors: colors_flashwhite,
};

export const charcoal = Template.bind({});
charcoal.args = {
  colors: colors_charcoal,
};

export const blackolive = Template.bind({});
blackolive.args = {
  colors: colors_blackolive,
};
