import React from 'react';
import { prodDesctype } from '../../@types/proddesc.types';
import Heading from '../heading/Heading';
import { AttachMoneyIcon, MenuIcon } from '../iconLibrary';
import { SortIcon } from '../iconLibrary';
import Icon from '../Icon/Icon';

const ProdDesc = ({
  label,
  quantity,
  price,
  category,
  summary,
}: prodDesctype) => {
  const classes = 'flex flex-col max-w-sm px-15 py-16 bg-gray-light';

  return (
    <div data-testid="description" className={classes}>
      <Heading title={label} variant="medium" size={1} />
      <div className="mt-16 mb-24 flex justify-between ">
        <Heading title={quantity} variant="large-bold" size={1}></Heading>

        <div data-testid="quantity" className="flex items-baseline">
          <div className="relative top-2 left-7">
            <Icon
              icon={AttachMoneyIcon}
              variant="green-secondary"
              height="32"
              width="25"
              viewBoxWidth="18"
              viewBoxHeight="21"
            />
          </div>
          <Heading
            extraClasses="text-green-secondary"
            title={price}
            variant="large-bold"
            size={1}
          />
        </div>
      </div>

      <div data-testid="category" className="mb-30 flex items-center">
        <Icon icon={SortIcon} variant="charcoal" height="13" width="25" />

        <div className="ml-12 text-blackOlive">
          <Heading title={category} variant="small" size={1} />
        </div>
      </div>

      <div data-testid="summary" className="flex">
        <Icon
          extraClasses="pt-7"
          icon={MenuIcon}
          variant="charcoal"
          height="25"
          width="auto"
        />
        <div className="ml-12 tracking-wide text-blackOlive">
          <Heading title={summary} variant="small" size={1} />
        </div>
      </div>
    </div>
  );
};

export default ProdDesc;
