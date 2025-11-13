import Image from "next/image";
import image1 from "../../public/Image 1.svg";
import image2 from "../../public/Group 19215.svg";
import image3 from "../../public/Group 19214.svg";
import image4 from "../../public/Group 19223.svg";

export default function High() {
  return (
    <section className="flex justify-between py-32">
      <div className="max-w-[383px]">
        <div className="sticky top-0">
          <h2 className="text-[32px] text-[#1A1A1A] font-bold">
            High Fidelity Design
          </h2>
          <h4 className="text-[#556070] text-[18px]">
            <strong>Accommodation Info - </strong>I added location-specific
            accommodation details to ensure search results are relevant to the
            user’s destination country.
          </h4>
          <h4 className="text-[#556070] text-[18px]">
            <strong>Utilities Filter – </strong>This feature allows users to
            narrow down accommodation options based on their specific needs,
            such as available amenities.
          </h4>
          <h4 className="text-[#556070] text-[18px]">
            <strong>Search Criteria – </strong>Users can select their preferred
            location, accommodation type, and set a budget to tailor the results
            to their preferences..
          </h4>
          <h4 className="text-[#556070] text-[18px]">
            <strong>Apartment Info –</strong> Key details such as rental price
            and important features are highlighted to give users the essential
            information at a glance.
          </h4>
          <h4 className="text-[#556070] text-[18px]">
            <strong>Detailed Information –</strong>
            Additional context is provided to help users make well-informed
            decisions about the apartment.
          </h4>
          <h4 className="text-[#556070] text-[18px]">
            <strong>Map –</strong> An integrated map helps users understand the
            exact location of the property and explore the surrounding area.
          </h4>
          <h4 className="text-[#556070] text-[18px]">
            <strong>Top Activities –</strong> Highlights indoor and outdoor
            activities available in the selected location, helping users engage
            with their new surroundings.
          </h4>
        </div>
      </div>
      <div className="max-w-[628px] grid gap-12 text-[#556070]">
        <Image src={image1} alt="wireframe" />
        <Image src={image2} alt="wireframe" />
        <Image src={image3} alt="wireframe" />
        <Image src={image4} alt="wireframe" />
      </div>
    </section>
  );
}
