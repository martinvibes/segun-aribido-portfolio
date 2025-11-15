"use client";
import { DesignPhilosophy } from "./components/design-philosophy";
import { HeroDesign } from "./components/hero-design";
import { HeroIntro } from "./components/hero-intro";
import OpenSource from "./components/open-source";
import Question from "./components/Q&A";
import SelectedWork from "./components/selected-work";

export default function Home() {
  return (
    <section className="">
      <header className="">
        <HeroIntro />
        <HeroDesign />
        <div className="flex justify-center my-4 sm:my-6 md:my-8 lg:my-2">
          <button
            onClick={() =>
              window.open(
                "mailto:aribidoolusegun@gmail.com?subject=Let's%20Work%20Together",
                "_blank"
              )
            }
            className="bg-[#1A1A1A] py-3 sm:py-3.5 md:py-4 px-8 cursor-pointer rounded-lg mx-auto text-sm sm:text-base"
          >
            <span className="border-[#FFFFFF] pb-px border-b"> Contact me</span>
          </button>
        </div>
      </header>

      <div className="my-12 sm:my-16 md:my-20">
        <DesignPhilosophy />
      </div>
      <SelectedWork />
      <OpenSource />
      <Question />
    </section>
  );
}
