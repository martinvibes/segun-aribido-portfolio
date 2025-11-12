import React from "react";
import Image from "next/image";

const Farely = () => {
  return (
    <div>
      {/* Hero Section */}
      <Image
        src="/farely/farelyHero.svg"
        alt="farely"
        width={1200}
        height={1200}
        className="w-full h-full mt-[52px]"
      />
    </div>
  );
};

export default Farely;
