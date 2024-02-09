import React from "react";
import Image from "next/image";
interface Props {}

const ArticleAuthor = ({ authorAvatar, authorName, time }: any) => {
  return (
    <div className="flex mt-[10px] md:mt-[15px] mb-[11px] md:mb-[23px] lg:mb-[31px] xl:mb-[39px] 2xl:mb-[44px] desktop:mb-[47px] gap-[10px] desktop:gap-[12px]">
      <Image
        src={authorAvatar}
        alt="Avatar"
        width={45}
        height={45}
        className="rounded-[50%] aspect-square w-[23.09px] md:w-[29px] lg:w-[38px] xl:w-[42px] 2xl:w-[46px] desktop:w-[50px]"
      />
      <div className="flex flex-col justify-center">
        <p className="font-medium text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] desktop:text-[16px] tracking-[0.5px]">
          {authorName}
        </p>
        <p className="font-light text-[7px] md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] desktop:text-[15px]">
          {time}
        </p>
      </div>
    </div>
  );
};

export default ArticleAuthor;
