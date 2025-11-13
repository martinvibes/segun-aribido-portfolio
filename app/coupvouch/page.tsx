import React from "react";
import Image from "next/image";
import {
  alignedSections,
  outcomeSection,
  reflectionSection,
} from "@/types/coupvouch";

export const CoupvouchPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Image
        src="/coupvouch/coupvouch.svg"
        alt="coupvouch logo"
        width={1200}
        height={1200}
        className="w-full mt-[52px]"
      />

      {/* Project Overview */}
      <div className="flex flex-col gap-8 mt-[70px]">
        {alignedSections.map((section, index) => (
          <div
            key={index}
            className="flex justify-between gap-10 mb-20 items-start"
          >
            {/* Left Column */}
            {section.leftTitle ? (
              <div className="w-[383px] shrink-0 sticky top-0">
                {index === 0 && (
                  <h3 className="text-[#87909D] text-xs font-medium mb-1">
                    UX/UI DESIGN
                  </h3>
                )}
                <h2
                  className={
                    index === 0
                      ? "text-[#1A1A1A] text-[32px] font-bold"
                      : "text-[#1A1A1A] text-[32px] font-bold"
                  }
                >
                  {section.leftTitle}
                </h2>
                {section.leftSubtitle && (
                  <p className="text-[#556070] text-lg font-normal py-1">
                    {section.leftSubtitle}
                  </p>
                )}
                {index === 0 && (
                  <a
                    href="https://www.couponvouch.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#556070] text-lg underline"
                  >
                    www.couponvouch.com
                  </a>
                )}
                {section.leftDescription && (
                  <p className="text-[#556070] text-lg font-normal leading-7 mt-2">
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
              <div className="w-[383px] shrink-0 sticky top-0"></div>
            )}

            {/* Right Column */}
            <div
              className={`${
                section.leftTitle ? "w-[628px]" : "w-[628px]"
              } shrink-0`}
            >
              <h2
                className={`text-[#2F80ED] text-[22px] font-medium ${
                  index === 0 ? "pt-[17px]" : ""
                } mb-1.5`}
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
                <ul
                  className={`list-disc ${
                    section.rightHeading == "User Interviews"
                      ? "space-y-4 pt-4"
                      : "space-y-0.5"
                  } space-y-0.5 tracking-[0.8%] text-[#556070] text-lg leading-7 pl-6`}
                >
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

              {section.rightHeading2 && (
                <h2 className="text-[#2F80ED] text-[22px] font-medium mt-8 mb-2">
                  {section.rightHeading2}
                </h2>
              )}
              {section.rightDescription2 && (
                <div className="text-[#556070] text-lg font-normal leading-7">
                  {section.rightDescription2}
                </div>
              )}
              {section.rightBullets2 && (
                <ul className="list-disc space-y-0.5 mt-2 tracking-[0.8%] text-[#556070] text-lg leading-7 pl-6">
                  {section.rightBullets2.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Product Screenshot */}
      <div className=" flex justify-end ">
        <Image
          src="/coupvouch/Laptopvjaao.svg"
          alt="CouponVouch product screenshot"
          width={628}
          height={354}
          className="rounded-lg"
        />
      </div>

      <div className="flex justify-between gap-7 px-7 pt-7 bg-[#FFFFFF] border rounded-lg mt-[87px]">
        <Image
          src="/coupvouch/v1.svg"
          alt="CouponVouch product screenshot"
          width={628}
          height={354}
          className="w-full"
        />

        <Image
          src="/coupvouch/v2.svg"
          alt="CouponVouch product screenshot"
          width={628}
          height={354}
          className=" w-full"
        />
      </div>

      <div className="flex gap-6 mt-[87px] w-full bg-[#FFFFFF] pl-7">
        {/* Left Column - 3 Images */}
        <div className="flex flex-col gap-6 flex-[2]">
          {/* Top: Beauty Products Card (Large) */}
          <Image
            src="/coupvouch/pic1.svg"
            alt="Beauty products deal card"
            width={532}
            height={500}
            className="w-full rounded-lg"
          />
          {/* Bottom: Two smaller cards side by side */}
          <div className="flex gap-6">
            <Image
              src="/coupvouch/pic2.svg"
              alt="Shoes deal card"
              width={321}
              height={246}
              className="flex-[3] w-full rounded-lg"
            />
            <Image
              src="/coupvouch/pic3.svg"
              alt="Savvy Spender's Guide card"
              width={216}
              height={241}
              className="flex-[2] w-full rounded-lg"
            />
          </div>
        </div>

        {/* Right Column - 2 Images (Staggered) */}
        <div className="flex  items-start justify-end gap-3 flex-[2.5]">
          {/* Left: Coupon Code Pop-up (Larger) */}
          <Image
            src="/coupvouch/pic-right4.svg"
            alt="Coupon code pop-up"
            width={400}
            height={500}
            className="flex-[1] rounded-lg"
          />
          {/* Right: TK Maxx Deal Card (Smaller, Lower position) */}
          <div className="flex-1 w-full flex translate-y-44">
            <Image
              src="/coupvouch/pic-right5.svg"
              alt="TK Maxx deal card"
              width={250}
              height={300}
              className="flex-[1] w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Outcome */}
      <div className="=  gap-10 items-start mt-[88px]">
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
        </div>
      </div>

      {/* Reflection & Learnings */}
      <div className=" gap-10 items-start mt-[88px] mb-[120px]">
        <div className="w-[383px] shrink-0">
          <h2 className="text-[#1A1A1A] text-[32px] font-bold">
            {reflectionSection.leftTitle}
          </h2>
        </div>

        <div className="w-[628px] shrink-0">
          <ul className="list-disc space-y-0.5 mt-2 tracking-[0.8%] text-[#556070] text-lg leading-7 pl-6">
            {reflectionSection.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
          {reflectionSection.link && (
            <p className="mt-4 text-[#556070] text-lg font-normal leading-7">
              {reflectionSection.link.text}{" "}
              <a
                href={reflectionSection.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#556070] underline"
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
