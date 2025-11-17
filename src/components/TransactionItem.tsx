import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TransactionItemProps {
  type: "fund" | "transfer";
  recipient?: string;
  amount: string;
  timestamp: string;
  color: "pink" | "yellow" | "green" | "purple" | "blue" | "orange";
}

const TransactionItem = ({ type, recipient, amount, timestamp, color }: TransactionItemProps) => {
  const isPositive = type === "fund";
  
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <Avatar className={`bg-avatar-${color} border-0`}>
          <AvatarFallback className="bg-transparent text-foreground font-semibold">
            {recipient ? recipient.charAt(0).toUpperCase() : "FW"}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-foreground">{type === "fund" ? "Fund wallet" : "Transfer"}</p>
          <p className="text-sm text-muted-foreground">
            {recipient ? `to ${recipient}` : "to Janson Balooh"}
          </p>
          <p className="text-xs text-muted-foreground mt-1">{timestamp}</p>
        </div>
      </div>
      <p className={`font-bold ${isPositive ? "text-foreground" : "text-foreground"}`}>
        {isPositive ? "+" : "-"}{amount}
      </p>
    </div>
  );
};

export default TransactionItem;
