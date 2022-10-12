import React from 'react';
import cardType from '../../@types/Card.types';
import Image from 'next/future/image';
import Icon from '../Icon/Icon';
import { BagIcon, MinimizeIcon, AddIcon } from '../iconLibrary';
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
        <div
          className={`${classes} ${extraClasses && extraClasses}`}
          data-testid="primary-card"
        >
          <Image
            src={cardImage}
            alt="primary-card-img"
            className="w-full h-full object-contain object-center m-0 p-0 min-w-max"
          />
          <h2 className="text-lg font-medium text-charcoal leading-6 mt-0 mb-8">
            {cardLabel}
          </h2>
        </div>
      )}
      {variant == 'secondary' && (
        <div
          className={`${classes} ${extraClasses ? extraClasses : ''} `}
          data-testid="secondary-card"
        >
          <div className="secondary-card-img-container w-full h-135 shrink-0 grow-0 bg-flashWhite rounded-sm relative p-9">
            <Image
              src={cardImage}
              className="w-full h-full object-contain object-center m-0 p-0 min-w-full"
              alt="secondary-card-img"
            />
            {discountAmount !== undefined && (
              <div className="discount uppercase w-55 h-55 rounded-full bg-orange-light text-xl text-center leading-4 text-white flex items-center absolute -left-2 top-0">
                {`${discountAmount}% off`}
              </div>
            )}
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
      )}
      {(variant == 'tertiaryBag' || variant == 'tertiarySearch') && (
        <div
          className={`${classes} ${extraClasses ? extraClasses : ''}`}
          data-testid={`${
            variant == 'tertiaryBag'
              ? 'tertiaryBag-card'
              : 'tertiarySearch-card'
          }`}
        >
          <div className="tertiary-card-img-container w-115 h-121 shrink-0 grow-0 bg-white rounded-sm relative">
            <Image
              src={cardImage}
              className="w-full h-full object-contain object-center m-0 p-0 min-w-full"
              alt="quaternary-card-img"
            />
            {discountAmount !== undefined && (
              <div className="discount uppercase w-55 h-55 rounded-full bg-orange-light text-xl text-center leading-4 text-white flex items-center absolute -left-2 top-0">
                {`${discountAmount}% off`}
              </div>
            )}
          </div>
          <div className="quaternary-card-content-container pl-17 grow">
            <h2 className="text-3xl font-medium text-charcoal leading-6 mt-0 mb-8">
              {cardLabel}
            </h2>
            <div className="flex justify-between items-end">
              <div className="price flex flex-col">
                {discountAmount !== undefined ? (
                  <>
                    <span className="old-price line-through text-md text-gray-semiDarkish font-semibold">
                      ৳{originalPrice}
                    </span>
                    <span className="final-price text-4xl text-orange-light font-semibold">
                      ৳{finalPrice}
                    </span>
                  </>
                ) : (
                  <span className="final-price text-4xl text-orange-light font-semibold">
                    ৳{originalPrice}
                  </span>
                )}
              </div>
              <div className="quantity-add">
                {variant == 'tertiarySearch' && (
                  <button
                    className="bag-btn flex w-89 h-35 bg-green-secondary items-center justify-center rounded-xxs"
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
                    <span className="pl-10 text-md text-white">Add</span>
                  </button>
                )}
                {variant == 'tertiaryBag' && (
                  <div className="flex">
                    <button
                      className="bag-btn flex w-35 h-35 bg-red-primary items-center justify-center rounded-xxs"
                      onClick={() => cartDecrement}
                    >
                      <Icon
                        icon={MinimizeIcon}
                        height="11"
                        width="12"
                        variant="white"
                        extraClasses="hover:text-slate-500 cursor-pointer mt-8"
                        viewBoxWidth="10"
                        viewBoxHeight="10"
                      />
                    </button>
                    <input
                      type="text"
                      value={count}
                      className="w-52 text-center bg-transparent"
                    />
                    <button
                      className="bag-btn flex w-35 h-35 bg-green-secondary items-center justify-center rounded-xxs"
                      onClick={() => cartIncrement}
                    >
                      <Icon
                        icon={AddIcon}
                        height="15"
                        width="12"
                        variant="white"
                        extraClasses="hover:text-slate-500 cursor-pointer mt-[3px]"
                        viewBoxWidth="10"
                        viewBoxHeight="14"
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
