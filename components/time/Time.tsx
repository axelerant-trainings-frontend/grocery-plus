import React from 'react';
import TimeModel from '../../@types/time.types';

function Time({ start, end, variant }: TimeModel) {
  const extraClasses =
    'bg-gray-light h-52 w-103 m-1 rounded-sm p-2 cursor-pointer';

  return (
    <button
      className={
        variant == 'active'
          ? 'text-green-secondary text-md leading-xs border-green-secondary border-2' +
            ' ' +
            extraClasses
          : 'text-charcoal text-md' + ' ' + extraClasses
      }
    >
      {start} - {end}
    </button>
  );
}

export default Time;
