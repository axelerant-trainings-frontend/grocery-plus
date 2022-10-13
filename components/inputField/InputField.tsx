import React from 'react';
import InputModel from '../../@types/input.types';
import Icon from '../Icon/Icon';
import {
  LockIcon,
  AccountCirleIcon,
  VisibilityIcon,
  CallIcon,
} from '../iconLibrary';
function InputField({ label, variant, placeholder, icon }: InputModel) {
  let inputType = '';
  let iconLeft = '';
  let iconRight = '';
  const labelClasses = 'pl-60 absolute text-md mt-7 leading-xs';
  const classes =
    'text-3xl leading-2xl w-343 h-52 rounded-xs pt-18 bg-gray-light pl-60 text';
  if (variant == 'text') {
    inputType = 'text';
    iconLeft = AccountCirleIcon;
  }
  if (variant == 'password') {
    inputType = 'password';
    iconLeft = LockIcon;
    iconRight = VisibilityIcon;
  }
  if (variant == 'number') {
    inputType = 'number';
    iconLeft = CallIcon;
  }
  if (variant == 'date') {
    inputType = 'date';
  }

  return (
    <>
      <div data-testid="inputBox1" className={inputType}>
        <label className={labelClasses}>{label}</label>
        <div className="flex items-center">
          {icon == 'left' ? (
            <div className="flex items-center">
              <Icon
                variant="charcoal"
                icon={iconLeft}
                height="20"
                width="20"
                extraClasses="ml-20 absolute"
              />
            </div>
          ) : icon == 'both' ? (
            <>
              <div className="flex justify-between absolute mt-1 px-5">
                <div className="w-312 flex justify-between">
                  <Icon
                    variant="charcoal"
                    icon={iconLeft}
                    height="20"
                    width="20"
                    extraClasses=""
                  />
                  <Icon
                    variant="charcoal"
                    icon={iconRight}
                    height="15"
                    width="22"
                  />
                </div>
              </div>
            </>
          ) : (
            ''
          )}
          <input
            data-testid="input"
            className={
              icon == 'left'
                ? `${classes}` + ' ' + `${inputType}`
                : icon == 'both'
                ? `${classes}` + ' ' + `${inputType}` + ' ' + 'pt-18 pl-60'
                : 'text-3xl w-343 h-52 rounded-xs bg-gray-light px-5 ' +
                  ' ' +
                  `${inputType}`
            }
            type={inputType}
            placeholder={placeholder}
            maxLength={16}
          />
        </div>
      </div>
    </>
  );
}
export default InputField;
