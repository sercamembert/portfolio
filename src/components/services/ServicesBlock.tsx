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
      <h1 className="text-center font-semibold leading-tight text-[27px] md:text-[25.66px] lg:text-[33.19px] xl:text-[42.34px] 3xl:text-[49.52px] desktop:text-[54.55px]">
        {title}
      </h1>
      <p className="services-text">{text}</p>
    </div>
  );
};

export default ServicesBlock;
