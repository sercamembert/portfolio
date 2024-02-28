// @ts-nocheck
import { getPortfolioPost } from "@/lib/contentful";
import React from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Link from "next/link";
const page = async ({ params: { locale, link } }: { params: any }) => {
  if (locale === "uk") {
    locale = "en";
  }

  const currentPost = await getPortfolioPost(locale, link);
  const post = {
    title: currentPost[0].fields.title,
    image: currentPost[0].fields.image?.fields.file?.url,
    content: currentPost[0].fields.content,
    demoLink: currentPost[0].fields.demoLink,
  };

  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        return (
          <img
            src={`https://${node.data.target.fields.file.url}`}
            alt={node.data.target.fields.description}
            className="my-[50px] md:my-[50px] lg:my-[66px] xl:my-[83px] 2xl:my-[93px] 3xl:my-[100px] desktop:my-[112px] md:max-w-[60%] lg:max-w-[50%]"
          />
        );
      },
    },
  };

  return (
    <div className="blog-padding flex flex-col mb-[100px] mt-[100px] lg:mt-[150px] min-h-screen">
      <h1 className="leading-tight font-semibold text-center text-[23px] md:text-[25px] lg:text-[34px] xl:text-[43px] 2xl:text-[48px] 3xl:text-[51px] desktop:text-[57px] ">
        {post.title}
      </h1>

      <Image
        src={"https:" + post.image}
        alt={post.title}
        width={1120}
        height={562}
        className="w-full rounded-[6px] md:rounded-[13px] lg:rounded-[18px] xl:rounded-[22px] 2xl:rounded-[25px] desktop:rounded-[30px]
        mt-[50px] 2xl:mt-[90px] mx-auto
           lg:max-w-[80%] "
      />
      <div className="post">
        {documentToReactComponents(post.content, renderOptions)}
      </div>
      {post.demoLink ? (
        <div className=" mt-[40px] lg:mt-[60px]">
          <button
            className="bg-white text-black rounded-[10px]  h-[35.58px] md:h-[30.1px]  lg:h-[30px]  xl:h-[40px]  2xl:h-[45.12px]  
        font-semibold text-[11.9px] md:text-[9px] lg:text-[10.68px] xl:text-[13.62px] 2xl:text-[15.69px]  px-3 xl:px-6 hover:brightness-[80%] duration-300
        w-[155.54px] md:w-auto md:min-w-[116.3px] lg:min-w-[150.42px] xl:min-w-[191.92px] 2xl:min-w-[221.11px] 3xl:min-w-[224.42px]  
         "
          >
            <Link title="Live Demo" href={post.demoLink} target="_blank">
              {locale == "pl" ? "Sprawdź tutaj ->" : "Check here ->"}
            </Link>
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default page;
