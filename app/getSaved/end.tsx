import image1 from "@/public/savePlus/user1.svg";
import image2 from "@/public/savePlus/user2.svg";
import image3 from "@/public/savePlus/user3.svg";
import group from "../../public/Group 536.svg";
import info from "../../public/Group 18969 1.svg";
import woman from "../../public/Mask group.png";

import Image from "next/image";
import Link from "next/link";
export default function End() {
  return (
    <section className="max-w-full box-border">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-10 items-start max-w-full box-border">
        <div className="w-full lg:w-[400px] lg:shrink-0 lg:sticky lg:top-[130px] lg:self-start max-w-full box-border">
          <div className="lg:sticky lg:top-[100px]">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-[#1A1A1A] font-bold wrap-break-word">
              Validating Our Ideas through Usability Testing
            </h2>
            <h4 className="text-[#556070] text-base sm:text-lg lg:text-[18px] mt-2 sm:mt-3 wrap-break-word font-helvetica400">
              I conducted usability testing sessions with three participants to
              evaluate task success rates, capture authentic user reactions, and
              gather actionable feedback on the overall user experience and
              product usability. These insights helped refine the design for
              better efficiency, accessibility, and user satisfaction.
            </h4>
          </div>
        </div>
        <div className="w-full lg:w-[528px] xl:w-[628px] lg:shrink-0 text-[#556070] flex flex-col gap-4 sm:gap-6 max-w-full box-border min-w-0">
          <h2 className="text-[#2F80ED] font-medium text-xl sm:text-[22px] wrap-break-word">
            Usability Testing
          </h2>
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6">
            <div>
              <h3 className="font-bold text-lg sm:text-xl text-[#282B2F99] wrap-break-word">
                25 Participants
              </h3>
              <div className="flex gap-2 sm:gap-3 mt-2">
                <Image
                  className="bg-green-800 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                  src={image1}
                  alt="avatar"
                />
                <Image
                  className="bg-green-800 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                  src={image2}
                  alt="avatar"
                />
                <Image
                  className="bg-green-800 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                  src={image3}
                  alt="avatar"
                />
              </div>
            </div>
            <div>
              <h2 className="text-[#282B2F99] text-lg sm:text-xl font-bold wrap-break-word">
                Average Metrics <br /> Recorded
              </h2>
              <h3 className="text-base sm:text-lg wrap-break-word">
                Success Rate: 74% <br />
                Time to complete: 3.40 minutes
              </h3>
            </div>
          </div>
          <div>
            <h2 className="text-[#282B2F99] text-lg sm:text-xl font-bold wrap-break-word">
              Duration
            </h2>
            <h3 className="text-lg sm:text-xl text-[#282B2FD9] wrap-break-word">
              30 minutes
              <br />
              per session
            </h3>
          </div>
          <p className="text-[#556070] text-base sm:text-lg font-normal leading-6 sm:leading-7 wrap-break-word font-helvetica400">
            Based on the usability testing results, I moved forward with
            confidence to release a beta version of the product to a small group
            of users in Rwanda&apos;s Eastern Province. Anticipating potential
            usability challenges, I collaborated closely with the team to
            establish feedback channels and monitoring systems that captured
            real user insights. This proactive approach ensured continuous
            improvement, strengthened user engagement, and supported a
            data-driven, user-centered product launch.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-10 items-start mt-12 sm:mt-16 md:mt-20 max-w-full box-border">
        <div className="w-full lg:w-[383px] lg:shrink-0 lg:sticky lg:top-[130px] lg:self-start max-w-full box-border">
          <div className="lg:sticky lg:top-[100px]">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-[#1A1A1A] font-bold wrap-break-word">
              Beta Launch
            </h2>
            <h4 className="text-[#556070] mb-3 text-base sm:text-lg lg:text-[18px] wrap-break-word font-helvetica400">
              Testing the Product in the Real World
            </h4>
            <Image src={group} alt="user" className="w-full h-auto" />
          </div>
        </div>
        <div className="w-full lg:w-[528px] xl:w-[628px] lg:shrink-0 grid gap-6 sm:gap-8 text-[#556070] max-w-full box-border min-w-0">
          <div className="wrap-break-word">
            <h2 className="text-[#2F80ED] font-medium text-xl sm:text-[22px] wrap-break-word">
              Key Challenges Identified:
            </h2>
            <ol className="grid gap-3 sm:gap-4 list-disc ml-4 sm:ml-5 text-base sm:text-lg leading-6 sm:leading-7 wrap-break-word font-helvetica400">
              <li className="wrap-break-word">
                Some users did not receive a verification PIN during the account
                creation process, which affected onboarding and account
                activation.
              </li>
              <li className="wrap-break-word">
                Users who were members of multiple savings groups requested the
                ability to contribute to each group individually within the app,
                highlighting a need for multi-group functionality and improved
                user flexibility.
              </li>
            </ol>
          </div>

          <div className="wrap-break-word">
            <h2 className="text-[#2F80ED] font-medium text-xl sm:text-[22px] wrap-break-word">
              Solutions and Feature Enhancements
            </h2>
            <ol className="grid gap-3 sm:gap-4 list-disc ml-4 sm:ml-5 text-base sm:text-lg leading-6 sm:leading-7 wrap-break-word font-helvetica400">
              <li className="wrap-break-word">
                Simplified onboarding experience: Removed the OTP (One-Time
                Password) requirement for PIN setup, allowing users to create
                their own secure PIN during onboarding for a smoother and faster
                registration process.
              </li>
              <li className="wrap-break-word">
                Enhanced multi-group functionality: Enabled users to join and
                manage multiple savings groups, allowing them to contribute and
                perform transactions independently within each group, improving
                flexibility and overall user experience.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Image
        src={info}
        alt=""
        className="mx-auto w-full max-w-full h-auto my-8 sm:my-12 md:my-16"
      />
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-10 items-start mt-12 sm:mt-16 md:mt-20 max-w-full box-border">
        <div className="w-full lg:w-[528px] xl:w-[543px] lg:shrink-0 max-w-full box-border min-w-0">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-[#1A1A1A] font-bold wrap-break-word">
            Learning & Achievement
          </h2>
          <p className="text-[#556070] text-base sm:text-lg font-medium leading-6 sm:leading-7 mt-2 sm:mt-3 wrap-break-word font-helvetica400">
            So far, the project has been a remarkable success story. In less
            than two years, SAVE has processed over 300,000,000 RWF
            (approximately $300,000 USD) in transactions, demonstrating strong
            adoption and user trust.Through a strategic partnership with Access
            Bank PLC, SAVE has evolved into a widely recognised and trusted
            digital financial platform in Rwanda, empowering communities with
            secure, transparent, and accessible group saving solutions.
            <br />
            <br />
            Get more details on SAVE here -{" "}
            <Link href="https://getsave.io/" className="underline break-all">
              https://getsave.io/
            </Link>{" "}
            <br />A short video on the project -{" "}
            <Link href="https://bit.ly/3v9uLGX" className="underline break-all">
              https://bit.ly/3v9uLGX
            </Link>
          </p>
        </div>
        <Image
          src={woman}
          alt="a woman"
          className="w-full lg:w-auto lg:max-w-[572px] h-auto max-h-[283px] object-contain shrink-0"
        />
      </div>
    </section>
  );
}
