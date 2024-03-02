import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export const getPostThumbnails = async (locale: string) => {
  const response = await client.getEntries({
    content_type: "blogThumbnail",
    locale: locale,
    // @ts-expect-error
    order: "-fields.date",
  });

  return response.items;
};

export const getOtherThumbnails = async (locale: string) => {
  const response = await client.getEntries({
    content_type: "blogThumbnail",
    locale: locale,
    limit: 3,
  });

  return response.items;
};

export const getPostThumbnailsWithCategory = async (
  locale: string,
  category: string
) => {
  const response = await client.getEntries({
    content_type: "blogThumbnail",
    locale: locale,

    "fields.category": category,
  });

  return response.items;
};

export const getBlogPost = async (locale: string, link: string) => {
  const response = await client.getEntries({
    content_type: "portfolioProject",
    locale: locale,
    "fields.link": link,
  });

  return response.items;
};

export const getPortfolioThumbnails = async (locale: string) => {
  const response = await client.getEntries({
    content_type: "portfolioThumbnail",
    locale: locale,
  });

  return response.items;
};

export const getPortfolioThumbnailsHome = async (locale: string) => {
  const response = await client.getEntries({
    content_type: "portfolioThumbnail",
    locale: locale,
    limit: 3,
  });

  return response.items;
};

export const getPortfolioPost = async (locale: string, link: string) => {
  const response = await client.getEntries({
    content_type: "portfolio",
    locale: locale,
    "fields.link": link,
  });

  return response.items;
};
