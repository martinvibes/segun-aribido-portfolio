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
    <div className=" box-border max-w-full overflow-x-hidden">
      {/* Hero Section */}
      <Image
        src="/farely/farelyHero.svg"
        alt="farely"
        width={1200}
        height={1200}
        className="w-full h-auto mt-8 sm:mt-[52px] box-border"
      />

      {/* Project Overview */}
      <div className="flex flex-col gap-8">
        {alignedSections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-10 items-start mt-12 sm:mt-16 lg:mt-[100px]"
          >
            {/* Left Column */}
            <div className="w-full lg:w-[383px] lg:shrink-0 lg:sticky lg:top-[100px] lg:self-start lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto box-border">
              {index === 0 && (
                <h3 className="text-[#87909D] text-xs font-medium mb-1">
                  UX/UI DESIGN
                </h3>
              )}
              {section.leftTitle && (
                <h2 className="text-[#1A1A1A] text-2xl sm:text-3xl lg:text-[32px] font-bold break-words">
                  {section.leftTitle}
                </h2>
              )}
              {section.leftSubtitle && (
                <p className="text-[#556070] text-base sm:text-lg font-normal py-2 break-words">
                  {section.leftSubtitle}
                </p>
              )}
              {section.leftDescription && (
                <p className="text-[#556070] text-base sm:text-lg font-normal leading-6 sm:leading-7 mt-2 break-words">
                  {section.leftDescription}
                </p>
              )}
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-[628px] lg:shrink-0 box-border max-w-full">
              <h2
                className={`text-[#2F80ED] text-xl sm:text-[22px] font-medium ${
                  index === 0 ? "pt-0 lg:pt-[17px]" : ""
                } mb-2 break-words`}
              >
                {section.rightHeading}
              </h2>
              {section.rightDescription && (
                <div className="text-[#556070] text-base sm:text-lg font-normal leading-6 sm:leading-7 break-words">
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
                <ul className="list-disc space-y-0.5 mt-2 tracking-[0.8%] text-[#556070] text-base sm:text-lg leading-6 sm:leading-7 pl-5 sm:pl-6 break-words">
                  {section.rightBullets.map((bullet, idx) => (
                    <li key={idx} className="break-words">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
              {section.rightConclusion && (
                <p className="text-[#556070] text-base sm:text-lg font-normal leading-6 sm:leading-7 mt-4 break-words">
                  {section.rightConclusion}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* User Personas */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-10 items-start mt-12 sm:mt-16 lg:mt-[120px] mb-12 sm:mb-16 lg:mb-0">
        <div className="w-full lg:w-[383px] lg:shrink-0 lg:sticky lg:top-[100px] lg:self-start lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto">
          <h2 className="text-[#1A1A1A] text-2xl sm:text-3xl lg:text-[32px] font-bold">
            {userPersonasSection.leftTitle}
          </h2>
        </div>

        <div className="w-full lg:w-[628px] lg:shrink-0 box-border max-w-full">
          {userPersonasSection.rightIntro && (
            <p className="text-[#2F80ED] text-xl sm:text-[22px] font-medium mb-2 leading-6 sm:leading-7 break-words">
              {userPersonasSection.rightIntro}
            </p>
          )}
          {userPersonasSection.rightDescription && (
            <p className="text-[#556070] text-base sm:text-lg font-normal leading-6 sm:leading-7 mb-4 sm:mb-6 break-words">
              {userPersonasSection.rightDescription}
            </p>
          )}

          <div className="flex flex-col gap-4 sm:gap-6">
            {userPersonasSection.personas.map((persona, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row gap-3 sm:gap-6 lg:gap-8 box-border"
              >
                <Image
                  src={persona.icon}
                  alt={persona.title}
                  width={56}
                  height={56}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-[56px] lg:h-[56px] shrink-0"
                />
                <div className="text-[#556070] text-base sm:text-lg font-normal leading-6 sm:leading-7 flex-1 min-w-0 break-words box-border">
                  <span className="text-base sm:text-lg tracking-[0.8%] font-bold text-[#556070]">
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
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-10 items-start mt-12 sm:mt-16 lg:mt-[120px] mb-12 sm:mb-16 lg:mb-0">
        <div className="w-full lg:w-[383px] lg:shrink-0 lg:mt-[10px] lg:sticky lg:top-[100px] lg:self-start lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto">
          <h2 className="text-[#1A1A1A] text-2xl sm:text-3xl lg:text-[32px] font-bold">
            {designApproachSection.leftTitle}
          </h2>
        </div>

        <div className="w-full lg:w-[628px] lg:shrink-0 flex flex-col gap-8 sm:gap-10 lg:gap-12 box-border max-w-full">
          {designApproachSection.items.map((item, idx) => (
            <div
              key={idx}
              className="mt-2 lg:mt-[10px] w-full box-border max-w-full"
            >
              <h3 className="text-[#2F80ED] text-xl sm:text-[22px] font-medium mb-2 break-words">
                {item.number}. {item.title}
              </h3>
              <ul className="list-disc space-y-0.5 mt-2 tracking-[0.8%] text-[#556070] text-base sm:text-lg leading-6 sm:leading-7 pl-5 sm:pl-7 break-words">
                {item.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="break-words">
                    {bullet}
                  </li>
                ))}
              </ul>
              <div
                className={` ${
                  Number(item.number) === 2
                    ? "w-full lg:w-[800px] translate-x-0 lg:translate-x-[-82px] mt-0"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-[61px] w-full mt-12 sm:mt-16 lg:mt-[88px] max-w-full">
        <Image
          src="/farely/iphone1.svg"
          alt="iphone mockup"
          width={300}
          height={600}
          className="w-full h-auto max-w-full"
        />
        <Image
          src="/farely/iphone2.svg"
          alt="iphone mockup"
          width={300}
          height={600}
          className="w-full h-auto max-w-full"
        />
        <Image
          src="/farely/iphone3.svg"
          alt="iphone mockup"
          width={300}
          height={600}
          className="w-full h-auto max-w-full"
        />
        <Image
          src="/farely/iphone4.svg"
          alt="iphone mockup"
          width={300}
          height={600}
          className="w-full h-auto max-w-full"
        />
      </div>

      {/* Outcome */}
      <div className=" gap-10 items-start mt-[120px] w-[543px]">
        <div className="w-[383px] shrink-0 sticky top-0 self-start">
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
        <div className="w-[383px] shrink-0 sticky top-0 self-start">
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
