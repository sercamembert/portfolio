import Contact from "@/components/contact/Contact";
import { Metadata } from "next";

interface Props {}
export const metadata: Metadata = {
  description:
    "Tworzymy profesjonalne i tanie strony internetowe. Skontaktuj się z nami, aby dowiedzieć się więcej o naszych usługach.",
};

const Page = ({ params: { locale } }: { params: any }) => {
  return (
    <iframe
      data-tally-src={
        locale == "en"
          ? "https://tally.so/embed/mJzdx7?alignLeft=1&transparentBackground=1&dynamicHeight=1&hideTitle=1"
          : locale == "pl"
          ? "https://tally.so/embed/mB7K1e?alignLeft=1&transparentBackground=1&dynamicHeight=1&hideTitle=1"
          : "https://tally.so/embed/w2PeoD?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      }
      loading="lazy"
      width="100%"
      height="1000"
      title="Let's start our journey together in the world of the internet."
      className="w-full h-full min-h-screen mb-[100px] mt-[100px]  border-0 
      px-[20px] sm:px-[40px] md:px-[50px] lg:px-[200px] xl:px-[300px] 2xl:px-[370px] 3xl:px-[420px] desktop:px-[550px]
      "
    ></iframe>
  );
};

export default Page;
