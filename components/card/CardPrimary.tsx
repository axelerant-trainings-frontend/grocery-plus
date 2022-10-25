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
      <img
        src={cardImage}
        alt="primary-card-img"
        className="m-0 h-115 w-full object-contain object-center p-0 "
      />
      <h2 className="mt-0 mb-8 text-lg font-medium leading-6 text-charcoal">
        {cardLabel}
      </h2>
    </div>
  );
};

export default CardPrimary;
