import React, { useEffect } from 'react';
import Image from 'next/future/image';
import cardType from '../../@types/Card.types';
import Icon from '../Icon/Icon';
import { BagIcon, MinimizeIcon, AddIcon } from '../iconLibrary';
import DiscountLabel from './DiscountLabel';
import { useDispatch, useSelector, Provider } from 'react-redux';

import { store } from '../../redux/store';

import {
  addItem,
  calculateCartItems,
  clearCart,
  decrementItem,
  incrementItem,
  removeItem,
  selectCart,
} from '../../redux/features/cart';

const CardTertiary: React.FC<cardType> = ({
  classes,
  extraClasses,
  cardImage,
  cardLabel,
  discountAmount,
  originalPrice,
  finalPrice,
  variant,
  cartIncrement,
  cartDecrement,
  count,
}) => {
  return (
    <div
      className={`${classes} ${extraClasses ? extraClasses : ''}`}
      data-testid={`${
        variant == 'tertiaryBag' ? 'tertiaryBag-card' : 'tertiarySearch-card'
      }`}
    >
      <div className="tertiary-card-img-container w-115 h-121 shrink-0 grow-0 bg-white rounded-sm relative">
        <img
          src={cardImage}
          className="w-full h-full object-contain object-center m-0 p-0 min-w-full"
          alt="quaternary-card-img"
        />
        {discountAmount !== undefined && (
          <DiscountLabel discountAmount={discountAmount!} />
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
                  data-testid="decrement-btn-card"
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
                  readOnly
                />
                <button
                  className="bag-btn flex w-35 h-35 bg-green-secondary items-center justify-center rounded-xxs"
                  onClick={() => cartIncrement}
                  data-testid="increment-btn-card"
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
  );
};

export default CardTertiary;
