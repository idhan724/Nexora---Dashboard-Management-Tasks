export const TOTAL_PROJECTS = 68;
export const chartData = [
  { date: "2026-06-01", completed: 2, onTimeCompleted: 2 },
  { date: "2026-06-02", completed: 8, onTimeCompleted: 6 },
  { date: "2026-06-03", completed: 12, onTimeCompleted: 10 },
  { date: "2026-06-04", completed: 17, onTimeCompleted: 13 },
  { date: "2026-06-05", completed: 17, onTimeCompleted: 13 },
  { date: "2026-06-06", completed: 17, onTimeCompleted: 13 },
  { date: "2026-06-07", completed: 17, onTimeCompleted: 13 },
  { date: "2026-06-08", completed: 17, onTimeCompleted: 13 },
  { date: "2026-06-09", completed: 17, onTimeCompleted: 13 },
  { date: "2026-06-10", completed: 23, onTimeCompleted: 16 },
  { date: "2026-06-11", completed: 27, onTimeCompleted: 18 },
  { date: "2026-06-12", completed: 29, onTimeCompleted: 20 },
  { date: "2026-06-13", completed: 33, onTimeCompleted: 23 },
  { date: "2026-06-14", completed: 33, onTimeCompleted: 23 },
  { date: "2026-06-15", completed: 33, onTimeCompleted: 23 },
  { date: "2026-06-16", completed: 39, onTimeCompleted: 28 },
  { date: "2026-06-17", completed: 42, onTimeCompleted: 31 },
  { date: "2026-06-18", completed: 43, onTimeCompleted: 32 },
  { date: "2026-06-19", completed: 44, onTimeCompleted: 33 },
  { date: "2026-06-20", completed: 45, onTimeCompleted: 34 },
  { date: "2026-06-21", completed: 46, onTimeCompleted: 35 },
  { date: "2026-06-22", completed: 47, onTimeCompleted: 36 },
  { date: "2026-06-23", completed: 48, onTimeCompleted: 37 },
  { date: "2026-06-24", completed: 49, onTimeCompleted: 38 },
  { date: "2026-06-25", completed: 49, onTimeCompleted: 38 },
  { date: "2026-06-26", completed: 50, onTimeCompleted: 39 },
  { date: "2026-06-27", completed: 51, onTimeCompleted: 39 },
  { date: "2026-06-28", completed: 52, onTimeCompleted: 40 },
  { date: "2026-06-29", completed: 53, onTimeCompleted: 41 },
  { date: "2026-06-30", completed: 54, onTimeCompleted: 41 },
].map((i) => ({
  ...i,
  remaining: TOTAL_PROJECTS - i.completed,
}));

export type ChartType = {
  date: string;
  completed: number;
  remaining: number;
  onTimeCompleted: number;
};

export function getFilteredData(
  data: ChartType[],
  timeRange: "7d" | "30d"
) {
  const referenceDate = new Date(data[data.length - 1].date);
  let daysToSubtract = timeRange === "7d" ? 7 : 30;
 
  const startDate = new Date(referenceDate);
  startDate.setDate(startDate.getDate() - daysToSubtract);

  return data.filter((item) => {
    const date = new Date(item.date);
    return date >= startDate;
  });
}
