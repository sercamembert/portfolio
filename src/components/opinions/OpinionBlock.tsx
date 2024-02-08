import React from "react";
import OpinionAuthor from "./OpinionAuthor";

interface Props {
  text: string;
  name: string;
  desc: string;
  path: string;
}

const OpinionBlock = ({ text, name, desc, path }: Props) => {
  const background =
    "radial-gradient(161.21% 160.39% at 5.71% -44.13%, #363636 0%, rgba(26, 26, 26, 0.27) 100%)";
  const boldText = text.replace(
    /(ich pasji, determinacji i umiejętności.)|(Kreatywność, determinacja i chęć uczenia się od innych)|(piękną stronę internetową w bardzo szybkim czasie)/g,
    '<span class="font-semibold">$&</span>'
  );
  return (
    <div
      style={{
        background: background,
      }}
      className="flex flex-col gap-[12px] lg:gap-[16px] xl:gap-[21px] desktop:gap-[27px]
      p-[14px] lg:p-[18px] xl:p-[23px] 3xl:p-[25px] desktop:p-[30px]
      rounded-[7px] lg:rounded-[9px] xl:rounded-[11px] desktop:rounded-[15px]
      h-auto
      "
    >
      <p
        dangerouslySetInnerHTML={{ __html: boldText }}
        className="opacity-[66%] text-[15.68px] lg:text-[13px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[19px] desktop:text-[22px]"
      />

      <OpinionAuthor desc={desc} name={name} path={path} />
    </div>
  );
};

export default OpinionBlock;
