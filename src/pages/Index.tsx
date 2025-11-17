import Sidebar from "@/components/Sidebar";
import WalletCard from "@/components/WalletCard";
import WalletCategory from "@/components/WalletCategory";
import TransactionItem from "@/components/TransactionItem";
import QuickTransfer from "@/components/QuickTransfer";
import ExpensesChart from "@/components/ExpensesChart";
import { Bell, MessageSquare, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="max-w-[1400px] mx-auto p-8">
          {/* Header */}
          <header className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Welcome back,</p>
              <h1 className="text-2xl font-bold text-foreground">Ayomide Ajibade</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <MessageSquare className="w-5 h-5 text-muted-foreground" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
              </Button>
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-primary text-primary-foreground">AA</AvatarFallback>
              </Avatar>
            </div>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="xl:col-span-2 space-y-6">
              {/* Wallet Card */}
              <WalletCard />

              {/* Wallet Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <WalletCategory type="dollar" />
                <WalletCategory type="targets" />
                <WalletCategory type="utilities" />
                <WalletCategory type="safelock" />
              </div>

              {/* Transactions */}
              <div className="bg-card rounded-3xl p-6 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-foreground">Transactions</h2>
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    See all <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                <div className="divide-y divide-border">
                  <TransactionItem
                    type="fund"
                    amount="₦289,000"
                    timestamp="4 hours ago"
                    color="pink"
                  />
                  <TransactionItem
                    type="transfer"
                    recipient="Jacob Jones"
                    amount="₦120,000"
                    timestamp="24 Mar, 2022 at 11:00 PM"
                    color="yellow"
                  />
                  <TransactionItem
                    type="transfer"
                    recipient="James Levin"
                    amount="₦340,000"
                    timestamp="26 Mar, 2022 at 09:00 AM"
                    color="purple"
                  />
                  <TransactionItem
                    type="transfer"
                    recipient="David Jones"
                    amount="₦34,099"
                    timestamp="30 Mar, 2022 at 04:00 PM"
                    color="green"
                  />
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              <ExpensesChart />
              <QuickTransfer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
