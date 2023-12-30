import React from "react";
import Image from "next/image";
interface Props {
  notice: string;
  noticetext: string;
  eye: string;
  catchtext: string;
}

const Creative = ({ notice, noticetext, eye, catchtext }: Props) => {
  return (
    <div className="padding flex flex-col my-[200px] gap-y-[7px] md:gap-y-[24px] lg:gap-y-[31px] xl:gap-y-[41px] 3xl:gap-y-[47px] desktop:gap-y-[53px]">
      <div className="flex gap-1">
        <h1 className="text-[27px] font-bold md:title">The</h1>
        <Image
          src="/images/creative/title.png"
          alt="The creative experience"
          width={252.25}
          height={77.37}
          className="w-[112.4px] md:w-[118.67px] lg:w-[153.4px] xl:w-[195.72px] 2xl:w-[211.93px] 3xl:w-[228.87px] desktop:w-[252.25px]"
        />
        <h1 className="text-[27px] font-bold md:title">Experience</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-y-[23px] md:gap-y-0 md:gap-x-[66px] lg:gap-x-[85px] xl:gap-x-[114px] 2xl:gap-x-[124px] 3xl:gap-x-[134px] desktop:gap-x-[147px]">
        <Image
          src="/images/creative/creative.png"
          alt="The creative experience"
          width={357.08}
          height={558.24}
          className="mx-auto md:mx-0 w-[114px] md:w-[167.98px] lg:w-[217.15px] xl:w-[277.05px] 2xl:w-[300px] 3xl:w-[323.97px] desktop:w-[357.08px]"
        />
        <div className="flex flex-col gap-y-[23px] md:gap-y-[28px] lg:gap-y-[31px] xl:gap-y-[36px] 2xl:gap-y-[39px] 3xl:gap-y-[41px] desktop:gap-y-[80px] justify-center">
          <div>
            <h1 className="font-semibold text-[18.82px] md:text-[24.52px] lg:text-[31.7px] xl:text-[40.44px] 2xl:text-[43.79px] 3xl:text-[47.29px] desktop:text-[52.12px]">
              {notice}
            </h1>
            <p className="creative-text">{noticetext}</p>
          </div>
          <div>
            <h1 className="font-semibold text-[18.82px] md:text-[24.52px] lg:text-[31.7px] xl:text-[40.44px] 2xl:text-[43.79px] 3xl:text-[47.29px] desktop:text-[52.12px]">
              {eye}
            </h1>
            <p className="creative-text">{catchtext}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creative;
