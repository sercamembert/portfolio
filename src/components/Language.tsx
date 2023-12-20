import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
interface Props {}

const Language = () => {
  const [isOpen, setIsOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={languageRef}
      className="md:w-[30px] flex justify-start md:justify-center md:mx-[31px] lg:mx-[40px] xl:mx-[57px] 2xl:mx-[60px]"
    >
      {!isOpen ? (
        <svg
          className="w-[33px] md:w-[14.08px] lg:w-[22.59px] xl:w-[23.06px] 2xl:w-[26.4px] desktop:w-[31.53px] cursor-pointer hover:brightness-75 hover:scale-110 duration-[500ms]
        "
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setIsOpen(true)}
        >
          <path
            d="M2.2 0C0.997631 0 0 0.997631 0 2.2V14.3C0 15.5024 0.997631 16.5 2.2 16.5H4.4H9.9V20.9H5.5V17.6L4.4 16.5L3.3 17.6V20.9L5.5 23.1H9.9V24.2C9.9 25.4155 10.8845 26.4 12.1 26.4H24.2C25.4155 26.4 26.4 25.4155 26.4 24.2V12.1C26.4 10.8845 25.4155 9.9 24.2 9.9H16.5V2.2C16.5 0.997631 15.5024 0 14.3 0H2.2ZM2.2 2.2H14.3V9.9H12.1C10.8845 9.9 9.9 10.8845 9.9 12.1V14.3H2.2V2.2ZM9.9 12.1V11C9.63082 11 9.37349 10.9667 9.12012 10.927C9.14636 10.9079 9.17595 10.8929 9.20176 10.8732C10.3801 9.97773 11 8.52611 11 6.6H12.1V5.5H8.8V3.85H7.7V5.5H4.4V6.6H9.9C9.9 8.30389 9.41994 9.32683 8.53574 9.99883C8.29398 10.1826 8.0059 10.3366 7.68926 10.4693C7.3341 10.2937 7.0005 10.0949 6.72031 9.85918C5.93152 9.19571 5.5 8.35093 5.5 7.7H4.4C4.4 8.79697 5.03104 9.87682 6.01133 10.7014C6.07624 10.756 6.15584 10.7995 6.22402 10.8518C5.67244 10.9399 5.07878 11 4.4 11V12.1C5.62685 12.1 6.71893 11.9731 7.65273 11.666C8.33344 11.935 9.08818 12.1 9.9 12.1ZM16.9426 14.2742H19.3531L21.9592 22.0258H19.8107L19.3273 20.3221H16.7965L16.298 22.0258H14.343L16.9426 14.2742ZM18.0211 16.0209L17.1725 18.9041H18.9557L18.1242 16.0209H18.0211Z"
            fill="white"
          />
        </svg>
      ) : (
        <motion.div
          initial={{ height: 0, y: -15 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="md:absolute  bg-white flex flex-col gap-3 rounded-[12px] p-3 overflow-hidden"
        >
          <Link href={"/en"}>
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[33px] md:w-[14.08px] lg:w-[22.59px] xl:w-[23.06px] 2xl:w-[26.4px] desktop:w-[31.53px] "
              onClick={() => setIsOpen(false)}
            >
              <g clip-path="url(#clip0_596_110)">
                <path d="M0 0V7.4H12.3333V0H0Z" fill="#012169" />
                <path
                  d="M0 0L12.3333 7.4L0 0ZM12.3333 0L0 7.4L12.3333 0Z"
                  fill="black"
                />
                <path
                  d="M0 0L12.3333 7.4M12.3333 0L0 7.4"
                  stroke="white"
                  stroke-width="1.48"
                />
                <mask
                  id="mask0_596_110"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="13"
                  height="8"
                >
                  <path
                    d="M6.16667 3.7H12.3333V7.4L6.16667 3.7ZM6.16667 3.7V7.4H0L6.16667 3.7ZM6.16667 3.7H0V0L6.16667 3.7ZM6.16667 3.7V0H12.3333L6.16667 3.7Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_596_110)">
                  <path
                    d="M0 0L12.3333 7.4L0 0ZM12.3333 0L0 7.4L12.3333 0Z"
                    fill="black"
                  />
                  <path
                    d="M0 0L12.3333 7.4M12.3333 0L0 7.4"
                    stroke="#C8102E"
                    stroke-width="0.986667"
                  />
                </g>
                <path
                  d="M-0.246826 2.71333H5.17984V-0.246674H7.15317V2.71333H12.5798V4.68666H7.15317V7.64666H5.17984V4.68666H-0.246826V2.71333Z"
                  fill="#C8102E"
                  stroke="white"
                  stroke-width="0.493333"
                />
              </g>
              <defs>
                <clipPath id="clip0_596_110">
                  <rect width="12.3333" height="7.4" rx="1" fill="white" />
                </clipPath>
              </defs>
            </motion.svg>
          </Link>

          <Link href={"/pl"} onClick={() => setIsOpen(false)}>
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="w-[33px] md:w-[14.08px] lg:w-[22.59px] xl:w-[23.06px] 2xl:w-[26.4px] desktop:w-[31.53px]"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_596_121)">
                <path d="M12.33 0H0V7.4H12.33V0Z" fill="#DC143C" />
                <path d="M12.33 0H0V3.7H12.33V0Z" fill="white" />
              </g>
              <rect
                x="0.05"
                y="0.05"
                width="12.23"
                height="7.3"
                rx="0.95"
                stroke="black"
                stroke-opacity="0.5"
                stroke-width="0.1"
              />
              <defs>
                <clipPath id="clip0_596_121">
                  <rect width="12.33" height="7.4" rx="1" fill="white" />
                </clipPath>
              </defs>
            </motion.svg>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Language;
