import React from "react";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Spline from "@splinetool/react-spline";

export default function Home() {
  const navbarText = useTranslations("Navbar");

  return (
    <div className="w-full">
      <Navbar
        about={navbarText("about")}
        services={navbarText("services")}
        talk={navbarText("talk")}
      />
    </div>
  );
}
