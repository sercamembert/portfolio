"use client";
import React, { useEffect, useRef, useState } from "react";
interface Props {}

const Concept = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !hasPlayed) {
          video.play().catch((error) => {
            console.error("Error playing video:", error);
          });
          setHasPlayed(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [hasPlayed]);

  return (
    <div className="padding my-[20px] md:my-[50px] z-0">
      <video ref={videoRef}>
        <source src="/images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Concept;
