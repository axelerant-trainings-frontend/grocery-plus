import React from 'react';
import PageHeaderModel from '../../@types/PageHeader.types';
import Icon from '../Icon/Icon';
import Heading from '../heading/Heading';
import Link from 'next/link';
function PageHeader({ title, icon, textVariant, link }: PageHeaderModel) {
  return (
    <>
      <div
        data-testid="pagetitle"
        className={
          icon
            ? 'header-with-icon mt-48 ml-16 flex max-w-screen-sm items-center'
            : 'header-without-icon mt-48 ml-16 flex max-w-screen-sm items-center'
        }
      >
        {icon ? (
          <Link href={link}>
            <a>
              <Icon
                variant="charcoal"
                icon={icon}
                height="15.58"
                width="15.18"
              />
            </a>
          </Link>
        ) : (
          ''
        )}
        <Heading
          size={1}
          variant={textVariant}
          title={title}
          extraClasses={icon ? 'ml-22 header-with-icon' : 'header-without-icon'}
        />
      </div>
    </>
  );
}

export default PageHeader;
