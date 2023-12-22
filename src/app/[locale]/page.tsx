import React from "react";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  const navbarText = useTranslations("Navbar");
  const heroText = useTranslations("Hero");

  return (
    <div className="w-full">
      <Navbar
        about={navbarText("about")}
        services={navbarText("services")}
        talk={navbarText("talk")}
        contact={navbarText("contact")}
      />
      <Hero text={heroText("text")} talk={navbarText("talk")} />
    </div>
  );
}
