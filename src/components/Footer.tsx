import Image from "next/image";
import React from "react";
import copyImg from "../../public/images/copy.svg";

interface Props {
  contact: string;
  services: string;
  websites: string;
  apps: string;
  duo: string;
  unique: string;
  about: string;
  renovation: string;
  terms: string;
  privacy: string;
  locale: string;
}

const Footer = ({
  contact,
  services,
  websites,
  apps,
  duo,
  unique,
  about,
  renovation,
  terms,
  privacy,
  locale,
}: Props) => {
  return (
    <>
      <FooterMain
        contact={contact}
        apps={services}
        duo={duo}
        services={services}
        unique={unique}
        websites={websites}
        about={about}
        renovation={renovation}
        privacy={privacy}
        terms={terms}
        locale={locale}
      />
      <FooterMobile
        contact={contact}
        apps={services}
        duo={duo}
        services={services}
        unique={unique}
        websites={websites}
        about={about}
        renovation={renovation}
        privacy={privacy}
        terms={terms}
        locale={locale}
      />
    </>
  );
};

const FooterMobile = ({
  contact,
  services,
  websites,
  apps,
  duo,
  unique,
  about,
  renovation,
  terms,
  privacy,
  locale,
}: Props) => {
  return (
    <div className="flex md:hidden flex-col mt-[18px] ">
      <div className="flex flex-col padding gap-y-[15px]">
        <h1 className="font-bold text-[14px]">{contact}</h1>
        <div className="flex gap-[3px]">
          <p className="text-[11px]">support@outofplace.space</p>
          <Image
            src={copyImg}
            alt="support@outofplace.space"
            width={14}
            height={14}
            className="w-[14px]"
          />
        </div>
        <p className="opacity-30 text-[9px] mb-[8px]">
          © outofplace 2023 All Rights Reserved
        </p>
      </div>
      <div className="flex flex-col">
        <div className="py-[12px] border-y border-footer">
          <details className="group padding">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span className="font-bold text-[14px]">{services}</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="group-open:animate-fadeIn flex flex-col mt-[12px] gap-[11px]">
              <p className="text-[11px] font-medium">{websites}</p>
              <p className="text-[11px] font-medium">{apps}</p>
              <p className="text-[11px] font-medium">Design</p>
            </div>
          </details>
        </div>
        <div className="py-[12px] border-b border-footer">
          <details className="group padding">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span className="font-bold text-[14px]">{about}</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="group-open:animate-fadeIn flex flex-col mt-[12px] gap-[11px]">
              <p className="text-[11px] font-medium">{duo}</p>
              <p className="text-[11px] font-medium">{unique}</p>
              <p className="text-[11px] font-medium">The creative Experience</p>
            </div>
          </details>
        </div>
        <div className="py-[12px] border-b border-footer">
          <details className="group padding">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span className="font-bold text-[14px]">Portfolio</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="group-open:animate-fadeIn flex flex-col mt-[12px] gap-[11px]">
              <p className="text-[11px] font-medium">{renovation}</p>
              <p className="text-[11px] font-medium">Quizportal</p>
              <p className="text-[11px] font-medium">Pous</p>
              <p className="text-[11px] font-medium">Agromalz</p>
            </div>
          </details>
        </div>
        <div className="flex pt-[40px] pb-[25px] padding justify-end gap-[36px]">
          <p className="font-medium text-[9px] text-footer">{terms}</p>
          <a
            className="font-medium text-[9px] text-footer"
            href={
              locale === "en"
                ? "/statue/statue_en.pdf"
                : "/statue/statue_pl.pdf"
            }
            target="_blank"
          >
            {privacy}
          </a>
        </div>
      </div>
    </div>
  );
};

const FooterMain = ({
  contact,
  services,
  websites,
  apps,
  duo,
  unique,
  about,
  renovation,
  terms,
  privacy,
  locale,
}: Props) => {
  return (
    <div className="hidden md:flex mt-[22px] md:mt-[66px] lg:mt-[79px] desktop:mt-[97px] border-t border-footer w-full h-[141.93px] md:h-[290.67px] lg:h-[387.56px] xl:h-[506px] 2xl:h-[545px] 3xl:h-[582.09px] desktop:h-[650.97px">
      <div
        className="flex flex-col w-[37.6%] pl-[39px] md:pl-[80px] lg:pl-[107px] xl:pl-[134px] 2xl:pl-[151px] 3xl:pl-[161px] desktop:pl-[181px]
        pt-[27px] md:pt-[56px] lg:pt-[75px] xl:pt-[98px] 2xl:pt-[106px] 3xl:pt-[113px] desktop:pt-[126px]"
      >
        <h1 className="font-bold text-[6.6px] md:text-[13.51px] lg:text-[18.02px] xl:text-[22.52px] 2xl:text-[25.34px] 3xl:text-[27.06px] desktop:text-[30px]">
          {contact}
        </h1>
        <div className="flex gap-[3px] md:gap-[6px] mt-[7px] md:mt-[15px] lg:mt-[19px] xl:mt-[26px] 2xl:mt-[28px] 3xl:mt-[30px] desktop:mt-[33px]">
          <p className="link-text">support@outofplace.space</p>
          <Image
            src={copyImg}
            alt="support@outofplace.space"
            width={31.2}
            height={31.06}
            className="w-[6.77px] md:w-[13.87px] lg:w-[18.38px] xl:w-[22.97px] 2xl:w-[26px] 3xl:w-[28px] desktop:w-[31px]"
          />
        </div>
        <p
          className="opacity-30 text-[4.58px] md:text-[9.39px] lg:text-[12.52px] xl:text-[15.64px] 2xl:text-[17.6px] 3xl:text-[18.8px] desktop:text-[21.02px]
          mt-[27px] md:mt-[56px] lg:mt-[75px] xl:mt-[98px] 2xl:mt-[106px] 3xl:mt-[113px] desktop:mt-[126px]"
        >
          © outofplace 2023 All Rights Reserved
        </p>
      </div>
      <div className="flex flex-col justify-between w-[62.4%] border-l border-footer">
        <div
          className="pt-[27px] md:pt-[56px] lg:pt-[75px] xl:pt-[98px] 2xl:pt-[106px] 3xl:pt-[113px] desktop:pt-[126px]
          grid grid-cols-3 gap-x-[25px] md:gap-x-[51px] lg:gap-x-[68px] xl:gap-x-[85px] 2xl:gap-x-[96px] 3xl:gap-x-[102px] desktop:gap-x-[115px]
          pl-[6px] md:pl-[11px] lg:pl-[15px] xl:pl-[19px] 2xl:pl-[21px] 3xl:pl-[25px]"
        >
          <div className="links-col">
            <h1 className="font-bold text-[6.6px] md:text-[13.51px] lg:text-[18.02px] xl:text-[22.52px] 2xl:text-[25.34px] 3xl:text-[27.06px] desktop:text-[30px]">
              {services}
            </h1>
            <p className="link-text">{websites}</p>
            <p className="link-text">{apps}</p>
            <p className="link-text">Design</p>
          </div>
          <div className="links-col">
            <h1 className="font-bold text-[6.6px] md:text-[13.51px] lg:text-[18.02px] xl:text-[22.52px] 2xl:text-[25.34px] 3xl:text-[27.06px] desktop:text-[30px]">
              {about}
            </h1>
            <p className="link-text">{duo}</p>
            <p className="link-text">{unique}</p>
            <p className="link-text">The creative Experience</p>
          </div>
          <div className="links-col">
            <h1 className="font-bold text-[6.6px] md:text-[13.51px] lg:text-[18.02px] xl:text-[22.52px] 2xl:text-[25.34px] 3xl:text-[27.06px] desktop:text-[30px]">
              Portfolio
            </h1>
            <p className="link-text">{renovation}</p>
            <p className="link-text">Quizportal</p>
            <p className="link-text">Pous</p>
          </div>
        </div>
        <div
          className="flex justify-end opacity-30 items-center gap-[7px] md:gap-[16px] lg:gap-[20px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[32px] desktop:gap-[36px]
          pb-[12px] md:pb-[27px] lg:pb-[35px] xl:pb-[45px] 2xl:pb-[49px] 3xl:pb-[52px] desktop:pb-[59px] pr-[17.4%]"
        >
          <p className="terms">{terms}</p>
          <a
            className="terms"
            href={
              locale === "en"
                ? "/statue/statue_en.pdf"
                : "/statue/statue_pl.pdf"
            }
            target="_blank"
          >
            {privacy}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
