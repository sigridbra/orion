import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NavBarLinks } from ".";
//import menuBurger from "../assets/icons/menu-burger.svg";
//import menuX from "../assets/icons/menu-x.svg";

export const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const closeMenu = () => {
      setMenuOpen(false);
    };
    router.events.on("routeChangeComplete", closeMenu);
    return () => {
      router.events.off("routeChangeComplete", closeMenu);
    };
  }, []);

  return (
    <div className="md:hidden ml-auto my-auto">
      {/*menuOpen ? (
        <div className="flex text-3xl flex-col fixed text-left z-50 right-0 top-0 bottom-0 left-0 bg-themeGreen animation-fadedown-fast">
          <button
            className="flex justify-end mt-6 mr-4"
            onClick={() => setMenuOpen(false)}
          >
            <img
              className="focus:border-none focus:shadow-none focus:outline-none h-6 ml-auto mt-6 mr-4"
              src={menuX}
            />
          </button>
          <div className="mt-24">
            <NavBarLinks />
          </div>
        </div>
      ) : (
        <button onClick={() => setMenuOpen(true)}>
          <img
            className="focus:border-none focus:shadow-none focus:outline-none h-6"
            src={menuBurger}
            alt="mobileMenuHamburger"
          />
        </button>
      )*/}
    </div>
  );
};
