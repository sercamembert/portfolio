"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Spline scene="https://prod.spline.design/Gu59AIyqqsViESbU/scene.splinecode" />
      <Spline scene="https://prod.spline.design/nT3VNbaoR9BeE3b3/scene.splinecode" />
    </div>
  );
}
