import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, FolderKanban, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Projects",
    value: "12",
    description: "Active construction projects",
    icon: FolderKanban,
    trend: "+2 this month",
  },
  {
    title: "Team Members",
    value: "48",
    description: "Active team members",
    icon: Users,
    trend: "+4 this month",
  },
  {
    title: "Completion Rate",
    value: "94%",
    description: "On-time project delivery",
    icon: TrendingUp,
    trend: "+5% from last month",
  },
  {
    title: "Active Tasks",
    value: "234",
    description: "Tasks in progress",
    icon: Activity,
    trend: "42 due this week",
  },
];

export function DashboardContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2">
          Welcome to your Inclusive SBuilds console dashboard
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                <p className="text-xs text-primary mt-2">{stat.trend}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
            <CardDescription>Your latest construction projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Downtown Office Complex", status: "In Progress", progress: 65 },
                { name: "Residential Tower Phase 2", status: "Planning", progress: 20 },
                { name: "Community Center Renovation", status: "In Progress", progress: 80 },
              ].map((project) => (
                <div key={project.name} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{project.name}</p>
                    <p className="text-xs text-muted-foreground">{project.status}</p>
                  </div>
                  <div className="text-sm font-medium">{project.progress}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Activity</CardTitle>
            <CardDescription>Recent updates from your team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { user: "John Smith", action: "Updated project timeline", time: "2 hours ago" },
                { user: "Sarah Johnson", action: "Added new materials list", time: "4 hours ago" },
                { user: "Mike Davis", action: "Completed safety inspection", time: "6 hours ago" },
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">
                      {activity.user.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.user}</p>
                    <p className="text-xs text-muted-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
