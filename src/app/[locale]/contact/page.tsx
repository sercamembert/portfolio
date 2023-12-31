import Contact from "@/components/contact/Contact";

interface Props {}

const Page = ({ params: { locale } }: { params: any }) => {
  return (
    <iframe
      data-tally-src={
        locale == "en"
          ? "https://tally.so/r/mJzdx7?transparentBackground=1"
          : "https://tally.so/r/mB7K1e?transparentBackground=1"
      }
      className="w-full h-full min-h-screen mb-[100px] mt-[100px]  border-0"
      title="Rozpocznijmy razem naszą przygodę w świecie sieci"
    ></iframe>
  );
};

export default Page;
