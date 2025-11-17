import { Button } from "@/components/ui/button";

const WalletCard = () => {
  return (
    <div className="relative bg-wallet-card rounded-3xl p-8 overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-foreground/10 rounded-full -translate-y-1/2 translate-x-1/4" />
      
      <div className="relative z-10">
        <p className="text-wallet-foreground/80 text-sm mb-2">Wallet balance</p>
        <h2 className="text-wallet-foreground text-4xl font-bold mb-6">₦56,439.00</h2>
        <Button 
          variant="secondary" 
          className="bg-white hover:bg-white/90 text-foreground"
        >
          Fund wallet
        </Button>
      </div>
    </div>
  );
};

export default WalletCard;
