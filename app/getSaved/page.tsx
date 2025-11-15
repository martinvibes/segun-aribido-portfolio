import Image from "next/image";
import header from "../../public/Frame 3232999 (1).svg";
import GetSaved from "./getsaved";
import Envisioning from "./envisioning";
import End from "./end";

export default function Page() {
  return (
    <main className="my-6 sm:my-8 md:my-10 flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 mb-12 sm:mb-16 md:mb-24 lg:mb-60 max-w-full box-border">
      <header className="w-full max-w-full box-border">
        <Image
          className="border mx-auto w-full max-w-full h-auto"
          src={header}
          alt="header"
        />
      </header>
      <GetSaved />
      <Envisioning />
      <End />
    </main>
  );
}
