// @ts-nocheck
import PortfolioBlock from "@/components/portfolio/PortfolioBlock";
import { getBlogPost, getPostThumbnails } from "@/lib/contentful";
import React from "react";
import { documentToReactComponents as renderRichText } from "@contentful/rich-text-react-renderer";
import Head from "next/head";
interface Props {}

const page = async ({ params: { locale, link } }: { params: any }) => {
  if (locale === "uk") {
    locale = "en";
  }

  const currentPost = await getBlogPost(locale, link);

  const post = {
    title: currentPost[0].fields.title,
    image: currentPost[0].fields.image?.fields.file?.url,
    content: currentPost[0].fields.content,
    category: currentPost[0].fields.category,
    time: currentPost[0].fields.time,
    seoDesc: currentPost[0].fields.seoDescription,
  };
  return (
    <>
      <div className="padding flex flex-col mb-[100px] mt-[100px] min-h-screen post">
        <h1 className="leading-tight uppercase font-extrabold text-center text-[45px] md:text-[70.1px] lg:text-[90.66px] xl:text-[116.48px] 2xl:text-[119.62px] 3xl:text-[135.99px] desktop:text-[149px] ">
          {post.title}
        </h1>
        {renderRichText(post.content)}
      </div>
    </>
  );
};

export default page;
