export default function Researcher() {
  return (
    <div className="flex justify-between">
      <div className="max-w-[383px]">
        <div className="sticky top-0">
          <h2 className="text-[32px] text-[#1A1A1A] font-bold">Research</h2>
          <p className="text-[#556070] font-medium">
            I interviewed 14 newcomers to Canada and the UK to uncover needs,
            fears, and barriers.
          </p>
        </div>
      </div>
      <div className="max-w-[628px] grid gap-8 text-[#556070]">
        <h2 className="text-[#2F80ED] font-medium text-[22px]">
          What the users are saying
        </h2>
        <aside className="grid grid-cols-[1fr_1.1fr] gap-6 text-[#000000]">
          <div className="flex flex-col gap-4">
            <div className="bg-[#FFF400] min-h-[132.01px] text-center font-shadows-into-light">
              <div className="bg-[#EBE000] w-full h-[19px]" />
              <div className="flex justify-center items-center px-4 h-full">
                <p
                  className="text-[20.83px] text-center"
                  style={{ fontStyle: "italic" }}
                >
                  &quot;Getting accommodation at in my new location&quot;
                </p>
              </div>
            </div>
            <div className="bg-[#FFF400] min-h-[132.01px] text-center font-shadows-into-light">
              <div className="bg-[#EBE000] w-full h-[19px]" />
              <div className="flex justify-center h-full items-center px-4">
                <p
                  className="text-[20.83px] text-center"
                  style={{ fontStyle: "italic" }}
                >
                  &quot;Will like to know about the weather in my new
                  environment&quot;
                </p>
              </div>
            </div>
            <div className="bg-[#FFF400] min-h-[132.01px] text-center font-shadows-into-light">
              <div className="bg-[#EBE000] w-full h-[19px]" />
              <div className="flex justify-center items-center px-4 h-full">
                <p
                  className="text-[20.83px] text-center"
                  style={{ fontStyle: "italic" }}
                >
                  &quot;I want to know about currency and exchange rate to my
                  country&quot;
                </p>
              </div>
            </div>
            <div className="bg-[#FFF400] min-h-[132.01px] text-center font-shadows-into-light">
              <div className="bg-[#EBE000] w-full h-[19px]" />
              <div className="flex justify-center items-center px-4 h-full">
                <p
                  className="text-[20.83px] text-center"
                  style={{ fontStyle: "italic" }}
                >
                  &quot;Have a general knowledge about the language&quot;
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-10">
            <div className="bg-[#FFF400] min-h-32 text-center font-shadows-into-light w-[326px]">
              <div className="bg-[#EBE000] w-full h-[19px]" />
              <div className="flex justify-center items-center px-4 h-full">
                <p
                  className="text-[20.83px] text-center"
                  style={{ fontStyle: "italic" }}
                >
                  &quot;I wish to know about the culture of the people in my new
                  environment&quot;
                </p>
              </div>
            </div>
            <div className="bg-[#FFF400] min-h-32 text-center font-shadows-into-light w-[269px]">
              <div className="bg-[#EBE000] w-full h-[19px]" />
              <div className="flex justify-center items-center px-4 h-full">
                <p
                  className="text-[20.83px] text-center"
                  style={{ fontStyle: "italic" }}
                >
                  &quot;How to secure job or admission in the country&quot;
                </p>
              </div>
            </div>
            <div className="bg-[#FFF400] min-h-32 text-center font-shadows-into-light w-[269px]">
              <div className="bg-[#EBE000] w-full h-[19px]" />
              <div className="flex justify-center items-center px-4 h-full">
                <p
                  className="text-[20.83px] text-center"
                  style={{ fontStyle: "italic" }}
                >
                  &quot;I like to know how to connect with people within my
                  community&quot;
                </p>
              </div>
            </div>
            <div className="bg-[#FFF400] min-h-32 text-center font-shadows-into-light w-[269px]">
              <div className="bg-[#EBE000] w-full h-[19px]" />
              <div className="flex justify-center items-center px-4 h-full">
                <p
                  className="text-[20.83px] text-center"
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
