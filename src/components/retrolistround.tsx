import { useEffect, useState } from "react";
import { OPStatsCard } from "./opstatscard";

interface RetrolistRoundProps {
  link: string;
  title: string;
  isLive?: boolean;
  date: string;
  votingPeriod?: string;
  projectRewarded: string;
  totalOP: string;
  medianFundingAwarded: string;
  topCategories: string;
}
export const RetrolistRound = ({
  link,
  title,
  isLive = false,
  medianFundingAwarded,
  projectRewarded,
  topCategories,
  date,
  votingPeriod,
  totalOP,
}: RetrolistRoundProps) => {
  const [projectRewardedParsed, setProjectRewardedParsed] = useState(projectRewarded.startsWith("http") ? "..." : projectRewarded);

  useEffect(() => {
    if (projectRewarded.startsWith("http")) {
      setProjectRewardedParsed("...");

      // Fetch the project data from the link
      fetch(projectRewarded)
        .then((res) => res.json())
        .then((data) => {
          setProjectRewardedParsed(data.eligible || data.total);
        });
    }
  }, [projectRewarded]);

  const colorClasses = isLive
    ? {
        border: "border-red-200",
        bg: "bg-red-50",
        dotBg: "bg-red-500",
        text: "text-red-700",
      }
    : {
        border: "border-green-200",
        bg: "bg-green-50",
        dotBg: "bg-green-500",
        text: "text-green-700",
      };

  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex gap-3 w-full items-center">
            <div className="text-[#272930DE] text-3xl font-semibold">
              {title}
            </div>
            <div>
              <div
                className={`py-1 px-3 gap-1.5 flex border ${colorClasses.border} ${colorClasses.bg} rounded-full items-center`}
              >
                <div className={`w-2 h-2 rounded-full ${colorClasses.dotBg}`} />
                <div className={`text-sm font-medium ${colorClasses.text}`}>
                  {isLive ? "Live" : "Passed"}
                </div>
              </div>
            </div>
          </div>
          <a
            href={link}
            className="py-2.5 px-3.5 gap-1 rounded-full border border-[#D92D20] bg-[#F04438] text-white lg:flex hidden shrink-0 transition hover:scale-105"
          >
            <div>View projects</div>
            <img src="/chevron-right.svg" alt="" />
          </a>
        </div>
        <div className="mt-1 text-[#4C4E64AD] text-lg">{date}</div>
        <a
          href={link}
          className="py-2.5 px-3.5 gap-1 rounded-full border border-[#D92D20] bg-[#F04438] text-white flex lg:hidden justify-center mt-4 mb-3"
        >
          <div>View project</div>
          <img src="/chevron-right.svg" alt="" />
        </a>
      </div>
      <hr className="border-[#4C4E641F] mt-3 mb-5" />
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
        <OPStatsCard
          title={isLive ? "Projects" : "Projects Rewarded"}
          value={projectRewardedParsed}
        />
        <OPStatsCard title="Total OP" value={totalOP} hasIconOP />
        {isLive ? (
          <div className="col-span-2">
            <OPStatsCard title="Voting Period" value={votingPeriod || date} />
          </div>
        ) : (
          <>
            <OPStatsCard
              title="Median Funding Awarded"
              value={medianFundingAwarded}
              hasIconOP
            />
            <OPStatsCard
              title="Top Categories"
              value={topCategories}
              size="2xl"
            />
          </>
        )}
      </div>
    </div>
  );
};
