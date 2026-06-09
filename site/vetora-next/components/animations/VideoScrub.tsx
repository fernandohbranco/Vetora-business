"use client";

import { useEffect, useRef } from "react";
import type { MotionValue } from "framer-motion";

interface VideoScrubProps {
  src: string;
  poster?: string;
  scrollProgress: MotionValue<number>;
  className?: string;
}

export function VideoScrub({ src, poster, scrollProgress, className }: VideoScrubProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Dispositivos touch: não carrega o vídeo, exibe apenas o poster
    if (window.matchMedia("(pointer: coarse)").matches) {
      video.preload = "none";
      return;
    }

    // Bloqueia autoplay concorrente ao scrubbing
    video.playbackRate = 0;

    const unsubscribe = scrollProgress.on("change", (v) => {
      // Só avança o frame se o browser tiver dados decodificados suficientes
      if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && video.duration) {
        video.currentTime = v * video.duration;
      }
    });

    return unsubscribe;
  }, [scrollProgress]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      playsInline
      preload="auto"
      loop
      className={`absolute inset-0 w-full h-full object-cover ${className ?? ""}`}
      aria-hidden="true"
    />
  );
}
