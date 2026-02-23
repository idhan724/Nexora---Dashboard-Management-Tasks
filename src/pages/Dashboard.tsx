import * as React from "react";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { SectionCards, type DefaultStat } from "@/components/sections-cards";
import { chartData, getFilteredData } from "@/lib/chart-utils";
import data from "@/components/app-sidebar";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RecentActivity from "@/components/RecentActivity";
import SlideInRight from "@/components/animation/SlideInRight";
import SlideInLeft from "@/components/animation/SlideInLeft";
import { motion } from "motion/react";
import {
  CalendarX,
  Folder,
  FolderCheck,
  FolderDot,
  PlusIcon,
} from "lucide-react";

function Dashboard() {
  const [timeRange, setTimeRange] = React.useState<"7d" | "30d">("30d");
  const location = useLocation();
  const filteredData = React.useMemo(() => {
    return getFilteredData(chartData, timeRange);
  }, [timeRange]);

  const title =
    data.navMain.find((i) => i.url === location.pathname)?.title ?? "Dashboard";

  const MotionButton = motion(Button);

  const stats: DefaultStat[] = [
    {
      variant: "default",
      title: "Total Projects",
      value: "68",
      icon: Folder,
      tone: "orange",
    },
    {
      variant: "default",
      title: "Completed Projects",
      value: "54",
      icon: FolderCheck,
      tone: "green",
    },
    {
      variant: "default",
      title: "Remaining Projects",
      value: "14",
      icon: FolderDot,
      tone: "gray",
    },
    {
      variant: "default",
      title: "Overdue Projects",
      value: "8",
      icon: CalendarX,
      tone: "red",
    },
  ];
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex justify-between items-center px-4 lg:px-6 pt-3">
          <SlideInRight as="h1" className="font-semibold text-3xl">
            {title}
          </SlideInRight>
          <SlideInLeft>
            <MotionButton
              whileHover={{
                scale: 1.04,
                y: -4,
                transition: {
                  type: "spring",
                  stiffness: 250,
                },
              }}
              whileTap={{
                scale: 0.95,
                y: -1,
                transition: { duration: 0.15 },
              }}
            >
              <PlusIcon />
              New Project
            </MotionButton>
          </SlideInLeft>
        </div>
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards data={stats} />

          <div className="px-4 lg:px-6 grid lg:grid-cols-5 gap-8">
            <SlideInRight className="col-span-3">
              <ChartAreaInteractive
                data={filteredData}
                timeRange={timeRange}
                setTimeRange={setTimeRange}
              />
            </SlideInRight>
            <SlideInLeft className="col-span-2">
              <RecentActivity />
            </SlideInLeft>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
