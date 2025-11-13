import image1 from "../../public/Mask Group (2).svg";
import image2 from "../../public/Mask Group (1).svg";
import image3 from "../../public/Mask Group.svg";
import group from "../../public/Group 536.svg";
import info from "../../public/Group 18969 1.svg";
import woman from "../../public/Mask group.png";

import Image from "next/image";
import Link from "next/link";
export default function End() {
  return (
    <section>
      <div className="flex justify-between">
        <div className="max-w-[400px]">
          <div className="sticky top-0">
            <h2 className="text-[32px] text-[#1A1A1A] font-bold">
              Validating Our Ideas through Usability Testing
            </h2>
            <h4 className="text-[#556070] text-[18px]">
              I conducted usability testing sessions with three participants to
              evaluate task success rates, capture authentic user reactions, and
              gather actionable feedback on the overall user experience and
              product usability. These insights helped refine the design for
              better efficiency, accessibility, and user satisfaction.
            </h4>
          </div>
        </div>
        <div className="max-w-[628px] w-full  text-[#556070] flex flex-col gap-4">
          <h2 className="text-[#2F80ED] font-medium text-[22px]">
            Usability Testing
          </h2>
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-xl text-[#282B2F99]">
                25 Participants
              </h3>
              <div className="flex gap-3">
                <Image
                  className="bg-green-800 rounded-full"
                  src={image1}
                  alt="avatar"
                />
                <Image
                  className="bg-green-800 rounded-full"
                  src={image1}
                  alt="avatar"
                />
                <Image
                  className="bg-green-800 rounded-full"
                  src={image1}
                  alt="avatar"
                />
              </div>
            </div>
            <div>
              <h2 className="text-[#282B2F99] text-xl font-bold">
                Average Metrics <br /> Recorded
              </h2>
              <h3>
                Success Rate: 74% <br />
                Time to complete: 3.40 minutes
              </h3>
            </div>
          </div>
          <div>
            <h2 className="text-[#282B2F99] text-xl font-bold">Duration</h2>
            <h3 className="text-xl text-[#282B2FD9]">
              30 minutes
              <br />
              per session
            </h3>
          </div>
          <p className="text-[#556070] font-normal">
            Based on the usability testing results, I moved forward with
            confidence to release a beta version of the product to a small group
            of users in Rwanda’s Eastern Province. Anticipating potential
            usability challenges, I collaborated closely with the team to
            establish feedback channels and monitoring systems that captured
            real user insights. This proactive approach ensured continuous
            improvement, strengthened user engagement, and supported a
            data-driven, user-centered product launch.
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-20">
        <div className="max-w-[383px]">
          <div className="sticky top-0">
            <h2 className="text-[32px] text-[#1A1A1A] font-bold">
              Beta Launch
            </h2>
            <h4 className="text-[#556070] mb-3 text-[18px]">
              Testing the Product in the Real World
            </h4>
            <Image src={group} alt="user" />
          </div>
        </div>
        <div className="max-w-[628px] grid gap-8 text-[#556070]">
          <div className="">
            <h2 className="text-[#2F80ED] font-medium text-[22px]">
              Key Challenges Identified:
            </h2>
            <ol className="grid gap-4 list-disc  ml-5">
              <li>
                Some users did not receive a verification PIN during the account
                creation process, which affected onboarding and account
                activation.
              </li>
              <li>
                Users who were members of multiple savings groups requested the
                ability to contribute to each group individually within the app,
                highlighting a need for multi-group functionality and improved
                user flexibility.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-[#2F80ED] font-medium text-[22px]">
              Solutions and Feature Enhancements
            </h2>
            <ol className="grid gap-4 list-disc ml-5">
              <li>
                Simplified onboarding experience: Removed the OTP (One-Time
                Password) requirement for PIN setup, allowing users to create
                their own secure PIN during onboarding for a smoother and faster
                registration process.
              </li>
              <li>
                Enhanced multi-group functionality: Enabled users to join and
                manage multiple savings groups, allowing them to contribute and
                perform transactions independently within each group, improving
                flexibility and overall user experience.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Image src={info} alt="" className="mx-auto w-[1440px] my-16" />
      <div className="flex justify-between mt-20">
        <div className="max-w-[543px]">
          <h2 className="text-[32px] text-[#1A1A1A] font-bold">
            Learning & Achievement
          </h2>
          <p className="text-[#556070] font-medium">
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
            <Link href="https://getsave.io/">https://getsave.io/</Link> <br />A
            short video on the project -{" "}
            <Link href="https://bit.ly/3v9uLGX">https://bit.ly/3v9uLGX</Link>
          </p>
        </div>
        <Image
          src={woman}
          alt="a woman"
          className="max-w-[572px] max-h-[283px]"
        />
      </div>
    </section>
  );
}
