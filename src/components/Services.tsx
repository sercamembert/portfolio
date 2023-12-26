import Link from "next/link";
import React from "react";

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
  return (
    <div
      className="flex flex-col padding
    gap-y-[7px] md:gap-y-[24px] lg:gap-y-[31px] xl:gap-y-[41px] 3xl:gap-y-[47px] desktop:gap-y-[53px]
    mb-[100px]
    "
    >
      <h1 className="title text-center">{title}</h1>
      <div
        className="w-full grid grid-cols-1 md:grid-cols-3
        gap-y-[26px] md:gap-x-[26px] lg:gap-x-[34px] xl:gap-x-[43px] 2xl:gap-x-[45px] 3xl:gap-x-[50px] desktop:gap-x-[56px]
        h-auto md:min-h-[144.73px] lg:min-h-[187.2px] xl:h-[238.84px] 2xl:h-[247px] 3xl:h-[279.29px] desktop:h-[307.67px]
      "
      >
        <div
          style={{
            background:
              "radial-gradient(161.21% 160.39% at 5.71% -44.13%, #363636 0%, rgba(26, 26, 26, 0.27) 100%)",
          }}
          className="w-full max-w-[360px] md:max-w-full mx-auto flex flex-col items-center justify-center
           px-[18px] md:px-[14px] lg:px-[18px] xl:px-[23px] 3xl:px-[27px] desktop:px-[29px]
           py-[45px] md:py-[35px] lg:py-[45px] xl:py-[58px] 2xl:py-[60px] 3xl:py-[67px]
           rounded-[24.38px] md:rounded-[14.4px] xl:rounded-[18.37px] 3xl:rounded-[21.48px] desktop:rounded-[40.48px]
           min-h-[185.25px]
           md:min-h-full
           gap-y-[5px]
          "
        >
          <h1 className="font-semibold leading-tight text-[27px] md:text-[25.66px] lg:text-[33.19px] xl:text-[42.34px] 3xl:text-[49.52px] desktop:text-[54.55px]">
            Design
          </h1>
          <p className="whitespace-pre-line font-medium text-center text-text text-[15.68px] md:text-[13.51px] lg:text-[17.47px] xl:text-[22.29px] 3xl:text-[26.07px] desktop:text-[28.55px] leading-tight">
            {designdesc}
          </p>
        </div>
        <div
          style={{
            background:
              "radial-gradient(161.21% 160.39% at 5.71% -44.13%, #363636 0%, rgba(26, 26, 26, 0.27) 100%)",
          }}
          className="w-full max-w-[360px] md:max-w-full mx-auto flex flex-col items-center justify-center
           px-[18px] md:px-[14px] lg:px-[18px] xl:px-[23px] 3xl:px-[27px] desktop:px-[29px]
           py-[45px] md:py-[35px] lg:py-[45px] xl:py-[58px] 2xl:py-[60px] 3xl:py-[67px]
           rounded-[24.38px] md:rounded-[14.4px] xl:rounded-[18.37px] 3xl:rounded-[21.48px] desktop:rounded-[40.48px]
           min-h-[185.25px]
           md:min-h-full
           gap-y-[5px]
          "
        >
          <h1 className="font-semibold text-[27px] text-center leading-tight md:text-[25.66px] lg:text-[33.19px] xl:text-[42.34px] 3xl:text-[49.52px] desktop:text-[54.55px]">
            {apps}
          </h1>
          <p className="whitespace-pre-line font-medium text-center text-text text-[15.68px] md:text-[13.51px] lg:text-[17.47px] xl:text-[22.29px] 3xl:text-[26.07px] desktop:text-[28.55px] leading-tight">
            {appsdesc}
          </p>
        </div>
        <div
          style={{
            background:
              "radial-gradient(161.21% 160.39% at 5.71% -44.13%, #363636 0%, rgba(26, 26, 26, 0.27) 100%)",
          }}
          className="w-full max-w-[360px] md:max-w-full mx-auto flex flex-col items-center justify-center
           px-[18px] md:px-[14px] lg:px-[18px] xl:px-[23px] 3xl:px-[27px] desktop:px-[29px]
           py-[45px] md:py-[35px] lg:py-[45px] xl:py-[58px] 2xl:py-[60px] 3xl:py-[67px]
           rounded-[24.38px] md:rounded-[14.4px] xl:rounded-[18.37px] 3xl:rounded-[21.48px] desktop:rounded-[40.48px]
           min-h-[185.25px]
           md:min-h-full
           gap-y-[5px]
          "
        >
          <h1 className="text-center leading-tight font-semibold text-[27px] md:text-[25.66px] lg:text-[33.19px] xl:text-[42.34px] 3xl:text-[49.52px] desktop:text-[54.55px]">
            {websites}
          </h1>
          <p className="whitespace-pre-line font-medium text-center text-text text-[15.68px] md:text-[13.51px] lg:text-[17.47px] xl:text-[22.29px] 3xl:text-[26.07px] desktop:text-[28.55px] leading-tight">
            {websitesdesc}
          </p>
        </div>
      </div>
      <Link
        href="/services"
        className="mx-auto hidden md:block font-semibold text-[12.38px] lg:text-[16.01px] xl:text-[20.42px] 3xl:text-[23.88px] desktop:text-[26.31px]
        hover:brightness-[80%] hover:scale-110 duration-[400ms]
        "
      >
        {explore}
      </Link>
    </div>
  );
};

export default Services;
