import React from "react";
import { UniqueAnimation, UniqueAnimationYears } from "./UniqueAnimation";

interface Props {
  projects: string;
  years: string;
  boxShadow: string;
}

interface YearsProps {
  years: string;
  boxShadow: string;
}

export const UniqueBlock = ({ projects, years, boxShadow }: Props) => {
  return (
    <div
      style={{
        background:
          "radial-gradient(371.89% 134.33% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0.00) 100%)",
        boxShadow: boxShadow,
      }}
      className=" rounded-[15px] md:w-1/2 flex md:flex-col  items-center justify-center py-[40px] md:py-0 md:h-full w-full max-w-[360px] md:max-w-full mx-auto
  gap-y-[10px] gap-x-[75px]
"
    >
      <div>
        <UniqueAnimation />
        <p className="whitespace-pre-line font-medium text-center text-text text-[15.68px] md:text-[13.51px] lg:text-[17.47px] xl:text-[22.29px] 3xl:text-[26.07px] desktop:text-[28.55px] leading-tight mt-[10px]">
          {projects}
        </p>
      </div>
      <div className="block md:hidden">
        <UniqueAnimationYears />
        <p className="whitespace-pre-line font-medium text-center text-text text-[15.68px] md:text-[13.51px] lg:text-[17.47px] xl:text-[22.29px] 3xl:text-[26.07px] desktop:text-[28.55px] leading-tight mt-[10px]">
          {years}
        </p>
      </div>
    </div>
  );
};

export const UniqueYears = ({ years, boxShadow }: YearsProps) => {
  return (
    <div
      style={{
        background:
          "radial-gradient(371.89% 134.33% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0.00) 100%)",
        boxShadow: boxShadow,
      }}
      className="hidden rounded-[15px] md:w-1/2 md:flex flex-col items-center justify-center py-[40px] md:py-0 md:h-full w-full max-w-[360px] md:max-w-full mx-auto
    gap-y-[10px]
  "
    >
      <UniqueAnimationYears />
      <p className="whitespace-pre-line font-medium text-center text-text text-[15.68px] md:text-[13.51px] lg:text-[17.47px] xl:text-[22.29px] 3xl:text-[26.07px] desktop:text-[28.55px] leading-tight">
        {years}
      </p>
    </div>
  );
};
