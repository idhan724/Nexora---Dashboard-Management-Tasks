import * as React from "react";
import data from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusIcon } from "lucide-react";
import SlideInRight from "@/components/animation/SlideInRight";
import SlideInLeft from "@/components/animation/SlideInLeft";
import { motion } from "motion/react";
import { SectionCards, type ProjectStat } from "@/components/sections-cards";

const projectData: ProjectStat[] = [
  {
    variant: "project",
    title: "UI/UX Improvement Initiative",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officia autem eveniet at eos laboriosam cum nam repellendus qui accusamus! Temporibus illo cum, at dolor praesentium quos consectetur nobis veniam!",
    completed: 3,
    total: 7,
    deadline: "30 July 2026",
    priority: "Low",
    status: "In Progress",
  },
  {
    variant: "project",
    title: "Cloud Migration Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officia autem eveniet at eos laboriosam cum nam repellendus qui accusamus! Temporibus illo cum, at dolor praesentium quos consectetur nobis veniam!",
    completed: 20,
    total: 23,

    deadline: "1 July 2026",
    priority: "High",
    status: "Overdue",
  },
  {
    variant: "project",
    title: "Website Redesign Company Profile",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officia autem eveniet at eos laboriosam cum nam repellendus qui accusamus! Temporibus illo cum, at dolor praesentium quos consectetur nobis veniam!",
    completed: 7,
    total: 17,

    deadline: "13 June 2026",
    priority: "High",
    status: "Overdue",
  },
  {
    variant: "project",
    title: "Mobile App Development v2.0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officia autem eveniet at eos laboriosam cum nam repellendus qui accusamus! Temporibus illo cum, at dolor praesentium quos consectetur nobis veniam!",
    completed: 13,
    total: 27,

    deadline: "1 August 2026",
    priority: "Low",
    status: "In Progress",
  },
  {
    variant: "project",
    title: "Admin Panel Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officia autem eveniet at eos laboriosam cum nam repellendus qui accusamus! Temporibus illo cum, at dolor praesentium quos consectetur nobis veniam!",
    completed: 15,
    total: 17,

    deadline: "27 June 2026",
    priority: "High",
    status: "Overdue",
  },
  {
    variant: "project",
    title: "Performance Optimization",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officia autem eveniet at eos laboriosam cum nam repellendus qui accusamus! Temporibus illo cum, at dolor praesentium quos consectetur nobis veniam!",
    completed: 5,
    total: 7,

    deadline: "29 July 2026",
    priority: "Low",
    status: "In Progress",
  },
  {
    variant: "project",
    title: "API Integration with Payment Gateway",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officia autem eveniet at eos laboriosam cum nam repellendus qui accusamus! Temporibus illo cum, at dolor praesentium quos consectetur nobis veniam!",
    completed: 7,
    total: 9,

    deadline: "29 June 2026",
    priority: "High",
    status: "Overdue",
  },
  {
    variant: "project",
    title: "Customer Support Optimization",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officia autem eveniet at eos laboriosam cum nam repellendus qui accusamus! Temporibus illo cum, at dolor praesentium quos consectetur nobis veniam!",
    completed: 9,
    total: 17,

    deadline: "24 July 2026",
    priority: "Low",
    status: "In Progress",
  },
  {
    variant: "project",
    title: "Data Analytics Dashboard",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officia autem eveniet at eos laboriosam cum nam repellendus qui accusamus! Temporibus illo cum, at dolor praesentium quos consectetur nobis veniam!",
    completed: 10,
    total: 13,

    deadline: "23 June 2026",
    priority: "High",
    status: "Overdue",
  },
  {
    variant: "project",
    title: "E-Commerce Platform Upgrade",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officia autem eveniet at eos laboriosam cum nam repellendus qui accusamus! Temporibus illo cum, at dolor praesentium quos consectetur nobis veniam!",
    completed: 19,
    total: 24,

    deadline: "18 June 2026",
    priority: "High",
    status: "Overdue",
  },
  {
    variant: "project",
    title: "Authentication & Security Update",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officia autem eveniet at eos laboriosam cum nam repellendus qui accusamus! Temporibus illo cum, at dolor praesentium quos consectetur nobis veniam!",
    completed: 4,
    total: 9,

    deadline: "9 July 2026",
    priority: "Medium",
    status: "In Progress",
  },
  {
    variant: "project",
    title: "User Onboarding Enhancement",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officia autem eveniet at eos laboriosam cum nam repellendus qui accusamus! Temporibus illo cum, at dolor praesentium quos consectetur nobis veniam!",
    completed: 13,
    total: 17,
    deadline: "25 July 2026",
    priority: "Low",
    status: "In Progress",
  },
  {
    variant: "project",
    title: "Subscription System Refactor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officia autem eveniet at eos laboriosam cum nam repellendus qui accusamus! Temporibus illo cum, at dolor praesentium quos consectetur nobis veniam!",
    completed: 19,
    total: 23,

    deadline: "13 June 2026",
    priority: "High",
    status: "Overdue",
  },
  {
    variant: "project",
    title: "Notification System Revamp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officia autem eveniet at eos laboriosam cum nam repellendus qui accusamus! Temporibus illo cum, at dolor praesentium quos consectetur nobis veniam!",
    completed: 25,
    total: 27,

    deadline: "14 June 2026",
    priority: "High",
    status: "Overdue",
  },
];

function Projects() {
  type FilterProps = "overdue" | "in progress" | "priority" | "all";
  const [filter, setFilter] = React.useState<FilterProps>("all");
  const title =
    data.navMain.find((i) => i.url === location.pathname)?.title ?? "Dashboard";

  const filteredProjectData = React.useMemo(() => {
    let data = [...projectData];
    if (filter !== "all" && filter !== "priority") {
      data = data.filter((i) => i.status.toLowerCase() === filter);
    }

    if (filter === "priority") {
      const priorityOrder = {
        High: 3,
        Medium: 2,
        Low: 1,
      };

      data.sort(
        (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority],
      );
    }

    return data;
  }, [filter]);

  const MotionButton = motion(Button);

  console.log("Filter:", filteredProjectData);
  console.log("Filter:", filteredProjectData.length);

  return (
    <div className="flex flex-1 flex-col ">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex justify-between items-center px-4 lg:px-6 pt-3">
          <SlideInRight as="h1" className="font-semibold text-3xl">
            {title}
          </SlideInRight>
          <SlideInLeft className="flex gap-3 items-center">
            <Select
              value={filter}
              onValueChange={(value) =>
                setFilter(
                  value as "all" | "in progress" | "overdue" | "priority",
                )
              }
            >
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="Filtered By" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Filtered By</SelectLabel>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="in progress">In Progress</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                  <SelectItem value="priority">Priorty</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
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
          <SectionCards key={filter} data={filteredProjectData} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
