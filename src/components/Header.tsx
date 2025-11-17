import { Bell, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return { title: "Welcome back,", subtitle: "Ayomide Ajibade" };
      case "/cards":
        return { title: "My Cards", subtitle: "Manage your cards" };
      case "/transactions":
        return { title: "All Transactions", subtitle: "Transaction history" };
      case "/statistics":
        return { title: "Statistics", subtitle: "Financial insights" };
      case "/settings":
        return { title: "Settings", subtitle: "Account preferences" };
      default:
        return { title: "Welcome back,", subtitle: "Ayomide Ajibade" };
    }
  };

  const pageInfo = getPageTitle();

  return (
    <header className="border-b border-border bg-card">
      <div className="flex items-center justify-between px-8 py-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{pageInfo.title}</p>
          <h1 className="text-2xl font-bold text-foreground">{pageInfo.subtitle}</h1>
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
      </div>
    </header>
  );
};

export default Header;
