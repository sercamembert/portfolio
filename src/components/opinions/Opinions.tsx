import { useTranslations } from "next-intl";
import React from "react";
import OpinionsScroll from "./OpinionsScroll";
import OpinionBlock from "./OpinionBlock";

const Opinions = () => {
  const opinionsText = useTranslations("Opinions");

  return (
    <div className="flex flex-col padding gap-y-[7px] md:gap-y-[24px] lg:gap-y-[31px] xl:gap-y-[41px] 3xl:gap-y-[47px] desktop:gap-y-[53px]">
      <h2 className="text-center md:text-left font-bold text-[39.02px] md:text-[30px] lg:text-[39px] xl:text-[49.76px] 2xl:text-[52.55px] 3xl:text-[58.19px] desktop:text-[63.73px]">
        {opinionsText("title")}
      </h2>
      <OpinionsScroll>
        <div className="min-w-[850px] md:min-w-full grid grid-cols-3 gap-x-[35px] lg:gap-x-[44px] xl:gap-[56px] 2xl:gap-[59px] 3xl:gap-[62px] desktop:gap-[73px]">
          <div className="grid-item">
            <OpinionBlock
              text={opinionsText("text1")}
              name="Adrian Majewski"
              desc={opinionsText("adrian")}
              path="/images/opinions/adrian.png"
            />
          </div>
          <div className="grid-item">
            <OpinionBlock
              text={opinionsText("text2")}
              name="Tomasz Olszewki"
              desc={opinionsText("tomasz")}
              path="/images/opinions/tomasz.png"
            />
          </div>
          <div className="grid-item">
            <OpinionBlock
              text={opinionsText("text3")}
              name="Adam Kędzierski"
              desc={opinionsText("adam")}
              path="/images/opinions/adam.png"
            />
          </div>
        </div>
      </OpinionsScroll>
    </div>
  );
};

export default Opinions;
