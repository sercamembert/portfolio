import Link from "next/link";
import React from "react";

interface Props {
  category: string;
  locale: string;
}

const BlogCategory = ({ category, locale }: Props) => {
  return (
    <Link
      href={`/${locale}/blog/${category}`}
      className="flex items-center justify-center bg-white text-black rounded-[3px] xl:rounded-[6px]
    font-medium text-[8px] md:text-[8px] xl:text-[10px] 2xl:text-[12px] desktop:text-[15px]
    min-w-[57px] md:min-w-[68px] xl:min-w-[86px] 2xl:min-w-[99px] desktop:min-w-[115px]
    min-h-[18px] md:min-h-[20px] xl:min-h-[25px] 2xl:min-h-[30px] desktop:min-h-[37px]
    md:hover:brightness-75 duration-300 cursor-pointer
    "
    >
      {category}
    </Link>
  );
};

export default BlogCategory;
