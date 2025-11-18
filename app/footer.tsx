import Link from "next/link";
import { ArrowLeft } from "./components/icons";

export default function Footer() {
  return (
    <footer className="bg-[#F2F7FF] w-full overflow-x-hidden box-border">
      <div className="px-4 sm:px-6 md:px-8 lg:px-[60px] xl:px-[120px] max-w-[1440px] mx-auto py-6 sm:py-8 md:py-10 lg:py-14 border-b box-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-4 lg:gap-0 md:items-end max-w-full box-border">
          <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium wrap-break-word leading-tight">
            Let&apos;s <br /> work <br />
            together
          </h2>
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 min-w-0 max-w-full box-border flex-wrap sm:flex-nowrap">
            <div className="shrink-0 w-6 h-4 sm:w-8 sm:h-5 md:w-10 md:h-6 lg:w-12 lg:h-7 flex items-center [&>svg]:w-full [&>svg]:h-full">
              <ArrowLeft size="48" />
            </div>
            <h2 className="text-[#2F80ED] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl break-all sm:break-words wrap-break-word min-w-0 flex-1">
              aribidoolusegun@gmail.com
            </h2>
          </div>
          <h4 className="text-[#000000] font-bold text-xs sm:text-sm md:text-base lg:text-base font-helvetica400 wrap-break-word min-w-0 max-w-full box-border leading-relaxed mt-4 md:mt-0">
            Do you have an interesting project? I&apos;ll love to hear from you.
            Reach out and let&apos;s create something amazing together.
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center border-t border-[#556070] mt-4 sm:mt-6 md:mt-8 lg:mt-10 pt-4 sm:pt-5 md:pt-6 gap-3 sm:gap-4 lg:gap-6 box-border">
          <h2 className="text-[#5A6474] text-[10px] xs:text-xs sm:text-sm md:text-base font-helvetica400 shrink-0 max-w-full lg:max-w-none text-center lg:text-left">
            Copyright @ 2025 Olusegun Aribido
          </h2>
          <ul className="text-black flex flex-wrap items-center justify-center lg:justify-end gap-2 sm:gap-3 md:gap-4 lg:gap-6 shrink-0 min-w-0 max-w-full lg:max-w-none">
            <li>
              <Link
                className="border-b text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap hover:opacity-70 transition-opacity"
                href="https://www.linkedin.com/in/olusegun-aribido/"
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                className="border-b text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap hover:opacity-70 transition-opacity"
                href="https://x.com/kadunaconnect"
                target="_blank"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                className="border-b text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap hover:opacity-70 transition-opacity"
                href="https://medium.com/@olusegunaribido"
                target="_blank"
              >
                Medium
              </Link>
            </li>
            <li>
              <Link
                className="border-b text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap hover:opacity-70 transition-opacity"
                href="https://dribbble.com/segunaribido"
                target="_blank"
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
