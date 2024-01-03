import Contact from "@/components/contact/Contact";

interface Props {}

const Page = ({ params: { locale } }: { params: any }) => {
  return (
    <iframe
      data-tally-src={
        locale == "en"
          ? "https://tally.so/embed/mJzdx7?alignLeft=1&transparentBackground=1&dynamicHeight=1&hideTitle=1"
          : "https://tally.so/embed/mB7K1e?alignLeft=1&transparentBackground=1&dynamicHeight=1&hideTitle=1"
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
