import Image from "next/image";
import header from "../../public/Frame 3232999 (1).svg";
import GetSaved from "./getsaved";
import Envisioning from "./envisioning";
import End from "./end";

export default function Page() {
  return (
    <main className="my-10 flex flex-col gap-20 mb-60">
      <header>
        <Image
          className="border mx-auto w-[1440px]"
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
