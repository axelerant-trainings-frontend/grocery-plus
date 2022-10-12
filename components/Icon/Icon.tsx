import React from 'react';
import iconType from '../../@types/Icon.types';

const Icon: React.FC<iconType> = ({
  icon,
  width,
  height,
  viewBoxWidth,
  viewBoxHeight,
  variant,
  extraClasses,
}) => {
  let variantClass;
  if (variant == 'charcoal') {
    variantClass = 'text-charcoal';
  } else if (variant == 'white') {
    variantClass = 'text-white';
  } else if (variant == 'orange-light') {
    variantClass = 'text-orange-light';
  } else if (variant == 'green-secondary') {
    variantClass = 'text-green-secondary';
  } else if (variant == 'red-primary') {
    variantClass = 'text-red-primary';
  } else if (variant == 'blue-primary') {
    variantClass = 'text-blue-primary';
  }
  return (
    <div
      className={`icon h-auto w-fit ${variantClass} ${
        extraClasses ? extraClasses : ''
      }`}
      data-testid="svg-icon-wrapper"
      style={{
        height: `${height}px`,
        width: `${width}px`,
        resize: 'horizontal',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-testid="svg-icon"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={icon}
          fill="currentcolor"
          data-testid="svg-icon-path"
        />
      </svg>
    </div>
  );
};

export default Icon;
