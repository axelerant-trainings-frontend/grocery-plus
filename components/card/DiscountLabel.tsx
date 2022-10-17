import React from 'react';

const DiscountLabel: React.FC<{ discountAmount: number }> = ({
  discountAmount,
}) => {
  return (
    <div className="discount uppercase w-55 h-55 rounded-full bg-orange-light text-xl text-center leading-4 text-white flex items-center absolute -left-2 top-0">
      <span className="w-full">
        {`${discountAmount}%`}
        <br />
        off
      </span>
    </div>
  );
};

export default DiscountLabel;
