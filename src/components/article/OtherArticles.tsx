// @ts-nocheck
"use client";
import { useTranslations } from "next-intl";
import React from "react";
import OpinionsScroll from "../opinions/OpinionsScroll";
import BlogThumbnail from "../blog/BlogThumbnail";

const OtherArticles = ({ otherThumbnail, locale }: any) => {
  const articleTranslation = useTranslations("Article");
  return (
    <div className="padding my-[30px] md:my-[62px] lg:my-[83px] xl:my-[104px] 2xl:my-[120px]">
      <p
        className="text-center font-semibold text-[15px] lg:text-[22px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[34px] desktop:text-[40px]
      mb-[37px] md:mb-[49px] lg:mb-[62px] xl:mb-[69px] 2xl:mb-[74px]
      "
      >
        {articleTranslation("other")}
      </p>
      <OpinionsScroll>
        <div className="min-w-[850px] md:min-w-full grid grid-cols-3 gap-x-[35px] lg:gap-x-[44px] xl:gap-[56px] 2xl:gap-[59px] 3xl:gap-[62px] desktop:gap-[73px]">
          {otherThumbnail?.map((thumbnail, key) => (
            <BlogThumbnail
              // @ts-expect-error
              path={"https:" + thumbnail.fields.image?.fields.file?.url}
              type={thumbnail.fields.category}
              title={thumbnail.fields.title}
              locale={locale}
              key={key}
              link={thumbnail.fields.link}
              subtitle={thumbnail.fields.subtitle}
              time={thumbnail.fields.time}
              authorAvatar={
                // @ts-expect-error
                "https:" + thumbnail.fields.authorAvatar?.fields.file?.url
              }
              authorName={thumbnail.fields.authorName}
              date={thumbnail.fields.date}
            />
          ))}
        </div>
      </OpinionsScroll>
    </div>
  );
};

export default OtherArticles;
