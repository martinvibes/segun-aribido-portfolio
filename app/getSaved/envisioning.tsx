import Image from "next/image";
import image1 from "../../public/Pesona 1 2.png";
import image2 from "../../public/Pesona 2 2.png";
import image3 from "../../public/Group 42 7.png";
import image4 from "../../public/Group 18963 1.png";
import image5 from "../../public/Save USSD (1) 1.svg";
import image6 from "../../public/Group 18964 1.svg";
import image7 from "../../public/Group 18965 1.svg";
import image8 from "../../public/Group 18966 1.png";

export default function Envisioning() {
  return (
    <section className="flex flex-col gap-14">
      <div className="">
        <div className="">
          <h2 className="text-[32px] text-[#1A1A1A] font-bold max-w-[656px]">
            Envisioning Future Experiences / Persona
          </h2>
          <h4 className="text-[#556070] text-[18px] max-w-[628px]">
            I developed two detailed user personas to keep the design process
            user-centered and aligned with real customer needs. These personas
            helped the team empathize with users, understand their goals and
            pain points, and design experiences that truly resonated with our
            target audience.
          </h4>
        </div>
      </div>
      <div className="flex justify-between">
        <Image className="max-w-[572px]" src={image1} alt="" />
        <Image className="max-w-[572px]" src={image2} alt="" />
      </div>
      <div className="flex justify-between">
        <div className="">
          <h2 className="text-[32px] text-[#1A1A1A] font-bold max-w-[656px]">
            Designing Future User Experiences through Storyboarding
          </h2>
          <h4 className="text-[#556070] text-[18px] max-w-[628px]">
            My primary goal was to digitise the traditional group saving system
            and enhance transparency among members. Through a detailed
            storyboarding exercise, stakeholders were able to visualise each
            stage of the saving journey, identify key interaction moments, and
            uncover user pain points. This process provided valuable UX insights
            into user behaviours, motivations, and expectations, helping shape a
            more intuitive and trustworthy digital saving experience.
          </h4>
        </div>
        <Image className="max-w-[572px]" src={image3} alt="" />
      </div>
      <div className="flex justify-between">
        <div className="">
          <h2 className="text-[32px] text-[#1A1A1A] font-bold max-w-[656px]">
            Ideating and Envisioning Future User Experiences
          </h2>
          <h4 className="text-[#556070] text-[18px] max-w-[628px]">
            The storyboarding session played a crucial role in defining the
            problem space and aligning all stakeholders around a shared product
            vision. It provided a structured framework to map the user journey,
            identify key touch points, and uncover pain points early in the
            design process.Through this exercise, I discovered opportunities to
            challenge existing industry assumptions and reimagine how users
            engage with group saving systems. This approach led to a more
            informed, data-driven, and user-centred design strategy, ensuring
            the final product delivered real value and meaningful user
            experiences.
          </h4>
        </div>
        <Image src={image4} className="max-w-[572px]" alt="" />
      </div>
      <div className="grid gap-8 mt-20">
        <div className="">
          <div className="">
            <h2 className="text-[32px] text-[#1A1A1A] font-bold max-w-[587px]">
              Envisioning Future User Experiences through User Flows
            </h2>
            <h4 className="text-[#556070] max-w-[783px] text-[18px]">
              This simplified user flow diagram illustrates how users navigate
              and interact with the product across key stages of their journey,
              highlighting critical touchpoints and decision moments that shape
              the overall user experience and engagement.
            </h4>
          </div>
        </div>
        <Image className="mx-auto w-[1440px]" src={image5} alt="user flow" />
      </div>
      <div className="grid gap-12">
        <div className="">
          <div className="">
            <h4 className="text-[#556070] max-w-[783px] text-[18px]">
              I created detailed, high-fidelity user flows to simulate a
              realistic product experience, enabling meaningful stakeholder
              feedback and supporting effective usability testing. This approach
              ensured that every interaction was user-centered, goal-driven, and
              optimized for seamless engagement.
            </h4>
          </div>
        </div>
        <Image className="mx-auto w-[1440px]" src={image6} alt="user flow" />
      </div>
      <div className="grid gap-8 my-20">
        <div className="">
          <div className="">
            <h2 className="text-[32px] text-[#1A1A1A] font-bold max-w-[587px]">
              Validating Ideas: From Abstract Concepts to Visual Design
            </h2>
            <h4 className="text-[#556070] max-w-[783px] text-[18px]">
              I designed comprehensive, detailed user flows to deliver a
              realistic and interactive user experience, fostering valuable
              stakeholder feedback and facilitating data-driven usability
              testing. This process ensured the product was intuitive,
              user-centered, and aligned with real user needs.
            </h4>
            <div className="bg-[#D8E9FD] py-2 px-3 w-fit text-[#3F97FB] text-base rounded-lg mt-12">
              Contribution
            </div>
          </div>
        </div>
        <Image className="mx-auto w-[1440px]" src={image7} alt="user flow" />
      </div>
      <div className="flex justify-between max-w-[1200px]">
        <div className="max-w-[572px]">
          <h2 className="text-[32px] text-[#1A1A1A] font-bold max-w-[656px]">
            Detailed Interface Screens for Language Selection
          </h2>
          <h4 className="text-[#556070] text-[18px] max-w-[628px]">
            During onboarding, users are prompted to select their preferred app
            language, ensuring a personalized and accessible experience from the
            very first interaction. This language choice can be updated anytime
            through the settings for greater flexibility and inclusivity.
          </h4>
          <h4 className="text-[#556070] text-[18px] max-w-[628px]">
            The app offers two language options to cater to user needs:
          </h4>
          <ol className="text-[#556070] text-[18px] list-disc list-inside">
            <li>
              Kinyarwanda – Set as the default language, since over 90% of our
              target users speak and read it. It reflects the local culture and
              ensures accessibility for the majority.
            </li>
            <li>
              English – Provided as a secondary option, as it is the official
              language of Rwanda and commonly used in education, business, and
              formal communication.
            </li>
          </ol>
          <h4 className="text-[#556070] text-[18px]">
            This multilingual approach enhances user experience, inclusivity,
            and engagement, making the app intuitive and culturally relevant.
          </h4>
        </div>
        <Image className="max-w-[572px]" src={image8} alt="" />
      </div>
    </section>
  );
}
