"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const page = ({ params: { locale } }: { params: any }) => {
  const text = useTranslations("Renovation");

  return (
    <div className="padding flex flex-col mb-[150px] md:mb-[300px] mt-[100px] min-h-screen">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.2 }}
        className="leading-tight font-extrabold text-center text-[45px] md:text-[70.1px] lg:text-[90.66px] xl:text-[116.48px] 2xl:text-[119.62px] 3xl:text-[135.99px] desktop:text-[149px] "
      >
        {text("title")}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.9 }}
        className="whitespace-break-spaces leading-tight text-center font-medium text-[13px] md:text-[17.89px] lg:text-[23.14px] xl:text-[29.73px] 2xl:text-[30.53px] 3xl:text-[34.71px] desktop:text-[38.03px]"
      >
        {text("subtitle")}
      </motion.p>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        src="/images/renovation/main.png"
        className="w-full sm:w-[65%] mx-auto mt-[11px] md:mt-[22px] lg:mt-[28px] xl:mt-[36px] 2xl:mt-[41px] desktop:mt-[46px]
        mb-[30px] md:mb-[61px] lg:mb-[80px] xl:mb-[102px] 2xl:mb-[116px] desktop:mb-[130px]"
      ></motion.img>

      <div>
        <h2 className="portfolio-heading">{text("introTitle")}</h2>
        <p className="portfolio-text">{text("intro")}</p>
      </div>

      <div className="mt-[30px] md:mt-[61px] lg:mt-[80px] xl:mt-[90px] 3xl:mt-[100px]">
        <h2 className="portfolio-heading">{text("goalTitle")}</h2>
        <div className="flex flex-col gap-y-[15px]">
          <p className="portfolio-text">{text("goalText1")}</p>
          <p className="portfolio-text">{text("goalText2")}</p>
          <p className="portfolio-text">{text("goalText3")}</p>
          <p className="portfolio-text">{text("goalText4")}</p>
          <p className="portfolio-text">{text("goalText5")}</p>
        </div>
      </div>

      <h2 className="portfolio-heading mt-[30px] md:mt-[61px] lg:mt-[80px] xl:mt-[90px] 3xl:mt-[100px]">
        {text("functionsTitle")}
      </h2>

      <div className="mt-[10px] lg:mt-[20px] flex flex-col gap-y-[30px]">
        <div className="flex flex-col gap-y-[10px]">
          <h3 className="portfolio-heading2">{text("homePageHeading")}</h3>
          <p className="portfolio-text">{text("homePageText")}</p>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <h3 className="portfolio-heading2">{text("aboutHeading")}</h3>
          <p className="portfolio-text">{text("aboutText")}</p>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <h3 className="portfolio-heading2">{text("servicesHeading")}</h3>
          <p className="portfolio-text">{text("servicesText")}</p>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <h3 className="portfolio-heading2">{text("referencesHeading")}</h3>
          <p className="portfolio-text">{text("referencesText")}</p>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <h3 className="portfolio-heading2">{text("contactHeading")}</h3>
          <p className="portfolio-text">{text("contactText")}</p>
        </div>
      </div>

      <Image
        src="/images/renovation/website.png"
        alt="Renovation website"
        width={1700}
        height={3000}
        className="my-[100px] sm:w-[60%] mx-auto"
      />

      <div className="flex flex-col">
        <h2 className="portfolio-heading text-center">{text("endTitle")}</h2>
        <p className="portfolio-text text-center">{text("endText")}</p>
      </div>

      <Link
        href="https://renowacje.vercel.app/"
        target="_blank"
        className="portfolio-text font-bold text-center mt-[30px] lg:mt-[60px] md:hover:brightness-[80%] hover:scale-110 duration-300"
      >
        {text("demo")}
      </Link>
    </div>
  );
};

export default page;
