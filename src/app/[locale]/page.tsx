import React from "react";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Unique from "@/components/Unique";
import Concept from "@/components/Concept";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Creative from "@/components/Creative";

export default function Home() {
  const navbarText = useTranslations("Navbar");
  const heroText = useTranslations("Hero");
  const uniqueText = useTranslations("Unique");
  const servicesText = useTranslations("Services");
  const teamText = useTranslations("Team");
  const creativeText = useTranslations("Experience");

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
      <Team title={teamText("title")} />
    </div>
  );
}
