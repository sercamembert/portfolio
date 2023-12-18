"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Spline from "@splinetool/react-spline";
interface Props {}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full padding h-[80px] fixed top-0 flex items-center justify-between">
      <Logo />

      <div className="md:hidden">
        <Hamburger toggled={isOpen} size={17} toggle={setIsOpen} />
      </div>

      <div className="hidden md:flex gap-4 items-center">
        <Link href="/services"></Link>
      </div>
    </nav>
  );
};

export default Navbar;
