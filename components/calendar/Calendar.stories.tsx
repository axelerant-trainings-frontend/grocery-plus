import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Calendar from './Calendar';

export default {
  title: '',
  Component: Calendar,
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = () => (
  <div className="mx-auto max-w-screen-sm">
    <div className="px-24 pt-10">
      <div className="MuiDatePickerToolbar-root MuiDialogActions-root MuiPickersFadeTransitionGroup-root MuiTypography-root MuiGrid-container MuiTypography-overline MuiPickersDay-root MuiDayPicker-weekContainer">
        <Calendar />
      </div>
    </div>
  </div>
);

export const Primary_calendar = Template.bind({});
