import Image from "next/image";
import welkom from "../../public/Frame 3232999.svg";
import Researcher from "./researcher";
import DesignProcess from "./design-process";
import WelkomSection from "./welkom";
import Challenges from "./challenges";
import info from "../../public/Information Art Correct 1.svg";
import wirefreame from "../../public/Wireframe white 1.svg";
import group from "../../public/Group 19302.svg";
import frame1 from "../../public/Frame 3233040.svg";
import frame2 from "../../public/Frame 3233041.svg";
import exchange from "../../public/Currency.svg";
import frame3 from "../../public/Current design.svg";
import frame4 from "../../public/Desktop - 2.svg";
import High from "./high";
import LastPart from "./last";
import Explore from "./explore";
import Analysis from "./analysis";
import feedback1 from "../../public/welkom_exchange.png";

export default function Page() {
  return (
    <main className="my-6 sm:my-8 md:my-10 flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 max-w-full overflow-x-hidden box-border">
      <header className="w-full max-w-full box-border">
        <Image
          className="border mx-auto w-full max-w-full lg:w-[1440px] h-auto"
          src={welkom}
          alt="header"
        />
      </header>
      <WelkomSection />
      <DesignProcess />
      <Researcher />
      <Explore />
      <Analysis />
      <Challenges />

      {/* User Flow */}
      <section className="grid gap-4 sm:gap-6 md:gap-8 max-w-full box-border">
        <div className="w-full lg:max-w-[383px] max-w-full box-border">
          <div className="">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-[#1A1A1A] font-bold wrap-break-word">
              User Flow
            </h2>
            <h4 className="text-[#556070] text-base sm:text-lg lg:text-[18px] font-normal mt-2 wrap-break-word font-helvetica400">
              This user flow reflects the thinking and decisions made during the
              design process.
            </h4>
          </div>
        </div>
        <div className="flex justify-center max-w-full overflow-hidden">
          <Image
            className="mx-auto w-full max-w-full lg:w-[1440px] h-auto"
            src={info}
            alt="user flow"
          />
        </div>
      </section>

      {/* Wireframes */}
      <section className="grid gap-4 sm:gap-6 md:gap-8 max-w-full box-border">
        <div className="w-full lg:max-w-[383px] max-w-full box-border">
          <div className="">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-[#1A1A1A] font-bold wrap-break-word">
              Wireframes
            </h2>
            <h4 className="text-[#556070] text-base sm:text-lg lg:text-[18px] font-normal mt-2 wrap-break-word font-helvetica400">
              I created initial sketches to explore and visualise design ideas.
            </h4>
          </div>
        </div>
        <div className="flex justify-center max-w-full overflow-hidden">
          <Image
            className="mx-auto w-full max-w-full lg:w-[1440px] h-auto"
            src={wirefreame}
            alt="wireframe"
          />
        </div>
      </section>

      {/* Design Iteration */}
      <section className="grid gap-4 sm:gap-6 md:gap-8 relative max-w-full box-border">
        <div className="w-full lg:max-w-[572px] max-w-full box-border">
          <div className="">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-[#1A1A1A] font-bold wrap-break-word">
              Design Iteration
            </h2>
            <h4 className="text-[#556070] text-base sm:text-lg lg:text-[18px] font-normal mt-2 wrap-break-word font-helvetica400">
              I tested several iterations of the homepage to ensure users could
              quickly find the information they need to make informed decisions,
              while also improving the visual appeal of the content feed.
            </h4>
          </div>
        </div>
        <div className="w-full xl:w-[1440px] h-auto  sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[650px] overflow-hidden max-w-full box-border">
          <Image
            className="mx-auto w-full h-auto object-contain"
            src={group}
            alt="design iteration"
          />
        </div>
      </section>

      {/* Feedbacks & Fixes */}
      <section className="grid gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20 max-w-full box-border">
        <div className="w-full lg:max-w-[572px] max-w-full box-border">
          <div className="">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-[#1A1A1A] font-bold wrap-break-word">
              Feedbacks & Fixes
            </h2>
            <h4 className="text-[#556070] text-base sm:text-lg lg:text-[18px] font-normal mt-2 wrap-break-word font-helvetica400">
              Based on testing and feedback, I identified the need to improve
              the search functionality, refine the card layout and arrangement,
              adjust the scroll icon, and enhance the side navigation for better
              usability.
            </h4>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-14 mt-6 sm:mt-8 md:mt-12 lg:mt-[77px] max-w-full box-border">
          <div className="grid gap-4 sm:gap-6 lg:gap-7 w-full">
            <h2 className="text-xl sm:text-[22px] text-[#2F80ED] wrap-break-word">
              Previous Iteration
            </h2>
            <Image src={frame1} alt="frame" className="w-full h-auto" />
          </div>
          <div className="grid gap-4 sm:gap-6 lg:gap-7 w-full">
            <h2 className="text-xl sm:text-[22px] text-[#2F80ED] wrap-break-word">
              Current Iteration
            </h2>
            <Image src={frame2} alt="frame" className="w-full h-auto" />
          </div>
        </div>

        {/* Feedback 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14 justify-between mt-4 max-w-full box-border">
          <div className="flex flex-col gap-2 sm:gap-3 max-w-full box-border">
            {/* <div className="bg-[#F9E6C9] rounded-[3px] flex items-center justify-between h-[180px] w-[360px] p-4">
              <div>
                <h3 className="text-[18px] text-[#0B393C]">
                  Exchange Currency
                </h3>
                <h5 className="text-[#547F92] text-base font-normal ">
                  Exchange money from one local currency to another
                </h5>
              </div>
              <Image src={coin} alt="frame" />
            </div> */}
            <div className="w-full lg:w-[360px] max-w-full box-border">
              <Image src={feedback1} alt="frame" className="w-full h-auto" />
            </div>
            <ol className="list-disc text-base sm:text-lg font-normal w-full lg:w-[341px] list-inside text-[#636161] space-y-1 sm:space-y-2 wrap-break-word font-helvetica400">
              <li className="wrap-break-word">
                Most users didn&apos;t realise{" "}
                <br className="hidden sm:block" /> the cards were clickable.
              </li>
              <li className="wrap-break-word">
                I also found that the cards contained too much information, all
                crowded in the same area, which made them harder to scan and
                engage with.
              </li>
            </ol>
          </div>

          <div className="grid gap-3 w-full lg:w-[517px] text-[#636161] max-w-full box-border min-w-0">
            <Image src={exchange} alt="frame" className="w-full h-auto" />
            <ol className="list-disc list-inside space-y-1 sm:space-y-2 text-base sm:text-lg wrap-break-word font-helvetica400">
              <li className="wrap-break-word">
                I kept the same width and icon as the previous card but
                increased the height to create better visual balance. This
                adjustment allowed for improved icon placement and added subtle
                background patterns for a more polished look.
              </li>
              <li className="wrap-break-word">
                I positioned the text next to the call-to-action (CTA) to make
                it clear to users that it is interactive and clickable.
              </li>
            </ol>
          </div>
        </div>

        {/* Feedback 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14 justify-between mt-4 max-w-full box-border">
          <div className="grid gap-3 max-w-full box-border">
            <Image src={frame4} alt="frame" className="w-full h-auto" />
          </div>
          <div className="grid gap-3 max-w-full box-border">
            <Image src={frame3} alt="frame" className="w-full h-auto" />
          </div>
        </div>
      </section>

      <High />
      <LastPart />
    </main>
  );
}
