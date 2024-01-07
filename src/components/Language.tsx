import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";

interface Props {}

const Language = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="md:w-[30px] flex justify-start md:justify-center md:mx-[31px] lg:mx-[40px] xl:mx-[57px] 2xl:mx-[60px]">
          <svg
            className="w-[33px] md:w-[14.08px] lg:w-[22.59px] xl:w-[23.06px] 2xl:w-[26.4px] desktop:w-[31.53px] cursor-pointer hover:brightness-[80%] hover:scale-110 duration-500
        "
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.2 0C0.997631 0 0 0.997631 0 2.2V14.3C0 15.5024 0.997631 16.5 2.2 16.5H4.4H9.9V20.9H5.5V17.6L4.4 16.5L3.3 17.6V20.9L5.5 23.1H9.9V24.2C9.9 25.4155 10.8845 26.4 12.1 26.4H24.2C25.4155 26.4 26.4 25.4155 26.4 24.2V12.1C26.4 10.8845 25.4155 9.9 24.2 9.9H16.5V2.2C16.5 0.997631 15.5024 0 14.3 0H2.2ZM2.2 2.2H14.3V9.9H12.1C10.8845 9.9 9.9 10.8845 9.9 12.1V14.3H2.2V2.2ZM9.9 12.1V11C9.63082 11 9.37349 10.9667 9.12012 10.927C9.14636 10.9079 9.17595 10.8929 9.20176 10.8732C10.3801 9.97773 11 8.52611 11 6.6H12.1V5.5H8.8V3.85H7.7V5.5H4.4V6.6H9.9C9.9 8.30389 9.41994 9.32683 8.53574 9.99883C8.29398 10.1826 8.0059 10.3366 7.68926 10.4693C7.3341 10.2937 7.0005 10.0949 6.72031 9.85918C5.93152 9.19571 5.5 8.35093 5.5 7.7H4.4C4.4 8.79697 5.03104 9.87682 6.01133 10.7014C6.07624 10.756 6.15584 10.7995 6.22402 10.8518C5.67244 10.9399 5.07878 11 4.4 11V12.1C5.62685 12.1 6.71893 11.9731 7.65273 11.666C8.33344 11.935 9.08818 12.1 9.9 12.1ZM16.9426 14.2742H19.3531L21.9592 22.0258H19.8107L19.3273 20.3221H16.7965L16.298 22.0258H14.343L16.9426 14.2742ZM18.0211 16.0209L17.1725 18.9041H18.9557L18.1242 16.0209H18.0211Z"
              fill="white"
            />
          </svg>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="p-2 lg:p-3 bg-white text-black flex flex-col gap-2 overflow-y-auto mt-[3px]"
        side="bottom"
      >
        <Link href={"/en"} className="flex gap-[10px] 2xl:gap-[15px]">
          <Image
            src="/images/icons/uk.svg"
            alt="English"
            width={30}
            height={30}
            className="md:w-[20px] xl:w-[30px] "
          />
          <p className="md:text-[12px] xl:text-[16px] hover:brightness-75 duration-300">
            English
          </p>
        </Link>
        <Link href={"/pl"} className="flex gap-[10px] 2xl:gap-[15px]">
          <Image
            src="/images/icons/pl.svg"
            alt="Polish"
            width={30}
            height={30}
            className="md:w-[20px] xl:w-[30px] "
          />
          <p className="md:text-[12px] xl:text-[16px] hover:brightness-75 duration-300">
            Polish
          </p>
        </Link>
        <Link href={"/uk"} className="flex gap-[10px] 2xl:gap-[15px] ">
          <Image
            src="/images/icons/ukr.svg"
            alt="Polish"
            width={30}
            height={30}
            className="md:w-[20px] xl:w-[30px] "
          />
          <p className="md:text-[12px] xl:text-[16px] hover:brightness-75 duration-300">
            Ukrainian
          </p>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Language;
