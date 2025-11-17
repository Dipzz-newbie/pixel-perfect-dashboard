import WalletCard from "@/components/WalletCard";
import WalletCategory from "@/components/WalletCategory";
import TransactionItem from "@/components/TransactionItem";
import QuickTransfer from "@/components/QuickTransfer";
import ExpensesChart from "@/components/ExpensesChart";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="max-w-[1400px] mx-auto p-8">
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
  );
};

export default Index;
