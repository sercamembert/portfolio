import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogPostType from "./BlogThumbnailCategory";
import { format, isValid, parseISO } from "date-fns";
import BlogAuthor from "./BlogAuthor";
const BlogThumbnail = ({
  path,
  type,
  title,
  locale,
  link,
  subtitle,
  time,
  authorAvatar,
  authorName,
  date,
}: any) => {
  const parsedDate = parseISO(date);

  const formattedDate = format(parsedDate, "dd.MM.yyyy");
  return (
    <Link
      href={`/${locale}/article/${link}`}
      className="flex flex-col w-full hover:brightness-75 duration-300"
      title="Projekt"
    >
      <div className="relative">
        <Image
          src={path}
          alt="Portoflio project"
          width={1000}
          height={1000}
          className="w-full rounded-[9.14px] md:rounded-[5.86px] lg:rounded-[7.58px] xl:rounded-[10px] 3xl:rounded-[12px] "
        />
        <div className="flex drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] gap-[4px] absolute opacity-80 items-center bottom-[5px] 2xl:bottom-[8px] left-[7px] 2xl:left-[10px]">
          <Image
            src="/images/icons/clock.png"
            alt="Clock"
            width={30}
            height={30}
            className="w-[17px] xl:w-[20px] 2xl:w-[22px] desktop:w-[24px]"
          />
          <p className="font-medium text-[12px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] desktop:text-[15px] ">
            {time}
          </p>
        </div>
      </div>

      <BlogPostType type={type} />
      <p className="font-bold text-[21px] lg:text-[17px] xl:text-[22px] 2xl:text-[25px] desktop:text-[28px] leading-tight mt-[6px] 2xl:mt-[8px]">
        {title}
      </p>
      <p className="font-medium text-[12px] lg:text-[9px] xl:text-[12px] 2xl:text-[15px] desktop:text-[17px] leading-tight mt-[3px] 2xl:mt-[5px]">
        {subtitle}
      </p>
      <BlogAuthor
        authorAvatar={authorAvatar}
        authorName={authorName}
        formattedDate={formattedDate}
      />
    </Link>
  );
};

export default BlogThumbnail;
