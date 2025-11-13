import Image from "next/image";
import image1 from "../../public/Group 19298.svg";

export default function Analysis() {
  return (
    <div className="flex justify-between">
      <div className="max-w-[383px]">
        <div className="sticky top-0">
          <h2 className="text-[32px] text-[#1A1A1A] font-bold">
            Competitor Analysis
          </h2>
          <p className="text-[#556070] font-medium">
            I conducted a competitive review of similar products in Canada that
            support immigrants, identifying their strengths, gaps, and areas for
            improvement to inform the design of a more user-centred solution.
          </p>
        </div>
      </div>
      <div className="max-w-[628px] grid gap-8 text-[#556070]">
        <h2 className="text-[#2F80ED] font-medium text-[22px]">
          What others are doing?
        </h2>
        <Image src={image1} alt="" />
      </div>
    </div>
  );
}
