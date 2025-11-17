import { Home, CreditCard, Receipt, TrendingUp, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: "Home", active: true },
    { icon: CreditCard, label: "Cards", active: false },
    { icon: Receipt, label: "Transactions", active: false },
    { icon: TrendingUp, label: "Statistics", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <aside className="w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-6 flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <CreditCard className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-bold text-lg text-foreground">magicbank</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-8 space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.label}
            variant={item.active ? "default" : "ghost"}
            className={`w-full justify-start gap-3 ${
              item.active
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </Button>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-sidebar-border">
        <Button variant="ghost" className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent">
          <LogOut className="w-5 h-5" />
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
