import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Colors from "./Colors";
import twConfig from "../../tailwind.config";

const allColors = Object.entries(twConfig?.theme?.extend?.colors ?? []).reduce(
  (colors, [colorName, colorValue]) => {
    if (typeof colorValue === "string") {
      colors[colorName] = colorValue;
    } else {
      Object.entries(colorValue).forEach(
        ([nestedColorName, nestedColorValue]) => {
          colors[`${colorName}-${nestedColorName}`] = nestedColorValue;
        },
      );
    }
    return colors;
  },
  {},
);

export default {
  title: " Colors",
  component: Colors,
} as ComponentMeta<typeof Colors>;

const Template: ComponentStory<typeof Colors> = (args) => <Colors {...args} />;

export const colors = Template.bind({});
colors.args = {
  colors: allColors,
};
