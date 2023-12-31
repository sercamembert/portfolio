import React from "react";
import { UniqueBlock, UniqueYears } from "./UniqueBlock";

interface Props {
  title: string;
  projects: string;
  years: string;
  commitment: string;
  text: string;
  description: string;
}

const Unique = ({
  title,
  projects,
  years,
  commitment,
  text,
  description,
}: Props) => {
  const boxShadow = "0px 5.574px 5.574px 0px rgba(0, 0, 0, 0.25)";
  return (
    <div className="padding flex flex-col w-full gap-[7px] mt-[90px] md:mt-[112px] lg:mt-[201px] xl:mt-[257px] 2xl:mt-[360px] 3xl:mt-[300px] ">
      <h1 className="font-bold text-[39.02px] md:text-[30px] lg:text-[39px] xl:text-[49.76px] 2xl:text-[52.55px] 3xl:text-[58.19px] desktop:text-[63.73px] text-center whitespace-pre-line md:whitespace-normal md:text-left">
        {title}
      </h1>
      <div className="flex flex-col md:flex-row md:min-h-[362.5px] lg:min-h-[468.86px] xl:min-h-[598.2px] 3xl:min-h-[699.52px] desktop:mih-h-[766.15px] unigapx unigapy">
        <div className="flex flex-col md:w-[55.4%] md:min-h-[362.5px] lg:min-h-[468.86px] xl:min-h-[598.2px] 3xl:min-h-[699.52px] desktop:mih-h-[766.15px] unigapy">
          <div className="flex flex-col md:flex-row md:h-1/2 unigapy unigapx items-center">
            <UniqueBlock
              projects={projects}
              years={years}
              boxShadow={boxShadow}
            />
            <UniqueYears years={years} boxShadow={boxShadow} />
          </div>
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(217, 217, 217, 0.00) 100%)",
              boxShadow: boxShadow,
            }}
            className="rounded-[15px] md:h-1/2 py-[40px] flex flex-col items-center justify-center w-full max-w-[360px] md:max-w-full mx-auto
            md:py-[23px] lg:py-[30px] xl:py-[35px] 3xl:py-[45px]"
          >
            <h1 className="text-center font-semibold text-[22.1px] mb-[4px] md:text-[28.01px] lg:text-[36.23px] xl:text-[46.23px] 3xl:text-[54.06px] desktop:text-[59.2px] leading-tight">
              {commitment}
            </h1>
            <p
              className=" text-center font-medium text-text text-[13.68px] md:text-[13.51px] lg:text-[17.47px] xl:text-[22.29px] 3xl:text-[26.07px] desktop:text-[28.55px] leading-tight
              px-4 md:px-[42px] lg:px-[57px] xl:px-[72px] 3xl:px-[85px] desktop:px-[87.54px]"
            >
              {text}
            </p>
          </div>
        </div>
        <div
          style={{
            background:
              "radial-gradient(81.17% 71.06% at 50% 31.06%, rgba(58, 48, 83, 0.71) 0%, rgba(96, 69, 165, 0.25) 52.6%, rgba(58, 48, 83, 0.00) 100%)",
            boxShadow: boxShadow,
          }}
          className="h-full rounded-[15px] md:w-[41.4%] flex flex-col items-center justify-center w-full max-w-[360px] md:max-w-full mx-auto py-[40px]
          md:py-[15px] lg:py-[20px] xl:py-[25px] 3xl:py-[29px] desktop:py-[32px]"
        >
          <h1 className="w-full text-center font-extrabold text-[30px] mb-[4px] break-words md:text-[72.2px] lg:text-[93.38px] xl:text-[119.14px] 3xl:text-[139.32px] desktop:text-[152.59px] leading-[1]">
            OUT
            <br className="hidden md:block" />
            OF
            <br className="hidden md:block" />
            PLACE
          </h1>
          <p
            className="text-center font-medium text-text text-[13.68px] md:text-[13.51px] lg:text-[17.47px] xl:text-[22.29px] 3xl:text-[26.07px] desktop:text-[28.55px] leading-tight
            px-4 md:px-[42px] lg:px-[57px] xl:px-[72px] 3xl:px-[85px] desktop:px-[87.54px]"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Unique;
