import { AnalysisCamera, ClipBoard, Message, Pen } from "../components/icons";

export default function DesignProcess() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-10 items-start mt-8 sm:mt-12 md:mt-16 lg:mt-[120px] max-w-full box-border">
      <div className="w-full lg:w-[383px] lg:shrink-0 lg:sticky lg:top-[130px] lg:self-start max-w-full box-border">
        <div className="lg:sticky lg:top-[100px]">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-[#1A1A1A] font-bold wrap-break-word">
            Design Process
          </h2>
          <h3 className="text-[#556070] text-base sm:text-lg font-medium mt-2 font-helvetica400 wrap-break-word">
            ~9 Weeks to Idea Validation
          </h3>
        </div>
      </div>
      <div className="w-full lg:w-[528px] xl:w-[628px] lg:shrink-0 text-base sm:text-lg grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-[#556070] max-w-full box-border min-w-0">
        <div className="bg-[#E5E3ED] grid gap-3 sm:gap-4 p-4 sm:p-6 lg:p-8 rounded-lg wrap-break-word">
          <div className="flex flex-col gap-2">
            <ClipBoard />
            <h2 className="text-[#2F80ED] font-medium text-xl sm:text-[22px] wrap-break-word">
              Synthesising the Problem
            </h2>
          </div>
          <p className="text-base sm:text-lg wrap-break-word font-helvetica400">
            I created empathy maps to synthesise user feedback and identify key
            needs, including access to accommodation, job opportunities, and a
            sense of community and belonging.
          </p>
        </div>
        <div className="bg-[#E5E3ED] grid gap-3 sm:gap-4 p-4 sm:p-6 lg:p-8 rounded-lg wrap-break-word">
          <div className="flex flex-col gap-2">
            <Message />
            <h2 className="text-[#2F80ED] font-medium text-xl sm:text-[22px] wrap-break-word">
              Talking to Users
            </h2>
          </div>
          <p className="text-base font-helvetica400 sm:text-lg wrap-break-word">
            I interviewed 14 users who had recently migrated to Canada and other
            countries to understand their experiences, challenges, and key pain
            points during relocation.
          </p>
        </div>

        <div className="bg-[#E5E3ED] grid gap-3 sm:gap-4 p-4 sm:p-6 lg:p-8 rounded-lg wrap-break-word">
          <div className="flex flex-col gap-2">
            <AnalysisCamera />
            <h2 className="text-[#2F80ED] font-medium text-xl sm:text-[22px] wrap-break-word">
              Analysing Discovery
            </h2>
          </div>
          <p className="text-base sm:text-lg wrap-break-word font-helvetica400">
            I reframed the problems into opportunities using the &quot;How Might
            We&quot; framework. This helped the team explore solutions more
            effectively and align around a shared understanding of the
            challenge.
          </p>
        </div>

        <div className="bg-[#E5E3ED] grid gap-3 sm:gap-4 p-4 sm:p-6 lg:p-8 rounded-lg wrap-break-word">
          <div className="flex flex-col gap-2">
            <Pen />
            <h2 className="text-[#2F80ED] font-medium text-xl sm:text-[22px] wrap-break-word">
              Designing the Experience
            </h2>
          </div>
          <p className="text-base sm:text-lg wrap-break-word font-helvetica400">
            I mapped out user flows and journeys, then created quick sketches to
            test key interactions early. This allowed us to refine the user
            experience before progressing to high-fidelity interface designs for
            the web app.
          </p>
        </div>
      </div>
    </div>
  );
}
