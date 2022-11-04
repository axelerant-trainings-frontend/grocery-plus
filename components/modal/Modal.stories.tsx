import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from './Modal';

import React, { useState } from 'react';

export default {
  title: '',
  Component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen items-center">
      <div className="mx-auto max-w-screen-sm">
        <h1>Hey, click on the button to open the modal.</h1>
        <button
          className="openModalBtn block"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Open
        </button>

        {modalOpen && (
          <Modal
            setOpenModal={setModalOpen}
            label="Are you sure about this action?"
          />
        )}
      </div>
    </div>
  );
};

export const Primary_Modal = Template.bind({});
