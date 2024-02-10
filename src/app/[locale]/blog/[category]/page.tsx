import PortfolioBlock from "@/components/portfolio/PortfolioBlock";
import { getPostThumbnails } from "@/lib/contentful";
import React from "react";
import BlogThumbnail from "@/components/blog/BlogThumbnail";
import { useTranslations } from "next-intl";
import BlogFeed from "@/components/blog/BlogFeed";
import BlogCategory from "@/components/blog/BlogCategory";
import BlogMain from "@/components/blog/BlogMain";
interface Props {}

const page = ({ params: { locale, category } }: { params: any }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const blogTranslation = useTranslations("Blog");

  return (
    <div className="padding flex flex-col mb-[100px] mt-[100px] min-h-screen">
      <h1 className="leading-tight font-extrabold text-[45px] md:text-[70.1px] lg:text-[90.66px] xl:text-[116.48px] 2xl:text-[119.62px] 3xl:text-[135.99px] desktop:text-[149px] ">
        {blogTranslation("title")}
      </h1>
      <p className="whitespace-break-spaces leading-tight font-medium text-[13px] md:text-[17.89px] lg:text-[23.14px] xl:text-[29.73px] 2xl:text-[30.53px] 3xl:text-[34.71px] desktop:text-[38.03px]">
        {blogTranslation("subtitle")}
      </p>
      <BlogMain locale={locale} category={category} />
    </div>
  );
};

export default page;
