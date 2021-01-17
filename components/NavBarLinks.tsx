import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { Client } from '../prismic-configuration';
import cn from "classnames";

interface NavLink {
  id: string,
  uid: string,
  slug: string
}
export const NavBarLinks = () => {
  const router = useRouter();

    const client = Client();
  
    const [navLinks, setNavLinks] = useState<NavLink[]>([]);
  
    useEffect(() => {
      async function load() {
  
        let response = await client.getSingle('menu', null);
        console.log("Menu", response.data.menu);
        let links = response.data.menu.map(page => page.page as NavLink)
        setNavLinks(links)
      }
      load();
  
      
    }, []);

    console.log("Navlinks", navLinks, router.asPath)
  return (
    <div className="flex flex-col md:flex-row">
      {navLinks && navLinks?.map((link, index) => (
        <Link key={index} href={link.uid}>
          <a
            className={cn(
              "ml-4 md:ml-8 mb-6 md:mb-0 capitalize md:text-xl hover:underline",
              {
                "font-bold": router.asPath.toLowerCase() === "/" +link.uid.toLowerCase(),
                "text-grey-dark": router.asPath !== link.uid,
              }
            )}
          >
            {link.uid.replace("-", " ")}
          </a>
        </Link>
      ))}
    </div>
  );
};
