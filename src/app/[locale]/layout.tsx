import type { Metadata } from "next";
import "@/app/globals.css";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
export const metadata: Metadata = {
  title: "Tworzenie tanich stron internetowych | outofplace",
  description:
    "Skorzystaj z naszych usług w tworzeniu profesjonalnych i tanich stron internetowych. Skontaktuj się z nami już dziś, aby dowiedzieć się więcej.",
};

const locales = ["en", "pl", "uk"];

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  const navbarText = useTranslations("Navbar");
  const servicesText = useTranslations("Services");
  const teamText = useTranslations("Team");
  const techText = useTranslations("Tech");
  const footerText = useTranslations("Footer");

  if (!locales.includes(locale as any)) notFound();

  const messages = useMessages();

  return (
    <html lang={locale}>
      <Head>
        <meta
          property="og:title"
          content="Tworzenie tanich stron internetowych | outofplace"
        />
        <meta property="og:url" content="https://outofplace.space/" />
        <meta
          property="og:image"
          content="https://outofplace.space/_next/image?url=%2Fimages%2Fmain.png&w=640&q=75"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          name="keywords"
          content="tworzenie stron internetowych, tanie strony internetowe, profesjonalne strony internetowe"
        />
      </Head>
      <body
        className={
          "bg-[#010101] w-screen overflow-x-hidden scroll-smooth font-primary text-white"
        }
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SpeedInsights />
          <Image
            alt="outofplace.space"
            src="/images/main.png"
            width={300}
            height={300}
            className="hidden"
          />
          <Navbar
            about={navbarText("about")}
            services={navbarText("services")}
            talk={navbarText("talk")}
            contact={navbarText("contact")}
            locale={locale}
          />
          {children}
          <Toaster />
          <TechStack title={techText("title")} />
          <Footer
            contact={footerText("contact")}
            apps={servicesText("apps")}
            duo={teamText("title")}
            services={navbarText("services")}
            unique={footerText("unique")}
            websites={servicesText("websites")}
            about={navbarText("about")}
            renovation={footerText("renovation")}
            privacy={footerText("privacy")}
            terms={footerText("terms")}
            locale={locale}
          />
        </NextIntlClientProvider>
      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-VMW0WPBQDZ" />
      <Script id="google-analytics">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VMW0WPBQDZ');
        `}
      </Script>
      <Script
        src="https://assets.usestyle.ai/seonajsplugin"
        id="seona-js-plugin"
        type="text/javascript"
      />
      <script async src="https://tally.so/widgets/embed.js"></script>
    </html>
  );
}
