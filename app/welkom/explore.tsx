import Image from "next/image";
import image1 from "../../public/Group 19297.svg";

export default function Explore() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-10 items-start mt-8 sm:mt-12 md:mt-16 lg:mt-[120px] max-w-full box-border">
      <div className="w-full lg:w-[383px] lg:shrink-0 lg:sticky lg:top-[130px] lg:self-start max-w-full box-border">
        <div className="lg:sticky lg:top-[100px]">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-[#1A1A1A] font-bold wrap-break-word">
            Exploring Opportunities
          </h2>
          <p className="text-[#556070] text-base sm:text-lg font-normal mt-2 wrap-break-word font-helvetica400">
            I used the &quot;How Might We&quot; framework to turn user
            challenges into design opportunities. This helped me generate
            solution ideas grounded in real user insights and ensure the
            approach stayed focused on their needs.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-[528px] xl:w-[628px] lg:shrink-0 grid gap-4 sm:gap-6 lg:gap-7 text-[#556070] max-w-full box-border min-w-0">
        <h2 className="text-[#2F80ED] font-medium text-xl sm:text-[22px] wrap-break-word">
          How Might We
        </h2>
        <Image src={image1} alt="" className="w-full h-auto" />
      </div>
    </div>
  );
}
