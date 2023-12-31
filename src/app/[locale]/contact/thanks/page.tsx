"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Spline from "@splinetool/react-spline";

interface Props {}

const page = () => {
  const translation = useTranslations("Thanks");
  const title = translation("title");
  const text = translation("text");
  return (
    <div className="padding min-h-screen items-center flex flex-col pt-[80px] md:pt-[95px] lg:pt-[100px] xl:pt-[110px] 2xl:pt-[140px] desktop:pt-[160px]">
      <h1 className="font-extrabold text-[28px] md:text-[60px] lg:text-[77px] xl:text-[95px] 2xl:text-[110.48px] 3xl:text-[115px] desktop:text-[125.41px]">
        {title}
      </h1>
      <p className="font-medium text-[13.52px] md:text-[14.38px] lg:text-[19.17px] xl:text-[23.36px] 2xl:text-[26.28px] 3xl:text-[27.07px] desktop:text-[29.78px]">
        {text}
      </p>
      <Spline scene="https://prod.spline.design/BQM1wtI9luH7lqtX/scene.splinecode" />
    </div>
  );
};

export default page;
