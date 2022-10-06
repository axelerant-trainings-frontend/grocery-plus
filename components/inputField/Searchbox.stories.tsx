import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Searchbox from './Searchbox';

export default {
  title: 'GROCERY/Searchbox',
  component: Searchbox,
  args: {
    variant: 'active',
  },
} as ComponentMeta<typeof Searchbox>;

const Template: ComponentStory<typeof Searchbox> = (args) => (
  <Searchbox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'active',
  label: 'Search',
  placeholder: 'Search Anything',
  icon: '/icons/search_24px.png',
};
