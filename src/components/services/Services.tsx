import Link from "next/link";
import React from "react";
import ServicesBlock from "./ServicesBlock";

interface Props {
  title: string;
  designdesc: string;
  apps: string;
  appsdesc: string;
  websites: string;
  websitesdesc: string;
  explore: string;
}

const Services = ({
  title,
  designdesc,
  apps,
  appsdesc,
  websites,
  websitesdesc,
  explore,
}: Props) => {
  const background =
    "radial-gradient(161.21% 160.39% at 5.71% -44.13%, #363636 0%, rgba(26, 26, 26, 0.27) 100%)";
  return (
    <div className="flex flex-col padding gap-y-[7px] md:gap-y-[24px] lg:gap-y-[31px] xl:gap-y-[41px] 3xl:gap-y-[47px] desktop:gap-y-[53px] mb-[100px]">
      <h1 className="font-bold text-[39.02px] md:text-[30px] lg:text-[39px] xl:text-[49.76px] 2xl:text-[52.55px] 3xl:text-[58.19px] desktop:text-[63.73px] text-center">
        {title}
      </h1>
      <div
        className="w-full grid grid-cols-1 md:grid-cols-3
        gap-y-[26px] md:gap-x-[26px] lg:gap-x-[34px] xl:gap-x-[43px] 2xl:gap-x-[45px] 3xl:gap-x-[50px] desktop:gap-x-[56px]
        h-auto md:min-h-[144.73px] lg:min-h-[187.2px] xl:h-[238.84px] 2xl:h-[247px] 3xl:h-[279.29px] desktop:h-[307.67px]"
      >
        <ServicesBlock
          background={background}
          text={designdesc}
          title="Design"
        />
        <ServicesBlock background={background} text={appsdesc} title={apps} />
        <ServicesBlock
          background={background}
          text={websitesdesc}
          title={websites}
        />
      </div>
      <Link
        href="/services"
        className="mx-auto font-semibold mt-[15px] md:mt-0 text-[17px] md:text-[12.38px] lg:text-[16.01px] xl:text-[20.42px] 3xl:text-[23.88px] desktop:text-[26.31px]
        hover:brightness-[80%] hover:scale-110 duration-300"
      >
        {explore}
      </Link>
    </div>
  );
};

export default Services;
