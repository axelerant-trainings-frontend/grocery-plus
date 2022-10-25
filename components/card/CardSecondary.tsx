import React from 'react';
import Image from 'next/future/image';
import cardType from '../../@types/Card.types';
import Icon from '../Icon/Icon';
import { BagIcon } from '../iconLibrary';
import DiscountLabel from './DiscountLabel';

const CardSecondary: React.FC<cardType> = ({
  classes,
  extraClasses,
  cardImage,
  cardLabel,
  discountAmount,
  originalPrice,
  finalPrice,
}) => {
  return (
    <div
      className={`${classes} ${extraClasses ? extraClasses : ''} `}
      data-testid="secondary-card"
    >
      <div className="secondary-card-img-container relative h-135 w-full shrink-0 grow-0 rounded-sm bg-flashWhite p-9">
        <img
          src={cardImage}
          className="m-0 h-full w-full min-w-full object-contain object-center p-0"
          alt="secondary-card-img"
        />
        {discountAmount !== undefined && (
          <DiscountLabel discountAmount={discountAmount!} />
        )}
      </div>
      <div className="secondary-card-content-container flex h-full flex-col justify-between">
        <h2 className="mt-12 mb-0 text-left text-xl font-normal leading-5 text-black">
          {cardLabel}
        </h2>
        <div className="flex flex-col justify-end">
          <div className="price flex flex-col">
            {discountAmount !== undefined ? (
              <>
                <span className="old-price text-md font-semibold text-gray-semiDarkish line-through">
                  ৳{originalPrice}
                </span>
                <span className="final-price text-3xl font-semibold leading-6 text-orange-light">
                  ৳{finalPrice}
                </span>
              </>
            ) : (
              <span className="final-price text-3xl font-semibold leading-6 text-orange-light">
                ৳{originalPrice}
              </span>
            )}
          </div>
          <div className="addtobag-wrapper pt-8">
            <button
              className="addtobag-btn flex h-35 w-full items-center justify-center rounded-xxs bg-green-secondary"
              onClick={() => alert('should redirect to cart page.')}
            >
              <Icon
                icon={BagIcon}
                height="15"
                width="13"
                variant="white"
                extraClasses="hover:text-slate-500 cursor-pointer"
                viewBoxWidth="16"
                viewBoxHeight="24"
              />
              <span className="pl-10 text-md text-white">Add to Bag</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSecondary;
