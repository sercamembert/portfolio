import React from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import teestimg from "@/app/teest.png";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    // <Spline scene="https://prod.spline.design/nT3VNbaoR9BeE3b3/scene.splinecode" />
    // <Spline scene="https://prod.spline.design/Gxsf1S8h9MkHFBaZ/scene.splinecode" />

    <div className="w-full"></div>
  );
}
