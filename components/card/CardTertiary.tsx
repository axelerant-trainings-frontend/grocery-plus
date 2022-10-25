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
      <div className="tertiary-card-img-container relative h-121 w-115 shrink-0 grow-0 rounded-sm bg-white">
        <img
          src={cardImage}
          className="m-0 h-full w-full min-w-full object-contain object-center p-0"
          alt="quaternary-card-img"
        />
        {discountAmount !== undefined && (
          <DiscountLabel discountAmount={discountAmount!} />
        )}
      </div>
      <div className="quaternary-card-content-container grow pl-17">
        <h2 className="mt-0 mb-8 text-3xl font-medium leading-6 text-charcoal">
          {cardLabel}
        </h2>
        <div className="flex items-end justify-between">
          <div className="price flex flex-col">
            {discountAmount !== undefined ? (
              <>
                <span className="old-price text-md font-semibold text-gray-semiDarkish line-through">
                  ৳{originalPrice}
                </span>
                <span className="final-price text-4xl font-semibold text-orange-light">
                  ৳{finalPrice}
                </span>
              </>
            ) : (
              <span className="final-price text-4xl font-semibold text-orange-light">
                ৳{originalPrice}
              </span>
            )}
          </div>
          <div className="quantity-add">
            {variant == 'tertiarySearch' && (
              <button
                className="bag-btn flex h-35 w-89 items-center justify-center rounded-xxs bg-green-secondary"
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
                  className="bag-btn flex h-35 w-35 items-center justify-center rounded-xxs bg-red-primary"
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
                  className="w-52 bg-transparent text-center"
                  readOnly
                />
                <button
                  className="bag-btn flex h-35 w-35 items-center justify-center rounded-xxs bg-green-secondary"
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
