import React from 'react';
import cardType from '../../@types/Card.types';
import Image from 'next/future/image';
import Icon from '../Icon/Icon';
import { BagIcon, MinimizeIcon, AddIcon } from '../iconLibrary';
import CardPrimary from './CardPrimary';
import CardSecondary from './CardSecondary';
import CardTertiary from './CardTertiary';

const Card: React.FC<cardType> = ({
  cardImage,
  cardLabel,
  originalPrice,
  finalPrice,
  discountAmount,
  variant,
  extraClasses,
  cartIncrement,
  cartDecrement,
  count,
}) => {
  let classes = 'flex ';
  switch (variant) {
    case 'primary':
      classes +=
        'primary-card bg-white rounded-sm flex-col items-center w-165 h-160 p-11';
      break;
    case 'secondary':
      classes += 'secondary-card flex-col h-294 w-164 m-8 justify-between';
      break;
    case 'tertiarySearch':
      classes +=
        'tertiarySearch-card py-20 px-16 border-b border-gray-light border-solid items-center w-375';
      break;
    case 'tertiaryBag':
      classes +=
        'tertiaryBag-card py-20 px-16 border-b border-gray-light border-solid items-center w-375';
      break;
  }
  return (
    <>
      {variant == 'primary' && (
        <CardPrimary
          classes={classes}
          extraClasses={extraClasses}
          cardImage={cardImage}
          cardLabel={cardLabel}
        />
      )}
      {variant == 'secondary' && (
        <CardSecondary
          classes={classes}
          extraClasses={extraClasses}
          cardImage={cardImage}
          cardLabel={cardLabel}
          discountAmount={discountAmount}
          originalPrice={originalPrice}
          finalPrice={finalPrice}
        />
      )}
      {(variant == 'tertiaryBag' || variant == 'tertiarySearch') && (
        <CardTertiary
          classes={classes}
          extraClasses={extraClasses}
          cardImage={cardImage}
          cardLabel={cardLabel}
          discountAmount={discountAmount}
          originalPrice={originalPrice}
          finalPrice={finalPrice}
          variant={variant}
          cartIncrement={cartIncrement}
          cartDecrement={cartDecrement}
          count={count}
        />
      )}
    </>
  );
};

export default Card;
