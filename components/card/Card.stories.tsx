import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './Card';
import productImg from '../../public/image-product-01.png';
export default {
  title: 'Card',
  Component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const PrimaryCard = Template.bind({});
PrimaryCard.args = {
  cardImage: { productImg },
  cardLabel: 'Fruits & Vegetables',
  variant: 'primary',
};

export const SecondaryCardWithoutDiscount = Template.bind({});
SecondaryCardWithoutDiscount.args = {
  cardImage: { productImg },
  cardLabel: 'Fruits & Vegetables',
  variant: 'secondary',
  originalPrice: 300,
};

export const SecondaryCardWithDiscount = Template.bind({});
SecondaryCardWithDiscount.args = {
  cardImage: { productImg },
  cardLabel: 'Fruits & Vegetables',
  variant: 'secondary',
  originalPrice: 300,
  discountAmount: 20,
  finalPrice: 240,
};

export const TertiarySearchCardWithoutDiscount = Template.bind({});
TertiarySearchCardWithoutDiscount.args = {
  cardImage: { productImg },
  cardLabel: 'Fruits & Vegetables',
  variant: 'tertiarySearch',
  originalPrice: 300,
};

export const TertiarySearchCardWithDiscount = Template.bind({});
TertiarySearchCardWithDiscount.args = {
  cardImage: { productImg },
  cardLabel: 'Fruits & Vegetables',
  variant: 'tertiarySearch',
  originalPrice: 300,
  discountAmount: 20,
  finalPrice: 240,
};

export const TertiaryBagCardWithoutDiscount = Template.bind({});
TertiaryBagCardWithoutDiscount.args = {
  cardImage: { productImg },
  cardLabel: 'Fruits & Vegetables',
  variant: 'tertiaryBag',
  originalPrice: 300,
  count: 1,
};

export const TertiaryBagCardWithDiscount = Template.bind({});
TertiaryBagCardWithDiscount.args = {
  cardImage: { productImg },
  cardLabel: 'Fruits & Vegetables',
  variant: 'tertiaryBag',
  originalPrice: 300,
  discountAmount: 20,
  finalPrice: 240,
  count: 1,
};
