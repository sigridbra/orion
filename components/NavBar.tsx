import React from "react";
import { NavBarLinks, NavBarLogo } from ".";

export const NavBar = () => {

  return (
    <div className="md:sticky top-0 z-40 bg-white flex mb-8 py-6 px-4 xl:px-24 xxl:px-64 lg:mb-24 mx-auto">
      <NavBarLogo />
      <div className="ml-auto hidden md:block">
        <NavBarLinks />
      </div>
      {/*<MobileMenu />*/}
    </div>
  );
};
