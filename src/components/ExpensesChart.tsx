import { Card } from "@/components/ui/card";

const ExpensesChart = () => {
  return (
    <Card className="p-6 border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-foreground">All Expenses</h3>
        <select className="text-sm text-muted-foreground border border-border rounded-lg px-3 py-1 bg-background">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Daily</option>
        </select>
      </div>

      {/* Donut chart */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-40 h-40">
          {/* SVG Donut Chart */}
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(var(--chart-background))"
              strokeWidth="12"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(var(--chart-primary))"
              strokeWidth="12"
              strokeDasharray="251.2"
              strokeDashoffset="62.8"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-foreground">60.8%</span>
            <span className="text-xs text-muted-foreground">Total transactions</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-stat-received" />
          <span className="text-sm text-muted-foreground">Received</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-stat-sent" />
          <span className="text-sm text-muted-foreground">Sent</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Daily</p>
          <p className="font-bold text-foreground">₦289,000</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Weekly</p>
          <p className="font-bold text-foreground">₦120,000</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Monthly</p>
          <p className="font-bold text-foreground">₦438,000</p>
        </div>
      </div>
    </Card>
  );
};

export default ExpensesChart;
