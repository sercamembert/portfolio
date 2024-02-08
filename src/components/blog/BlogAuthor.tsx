import React from "react";
import Image from "next/image";
interface Props {}

const BlogAuthor = ({ authorAvatar, authorName, formattedDate }: any) => {
  return (
    <div className="flex mt-[11px] 2xl:mt-[14px] gap-[10px] desktop:gap-[12px]">
      <Image
        src={authorAvatar}
        alt="Avatar"
        width={45}
        height={45}
        className="rounded-[50%] aspect-square w-[35.09px] lg:w-[27px] xl:w-[35px] 2xl:w-[40px] desktop:w-[45px]"
      />
      <div className="flex flex-col justify-center">
        <p className="font-medium text-[11px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] desktop:text-[14px] tracking-[0.5px]">
          {authorName}
        </p>
        <p className="font-light text-[10px] lg:text-[9px] xl:text-[10px] 2xl:text-[11px] desktop:text-[12px]">
          {formattedDate}
        </p>
      </div>
    </div>
  );
};

export default BlogAuthor;
