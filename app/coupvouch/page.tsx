import React from "react";
import Image from "next/image";
import {
  alignedSections,
  outcomeSection,
  reflectionSection,
} from "@/types/coupvouch";

export const CoupvouchPage = () => {
  return (
    <div className="max-w-full overflow-x-hidden box-border">
      {/* Hero Section */}
      <Image
        src="/coupvouch/coupvouch.svg"
        alt="coupvouch logo"
        width={1200}
        height={1200}
        className="w-full mt-8 sm:mt-12 md:mt-[52px]"
      />

      {/* Project Overview */}
      <div className="flex flex-col gap-6 sm:gap-8 mt-8 sm:mt-12 md:mt-16 lg:mt-[70px] max-w-full box-border">
        {alignedSections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12 lg:mb-20 items-start max-w-full box-border"
          >
            {/* Left Column */}
            {section.leftTitle ? (
              <div className="w-full lg:w-[383px] lg:shrink-0 lg:sticky lg:top-[100px] lg:self-start max-w-full box-border">
                {index === 0 && (
                  <h3 className="text-[#87909D] text-xs font-medium mb-1">
                    UX/UI DESIGN
                  </h3>
                )}
                <h2
                  className={
                    index === 0
                      ? "text-[#1A1A1A] text-2xl sm:text-3xl lg:text-[32px] font-bold break-words"
                      : "text-[#1A1A1A] text-2xl sm:text-3xl lg:text-[32px] font-bold break-words"
                  }
                >
                  {section.leftTitle}
                </h2>
                {section.leftSubtitle && (
                  <p className="text-[#556070] text-base sm:text-lg font-normal py-1 break-words">
                    {section.leftSubtitle}
                  </p>
                )}
                {index === 0 && (
                  <a
                    href="https://www.couponvouch.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#556070] text-sm sm:text-base lg:text-lg underline break-all"
                  >
                    www.couponvouch.com
                  </a>
                )}
                {section.leftDescription && (
                  <p className="text-[#556070] text-base sm:text-lg font-normal leading-6 sm:leading-7 mt-2 break-words">
                    {section.leftDescription}
                  </p>
                )}
                {section.leftImage && (
                  <div className="mt-4">
                    <Image
                      src={section.leftImage}
                      alt={section.leftTitle || "Research illustration"}
                      width={383}
                      height={300}
                      className="w-full"
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full lg:w-[383px] lg:shrink-0 hidden lg:block"></div>
            )}

            {/* Right Column */}
            <div className="w-full lg:w-[528px] xl:w-[628px] lg:shrink-0 max-w-full box-border min-w-0">
              <h2
                className={`text-[#2F80ED] text-xl sm:text-[22px] font-medium ${
                  index === 0 ? "pt-0 lg:pt-[17px]" : ""
                } mb-1.5 break-words`}
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
                <ul
                  className={`list-disc ${
                    section.rightHeading == "User Interviews"
                      ? "space-y-2 sm:space-y-4 pt-2 sm:pt-4"
                      : "space-y-0.5"
                  } tracking-[0.8%] text-[#556070] text-base sm:text-lg leading-6 sm:leading-7 pl-5 sm:pl-6 break-words`}
                >
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

              {section.rightHeading2 && (
                <h2 className="text-[#2F80ED] text-xl sm:text-[22px] font-medium mt-6 sm:mt-8 mb-2 break-words">
                  {section.rightHeading2}
                </h2>
              )}
              {section.rightDescription2 && (
                <div className="text-[#556070] text-base sm:text-lg font-normal leading-6 sm:leading-7 break-words">
                  {section.rightDescription2}
                </div>
              )}
              {section.rightBullets2 && (
                <ul className="list-disc space-y-0.5 mt-2 tracking-[0.8%] text-[#556070] text-base sm:text-lg leading-6 sm:leading-7 pl-5 sm:pl-6 break-words">
                  {section.rightBullets2.map((bullet, idx) => (
                    <li key={idx} className="break-words">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Product Screenshot */}
      <div className="flex justify-center lg:justify-end mt-8 sm:mt-12 lg:mt-16 max-w-full overflow-hidden">
        <Image
          src="/coupvouch/Laptopvjaao.svg"
          alt="CouponVouch product screenshot"
          width={628}
          height={354}
          className="w-full max-w-full rounded-lg"
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-stretch gap-4 sm:gap-6 lg:gap-7 px-4 sm:px-6 lg:px-7 pt-6 sm:pt-7 pb-6 sm:pb-7 bg-[#FFFFFF] border rounded-lg mt-8 sm:mt-12 md:mt-16 lg:mt-[87px] max-w-full box-border">
        <div className="w-full sm:flex-1 shrink-0 min-w-0">
          <Image
            src="/coupvouch/v1.svg"
            alt="CouponVouch product screenshot"
            width={628}
            height={354}
            className="w-full h-auto"
          />
        </div>

        <div className="w-full sm:flex-1 shrink-0 min-w-0">
          <Image
            src="/coupvouch/v2.svg"
            alt="CouponVouch product screenshot"
            width={628}
            height={354}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-16 lg:mt-[87px] w-full bg-[#FFFFFF] px-4 sm:px-6 lg:pl-7 pt-4 sm:pt-6 md:pb-0 max-w-full box-border overflow-hidden">
        {/* Left Column - 3 Images */}
        <div className="flex flex-col gap-4 sm:gap-6 flex-1 lg:flex-[2]">
          {/* Top: Beauty Products Card (Large) */}
          <Image
            src="/coupvouch/pic1.svg"
            alt="Beauty products deal card"
            width={532}
            height={500}
            className="w-full rounded-lg"
          />
          {/* Bottom: Two smaller cards side by side */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Image
              src="/coupvouch/pic2.svg"
              alt="Shoes deal card"
              width={321}
              height={246}
              className="flex-1 md:flex-[3] w-full rounded-lg"
            />
            <Image
              src="/coupvouch/pic3.svg"
              alt="Savvy Spender's Guide card"
              width={216}
              height={241}
              className="flex-[1.1] md:flex-[2.1] w-full rounded-lg"
            />
          </div>
        </div>

        {/* Right Column - 2 Images (Staggered) */}
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start lg:items-start xl:justify-end gap-3 sm:gap-4 lg:gap-3 flex-1 lg:flex-[2.5] max-w-full box-border min-w-0 lg:hidden xl:flex">
          {/* Left: Coupon Code Pop-up (Larger) */}
          <Image
            src="/coupvouch/pic-right4.svg"
            alt="Coupon code pop-up"
            width={400}
            height={500}
            className="w-full sm:flex-1 rounded-lg max-w-full"
          />
          {/* Right: TK Maxx Deal Card (Smaller, Lower position) */}
          <div className="w-full sm:flex-1 lg:translate-y-0 xl:translate-y-44 max-w-full box-border min-w-0">
            <Image
              src="/coupvouch/pic-right5.svg"
              alt="TK Maxx deal card"
              width={250}
              height={300}
              className="w-full rounded-lg object-cover max-w-full"
            />
          </div>
        </div>
      </div>

      {/* Outcome */}
      <div className="flex flex-col gap-2 items-start mt-12 sm:mt-16 md:mt-20 lg:mt-[88px]">
        <div className="w-full lg:w-[383px] lg:shrink-0 max-w-full box-border">
          <h2 className="text-[#1A1A1A] text-2xl sm:text-3xl lg:text-[32px] font-bold break-words">
            {outcomeSection.leftTitle}
          </h2>
        </div>

        <div className="w-full lg:w-[528px] xl:w-[628px] lg:shrink-0 max-w-full box-border min-w-0">
          <ul className="list-disc space-y-0.5 mt-2 tracking-[0.8%] text-[#556070] text-base sm:text-lg leading-6 sm:leading-7 pl-7 break-words">
            {outcomeSection.bullets.map((bullet, idx) => (
              <li key={idx} className="break-words">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Reflection & Learnings */}
      <div className="flex flex-col gap-2 items-start mt-12 sm:mt-16 md:mt-20 lg:mt-[88px] mb-12 sm:mb-16 md:mb-24 lg:mb-[120px]">
        <div className="w-full lg:w-[383px] lg:shrink-0 max-w-full box-border">
          <h2 className="text-[#1A1A1A] text-2xl sm:text-3xl lg:text-[32px] font-bold break-words">
            {reflectionSection.leftTitle}
          </h2>
        </div>

        <div className="w-full lg:w-[528px] xl:w-[628px] lg:shrink-0 max-w-full box-border min-w-0">
          <ul className="list-disc space-y-0.5 mt-2 tracking-[0.8%] text-[#556070] text-base sm:text-lg leading-6 sm:leading-7 pl-7 break-words">
            {reflectionSection.bullets.map((bullet, idx) => (
              <li key={idx} className="break-words">
                {bullet}
              </li>
            ))}
          </ul>
          {reflectionSection.link && (
            <p className="mt-4 text-[#556070] text-base sm:text-lg font-normal leading-6 sm:leading-7 break-words">
              {reflectionSection.link.text}{" "}
              <a
                href={reflectionSection.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#556070] underline break-all"
              >
                {reflectionSection.link.url}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoupvouchPage;
