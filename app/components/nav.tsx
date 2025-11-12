import Image from "next/image";
import logo from "../../public/Frame 3232950.svg";

export default function Nav() {
  return (
    <nav className="bg-[#FFFFFF] flex justify-between items-center gap-4 rounded-full py-4 px-6 shadow-md">
      <div className="flex items-center gap-3">
        <Image src={logo} alt="logo" />
        <h2 className="text-[#1A1A1A] font-extrabold font-bricolage">
          SEGUN <br /> ARIBIDO
        </h2>
      </div>
      <ul className="text-[#1A1A1A] flex justify-between items-center gap-9">
        <li className="cursor-pointer text-[18px]">Home</li>
        <li className="cursor-pointer text-[18px]">Work</li>
        <li className="cursor-pointer text-[18px]">About me</li>
        <button className="border text-[18px] border-[#505050] py-[13px] px-6 rounded-[8px]">
          Let’s Work
        </button>
      </ul>
    </nav>
  );
}
