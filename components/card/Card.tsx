import React, { ReactElement } from 'react';
import cardType from '../../@types/Card.types';
import CardPrimary from './CardPrimary';
import CardSecondary from './CardSecondary';
import CardTertiary from './CardTertiary';

const Card = ({
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
}: cardType) => {
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
      {(() => {
        if (variant == 'primary') {
          return (
            <CardPrimary
              classes={classes}
              extraClasses={extraClasses}
              cardImage={cardImage}
              cardLabel={cardLabel}
            />
          );
        }
        if (variant == 'secondary') {
          return (
            <CardSecondary
              classes={classes}
              extraClasses={extraClasses}
              cardImage={cardImage}
              cardLabel={cardLabel}
              discountAmount={discountAmount}
              originalPrice={originalPrice}
              finalPrice={finalPrice}
            />
          );
        }
        if (variant == 'tertiaryBag' || variant == 'tertiarySearch') {
          return (
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
          );
        }
      })()}
    </>
  );
};

export default Card;
