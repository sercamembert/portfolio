import React from "react";
import shadowImg from "../../public/images/team/shadow.svg";
import Image from "next/image";
import FilipImg from "../../public/images/team/filip.webp";
import MarcelImg from "../../public/images/team/marcel.webp";
interface Props {
  title: string;
}

const Team = ({ title }: Props) => {
  return (
    <div
      id="team"
      className="padding flex flex-col gap-y-[7px] md:gap-y-[24px] lg:gap-y-[31px] xl:gap-y-[41px] 3xl:gap-y-[47px] desktop:gap-y-[53px]"
    >
      <h2 className="font-bold text-[39.02px] md:text-[30px] lg:text-[39px] xl:text-[49.76px] 2xl:text-[52.55px] 3xl:text-[58.19px] desktop:text-[63.73px] text-center md:text-left">
        {title}
      </h2>
      <div className="flex flex-col md:flex-row gap-y-[50px] justify-between">
        <div className="md:w-1/2 z-10 flex flex-col mx-auto md:mx-0 max-w-[360px] md:max-w-[270.8px] lg:max-w-[350px] xl:max-w-[446.88px] 2xl:max-w-[462.24px] 3xl:max-w-[493.7px] desktop:max-w-[575.65px]">
          <Image src={FilipImg} alt="Filip Maszota" className="w-full" />
          <h3 className="font-semibold text-[20px] md:text-[25.65px] lg:text-[33.18px] xl:text-[42.34px] 3xl:text-[49.51px] desktop:text-[54.53px]">
            Filip Maszota
          </h3>
          <p className="text-[15px] md:text-[17.82px] lg:text-[23.04px] xl:text-[29.4px] 3xl:text-[34.38px] desktop:text-[37.87px]">
            Full Stack Developer <br />
            Development / Tech site
          </p>
        </div>
        <Image
          src={shadowImg}
          alt="shadow"
          className="hidden z-0 absolute md:block left-1/2 -translate-x-1/2"
        />
        <div className="w-full z-10 flex flex-col mx-auto md:mx-0 max-w-[360px] md:max-w-[270.8px] lg:max-w-[350px] xl:max-w-[446.88px] 2xl:max-w-[462.24px] 3xl:max-w-[493.7px] desktop:max-w-[575.65px]">
          <Image src={MarcelImg} alt="Marcel Bogdan" className="w-full" />
          <h3 className="font-semibold text-[20px] md:text-[25.65px] lg:text-[33.18px] xl:text-[42.34px] 3xl:text-[49.51px] desktop:text-[54.53px] text-left">
            Marcel Bogdan
          </h3>
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
