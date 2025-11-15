"use client";
import { DesignPhilosophy } from "./components/design-philosophy";
import { HeroDesign } from "./components/hero-design";
import { HeroIntro } from "./components/hero-intro";
import Question from "./components/Q&A";
import SelectedWork from "./components/selected-work";

export default function Home() {
  return (
    <section className="">
      <header>
        <HeroIntro />
        <HeroDesign />
        <div className="flex justify-center my-2">
          <button
            onClick={() =>
              window.open(
                "mailto:aribidoolusegun@gmail.com?subject=Let's%20Work%20Together",
                "_blank"
              )
            }
            className="bg-[#1A1A1A] py-4 px-8 cursor-pointer rounded-lg mx-auto"
          >
            <span className="border-[#FFFFFF] pb-px border-b"> Contact me</span>
          </button>
        </div>
      </header>

      <div className="my-20">
        <DesignPhilosophy />
      </div>
      <SelectedWork />
      <Question />
    </section>
  );
}
