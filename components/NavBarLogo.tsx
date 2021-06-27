import React from "react";
import Link from "next/link";
import * as logo from "../public/assets/logo-trans.png";
import * as logosmall from "../public/assets/logo.png";
import Image from 'next/image'

export const NavBarLogo = () => {
  return (
    <Link href="/">
      <a>
      <img
          className="hidden md:inline-block cursor-pointer h-20"
          src={logo} alt="logo" />
        
        <img
          className="md:hidden cursor-pointer h-20"
          src={logosmall}
          alt="logo"
        />
      </a>
    </Link>
  );
};
