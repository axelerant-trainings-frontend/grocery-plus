import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading from './Heading';

export default {
  title: 'GROCERY/Heading',
  component: Heading,
  args: {
    title: 'Heading',
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: 'small',
};
