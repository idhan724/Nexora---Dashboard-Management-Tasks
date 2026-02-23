import data from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useLocation } from "react-router-dom";
import SlideInRight from "@/components/animation/SlideInRight";
import SlideInLeft from "@/components/animation/SlideInLeft";
import { motion } from "motion/react";
import {
  SectionCards,
  type TeamMemberProps,
  type TeamsStat,
} from "@/components/sections-cards";
import { FolderCheckIcon, UserCheck2, Users2 } from "lucide-react";
import { pageContainer, pageItem } from "@/components/animation/Variants";

const MotionButton = motion(Button);
function Teams() {
  const location = useLocation();
  const title =
    data.navMain.find((i) => i.url === location.pathname)?.title ?? "Dashboard";

  const teamStats: TeamsStat[] = [
    {
      variant: "teams",
      title: "Total Members",
      value: "12",
      icon: Users2,
    },
    {
      variant: "teams",
      title: "Active Members",
      value: "8",
      icon: UserCheck2,
    },
    {
      variant: "teams",
      title: "Tasks Assigned",
      value: "107",
      icon: FolderCheckIcon,
    },
  ];

  const teamMember: TeamMemberProps[] = [
    {
      variant: "member",
      avatar: "https://github.com/shadcn.png",
      username: "Alex Johnson",
      role: "Project Manager",
      completed: 6,
      total: 9,
      status: "Active",
    },
    {
      variant: "member",
      avatar: "https://github.com/shadcn.png",
      username: "Alex Johnson",
      role: "Project Manager",
      completed: 11,
      total: 14,
      status: "Active",
    },
    {
      variant: "member",
      avatar: "https://github.com/shadcn.png",
      username: "Alex Johnson",
      role: "Project Manager",
      completed: 13,
      total: 13,
      status: "On Leave",
    },
    {
      variant: "member",
      avatar: "https://github.com/shadcn.png",
      username: "Alex Johnson",
      role: "Project Manager",
      completed: 7,
      total: 12,
      status: "Active",
    },
    {
      variant: "member",
      avatar: "https://github.com/shadcn.png",
      username: "Alex Johnson",
      role: "Project Manager",
      completed: 11,
      total: 11,
      status: "Active",
    },
    {
      variant: "member",
      avatar: "https://github.com/shadcn.png",
      username: "Alex Johnson",
      role: "Project Manager",
      completed: 7,
      total: 13,
      status: "Active",
    },
    {
      variant: "member",
      avatar: "https://github.com/shadcn.png",
      username: "Alex Johnson",
      role: "Project Manager",
      completed: 6,
      total: 11,
      status: "Active",
    },
    {
      variant: "member",
      avatar: "https://github.com/shadcn.png",
      username: "Alex Johnson",
      role: "Project Manager",
      completed: 5,
      total: 10,
      status: "Active",
    },
    {
      variant: "member",
      avatar: "https://github.com/shadcn.png",
      username: "Alex Johnson",
      role: "Project Manager",
      completed: 11,
      total: 11,
      status: "On Leave",
    },
    {
      variant: "member",
      avatar: "https://github.com/shadcn.png",
      username: "Alex Johnson",
      role: "Project Manager",
      completed: 9,
      total: 13,
      status: "Active",
    },
    {
      variant: "member",
      avatar: "https://github.com/shadcn.png",
      username: "Alex Johnson",
      role: "Project Manager",
      completed: 9,
      total: 14,
      status: "On Leave",
    },
    {
      variant: "member",
      avatar: "https://github.com/shadcn.png",
      username: "Alex Johnson",
      role: "Project Manager",
      completed: 12,
      total: 12,
      status: "On Leave",
    },
  ];
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex justify-between items-center px-4 lg:px-6 pt-3">
          <SlideInRight className="font-semibold text-3xl">
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
              Invite Member
            </MotionButton>
          </SlideInLeft>
        </div>
        <motion.div
          variants={pageContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-4 py-4 md:gap-6 md:py-6"
        >
          <motion.div variants={pageItem}>
            <SectionCards data={teamStats} />
          </motion.div>
          <motion.div variants={pageItem}>
            <SectionCards data={teamMember} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Teams;
