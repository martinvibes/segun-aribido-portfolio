import Image from "next/image";
import image1 from "../../public/Image 1.svg";
import image2 from "../../public/Group 19215.svg";
import image3 from "../../public/Group 19214.svg";
import image4 from "../../public/Group 19223.svg";

export default function High() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14 justify-between pt-8 sm:pt-12 md:pt-16 lg:pt-32 max-w-full box-border">
      <div className="w-full lg:max-w-[383px] lg:shrink-0 lg:sticky lg:top-[130px] lg:self-start max-w-full box-border">
        <div className="lg:sticky lg:top-[100px] w-full lg:w-[417px]">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-[#1A1A1A] font-bold mb-2 break-words">
            High Fidelity Design
          </h2>
          <h4 className="text-[#556070] text-base sm:text-lg lg:text-[18px] font-normal mb-3 sm:mb-4 break-words font-helvetica400">
            <strong className="font-helvetica">Accommodation Info - </strong>I
            added location-specific accommodation details to ensure search
            results are relevant to the user&apos;s destination country.
          </h4>
          <h4 className="text-[#556070] text-base sm:text-lg lg:text-[18px] font-normal mb-3 sm:mb-4 break-words font-helvetica400">
            <strong className="font-helvetica">Utilities Filter – </strong>This
            feature allows users to narrow down accommodation options based on
            their specific needs, such as available amenities.
          </h4>
          <h4 className="text-[#556070] text-base sm:text-lg lg:text-[18px] font-normal mb-3 sm:mb-4 break-words font-helvetica400">
            <strong className="font-helvetica">Search Criteria – </strong>Users
            can select their preferred location, accommodation type, and set a
            budget to tailor the results to their preferences..
          </h4>
          <h4 className="text-[#556070] text-base sm:text-lg lg:text-[18px] font-normal mb-3 sm:mb-4 break-words font-helvetica400">
            <strong className="font-helvetica">Apartment Info –</strong> Key
            details such as rental price and important features are highlighted
            to give users the essential information at a glance.
          </h4>
          <h4 className="text-[#556070] text-base sm:text-lg lg:text-[18px] font-normal mb-3 sm:mb-4 break-words font-helvetica400">
            <strong className="font-helvetica">Detailed Information –</strong>
            Additional context is provided to help users make well-informed
            decisions about the apartment.
          </h4>
          <h4 className="text-[#556070] text-base sm:text-lg lg:text-[18px] font-normal mb-3 sm:mb-4 break-words font-helvetica400">
            <strong className="font-helvetica">Map –</strong> An integrated map
            helps users understand the exact location of the property and
            explore the surrounding area.
          </h4>
          <h4 className="text-[#556070] text-base sm:text-lg lg:text-[18px] font-normal break-words font-helvetica400">
            <strong className="font-helvetica">Top Activities –</strong>{" "}
            Highlights indoor and outdoor activities available in the selected
            location, helping users engage with their new surroundings.
          </h4>
        </div>
      </div>

      <div className="w-full grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-[#556070] max-w-full box-border min-w-0">
        <Image src={image1} alt="wireframe" className="w-full h-auto" />
        <Image src={image2} alt="wireframe" className="w-full h-auto" />
        <Image src={image3} alt="wireframe" className="w-full h-auto" />
        <Image src={image4} alt="wireframe" className="w-full h-auto" />
      </div>
    </section>
  );
}
