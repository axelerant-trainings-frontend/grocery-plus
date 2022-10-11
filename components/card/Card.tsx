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
}) => {
  let classes = 'flex ';
  switch (variant) {
    case 'primary':
      classes += 'primary-card';
      break;
    case 'secondary':
      classes += 'secondary-card';
      break;
    case 'tertiarySearch':
      classes +=
        'tertiarySearch-card py-20 px-16 border-b border-gray-light border-solid items-center';
      break;
    case 'tertiaryBag':
      classes +=
        'tertiaryBag-card py-20 px-16 border-b border-gray-light border-solid items-center';
      break;
  }
  return (
    <>
      {variant == 'primary' && (
        <div className={`${classes} ${extraClasses && extraClasses}`}>
          <Image
            src={cardImage}
            alt="primary-card-img"
            className="w-full h-full object-contain object-center"
          />
          lorem ipsum dummy text.
        </div>
      )}
      {variant == 'secondary' && (
        <div className={`${classes} ${extraClasses ? extraClasses : ''} `}>
          <Image
            src={cardImage}
            alt="secondary-card-img"
            className="w-full h-full object-contain object-center"
          />
          lorem ipsum dummy text.
        </div>
      )}
      {(variant == 'tertiaryBag' || variant == 'tertiarySearch') && (
        <div className={`${classes} ${extraClasses ? extraClasses : ''}`}>
          <div className="quaternary-card-img-container w-115 h-121 shrink-0 grow-0 bg-white rounded-sm relative">
            <Image
              src={cardImage}
              className="w-full h-full object-contain object-center m-0 p-0"
              alt="quaternary-card-img"
            />
            {discountAmount !== undefined && (
              <div className="discount uppercase w-55 h-55 rounded-full bg-orange-light text-xl text-center leading-4 text-white flex items-center absolute -left-2 top-0">
                {`${discountAmount}% off`}
              </div>
            )}
          </div>
          <div className="quaternary-card-content-container pl-17">
            <h2 className="text-3xl font-medium text-charcoal leading-6 mt-0 mb-8">
              Arla DANO Full Cream Milk Powder Instant
            </h2>
            <div className="flex justify-between items-end">
              <div className="price flex flex-col">
                {discountAmount !== undefined ? (
                  <>
                    <span className="old-price line-through text-md text-gray-semiDarkish font-semibold">৳200</span>
                    <span className="final-price text-4xl text-orange-light font-semibold">৳182</span>
                  </>
                ) : (
                  <span className="final-price text-4xl text-orange-light font-semibold">৳182</span>
                )}
              </div>
              <div className="quantity-add">
                {variant == 'tertiarySearch' && (
                  <button
                    className="bag-btn flex w-89 h-35 bg-green-secondary items-center justify-center rounded-xxs"
                    onClick={() => alert('hi')}
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
                      onClick={() => alert('hi')}
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
                      value="1"
                      className="w-52 text-center bg-transparent"
                    />
                    <button
                      className="bag-btn flex w-35 h-35 bg-green-secondary items-center justify-center rounded-xxs"
                      onClick={() => alert('hi')}
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
