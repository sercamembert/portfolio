import React from "react";
import shadowImg from "../../public/images/team/shadow.svg";
import Image from "next/image";
import FilipImg from "../../public/images/team/Filip.png";
import MarcelImg from "../../public/images/team/Marcel.png";
interface Props {
  title: string;
}

const Team = ({ title }: Props) => {
  return (
    <div className="padding flex flex-col gap-y-[7px] md:gap-y-[24px] lg:gap-y-[31px] xl:gap-y-[41px] 3xl:gap-y-[47px] desktop:gap-y-[53px]">
      <h1 className="font-bold text-[39.02px] md:text-[30px] lg:text-[39px] xl:text-[49.76px] 2xl:text-[52.55px] 3xl:text-[58.19px] desktop:text-[63.73px] text-center md:text-left">
        {title}
      </h1>
      <div className="flex flex-col md:flex-row gap-y-[50px] justify-between md:gap-x-[127px] lg:gap-x-[163px] xl:gap-x-[208px] 2xl:gap-x-[215px] 3xl:gap-x-[243px] desktop:gap-x-[268px]">
        <div className="md:w-1/2 z-10 flex flex-col mx-auto">
          <Image
            src={FilipImg}
            alt="Filip Maszota"
            className="max-w-[360px] md:max-w-full w-full"
          />
          <h1 className="font-semibold text-[20px] md:text-[25.65px] lg:text-[33.18px] xl:text-[42.34px] 3xl:text-[49.51px] desktop:text-[54.53px]">
            Filip Maszota
          </h1>
          <p className="text-[15px] md:text-[17.82px] lg:text-[23.04px] xl:text-[29.4px] 3xl:text-[34.38px] desktop:text-[37.87px]">
            Full Stack Developer <br />
            Development / Tech site
          </p>
        </div>
        <Image
          src={shadowImg}
          alt="shadow"
          className="hidden z-0 absolute md:block left-1/2 -translate-x-1/2
          
          "
        />
        <div className="md:w-1/2 z-10 flex flex-col mx-auto">
          <Image
            src={MarcelImg}
            alt="Marcel Bogdan"
            className="max-w-[360px] md:max-w-full w-full"
          />
          <h1 className="font-semibold text-[20px] md:text-[25.65px] lg:text-[33.18px] xl:text-[42.34px] 3xl:text-[49.51px] desktop:text-[54.53px]">
            Marcel Bogdan
          </h1>
          <p className="text-[15px] md:text-[17.82px] lg:text-[23.04px] xl:text-[29.4px] 3xl:text-[34.38px] desktop:text-[37.87px]">
            UI/UX Designer <br />
            Content creator / Business advisor
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
