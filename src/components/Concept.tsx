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
          src="https://cdn.discordapp.com/attachments/1091042166022869143/1193255545495376032/eddie.webm?ex=65ac0cd3&is=659997d3&hm=12eac2458c0a54f996bcfd428899f55f69f9e3108dc667237ecdb4150ed8313b&"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Concept;
