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
    <div id="work" className="scroll-smooth">
      <div className="text-[#505050] text-center mb-10">
        <h2 className="font-medium text-[40px]">Selected Work</h2>
        <h4 className="text-2xl font-normal">
          Proof of impact, stories behind the pixels.
        </h4>
      </div>
      <div className="grid grid-cols-3 gap-y-12">
        {mockData.map((data, key) => {
          return (
            <div key={key} className="max-w-[376px] bg-[#FFFFFF] rounded-lg">
              <Image src={data.image} alt="" className="rounded-t-lg" />
              <div className="py-5 px-7">
                <h3 className="text-[#87909D] text-[13px]">
                  {data.header.includes("Cubos") ? "UI DESIGN" : "UX/UI DESIGN"}
                </h3>
                <h2 className="text-[18px] text-[#1A1A1A] font-bold">
                  {data.header}
                </h2>
                <h4 className="text-[#556070] text-[14px]">{data.text}</h4>
                <div className="mt-10 mb-2">
                  <Link
                    href={data.link}
                    className="flex border border-[#132238] cursor-pointer items-center w-fit py-2 px-4 text-[#132238] gap-3 rounded-lg"
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
