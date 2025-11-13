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
import coin from "../../public/coin 1.svg";
import exchange from "../../public/Currency.svg";
import frame3 from "../../public/Current design.svg";
import frame4 from "../../public/Desktop - 2.svg";
import High from "./high";
import LastPart from "./last";
import Explore from "./explore";
import Analysis from "./analysis";

export default function Page() {
  return (
    <main className="my-10 flex flex-col gap-20">
      <header>
        <Image
          className="border mx-auto w-[1440px]"
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
      <section className="grid gap-8">
        <div className="max-w-[383px]">
          <div className="">
            <h2 className="text-[32px] text-[#1A1A1A] font-bold">User Flow</h2>
            <h4 className="text-[#556070] text-[18px]">
              This user flow reflects the thinking and decisions made during the
              design process.
            </h4>
          </div>
        </div>
        <Image className="mx-auto w-[1440px]" src={info} alt="user flow" />
      </section>
      <section className="grid gap-8">
        <div className="max-w-[383px]">
          <div className="">
            <h2 className="text-[32px] text-[#1A1A1A] font-bold">Wireframes</h2>
            <h4 className="text-[#556070] text-[18px]">
              I created initial sketches to explore and visualise design ideas.
            </h4>
          </div>
        </div>
        <Image
          className="mx-auto w-[1440px]"
          src={wirefreame}
          alt="wireframe"
        />
      </section>
      <section className="grid gap-8 relative">
        <div className="max-w-[383px]">
          <div className="">
            <h2 className="text-[32px] text-[#1A1A1A] font-bold">
              Design Iteration
            </h2>
            <h4 className="text-[#556070] text-[18px]">
              I tested several iterations of the homepage to ensure users could
              quickly find the information they need to make informed decisions,
              while also improving the visual appeal of the content feed.
            </h4>
          </div>
        </div>
        <div className="w-[1440px] h-[650px] overflow-hidden">
          <Image
            className="mx-auto w-full"
            src={group}
            alt="design iteration"
          />
        </div>
      </section>
      <section className="grid gap-8">
        <div className="max-w-[572px]">
          <div className="">
            <h2 className="text-[32px] text-[#1A1A1A] font-bold">
              Feedbacks & Fixes
            </h2>
            <h4 className="text-[#556070] text-[18px]">
              Based on testing and feedback, I identified the need to improve
              the search functionality, refine the card layout and arrangement,
              adjust the scroll icon, and enhance the side navigation for better
              usability.
            </h4>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="grid gap-3">
            <h2 className="text-[22px] text-[#2F80ED]">Previous Iteration</h2>
            <Image src={frame1} alt="frame" />
          </div>
          <div className="grid gap-3">
            <h2 className="text-[22px] text-[#2F80ED]">Current Iteration</h2>
            <Image src={frame2} alt="frame" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="bg-[#F9E6C9] rounded-[3px] flex items-center justify-between h-[180px] w-[360px] p-4">
              <div>
                <h3 className="text-[18px] text-[#0B393C]">
                  Exchange Currency
                </h3>
                <h5 className="text-[#547F92] text-base">
                  Exchange money from one local currency to another
                </h5>
              </div>
              <Image src={coin} alt="frame" />
            </div>
            <ol className="list-disc list-inside text-[#636161]  w-[360px]">
              <li className="">
                Most users didn’t realise the cards were clickable.
              </li>
              <li>
                I also found that the cards contained too much information, all
                crowded in the same area, which made them harder to scan and
                engage with.
              </li>
            </ol>
          </div>
          <div className="grid gap-3 w-[570px] text-[#636161]">
            <Image src={exchange} alt="frame" />
            <ol className="list-disc list-inside">
              <li className="">
                I kept the same width and icon as the previous card but
                increased the height to create better visual balance. This
                adjustment allowed for improved icon placement and added subtle
                background patterns for a more polished look.
              </li>
              <li>
                I positioned the text next to the call-to-action (CTA) to make
                it clear to users that it is interactive and clickable.
              </li>
            </ol>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="grid gap-3">
            <Image src={frame4} alt="frame" />
          </div>
          <div className="grid gap-3">
            <Image src={frame3} alt="frame" />
          </div>
        </div>
      </section>
      <High />
      <LastPart />
    </main>
  );
}
