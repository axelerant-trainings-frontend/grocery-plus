import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ProdDesc from './ProdDesc';

export default {
  title: 'Grocery/ProdDescription',
  Component: ProdDesc,
} as ComponentMeta<typeof ProdDesc>;

const Template: ComponentStory<typeof ProdDesc> = (args) => (
  <ProdDesc {...args} />
);

export const primary = Template.bind({});
primary.args = {
  label: 'Arla DANO Full Cream Milk Powder Instant',
  quantity: '1 KG',
  price: '182',
  category: 'Dairy products',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};
