import { getPortfolioThumbnails } from "@/lib/contentful";
import React from "react";
import PortfolioBlock from "./PortfolioBlock";

interface Props {
  locale: string;
}

const PortfolioFeed = async ({ locale }: Props) => {
  if (locale === "uk") {
    locale = "en";
  }
  const thumbnails = await getPortfolioThumbnails(locale);
  return (
    <div
      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
  gap-y-[50px] lg:gap-y-[40px] xl:gap-y-[50px] 2xl:gap-y-[55px] 3xl:gap-y-[62px] desktop:gap-y-[68px] 
  gap-x-[40px] lg:gap-x-[34px] xl:gap-x-[44px] 3xl:gap-x-[51px] desktop:gap-x-[56px]
  mt-[40px] xl:mt-[50px] 2xl:mt-[55px] desktop:mt-[70px]
  "
    >
      {thumbnails?.map((thumbnail, key) => (
        <PortfolioBlock
          // @ts-expect-error
          path={"https:" + thumbnail.fields.image?.fields.file?.url}
          // @ts-expect-error
          text={thumbnail.fields.title}
          // @ts-expect-error
          type={thumbnail.fields.category}
          // @ts-expect-error
          link={thumbnail.fields.link}
          locale={locale}
          key={key}
        />
      ))}
    </div>
  );
};

export default PortfolioFeed;
