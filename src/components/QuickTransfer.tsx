import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight, X } from "lucide-react";

const QuickTransfer = () => {
  const users = [
    { name: "A", color: "pink" as const },
    { name: "B", color: "yellow" as const },
    { name: "C", color: "orange" as const },
    { name: "D", color: "purple" as const },
    { name: "E", color: "yellow" as const },
    { name: "F", color: "green" as const },
  ];

  return (
    <div className="bg-card rounded-3xl p-6 border border-border">
      <h3 className="font-semibold text-foreground mb-4">Quick Transfer</h3>
      
      {/* User avatars */}
      <div className="flex items-center gap-2 mb-6">
        {users.map((user, index) => (
          <Avatar key={index} className={`bg-avatar-${user.color} border-2 border-background w-10 h-10`}>
            <AvatarFallback className="bg-transparent text-foreground font-semibold text-sm">
              {user.name}
            </AvatarFallback>
          </Avatar>
        ))}
        <button className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Card number input */}
      <div className="relative mb-4">
        <Input
          placeholder="Enter Card Number"
          className="pr-10 h-12 bg-background border-border"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Transfer button */}
      <Button className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
        Make Transfer
      </Button>
    </div>
  );
};

export default QuickTransfer;
