import { useState } from "react";
import { RetrolistRound } from "./components/retrolistround";

const link = [
  "https://round3.retrolist.app/",
  "https://round4.retrolist.app/",
  "https://round5.retrolist.app/",
  "https://round6.retrolist.app/",
  // "https://round7.retrolist.app/",
];
function App() {
  const [isOpen, setIsOpen] = useState(true);
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
              <div
                className="p-3 flex gap-2 items-center relative cursor-pointer"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <div>Rounds</div>
                <img src="/chevron-down.svg" alt="" />
                {isOpen && (
                  <div
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className="absolute left-0 w-48 mt-2 top-10 bg-white border border-gray-300 rounded-md shadow-lg cursor-pointer z-50"
                  >
                    <div className="py-1">
                      {link.map((ele, index) => {
                        return (
                          <a
                            href={ele}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                          >
                            Rounds {index + 3}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <img
          src="/cover-image.svg"
          className="w-full h-[617px] object-cover -z-30 relative"
          alt=""
        />
        <img
          src="/gang-star.svg"
          alt=""
          className="absolute -bottom-20 left-0 moveUpDown -z-20"
        />
        <img
          src="/retrolist-mascot.svg"
          alt=""
          className="absolute top-1/2 -translate-y-1/2 right-0 -z-20"
        />
        <div className="w-full max-w-7xl mx-auto h-full mt-28 top-0 left-1/2 -translate-x-1/2 absolute -z-10 px-4">
          <div className="w-full">
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
          <div className="lg:h-[465px] h-auto flex lg:flex-nowrap flex-wrap gap-4 w-full mt-[31px]">
            <div className="relative lg:w-3/6 w-full">
              <img
                src="/image/retrofunding-reward.png"
                className="w-full h-full object-cover rounded-3xl"
                alt=""
              />
              <div className="absolute top-10 left-10">
                <div className="text-[#111111] text-[64px] font-semibold md:block hidden">
                  51,000,000 OP
                </div>
                <div className="text-[#111111] text-[64px] font-semibold md:hidden block">
                  51M OP
                </div>
                <div className="mt-3 text-2xl text-[#333333]">
                  Retro Funding rewarded to Optimism Collective contributors
                  since 2022
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col h-auto justify-between gap-4 lg:w-1/4 w-1/2">
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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
            <img
              src="/image/pass.png"
              className="lg:w-1/4 w-1/2 h-full"
              alt=""
            />
          </div>
          <div className="mx-auto pb-10 flex-col flex gap-8  mt-8">
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
        </div>
      </div>
    </>
  );
}

export default App;
