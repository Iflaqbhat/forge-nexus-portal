
import React from "react";
import { ArrowRight, Bridge, Connect, View, Wallet } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: "wallet" | "view" | "bridge" | "connect";
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case "wallet":
        return <Wallet className="h-6 w-6 text-forge-purple" />;
      case "view":
        return <View className="h-6 w-6 text-forge-purple" />;
      case "bridge":
        return <Bridge className="h-6 w-6 text-forge-purple" />;
      case "connect":
        return <Connect className="h-6 w-6 text-forge-purple" />;
      default:
        return <ArrowRight className="h-6 w-6 text-forge-purple" />;
    }
  };

  return (
    <div className="glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-forge-purple/10 transition-all duration-300 group">
      <div className="h-12 w-12 rounded-full bg-forge-purple/20 flex items-center justify-center mb-4 group-hover:bg-forge-purple/30 transition-colors">
        {getIcon()}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
