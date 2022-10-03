import Image from 'next/image';
import React from 'react';
import { ButtonType } from '../../@types/button.types';

const Button = ({
  variant,
  text = 'Button',
  iconLeft,
  iconRight,
  extraClasses = '',
  iconClasses = '',
  textClasses = '',
  onClick,
}: ButtonType) => {
  let classes = '';
  let textColor = '';
  const defaultClasses =
    'flex items-center w-full px-4 py-3 rounded-xs cursor-pointer';
  if (variant === 'primary') {
    classes = `${defaultClasses} bg-green-primary h-12`;
    textColor = 'text-white';
  } else if (variant === 'secondary') {
    classes = `${defaultClasses} bg-red-primary h-12`;
    textColor = 'text-white';
  } else if (variant === 'tertiary') {
    classes = `${defaultClasses} bg-light-off h-12`;
    textColor = 'text-green-primary';
  }
  if (variant === 'primary-small') {
    classes = `${defaultClasses} bg-green-primary h-9`;
    textColor = 'text-white';
  } else if (variant === 'secondary-small') {
    classes = `${defaultClasses} bg-red-primary h-9`;
    textColor = 'text-white';
  } else if (variant === 'tertiary-small') {
    classes = `${defaultClasses} bg-light-off h-9`;
    textColor = 'text-green-primary';
  }
  return (
    <div
      className={classes + ' ' + extraClasses}
      onClick={() => (onClick != null ? onClick : null)}
    >
      {iconLeft && (
        <Image
          className={iconClasses}
          src="/vector.png"
          width={9.92}
          height={11.46}
        />
      )}
      <span className={textColor + ' mx-auto ' + textClasses}>{text}</span>
      {iconRight && (
        <Image
          className={iconClasses}
          // bag-img
          // src="/vector.png"

          // save-img
          // src="/save.png"

          // left_arrow-img
          // src="/left_arrow.png"

          // right_arrow-img
          src="/right_arrow.png"
          // delete-img
          // src="/delete.png"
          width={17}
          height={19.6}
        />
      )}
    </div>
  );
};

export default Button;
