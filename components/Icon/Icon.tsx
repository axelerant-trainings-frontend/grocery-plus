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
  return (
    <div
      className={`icon w-fit h-auto text-${variant} ${
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d={icon}
          fill="currentcolor"
          data-testid="svg-icon-path"
        />
      </svg>
    </div>
  );
};

export default Icon;
