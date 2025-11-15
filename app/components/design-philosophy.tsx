import Image from "next/image";
import sideRuler from "../../public/Frame 3233132.svg";
import bottomRuler from "../../public/Frame 3233132 (1).svg";
import one from "../../public/1.svg";
import two from "../../public/2.svg";
import three from "../../public/3.svg";
import four from "../../public/4.svg";
import { AnimatedChart } from "./chart-animation";
import AnimatedAvatars from "./avatars";
import { WorkflowAnimation } from "./workflow";
import CardStackAnimation from "./clarity-animation";

export function DesignPhilosophy() {
  return (
    <section className="relative py-28 overflow-hidden min-h-screen">
      <Image
        src={sideRuler}
        alt="side ruler"
        className="absolute left-0 top-0 h-full w-auto"
      />

      <Image
        src={bottomRuler}
        alt="bottom ruler"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto"
      />
      <div className="mx-24 flex flex-col gap-7">
        <div className="max-w-[821px]">
          <h2 className="text-[40px] font-medium text-[#505050]">
            My Design Philosophy{" "}
          </h2>
          <h3 className="text-[#505050] text-2xl font-normal font-helvetica400">
            I design with logic, empathy, and intent to create digital
            experiences that are functional, scalable, and human-centered. Great
            design, to me, blends clarity with craft, it solves real problems
            and feels effortless to use.
          </h3>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-7">
            <div className="bg-[#CCE7FF] relative py-10 min-h-[360px] rounded-2xl">
              <Image
                src={one}
                alt="one"
                className="absolute right-10 bottom-4 z-0"
              />
              <div className="flex h-full flex-col justify-between pl-12 max-w-[439px] z-50 relative">
                {/* <AnimatedAvatars /> */}
                <div className="w-[180px] h-full">
                  <video
                    src="/video/y.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto"
                  />
                </div>

                <div className="">
                  <h2 className="font-bold text-2xl text-[#505050]">
                    Human-centered, Always
                  </h2>
                  <h3 className="text-[#505050] text-2xl font-normal font-helvetica400">
                    I start with people, their needs, stories, and frustrations
                    to design solutions that feel natural and inclusive.
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-[#F1E7FF] relative py-10 min-h-[360px] rounded-2xl">
              <Image
                src={two}
                alt="two"
                className="absolute right-5 bottom-4 z-0"
              />
              <div className="flex h-full flex-col justify-between pl-12 max-w-[439px] z-50 relative">
                {/* <CardStackAnimation /> */}
                <div className="w-[210px] h-full -ml-2">
                  <video
                    src="/video/Not.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto"
                  />
                </div>

                <div className="">
                  <h2 className="font-bold text-2xl text-[#505050]">
                    Clarity Through Simplicity
                  </h2>
                  <h3 className="text-[#505050] text-2xl font-normal font-helvetica400">
                    I remove unnecessary friction. Every interaction should feel
                    intuitive, purposeful, and easy to understand.
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-[#D3F6E3] relative py-10 min-h-[360px] rounded-2xl">
              <Image
                src={three}
                alt="three"
                className="absolute right-10 bottom-4 z-0 h-[92%]"
              />
              <div className="flex h-full flex-col justify-between pl-4.5 max-w-[439px] z-50 relative">
                {/* <WorkflowAnimation /> */}
                <div className="w-[340px] h-full -ml-2">
                  <video
                    src="/video/col.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto"
                  />
                </div>

                <div></div>
                <div className="">
                  <h2 className="text-2xl text-[#505050]">
                    Collaboration Fuels Innovation
                  </h2>
                  <h3 className="text-[#505050] text-2xl font-normal font-helvetica400">
                    I thrive in cross-functional teams, working closely with
                    stakeholders to turn insights into tangible outcomes.
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-[#fed5bc] relative py-10 min-h-[360px] rounded-2xl">
              <Image
                src={four}
                alt="four"
                className="absolute right-5 bottom-4 z-0"
              />
              <div className="flex h-full flex-col justify-between pl-12 max-w-[439px] z-50 relative">
                {/* <AnimatedChart className="-top-20 w-fit left-10 absolute" /> */}
                <div className="w-[296px] h-full bg-transparent -ml-2 mb-[55px]">
                  <video
                    src="/video/growth grap.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto bg-transparent"
                  />
                </div>
                <span></span>
                <div className="">
                  <h2 className="text-2xl text-[#505050]">
                    Human-centered, Always
                  </h2>
                  <h3 className="text-[#505050] text-2xl font-normal font-helvetica400">
                    I start with people, their needs, stories, and frustrations
                    to design solutions that feel natural and inclusive.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
