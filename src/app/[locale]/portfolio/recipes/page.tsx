"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const page = ({ params: { locale } }: { params: any }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const text = useTranslations("Recipes");

  return (
    <div className="padding flex flex-col mb-[150px] md:mb-[300px] mt-[100px] min-h-screen">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.2 }}
        className="leading-tight font-extrabold text-center text-[45px] md:text-[70.1px] lg:text-[90.66px] xl:text-[116.48px] 2xl:text-[119.62px] 3xl:text-[135.99px] desktop:text-[149px] "
      >
        Recipes
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
        src="/images/recipes/main.png"
        className="w-full sm:w-[65%] mx-auto mt-[11px] md:mt-[22px] lg:mt-[28px] xl:mt-[36px] 2xl:mt-[41px] desktop:mt-[46px]
        mb-[30px] md:mb-[61px] lg:mb-[80px] xl:mb-[102px] 2xl:mb-[116px] desktop:mb-[130px]"
      ></motion.img>

      <div>
        <h2 className="portfolio-heading">{text("introTitle")}</h2>
        <p className="portfolio-text">{text("intro")}</p>
      </div>

      <div className="mt-[30px] md:mt-[61px] lg:mt-[80px] xl:mt-[90px] 3xl:mt-[100px]">
        <h2 className="portfolio-heading">{text("functionsTitle")}</h2>
        <div>
          <h3 className="portfolio-heading2">{text("manageHeading")}</h3>
          <p className="portfolio-text">{text("manageText")}</p>
        </div>
        <Image
          alt="Recipes"
          src="/images/recipes/functions.png"
          width={1200}
          height={1000}
          className="mx-auto w-full md:w-[80%] my-[30px] md:my-[50px] xl:my-[100px]"
        />

        <div>
          <h3 className="portfolio-heading2">{text("favouriteHeading")}</h3>
          <p className="portfolio-text">{text("favouriteText")}</p>
        </div>
        <Image
          alt="Recipes"
          src="/images/recipes/favourite.png"
          width={1200}
          height={1000}
          className="mx-auto w-full md:w-[80%] my-[30px] md:my-[50px] xl:my-[100px]"
        />

        <div>
          <h3 className="portfolio-heading2">{text("commentsHeading")}</h3>
          <p className="portfolio-text">{text("commentsText")}</p>
        </div>
        <Image
          alt="Recipes"
          src="/images/recipes/comments.png"
          width={1200}
          height={1000}
          className="mx-auto w-full md:w-[80%] my-[30px] md:my-[50px] xl:my-[100px]"
        />

        <div className="mt-[10px] lg:mt-[20px] flex flex-col gap-y-[30px]">
          <div>
            <h3 className="portfolio-heading2">{text("categoriesHeading")}</h3>
            <p className="portfolio-text">{text("categoriesText")}</p>
          </div>

          <div>
            <h3 className="portfolio-heading2">{text("searchHeading")}</h3>
            <p className="portfolio-text">{text("searchText")}</p>
          </div>

          <div>
            <h3 className="portfolio-heading2">{text("filtersHeading")}</h3>
            <p className="portfolio-text">{text("filtersText")}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col  mt-[50px] lg:mt-[100px]">
        <h2 className="portfolio-heading text-center">{text("endTitle")}</h2>
        <p className="portfolio-text text-center">{text("endText")}</p>
      </div>

      <Link
        href="https://recipes-rho-sage.vercel.app/"
        target="_blank"
        className="portfolio-text font-bold text-center mt-[30px] lg:mt-[60px] md:hover:brightness-[80%] hover:scale-110 duration-300"
      >
        {text("demo")}
      </Link>
    </div>
  );
};

export default page;
