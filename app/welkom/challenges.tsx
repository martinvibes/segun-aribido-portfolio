import Link from "next/link";

export default function Challenges() {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-10 items-start py-8 sm:py-12 md:py-16 lg:py-32 max-w-full box-border">
      <div className="w-full lg:w-[383px] lg:shrink-0 lg:sticky lg:top-[100px] lg:self-start max-w-full box-border">
        <div className="lg:sticky lg:top-[100px]">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-[#1A1A1A] font-bold break-words">
            Challenges and Learning
          </h2>
          <h4 className="text-[#556070] text-base sm:text-lg font-normal mt-2 break-words">
            This project was my first opportunity to design for people
            relocating across countries. To better understand the needs of
            immigrants, I explored how relocation and immigration support apps
            work and gathered key insights from two primary sources.
          </h4>
        </div>
      </div>

      <div className="w-full lg:w-[528px] xl:w-[573px] lg:shrink-0 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-[#556070] max-w-full box-border min-w-0">
        <div className="flex flex-col gap-4 sm:gap-6 max-w-full box-border">
          <h2 className="text-[#556070] font-normal text-sm sm:text-base break-words">
            UX Collective Article
            <Link
              className="border-b border-[#556070] break-all"
              href="https://uxdesign.cc/making-the-move-abroad-less-difficult-a-ux-case-study-c63d8046a565?gi=055807a54d4d"
            >
              &quot;Making the move abroad less difficult — a UX case
              study&quot;
            </Link>{" "}
            by Paul Naylor
          </h2>
          <div className="bg-[#FFF400] min-h-[150px] sm:min-h-[201.01px] font-shadows-into-light w-full">
            <div className="bg-[#EBE000] w-full h-[28px]" />
            <div className="px-4 sm:px-6 md:px-10 pt-2 pb-4 sm:pb-6 md:pb-8 h-full">
              <ol className="text-base sm:text-lg lg:text-[20.83px] py-2 sm:py-3 text-[#000000] space-y-2 sm:space-y-3 break-words">
                <li className="flex gap-2 sm:gap-3 text-[#000000]">
                  <span className="shrink-0">1.</span>
                  <span className="break-words">
                    I gained an understanding of the complex bureaucratic
                    processes and paperwork involved in relocating to a new
                    country.
                  </span>
                </li>
                <li className="flex gap-2 sm:gap-3 text-[#000000]">
                  <span className="shrink-0">2.</span>
                  <span className="break-words">
                    People need access to as much reliable information as
                    possible about their new country to navigate the transition
                    smoothly.
                  </span>
                </li>
                <li className="flex gap-2 sm:gap-3 text-[#000000]">
                  <span className="shrink-0">3.</span>
                  <span className="break-words">
                    People relocating to a foreign country need to connect with
                    individuals who understand the local systems and
                    bureaucratic processes to help them settle more easily.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 max-w-full box-border">
          <h2 className="text-[#556070] font-normal text-base sm:text-lg break-words">
            UX Magazine
            <Link
              className="ml-1 sm:ml-2 border-b border-[#556070] break-all"
              href="https://uxmag.com/articles/onboarding-best-move-for-user-retention-in-mobile-apps"
            >
              &quot;Onboarding: best move for user retention in mobile
              apps&quot;
            </Link>
          </h2>
          <div className="bg-[#FFF400] min-h-[150px] sm:min-h-[201.01px] font-shadows-into-light w-full">
            <div className="bg-[#EBE000] w-full h-[28px]" />
            <div className="px-4 sm:px-6 md:px-10 pt-2 pb-4 sm:pb-6 md:pb-12 lg:pb-20 h-full">
              <ol className="text-base sm:text-lg lg:text-[21.73px] py-2 sm:py-3 text-[#000000] space-y-2 sm:space-y-3 break-words">
                <li className="flex gap-2 sm:gap-3 text-[#000000]">
                  <span className="shrink-0">1.</span>
                  <span className="break-words">
                    Users should be able to quickly understand the purpose of a
                    page without confusion or delay.
                  </span>
                </li>
                <li className="flex gap-2 sm:gap-3 text-[#000000]">
                  <span className="shrink-0">2.</span>
                  <span className="break-words">
                    Use clear, straightforward language that&apos;s easy for
                    users to understand.
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
