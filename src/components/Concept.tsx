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
    <div className="padding z-0 hidden md:block">
      <video ref={videoRef} muted className="mx-auto">
        <source
          src="https://cdn.discordapp.com/attachments/1091042166022869143/1193275344770306099/animacja9.webm?ex=65ac1f44&is=6599aa44&hm=63500cc012fc7d4f6317d4da6656727ba53811635cd7d8d5324ec3b8d6c73cc2&"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Concept;
