import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex justify-between gap-10 mt-[70px] mb-[200px]">
      {/* Left Section */}
      <div className="w-[470px] shrink-0">
        {/* Portrait Image */}
        <div className="mb-6">
          <Image
            src="/about/about.png"
            alt="Olusegun Aribido"
            width={400}
            height={400}
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-[#1A1A1A] text-[32px] font-bold mb-2">
          Olusegun Aribido
        </h1>

        {/* Nickname */}
        <p className="text-[#556070] text-lg font-normal mb-6">
          💡 You can call me Victor
        </p>

        {/* Contact Button */}
        <button className="bg-[#1A1A1A] text-white px-7 py-3 underline rounded-lg text-lg font-medium hover:bg-[#2A2A2A] transition-colors">
          <a
            href="
            mailto:olusegunaribido@gmail.com"
          >
            Contact me
          </a>
        </button>
      </div>

      {/* Right Section */}
      <div className="w-[628px] shrink-0">
        {/* Heading */}
        <h2 className="text-[#2F80ED] text-[32px] font-bold mb-2">About me</h2>

        {/* Text Content */}
        <div className="text-[#556070] text-lg font-normal leading-7 space-y-5">
          <p>
            I didn’t start my career pushing pixels, I started by cutting
            fabric.  Before becoming a product designer, I was immersed in the
            world of fashion design, sketching patterns, tailoring details, and
            learning how every stitch could change how someone felt. That
            experience taught me something I’ve carried into every digital
            product I design today, design is about how it feels, not just how
            it looks.
          </p>

          <p>
            Over the years, I’ve traded fabric for Figma, but my obsession with
            crafting human-centered experiences hasn’t changed. I’ve designed
            for industries as varied as agriculture, fintech, eCommerce, edtech,
            entertainment, blockchain, and AI, building mobile apps, web
            platforms, and even USSD tools that make technology feel more human
            and accessible across East and West Africa and beyond.
          </p>

          <p>
            When I’m not refining user flows or prototyping new ideas, you’ll
            probably find me doodling or sketching isometric worlds, translating
            abstract thoughts into playful visuals. Away from the screen, I’m a
            bit of a strategist, I love chess, scrabble, monopoly, connect four,
            and a good badminton match. These games keep my mind sharp, teaching
            me patience, timing, and the joy of seeing possibilities unfold,
            lessons that constantly echo in my design work.
          </p>

          <p>
            At home, I share my love for creativity with my daughter, often
            building imaginary cities out of LEGO bricks. And when I’m not
            building something with my hands, I’m out on the football pitch,
            enjoying the same mix of strategy, rhythm, and teamwork that drives
            great design.
          </p>

          <p>
            If there’s one thing that defines me, it’s curiosity. I love
            exploring how things work, and how they could work better. Whether
            I’m leading a design sprint, collaborating with engineers, or
            testing ideas with real users, I aim to create products that don’t
            just meet needs, they make people feel seen, understood, and
            empowered.
          </p>

          <p>
            Let&apos;s build something meaningful, something that tells a story
            worth experiencing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
