"use client";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import React from "react";
import renovationImg from "../../public/images/portfolio/renovation.png";
import quizportalImg from "../../public/images/portfolio/quizportal.png";
import clothesImg from "../../public/images/portfolio/clothes.png";

interface Props {
  websites: string;
  company: string;
  renovations: string;
  quizportal: string;
  clothes: string;
  more: string;
}

const Portfolio = ({
  websites,
  company,
  renovations,
  quizportal,
  clothes,
  more,
}: Props) => {
  return (
    <div className="padding flex flex-col">
      <Spline
        scene="https://prod.spline.design/nT3VNbaoR9BeE3b3/scene.splinecode"
        className="mx-auto"
      />
      <div
        className="w-full grid grid-cols-1 md:grid-cols-3
        gap-y-[60px] md:gap-x-[47px] lg:gap-x-[61px] xl:gap-x-[78px] 2xl:gap-x-[81px] 3xl:gap-x-[91px] desktop:gap-x-[100px]
      "
      >
        <div className="flex flex-col w-full gap-y-[14px] md:gap-y-[10px] lg:gap-y-[12px] xl:gap-y-[15px] 3xl:gap-y-[18px]">
          <Image
            src={renovationImg}
            alt="renovation website"
            width={1000}
            height={1000}
            className="w-full rounded-[9.14px] md:rounded-[5.86px] lg:rounded-[7.58px] xl:rounded-[10px] 3xl:rounded-[12px] "
          />
          <div
            className="bg-class text-[#888888] w-1/3 flex justify-center items-center font-medium
          h-[21.94px] md:h-[14px] lg:h-[18.19px] xl:h-[23.21px] 2xl:h-[24px] 3xl:h-[27.14px] desktop:h-[29.89px]
          text-[9.76px] md:text-[6.26px] lg:text-[8.09px] xl:text-[10.33px] 2xl:text-[10.68px] 3xl:text-[12.08px] desktop:text-[13.3px]
          rounded-[4.57px] md:rounded-[3px] lg:rounded-[5px]
          "
          >
            {websites}
          </div>
          <p className="font-bold text-[18px] md:text-[14.85px] lg:text-[19.21px] xl:text-[24.5px] 2xl:text-[25.34px] 3xl:text-[28.65px] desktop:text-[31.56px] leading-tight">
            {renovations}
          </p>
        </div>
        <div className="flex flex-col w-full gap-y-[14px] md:gap-y-[10px] lg:gap-y-[12px] xl:gap-y-[15px] 3xl:gap-y-[18px]">
          <Image
            src={quizportalImg}
            alt="renovation website"
            width={1000}
            height={1000}
            className="w-full rounded-[9.14px] md:rounded-[5.86px] lg:rounded-[7.58px] xl:rounded-[10px] 3xl:rounded-[12px] "
          />
          <div
            className="bg-class text-[#888888] w-1/3 flex justify-center items-center font-medium
          h-[21.94px] md:h-[14px] lg:h-[18.19px] xl:h-[23.21px] 2xl:h-[24px] 3xl:h-[27.14px] desktop:h-[29.89px]
          text-[9.76px] md:text-[6.26px] lg:text-[8.09px] xl:text-[10.33px] 2xl:text-[10.68px] 3xl:text-[12.08px] desktop:text-[13.3px]
          rounded-[4.57px] md:rounded-[3px] lg:rounded-[5px]
          "
          >
            {company}
          </div>
          <p className="font-bold text-[18px] md:text-[14.85px] lg:text-[19.21px] xl:text-[24.5px] 2xl:text-[25.34px] 3xl:text-[28.65px] desktop:text-[31.56px] leading-tight">
            {quizportal}
          </p>
        </div>
        <div className="flex flex-col w-full gap-y-[14px] md:gap-y-[10px] lg:gap-y-[12px] xl:gap-y-[15px] 3xl:gap-y-[18px]">
          <Image
            src={clothesImg}
            alt="renovation website"
            width={1000}
            height={1000}
            className="w-full rounded-[9.14px] md:rounded-[5.86px] lg:rounded-[7.58px] xl:rounded-[10px] 3xl:rounded-[12px] "
          />
          <div
            className="bg-class text-[#888888] w-1/3 flex justify-center items-center font-medium
          h-[21.94px] md:h-[14px] lg:h-[18.19px] xl:h-[23.21px] 2xl:h-[24px] 3xl:h-[27.14px] desktop:h-[29.89px]
          text-[9.76px] md:text-[6.26px] lg:text-[8.09px] xl:text-[10.33px] 2xl:text-[10.68px] 3xl:text-[12.08px] desktop:text-[13.3px]
          rounded-[4.57px] md:rounded-[3px] lg:rounded-[5px]
          "
          >
            Design
          </div>
          <p className="font-bold text-[18px] md:text-[14.85px] lg:text-[19.21px] xl:text-[24.5px] 2xl:text-[25.34px] 3xl:text-[28.65px] desktop:text-[31.56px] leading-tight">
            {clothes}
          </p>
        </div>
      </div>
      <button
        className="bg-white text-black mx-auto h-[24px] md:h-[21.09px] lg:h-[27.28px] xl:h-[34.81px] 2xl:h-[36px] 3xl:h-[40.71px] desktop:h-[44.84px]
        font-semibold text-[11.74px] md:text-[8.6px] lg:text-[11.12px] xl:text-[14.19px] 3xl:text-[16.59px] desktop:text-[18.27px] px-3 xl:px-9 hover:brightness-[80%] hover:scale-110 duration-[400ms]
        rounded-[8px] md:rounded-[7px] lg:rounded-[9px] xl:rounded-[11.6px] 3xl:rounded-[13px]
        min-w-[158.72px] md:min-w-[116.26px] lg:min-w-[150.37px] xl:min-w-[191.85px] 2xl:min-w-[198.4px] 3xl:min-w-[224.34px] default:min-w-[247.13px]
        mt-[42px] md:mt-[24px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[41px] 3xl:mt-[46px] desktop:mt-[51px]
        "
      >
        {more}
      </button>
    </div>
  );
};

export default Portfolio;
