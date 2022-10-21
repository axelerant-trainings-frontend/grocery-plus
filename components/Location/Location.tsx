import React from 'react';
import { AddressType } from '../../@types/location.types';
import { LocationIcon } from '../iconLibrary';
import { ChevronRightIcon } from '../iconLibrary';
import Icon from '../Icon/Icon';

const Location = ({ variant, address, labelText }: AddressType) => {
  const classes = 'flex items-center bg-flashWhite max-w-sm px-16 h-48';
  const labelClasses = 'text-charcoal text-sm';
  const addressClasses = 'text-xl text-charcoal';
  if (variant === 'primary') {
    return (
      <div data-testid="location" className={classes}>
        <div className="rounded-full bg-green-primary py-12 px-15">
          <Icon icon={LocationIcon} variant="white" height="20" width="14" />
        </div>

        <div className="ml-left ml-11 flex flex-col">
          <span className={labelClasses}>{labelText}</span>
          <span className={addressClasses}>{address}</span>
        </div>

        <div className="ml-auto">
          <Icon
            icon={ChevronRightIcon}
            variant="charcoal"
            height="19"
            width="15"
          />
        </div>
      </div>
    );
  } else if (variant === 'secondary') {
    return (
      <div className={classes}>
        <div
          data-testid="location"
          className="rounded-full bg-blue-primary py-12 px-15"
        >
          <Icon icon={LocationIcon} variant="charcoal" height="20" width="14" />
        </div>

        <div className="ml-left ml-11 flex w-64 flex-col">
          <span className={addressClasses}>{address}</span>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Location;