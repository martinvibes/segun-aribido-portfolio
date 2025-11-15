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
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden min-h-screen max-w-full box-border">
      <Image
        src={sideRuler}
        alt="side ruler"
        className="absolute left-0 top-0 h-full w-auto hidden lg:block"
      />

      <Image
        src={bottomRuler}
        alt="bottom ruler"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto hidden lg:block"
      />
      <div className="mx-0 md:mx-12 lg:mx-24 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 max-w-full box-border">
        <div className="max-w-full lg:max-w-[821px]">
          <h2 className="text-[32px] lg:text-[40px] font-medium text-[#505050] wrap-break-word">
            My Design Philosophy{" "}
          </h2>
          <h3 className="text-[#505050] text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-helvetica400 mt-2 wrap-break-word">
            I design with logic, empathy, and intent to create digital
            experiences that are functional, scalable, and human-centered. Great
            design, to me, blends clarity with craft, it solves real problems
            and feels effortless to use.
          </h3>
        </div>
        <div className="max-w-full box-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
            <div className="bg-[#CCE7FF] relative py-6 sm:py-8 md:py-10 min-h-[280px] sm:min-h-[320px] md:min-h-[360px] rounded-2xl overflow-hidden">
              <Image
                src={one}
                alt="one"
                className="absolute right-4 sm:right-6 md:right-10 top-4 bottom-4 z-0 w-auto h-[calc(100%-2rem)] object-contain"
              />
              <div className="flex h-full flex-col justify-between pl-4 sm:pl-6 md:pl-8 lg:pl-12 max-w-full lg:max-w-[439px] z-50 relative">
                {/* <AnimatedAvatars /> */}
                <div className="w-full sm:w-[140px] md:w-[160px] lg:w-[180px] h-auto">
                  <video
                    src="/video/y.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto"
                  />
                </div>

                <div className="mt-4 sm:mt-6">
                  <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-[#505050] wrap-break-word">
                    Human-centered, Always
                  </h2>
                  <h3 className="text-[#505050] text-sm sm:text-base md:text-lg lg:text-2xl font-normal font-helvetica400 mt-1 sm:mt-2 wrap-break-word">
                    I start with people, their needs, stories, and frustrations
                    to design solutions that feel natural and inclusive.
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-[#F1E7FF] relative py-6 sm:py-8 md:py-10 min-h-[280px] sm:min-h-[320px] md:min-h-[360px] rounded-2xl overflow-hidden">
              <Image
                src={two}
                alt="two"
                className="absolute right-2 sm:right-4 md:right-5 top-4 bottom-4 z-0 w-auto h-[calc(100%-2rem)] object-contain"
              />
              <div className="flex h-full flex-col justify-between pl-4 sm:pl-6 md:pl-8 lg:pl-12 max-w-full lg:max-w-[439px] z-50 relative">
                {/* <CardStackAnimation /> */}
                <div className="w-full sm:w-[160px] md:w-[180px] lg:w-[210px] h-auto ml-0 sm:-ml-1 md:-ml-2">
                  <video
                    src="/video/Not.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto"
                  />
                </div>

                <div className="mt-4 sm:mt-6">
                  <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-[#505050] wrap-break-word">
                    Clarity Through Simplicity
                  </h2>
                  <h3 className="text-[#505050] text-sm sm:text-base md:text-lg lg:text-2xl font-normal font-helvetica400 mt-1 sm:mt-2 wrap-break-word">
                    I remove unnecessary friction. Every interaction should feel
                    intuitive, purposeful, and easy to understand.
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-[#D3F6E3] relative py-6 sm:py-8 md:py-10 min-h-[280px] sm:min-h-[320px] md:min-h-[360px] rounded-2xl overflow-hidden">
              <Image
                src={three}
                alt="three"
                className="absolute right-4 sm:right-6 md:right-10 top-4 bottom-4 z-0 w-auto h-[calc(100%-2rem)] object-contain"
              />
              <div className="flex h-full flex-col justify-between pl-2 sm:pl-3 md:pl-4 lg:pl-4.5 max-w-full lg:max-w-[439px] z-50 relative">
                {/* <WorkflowAnimation /> */}
                <div className="w-full sm:w-[240px] md:w-[280px] lg:w-[340px] h-auto -ml-0 sm:-ml-1 md:-ml-2">
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
                <div className="mt-4 sm:mt-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl text-[#505050] wrap-break-word">
                    Collaboration Fuels Innovation
                  </h2>
                  <h3 className="text-[#505050] text-sm sm:text-base md:text-lg lg:text-2xl font-normal font-helvetica400 mt-1 sm:mt-2 wrap-break-word">
                    I thrive in cross-functional teams, working closely with
                    stakeholders to turn insights into tangible outcomes.
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-[#fed5bc] relative py-6 sm:py-8 md:py-10 min-h-[280px] sm:min-h-[320px] md:min-h-[360px] rounded-2xl overflow-hidden">
              <Image
                src={four}
                alt="four"
                className="absolute right-2 sm:right-4 md:right-5 top-4 bottom-4 z-0 w-auto h-[calc(100%-2rem)] object-contain"
              />
              <div className="flex h-full flex-col justify-between pl-4 sm:pl-6 md:pl-8 lg:pl-12 max-w-full lg:max-w-[439px] z-50 relative">
                {/* <AnimatedChart className="-top-20 w-fit left-10 absolute" /> */}
                <div className="w-full sm:w-[220px] md:w-[260px] lg:w-[296px] h-auto bg-transparent -ml-0 sm:-ml-1 md:-ml-2 mb-8 sm:mb-12 md:mb-[55px]">
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
                <div className="mt-4 sm:mt-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl text-[#505050] wrap-break-word">
                    Human-centered, Always
                  </h2>
                  <h3 className="text-[#505050] text-sm sm:text-base md:text-lg lg:text-2xl font-normal font-helvetica400 mt-1 sm:mt-2 wrap-break-word">
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
