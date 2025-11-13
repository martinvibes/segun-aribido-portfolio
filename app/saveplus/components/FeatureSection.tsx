import Image from "next/image";
import { featureSections } from "@/types/saveplus";

export default function FeatureSection() {
  return (
    <section className="flex flex-col gap-28 my-24">
      {featureSections.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col justify-between ${
            item.image ? "md:flex-row" : ""
          } gap-10 md:gap-20`}
        >
          {/* Text section */}
          <div className={"md:w-[499px] w-full"}>
            <h2 className="text-[#1A1A1A] text-[28px] font-bold">
              {item.title}
            </h2>

            {item.features ? (
              <>
                <ul className="list-disc space-y-1 mt-2.5 tracking-[0.8%] text-[#556070] text-lg leading-7 pl-6">
                  {item.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                {item.conclusion && (
                  <p className="text-[#556070] text-lg leading-7">
                    {item.conclusion}
                  </p>
                )}
              </>
            ) : (
              <div className="text-[#556070] text-lg leading-7 mt-2">
                {item.description.split("\n").map((paragraph, idx) => (
                  <p key={idx} className={idx > 0 ? "mt-4" : ""}>
                    {paragraph}
                  </p>
                ))}
                {item.link && (
                  <p className="mt-4">
                    View project presentation{" "}
                    <a
                      href={item.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#556070] underline"
                    >
                      {item.link.text}
                    </a>
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Image section */}
          {item.image && (
            <div className=" flex justify-center">
              <Image
                src={item.image}
                alt={item.title}
                width={628}
                height={400}
                className="rounded-lg"
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
