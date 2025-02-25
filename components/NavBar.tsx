import React from "react";
import { NavBarLinks, NavBarLogo } from ".";

export const NavBar = () => {

  return (
    <div className="w-full md:sticky top-0 z-40 bg-white flex mb-6 py-6 px-4 xl:px-24 xxl:px-64 lg:mb-12 mx-auto">
      <NavBarLogo />
      <div className="ml-auto ">
        <NavBarLinks />
      </div>
      {/*<MobileMenu />*/}
    </div>
  );
};
