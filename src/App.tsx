import { RetrolistRound } from "./components/retrolistround";

function App() {
  return (
    <>
      <div className="relative">
        <div className="w-full absolute">
          <div className="max-w-7xl mx-auto py-4 relative">
            <div className="">
              <img src="/logo.svg" alt="" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-5 text-[#272930DE] font-semibold">
              <div className="p-3">Home</div>
              <div className="p-3 flex gap-2 items-center">
                <div>Round</div>
                <img src="/chevron-down.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <img
          src="/cover-image.svg"
          className="w-full h-[617px] object-cover"
          alt=""
        />
        <img
          src="/gang-star.svg"
          alt=""
          className="absolute -bottom-20 left-0 moveUpDown"
        />
        <img
          src="/retrolist-mascot.svg"
          alt=""
          className="absolute top-1/2 -translate-y-1/2 right-0"
        />
        <div className="top-0 left-1/2 -translate-x-1/2 absolute mt-28 w-full max-w-7xl">
          <h1 className="text-5xl text-center font-semibold">
            Welcome to Retrolist
          </h1>
          <h2 className="text-5xl font-semibold text-gradient-animated text-center mt-4">
            Empower Your Community with Retrolist
          </h2>
          <h3 className="text-[#667085] text-2xl font-medium mt-2 text-center">
            Get comprehensive insights into Optimism's RetroPGF program.
          </h3>
        </div>
        <div className="flex w-full max-w-7xl mx-auto h-full relative">
          <div className="-bottom-36 absolute h-[465px] flex gap-4 w-full">
            <div className="relative">
              <img
                src="/image/retrofunding-reward.png"
                className="w-full h-full object-cover rounded-3xl"
                alt=""
              />
              <div className="absolute top-10 left-10">
                <div className="text-[#111111] text-[64px] font-semibold">
                  51,000,000 OP
                </div>
                <div className="mt-3 text-2xl text-[#333333]">
                  Retro Funding rewarded to Optimism Collective contributors
                  since 2022
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col h-full justify-between gap-4">
              <div className="relative h-1/2">
                <video
                  src="/video/1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="w-full h-full bg-gradient-to-b from-[#00000000] to-[#000000] rounded-3xl top-0 absolute" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden">
                  <div className="text-center">
                    <div className="flex gap-2 justify-center">
                      <div className="text-3xl font-semibold text-white">
                        21,266
                      </div>
                      <img src="/opIcon.svg" alt="" />
                    </div>
                    <div className="mt-2 text-white font-semibold">
                      Median OP Funding Awarded
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-1/2 bg-gradient-to-b from-[#F8959F] to-[#51B8E3] rounded-3xl flex justify-center items-center flex-col">
                <div className="text-[64px] font-semibold text-white">6</div>
                <div className="text-[32px] font-semibold text-white">
                  Rounds
                </div>
              </div>
            </div>
            <img src="/image/pass.png" alt="" />
          </div>
        </div>
      </div>
      <div className="pt-44 max-w-7xl mx-auto pb-10 flex-col flex gap-8">
        <RetrolistRound
          link=""
          title="Round 5: OP Stack"
          date="Nov 6 - Dec 7, 2024"
          medianFundingAwarded="21,266"
          projectRewarded="234"
          topCategories="DeFi"
          totalOP="10M"
          isLive
        />
        <RetrolistRound
          link=""
          title="Round 5: OP Stack"
          date="Nov 6 - Dec 7, 2024"
          medianFundingAwarded="21,266"
          projectRewarded="234"
          topCategories="DeFi"
          totalOP="10M"
        />
      </div>
    </>
  );
}

export default App;
