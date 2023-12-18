"use client";
import React, { useState } from "react";
import logo from "../../public/images/logo.svg";
import Image from "next/image";
import Logo from "./Logo";
interface Props {}

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <nav className="w-full padding h-[80px] fixed top-0 flex items-center justify-between">
      <Logo />
    </nav>
  );
};

export default Navbar;
