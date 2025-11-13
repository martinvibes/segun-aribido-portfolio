import Link from "next/link";

export default function Challenges() {
  return (
    <section className="flex justify-between py-32">
      <div className="max-w-[383px]">
        <div className="sticky top-0">
          <h2 className="text-[32px] text-[#1A1A1A] font-bold">
            Challenges and Learning
          </h2>
          <h4 className="text-[#556070] text-[18px]">
            This project was my first opportunity to design for people
            relocating across countries. To better understand the needs of
            immigrants, I explored how relocation and immigration support apps
            work and gathered key insights from two primary sources.
          </h4>
        </div>
      </div>
      <div className="max-w-[628px] grid gap-12 text-[#556070]">
        <div className="flex flex-col gap-6">
          <h2 className="text-[#556070] font-normal text-base">
            UX Collective Article
            <Link
              className="border-b border-[#556070]"
              href="https://uxdesign.cc/making-the-move-abroad-less-difficult-a-ux-case-study-c63d8046a565?gi=055807a54d4d"
            >
              “Making the move abroad less difficult — a UX case study”
            </Link>
            by Paul Naylor
          </h2>
          <div className="bg-[#FFF400] min-h-[201.01px font-shadows-into-light">
            <div className="bg-[#EBE000] w-full h-[19px]" />
            <div className="px-4 h-full">
              <ol className="text-[20.83px] py-3 text-[#000000]">
                <li className="flex gap-3 text-[#000000]">
                  <span className="">1.</span>
                  <span>
                    I gained an understanding of the complex bureaucratic
                    processes and paperwork involved in relocating to a new
                    country.
                  </span>
                </li>
                <li className="flex gap-3 text-[#000000]">
                  <span className="">2.</span>
                  <span>
                    People need access to as much reliable information as
                    possible about their new country to navigate the transition
                    smoothly.
                  </span>
                </li>
                <li className="flex gap-3 text-[#000000]">
                  <span className="">3.</span>
                  <span>
                    People relocating to a foreign country need to connect with
                    individuals who understand the local systems and
                    bureaucratic processes to help them settle more easily.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[#556070] font-normal text-base">
            UX Magazine
            <Link
              className="ml-2 border-b border-[#556070]"
              href="https://uxmag.com/articles/onboarding-best-move-for-user-retention-in-mobile-apps"
            >
              “Onboarding: best move for user retention in mobile apps”
            </Link>
          </h2>
          <div className="bg-[#FFF400] min-h-[201.01px font-shadows-into-light">
            <div className="bg-[#EBE000] w-full h-[19px]" />
            <div className="px-4 h-full">
              <ol className="text-[20.83px] py-3 text-[#000000]">
                <li className="flex gap-3 text-[#000000]">
                  <span className="">1.</span>
                  <span>
                    I gained an understanding of the complex bureaucratic
                    processes and paperwork involved in relocating to a new
                    country.
                  </span>
                </li>
                <li className="flex gap-3 text-[#000000]">
                  <span className="">2.</span>
                  <span>
                    People need access to as much reliable information as
                    possible about their new country to navigate the transition
                    smoothly.
                  </span>
                </li>
                <li className="flex gap-3 text-[#000000]">
                  <span className="">3.</span>
                  <span>
                    People relocating to a foreign country need to connect with
                    individuals who understand the local systems and
                    bureaucratic processes to help them settle more easily.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
