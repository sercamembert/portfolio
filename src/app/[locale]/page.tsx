"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Spline from "@splinetool/react-spline";

export default function Home() {
  const [isloaded, setisloaded] = useState(false);
  useEffect(() => {
    // Add an event listener for the "load" event
    const handleWindowLoad = () => {
      // Your code to run after the page has loaded
      setisloaded(true);
      console.log("Page loaded");
    };

    window.addEventListener("load", handleWindowLoad);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div className="w-full">
      {isloaded ? (
        "loading"
      ) : (
        <>
          <Navbar />
          <Spline scene="https://prod.spline.design/nT3VNbaoR9BeE3b3/scene.splinecode" />
          <Spline scene="https://prod.spline.design/Gxsf1S8h9MkHFBaZ/scene.splinecode" />
        </>
      )}
    </div>
  );
}
