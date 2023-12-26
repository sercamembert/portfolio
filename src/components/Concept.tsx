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
        <source
          src="https://cdn.discordapp.com/attachments/1091042166022869143/1189146337820803162/animacja.webm?ex=659d19d4&is=658aa4d4&hm=6aee0a31b6198d7816b0cebf85b2dd8868f6df9eb0703ceed066fac71d7496d6&"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Concept;
