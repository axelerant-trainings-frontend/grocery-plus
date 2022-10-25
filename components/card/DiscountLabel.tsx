import React from 'react';

const DiscountLabel: React.FC<{ discountAmount: number }> = ({
  discountAmount,
}) => {
  return (
    <div className="discount absolute -left-2 top-0 flex h-55 w-55 items-center rounded-full bg-orange-light text-center text-xl uppercase leading-4 text-white">
      <span className="w-full">
        {`${discountAmount}%`}
        <br />
        off
      </span>
    </div>
  );
};

export default DiscountLabel;
