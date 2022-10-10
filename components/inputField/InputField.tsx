import React from 'react';
import inputType from '../../@types/input.types';

function InputField({ label, variant, placeholder, icon }: inputType) {
  let inputType = '';
  let iconLeft = '';
  let iconRight = '';
  const extraClasses = 'pl-[61px] absolute text-sm mt-1.5';

  if (variant == 'text') {
    inputType = 'text';
    iconLeft = '/icons/user.png';
  }
  if (variant == 'password') {
    inputType = 'password';
    iconLeft = '/icons/lock_24px.png';
    iconRight = '/icons/visibility.png';
  }
  if (variant == 'number') {
    inputType = 'number';
    iconLeft = '/icons/call_24px.png';
  }
  if (variant == 'date') {
    inputType = 'date';
  }

  if (icon == 'left') {
    return (
      <>
        <div>
          <label className={extraClasses}>{label}</label>
          <div className="flex items-center">
            <img
              className={'h-5 w-5 absolute ml-5' + ' ' + `${inputType}`}
              src={iconLeft}
              alt="lefticon"
            />
            <input
              className="text-2xl w-4xl h-[52px] rounded-xs pt-2 bg-gray-light pl-[60px]"
              type={inputType}
              placeholder={placeholder}
            />
          </div>
        </div>
      </>
    );
  } else if (icon == 'both') {
    return (
      <>
        <label className={extraClasses}>{label}</label>
        <div className="flex justify-between w-4xl absolute mt-4 px-5">
          <img
            className={'h-5 w-5 both' + ' ' + `${inputType}`}
            src={iconLeft}
            alt="lefticon"
          />
          <img
            className={'h-[15px] w-[22px] both' + ' ' + `${inputType}`}
            src={iconRight}
            alt="righticon"
          />
        </div>
        <input
          className="text-2xl w-4xl h-[52px] rounded-xs bg-gray-light pl-[60px] pt-2"
          type={inputType}
          placeholder={placeholder}
        />
      </>
    );
  } else {
    return (
      <>
        <div>
          <input
            className={
              'w-4xl h-[52px] rounded-xs bg-gray-light px-5' +
              ' ' +
              `${inputType}`
            }
            type={inputType}
            placeholder={placeholder}
            data-testid="date"
          />
        </div>
      </>
    );
  }
}

export default InputField;
