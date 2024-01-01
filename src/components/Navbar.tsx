"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import Language from "./Language";
import { motion } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
interface Props {
  services: string;
  about: string;
  talk: string;
  contact: string;
  locale: string;
}

const variants = {
  open: { x: 0 },
  closed: { x: 800 },
};

const Navbar = ({ services, about, talk, contact, locale }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const scroll2El = (elID: any) => {
    const targetElement = document.getElementById(elID);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - window.innerHeight / 6,
        behavior: "smooth",
      });
    }
  };

  const onBtnClick = (e: any) => {
    router.push("/");
    e.preventDefault();
    setIsOpen(false);
    const goto = e.target.getAttribute("data-goto");
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  };

  return (
    <>
      <motion.div
        className="fixed w-screen h-full top-[80px] bg-black padding text-[40px] flex flex-col gap-10 md:hidden z-50"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.5 }}
        variants={variants}
        initial={{ x: 800 }}
      >
        <Link
          href={`/${locale}/services`}
          className="font-bold"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {services}
        </Link>
        <Link
          href={`/${locale}/portfolio`}
          className="font-bold"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Portfolio
        </Link>
        <a
          href={`/${locale}/contact`}
          className="font-bold"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {contact}
        </a>
        <p
          data-goto="about"
          onClick={onBtnClick}
          className="font-bold cursor-pointer"
        >
          {about}
        </p>

        <Language />
      </motion.div>

      <nav className="w-full padding h-[80px] fixed top-0 flex items-center justify-between xl:h-[100px] bg-black z-50">
        <Logo />

        <div className="md:hidden">
          <Hamburger toggled={isOpen} size={17} toggle={setIsOpen} />
        </div>

        <div className="hidden md:flex items-center">
          <Link
            href={`${locale}/services`}
            className=" font-medium text-[7.82px] lg:text-[10px] xl:text-[12.81px] 2xl:text-[14.67px] desktop:text-[17.52px] hover:text-primary duration-300 "
          >
            {services}
          </Link>
          <Link
            href={`/${locale}/portfolio`}
            className=" font-medium text-[7.82px] lg:text-[10px] xl:text-[12.81px] 2xl:text-[14.67px] desktop:text-[17.52px] mx-[38px] lg:mx-[49px] xl:mx-[62px] 2xl:mx-[72px] desktop:mx-[85px] hover:text-primary duration-300"
          >
            Portfolio
          </Link>
          <p
            data-goto="about"
            onClick={onBtnClick}
            className="cursor-pointer font-medium text-[7.82px] lg:text-[10px] xl:text-[12.81px] 2xl:text-[14.67px] desktop:text-[17.52px]  hover:text-primary duration-300"
          >
            {about}
          </p>

          <Language />

          <a href={`/${locale}/contact`}>
            <button
              className="bg-white text-black rounded-[10px] xl:rounded-[15px]  h-[24px]  lg:h-[30px]  xl:h-[39.31px]  2xl:h-[45px]  desktop:h-[53px]
        font-semibold text-[7.82px] lg:text-[10px] xl:text-[12.81px] 2xl:text-[14.67px] desktop:text-[17.52px] px-3 xl:px-6 hover:brightness-[80%] hover:scale-110 duration-300

        "
            >
              {talk}
            </button>
          </a>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
