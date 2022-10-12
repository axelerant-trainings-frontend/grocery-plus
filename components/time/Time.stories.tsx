import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Time from './Time';

export default {
  title: 'GROCERY/Time',
  component: Time,
  args: {
    variant: 'active',
  },
} as ComponentMeta<typeof Time>;

const Template: ComponentStory<typeof Time> = (args) => <Time {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'active',
  start: '10AM',
  end: '12PM',
};
