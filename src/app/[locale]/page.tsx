import React from "react";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Unique from "@/components/unique/Unique";
import Concept from "@/components/Concept";
import Services from "@/components/services/Services";
import Team from "@/components/Team";
import Creative from "@/components/Creative";
import Portfolio from "@/components/portfolio/Portfolio";
import MarqueeText from "@/components/Marquee";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  const navbarText = useTranslations("Navbar");
  const heroText = useTranslations("Hero");
  const uniqueText = useTranslations("Unique");
  const servicesText = useTranslations("Services");
  const teamText = useTranslations("Team");
  const creativeText = useTranslations("Experience");
  const portfolioText = useTranslations("Portfolio");
  const techText = useTranslations("Tech");
  const footerText = useTranslations("Footer");

  return (
    <div className="w-full">
      <Navbar
        about={navbarText("about")}
        services={navbarText("services")}
        talk={navbarText("talk")}
        contact={navbarText("contact")}
      />
      <Hero text={heroText("text")} talk={navbarText("talk")} />
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
      />
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
      />
      <Team title={teamText("title")} />
      <MarqueeText talk={navbarText("talk")} />
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
      />
    </div>
  );
}
