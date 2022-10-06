import React from 'react';
import navbarType from '../../@types/navbar.types';

function Navbar({ iconHome, iconDashboard, iconBag, iconMenu }: navbarType) {
  return (
    <>
      <div className="main-wrapper h-lg items-center mx-auto flex max-w-screen-sm justify-around bg-white-regular rounded-t-xl m-10 shadow-primary ">
        <a href="/home">
          <img className="h-5 w-5 cursor-pointer" src={iconHome} alt="home" />
        </a>
        <a href="/dashboard">
          <img
            className="h-5 w-5 cursor-pointer"
            src={iconDashboard}
            alt="dashboard"
          />
        </a>
        <a href="/bag">
          <img className="h-5 w-5 cursor-pointer" src={iconBag} alt="bag" />
        </a>
        <a href="/menu">
          <img className="h-5 w-5  cursor-pointer" src={iconMenu} alt="menu" />
        </a>
      </div>
    </>
  );
}

export default Navbar;
