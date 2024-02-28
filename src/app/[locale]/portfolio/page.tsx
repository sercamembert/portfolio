import React from "react";
import { useTranslations } from "next-intl";
import PortfolioFeed from "@/components/portfolio/PortfolioFeed";

const page = ({ params: { locale, link } }: { params: any }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const blogTranslation = useTranslations("Portfolio");

  return (
    <div className="padding flex flex-col mb-[100px] mt-[100px] min-h-screen">
      <h1 className="leading-tight font-extrabold text-[45px] md:text-[70.1px] lg:text-[90.66px] xl:text-[116.48px] 2xl:text-[119.62px] 3xl:text-[135.99px] desktop:text-[149px] text-center ">
        Portfolio
      </h1>
      <p className="whitespace-break-spaces leading-tight font-medium text-[13px] md:text-[17.89px] lg:text-[23.14px] xl:text-[29.73px] 2xl:text-[30.53px] 3xl:text-[34.71px] desktop:text-[38.03px] text-center ">
        {blogTranslation("subtitle")}
      </p>
      <PortfolioFeed locale={locale} />
    </div>
  );
};

export default page;
