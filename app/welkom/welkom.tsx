import Link from "next/link";

export default function WelkomSection() {
  return (
    <div className="flex justify-between">
      <div className="max-w-[383px]">
        <div className="sticky top-0">
          <h3 className="text-[#87909D]text-[13px]">UX/UI DESIGN</h3>
          <h2 className="text-[32px] text-[#1A1A1A] font-bold">
            Welkom-U Dashboard
          </h2>
          <h4 className="text-[#556070] text-[18px]">
            Helping immigrants settle seamlessly, with the tools, guidance, and
            community they need. www.welkom-u.ca
          </h4>
          <Link
            className="text-[#556070] font-medium"
            href="https://www.welkom-u.ca/"
          >
            www.welkom-u.ca
          </Link>
        </div>
      </div>
      <div className="max-w-[628px] grid gap-8 text-[#556070]">
        <div>
          <h2 className="text-[#2F80ED] font-medium text-[22px]">Context</h2>
          <p>
            Relocating to a new country can be overwhelming. As someone who
            relocated from Lagos, Nigeria to Kigali, Rwanda, I personally
            experienced the culture shock and the struggle of settling in. This
            inspired the creation of Welkom-U, a web-based PWA that supports
            people moving to Canada by giving them access to housing, social
            connections, cultural information, and other essential resources.
          </p>
        </div>
        <div>
          <h2 className="text-[#2F80ED] font-medium text-[22px]">
            Introducing Welkom-U
          </h2>
          <div className="grid gap-2">
            <p>
              <strong>Problem:</strong> <br /> When I moved from Lagos to Kigali
              in 2018, I found it difficult to access reliable, local
              information. Finding housing, understanding the job market, and
              adjusting to a new culture were major challenges during my first
              few months.
            </p>
            <p>
              <strong>What I did:</strong> <br /> I designed Welkom-U, a digital
              platform to help immigrants prepare for relocation and settle in
              more easily. I spoke to others with similar experiences to
              identify common pain points and prioritised features that
              addressed their real needs.
            </p>
            <p>
              <strong> Outcome:</strong> <br />
              The tool provides verified housing listings, job opportunities,
              cultural tips, and ways to connect with local communities, all in
              one place. It’s designed from the perspective of someone who’s
              been through the process, with a focus on clarity, trust, and
              practical support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
