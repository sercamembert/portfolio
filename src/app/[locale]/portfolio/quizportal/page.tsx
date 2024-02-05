import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import img from "../../../../../public/images/quizportal/quizportal.png";
export const metadata = {
  description:
    "Tworzenie tanich stron internetowych | outofplace - Quizportal.pl. Odkryj QuizPortal i jego funkcje. Skontaktuj się z nami już dziś.",
};
const page = ({ params: { locale } }: { params: any }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const text = useTranslations("Quizportal");

  return (
    <div className="padding flex flex-col mb-[150px] md:mb-[300px] mt-[100px] min-h-screen">
      <h1 className="leading-tight font-extrabold text-center text-[45px] md:text-[70.1px] lg:text-[90.66px] xl:text-[116.48px] 2xl:text-[119.62px] 3xl:text-[135.99px] desktop:text-[149px] ">
        Quizportal.pl
      </h1>
      <p className="whitespace-break-spaces leading-tight text-center font-medium text-[13px] md:text-[17.89px] lg:text-[23.14px] xl:text-[29.73px] 2xl:text-[30.53px] 3xl:text-[34.71px] desktop:text-[38.03px]">
        {text("subtitle")}
      </p>
      <Image
        src={img}
        className="w-full sm:w-[72%] mx-auto mt-[11px] md:mt-[22px] lg:mt-[28px] xl:mt-[36px] 2xl:mt-[41px] desktop:mt-[46px]
        mb-[30px] md:mb-[61px] lg:mb-[80px] xl:mb-[102px] 2xl:mb-[116px] desktop:mb-[130px]
        "
        fetchPriority="high"
        alt="Tworzenie tanich stron internetowych | outofplace"
      />

      <div>
        <h2 className="portfolio-heading">{text("whatIsQuizportal")}</h2>
        <p className="portfolio-text">{text("QuizPortal")}</p>
      </div>

      <h2 className="portfolio-heading mt-[30px] md:mt-[61px] lg:mt-[80px] xl:mt-[90px] 3xl:mt-[100px]">
        {text("KeyFeatures")}
      </h2>

      <div className="mt-[10px] lg:mt-[20px] flex flex-col gap-y-[30px] lg:gap-y-[50px]">
        <div className="flex flex-col gap-y-[10px]">
          <h3 className="portfolio-heading2">
            {text("FlashcardCreationTitle")}
          </h3>
          <p className="portfolio-text">{text("FlashcardCreation")}</p>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <h3 className="portfolio-heading2">
            {text("EditingAndPersonalizationTitle")}
          </h3>
          <p className="portfolio-text">{text("EditingAndPersonalization")}</p>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <h3 className="portfolio-heading2">
            {text("InteractiveLearningTitle")}
          </h3>
          <p className="portfolio-text">{text("InteractiveLearning")}</p>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <h3 className="portfolio-heading2">
            {text("OnlineAccessibilityTitle")}
          </h3>
          <p className="portfolio-text">{text("OnlineAccessibility")}</p>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <h3 className="portfolio-heading2">
            {text("CollaborationAndSharingTitle")}
          </h3>
          <p className="portfolio-text">{text("CollaborationAndSharing")}</p>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <h3 className="portfolio-heading2">
            {text("ProgressMonitoringTitle")}
          </h3>
          <p className="portfolio-text">{text("ProgressMonitoring")}</p>
        </div>
      </div>

      <div className="mt-[60px] md:mt-[100px] lg:mt-[120px]">
        <Image
          src="/images/quizportal/logo.png"
          alt="Quizportal.pl"
          width={300}
          height={80}
          className="mx-auto mb-[10px] w-[160px] md:w-[200px] lg:w-[250px] 2xl:w-[290px]"
        />
        <p className="portfolio-text text-center">
          {text("DevelopmentStatus")}
        </p>
      </div>
    </div>
  );
};

export default page;
