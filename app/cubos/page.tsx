import Image from "next/image";
import React from "react";
import { alignedSections } from "@/types/cubos";

const CubosPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Image
        src="/cubos/cubos.png"
        alt="Cubos"
        width={1200}
        height={1200}
        className="w-full mt-[52px]"
      />

      {/* Project Overview */}
      <div className="flex flex-col gap-8 mt-[70px]">
        {alignedSections.map((section, index) => (
          <div
            key={index}
            className="flex justify-between gap-10 items-start mb-16"
          >
            {/* Left Column */}
            {section.leftTitle ? (
              <div className="w-[383px] shrink-0 sticky top-0">
                {index === 0 && (
                  <h3 className="text-[#87909D] text-xs font-medium mb-1">
                    UI DESIGN
                  </h3>
                )}
                <h2
                  className={
                    index === 0
                      ? "text-[#1A1A1A] text-[32px] font-bold text-nowrap"
                      : "text-[#1A1A1A] text-[32px] font-bold text-nowrap"
                  }
                >
                  {section.leftTitle}
                </h2>
                {section.leftSubtitle && (
                  <p className="text-[#556070] text-lg font-normal py-2">
                    {section.leftSubtitle}
                  </p>
                )}
                {index === 0 && (
                  <a
                    href="https://bit.ly/3wz0Okc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#556070] text-lg underline"
                  >
                    https://bit.ly/3wz0Okc
                  </a>
                )}
                {section.leftDescription && (
                  <p className="text-[#556070] text-lg font-normal leading-7 mt-2">
                    {section.leftDescription}
                  </p>
                )}
                {section.leftImage && (
                  <div className="mt-2">
                    <Image
                      src={section.leftImage}
                      alt={section.leftTitle || "Team illustration"}
                      width={308}
                      height={300}
                      className=""
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="w-[383px] shrink-0"></div>
            )}

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
                <>
                  <h3 className="text-[#2F80ED] text-[22px] font-medium mt-6 mb-2">
                    My responsibilities were:
                  </h3>
                  <ul className="list-disc space-y-0.5 mt-2 tracking-[0.8%] text-[#556070] text-lg leading-7 pl-6">
                    {section.rightBullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </>
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

      {/* Cubos Features 1 */}
      <div className="mt-[100px]">
        <div className="w-[783px]">
          <h1 className="text-[#1A1A1A] w-[573px] text-[32px] font-bold mb-3">
            Envisioning Future User Experiences through User Flows
          </h1>
          <p className="text-[#556070] text-lg font-normal leading-7">
            Designing an AI-powered news classification platform required a
            strong focus on optimizing user flows to deliver a seamless and
            intuitive experience. I explored multiple design iterations, mapping
            out each key user action, from article classification to dashboard
            navigation—while continuously refining and testing each step. This
            user-centered design process ensured that every interaction was
            simple, efficient, and aligned with the platform’s goal of making
            intelligent news discovery effortless and engaging.
          </p>
        </div>
        <Image
          src="/cubos/cubos-site1.png"
          alt="Cubos User Flow"
          width={1200}
          height={1200}
          className="w-full mt-[32px]"
        />
      </div>

      {/* Cubos Features 2 */}
      <div className="mt-[88px]">
        <div className="w-[783px]">
          <h1 className="text-[#1A1A1A] w-[573px] text-[32px] font-bold mb-3">
            Wire-framing
          </h1>
          <p className="text-[#556070] text-lg font-normal leading-7">
            To clarify and validate the user experience early in the design
            process, I began by creating rough sketches and low-fidelity
            wireframes that visualized my initial ideas for the platform&apos;s
            key interactions. These early design explorations helped me
            communicate user flows clearly and align with stakeholders on
            functionality and priorities before investing time in detailed
            visuals. By sharing and iterating on these sketches, I gathered
            valuable stakeholder feedback, refined the information architecture,
            and ensured that the transition to high-fidelity, production-ready
            designs was both efficient and user-driven. This collaborative and
            iterative approach laid a strong foundation for a seamless,
            intuitive, and scalable AI-powered news platform.
          </p>
        </div>
        <Image
          src="/cubos/cubos-site2.png"
          alt="Cubos User Flow"
          width={1200}
          height={1200}
          className="w-full mt-[32px]"
        />
      </div>

      <div className="mt-[88px] flex items-start justify-between gap-10">
        <div className="w-[500px]">
          <h1 className="text-[#1A1A1A] w-[573px] text-[32px] font-bold">
            High-Fidelity Design
          </h1>
          <p className="text-[#556070] text-lg font-normal leading-7">
            I quickly transformed low-fidelity sketches into high-fidelity UI
            designs to craft a polished, user-centered experience for the
            platform. Using an iterative design process, I developed interactive
            prototypes that enabled real-world user testing and data-driven
            validation of design decisions. This approach ensured the final
            interface was not only visually engaging but also highly functional,
            intuitive, and optimized for seamless user interaction within the
            AI-powered news classification platform.
          </p>
        </div>

        <div>
          <Image
            src="/cubos/cubos-pc.png"
            alt="Cubos User Flow"
            width={628}
            height={354}
            className="w-full"
          />
        </div>
      </div>

      {/* Dashboard Screenshots Grid */}
      <div className="mt-[88px] grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-lg bg-[#FFFFFF] px-7 pt-[50px] pb-[72px]">
        <Image
          src="/cubos/dash3.png"
          alt="Cubos Dashboard 3"
          width={600}
          height={400}
          className="w-full rounded-lg"
        />
        <Image
          src="/cubos/dash4.png"
          alt="Cubos Dashboard 4"
          width={600}
          height={400}
          className="w-full rounded-lg"
        />
      </div>

      <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-lg bg-[#FFFFFF] px-7 pt-[50px]">
        <Image
          src="/cubos/dash2.png"
          alt="Cubos Dashboard 3"
          width={600}
          height={400}
          className="w-full rounded-lg"
        />
        <Image
          src="/cubos/dash1.png"
          alt="Cubos Dashboard 4"
          width={600}
          height={400}
          className="w-full rounded-lg"
        />
      </div>

      <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-lg bg-[#FFFFFF] px-7 pt-[50px]">
        <Image
          src="/cubos/dash5.png"
          alt="Cubos Dashboard 3"
          width={600}
          height={400}
          className="w-full rounded-lg"
        />
        <Image
          src="/cubos/dash6.png"
          alt="Cubos Dashboard 4"
          width={600}
          height={400}
          className="w-full rounded-lg"
        />
      </div>

      <div className=" gap-10 items-start mt-[88px] mb-[120px]">
        <div className="w-[383px] shrink-0">
          <h2 className="text-[#1A1A1A] text-[32px] font-bold">
            Learning & Achievement
          </h2>
        </div>

        <div className="w-[628px] shrink-0 space-y-2 mt-2 tracking-[0.8%] text-[#556070] text-lg leading-7">
          <p className="">
            To finalize the project, I consolidated all UI components into a
            unified design system, ensuring visual consistency, scalability, and
            development efficiency across the platform. This Figma-based design
            system streamlined collaboration, enabling the engineering team to
            implement, maintain, and iterate on the product with ease.
          </p>
          <p>
            For quality assurance, I implemented a side-by-side design
            validation process, comparing screenshots from the staging
            environment with the original Figma design files. This method
            allowed us to quickly identify and resolve visual discrepancies,
            including spacing inconsistencies, color mismatches, and text
            errors, ensuring pixel-perfect accuracy before launch.
          </p>
          <p>
            This structured and detail-oriented approach resulted in a
            high-quality, production-ready design that was efficient to build,
            easy to maintain, and visually consistent across all user
            interfaces.
          </p>

          <p className="mt-4 text-[#556070] text-lg font-normal leading-7">
            <a
              href="https://bit.ly/3wz0Okc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#556070]"
            >
              View project here{" "}
              <span className="underline">https://bit.ly/3wz0Okc</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CubosPage;
