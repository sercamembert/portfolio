import React from "react";
import { useTranslations } from "next-intl";
import PortfolioBlock from "@/components/portfolio/PortfolioBlock";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Poznaj nasze usługi tworzenia profesjonalnych stron internetowych. Skontaktuj się z nami, aby dowiedzieć się więcej.",
};
export const runtime = "edge";
const page = ({ params: { locale } }: { params: any }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const portfolioText = useTranslations("Portfolio");

  return (
    <div className="padding flex flex-col mb-[100px] mt-[100px] min-h-screen">
      <h1 className="leading-tight uppercase font-extrabold text-center text-[45px] md:text-[70.1px] lg:text-[90.66px] xl:text-[116.48px] 2xl:text-[119.62px] 3xl:text-[135.99px] desktop:text-[149px] ">
        Portfolio
      </h1>
      <p className="whitespace-break-spaces leading-tight text-center font-medium text-[13px] md:text-[17.89px] lg:text-[23.14px] xl:text-[29.73px] 2xl:text-[30.53px] 3xl:text-[34.71px] desktop:text-[38.03px]">
        {portfolioText("subtitle")}
      </p>
      <div
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      gap-y-[50px] lg:gap-y-[40px] xl:gap-y-[50px] 2xl:gap-y-[55px] 3xl:gap-y-[62px] desktop:gap-y-[68px] 
      gap-x-[40px] lg:gap-x-[34px] xl:gap-x-[44px] 3xl:gap-x-[51px] desktop:gap-x-[56px]
      mt-[45px] md:mt-[52px] xl:mt-[71px] 3xl:mt-[80px] desktop:mt-[90px]
      "
      >
        <PortfolioBlock
          path="/images/portfolio/renovation.png"
          type={portfolioText("websites")}
          text={portfolioText("renovations")}
          locale={locale}
          link="renovations"
        />
        <PortfolioBlock
          path="/images/portfolio/quizportal.png"
          type={portfolioText("company")}
          text={portfolioText("quizportal")}
          locale={locale}
          link="quizportal"
        />
        <PortfolioBlock
          path="/images/portfolio/clothes.png"
          type="Design"
          text={portfolioText("clothes")}
          locale={locale}
          link="pous"
        />
        <PortfolioBlock
          path="/images/portfolio/real.png"
          type={portfolioText("webApps")}
          text={portfolioText("real")}
          locale={locale}
          link="real"
        />
        <PortfolioBlock
          path="/images/portfolio/roof.png"
          type={portfolioText("websites")}
          text={portfolioText("roof")}
          locale={locale}
          link="roof"
        />
        <PortfolioBlock
          path="/images/portfolio/recipes.png"
          type={portfolioText("webApps")}
          text={portfolioText("recipes")}
          locale={locale}
          link="recipes"
        />
      </div>
    </div>
  );
};

export default page;
