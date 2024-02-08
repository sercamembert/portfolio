import React from "react";

interface Props {
  type: string;
}

const BlogPostType = ({ type }: Props) => {
  return (
    <div
      className="flex items-center justify-center bg-white text-black rounded-[5px] xl:rounded-[8px]
    font-medium text-[7px] md:text-[7px] xl:text-[9px] 2xl:text-[11px] desktop:text-[12px]
    max-w-[57px] md:max-w-[68px] xl:max-w-[86px] 2xl:max-w-[99px] desktop:max-w-[112px]
    min-h-[15px] md:min-h-[17px] xl:min-h-[22px] 2xl:min-h-[26px] desktop:min-h-[29px]
    md:hover:brightness-75 duration-300 cursor-pointer
    mt-[11px] lg:mt-[8px] xl:mt-[11px] 2xl:mt-[13px] desktop:mt-[15px]
    "
    >
      {type}
    </div>
  );
};

export default BlogPostType;
