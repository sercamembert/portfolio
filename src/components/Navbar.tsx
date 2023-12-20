"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Spline from "@splinetool/react-spline";
import Language from "./Language";
interface Props {
  services: string;
  about: string;
  talk: string;
}

const Navbar = ({ services, about, talk }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full padding h-[80px] fixed top-0 flex items-center justify-between xl:h-[100px]">
      <Logo />

      <div className="md:hidden">
        <Hamburger toggled={isOpen} size={17} toggle={setIsOpen} />
      </div>

      <div className="hidden md:flex items-center">
        <Link
          href="/services"
          className=" font-semibold text-[7.82px] lg:text-[10px] xl:text-[12.81px] 2xl:text-[14.67px] desktop:text-[17.52px] "
        >
          {services}
        </Link>
        <Link
          href="/services"
          className=" font-semibold text-[7.82px] lg:text-[10px] xl:text-[12.81px] 2xl:text-[14.67px] desktop:text-[17.52px] mx-[38px] lg:mx-[49px] xl:mx-[62px] 2xl:mx-[72px] desktop:mx-[85px] "
        >
          Portfolio
        </Link>
        <Link
          href="/services"
          className=" font-semibold text-[7.82px] lg:text-[10px] xl:text-[12.81px] 2xl:text-[14.67px] desktop:text-[17.52px]  "
        >
          {about}
        </Link>

        <Language />

        <button
          className="bg-white text-black rounded-[10px] xl:rounded-[15px]  h-[24px]  lg:h-[30px]  xl:h-[39.31px]  2xl:h-[45px]  desktop:h-[53px]
        font-semibold text-[7.82px] lg:text-[10px] xl:text-[12.81px] 2xl:text-[14.67px] desktop:text-[17.52px] px-3 xl:px-6

        "
        >
          {talk}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
