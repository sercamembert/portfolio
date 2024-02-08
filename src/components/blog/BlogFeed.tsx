import {
  getPostThumbnails,
  getPostThumbnailsWithCategory,
} from "@/lib/contentful";
import React from "react";
import BlogThumbnail from "./BlogThumbnail";

interface Props {
  locale: string;
  category: string;
  message: string;
}

const BlogFeed = async ({ locale, category, message }: Props) => {
  if (locale === "uk") {
    locale = "en";
  }

  let thumbnails;

  if (category === "all") {
    thumbnails = await getPostThumbnails(locale);
  } else {
    thumbnails = await getPostThumbnailsWithCategory(locale, category);
  }

  return (
    <>
      {thumbnails.length == 0 && (
        <p className="opacity-80 text-center text-[15px] 2xl:text-[19px] md:text-left ">
          {message}...
        </p>
      )}
      <div
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
gap-y-[50px] lg:gap-y-[40px] xl:gap-y-[50px] 2xl:gap-y-[55px] 3xl:gap-y-[62px] desktop:gap-y-[68px] 
gap-x-[40px] lg:gap-x-[34px] xl:gap-x-[44px] 3xl:gap-x-[51px] desktop:gap-x-[56px]
"
      >
        {thumbnails?.map((thumbnail, key) => (
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
    </>
  );
};

export default BlogFeed;
