export default function Researcher() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-10 items-start mt-8 sm:mt-12 md:mt-16 lg:mt-[120px] max-w-full box-border">
      <div className="w-full lg:w-[383px] lg:shrink-0 lg:sticky lg:top-[130px] lg:self-start max-w-full box-border">
        <div className="lg:sticky lg:top-[100px]">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-[#1A1A1A] font-bold break-words">
            Research
          </h2>
          <p className="text-[#556070] text-base sm:text-lg font-medium mt-2 break-words">
            I interviewed 14 newcomers to Canada and the UK to uncover needs,
            fears, and barriers.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-[528px] xl:w-[628px] lg:shrink-0 grid gap-4 sm:gap-6 lg:gap-7 text-[#556070] max-w-full box-border min-w-0">
        <h2 className="text-[#2F80ED] font-medium text-xl sm:text-[22px] break-words">
          What the users are saying
        </h2>
        <aside className="grid grid-cols-1 sm:grid-cols-[1fr_1.1fr] gap-4 sm:gap-6 text-[#000000] max-w-full box-border">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="bg-[#FFF400] min-h-[100px] sm:min-h-[132.01px] text-center font-shadows-into-light w-full">
              <div className="bg-[#EBE000] w-full h-[19px]" />
              <div className="flex justify-center items-center px-3 sm:px-4 h-full py-2">
                <p
                  className="text-base sm:text-lg lg:text-[20.83px] text-center break-words"
                  style={{ fontStyle: "italic" }}
                >
                  &quot;Getting accommodation at in my new location&quot;
                </p>
              </div>
            </div>
            <div className="bg-[#FFF400] min-h-[100px] sm:min-h-[132.01px] text-center font-shadows-into-light w-full">
              <div className="bg-[#EBE000] w-full h-[19px]" />
              <div className="flex justify-center h-full items-center px-3 sm:px-4 py-2">
                <p
                  className="text-base sm:text-lg lg:text-[20.83px] text-center break-words"
                  style={{ fontStyle: "italic" }}
                >
                  &quot;Will like to know about the weather in my new
                  environment&quot;
                </p>
              </div>
            </div>
            <div className="bg-[#FFF400] min-h-[100px] sm:min-h-[132.01px] text-center font-shadows-into-light w-full">
              <div className="bg-[#EBE000] w-full h-[19px]" />
              <div className="flex justify-center items-center px-3 sm:px-4 h-full py-2">
                <p
                  className="text-base sm:text-lg lg:text-[20.83px] text-center break-words"
                  style={{ fontStyle: "italic" }}
                >
                  &quot;I want to know about currency and exchange rate to my
                  country&quot;
                </p>
              </div>
            </div>
            <div className="bg-[#FFF400] min-h-[100px] sm:min-h-[132.01px] text-center font-shadows-into-light w-full">
              <div className="bg-[#EBE000] w-full h-[19px]" />
              <div className="flex justify-center items-center px-3 sm:px-4 h-full py-2">
                <p
                  className="text-base sm:text-lg lg:text-[20.83px] text-center break-words"
                  style={{ fontStyle: "italic" }}
                >
                  &quot;Have a general knowledge about the language&quot;
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-10">
            <div className="bg-[#FFF400] min-h-24 sm:min-h-32 text-center font-shadows-into-light w-full lg:w-[326px]">
              <div className="bg-[#EBE000] w-full h-[19px]" />
              <div className="flex justify-center items-center px-3 sm:px-4 h-full py-2">
                <p
                  className="text-base sm:text-lg lg:text-[20.83px] text-center break-words"
                  style={{ fontStyle: "italic" }}
                >
                  &quot;I wish to know about the culture of the people in my new
                  environment&quot;
                </p>
              </div>
            </div>
            <div className="bg-[#FFF400] min-h-24 sm:min-h-32 text-center font-shadows-into-light w-full lg:w-[269px]">
              <div className="bg-[#EBE000] w-full h-[19px]" />
              <div className="flex justify-center items-center px-3 sm:px-4 h-full py-2">
                <p
                  className="text-base sm:text-lg lg:text-[20.83px] text-center break-words"
                  style={{ fontStyle: "italic" }}
                >
                  &quot;How to secure job or admission in the country&quot;
                </p>
              </div>
            </div>
            <div className="bg-[#FFF400] min-h-24 sm:min-h-32 text-center font-shadows-into-light w-full lg:w-[269px]">
              <div className="bg-[#EBE000] w-full h-[19px]" />
              <div className="flex justify-center items-center px-3 sm:px-4 h-full py-2">
                <p
                  className="text-base sm:text-lg lg:text-[20.83px] text-center break-words"
                  style={{ fontStyle: "italic" }}
                >
                  &quot;I like to know how to connect with people within my
                  community&quot;
                </p>
              </div>
            </div>
            <div className="bg-[#FFF400] min-h-24 sm:min-h-32 text-center font-shadows-into-light w-full lg:w-[269px]">
              <div className="bg-[#EBE000] w-full h-[19px]" />
              <div className="flex justify-center items-center px-3 sm:px-4 h-full py-2">
                <p
                  className="text-base sm:text-lg lg:text-[20.83px] text-center break-words"
                  style={{ fontStyle: "italic" }}
                >
                  &quot;I will like to know where to shop for items they
                  need&quot;
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
