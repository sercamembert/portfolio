import React from "react";
import { useTranslations } from "next-intl";
import Hero from "@/components/Hero";
import Unique from "@/components/unique/Unique";
import Concept from "@/components/Concept";
import Services from "@/components/services/Services";
import Team from "@/components/Team";
import Creative from "@/components/Creative";
import Portfolio from "@/components/portfolio/Portfolio";
import MarqueeText from "@/components/Marquee";
import Opinions from "@/components/opinions/Opinions";
export const runtime = "edge";
export default function Home({ params: { locale } }: { params: any }) {
  const navbarText = useTranslations("Navbar");
  const heroText = useTranslations("Hero");
  const uniqueText = useTranslations("Unique");
  const servicesText = useTranslations("Services");
  const teamText = useTranslations("Team");
  const creativeText = useTranslations("Experience");
  const portfolioText = useTranslations("Portfolio");

  return (
    <div className="w-full flex flex-col gap-y-[90px] md:gap-y-[110px] lg:gap-y-[170px] xl:gap-y-[220px] 2xl:gap-y-[280px]">
      <Hero text={heroText("text")} talk={navbarText("talk")} locale={locale} />
      <Unique
        title={uniqueText("title")}
        projects={uniqueText("projects")}
        years={uniqueText("years")}
        commitment={uniqueText("commitment")}
        text={uniqueText("text")}
        description={uniqueText("description")}
      />
      <Concept />
      <Services
        apps={servicesText("apps")}
        appsdesc={servicesText("appsdesc")}
        designdesc={servicesText("designdesc")}
        explore={servicesText("explore")}
        title={servicesText("title")}
        websites={servicesText("websites")}
        websitesdesc={servicesText("websitesdesc")}
        locale={locale}
      />
      <Opinions />
      <Creative
        notice={creativeText("notice")}
        noticetext={creativeText("noticetext")}
        catchtext={creativeText("catchtext")}
        eye={creativeText("eye")}
      />
      <Portfolio
        clothes={portfolioText("clothes")}
        company={portfolioText("company")}
        more={portfolioText("more")}
        quizportal={portfolioText("quizportal")}
        renovations={portfolioText("renovations")}
        websites={portfolioText("websites")}
        locale={locale}
      />
      <Team title={teamText("title")} />
      <MarqueeText talk={navbarText("talk")} locale={locale} />
    </div>
  );
}
