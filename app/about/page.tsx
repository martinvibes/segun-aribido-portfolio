import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-12 md:mt-16 lg:mt-[70px] mb-12 sm:mb-16 md:mb-24 lg:mb-[200px] max-w-full box-border">
      {/* Left Section */}
      <div className="w-full lg:w-[470px] lg:sticky lg:top-0 lg:self-start lg:shrink-0 max-w-full box-border">
        {/* Portrait Image */}
        <div className="mb-4 sm:mb-6">
          <Image
            src="/about/about.png"
            alt="Olusegun Aribido"
            width={400}
            height={400}
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-[#1A1A1A] text-2xl sm:text-3xl lg:text-[32px] font-bold mb-2 break-words">
          Olusegun Aribido
        </h1>

        {/* Nickname */}
        <p className="text-[#556070] text-base sm:text-lg font-normal mb-4 sm:mb-6 break-words">
          💡 You can call me Victor
        </p>

        {/* Contact Button */}
        <button className="bg-[#1A1A1A] text-white px-6 sm:px-7 py-2.5 sm:py-3 underline rounded-lg text-base sm:text-lg font-medium hover:bg-[#2A2A2A] transition-colors">
          <a href="mailto:olusegunaribido@gmail.com">Contact me</a>
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[528px] xl:w-[628px] lg:shrink-0 max-w-full box-border min-w-0">
        {/* Heading */}
        <h2 className="text-[#2F80ED] text-2xl sm:text-3xl lg:text-[32px] font-bold mb-2 break-words">
          About me
        </h2>

        {/* Text Content */}
        <div className="text-[#556070] text-base sm:text-lg font-normal leading-6 sm:leading-7 space-y-4 sm:space-y-5 min-w-0">
          <p className="break-words">
            I didn’t start my career pushing pixels, I started by cutting
            fabric.  Before becoming a product designer, I was immersed in the
            world of fashion design, sketching patterns, tailoring details, and
            learning how every stitch could change how someone felt. That
            experience taught me something I’ve carried into every digital
            product I design today, design is about how it feels, not just how
            it looks.
          </p>

          <p className="break-words">
            Over the years, I&apos;ve traded fabric for Figma, but my obsession
            with crafting human-centered experiences hasn&apos;t changed.
            I&apos;ve designed for industries as varied as agriculture, fintech,
            eCommerce, edtech, entertainment, blockchain, and AI, building
            mobile apps, web platforms, and even USSD tools that make technology
            feel more human and accessible across East and West Africa and
            beyond.
          </p>

          <p className="break-words">
            When I&apos;m not refining user flows or prototyping new ideas,
            you&apos;ll probably find me doodling or sketching isometric worlds,
            translating abstract thoughts into playful visuals. Away from the
            screen, I&apos;m a bit of a strategist, I love chess, scrabble,
            monopoly, connect four, and a good badminton match. These games keep
            my mind sharp, teaching me patience, timing, and the joy of seeing
            possibilities unfold, lessons that constantly echo in my design
            work.
          </p>

          <p className="break-words">
            At home, I share my love for creativity with my daughter, often
            building imaginary cities out of LEGO bricks. And when I&apos;m not
            building something with my hands, I&apos;m out on the football
            pitch, enjoying the same mix of strategy, rhythm, and teamwork that
            drives great design.
          </p>

          <p className="break-words">
            If there&apos;s one thing that defines me, it&apos;s curiosity. I
            love exploring how things work, and how they could work better.
            Whether I&apos;m leading a design sprint, collaborating with
            engineers, or testing ideas with real users, I aim to create
            products that don&apos;t just meet needs, they make people feel
            seen, understood, and empowered.
          </p>

          <p className="break-words">
            Let&apos;s build something meaningful, something that tells a story
            worth experiencing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
