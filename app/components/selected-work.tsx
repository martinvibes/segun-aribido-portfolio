import Link from "next/link";
import { ArrowLeft } from "./icons";
import image1 from "../../public/Rectangle 90 (1).png";
import image2 from "../../public/Rectangle 90 (2).png";
import image3 from "../../public/Rectangle 90 (3).png";
import image4 from "../../public/Rectangle 90 (4).png";
import image5 from "../../public/Rectangle 90 (5).png";
import image6 from "../../public/Rectangle 90.png";
import Image from "next/image";

export default function SelectedWork() {
  const mockData = [
    {
      header: "Welkom-U Dashboard",
      text: `Helping immigrants settle seamlessly, with the 
tools, guidance, and community they need.`,
      image: image6,
      link: "/welkom",
    },
    {
      header: "GetSave USSD",
      text: "Empowering your financial journey through smarter saving tools.",
      image: image1,
      link: "/getSaved",
    },
    {
      header: "Cubos AI",
      text: "Leveraging artificial intelligence to transform how news is organised and understood.",
      image: image2,
      link: "/cubos",
    },
    {
      header: "SavePlus Web/Mobile",
      text: "Helping change makers raise funds, share stories, and inspire action.",
      image: image3,
      link: "/saveplus",
    },
    {
      header: "Farely Mobile App",
      text: "Designing a seamless ride-hailing experience that simplifies fare comparison ",
      image: image4,
      link: "/farely",
    },
    {
      header: "CouponVouch",
      text: "Making online shopping smarter, with verified deals you can actually trust.",
      image: image5,
      link: "/coupvouch",
    },
  ];

  return (
    <div
      id="work"
      className="scroll-smooth lg:top-[150px] lg:self-start max-w-full box-border"
    >
      <div className="text-[#505050] text-center mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6 md:px-8">
        <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[40px] break-words">
          Selected Work
        </h2>
        <h4 className="text-lg sm:text-xl md:text-2xl font-normal mt-2 break-words">
          Proof of impact, stories behind the pixels.
        </h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-9 w-full max-w-full box-border">
        {mockData.map((data, key) => {
          return (
            <div
              key={key}
              className="max-w-full w-full bg-[#FFFFFF] rounded-lg overflow-hidden"
            >
              <Image
                src={data.image}
                alt=""
                className="rounded-t-lg w-full h-auto"
              />
              <div className="py-4 sm:py-5 px-4 sm:px-6 md:px-7">
                <h3 className="text-[#87909D] text-xs sm:text-[13px]">
                  {data.header.includes("Cubos") ? "UI DESIGN" : "UX/UI DESIGN"}
                </h3>
                <h2 className="text-base sm:text-lg lg:text-[18px] text-[#1A1A1A] font-bold mt-1 break-words">
                  {data.header}
                </h2>
                <h4 className="text-[#556070] text-sm sm:text-[14px] mt-1 break-words">
                  {data.text}
                </h4>
                <div className="mt-6 sm:mt-8 md:mt-10 mb-2">
                  <Link
                    href={data.link}
                    className="flex border border-[#132238] cursor-pointer items-center w-fit py-2 px-3 sm:px-4 text-[#132238] gap-2 sm:gap-3 rounded-lg text-sm sm:text-base"
                  >
                    <span>Case study</span>
                    <ArrowLeft size="24" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
