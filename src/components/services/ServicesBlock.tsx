import React from "react";

interface Props {
  background: string;
  title: string;
  text: string;
}

const ServicesBlock = ({ background, title, text }: Props) => {
  return (
    <div
      style={{
        background: background,
      }}
      className="services-container"
    >
      <div className="flex items-center justify-center">
        <h3 className=" text-center font-semibold leading-tight text-[27px] md:text-[25.66px] lg:text-[33.19px] xl:text-[42.34px] 3xl:text-[49.52px] desktop:text-[51.55px]">
          {title}
        </h3>
      </div>

      <p className="services-text">{text}</p>
    </div>
  );
};

export default ServicesBlock;
