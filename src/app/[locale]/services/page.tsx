"use client";
import React from "react";
import { useTranslations } from "next-intl";
import ServicesBlock from "@/components/services/ServicesBlock";
import { motion } from "framer-motion";

const page = ({ params: { locale } }: { params: any }) => {
  const servicesText = useTranslations("Services");
  const talkText = useTranslations("Navbar");
  const background =
    "radial-gradient(161.21% 160.39% at 5.71% -44.13%, #363636 0%, rgba(26, 26, 26, 0.27) 100%)";
  return (
    <div className="padding flex flex-col mb-[100px] mt-[100px] min-h-screen">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.2 }}
        className="leading-tight uppercase font-extrabold text-center text-[35px] md:text-[70.1px] lg:text-[90.66px] xl:text-[116.48px] 2xl:text-[119.62px] 3xl:text-[135.99px] desktop:text-[149px] "
      >
        {servicesText("title")}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.9 }}
        className="whitespace-pre leading-tight text-center font-medium text-[9px] md:text-[17.89px] lg:text-[23.14px] xl:text-[29.73px] 2xl:text-[30.53px] 3xl:text-[34.71px] desktop:text-[38.03px]"
      >
        {servicesText("subtitle")}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      gap-y-[50px] lg:gap-y-[40px] xl:gap-y-[50px] 2xl:gap-y-[55px] 3xl:gap-y-[62px] desktop:gap-y-[68px] 
      gap-x-[40px] lg:gap-x-[34px] xl:gap-x-[44px] 3xl:gap-x-[51px] desktop:gap-x-[56px]
      mt-[45px] md:mt-[52px] xl:mt-[71px] 3xl:mt-[80px] desktop:mt-[90px]
      "
      >
        <ServicesBlock
          background={background}
          title="Design"
          text={servicesText("designdesc")}
        />
        <ServicesBlock
          background={background}
          title={servicesText("apps")}
          text={servicesText("appsdesc")}
        />
        <ServicesBlock
          background={background}
          title={servicesText("websites")}
          text={servicesText("websitesdesc")}
        />
        <ServicesBlock
          background={background}
          title={servicesText("brandImage")}
          text={servicesText("brandImageText")}
        />
        <ServicesBlock
          background={background}
          title={servicesText("positioning")}
          text={servicesText("positioningText")}
        />
        <ServicesBlock
          background={background}
          title={servicesText("brandBuilding")}
          text={servicesText("brandBuildingText")}
        />
      </motion.div>
      <p
        className="text-center font-medium text-[10px] md:text-[11px] lg:text-[13px] xl:text-[17px] 3xl:text-[20px] desktop:text-[22px]
        mt-[27px] md:mt-[40px] xl:mt-[53px] 3xl:mt-[60px] desktop:mt-[68px]
      "
      >
        {servicesText("requirements")}
      </p>
      <a
        href={`/${locale}/contact`}
        className=" bg-white text-black font-semibold mx-auto flex items-center justify-center
        text-[10px] md:text-[11px] lg:text-[13px] xl:text-[17px] 3xl:text-[20px] desktop:text-[22px]
        mt-[8px] lg:mt-[10px] xl:mt-[13px] desktop:mt-[16px]
        rounded-[6px] lg:rounded-[9px] xl:rounded-[11px] desktop:rounded-[14px]
        min-w-[185.13px] md:min-w-[226px] lg:min-w-[260px] xl:min-w-[340.79px] 3xl:min-w-[397.89px] desktop:min-w-[435.96px]
        min-h-[28.03px] md:min-h-[34.16px] lg:min-h-[40.17px] xl:min-h-[51.61px] 3xl:min-h-[60.25px] desktop:min-h-[66.02px]
        hover:brightness-[80%] hover:scale-110 duration-300
      "
      >
        {talkText("talk")}
      </a>
    </div>
  );
};

export default page;