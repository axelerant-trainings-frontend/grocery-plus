import React from 'react';
import TimeModel from '../../@types/time.types';

function Time({ start, end, variant }: TimeModel) {
  const extraClasses =
    'bg-gray-light h-52 w-103 m-1 rounded-sm p-2 cursor-pointer';

  return (
    <button
      className={
        variant == 'active'
          ? 'border-2 border-green-secondary text-md leading-xs text-green-secondary' +
            ' ' +
            extraClasses
          : 'text-md text-charcoal' + ' ' + extraClasses
      }
    >
      {start} - {end}
    </button>
  );
}

export default Time;
