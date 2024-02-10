// @ts-nocheck
import { getBlogPost, getOtherThumbnails } from "@/lib/contentful";
import React from "react";
import { documentToReactComponents as renderRichText } from "@contentful/rich-text-react-renderer";
import BlogAuthor from "@/components/blog/BlogAuthor";
import { format, parseISO } from "date-fns";
import OpinionsScroll from "@/components/opinions/OpinionsScroll";
import BlogThumbnail from "@/components/blog/BlogThumbnail";
import Image from "next/image";
import ArticleAuthor from "@/components/article/ArticleAuthor";
import { useTranslations } from "next-intl";
import OtherArticles from "@/components/article/OtherArticles";
const page = async ({ params: { locale, link } }: { params: any }) => {
  if (locale === "uk") {
    locale = "en";
  }

  const currentPost = await getBlogPost(locale, link);
  const otherThumbnail = await getOtherThumbnails(locale);
  const post = {
    title: currentPost[0].fields.title,
    entryText: currentPost[0].fields.entryText,
    image: currentPost[0].fields.image?.fields.file?.url,
    content: currentPost[0].fields.content,
    category: currentPost[0].fields.category,
    time: currentPost[0].fields.time,
    seoDesc: currentPost[0].fields.seoDescription,
    authorName: currentPost[0].fields.authorName,
    authorAvatar: currentPost[0].fields.authorAvatar?.fields.file?.url,
    date: currentPost[0].fields.date,
  };

  const parsedDate = parseISO(post.date);

  const formattedDate = format(parsedDate, "dd.MM.yyyy");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <>
      <div className="blog-padding flex flex-col mb-[100px] mt-[100px] lg:mt-[150px] min-h-screen">
        <h1 className="leading-tight font-semibold text-left text-[23px] md:text-[25px] lg:text-[34px] xl:text-[43px] 2xl:text-[48px] 3xl:text-[51px] desktop:text-[57px] ">
          {post.title}
        </h1>
        <ArticleAuthor
          authorAvatar={"https:" + post.authorAvatar}
          authorName={post.authorName}
          time={post.time}
        />

        <p className="text-[15px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[25px] desktop:text-[28px] opacity-80">
          {post.entryText}
        </p>
        <Image
          src={"https:" + post.image}
          alt={post.title}
          width={1120}
          height={562}
          className="w-full rounded-[6px] md:rounded-[13px] lg:rounded-[18px] xl:rounded-[22px] 2xl:rounded-[25px] desktop:rounded-[30px]
          mt-[30px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[60px] desktop:mt-[67px]
          "
        />
        <div className="post">{renderRichText(post.content)}</div>

        <p
          className="opacity-80 text-[15px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[25px] desktop:text-[28px]
        mt-[30px] md:mt-[50px] lg:mt-[66px] xl:mt-[83px] 2xl:mt-[93px] 3xl:mt-[100px] desktop:mt-[112px]"
        >
          {formattedDate}
        </p>
      </div>
      <OtherArticles otherThumbnail={otherThumbnail} locale={locale} />
    </>
  );
};

export default page;
