import React from "react";
import Image from "next/image";
interface Props {
  name: string;
  path: string;
  desc: string;
}

const OpinionAuthor = ({ name, path, desc }: Props) => {
  return (
    <div className="flex gap-[8px] xl:gap-[10px] desktop:gap-[13px]  items-center">
      <Image
        src={path}
        alt="Avatar"
        width={50}
        height={50}
        className="rounded-[50%] aspect-square w-[23px] lg:w-[30px] xl:w-[40px] 3xl:w-[43px] desktop:w-[50px] "
      />
      <div className="flex flex-col justify-center">
        <p className="font-medium text-[11px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] desktop:text-[14px] tracking-[0.5px]">
          {name}
        </p>
        <p className="font-light text-[10px] lg:text-[9px] xl:text-[10px] 2xl:text-[11px] desktop:text-[12px] opacity-80">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default OpinionAuthor;
