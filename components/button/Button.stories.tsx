import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { SaveIcon } from '../iconLibrary';
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

export const PrimaryLeft = Template.bind({});
PrimaryLeft.args = {
  variant: 'primary',
  text: 'Click here',
  iconPosition: 'left',
  icon: SaveIcon,
  extraClasses: 'w-343',
};

export const PrimaryRight = Template.bind({});
PrimaryRight.args = {
  variant: 'primary',
  text: 'Click here',
  iconPosition: 'right',
  icon: SaveIcon,
  extraClasses: 'w-343',
};
