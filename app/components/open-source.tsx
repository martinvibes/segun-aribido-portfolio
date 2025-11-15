export default function OpenSource() {
  return (
    <div className="my-12 sm:my-16 md:my-20 lg:my-28 max-w-full box-border">
      <div className="text-[#505050] text-center mb-6 sm:mb-8 md:mb-10">
        <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[40px] break-words">
          Open Source Contributions
        </h2>
        <h4 className="text-lg sm:text-xl md:text-2xl font-normal mt-2 break-words">
          Giving back through community-driven design
        </h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 sm:gap-5 md:gap-6 lg:gap-7 h-auto lg:h-[620px] max-w-full box-border">
        <div className="relative flex-1 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full">
          <div className="absolute inset-0 bg-black rounded-2xl" />
          <video
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            src="/video/School Design compressed.mp4"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
          />
        </div>
        <div className="flex-1 grid grid-rows-2 gap-4 sm:gap-5 md:gap-6 lg:gap-5 h-auto lg:h-full">
          <div className="relative overflow-hidden rounded-2xl bg-gray-100 h-[200px] sm:h-[250px] md:h-[300px] lg:h-full">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/video/wallet_hero.mp4"
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gray-100 h-[200px] sm:h-[250px] md:h-[300px] lg:h-full">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/video/icons.mp4"
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
