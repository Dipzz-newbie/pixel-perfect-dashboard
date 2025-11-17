import { CreditCard, Plus, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Cards = () => {
  const cards = [
    {
      type: "Virtual Card",
      number: "**** **** **** 4829",
      holder: "Ayomide Ajibade",
      expiry: "12/25",
      balance: "₦156,439.00",
      color: "from-primary to-foreground/90",
    },
    {
      type: "Physical Card",
      number: "**** **** **** 7291",
      holder: "Ayomide Ajibade",
      expiry: "08/26",
      balance: "₦89,250.00",
      color: "from-avatar-purple to-avatar-pink",
    },
    {
      type: "Dollar Card",
      number: "**** **** **** 3384",
      holder: "Ayomide Ajibade",
      expiry: "03/27",
      balance: "$2,450.00",
      color: "from-avatar-blue to-avatar-green",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">My Cards</h1>
            <p className="text-muted-foreground">Manage your cards and transactions</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add New Card
          </Button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${card.color} rounded-3xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-sm opacity-90 mb-1">{card.type}</p>
                  <p className="text-2xl font-bold">{card.balance}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                >
                  <MoreVertical className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-4">
                <p className="text-xl font-mono tracking-wider">{card.number}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs opacity-75">Card Holder</p>
                    <p className="font-medium">{card.holder}</p>
                  </div>
                  <div>
                    <p className="text-xs opacity-75">Expires</p>
                    <p className="font-medium">{card.expiry}</p>
                  </div>
                </div>
              </div>

              <CreditCard className="absolute bottom-6 right-6 w-12 h-12 opacity-20" />
            </div>
          ))}
        </div>

        {/* Card Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <CreditCard className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-1">Freeze Card</h3>
              <p className="text-sm text-muted-foreground">Temporarily disable</p>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <CreditCard className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-1">Set Limit</h3>
              <p className="text-sm text-muted-foreground">Control spending</p>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <CreditCard className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-1">Card Details</h3>
              <p className="text-sm text-muted-foreground">View full info</p>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="text-center">
              <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center mx-auto mb-3">
                <CreditCard className="w-6 h-6 text-destructive-foreground" />
              </div>
              <h3 className="font-semibold mb-1">Report Lost</h3>
              <p className="text-sm text-muted-foreground">Block immediately</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cards;
