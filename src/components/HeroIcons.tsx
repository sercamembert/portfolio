import React from "react";
import Image from "next/image";
import quizportalImg from "../../public/images/hero/quizportal.png";
import realImg from "../../public/images/hero/real.png";
import recipesImg from "../../public/images/hero/recipes.png";
import pousImg from "../../public/images/hero/pous.png";
import { motion } from "framer-motion";
const HeroIcons = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="md:flex items-center justify-between hidden gap-[20px] lg:gap-[25px] xl:gap-[33px] 2xl:gap-[37px] desktop:gap-[42px]
      md:mt-[31px] lg:mt-[40px] xl:mt-[51px] 2xl:mt-[59px] desktop:mt-[68px]
"
    >
      <Image
        loading="lazy"
        src={quizportalImg}
        className="w-[77.28px] lg:w-[103.51px] xl:w-[133.14px] 2xl:w-[152.65px] 3xl:w-[163.04px] desktop:w-[170.48px] pt-[5px] xl:pt-[10px] 3xl:pt-[13px]"
        alt="quizportal"
      />
      <Image
        loading="lazy"
        src={realImg}
        className="w-[35.19px] lg:w-[46.96px] xl:w-[60.41px] 2xl:w-[69.26px] 3xl:w-[73.97px] desktop:w-[77.35px] "
        alt="real"
      />
      <Image
        loading="lazy"
        src={recipesImg}
        className="w-[73.19px] lg:w-[97.94px] xl:w-[126.36px] 2xl:w-[144.93px] 3xl:w-[153.83px] desktop:w-[161.19px]"
        alt="recipes"
      />
      <Image
        loading="lazy"
        src={pousImg}
        className="w-[46px] lg:w-[61px] xl:w-[78px] 2xl:w-[90px] 3xl:w-[96px] desktop:w-[100px] "
        alt="pous"
      />
    </motion.div>
  );
};

export default HeroIcons;
