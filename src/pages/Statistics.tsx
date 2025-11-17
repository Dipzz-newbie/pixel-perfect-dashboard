import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Statistics = () => {
  const stats = [
    {
      title: "Total Income",
      amount: "₦1,289,000",
      change: "+12.5%",
      trend: "up" as const,
      icon: TrendingUp,
    },
    {
      title: "Total Expenses",
      amount: "₦856,450",
      change: "-8.3%",
      trend: "down" as const,
      icon: TrendingDown,
    },
    {
      title: "Net Savings",
      amount: "₦432,550",
      change: "+24.7%",
      trend: "up" as const,
      icon: TrendingUp,
    },
    {
      title: "Transactions",
      amount: "142",
      change: "+18.2%",
      trend: "up" as const,
      icon: TrendingUp,
    },
  ];

  const categories = [
    { name: "Food & Dining", amount: "₦145,000", percentage: 35, color: "bg-avatar-pink" },
    { name: "Shopping", amount: "₦98,500", percentage: 25, color: "bg-avatar-yellow" },
    { name: "Transportation", amount: "₦67,200", percentage: 18, color: "bg-avatar-blue" },
    { name: "Entertainment", amount: "₦45,800", percentage: 12, color: "bg-avatar-purple" },
    { name: "Others", amount: "₦38,950", percentage: 10, color: "bg-avatar-green" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Statistics</h1>
            <p className="text-muted-foreground">Your financial overview and insights</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">This Week</Button>
            <Button variant="outline">This Month</Button>
            <Button>This Year</Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  stat.trend === "up" ? "bg-green-100" : "bg-red-100"
                }`}>
                  <stat.icon className={`w-6 h-6 ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`} />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}>
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  {stat.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{stat.amount}</h3>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Spending by Category */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">Spending by Category</h2>
            <div className="space-y-4">
              {categories.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{category.name}</span>
                    <span className="text-sm font-semibold text-foreground">{category.amount}</span>
                  </div>
                  <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${category.color} rounded-full transition-all`}
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Monthly Overview */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">Monthly Overview</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Average Daily Spending</p>
                  <p className="text-2xl font-bold text-foreground">₦28,548</p>
                </div>
                <TrendingDown className="w-8 h-8 text-green-600" />
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Largest Transaction</p>
                  <p className="text-2xl font-bold text-foreground">₦340,000</p>
                </div>
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Most Frequent Category</p>
                  <p className="text-2xl font-bold text-foreground">Food & Dining</p>
                </div>
                <div className="w-8 h-8 bg-avatar-pink rounded-full" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
