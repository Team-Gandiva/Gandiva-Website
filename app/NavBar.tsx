"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    {
      label: "Home",
      href: "/Home",
    },
    {
      label: "Blogs",
      href: "/Blogs",
    },
    {
      label: "Teams",
      href: "/Teams",
    },
  ];
  return (
    <nav className="bg-black py-4 pl-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold text-white">
          <Link href="/">Team Gandiva</Link>
        </div>

        <div className="flex">
          <Link
            href="/Home"
            className={`${
              "/Home" === currentPath ? "text-red-500" : "text-white"
            } hover:text-red-500 group relative font-bold mx-5 sm:mx-10 lg:mx-20`}
          >
            Home
            <span
              className={`${
                "/Home" === currentPath
                  ? "absolute left-0 bottom-[-3px] w-full h-[3px] bg-red-500 rounded-full scale-x-100"
                  : ""
              } absolute left-0 bottom-[-3px] w-full h-[3px] bg-red-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
            ></span>
          </Link>

          <Link
            href="/Blogs"
            className={`${
              "/Blogs" === currentPath ? "text-red-500" : "text-white"
            } hover:text-red-500 group relative font-bold mx-5 sm:mx-10 lg:mx-20`}
          >
            Blogs
            <span
              className={`${
                "/Blogs" === currentPath
                  ? "absolute left-0 bottom-[-3px] w-full h-[3px] bg-red-500 rounded-full scale-x-100"
                  : ""
              } absolute left-0 bottom-[-3px] w-full h-[3px] bg-red-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
            ></span>
          </Link>

          <Link
            href="/Teams"
            className={`${
              "/Teams" === currentPath ? "text-red-500" : "text-white"
            } hover:text-red-500 group relative font-bold mx-5 sm:ml-10 sm:mr-5 lg:ml-20 lg:mr-10`}
          >
            Teams
            <span
              className={`${
                "/Teams" === currentPath
                  ? "absolute left-0 bottom-[-3px] w-full h-[3px] bg-red-500 rounded-full scale-x-100"
                  : ""
              } absolute left-0 bottom-[-3px] w-full h-[3px] bg-red-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
            ></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
