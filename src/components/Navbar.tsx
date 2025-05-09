
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Bridge", path: "/bridge" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleConnectWallet = () => {
    // Placeholder for wallet connection
    toast.success("Wallet connected successfully", {
      description: "Connected to Phantom Wallet",
      action: {
        label: "View",
        onClick: () => console.log("Viewed wallet"),
      },
    });
    setWalletConnected(true);
  };

  const handleDisconnectWallet = () => {
    toast.info("Wallet disconnected");
    setWalletConnected(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-2 bg-background/90 backdrop-blur-lg shadow-md"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-forge-purple"
        >
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-forge-purple to-forge-dark-purple flex items-center justify-center shadow-lg animate-pulse-glow">
            <span className="text-white">FN</span>
          </div>
          <span className="hidden sm:inline">ForgeNexus</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "nav-link",
                location.pathname === link.path && "active"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-forge-purple hover:text-forge-dark-purple hover:bg-forge-purple/10"
            asChild
          >
            <Link to="/bridge">
              Bridge Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button
            className="glow-button"
            onClick={walletConnected ? handleDisconnectWallet : handleConnectWallet}
          >
            {walletConnected ? "Disconnect Wallet" : "Connect Wallet"}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-forge-purple" />
          ) : (
            <Menu className="h-6 w-6 text-forge-purple" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-card/95 backdrop-blur-lg border-t border-white/10 pt-4 pb-6 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "nav-link py-2",
                  location.pathname === link.path && "active"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <Button 
                variant="outline" 
                className="border-forge-purple/50 text-forge-purple"
                asChild
              >
                <Link to="/bridge" onClick={() => setIsMenuOpen(false)}>
                  Bridge Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button
                className="glow-button"
                onClick={() => {
                  if (walletConnected) {
                    handleDisconnectWallet();
                  } else {
                    handleConnectWallet();
                  }
                  setIsMenuOpen(false);
                }}
              >
                {walletConnected ? "Disconnect Wallet" : "Connect Wallet"}
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
