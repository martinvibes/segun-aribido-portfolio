import Image from "next/image";
import image1 from "../../public/Group 19297.svg";

export default function Explore() {
  return (
    <div className="flex justify-between">
      <div className="max-w-[383px]">
        <div className="sticky top-0">
          <h2 className="text-[32px] text-[#1A1A1A] font-bold">
            Exploring Opportunities
          </h2>
          <p className="text-[#556070] font-medium">
            I used the “How Might We” framework to turn user challenges into
            design opportunities. This helped me generate solution ideas
            grounded in real user insights and ensure the approach stayed
            focused on their needs.
          </p>
        </div>
      </div>
      <div className="max-w-[628px] grid gap-8 text-[#556070]">
        <h2 className="text-[#2F80ED] font-medium text-[22px]">How Might We</h2>
        <Image src={image1} alt="" />
      </div>
    </div>
  );
}
