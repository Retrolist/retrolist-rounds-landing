import { OPStatsCard } from "./opstatscard";

interface RetrolistRoundProps {
  link: string;
  title: string;
  isLive?: boolean;
  date: string;
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
  totalOP,
}: RetrolistRoundProps) => {
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
      <a href={link}>
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="text-[#272930DE] text-3xl font-semibold">
              {title}
            </div>
            <div
              className={`py-1 px-3 gap-1.5 flex border ${colorClasses.border} ${colorClasses.bg} rounded-full items-center`}
            >
              <div className={`w-2 h-2 rounded-full ${colorClasses.dotBg}`} />
              <div className={`text-sm font-medium ${colorClasses.text}`}>
                {isLive ? "Live" : "Passed"}
              </div>
            </div>
          </div>
          <a
            href=""
            className="py-2.5 px-3.5 flex gap-1 rounded-full border border-[#D92D20] bg-[#F04438] text-white"
          >
            <div>View project</div>
            <img src="/chevron-right.svg" alt="" />
          </a>
        </div>
        <div className="mt-1 text-[#4C4E64AD] text-lg">{date}</div>
      </a>
      <hr className="border-[#4C4E641F] mt-3 mb-5" />
      <div className="grid grid-cols-4 gap-5">
        <OPStatsCard title="Projects rewarded" value={projectRewarded} />
        <OPStatsCard title="Total OP" value={totalOP} hasIconOP />
        <OPStatsCard
          title="Median Funding Awarded"
          value={medianFundingAwarded}
          hasIconOP
        />
        <OPStatsCard title="Top Categories" value={topCategories} />
      </div>
    </div>
  );
};
