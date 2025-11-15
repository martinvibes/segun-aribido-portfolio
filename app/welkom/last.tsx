import group from "../../public/dev-handbook.png";
import colors from "../../public/Colours.svg";
import screenshot from "../../public/Screenshot 2025-10-10 at 07.33.36 1.svg";
import Image from "next/image";

export default function LastPart() {
  return (
    <section className="max-w-full box-border">
      <div className="w-full lg:max-w-[575px] mt-8 sm:mt-12 md:mt-16 lg:mt-[88px] mb-6 sm:mb-8 md:mb-10 max-w-full box-border">
        <div className="">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-[#1A1A1A] font-bold wrap-break-word">
            Developer Handoff
          </h2>
          <h4 className="text-[#556070] text-base sm:text-lg leading-6 sm:leading-7 font-normal mt-2 wrap-break-word font-helvetica400">
            To conclude the project, I took the extra step of consolidating all
            design components into a structured design system. This provided
            consistency and made it easier for the development team to implement
            and maintain the product over time. I facilitated the design handoff
            using Zeplin to ensure smooth collaboration and accurate execution.{" "}
            <br />
            <strong>GRID:</strong> The layout uses a 12-column grid system to
            ensure consistent spacing and alignment across the design. <br />
            <strong>ICONS:</strong> Some of the icons used in this project were
            sourced from Remix Icon, an open-source React icon library. All
            icons are sized at 24px by 24px for visual consistency.
          </h4>
        </div>
      </div>

      <div className="w-full max-w-full overflow-hidden">
        <Image
          width={1200}
          height={1000}
          className="w-full h-auto"
          src={group}
          alt="wireframe"
        />
      </div>
      <div className="flex justify-center max-w-full overflow-hidden">
        <Image
          className="w-full max-w-[1440px] h-auto"
          src={screenshot}
          alt="wireframe"
        />
      </div>
      <div className="flex justify-center max-w-full overflow-hidden">
        <Image
          className="w-full max-w-[1440px] h-auto"
          src={colors}
          alt="wireframe"
        />
      </div>

      <div className="pb-12 sm:pb-16 md:pb-20 mt-8 sm:mt-10 md:mt-12 w-full lg:max-w-[575px] max-w-full box-border">
        <div className="">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-[#1A1A1A] font-bold wrap-break-word">
            Learning & Achievement
          </h2>
          <h4 className="text-[#556070] text-base sm:text-lg font-normal mb-4 sm:mb-5 mt-2 wrap-break-word font-helvetica400">
            This has been one of the most exciting and meaningful projects
            I&apos;ve worked on. Prior to this, I had never designed a product
            specifically for people migrating from one country to another.
            Having experienced the challenges of relocating from Nigeria to
            Rwanda myself, I understood how overwhelming it can be to face so
            many unknowns. Welkom-U was born from that insight — a product
            designed to support newcomers with relevant, localised information.
            It has since received recognition from Venn Innovation for its
            impact on individuals planning to migrate to Canada. Additionally,
            Welkom-U&apos;s CEO was named one of Atlantic Business
            magazine&apos;s 30 Under 30.
          </h4>
          <span className="text-[#556070] text-base sm:text-lg font-helvetica400">
            View the live project:{" "}
            <a href="www.welkom-u.ca" className="underline break-all">
              www.welkom-u.ca
            </a>{" "}
          </span>
        </div>
      </div>
    </section>
  );
}
