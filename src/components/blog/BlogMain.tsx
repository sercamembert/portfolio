import React, { useState } from "react";
import BlogCategory from "./BlogCategory";
import BlogFeed from "./BlogFeed";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

interface Props {
  locale: string;
  category: string;
}

const BlogMain = ({ locale, category }: Props) => {
  const blogTranslation = useTranslations("Blog");
  return (
    <>
      <div className="flex justify-end gap-[5px] md:gap-[7px] xl:gap-[10px] 2xl:gap-[11px] my-[25px] xl:my-[35px] 2xl:my-[40px] desktop:my-[45px]">
        <BlogCategory category={blogTranslation("category1")} locale={locale} />
        <BlogCategory category={blogTranslation("category2")} locale={locale} />
        <BlogCategory category={blogTranslation("category3")} locale={locale} />
        <BlogCategory category={blogTranslation("category4")} locale={locale} />
        <BlogCategory category={blogTranslation("category5")} locale={locale} />
      </div>
      <BlogFeed
        locale={locale}
        category={category}
        message={blogTranslation("message")}
      />
    </>
  );
};

export default BlogMain;
