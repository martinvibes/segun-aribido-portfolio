import React from "react";
import Image from "next/image";
import { rolesFindings, designProcess } from "@/types/saveplus";
import FeatureSection from "./components/FeatureSection";

const SavePlus = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <Image
        src="/savePlus/savePlusHero.svg"
        alt="saveplus"
        width={1200}
        height={1200}
        className="w-full h-full mt-8 sm:mt-[52px]"
      />

      {/* Project Overview */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-10 mt-10 sm:mt-16 lg:mt-[70px]">
        <div className="w-full lg:w-[383px] lg:sticky lg:top-[130px] lg:self-start">
          <h3 className="text-[#87909D] text-xs font-medium mb-1">
            UX/UI DESIGN
          </h3>
          <h1 className="text-[#1A1A1A] text-2xl sm:text-3xl lg:text-[32px] font-bold">
            SavePlus
          </h1>
          <p className="text-[#556070] text-base sm:text-lg font-normal py-2">
            Helping change makers raise funds, share stories, and inspire
            action.
          </p>
          <div className="flex flex-col font-normal gap-1">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              className="text-[#556070] text-base sm:text-lg underline break-all"
            >
              Video presentation
            </a>
            <a
              href="https://saveplus.io"
              target="_blank"
              className="text-[#556070] text-base sm:text-lg underline break-all"
            >
              https://saveplus.io
            </a>
          </div>
        </div>

        <div className="w-full lg:w-[628px]">
          <h1 className="text-[#2F80ED] text-xl sm:text-[22px] font-medium mb-1">
            Project Overview
          </h1>

          <article className="text-[#556070] text-base sm:text-lg font-normal leading-7">
            Helping one person may not change the entire world, but it can
            transform their world. <br className="hidden sm:block" /> In East
            Africa, raising funds for personal, medical, or community needs
            remains a major challenge, particularly during emergencies or
            life-changing events. Many people lack access to secure,
            transparent, and user-friendly crowdfunding platforms that make it
            simple to request and receive financial support.{" "}
            <br className="hidden sm:block" />
            SavePlus was designed to bridge this gap, a digital crowdfunding
            platform that empowers users to raise funds for meaningful causes,
            from celebrations and education to unexpected challenges like
            accidents or illnesses. My goal as the Product Designer was to
            create an accessible, trustworthy, and community-driven platform
            that helps individuals mobilize financial support quickly and safely
            when it matters most. The result is a product that not only enables
            giving but also builds trust, connection, and impact within local
            communities.
          </article>
        </div>
      </div>

      {/* Design Process */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-10 mt-16 sm:mt-24 lg:mt-[120px]">
        <div className="w-full lg:w-[383px] lg:sticky lg:top-[130px] lg:self-start">
          <h1 className="text-[#1A1A1A] text-2xl sm:text-3xl lg:text-[32px] font-bold mb-1">
            Design Process
          </h1>
          <p className="text-[#556070] text-base sm:text-lg font-normal">
            ~6 Weeks to Idea Validation
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:gap-12 w-full lg:w-[628px]">
          {designProcess.map((item) => {
            return (
              <div
                key={item.title}
                className="gap-4 bg-[#E5E3ED] rounded-lg w-full lg:w-fit p-6 sm:p-8"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="w-[32px] h-[32px] mb-2"
                />
                <h2 className="text-[#2F80ED] text-xl sm:text-[22px] font-medium mb-3">
                  {item.title}
                </h2>
                <p className="text-[#556070] text-base sm:text-lg font-normal leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Research */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-10 mt-12 sm:mt-16 lg:mt-24 xl:mt-[120px] mb-12 sm:mb-16 lg:mb-24 px-4 sm:px-6 lg:px-0">
        <div className="w-full lg:sticky lg:top-[130px] lg:self-start lg:w-[437px] lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto">
          <h1 className="text-[#1A1A1A] text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold mb-2 sm:mb-1">
            Research
          </h1>

          <div className="text-[#556070] w-full lg:w-[437px] text-sm sm:text-base md:text-lg font-normal leading-6 sm:leading-7">
            I conducted user interviews with four individuals who had previously
            raised funds and two others planning to start fundraising campaigns.
            These remote phone interviews aimed to uncover the key challenges
            users face when creating campaigns and receiving donations. Insights
            from these conversations revealed that setting up a cause and
            managing contributions is often confusing, unstructured, and lacks
            proper support systems. This research provided valuable input for
            designing a more intuitive, guided, and user-centered crowdfunding
            experience that simplifies the entire fundraising journey.
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full lg:w-[628px] lg:shrink-0">
          <div>
            <h2 className="text-[#2F80ED] text-lg sm:text-xl md:text-[22px] font-medium mb-2 sm:mb-3">
              Findings
            </h2>
            <p className="text-[#556070] text-sm sm:text-base md:text-lg font-normal leading-6 sm:leading-7">
              Through this research, I identified three primary user groups
              commonly involved in the fundraising journey:
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full">
            {rolesFindings.map((item) => {
              return (
                <div
                  key={item.title}
                  className="gap-3 sm:gap-4 flex flex-col sm:flex-row sm:items-start rounded-lg w-full"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-[56px] md:h-[56px] mb-1 sm:mb-0 shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="text-[#556070] text-sm sm:text-base md:text-lg font-normal leading-6 sm:leading-7">
                      <span className="text-sm sm:text-base md:text-lg font-bold text-[#556070]">
                        {item.title} -{" "}
                      </span>
                      {item.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Competitive Analysis */}
      <div className="text-[#1A1A1A] w-full lg:w-[783px] mt-12 sm:mt-16 lg:mt-[88px] px-4 sm:px-6 lg:px-0">
        <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold">
          Understanding the Current Fundraising
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold">
          Landscape in East Africa
        </h2>

        <div className="text-base sm:text-lg font-normal mt-2 leading-7 text-[#556070]">
          <p className="mb-4">
            To gain a deeper understanding of how users create fundraising
            campaigns, donate to causes, and access raised funds, I conducted a
            competitive analysis of leading crowdfunding platforms such as
            GoFundMe, Kickstarter, Patreon, and Indiegogo.
          </p>
          <p>
            I explored each platform&apos;s core features, user flows, and fund
            distribution processes, while also reviewing user feedback and
            reviews to identify common pain points, UX challenges, and best
            practices. This research provided valuable insights into what makes
            a crowdfunding experience effective, trustworthy, and user-friendly,
            shaping the foundation for designing a localized, accessible
            fundraising platform for East Africa.
          </p>
        </div>
      </div>

      <div className="mt-16 sm:mt-24 lg:mt-[120px] flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-10">
        <div className="w-full lg:w-[384px] lg:sticky lg:top-[130px] lg:self-start">
          <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#1A1A1A]">
            Sketches
          </h1>
          <p className="text-base sm:text-lg font-normal mt-2 leading-[26px] text-[#556070]">
            To visualize and refine the product experience, I designed and
            tested multiple wireframe variations to explore different layout
            structures, navigation patterns, and interaction flows. This
            iterative process helped identify the most intuitive, user-friendly
            design, ensuring the final crowdfunding platform delivered a
            seamless and engaging user experience across all devices.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-9 w-full lg:w-[572px]">
          <Image
            src="/savePlus/sketch11.png"
            alt="userFlows"
            width={572}
            height={354}
            className="w-full h-auto"
          />
          <Image
            src="/savePlus/sketch22.png"
            alt="userFlows"
            width={572}
            height={354}
            className="w-full h-auto"
          />
          <Image
            src="/savePlus/sketch33.png"
            alt="userFlows"
            width={572}
            height={354}
            className="w-full h-auto"
          />
        </div>
      </div>

      <FeatureSection />
    </div>
  );
};

export default SavePlus;
