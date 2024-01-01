import React from "react";
import Marquee from "react-fast-marquee";
interface Props {
  talk: string;
}

const MarqueeText = ({ talk }: Props) => {
  return (
    <Marquee
      className="mb-[90px] md:mb-[110px] lg:mb-[170px] xl:mb-[220px] 2xl:mb-[280px]"
      speed={150}
      pauseOnHover
    >
      <h1
        className="font-bold text-[27.23px] md:text-[49.02px] lg:text-[65.36px] xl:text-[78.98px] 2xl:text-[88px] 3xl:text-[95px]
        flex
      "
      >
        <h1 className="cursor-pointer hover:text-primary duration-300">
          {talk}
        </h1>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h1 className="cursor-pointer hover:text-primary duration-300">
          {talk}
        </h1>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h1 className="cursor-pointer hover:text-primary duration-300">
          {talk}
        </h1>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </h1>
    </Marquee>
  );
};

export default MarqueeText;
