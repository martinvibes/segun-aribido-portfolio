import Link from "next/link";
import { ArrowLeft } from "./components/icons";

export default function Footer() {
  return (
    <footer className="bg-[#F2F7FF]">
      <div className="mx-[32px] md:mx-[60px] lg:mx-[80px] xl:mx-[120px] max-w-[1440px] py-8 sm:py-10 md:py-14 border-b">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:items-end">
          <h2 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">
            Let&apos;s <br /> work <br />
            together
          </h2>
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <ArrowLeft size="48" />
            <h2 className="text-[#2F80ED] text-sm sm:text-base md:text-lg lg:text-xl break-all sm:break-normal">
              aribidoolusegun@gmail.com
            </h2>
          </div>
          <h4 className="text-[#000000] font-bold text-sm sm:text-base md:text-base font-helvetica400 ">
            Do you have an interesting project? I&apos;ll love to hear from you.
            Reach out and let&apos;s create something amazing together.
          </h4>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between border-t border-[#556070] mt-6 sm:mt-8 md:mt-10 pt-4 gap-4 sm:gap-0">
          <h2 className="text-[#5A6474] text-xs sm:text-sm md:text-base font-helvetica400">
            Copyright @ 2025 Olusegun Aribido
          </h2>
          <ul className="text-black flex flex-wrap items-center gap-4 sm:gap-6">
            <li>
              <Link
                className="border-b text-xs sm:text-sm md:text-base"
                href="https://www.linkedin.com/in/olusegun-aribido/"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                className="border-b text-xs sm:text-sm md:text-base"
                href="https://x.com/kadunaconnect"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                className="border-b text-xs sm:text-sm md:text-base"
                href="https://medium.com/@olusegunaribido"
              >
                Medium
              </Link>
            </li>
            <li>
              <Link
                className="border-b text-xs sm:text-sm md:text-base"
                href="https://dribbble.com/segunaribido"
              >
                Dribble
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
