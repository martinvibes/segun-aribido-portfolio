import React from "react";
import Image from "next/image";
import {
  alignedSections,
  userPersonasSection,
  designApproachSection,
  outcomeSection,
  reflectionSection,
} from "@/types/farely";

const Farely = () => {
  return (
    <div>
      {/* Hero Section */}
      <Image
        src="/farely/farelyHero.svg"
        alt="farely"
        width={1200}
        height={1200}
        className="w-full h-full mt-[52px]"
      />

      {/* Project Overview */}
      <div className="flex flex-col gap-8 mt-[70px]">
        {alignedSections.map((section, index) => (
          <div
            key={index}
            className="flex justify-between gap-10 items-start mt-[100px]"
          >
            {/* Left Column */}
            <div className="w-[383px] shrink-0">
              {index === 0 && (
                <h3 className="text-[#87909D] text-xs font-medium mb-1">
                  UX/UI DESIGN
                </h3>
              )}
              {section.leftTitle && (
                <h2 className={"text-[#1A1A1A] text-[32px] font-bold"}>
                  {section.leftTitle}
                </h2>
              )}
              {section.leftSubtitle && (
                <p className="text-[#556070] text-lg font-normal py-2">
                  {section.leftSubtitle}
                </p>
              )}
              {section.leftDescription && (
                <p className="text-[#556070] text-lg font-normal leading-7 mt-2">
                  {section.leftDescription}
                </p>
              )}
            </div>

            {/* Right Column */}
            <div className="w-[628px] shrink-0">
              <h2
                className={`text-[#2F80ED] text-[22px] font-medium ${
                  index === 0 ? "pt-[17px]" : ""
                } mb-2`}
              >
                {section.rightHeading}
              </h2>
              {section.rightDescription && (
                <div className="text-[#556070] text-lg font-normal leading-7">
                  {section.rightDescription
                    .split("\n")
                    .map((paragraph, idx) => (
                      <p key={idx} className={idx > 0 ? "mt-4" : ""}>
                        {paragraph}
                      </p>
                    ))}
                </div>
              )}
              {section.rightBullets && (
                <ul className="list-disc space-y-0.5 mt-2 tracking-[0.8%] text-[#556070] text-lg leading-7 pl-6">
                  {section.rightBullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}
              {section.rightConclusion && (
                <p className="text-[#556070] text-lg font-normal leading-7 mt-4">
                  {section.rightConclusion}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* User Personas */}
      <div className="flex justify-between gap-10 items-start mt-[120px]">
        <div className="w-[383px] shrink-0">
          <h2 className="text-[#1A1A1A] text-[32px] font-bold">
            {userPersonasSection.leftTitle}
          </h2>
        </div>

        <div className="w-[628px] shrink-0">
          {userPersonasSection.rightIntro && (
            <p className="text-lg text-[#2F80ED] text-[22px] font-medium mb-2 leading-7">
              {userPersonasSection.rightIntro}
            </p>
          )}
          {userPersonasSection.rightDescription && (
            <p className="text-[#556070] text-lg font-normal leading-7 mb-6">
              {userPersonasSection.rightDescription}
            </p>
          )}

          <div className="flex flex-col gap-6">
            {userPersonasSection.personas.map((persona, idx) => (
              <div key={idx} className="flex gap-8">
                <Image
                  src={persona.icon}
                  alt={persona.title}
                  width={56}
                  height={56}
                  className="w-[56px] h-[56px] shrink-0"
                />
                <div className="text-[#556070] text-lg font-normal leading-7">
                  <span className="text-lg tracking-[0.8%] font-bold text-[#556070]">
                    {" "}
                    {persona.title} -{" "}
                  </span>
                  {persona.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Design Approach */}
      <div className="flex justify-between gap-10 items-start mt-[120px]">
        <div className="w-[383px] shrink-0 mt-[10px">
          <h2 className="text-[#1A1A1A] text-[32px] font-bold">
            {designApproachSection.leftTitle}
          </h2>
        </div>

        <div className="w-[628px] shrink-0 flex flex-col gap-12 overflow-visible">
          {designApproachSection.items.map((item, idx) => (
            <div key={idx} className="mt-[10px]">
              <h3 className="text-[#2F80ED] text-[22px] font-medium mb-2">
                {item.number}. {item.title}
              </h3>
              <ul className="list-disc space-y-0.5 mt-2 tracking-[0.8%] text-[#556070] text-lg leading-7 pl-7">
                {item.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx}>{bullet}</li>
                ))}
              </ul>
              <div
                className={` ${
                  Number(item.number) === 2
                    ? "w-[800px] translate-x-[-82px] mt-0"
                    : "w-full mt-8"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={Number(item.number) === 2 ? 732 : 628}
                  height={627}
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Iphone Mockup section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-15 w-full mt-[88px]">
        <Image
          src="/farely/iphone1.svg"
          alt="iphone mockup"
          width={1200}
          height={1200}
          className="w-full h-full"
        />
        <Image
          src="/farely/iphone2.svg"
          alt="iphone mockup"
          width={1200}
          height={1200}
          className="w-full h-full"
        />
        <Image
          src="/farely/iphone3.svg"
          alt="iphone mockup"
          width={1200}
          height={1200}
          className="w-full h-full"
        />
        <Image
          src="/farely/iphone4.svg"
          alt="iphone mockup"
          width={1200}
          height={1200}
          className="w-full h-full"
        />
      </div>

      {/* Outcome */}
      <div className=" gap-10 items-start mt-[120px] w-[543px]">
        <div className="w-[383px] shrink-0">
          <h2 className="text-[#1A1A1A] text-[32px] font-bold">
            {outcomeSection.leftTitle}
          </h2>
        </div>

        <div className="w-[628px] shrink-0">
          <ul className="list-disc space-y-0.5 mt-2 tracking-[0.8%] text-[#556070] text-lg leading-7 pl-6">
            {outcomeSection.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
          {outcomeSection.conclusion && (
            <p className="text-[#556070] text-lg font-normal leading-7 mt-2">
              {outcomeSection.conclusion}
            </p>
          )}
        </div>
      </div>

      {/* Reflection */}
      <div className=" gap-10 items-start mt-[88px] mb-[108px] w-[543px]">
        <div className="w-[383px] shrink-0">
          <h2 className="text-[#1A1A1A] text-[32px] font-bold">
            {reflectionSection.leftTitle}
          </h2>
        </div>

        <div className="w-[628px] shrink-0">
          <p className="text-[#556070] text-lg font-normal leading-7">
            {reflectionSection.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Farely;
