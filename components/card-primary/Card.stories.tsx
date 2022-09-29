import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";
import productImg from '../../public/image-product-01.png';

export default {
  title: "Card",
  Component: Card,
  argTypes: {

  }
} as ComponentMeta<typeof Card>;

const image = {
  src: productImg,
  alt: 'my image',
};

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
);

export const Primary = Template.bind({})
Primary.args = {
  variant: "Card Primary",
  isDiscount: false,
  imgSrc: image.src,
  imgAlt: image.alt,
  link: "",
  cardText: 'Fruits & Vegetables'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: "Card Secondary",
  isDiscount: false,
  imgSrc: image.src,
  imgAlt: image.alt,
  link: "",
  cardText: 'Fruits & Vegetables'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  variant: "Card Tertiary",
  isDiscount: false
}

export const Quaternary = Template.bind({})
Quaternary.args = {
  variant: "Card Quaternary",
  isDiscount: true
}
