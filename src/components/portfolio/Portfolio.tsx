"use client";
import Spline from "@splinetool/react-spline";
import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import Link from "next/link";
import Image from "next/image";

interface Props {
  websites: string;
  company: string;
  renovations: string;
  quizportal: string;
  clothes: string;
  more: string;
  locale: string;
}

const Portfolio = ({
  websites,
  company,
  renovations,
  quizportal,
  clothes,
  more,
  locale,
}: Props) => {
  return (
    <div className="padding flex flex-col">
      <div className="w-full ">
        <Image
          src="/images/portfolio/title.svg"
          width={900}
          height={90}
          alt="Portfolio"
          className="mx-auto mb-[51px] md:mb-[41px] lg:mb-[53px] xl:mb-[68px] 3xl:mb-[80px] desktop:mb-[87px] md:w-1/2"
        />
      </div>

      <div
        className="w-full grid grid-cols-1 md:grid-cols-3
        gap-y-[60px] md:gap-x-[47px] lg:gap-x-[61px] xl:gap-x-[78px] 2xl:gap-x-[81px] 3xl:gap-x-[91px] desktop:gap-x-[100px]
      "
      >
        <PortfolioBlock
          path="/images/portfolio/renovation.png"
          type={websites}
          text={renovations}
        />
        <PortfolioBlock
          path="/images/portfolio/quizportal.png"
          type={company}
          text={quizportal}
        />
        <PortfolioBlock
          path="/images/portfolio/clothes.png"
          type="Design"
          text={clothes}
        />
      </div>
      <Link href={`${locale}/portfolio`} className="mx-auto">
        <button
          className="bg-white text-black h-[27px] md:h-[24.09px] lg:h-[30.28px] xl:h-[37.81px] 2xl:h-[38px] 3xl:h-[42.71px] desktop:h-[46.84px]
        font-semibold text-[11.74px] md:text-[8.6px] lg:text-[11.12px] xl:text-[14.19px] 3xl:text-[16.59px] desktop:text-[18.27px] px-3 xl:px-9 hover:brightness-[80%] hover:scale-110 duration-300
        rounded-[8px] md:rounded-[7px] lg:rounded-[9px] xl:rounded-[11.6px] 3xl:rounded-[13px]
        min-w-[158.72px] md:min-w-[116.26px] lg:min-w-[150.37px] xl:min-w-[191.85px] 2xl:min-w-[198.4px] 3xl:min-w-[224.34px] default:min-w-[247.13px]
        mt-[42px] md:mt-[24px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[41px] 3xl:mt-[46px] desktop:mt-[51px]
        "
        >
          {more}
        </button>
      </Link>
    </div>
  );
};

export default Portfolio;
