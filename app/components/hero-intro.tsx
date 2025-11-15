"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import segun1 from "../../public/Property 1=Pro 1.svg";
import segun2 from "../../public/Property 1=Pro 2.svg";
import segun3 from "../../public/Property 1=Pro 3.svg";
import segun4 from "../../public/Property 1=Pro 4.svg";
import segun5 from "../../public/Property 1=Pro 5.svg";
import segun6 from "../../public/Property 1=Pro 5.svg";

export function HeroIntro() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [segun1, segun2, segun3, segun4, segun5, segun6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="mt-8 sm:mt-20 md:mt-24 lg:mt-[110px] flex mx-auto text-[#1A1A1A] flex-col gap-2 sm:gap-3 max-w-full box-border">
      <h1 className="text-4xl lg:text-5xl font-bold inline-flex items-center justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap break-words">
        <span>Hi,</span>
        <Image
          src={images[currentImageIndex] || "/placeholder.svg"}
          alt="Segun"
          className="w-auto h-15 lg:h-auto object-cover"
        />
        <span>I&apos;m Segun</span>
      </h1>
      <h2 className="text-[#505050] font-medium text-2xl md:text-3xl lg:text-5xl leading-tight sm:leading-normal lg:leading-14 w-fit mx-auto text-center break-words">
        an Interaction Designer{" "}
      </h2>
    </div>
  );
}
