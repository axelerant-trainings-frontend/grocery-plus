import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Colors from "./Colors";

export default {
  title: " Colors",
  component: Colors,
} as ComponentMeta<typeof Colors>;

const design_color = [
  { className: "green-primary", value: "rgba(135, 221, 57, 1)" },
  { className: "green-secondary", value: "rgba(94, 196, 1, 1)" },
  { className: "red-primary", value: "rgba(255, 85, 82, 1)" },
  { className: "red-secondary", value: "rgba(255, 85, 82, 0.72)" },
  { className: "orange-light", value: "rgba(243, 122, 32, 1)" },
  { className: "gray-light", value: "rgba(240, 241, 242, 1)" },
  { className: "gray-darkish", value: "rgba(55, 71, 79, 0.72)" },
  { className: "light-regular", value: "rgba(252, 252, 252, 0.6)" },
  { className: "light-off", value: "rgba(54, 179, 126, 0.14)" },
  { className: "silver-light", value: "rgba(196, 196, 196, 1)" },
  { className: "flashWhite", value: "rgba(243, 244, 244, 1)" },
  { className: "charcoal", value: "rgba(55, 71, 79, 1)" },
  { className: "blackOlive", value: "rgba(62, 62, 62, 1)" },
];

const Template: ComponentStory<typeof Colors> = (args) => <Colors {...args} />;

export const colors = Template.bind({});
colors.args = {
  colors: design_color,
};
