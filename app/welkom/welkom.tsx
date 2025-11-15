import Link from "next/link";

export default function WelkomSection() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-10 items-start max-w-full box-border">
      <div className="w-full lg:w-[383px] lg:shrink-0 lg:sticky lg:top-[100px] lg:self-start max-w-full box-border">
        <div className="lg:sticky lg:top-[100px]">
          <h3 className="text-[#87909D] text-xs sm:text-[13px]">
            UX/UI DESIGN
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-[#1A1A1A] font-bold mt-1 break-words">
            Welkom-U Dashboard
          </h2>
          <h4 className="text-[#556070] text-base sm:text-lg lg:text-[18px] mb-3 sm:mb-4 mt-2 break-words">
            Helping immigrants settle seamlessly, with the tools, guidance, and
            community they need.
          </h4>
          <Link
            className="text-[#556070] text-sm sm:text-base lg:text-lg font-medium underline break-all"
            href="https://www.welkom-u.ca/"
          >
            www.welkom-u.ca
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-[528px] xl:w-[628px] lg:shrink-0 grid gap-6 sm:gap-8 text-[#556070] max-w-full box-border min-w-0">
        <div className="break-words">
          <h2 className="text-[#2F80ED] font-medium text-xl sm:text-[22px] break-words">
            Context
          </h2>
          <p className="text-base sm:text-lg leading-6 sm:leading-7 mt-2 break-words">
            Relocating to a new country can be overwhelming. As someone who
            relocated from Lagos, Nigeria to Kigali, Rwanda, I personally
            experienced the culture shock and the struggle of settling in. This
            inspired the creation of Welkom-U, a web-based PWA that supports
            people moving to Canada by giving them access to housing, social
            connections, cultural information, and other essential resources.
          </p>
        </div>
        <div className="break-words">
          <h2 className="text-[#2F80ED] font-medium text-xl sm:text-[22px] break-words">
            Introducing Welkom-U
          </h2>
          <div className="grid gap-3 sm:gap-4 mt-2">
            <p className="text-base sm:text-lg leading-6 sm:leading-7 break-words">
              <strong>Problem:</strong> <br /> When I moved from Lagos to Kigali
              in 2018, I found it difficult to access reliable, local
              information. Finding housing, understanding the job market, and
              adjusting to a new culture were major challenges during my first
              few months.
            </p>
            <p className="text-base sm:text-lg leading-6 sm:leading-7 break-words">
              <strong>What I did:</strong> <br /> I designed Welkom-U, a digital
              platform to help immigrants prepare for relocation and settle in
              more easily. I spoke to others with similar experiences to
              identify common pain points and prioritised features that
              addressed their real needs.
            </p>
            <p className="text-base sm:text-lg leading-6 sm:leading-7 break-words">
              <strong> Outcome:</strong> <br />
              The tool provides verified housing listings, job opportunities,
              cultural tips, and ways to connect with local communities, all in
              one place. It&apos;s designed from the perspective of someone
              who&apos;s been through the process, with a focus on clarity,
              trust, and practical support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
