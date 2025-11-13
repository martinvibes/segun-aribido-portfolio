import group from "../../public/Group 19230.svg";
import colors from "../../public/Colours.svg";
import screenshot from "../../public/Screenshot 2025-10-10 at 07.33.36 1.svg";
import Image from "next/image";

export default function LastPart() {
  return (
    <section>
      <div className="max-w-[575px]">
        <div className="">
          <h2 className="text-[32px] text-[#1A1A1A] font-bold">
            Developer Handoff
          </h2>
          <h4 className="text-[#556070] text-[18px]">
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
      <Image className="mx-auto w-[1440px]" src={group} alt="wireframe" />
      <Image className="mx-auto w-[1440px]" src={screenshot} alt="wireframe" />
      <Image className="mx-auto w-[1440px]" src={colors} alt="wireframe" />
      <div className="pb-20 max-w-[575px]">
        <div className="">
          <h2 className="text-[32px] text-[#1A1A1A] font-bold">
            Learning & Achievement
          </h2>
          <h4 className="text-[#556070] text-[18px]">
            This has been one of the most exciting and meaningful projects I’ve
            worked on. Prior to this, I had never designed a product
            specifically for people migrating from one country to another.
            Having experienced the challenges of relocating from Nigeria to
            Rwanda myself, I understood how overwhelming it can be to face so
            many unknowns. Welkom-U was born from that insight — a product
            designed to support newcomers with relevant, localised information.
            It has since received recognition from Venn Innovation for its
            impact on individuals planning to migrate to Canada. Additionally,
            Welkom-U’s CEO was named one of Atlantic Business magazine’s 30
            Under 30. View the live project: www.welkom-u.ca
          </h4>
        </div>
      </div>
    </section>
  );
}
