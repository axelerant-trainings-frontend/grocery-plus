import React from 'react';
import Button from '../../components/button/Button';
import { BackwardIcon } from '../../components/iconLibrary';
import { DeleteIcon } from '../../components/iconLibrary';
import Heading from '../heading/Heading';

const Modal = ({ setOpenModal, label }) => {
  return (
    <div data-testid="modal" className="max-w-screen-sm bg-light-off px-16">
      <div className="w-343 rounded-t-lg">
        <div className="mb-39 mt-30 inline-block text-center">
          <Heading
            title={label}
            variant="medium"
            size={1}
            extraClasses="text-xxl leading-xxl text-left font-medium"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <Button
            text="Go Back"
            iconRight={BackwardIcon}
            variant="primary"
            extraClasses="bg-green-secondary mb-12 h-48"
            onClick={() => {
              setOpenModal(false);
            }}
          />
          <Button
            text="Confirm"
            iconRight={DeleteIcon}
            variant="primary"
            extraClasses="bg-red-primary mb-30 h-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
