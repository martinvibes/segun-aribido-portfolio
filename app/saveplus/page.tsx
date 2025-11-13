import React from "react";
import Image from "next/image";
import { rolesFindings, designProcess } from "@/types/saveplus";
import FeatureSection from "./components/FeatureSection";

const SavePlus = () => {
  return (
    <div>
      {/* Hero Section */}
      <Image
        src="/savePlus/savePlusHero.svg"
        alt="saveplus"
        width={1200}
        height={1200}
        className="w-full h-full mt-[52px]"
      />

      {/* Project Overview */}
      <div className="flex justify-between mt-[70px]">
        <div className="w-[383px] sticky top-0 self-start">
          <h3 className="text-[#87909D] text-xs font-medium mb-1">
            UX/UI DESIGN
          </h3>
          <h1 className="text-[#1A1A1A] text-[32px] font-bold">SavePlus</h1>
          <p className="text-[#556070] text-lg font-normal py-2">
            Helping change makers raise funds, share stories, and inspire
            action.
          </p>
          <div className="flex flex-col font-normal">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              className="text-[#556070] text-lg underline"
            >
              Video presentation
            </a>
            <a
              href="https://saveplus.io"
              target="_blank"
              className="text-[#556070] text-lg underline"
            >
              https://saveplus.io
            </a>
          </div>
        </div>

        <div className="w-[628px]">
          <h1 className="text-[#2F80ED] text-[22px] font-medium mb-1">
            Project Overview
          </h1>

          <article className="text-[#556070] text-lg font-normal">
            Helping one person may not change the entire world, but it can
            transform their world. <br /> In East Africa, raising funds for
            personal, medical, or community needs remains a major challenge,
            particularly during emergencies or life-changing events. Many people
            lack access to secure, transparent, and user-friendly crowdfunding
            platforms that make it simple to request and receive financial
            support. <br />
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
      <div className="flex justify-between gap-10 mt-[120px]">
        <div className="w-[383px] sticky top-[70px] self-start">
          <h1 className="text-[#1A1A1A] text-[32px] font-bold mb-1">
            Design Process
          </h1>
          <p className="text-[#556070] text-lg font-normal">
            ~6 Weeks to Idea Validation
          </p>
        </div>

        <div className="flex flex-col gap-12 w-[628px] ">
          {designProcess.map((item) => {
            return (
              <div
                key={item.title}
                className="gap-4 bg-[#E5E3ED] rounded-lg w-fit p-8"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="w-[32px] h-[32px] mb-2"
                />
                <h2 className="text-[#2F80ED] text-[22px] font-medium mb-3">
                  {item.title}
                </h2>
                <p className="text-[#556070] text-lg font-normal leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Research */}
      <div className="flex justify-between gap-10 mt-[120px]">
        <div className="sticky top-0 self-start">
          <h1 className="text-[#1A1A1A] text-[32px] font-bold mb-1">
            Research
          </h1>

          <div className="text-[#556070] w-[437px] text-lg font-normal leading-7">
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

        <div className="flex flex-col gap-8 w-[628px] shrink-0">
          <div>
            <h2 className="text-[#2F80ED] text-[22px] font-medium mb-2">
              Findings
            </h2>
            <p className="text-[#556070] text-lg font-normal leading-7">
              Through this research, I identified three primary user groups
              commonly involved in the fundraising journey:
            </p>
          </div>

          <div className="flex flex-col gap-12 w-full">
            {rolesFindings.map((item) => {
              return (
                <div
                  key={item.title}
                  className="gap-4 flex space-x-5 rounded-lg w-full"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="w-[56px] h-[56px] mb-2"
                  />

                  <div className="flex ">
                    <div className="text-[#556070] text-lg font-normal leading-7">
                      <span className="text-lg font-bold text-[#556070]">
                        {" "}
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
      <div className="text-[#1A1A1A] w-[783px] mt-[88px]">
        <h1 className="text-[32px] font-bold ">
          Understanding the Current Fundraising
        </h1>
        <h2 className="text-[32px] font-bold ">Landscape in East Africa</h2>

        <div className="text-lg font-normal mt-2 leading-7 text-[#556070]">
          <p>
            To gain a deeper understanding of how users create fundraising
            campaigns, donate to causes, and access raised funds, I conducted a
            competitive analysis of leading crowdfunding platforms such as
            GoFundMe, Kickstarter, Patreon, and Indiegogo.
          </p>
          <p>
            I explored each platform’s core features, user flows, and fund
            distribution processes, while also reviewing user feedback and
            reviews to identify common pain points, UX challenges, and best
            practices. This research provided valuable insights into what makes
            a crowdfunding experience effective, trustworthy, and user-friendly,
            shaping the foundation for designing a localized, accessible
            fundraising platform for East Africa.
          </p>
        </div>
      </div>

      <div className="mt-[120px] flex justify-between gap-10">
        <div className="w-[384px] sticky top-0 self-start">
          <h1 className="text-[32px] font-bold text-[#1A1A1A]">Sketches</h1>
          <p className="text-lg font-normal mt-2 leading-[26px] text-[#556070]">
            To visualize and refine the product experience, I designed and
            tested multiple wireframe variations to explore different layout
            structures, navigation patterns, and interaction flows. This
            iterative process helped identify the most intuitive, user-friendly
            design, ensuring the final crowdfunding platform delivered a
            seamless and engaging user experience across all devices.
          </p>
        </div>

        <div className="flex flex-col gap-9 w-[572px]">
          <Image
            src="/savePlus/sketch1.svg"
            alt="userFlows"
            width={572}
            height={354}
            className="w-full"
          />
          <Image
            src="/savePlus/sketch2.svg"
            alt="userFlows"
            width={572}
            height={354}
            className="w-full"
          />
          <Image
            src="/savePlus/sketch3.svg"
            alt="userFlows"
            width={572}
            height={354}
            className="w-full"
          />
        </div>
      </div>

      <FeatureSection />
    </div>
  );
};

export default SavePlus;
