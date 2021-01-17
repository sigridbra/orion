import React from "react";
import Link from "next/link";
import * as logo from "../public/assets/logo.jpg";


export const NavBarLogo = () => {
  return (
    <Link href="/">
      <a>
        <img
          className="md:hidden cursor-pointer"
          src={logo} 
          alt="logo"
        />
      </a>
    </Link>
  );
};
