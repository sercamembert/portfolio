"use client";
import React, { useEffect, useRef } from "react";

const OpinionsScroll = ({ children }: any) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollLeft =
        (container.scrollWidth - container.clientWidth) / 2;
    }
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="overflow-x-auto md:overflow-x-hidden flex gap-[45px] md:gap-0 py-[10px]"
    >
      {children}
    </div>
  );
};

export default OpinionsScroll;
