"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import HeroIcons from "./HeroIcons";

interface Props {
  text: string;
  talk: string;
}

const Hero = ({ text, talk }: Props) => {
  const coloredText = text.replace(
    /(Web & Mobile Development)|(\baplikacji webowych i mobilnych\b)/g,
    '<span class="bg-gradient-to-br from-[#5F43B2] via-[#fff] to-[#5F43B2] text-transparent bg-clip-text">$&</span>'
  );

  return (
    <div className="w-screen padding h-[600px] md:h-full flex flex-col gap-y-[30px] md:flex-row pt-[80px] md:pt-[95px] lg:pt-[100px] xl:pt-[110px] 2xl:pt-[140px] desktop:pt-[160px] ">
      <div className="flex flex-col items-center md:items-start ">
        <h1 className="uppercase font-extrabold text-[45px] md:text-[56.27px] lg:text-[72.79px] xl:text-[92.86px] 2xl:text-[106.99px] 3xl:text-[108.59px] desktop:text-[119.62px] leading-tight">
          outofplace
        </h1>
        <p
          className="text-center md:text-left font-medium text-[13.9px] md:text-[14.36px] lg:text-[18.58px] xl:text-[23.7px] 2xl:text-[27.31px] 3xl:text-[27.72px] desktop:text-[30.53px] 
        w-[339px] md:w-[350.3px] lg:w-[453.09px] xl:w-[578.08px] 2xl:w-[666px] 3xl:w-[675.99px] desktop:w-[744.66px] leading-tight
        "
          dangerouslySetInnerHTML={{ __html: coloredText }}
        />

        <button
          className="bg-white text-black rounded-[10px] xl:rounded-[15px]  h-[32.58px] md:h-[21.1px]  lg:h-[27.29px]  xl:h-[34.82px]  2xl:h-[40.12px]  desktop:h-[44.86px]
        font-semibold text-[12.97px] md:text-[8.25px] lg:text-[10.68px] xl:text-[13.62px] 2xl:text-[15.69px] desktop:text-[17.54px] px-3 xl:px-6 hover:brightness-75 hover:scale-110 duration-[400ms]
        w-[179.54px] md:w-auto md:min-w-[116.3px] lg:min-w-[150.42px] xl:min-w-[191.92px] 2xl:min-w-[221.11px] 3xl:min-w-[224.42px] desktop:min-w-[247.22px]
        mt-[15px] md:mt-[13px] lg:mt-[16px] xl:mt-[21px] 2xl:mt-[24px] desktop:mt-[27px]
        "
        >
          {talk}
        </button>
        <HeroIcons />
      </div>
      <div className="w-full h-[300px] md:h-[270px] xl:h-[350px] 2xl:h-[400px] desktop:h-[500px]">
        <Spline scene="https://prod.spline.design/Gu59AIyqqsViESbU/scene.splinecode" />
      </div>
    </div>
  );
};

export default Hero;
