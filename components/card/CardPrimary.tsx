import React from 'react';
import Image from 'next/future/image';
import cardType from '../../@types/Card.types';

const CardPrimary: React.FC<cardType> = ({
  classes,
  extraClasses,
  cardImage,
  cardLabel,
}) => {
  return (
    <div
      className={`${classes} ${extraClasses && extraClasses}`}
      data-testid="primary-card"
    >
      <Image
        src={cardImage}
        alt="primary-card-img"
        className="w-full h-full object-contain object-center m-0 p-0 min-w-max"
        width={100}
        height={100}
      />
      <h2 className="text-lg font-medium text-charcoal leading-6 mt-0 mb-8">
        {cardLabel}
      </h2>
    </div>
  );
};

export default CardPrimary;
