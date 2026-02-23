import SlideInRight from "@/components/animation/SlideInRight";
import SlideInUp from "@/components/animation/SlideInUp";
import data from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { SectionCards, type AnalyticsStat } from "@/components/sections-cards";
import { chartData, getFilteredData, TOTAL_PROJECTS } from "@/lib/chart-utils";
import React from "react";
import { useLocation } from "react-router-dom";

function Analytics() {
  const [timeRange, setTimeRange] = React.useState<"7d" | "30d">("30d");
  const location = useLocation();
  const filteredData = React.useMemo(() => {
    return getFilteredData(chartData, timeRange);
  }, [timeRange]);

  const title =
    data.navMain.find((i) => i.url === location.pathname)?.title ?? "Dashboard";

  const firstItem = filteredData.at(0);
  const lastItem = filteredData.at(-1);

  if (!firstItem || !lastItem) return null;

  const completedInRange = lastItem.completed - firstItem.completed;

  const completionRate =
    TOTAL_PROJECTS > 0 ? completedInRange / TOTAL_PROJECTS : 0;

  const velocity =
    filteredData.length > 1 ? completedInRange / (filteredData.length - 1) : 0;

  const onTimeInRange = lastItem.onTimeCompleted - firstItem.onTimeCompleted;

  const onTimeRate =
    completedInRange > 0 ? onTimeInRange / completedInRange : 0;

  const daysToFinish =
    velocity > 0 ? Math.ceil(lastItem.remaining / velocity) : 0;

  const lastDate = filteredData.length
    ? new Date(filteredData[filteredData.length - 1].date)
    : null;

  const estimatedFinishDate =
    lastDate && daysToFinish > 0
      ? new Date(lastDate.getTime() + daysToFinish * 86400000)
      : null;

  const insightData: AnalyticsStat[] = [
    {
      variant: "analytics",
      label: "Completion Rate",
      value: Math.round(completionRate * 100),
      completion: completedInRange,
      totalProject: TOTAL_PROJECTS,
      description: "Project",
    },
    {
      variant: "analytics",
      label: "On-Time Delivery",
      value: Math.round(onTimeRate * 100),
      onTime: onTimeInRange,
      completion: completedInRange,
      description: "Delivered on schedule",
    },
    {
      variant: "analytics",
      label: "Avg Velocity",
      value: velocity.toFixed(1),
      description: `Last ${timeRange === "7d" ? "7" : "30"} days`,
    },
    {
      variant: "analytics",
      label: "Estimated Finish",
      value: estimatedFinishDate
        ? estimatedFinishDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "—",
      description: "Based on current pace",
    },
  ];
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2  px-4 lg:px-6 pt-3">
        <SlideInRight as="h1" className="font-semibold text-3xl">
          {title}
        </SlideInRight>
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards data={insightData} />
          <SlideInUp>
            <ChartAreaInteractive
              data={filteredData}
              timeRange={timeRange}
              setTimeRange={setTimeRange}
            />
          </SlideInUp>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
