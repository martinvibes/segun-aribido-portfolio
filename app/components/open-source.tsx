export default function OpenSource() {
  return (
    <div className="my-28">
      <div className="text-[#505050] text-center mb-10">
        <h2 className="font-medium text-[40px]">Open Source Contributions</h2>
        <h4 className="text-2xl font-normal">
          Giving back through community-driven design
        </h4>
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-7 h-[620px]">
        <div className="relative flex-1">
          <div className="absolute inset-0 bg-black rounded-2xl" />
          <video
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            src="/video/School Design.mp4"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
          />
        </div>
        <div className="flex-1 grid grid-rows-2 gap-5">
          <div className="relative overflow-hidden rounded-2xl bg-gray-100">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/video/wallet 1.mp4"
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gray-100">
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
