import React from "react";
import Image from "next/image";

import adsImg from "../../public/images/tech/ads.png";
import figmaImg from "../../public/images/tech/figma.png";
import flutterImg from "../../public/images/tech/flutter.png";
import googleImg from "../../public/images/tech/google.png";
import nextImg from "../../public/images/tech/next.png";
import reactImg from "../../public/images/tech/react.png";
import tailwindImg from "../../public/images/tech/tailwind.png";
import typescriptImg from "../../public/images/tech/typescript.png";

interface Props {
  title: string;
}

const TechStack = ({ title }: Props) => {
  return (
    <div className=" padding flex flex-col gap-y-[12px] md:gap-y-[23px] lg:gap-y-[30px] xl:gap-y-[40px] 3xl:gap-y-[46px] desktop:gap-y-[51px]">
      <h1 className="text-tech font-bold text-[12px] md:text-[25.27px] lg:text-[32px] xl:text-[41.7px] 2xl:text-[43.79px] 3xl:text-[48.76px] desktop:text-[53.71px]">
        {title}
      </h1>
      <div className="flex justify-between items-center">
        <Image
          src={nextImg}
          alt="Next.js"
          className="w-[19.29px] md:w-[38.42px] lg:w-[49.69px] xl:w-[63.4px] 2xl:w-[66.65px] 3xl:w-[74.13px] desktop:w-[81.66px]"
        />
        <Image
          src={reactImg}
          alt="React"
          className="w-[19.29px] md:w-[38.42px] lg:w-[49.69px] xl:w-[63.4px] 2xl:w-[66.65px] 3xl:w-[74.13px] desktop:w-[81.66px]"
        />
        <Image
          src={typescriptImg}
          alt="Typescript"
          className="w-[19.29px] md:w-[38.42px] lg:w-[49.69px] xl:w-[63.4px] 2xl:w-[66.65px] 3xl:w-[74.13px] desktop:w-[81.66px]"
        />
        <Image
          src={tailwindImg}
          alt="tailwind CSS"
          className="w-[19.29px] md:w-[38.42px] lg:w-[49.69px] xl:w-[63.4px] 2xl:w-[66.65px] 3xl:w-[74.13px] desktop:w-[81.66px]
          h-[11.6px] md:h-[23.07px] lg:h-[29.85px] xl:h-[38.08px] 2xl:h-[40.09px] 3xl:h-[44.64px] desktop:h-[49.05px]
          "
        />
        <Image
          src={figmaImg}
          alt="figma"
          className="w-[19.29px] md:w-[38.42px] lg:w-[49.69px] xl:w-[63.4px] 2xl:w-[66.65px] 3xl:w-[74.13px] desktop:w-[81.66px]"
        />
        <Image
          src={flutterImg}
          alt="flutter"
          className="w-[77.66px] md:w-[154.86px] lg:w-[200.29px] xl:w-[255.55px] 2xl:w-[268.36px] 3xl:w-[298.83px] desktop:w-[329.19px]"
        />
        <Image
          src={adsImg}
          alt="google ads"
          className="w-[19.29px] md:w-[38.42px] lg:w-[49.69px] xl:w-[63.4px] 2xl:w-[66.65px] 3xl:w-[74.13px] desktop:w-[81.66px]
          h-[24.05px] md:h-[47.95px] lg:h-[62.02px] xl:h-[79.11px] 2xl:h-[83.08px] 3xl:h-[92.52px] desktop:h-[101.92px]
          "
        />
        <Image
          src={googleImg}
          alt="google"
          className="w-[56.04px] md:w-[111.75px] lg:w-[144.53px] xl:w-[184.4px] 2xl:w-[193.65px] 3xl:w-[215.64px] desktop:w-[237.54px]
          "
        />
      </div>
    </div>
  );
};

export default TechStack;
