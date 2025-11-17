import { DollarSign, Target, Zap, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

interface WalletCategoryProps {
  type: "dollar" | "targets" | "utilities" | "safelock";
}

const WalletCategory = ({ type }: WalletCategoryProps) => {
  const categories = {
    dollar: {
      icon: DollarSign,
      title: "Dollar Wallet",
      description: "Save in dollars. You've up to 8% p.a in dollars",
      amount: "₦490.56",
    },
    targets: {
      icon: Target,
      title: "Targets",
      description: "Save in dollars. You've up to 8% p.a in dollars",
      amount: "₦10000.56",
    },
    utilities: {
      icon: Zap,
      title: "Utilities",
      description: "Save in dollars. You've up to 8% p.a in dollars",
      amount: "₦234.11",
    },
    safelock: {
      icon: Lock,
      title: "Safelock",
      description: "Save in dollars. You've up to 8% p.a in dollars",
      amount: "₦250.66",
    },
  };

  const category = categories[type];
  const Icon = category.icon;

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="bg-primary rounded-xl w-12 h-12 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <h3 className="font-semibold text-foreground mb-1">{category.title}</h3>
      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{category.description}</p>
      <p className="text-xl font-bold text-foreground">{category.amount}</p>
    </Card>
  );
};

export default WalletCategory;
