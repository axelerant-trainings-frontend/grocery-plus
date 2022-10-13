import React from 'react';
import NavbarModel, { NavbarLink } from '../../@types/navbar.types';
import Icon from '../Icon/Icon';
import { BagIcon, DashIcon, HomeIcon, MenuIcon } from '../iconLibrary';

const defaultLinks: NavbarLink[] = [
  {
    title: 'home',
    icon: HomeIcon,
    link: '/',
    linkTitle: 'home',
  },
  {
    title: 'dashboard',
    icon: DashIcon,
    link: '/dashboard',
    linkTitle: 'dashboard',
  },
  {
    title: 'bag',
    icon: BagIcon,
    link: '/bag',
    linkTitle: 'bag',
  },
  {
    title: 'menu',
    icon: MenuIcon,
    link: '/menu',
    linkTitle: 'menu',
  },
];

function Navbar({ links = defaultLinks }: NavbarModel) {
  return (
    <div className="flex pt-20 justify-around items-center bg-white-regular rounded-t-xl m-10 shadow-primary max-w-screen-sm h-116 mt-10">
      {links.map((item) => (
        <a title={item.linkTitle} key={item.title} href={item.link}>
          <Icon
            icon={item.icon}
            viewBoxHeight="42"
            viewBoxWidth="19"
            variant="charcoal"
            height="50"
            width="20"
          />
        </a>
      ))}
    </div>
  );
}
export default Navbar;
