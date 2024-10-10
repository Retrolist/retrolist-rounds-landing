interface OPStatsCard {
  title: string;
  value: string;
  hasIconOP?: boolean;
  size?: string;
}
export const OPStatsCard = ({
  hasIconOP = false,
  title,
  value,
  size="3xl",
}: OPStatsCard) => {
  return (
    <div className="px-4 py-5 flex flex-col gap-4 border border-[#EAECF0] bg-white shadow-sm rounded-xl">
      <div className="text-lg font-semibold text-[#101828]">{title}</div>
      <div className={`text-${size} text-[#272930DE] font-semibold flex gap-2 items-center`}>
        <div>{value}</div>
        {hasIconOP && (
          <div>
            <img src="/opIcon.svg" alt="" className="w-6 h-6" />
          </div>
        )}
      </div>
    </div>
  );
};
