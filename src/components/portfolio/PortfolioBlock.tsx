import React from "react";
import Image from "next/image";
interface Props {
  type: string;
  text: string;
  path: string;
}

const PortfolioBlock = ({ path, type, text }: Props) => {
  return (
    <div className="flex flex-col w-full gap-y-[14px] md:gap-y-[10px] lg:gap-y-[12px] xl:gap-y-[15px] 3xl:gap-y-[18px]">
      <Image
        src={path}
        alt="Portoflio project"
        width={1000}
        height={1000}
        className="w-full rounded-[9.14px] md:rounded-[5.86px] lg:rounded-[7.58px] xl:rounded-[10px] 3xl:rounded-[12px] "
      />
      <div className="portfolio-class">{type}</div>
      <p className="font-bold text-[18px] md:text-[14.85px] lg:text-[19.21px] xl:text-[24.5px] 2xl:text-[25.34px] 3xl:text-[28.65px] desktop:text-[31.56px] leading-tight">
        {text}
      </p>
    </div>
  );
};

export default PortfolioBlock;
