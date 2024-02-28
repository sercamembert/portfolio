"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import Language from "./Language";
import { motion } from "framer-motion";
import Image from "next/image";
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { useTranslations } from "next-intl";

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
  const [active, setActive] = useState<string | null>(null);
  const portfolioTranslation = useTranslations("Portfolio");
  const servicesTranslation = useTranslations("Services");
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
          title="Usługi"
          href={`/${locale}/services`}
          className="font-bold"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {services}
        </Link>
        <Link
          title="Portfolio"
          href={`/${locale}/portfolio`}
          className="font-bold"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Portfolio
        </Link>
        <a
          title="Kontakt"
          href={`/${locale}/contact`}
          className="font-bold"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {contact}
        </a>
        <Link
          href={`/${locale}#about`}
          title="Onas"
          className="font-bold cursor-pointer"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {about}
        </Link>

        <Link
          href={`/${locale}/blog/all`}
          title="Blog"
          className="font-bold cursor-pointer"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Blog
        </Link>

        <div className="flex gap-[15px]">
          <Link href="/en" title="English">
            <Image
              src="/images/icons/uk.svg"
              alt="English"
              width={40}
              height={40}
              className="w-[40px]"
            />
          </Link>
          <Link href="/pl" title="Polish">
            <Image
              src="/images/icons/pl.svg"
              alt="Polish"
              width={40}
              height={40}
              className="w-[40px]"
            />
          </Link>
          <Link href="/uk" title="Ukrainian">
            <Image
              src="/images/icons/ukr.svg"
              alt="Ukrainia"
              width={40}
              height={40}
              className="w-[40px]"
            />
          </Link>
        </div>
      </motion.div>

      <nav className="w-full padding h-[80px] fixed top-0 flex items-center justify-between xl:h-[100px] bg-black z-50">
        <Logo />

        <div className="md:hidden">
          <Hamburger toggled={isOpen} size={17} toggle={setIsOpen} />
        </div>

        <div className="hidden md:flex items-center">
          <Link
            href={`/${locale}/blog/all`}
            title="Onas"
            className="cursor-pointer font-medium text-[7.82px] lg:text-[10px] xl:text-[12.81px] 2xl:text-[14.67px] desktop:text-[17.52px] hover:text-primary duration-300  mr-[38px] lg:mr-[49px] xl:mr-[62px] 2xl:mr-[72px] desktop:mr-[85px]"
          >
            Blog
          </Link>
          <Menu setActive={setActive}>
            <Link
              href={`/${locale}/services`}
              title="Usługi"
              className=" font-medium text-[7.82px] lg:text-[10px] xl:text-[12.81px] 2xl:text-[14.67px] desktop:text-[17.52px]  "
            >
              <MenuItem setActive={setActive} active={active} item={services}>
                <div className="flex flex-col space-y-4 ">
                  <Link
                    href={`/${locale}/services`}
                    title="Usługi"
                    className=" font-medium text-[7.82px] lg:text-[10px] xl:text-[12.81px] 2xl:text-[14.67px] desktop:text-[17.52px] hover:text-primary duration-300 "
                  >
                    {servicesTranslation("apps")}
                  </Link>
                  <Link
                    href={`/${locale}/services`}
                    title="Usługi"
                    className=" font-medium text-[7.82px] lg:text-[10px] xl:text-[12.81px] 2xl:text-[14.67px] desktop:text-[17.52px] hover:text-primary duration-300 "
                  >
                    {servicesTranslation("websites")}
                  </Link>
                  <Link
                    href={`/${locale}/services`}
                    title="Usługi"
                    className=" font-medium text-[7.82px] lg:text-[10px] xl:text-[12.81px] 2xl:text-[14.67px] desktop:text-[17.52px] hover:text-primary duration-300 "
                  >
                    {servicesTranslation("brandImage")}
                  </Link>
                  <Link
                    href={`/${locale}/services`}
                    title="Usługi"
                    className=" font-medium text-[7.82px] lg:text-[10px] xl:text-[12.81px] 2xl:text-[14.67px] desktop:text-[17.52px] hover:text-primary duration-300 "
                  >
                    {servicesTranslation("positioning")}
                  </Link>
                  <Link
                    href={`/${locale}/services`}
                    title="Usługi"
                    className=" font-medium text-[7.82px] lg:text-[10px] xl:text-[12.81px] 2xl:text-[14.67px] desktop:text-[17.52px] hover:text-primary duration-300 "
                  >
                    {servicesTranslation("brandBuilding")}
                  </Link>
                </div>
              </MenuItem>
            </Link>
          </Menu>
          <Link
            href={`/${locale}/portfolio`}
            title="Portfolio"
            className="flex items-center font-medium text-[7.82px] lg:text-[10px] xl:text-[12.81px] 2xl:text-[14.67px] desktop:text-[17.52px]  hover:text-primary duration-300 mx-[38px] lg:mx-[49px] xl:mx-[62px] 2xl:mx-[72px] desktop:mx-[85px]"
          >
            <Menu setActive={setActive}>
              <div className="hidden 3xl:flex">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Portfolio"
                >
                  <div className="text-sm grid  grid-cols-2 gap-10 p-4">
                    <ProductItem
                      title="Quizportal"
                      href={`/${locale}/portfolio/quizportal`}
                      src="/images/navbar/quizportal.png"
                      description={portfolioTranslation("quizportalNavbar")}
                    />
                    <ProductItem
                      title="Złote Głosy Musicalu"
                      href={`/${locale}/portfolio/zlote-glosy`}
                      src="/images/navbar/zlote.png"
                      description={portfolioTranslation("musical")}
                    />
                    <ProductItem
                      title="Pous"
                      href={`/${locale}/portfolio/${
                        locale == "pl"
                          ? "pous-marka-odziezowa-dokumentacja"
                          : "POUS-Project-Documentation"
                      }`}
                      src="/images/navbar/pous.png"
                      description={portfolioTranslation("clothes")}
                    />
                    <ProductItem
                      title="Renovation"
                      href={`/${locale}/portfolio/${
                        locale == "pl" ? "renowacje" : "renovation"
                      }`}
                      src="/images/navbar/renovation.png"
                      description={portfolioTranslation("renovations")}
                    />
                  </div>
                </MenuItem>
              </div>
            </Menu>
            <p className=" 3xl:hidden block">Portfolio</p>
          </Link>
          <Link
            href={`/${locale}#about`}
            title="Onas"
            className="cursor-pointer font-medium text-[7.82px] lg:text-[10px] xl:text-[12.81px] 2xl:text-[14.67px] desktop:text-[17.52px]  hover:text-primary duration-300"
          >
            {about}
          </Link>

          <Language />

          <a href={`/${locale}/contact`} title="Kontakt">
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
