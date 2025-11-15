import Link from "next/link";
import rvo from "../../public/RV0_9585 2 (3).png";
import group from "../../public/Group 16.svg";
import challenger from "../../public/Challenge.svg";
import Image from "next/image";
export default function GetSaved() {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-10 items-start max-w-full box-border">
        <div className="w-full lg:w-[383px] lg:shrink-0 lg:sticky lg:top-[100px] lg:self-start max-w-full box-border">
          <div className="lg:sticky lg:top-[100px]">
            <h3 className="text-[#87909D] text-xs sm:text-[13px]">
              UX/UI DESIGN
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-[#1A1A1A] font-bold break-words">
              GetSave USSD
            </h2>
            <h4 className="text-[#556070] text-base sm:text-lg lg:text-[18px] break-words font-helvetica400">
              Empowering your financial journey through smarter saving tools.
              https://getsave.io/
            </h4>
            <Link
              className="text-[#556070] font-helvetica400 text-sm sm:text-base lg:text-lg font-medium underline break-all"
              href="https://getsave.io/"
            >
              https://getsave.io/
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[528px] xl:w-[628px] lg:shrink-0 grid gap-6 sm:gap-8 text-[#556070] max-w-full box-border min-w-0">
          <div className="break-words">
            <h2 className="text-[#2F80ED] font-medium text-xl sm:text-[22px] break-words">
              Background & Goals
            </h2>
            <p className="font-helvetica400 text-base sm:text-lg leading-6 sm:leading-7 break-words">
              SAVE was created from a deep passion to empower unbanked
              individuals who traditionally save in informal groups using
              physical cash boxes. The goal was to help them transition to a
              secure, digital savings platform.
            </p>
          </div>
          <Image src={rvo} alt="saving" className="w-full h-auto" />
          <div className="break-words">
            <h2 className="text-[#2F80ED] font-medium text-xl sm:text-[22px] break-words">
              The key objectives were
            </h2>
            <ol className="grid gap-2 sm:gap-2 list-disc list-inside ml-3 sm:ml-4 text-base sm:text-lg leading-6 sm:leading-7 break-words font-helvetica400">
              <li className="break-words">
                Digitise the traditional group-saving process
              </li>
              <li className="break-words">
                Provide full transparency so all members can view their
                contributions and group funds
              </li>
              <li className="break-words">
                Ensure easy access to loans within the group
              </li>
              <li className="break-words">
                Enable members to contribute anytime, from anywhere
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-10 items-start py-8 sm:py-12 md:py-16 lg:pt-20 lg:pb-0 max-w-full box-border">
        <div className="w-full lg:w-[383px] lg:shrink-0 lg:sticky lg:top-[100px] lg:self-start max-w-full box-border">
          <div className="lg:sticky lg:top-[100px]">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-[#1A1A1A] font-bold break-words">
              The Challenge
            </h2>
            <Image
              src={challenger}
              alt=""
              className="w-full lg:w-[140px] h-auto mt-1 sm:mt-4"
            />
          </div>
        </div>
        <div className="w-full lg:w-[528px] xl:w-[628px] lg:shrink-0 grid gap-6 sm:gap-8 text-[#556070] max-w-full box-border min-w-0">
          <div className="break-words">
            <h2 className="text-[#2F80ED] font-medium text-xl sm:text-[22px] break-words">
              Challenges
            </h2>
            <ol className="grid gap-3 sm:gap-4 list-disc list-inside ml-3 sm:ml-4 text-base sm:text-lg leading-6 sm:leading-7 break-words font-helvetica400">
              <li className="break-words">
                Understanding and empathising with users to uncover their real
                saving habits and motivations
              </li>
              <li className="break-words">
                Aligning our solution to fit within their existing saving
                methods and routines
              </li>
              <li className="break-words">
                Accounting for limited mobile phone access and inconsistent
                internet connectivity
              </li>
              <li className="break-words">
                Accounting for limited mobile phone access and inconsistent
                internet connectivity
              </li>
              <li className="break-words">
                Testing prototypes with users and iterating based on feedback
                and observed difficulties
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-10 items-start py-8 sm:py-12 md:py-16 lg:py-20 max-w-full box-border">
        <div className="w-full lg:w-[383px] lg:shrink-0 lg:sticky lg:top-[100px] lg:self-start max-w-full box-border">
          <div className="lg:sticky lg:top-[100px]">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-[#1A1A1A] font-bold break-words">
              Role and Responsibilites
            </h2>
            <Image src={group} alt="" className="w-full h-auto mt-2 sm:mt-4" />
          </div>
        </div>
        <div className="w-full lg:w-[528px] xl:w-[628px] lg:shrink-0 grid gap-6 sm:gap-8 text-[#556070] max-w-full box-border min-w-0">
          <div className="break-words">
            <h2 className="text-[#2F80ED] font-medium text-xl sm:text-[22px] break-words">
              My role & the team
            </h2>
            <h3 className="text-base sm:text-lg leading-6 sm:leading-7 break-words font-helvetica400">
              I collaborated closely with a Project Manager (who also served as
              an interpreter) and a team of five engineers to bring the project
              vision to life. Our strong cross-functional teamwork and clear
              communication created an efficient, aligned, and user-focused
              design-to-development process, ensuring a smooth transition from
              concept to execution.
            </h3>
          </div>
          <div className="break-words">
            <h2 className="text-[#2F80ED] font-medium text-xl sm:text-[22px] break-words">
              My responsibilities were:
            </h2>
            <ol className="grid gap-3 sm:gap-4 list-disc list-inside ml-3 sm:ml-4 text-base sm:text-lg leading-6 sm:leading-7 break-words font-helvetica400">
              <li className="break-words">
                Led the end-to-end product design process, from user research
                and wireframing to high-fidelity prototyping and handoff
              </li>
              <li className="break-words">
                Ensured design alignment with core product goals and overall
                business objectives to maintain a clear user-centred direction
              </li>
              <li className="break-words">
                Conducted and facilitated usability testing sessions to gather
                real user insights, validate design decisions, and guide
                data-driven iterations for improved user experience
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
