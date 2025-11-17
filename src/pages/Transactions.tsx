import { Search, Download, Filter, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Transactions = () => {
  const transactions = [
    {
      id: "TRX001",
      type: "Fund wallet",
      recipient: "Janson Balooh",
      amount: 289000,
      status: "completed",
      date: "4 hours ago",
      color: "pink" as const,
    },
    {
      id: "TRX002",
      type: "Transfer",
      recipient: "Jacob Jones",
      amount: -120000,
      status: "completed",
      date: "24 Mar, 2022 at 11:00 PM",
      color: "yellow" as const,
    },
    {
      id: "TRX003",
      type: "Transfer",
      recipient: "James Levin",
      amount: -340000,
      status: "completed",
      date: "26 Mar, 2022 at 09:00 AM",
      color: "purple" as const,
    },
    {
      id: "TRX004",
      type: "Transfer",
      recipient: "David Jones",
      amount: -34099,
      status: "completed",
      date: "30 Mar, 2022 at 04:00 PM",
      color: "green" as const,
    },
    {
      id: "TRX005",
      type: "Payment",
      recipient: "Netflix Subscription",
      amount: -5500,
      status: "completed",
      date: "01 Apr, 2022 at 08:30 AM",
      color: "blue" as const,
    },
    {
      id: "TRX006",
      type: "Refund",
      recipient: "Amazon Order",
      amount: 15000,
      status: "pending",
      date: "02 Apr, 2022 at 02:15 PM",
      color: "orange" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">All Transactions</h1>
            <p className="text-muted-foreground">View and manage your transaction history</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search transactions..." className="pl-10" />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button variant="outline" className="gap-2">
              Date Range
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </Card>

        {/* Transactions List */}
        <Card className="p-6">
          <div className="space-y-1">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 hover:bg-muted/50 rounded-xl transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4 flex-1">
                  <Avatar className={`bg-avatar-${transaction.color}`}>
                    <AvatarFallback className="bg-transparent text-foreground font-semibold">
                      {transaction.recipient.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-foreground">{transaction.type}</p>
                      <span className="text-xs text-muted-foreground">#{transaction.id}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{transaction.recipient}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className={`font-bold ${transaction.amount > 0 ? "text-green-600" : "text-foreground"}`}>
                      {transaction.amount > 0 ? "+" : ""}₦{Math.abs(transaction.amount).toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">{transaction.date}</p>
                  </div>
                  <Badge
                    variant={transaction.status === "completed" ? "default" : "secondary"}
                    className="min-w-[90px] justify-center"
                  >
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Transactions;
