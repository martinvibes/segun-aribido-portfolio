import Link from "next/link";
import rvo from "../../public/RV0_9585 2 (3).png";
import group from "../../public/Group 16.svg";
import challenger from "../../public/Challenge.svg";
import Image from "next/image";
export default function GetSaved() {
  return (
    <>
      <div className="flex justify-between">
        <div className="max-w-[383px]">
          <div className="sticky top-0">
            <h3 className="text-[#87909D] text-[13px]">UX/UI DESIGN</h3>
            <h2 className="text-[32px] text-[#1A1A1A] font-bold">
              GetSave USSD
            </h2>
            <h4 className="text-[#556070] text-[18px]">
              Empowering your financial journey through smarter saving tools.
              https://getsave.io/
            </h4>
            <Link
              className="text-[#556070] font-medium"
              href="https://getsave.io/"
            >
              https://getsave.io/
            </Link>
          </div>
        </div>
        <div className="max-w-[628px] grid gap-8 text-[#556070]">
          <div className="">
            <h2 className="text-[#2F80ED] font-medium text-[22px]">
              Background & Goals
            </h2>
            <p>
              SAVE was created from a deep passion to empower unbanked
              individuals who traditionally save in informal groups using
              physical cash boxes. The goal was to help them transition to a
              secure, digital savings platform.
            </p>
          </div>
          <Image src={rvo} alt="saving" />
          <div>
            <h2 className="text-[#2F80ED] font-medium text-[22px]">
              The key objectives were
            </h2>
            <ol className="grid gap-2 list-disc list-inside ml-3">
              <li>Digitise the traditional group-saving process</li>
              <li>
                Provide full transparency so all members can view their
                contributions and group funds
              </li>
              <li>Ensure easy access to loans within the group</li>
              <li>Enable members to contribute anytime, from anywhere</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="flex justify-between py-20">
        <div className="max-w-[383px]">
          <div className="sticky top-0">
            <h2 className="text-[32px] text-[#1A1A1A] font-bold">
              The Challenge
            </h2>
            <Image src={challenger} alt="" />
          </div>
        </div>
        <div className="max-w-[628px] grid gap-8 text-[#556070]">
          <div>
            <h2 className="text-[#2F80ED] font-medium text-[22px]">
              Challenges
            </h2>
            <ol className="grid gap-4 list-disc list-inside ml-3">
              <li>
                Understanding and empathising with users to uncover their real
                saving habits and motivations
              </li>
              <li>
                Aligning our solution to fit within their existing saving
                methods and routines
              </li>
              <li>
                Accounting for limited mobile phone access and inconsistent
                internet connectivity
              </li>
              <li>
                Accounting for limited mobile phone access and inconsistent
                internet connectivity
              </li>
              <li>
                Testing prototypes with users and iterating based on feedback
                and observed difficulties
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="flex justify-between py-20">
        <div className="max-w-[383px]">
          <div className="sticky top-0">
            <h2 className="text-[32px] text-[#1A1A1A] font-bold">
              Role and Responsibilites
            </h2>
            <Image src={group} alt="" />
          </div>
        </div>
        <div className="max-w-[628px] grid gap-8 text-[#556070]">
          <div>
            <h2 className="text-[#2F80ED] font-medium text-[22px]">
              My role & the team
            </h2>
            <h3>
              I collaborated closely with a Project Manager (who also served as
              an interpreter) and a team of five engineers to bring the project
              vision to life. Our strong cross-functional teamwork and clear
              communication created an efficient, aligned, and user-focused
              design-to-development process, ensuring a smooth transition from
              concept to execution.
            </h3>
          </div>
          <div>
            <h2 className="text-[#2F80ED] font-medium text-[22px]">
              My responsibilities were:
            </h2>
            <ol className="grid gap-4 list-disc list-inside ml-3">
              <li>
                Led the end-to-end product design process, from user research
                and wireframing to high-fidelity prototyping and handoff
              </li>
              <li>
                Ensured design alignment with core product goals and overall
                business objectives to maintain a clear user-centred direction
              </li>
              <li>
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
