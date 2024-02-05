"use client";
import Link from "next/link";
import React from "react";
import ServicesBlock from "./ServicesBlock";
import { motion } from "framer-motion";

interface Props {
  title: string;
  designdesc: string;
  apps: string;
  appsdesc: string;
  websites: string;
  websitesdesc: string;
  explore: string;
  locale: string;
}

const Services = ({
  title,
  designdesc,
  apps,
  appsdesc,
  websites,
  websitesdesc,
  explore,
  locale,
}: Props) => {
  const background =
    "radial-gradient(161.21% 160.39% at 5.71% -44.13%, #363636 0%, rgba(26, 26, 26, 0.27) 100%)";
  return (
    <div className="flex flex-col padding gap-y-[7px] md:gap-y-[24px] lg:gap-y-[31px] xl:gap-y-[41px] 3xl:gap-y-[47px] desktop:gap-y-[53px]">
      <h2 className="font-bold text-[39.02px] md:text-[30px] lg:text-[39px] xl:text-[49.76px] 2xl:text-[52.55px] 3xl:text-[58.19px] desktop:text-[63.73px] text-center">
        {title}
      </h2>
      <div
        className="w-full grid grid-cols-1 md:grid-cols-3
        gap-y-[26px] md:gap-x-[26px] lg:gap-x-[34px] xl:gap-x-[43px] 2xl:gap-x-[45px] 3xl:gap-x-[50px] desktop:gap-x-[56px]
        mb-[15px] md:mb-[10px]
        "
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <ServicesBlock background={background} text={appsdesc} title={apps} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ServicesBlock
            background={background}
            text={designdesc}
            title="Design"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <ServicesBlock
            background={background}
            text={websitesdesc}
            title={websites}
          />
        </motion.div>
      </div>
      <Link
        href={`${locale}/services`}
        className="mx-auto font-semibold text-[17px] md:text-[12.38px] lg:text-[16.01px] xl:text-[20.42px] 3xl:text-[23.88px] desktop:text-[26.31px]
        hover:brightness-[80%] hover:scale-110 duration-300"
        title="Więcej"
      >
        {explore}
      </Link>
    </div>
  );
};

export default Services;
