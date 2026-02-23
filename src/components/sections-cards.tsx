import { type LucideIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { container, itemInDown } from "@/components/animation/Variants";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import CircularProgress from "./CircularProgress";
import { Button } from "@/components/ui/button";
import Counter from "@/components/animation/Counter";

type StatTone = "red" | "green" | "gray" | "orange";
type StatusProjectProp = "In Progress" | "Overdue";
type StatusTeamProp = "Active" | "On Leave";

export type DefaultStat = {
  variant: "default";
  title: string;
  value: string;
  icon: LucideIcon;
  tone: StatTone;
};

export type ProjectStat = {
  variant: "project";
  title: string;
  description: string;
  completed: number;
  total: number;
  deadline: string;
  priority: "Low" | "Medium" | "High";
  status: StatusProjectProp;
};

export type AnalyticsStat = {
  variant: "analytics";
  label: string;
  value: number | string;
  completion?: number;
  onTime?: number;
  totalProject?: number;
  description: string;
};

export type TeamsStat = {
  variant: "teams";
  title: string;
  value: string;
  icon: LucideIcon;
};

export type TeamMemberProps = {
  variant: "member";
  avatar: string;
  username: string;
  role: string;
  completed: number;
  total: number;
  status: StatusTeamProp;
};

type Stat =
  | DefaultStat
  | ProjectStat
  | AnalyticsStat
  | TeamsStat
  | TeamMemberProps;

type SectionCards = {
  data: Stat[];
};

const MotionCard = motion(Card);

export function SectionCards({ data }: SectionCards) {
  const toneStyles: Record<StatTone, string> = {
    red: "dark:text-red-500",
    green: "dark:text-emerald-500",
    gray: "dark:text-gray-300",
    orange: "dark:text-orange-500",
  };

  const bgToneStyles: Record<StatTone, string> = {
    red: "bg-linear-to-b from-red-500 to-red-700/70",
    green: "bg-linear-to-b from-emerald-500 to-emerald-700/70",
    gray: "bg-linear-to-b from-gray-500 to-gray-700/70",
    orange: "bg-linear-to-b from-orange-500 to-orange-700/70",
  };

  const bgBadgeTone: Record<StatusProjectProp, string> = {
    Overdue: "bg-red-500 text-white",
    "In Progress": "bg-blue-500 text-white",
  };

  const statusTone: Record<StatusTeamProp, string> = {
    Active: "bg-green-500",
    "On Leave": "bg-red-500",
  };

  const isDefaultVariant = data.every((i) => i.variant === "default");
  const isProjectVariant = data.every((i) => i.variant === "project");
  const isTeamVariant = data.every((i) => i.variant === "teams");
  const isTeamMemberVariant = data.every((i) => i.variant === "member");

  const gridCols =
    isProjectVariant || isTeamVariant || isTeamMemberVariant
      ? "@5xl/main:grid-cols-3"
      : "@5xl/main:grid-cols-4";

  const VariantGradient =
    !isDefaultVariant &&
    "*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card";

  return (
    <motion.div
      variants={container}
      initial={isTeamMemberVariant ? undefined : "hidden"}
      whileInView={isTeamMemberVariant ? undefined : "show"}
      viewport={{ once: true, amount: 0.2 }}
      className={cn(
        "*:data-[slot=card]:bg-linear-to-t dark:*:data-[slot=card]:from-card/5 dark:*:data-[slot=card]:via-card/80  dark:*:data-[slot=card]:to-fuchsia-700/20 gap-4 px-4 lg:px-6 grid grid-cols-1 @xl/main:grid-cols-2",
        gridCols,
        VariantGradient,
      )}
    >
      {data.map((i) => (
        <MotionCard
          variants={itemInDown}
          whileHover={{
            scale: 1.04,
            y: -5,
            boxShadow: "0 28px 60px rgba(0,0,0,0.45)",
            transition: {
              type: "spring",
              stiffness: 250,
            },
          }}
          className={cn(
            "@container/card",
            i.variant === "default" && bgToneStyles[i.tone],
          )}
          key={
            i.variant === "analytics"
              ? i.label
              : i.variant === "member"
                ? i.username
                : i.title
          }
        >
          {i.variant === "default" && (
            <CardHeader className="space-y-2">
              <div className="flex items-center justify-between">
                <CardDescription className="tracking-wide text-muted">
                  {i.title}
                </CardDescription>
                <i.icon className={toneStyles[i.tone]} />
              </div>

              <CardTitle
                className={cn(
                  "text-5xl font-semibold tabular-nums @[350px]/card:text-3xl text-secondary",
                  toneStyles[i.tone],
                )}
              >
                {i.value}
              </CardTitle>
            </CardHeader>
          )}
          {i.variant === "project" && (
            <>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">{i.title}</CardTitle>
                <Badge className={bgBadgeTone[i.status]}>{i.status}</Badge>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{i.description}</p>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>
                      {i.completed}/{i.total} Tasks
                    </span>
                    <span>{Math.round((i.completed / i.total) * 100)}%</span>
                  </div>
                  <Progress value={Math.round((i.completed / i.total) * 100)} />
                </div>

                <div className="flex justify-between text-sm">
                  <span>Deadline: {i.deadline}</span>
                  <Badge variant="outline">{i.priority}</Badge>
                </div>
              </CardContent>
            </>
          )}
          {i.variant === "analytics" && (
            <CardContent className="flex items-center gap-5">
              {typeof i.value === "number" && (
                <CircularProgress value={i.value} size={80} />
              )}
              <div className="space-y-1">
                <CardDescription>{i.label}</CardDescription>
                {typeof i.value !== "number" && (
                  <CardTitle className="text-lg">{i.value}</CardTitle>
                )}
                {i.label === "Completion Rate" &&
                  i.completion !== undefined && (
                    <CardTitle className="text-lg">
                      <Counter value={i.completion} /> / {i.totalProject}
                    </CardTitle>
                  )}
                {i.label === "On-Time Delivery" &&
                  i.completion !== undefined &&
                  i.onTime !== undefined && (
                    <CardTitle className="text-lg">
                      <Counter value={i.onTime} /> / {i.completion}
                    </CardTitle>
                  )}
                <p className="text-sm text-muted-foreground">{i.description}</p>
              </div>
            </CardContent>
          )}
          {i.variant === "teams" && (
            <CardHeader className="space-y-2">
              <div className="flex items-center justify-between">
                <CardDescription className="tracking-wide">
                  {i.title}
                </CardDescription>
                <i.icon />
              </div>

              <CardTitle className="text-5xl font-semibold tabular-nums @[350px]/card:text-3xl">
                {i.value}
              </CardTitle>
            </CardHeader>
          )}
          {i.variant === "member" && (
            <>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={i.avatar} alt={i.username} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{i.username}</CardTitle>
                    <CardDescription className="tracking-wide">
                      {i.role}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm mb-1">
                  <span>
                    {i.completed}/{i.total} Tasks
                  </span>
                  <span>{Math.round((i.completed / i.total) * 100)}%</span>
                </div>
                <Progress value={Math.round((i.completed / i.total) * 100)} />
              </CardContent>
              <CardFooter className="flex justify-between text-sm items-center">
                <p className="font-semibold text-lg">
                  Status:{" "}
                  <Badge
                    className={cn(
                      "font-semibold text-white",
                      statusTone[i.status],
                    )}
                  >
                    {i.status}
                  </Badge>
                </p>

                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 hover:-translate-y-1.5 transition-all duration-300 text-white font-semibold"
                >
                  View Profile
                </Button>
              </CardFooter>
            </>
          )}
        </MotionCard>
      ))}
    </motion.div>
  );
}
