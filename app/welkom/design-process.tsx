import { AnalysisCamera, ClipBoard, Message, Pen } from "../components/icons";

export default function DesignProcess() {
  return (
    <div className="flex justify-between">
      <div className="max-w-[383px]">
        <div className="sticky top-0">
          <h2 className="text-[32px] text-[#1A1A1A] font-bold">
            Design Process
          </h2>
          <h3 className="text-[#556070] font-medium">
            ~9 Weeks to Idea Validation
          </h3>
        </div>
      </div>
      <div className="max-w-[628px] grid gap-8 text-[#556070]">
        <div className="bg-[#E5E3ED] grid gap-4 p-8 rounded-lg">
          <div>
            <ClipBoard />
            <h2 className="text-[#2F80ED] font-medium text-[22px]">
              Synthesising the Problem
            </h2>
          </div>
          <p>
            I created empathy maps to synthesise user feedback and identify key
            needs, including access to accommodation, job opportunities, and a
            sense of community and belonging.
          </p>
        </div>
        <div className="bg-[#E5E3ED] grid gap-4 p-8 rounded-lg">
          <div>
            <Message />
            <h2 className="text-[#2F80ED] font-medium text-[22px]">
              Talking to Users
            </h2>
          </div>
          <p>
            I interviewed 14 users who had recently migrated to Canada and other
            countries to understand their experiences, challenges, and key pain
            points during relocation.
          </p>
        </div>

        <div className="bg-[#E5E3ED] grid gap-4 p-8 rounded-lg">
          <div>
            <AnalysisCamera />
            <h2 className="text-[#2F80ED] font-medium text-[22px]">
              Analysing Discovery
            </h2>
          </div>
          <p>
            I reframed the problems into opportunities using the “How Might We”
            framework. This helped the team explore solutions more effectively
            and align around a shared understanding of the challenge.
          </p>
        </div>

        <div className="bg-[#E5E3ED] grid gap-4 p-8 rounded-lg">
          <div>
            <Pen />
            <h2 className="text-[#2F80ED] font-medium text-[22px]">
              Designing the Experience
            </h2>
          </div>
          <p>
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
