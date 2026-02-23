import { Dot } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function RecentActivity() {
  const activities = [
    {
      id: 1,
      user: "Michael Chen",
      avatar: "",
      fallback: "MC",
      action: "Submitted a task to",
      target: "Performance Optimization",
      time: "1 days ago",
    },
    {
      id: 2,
      user: "Dina Kurnia",
      avatar: "",
      fallback: "DK",
      action: "Submitted a task to",
      target: "Cloud Migration Project",
      time: "3 days ago",
    },
    {
      id: 3,
      user: "Alex Johnson",
      avatar: "",
      fallback: "AJ",
      action: "Create",
      target: "New Project",
      time: "2 weeks ago",
    },
  ];
  return (
    <Card className="shadow-xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {activities.map((item) => {
          return (
            <div key={item.id} className="flex items-start gap-4">
              <Avatar className="h-10 w-10 border">
                <AvatarFallback>{item.fallback}</AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-1">
                <p className="text-sm">
                  <span className="font-medium">{item.user}</span> {item.action}{" "}
                  <span className="font-medium">{item.target}</span>
                </p>

                <div className="flex items-center text-xs text-primary">
                  <Dot />
                  <span>{item.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

export default RecentActivity;
