"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

const page = ({ params: { locale } }: { params: any }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const text = useTranslations("Pous");

  return (
    <div className="padding flex flex-col mb-[150px] md:mb-[300px] mt-[100px] min-h-screen">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.2 }}
        className="leading-tight font-extrabold text-center text-[45px] md:text-[70.1px] lg:text-[90.66px] xl:text-[116.48px] 2xl:text-[119.62px] 3xl:text-[135.99px] desktop:text-[149px] "
      >
        POUS
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
        src="/images/pous/main.svg"
        className="w-full sm:w-[65%] mx-auto mt-[11px] md:mt-[22px] lg:mt-[28px] xl:mt-[36px] 2xl:mt-[41px] desktop:mt-[46px]
        
        "
      ></motion.img>

      <div>
        <h2 className="portfolio-heading">{text("introTitle")}</h2>
        <p className="portfolio-text">{text("intro")}</p>
      </div>

      <div className="mt-[30px] md:mt-[61px] lg:mt-[80px] xl:mt-[90px] 3xl:mt-[100px]">
        <h2 className="portfolio-heading">{text("goalTitle")}</h2>
        <p className="portfolio-text">{text("goalText")}</p>
      </div>

      <div className="mt-[30px] md:mt-[61px] lg:mt-[80px] xl:mt-[90px] 3xl:mt-[100px]">
        <h2 className="portfolio-heading">{text("experienceTitle")}</h2>
        <p className="portfolio-text">{text("experienceText")}</p>
        <div className="mt-[5px] lg:mt-[10px] flex flex-col gap-y-[5px]">
          <div className="flex flex-col">
            <h3 className="portfolio-heading2">{text("abstractionHeading")}</h3>
            <p className="portfolio-text">{text("abstractionText")}</p>
          </div>
          <div className="flex flex-col">
            <h3 className="portfolio-heading2">{text("shapesHeading")}</h3>
            <p className="portfolio-text">{text("shapesText")}</p>
          </div>
          <div className="flex flex-col">
            <h3 className="portfolio-heading2">{text("sloganHeading")}</h3>
            <p className="portfolio-text">{text("sloganText")}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-y-[40px] my-[50px] lg:my-[90px] xl:my-[130px]">
        <Image
          src="/images/pous/hoodie.svg"
          alt="hoodie"
          width={1000}
          height={1000}
          className="w-[75%] sm:w-[35%] mx-auto"
        />
        <Image
          src="/images/pous/shirt.svg"
          alt="hoodie"
          width={1000}
          height={1000}
          className="w-[75%] sm:w-[35%] mx-auto"
        />
      </div>

      <h2 className="portfolio-heading">{text("processTitle")}</h2>

      <div className="mt-[10px] lg:mt-[20px] flex flex-col gap-y-[30px]">
        <div className="flex flex-col gap-y-[10px]">
          <h3 className="portfolio-heading2">{text("conceptHeading")}</h3>
          <p className="portfolio-text">{text("conceptText")}</p>
        </div>

        <div className="flex flex-col gap-y-[10px]">
          <h3 className="portfolio-heading2">{text("graphicsHeading")}</h3>
          <p className="portfolio-text">{text("graphicsText")}</p>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <h3 className="portfolio-heading2">{text("negotiationsHeading")}</h3>
          <p className="portfolio-text">{text("negotiationsText")}</p>
        </div>
      </div>

      <div className="mt-[30px] md:mt-[61px] lg:mt-[80px] xl:mt-[90px] 3xl:mt-[100px]">
        <h2 className="portfolio-heading">{text("futureTitle")}</h2>
        <p className="portfolio-text">{text("futureText")}</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-y-[100px] my-[50px] lg:my-[90px] xl:my-[130px]">
        <Image
          src="/images/pous/pants.svg"
          alt="hoodie"
          width={1000}
          height={1000}
          className="w-[40%] sm:w-[21%] mx-auto"
        />
        <Image
          src="/images/pous/shirt2.svg"
          alt="hoodie"
          width={1000}
          height={1000}
          className="w-[75%] sm:w-[45%] mx-auto"
        />
      </div>

      <div className="flex flex-col mt-[30px] md:mt-[61px] lg:mt-[80px] xl:mt-[90px] 3xl:mt-[100px]">
        <h2 className="portfolio-heading text-center">{text("endTitle")}</h2>
        <p className="portfolio-text text-center">{text("endText")}</p>
      </div>
    </div>
  );
};

export default page;
