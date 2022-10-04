import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Button from './Button';

export default {
  title: '',
  Component: Button,
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'primary-small',
        'secondary-small',
        'tertiary-small',
      ],
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  text: 'Click here',
  iconLeft: true,
  iconRight: true,
  iconName: '',
  extraClasses: '',
  textClasses: '',
};
