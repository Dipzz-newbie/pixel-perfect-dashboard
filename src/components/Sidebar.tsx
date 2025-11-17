import { Home, CreditCard, Receipt, TrendingUp, Settings, LogOut } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: CreditCard, label: "Cards", path: "/cards" },
    { icon: Receipt, label: "Transactions", path: "/transactions" },
    { icon: TrendingUp, label: "Statistics", path: "/statistics" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col sticky top-0">
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
          <NavLink
            key={item.label}
            to={item.path}
            end
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
            activeClassName="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
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
