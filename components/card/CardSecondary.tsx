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
      <div className="secondary-card-img-container w-full h-135 shrink-0 grow-0 bg-flashWhite rounded-sm relative p-9">
        <Image
          src={cardImage}
          className="w-full h-full object-contain object-center m-0 p-0 min-w-full"
          alt="secondary-card-img"
          width={100}
          height={100}
        />
        <DiscountLabel discountAmount={discountAmount!} />
      </div>
      <div className="secondary-card-content-container flex flex-col justify-between h-full">
        <h2 className="text-xl font-normal text-black leading-5 mt-12 mb-0 text-left">
          {cardLabel}
        </h2>
        <div className="flex flex-col justify-end">
          <div className="price flex flex-col">
            {discountAmount !== undefined ? (
              <>
                <span className="old-price line-through text-md text-gray-semiDarkish font-semibold">
                  ৳{originalPrice}
                </span>
                <span className="final-price text-3xl text-orange-light leading-6 font-semibold">
                  ৳{finalPrice}
                </span>
              </>
            ) : (
              <span className="final-price text-3xl text-orange-light leading-6 font-semibold">
                ৳{originalPrice}
              </span>
            )}
          </div>
          <div className="addtobag-wrapper pt-8">
            <button
              className="addtobag-btn flex w-full h-35 bg-green-secondary items-center justify-center rounded-xxs"
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
