import React from "react";
import Image from "next/image";
import flutterflowImg from "../../public/images/hero/flutterflow.png";
import googleImg from "../../public/images/hero/google.png";
import quizportalImg from "../../public/images/hero/quizportal.png";
import microsoftImg from "../../public/images/hero/microsoft.png";
import { motion } from "framer-motion";
const HeroIcons = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="md:flex items-center justify-between max-md:flex-wrap hidden gap-[20px] lg:gap-[25px] xl:gap-[33px] 2xl:gap-[37px] desktop:gap-[42px]
      md:mt-[31px] lg:mt-[40px] xl:mt-[51px] 2xl:mt-[59px] desktop:mt-[68px]
"
    >
      <Image
        loading="lazy"
        src={flutterflowImg}
        className="aspect-[4.9] object-contain object-center w-[71.28px] lg:w-[92.19px] xl:w-[117.63px] 2xl:w-[135.52px] 3xl:w-[137.55px] desktop:w-[151.52px]  overflow-hidden shrink-0 max-w-full"
        alt="flutterflow"
      />
      <Image
        loading="lazy"
        src={googleImg}
        className="aspect-[3.13] object-contain object-center overflow-hidden shrink-0 max-w-full w-[45.49px] lg:w-[58.83px] xl:w-[75.07px] 2xl:w-[86.48px] 3xl:w-[87.78px] desktop:w-[96.7px]"
        alt="google"
      />
      <Image
        loading="lazy"
        src={quizportalImg}
        className="aspect-[4.84] object-contain object-center  overflow-hidden shrink-0 max-w-full w-[70.81px] lg:w-[92.19px] xl:w-[117.63px] 2xl:w-[135.52px] 3xl:w-[137.55px]"
        alt="quizportal"
      />
      <Image
        loading="lazy"
        src={microsoftImg}
        className="aspect-[4.84] object-contain object-center overflow-hidden shrink-0 max-w-full w-[70.81px] lg:w-[92.19px] xl:w-[117.63px] 2xl:w-[135.52px] 3xl:w-[137.55px]"
        alt="microsoft"
      />
    </motion.div>
  );
};

export default HeroIcons;
